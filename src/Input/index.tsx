import { cn } from "../utils/index"
import { ReactNode, forwardRef, InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "react-feather";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "success" | "danger" | "info";
}
export interface FloatingInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  endIcon?: ReactNode;
  label: string;
}
export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const variantStyles = {
  primary: "border-blue-500 focus:ring-blue-500",
  secondary: "border-gray-500 focus:ring-gray-500",
  success: "border-green-500 focus:ring-green-500",
  danger: "border-red-500 focus:ring-red-500",
  info: "border-sky-500 focus:ring-sky-500",
};

const roundedStyles = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-[100px]",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { startIcon, endIcon, variant = "secondary", rounded = "md" } = props;
    const getRoundedStyle = (rounded: keyof typeof roundedStyles) =>
      roundedStyles[rounded];
    const getVariantStyle = (variant: keyof typeof variantStyles) =>
      variantStyles[variant];
    return (
      <div className="flex relative mt-2 w-full">
        {startIcon && (
          <span
            className={cn(
              "absolute inset-y-0 left-0 flex items-center px-3 pb-3 pt-3 focus:outline-none"
            )}
          >
            {startIcon}
          </span>
        )}
        <input
          type={type}
          ref={ref}
          {...props}
          className={cn(
            "flex w-full rounded-md border border-gray-300  bg-transparent pb-3 pt-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            startIcon ? "px-8" : "px-3",
            getRoundedStyle(rounded),
            getVariantStyle(variant),
            className
          )}
        />
        {endIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center px-3 pb-3 pt-3 focus:outline-none">
            {endIcon}
          </span>
        )}
      </div>
    );
  }
);

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, type, ...props }, ref) => {
    const { endIcon, label } = props;
    return (
      <div className="flex relative mt-2 w-full">
        <input
          type={type}
          className={cn(
            "border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          placeholder=""
          ref={ref}
          {...props}
        />
        <label
          htmlFor={label}
          className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
        >
          {label}
        </label>
        {endIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center px-3 py-3 focus:outline-none">
            {endIcon}
          </span>
        )}
      </div>
    );
  }
);

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleTogglePassword = (): void => {
      setShowPassword(!showPassword);
    };

    return (
      <Input
        type={showPassword ? "text" : "password"}
        endIcon={
          showPassword ? (
            <Eye
              size={16}
              onClick={handleTogglePassword}
              className="cursor-pointer"
            />
          ) : (
            <EyeOff
              size={16}
              onClick={handleTogglePassword}
              className="cursor-pointer"
            />
          )
        }
        ref={ref}
        {...props}
      />
    );
  }
);

export { Input, FloatingInput, PasswordInput };