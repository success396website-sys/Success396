import { useCallback, useRef } from "react";
import { trackPurchase } from "@/lib/pixel";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      on: (event: string, callback: (response: Record<string, unknown>) => void) => void;
      open: () => void;
    };
  }
}

interface RazorpayOptions {
  amount: number; // in paise (e.g., 50000 = ₹500)
  currency?: string;
  name: string;
  description: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
  };
  onSuccess?: (response: RazorpayResponse) => void;
  onFailure?: (error: unknown) => void;
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_placeholder";

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function useRazorpay() {
  const isLoading = useRef(false);

  const openCheckout = useCallback(async (options: RazorpayOptions) => {
    if (isLoading.current) return;
    isLoading.current = true;

    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        throw new Error("Failed to load Razorpay SDK. Check your internet connection.");
      }

      const razorpayOptions = {
        key: RAZORPAY_KEY_ID,
        amount: options.amount,
        currency: options.currency || "INR",
        name: options.name,
        description: options.description,
        prefill: options.prefill || {},
        notes: options.notes || {},
        theme: {
          color: options.theme?.color || "#c5a059",
        },
        handler: (response: RazorpayResponse) => {
          // Fire Purchase pixel event once on successful payment
          trackPurchase(
            options.amount / 100,
            options.currency || "INR",
            options.name
          );
          options.onSuccess?.(response);
        },
        modal: {
          ondismiss: () => {
            options.onFailure?.({ reason: "dismissed" });
          },
        },
      };

      const rzp = new window.Razorpay(razorpayOptions);

      rzp.on("payment.failed", (response: Record<string, unknown>) => {
        options.onFailure?.(response.error);
      });

      rzp.open();
    } catch (error) {
      options.onFailure?.(error);
    } finally {
      isLoading.current = false;
    }
  }, []);

  return { openCheckout };
}
