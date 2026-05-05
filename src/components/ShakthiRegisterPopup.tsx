import React, { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export interface ShakthiFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organisation: string;
  heardFrom: string;
}

const EMPTY_FORM: ShakthiFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organisation: "",
  heardFrom: "",
};

const RECIPIENT_EMAIL = "hello@success369.org";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formData: ShakthiFormData;
}

/**
 * Popup that appears after form submission.
 * Shows a confirmation + mailto link so the user can send the registration email.
 */
export const ShakthiRegisterPopup = ({ open, onOpenChange, formData }: Props) => {
  const subject = encodeURIComponent("Shakthi Registration — The Unfiltered Voice");
  const body = encodeURIComponent(
    `Hi Success369 Team,\n\nI would like to register for Shakthi — The Unfiltered Voice.\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOrganisation: ${formData.organisation || "N/A"}\nHeard About Shakthi: ${formData.heardFrom || "N/A"}\n\nPlease confirm my spot and share the payment details.\n\nThank you.`
  );
  const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-primary/20">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-7 w-7 text-primary" />
          </div>
          <DialogTitle className="text-center text-xl">Registration Ready!</DialogTitle>
          <DialogDescription className="text-center text-sm leading-relaxed">
            Click the button below to open your email client with the registration details pre-filled.
            Send the email to complete your registration.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 rounded-xl border border-border/30 bg-muted/30 p-4 text-sm space-y-1.5">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Name</span>
            <span className="font-medium">{formData.firstName} {formData.lastName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Email</span>
            <span className="font-medium">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Phone</span>
            <span className="font-medium">{formData.phone}</span>
          </div>
          {formData.organisation && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Organisation</span>
              <span className="font-medium">{formData.organisation}</span>
            </div>
          )}
        </div>

        <a
          href={mailtoLink}
          className="mt-4 flex items-center justify-center gap-2 w-full rounded-xl bg-primary py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-primary/80 hover:-translate-y-0.5"
        >
          <Mail size={16} />
          Send Registration Email
          <ArrowRight size={14} />
        </a>

        <p className="text-center text-xs text-muted-foreground mt-1">
          This will open your default email app with all details pre-filled.
        </p>
      </DialogContent>
    </Dialog>
  );
};

/**
 * Hook to manage form state + popup for Shakthi registration.
 */
export const useShakthiRegister = () => {
  const [formData, setFormData] = useState<ShakthiFormData>(EMPTY_FORM);
  const [popupOpen, setPopupOpen] = useState(false);

  const updateField = (field: keyof ShakthiFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    setPopupOpen(true);
  };

  return { formData, updateField, popupOpen, setPopupOpen, handleSubmit };
};

export default ShakthiRegisterPopup;
