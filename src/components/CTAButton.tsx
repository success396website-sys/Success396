import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "shimmer" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: LucideIcon;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
}

const CTAButton = ({
  to,
  href,
  children,
  variant = "shimmer",
  size = "md",
  className,
  icon: Icon = ArrowRight,
  onClick,
  type = "button",
  disabled,
  target,
  rel,
}: CTAButtonProps) => {
  const sizeClasses = {
    sm: "px-6 py-2.5 text-xs sm:text-sm",
    md: "px-8 py-3.5 text-sm font-semibold",
    lg: "px-10 py-4 text-base font-bold",
  };

  const variants = {
    shimmer: "text-primary-foreground overflow-hidden group shadow-lg dark:shadow-2xl dark:shadow-primary/20",
    primary: "text-primary-foreground bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-md dark:shadow-[0_0_30px_-5px_hsl(var(--primary)/40%)]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-colors duration-300",
  };

  const commonClasses = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 whitespace-nowrap uppercase tracking-wider font-display",
    sizeClasses[size],
    variants[variant],
    disabled && "opacity-50 cursor-not-allowed grayscale",
    className
  );

  const Content = (
    <>
      {variant === "shimmer" && (
        <>
          <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] opacity-100" />
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]" />
        </>
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon size={size === "lg" ? 20 : 16} className="group-hover:translate-x-1 transition-transform" />}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={commonClasses} onClick={onClick}>
        {Content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={commonClasses} onClick={onClick} target={target} rel={rel}>
        {Content}
      </a>
    );
  }

  return (
    <button type={type} className={commonClasses} onClick={onClick} disabled={disabled}>
      {Content}
    </button>
  );
};

export default CTAButton;
