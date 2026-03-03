import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Shield,
  Lock,
  Headphones,
  CreditCard,
  ChevronDown,
  ArrowLeft,
  Check,
  BookOpen,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";
import { useRazorpay, type RazorpayResponse } from "@/hooks/useRazorpay";

interface FormatData {
  formatId: string;
  title: string;
  price: string;
  amountInPaise: number;
  description: string;
  features: string[];
}

interface ShippingInfo {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

const emptyShipping: ShippingInfo = {
  fullName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pincode: "",
  country: "India",
};

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { openCheckout } = useRazorpay();

  const formatData = location.state as FormatData | null;
  const [shipping, setShipping] = useState<ShippingInfo>(emptyShipping);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ShippingInfo, string>>>({});
  const [loading, setLoading] = useState(false);
  const [lastPayment, setLastPayment] = useState<RazorpayResponse | null>(null);

  // If no format data, redirect back to book page
  useEffect(() => {
    if (!formatData) {
      navigate("/book", { replace: true });
    }
  }, [formatData, navigate]);

  if (!formatData) return null;

  const FormatIcon = formatData.formatId === "hardcover" ? BookOpen : FileText;

  const validateShipping = (): boolean => {
    const errors: Partial<Record<keyof ShippingInfo, string>> = {};
    if (!shipping.fullName.trim()) errors.fullName = "Name is required";
    if (!shipping.email.trim() || !/\S+@\S+\.\S+/.test(shipping.email)) errors.email = "Valid email is required";
    if (!shipping.phone.trim() || shipping.phone.trim().length < 10) errors.phone = "Valid phone number is required";
    if (!shipping.addressLine1.trim()) errors.addressLine1 = "Address is required";
    if (!shipping.city.trim()) errors.city = "City is required";
    if (!shipping.state.trim()) errors.state = "State is required";
    if (!shipping.pincode.trim() || shipping.pincode.trim().length < 5) errors.pincode = "Valid pincode is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const updateField = (field: keyof ShippingInfo, value: string) => {
    setShipping(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleProceedToPay = () => {
    if (!validateShipping()) return;

    setLoading(true);

    openCheckout({
      amount: formatData.amountInPaise,
      currency: "INR",
      name: "Success369",
      description: `${formatData.title} — Blueprint for Sustainable Success`,
      prefill: {
        name: shipping.fullName,
        email: shipping.email,
        contact: shipping.phone,
      },
      notes: {
        product: formatData.title,
        shipping_name: shipping.fullName,
        shipping_email: shipping.email,
        shipping_phone: shipping.phone,
        shipping_address: `${shipping.addressLine1}${shipping.addressLine2 ? ", " + shipping.addressLine2 : ""}`,
        shipping_city: shipping.city,
        shipping_state: shipping.state,
        shipping_pincode: shipping.pincode,
        shipping_country: shipping.country,
      },
      theme: {
        color: "#c5a059",
      },
      onSuccess: (response) => {
        setLastPayment(response);
        setLoading(false);
        toast.success(
          `Payment successful! ID: ${response.razorpay_payment_id}`,
          { duration: 8000 }
        );
      },
      onFailure: (error) => {
        setLoading(false);
        if (error?.reason === "dismissed") return;
        toast.error(
          error?.description || "Payment failed. Please try again.",
          { duration: 5000 }
        );
      },
    });
  };

  // Show success state
  if (lastPayment) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Payment Successful | Success369</title>
        </Helmet>

        {/* Header */}
        <header className="border-b border-border/40 bg-card/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 py-3 flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <div className="h-14 flex items-center">
                <img src={logo} alt="Success369" className="h-full object-contain dark:invert-0 invert" />
              </div>
            </Link>
            <div className="flex items-center gap-2 text-green-500">
              <Check size={18} />
              <span className="text-sm font-semibold">Payment Complete</span>
            </div>
          </div>
        </header>

        <div className="max-w-xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <Check size={36} className="text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-3">Payment Successful!</h1>
            <p className="text-muted-foreground">Thank you for your purchase. You'll receive a confirmation email shortly.</p>
          </motion.div>

          <div className="bg-card border border-border/50 rounded-2xl p-6 text-left space-y-3 mb-8">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Product</span>
              <span className="font-medium text-foreground">{formatData.title}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-medium text-foreground">{formatData.price}</span>
            </div>
            <div className="border-t border-border/40 pt-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Payment ID</span>
                <span className="font-mono text-xs text-foreground">{lastPayment.razorpay_payment_id}</span>
              </div>
            </div>
            {lastPayment.razorpay_order_id && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Order ID</span>
                <span className="font-mono text-xs text-foreground">{lastPayment.razorpay_order_id}</span>
              </div>
            )}
            <div className="border-t border-border/40 pt-3 mt-3">
              <p className="text-xs font-semibold text-muted-foreground mb-2">📦 Shipping To</p>
              <p className="text-sm text-foreground">{shipping.fullName}</p>
              <p className="text-sm text-muted-foreground">{shipping.addressLine1}{shipping.addressLine2 ? `, ${shipping.addressLine2}` : ""}</p>
              <p className="text-sm text-muted-foreground">{shipping.city}, {shipping.state} — {shipping.pincode}</p>
            </div>
          </div>

          <p className="text-muted-foreground/50 text-xs mb-6">ⓘ This is a test mode payment. No real charges were made.</p>

          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Book
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secure Checkout — {formatData.title} | Success369</title>
        <meta name="description" content={`Complete your purchase of ${formatData.title}`} />
      </Helmet>

      {/* Checkout Header */}
      <header className="border-b border-border/40 bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-3 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link
              to="/book"
              className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors"
            >
              <ArrowLeft size={18} className="text-foreground/60" />
            </Link>
            <Link to="/" className="flex items-center">
              <div className="h-14 flex items-center">
                <img src={logo} alt="Success369" className="h-full object-contain dark:invert-0 invert" />
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-2.5 text-muted-foreground/60">
            <Lock size={16} />
            <span className="text-sm font-semibold">Secure Checkout</span>
          </div>
        </div>
      </header>

      {/* Main Checkout */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16"
      >
        <div className="rounded-3xl bg-card border border-border/60 shadow-2xl overflow-hidden">

          {/* Two-Column Layout */}
          <div className="grid lg:grid-cols-[1fr_1.2fr]">
            
            {/* LEFT - Order Summary */}
            <div className="p-8 sm:p-12 text-left lg:border-r border-border/30 order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Review order details
              </h2>

              {/* Product Info */}
              <div className="flex items-start gap-5 pb-6 border-b border-border/40">
                <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 border border-border/30" style={{ width: '72px', height: '72px' }}>
                  <FormatIcon size={32} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-base leading-snug">{formatData.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{formatData.description}</p>
                  <div className="mt-3 space-y-2">
                    {formatData.features.map(f => (
                      <div key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <Check size={14} className="text-primary" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing Lines */}
              <div className="py-5 space-y-3.5 border-b border-border/40">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground font-medium">{formatData.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-green-500 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax/VAT</span>
                  <span className="text-foreground font-medium">₹0</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between py-5 border-b border-border/40">
                <span className="font-bold text-foreground text-xl">Total</span>
                <span className="font-bold text-foreground text-xl">INR {formatData.price}</span>
              </div>

              {/* Trust Badges */}
              <div className="mt-10">
                <p className="font-bold text-foreground text-base mb-6">Purchase with confidence</p>
                <div className="space-y-6">
                  {[
                    { icon: Shield, title: "Refund / Cancellation policy", desc: "Feel safe. 15 days for a Full refund where applicable." },
                    { icon: Lock, title: "Privacy and Security", desc: "All Personal Information you submit is Encrypted and Secure." },
                    { icon: Headphones, title: "Easy support & Help", desc: "Need help? Our support team is available at any time." },
                  ].map(item => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{item.title}</p>
                        <p className="text-muted-foreground text-xs leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Powered by */}
              <div className="mt-10 pt-6 border-t border-border/30 flex items-center gap-3 text-sm text-muted-foreground/50">
                <span>Powered by <span className="font-bold text-muted-foreground/70">Razorpay</span></span>
                <span>|</span>
                <Link to="/terms-conditions" className="hover:text-foreground/60 transition-colors">Terms</Link>
                <span>|</span>
                <Link to="/privacy-policy" className="hover:text-foreground/60 transition-colors">Privacy</Link>
              </div>
            </div>

            {/* RIGHT - Shipping & Payment Form */}
            <div className="p-8 sm:p-12 text-left bg-foreground/[0.02] order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Shipping & Payment
              </h2>

              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    value={shipping.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="John Doe"
                    className="w-full h-11 px-3.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                  {formErrors.fullName && <p className="text-red-400 text-xs mt-1">{formErrors.fullName}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-1.5">Email *</label>
                    <input
                      type="email"
                      value={shipping.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="john@email.com"
                      className="w-full h-11 px-3.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                    {formErrors.email && <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      value={shipping.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full h-11 px-3.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                    {formErrors.phone && <p className="text-red-400 text-xs mt-1">{formErrors.phone}</p>}
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 pt-3 pb-1">
                  <div className="flex-1 h-px bg-border/50" />
                  <span className="text-xs text-muted-foreground/50 uppercase tracking-[0.15em] font-semibold">Shipping Address</span>
                  <div className="flex-1 h-px bg-border/50" />
                </div>

                {/* Address Line 1 */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">Address Line 1 *</label>
                  <input
                    type="text"
                    value={shipping.addressLine1}
                    onChange={(e) => updateField("addressLine1", e.target.value)}
                    placeholder="123 Main St, Apt 4B"
                    className="w-full h-11 px-3.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                  {formErrors.addressLine1 && <p className="text-red-400 text-xs mt-1">{formErrors.addressLine1}</p>}
                </div>

                {/* Address Line 2 */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">Address Line 2</label>
                  <input
                    type="text"
                    value={shipping.addressLine2}
                    onChange={(e) => updateField("addressLine2", e.target.value)}
                    placeholder="Landmark, Area (optional)"
                    className="w-full h-11 px-3.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                </div>

                {/* City, State, Pincode */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-1.5">City *</label>
                    <input
                      type="text"
                      value={shipping.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      placeholder="Mumbai"
                      className="w-full h-11 px-3.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                    {formErrors.city && <p className="text-red-400 text-xs mt-1">{formErrors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-1.5">State *</label>
                    <input
                      type="text"
                      value={shipping.state}
                      onChange={(e) => updateField("state", e.target.value)}
                      placeholder="Maharashtra"
                      className="w-full h-11 px-3.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                    {formErrors.state && <p className="text-red-400 text-xs mt-1">{formErrors.state}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-1.5">Pincode *</label>
                    <input
                      type="text"
                      value={shipping.pincode}
                      onChange={(e) => updateField("pincode", e.target.value)}
                      placeholder="400001"
                      className="w-full h-11 px-3.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                    {formErrors.pincode && <p className="text-red-400 text-xs mt-1">{formErrors.pincode}</p>}
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">Country</label>
                  <div className="relative">
                    <select
                      value={shipping.country}
                      onChange={(e) => updateField("country", e.target.value)}
                      className="w-full h-11 px-3.5 pr-10 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="Singapore">Singapore</option>
                      <option value="UAE">UAE</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none" />
                  </div>
                </div>

                {/* Proceed to Pay Button */}
                <motion.button
                  onClick={handleProceedToPay}
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full h-16 mt-4 rounded-xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-white font-bold text-lg uppercase tracking-[0.15em] transition-all duration-500 shadow-lg hover:shadow-[0_0_40px_rgba(197,160,89,0.3)] disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <CreditCard size={20} />
                      Proceed to Pay {formatData.price}
                    </>
                  )}
                </motion.button>

                <p className="text-center text-muted-foreground/40 text-xs mt-4">
                  You'll be redirected to Razorpay's secure payment gateway
                </p>

                {/* Payment method badges */}
                <div className="flex items-center justify-center gap-3 pt-3 opacity-40">
                  <div className="px-3 py-1.5 rounded bg-foreground/5 border border-border/50 text-[10px] font-bold text-foreground/60">VISA</div>
                  <div className="px-3 py-1.5 rounded bg-foreground/5 border border-border/50 text-[10px] font-bold text-foreground/60">Mastercard</div>
                  <div className="px-3 py-1.5 rounded bg-foreground/5 border border-border/50 text-[10px] font-bold text-foreground/60">UPI</div>
                  <div className="px-3 py-1.5 rounded bg-foreground/5 border border-border/50 text-[10px] font-bold text-foreground/60">Net Banking</div>
                  <div className="px-3 py-1.5 rounded bg-foreground/5 border border-border/50 text-[10px] font-bold text-foreground/60">Wallets</div>
                </div>

                {/* Test Card Info */}
                <div className="mt-6 p-5 rounded-xl bg-secondary/30 border border-border/50">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-bold mb-3">Test Card Details</p>
                  <div className="space-y-1.5 text-xs text-muted-foreground font-mono">
                    <p>Card: <span className="text-foreground/80">4111 1111 1111 1111</span></p>
                    <p>Expiry: <span className="text-foreground/80">Any future date</span></p>
                    <p>CVV: <span className="text-foreground/80">Any 3 digits</span></p>
                    <p>OTP: <span className="text-foreground/80">Enter any OTP to complete</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Checkout;
