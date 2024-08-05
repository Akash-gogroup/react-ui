import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
// import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/index"

//Add icons

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnText: string;
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "success"
    | "danger"
    | "info"
    | "outlined";
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
}

const variantStyles = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  ghost: "bg-transparent text-gray-500",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
  info: "bg-sky-500 text-white",
  outlined: "border border-gray-500 text-gray-500",
};

const sizeStyles = {
  sm: "p-2 text-sm",
  md: "px-4 py-2 text-md",
  lg: "px-6 py-3 text-lg",
};

const roundedStyles = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-[100px]",
};

const getVariantStyle = (variant: keyof typeof variantStyles) =>
  variantStyles[variant];
const getSizeStyle = (size: keyof typeof sizeStyles) => sizeStyles[size];
const getRoundedStyle = (rounded: keyof typeof roundedStyles) =>
  roundedStyles[rounded];

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      btnText = "Button",
      variant = "primary",
      size = "md",
      rounded = "sm",
      className,
      loading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium gap-2 cursor-pointer";
    const classes = cn(
      baseStyles,
      getVariantStyle(variant),
      getSizeStyle(size),
      getRoundedStyle(rounded),
      loading || props.disabled ? "cursor-not-allowed opacity-70" : "",
      className
    );
    return (
      <button
        ref={ref}
        {...props}
        className={classes}
        disabled={loading || props.disabled}
      >
        {startIcon && <span>{startIcon}</span>}
        {btnText}
        {loading ? <Spinner /> : null}
        {endIcon && <span>{endIcon}</span>}
      </button>
    );
  }
);

export const Spinner = () => {
  return (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};