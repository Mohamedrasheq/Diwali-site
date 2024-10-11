import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded focus:outline-none transition-colors";
  const variantStyles =
    variant === "outline"
      ? "border border-gray-300 text-gray-700 hover:bg-gray-100"
      : "bg-primary text-white hover:bg-primary-dark";
  const sizeStyles = size === "sm" ? "text-sm" : "text-md";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
