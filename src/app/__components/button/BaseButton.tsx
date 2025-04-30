"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

type IconPosition = "left" | "center" | "right";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type BackgroundColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning";

interface BaseButtonProps {
  text?: string;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  size?: ButtonSize;
  bgColor?: BackgroundColor;
  isDisabled?: boolean;
  onClick?: () => void;
}

const sizeClasses: Record<ButtonSize, string> = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-2.5",
  xl: "text-xl px-6 py-3",
};

const bgColorClasses: Record<BackgroundColor, string> = {
  primary:
    "bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800",
  secondary:
    "bg-gray-500 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-800",
  success:
    "bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800",
  danger: "bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800",
  warning:
    "bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-600 dark:hover:bg-yellow-700",
};

const BaseButton: FC<BaseButtonProps> = ({
  text,
  icon,
  iconPosition = "left",
  size = "md",
  bgColor = "primary",
  isDisabled = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl border border-transparent text-white dark:text-white transition-colors duration-200",
        sizeClasses[size],
        bgColorClasses[bgColor],
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {icon && (iconPosition === "left" || iconPosition === "center") && icon}
      {text && iconPosition !== "center" && <span>{text}</span>}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default BaseButton;
