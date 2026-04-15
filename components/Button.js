"use client";

import { cn } from "@/lib/cn";

const VARIANT_STYLES = {
  primary: cn(
    "bg-gradient-to-b from-[#126091] to-primary-container text-white",
    "shadow-[0_4px_14px_-4px_rgba(12,74,110,0.55)] hover:shadow-[0_8px_22px_-6px_rgba(12,74,110,0.45)]",
  ),
  secondary: cn(
    "bg-surface-container-highest text-primary",
    "shadow-sm hover:bg-surface-container-high hover:shadow-md",
  ),
  outline: cn(
    "border-2 border-primary/60 bg-transparent text-primary",
    "hover:bg-primary/5 hover:shadow-sm",
  ),
  ghost: cn(
    "bg-transparent text-slate-600",
    "hover:bg-slate-100 hover:text-slate-900",
  ),
  /** Full-width FAQ / accordion row (no pill) */
  bare: cn(
    "w-full min-h-0 rounded-none bg-transparent px-0 py-0 text-left font-bold text-on-surface-variant shadow-none",
    "hover:bg-transparent hover:shadow-none active:scale-100",
  ),
  inverse: cn(
    "bg-white font-black text-primary",
    "shadow-2xl hover:scale-[1.02] hover:shadow-[0_14px_44px_-12px_rgba(0,51,79,0.35)]",
  ),
  inverseGhost: cn(
    "border border-white/20 bg-white/10 font-bold text-white backdrop-blur-md",
    "hover:bg-white/20",
  ),
  icon: cn(
    "rounded-xl bg-primary text-white",
    "shadow-md hover:shadow-lg",
  ),
  iconMuted: cn(
    "rounded-full bg-white/15 text-white shadow-none",
    "hover:bg-white/30",
  ),
  outlineMuted: cn(
    "rounded-2xl border border-slate-200/90 bg-slate-50/80 font-semibold text-slate-700",
    "hover:bg-slate-100",
  ),
  iconGhost: cn(
    "rounded-full bg-transparent p-2 text-slate-500 shadow-none",
    "hover:bg-slate-100 hover:text-slate-800",
  ),
};

const SIZE_STYLES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base sm:px-8 sm:py-4",
  lg: "px-6 py-3 text-base sm:px-8 sm:py-4",
  nav: "px-4 py-2.5 text-sm font-bold sm:px-6",
  icon: "h-11 w-11 min-h-11 min-w-11 p-0",
  iconSm: "h-9 w-9 min-h-9 min-w-9 p-0",
  step: "h-10 w-10 min-h-10 min-w-10 p-0",
  bare: "px-0 py-0 text-base md:text-lg",
  iconGhost: "h-auto min-h-0 w-auto min-w-0 px-2 py-2 text-base",
};

function Shine({ variant }) {
  const grad =
    variant === "inverse"
      ? "from-transparent via-primary/25 to-transparent"
      : variant === "secondary"
        ? "from-transparent via-white/60 to-transparent"
        : "from-transparent via-white/25 to-transparent";

  return (
    <span
      className={cn(
        "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r transition-transform duration-700 ease-out group-hover/btn:translate-x-full",
        grad,
      )}
      aria-hidden
    />
  );
}

export default function Button({
  variant = "primary",
  size = "md",
  shine,
  className,
  children,
  href,
  type = "button",
  disabled,
  isActive,
  ...rest
}) {
  const isStep = variant === "step";
  const stepClass = isStep
    ? cn(
        "border-2 font-bold transition",
        isActive
          ? "border-primary bg-primary text-white shadow-lg"
          : "border-primary/60 bg-white text-primary hover:bg-primary/5",
      )
    : null;

  const resolvedSize =
    variant === "bare"
      ? "bare"
      : variant === "iconGhost"
        ? "iconGhost"
        : isStep
          ? "step"
          : size;

  const useShine =
    shine ??
    (variant === "primary" ||
      variant === "inverse" ||
      variant === "icon" ||
      variant === "secondary");

  const isBare = variant === "bare";
  const isIconVariant =
    variant === "icon" || variant === "iconMuted" || variant === "iconGhost";

  const base = cn(
    "group/btn relative inline-flex items-center justify-center overflow-hidden",
    !isIconVariant &&
      !isStep &&
      !isBare &&
      variant !== "outlineMuted" &&
      "rounded-full",
    variant === "outlineMuted" && "rounded-2xl",
    variant === "icon" && "rounded-xl",
    (variant === "iconMuted" || variant === "iconGhost") && "rounded-full",
    isBare && "rounded-none",
    isStep && "rounded-full",
    "transition-[transform,box-shadow,background-color,border-color] duration-300",
    !isBare && "active:scale-[0.97]",
    "disabled:pointer-events-none disabled:opacity-50",
    SIZE_STYLES[resolvedSize] ?? SIZE_STYLES.md,
    !isStep && VARIANT_STYLES[variant],
    isStep && stepClass,
    disabled && "pointer-events-none opacity-50",
    className,
  );

  const content = (
    <>
      {useShine && !isBare && !isStep && (
        <Shine variant={variant === "icon" ? "primary" : variant} />
      )}
      <span
        className={cn(
          "relative z-[1] items-center",
          isBare
            ? "flex w-full justify-between gap-4"
            : "inline-flex justify-center gap-2",
        )}
      >
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={base} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={base} disabled={disabled} {...rest}>
      {content}
    </button>
  );
}
