import React, { forwardRef, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import {
  buttonSizes,
  buttonRounded,
  buttonColors,
  buttonCommonStyles,
} from "./ButtonStyle";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonRounded = "default" | "full" | "none" | "sm";
export type ButtonVariant = "outline" | "contain";
export type ButtonColor = "primary" | "brown";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  rounded?: ButtonRounded;
}
const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      size = "md",
      color = "primary",
      variant = "outline",
      rounded = "default",
      children,
      className,
      ...props
    }: ButtonProps,
    ref
  ): React.ReactElement | null => {
    const { ...rest } = props;
    const classes = twMerge(
      buttonSizes[size],
      variant === "contain" && buttonColors[color],
      buttonRounded[rounded],
      buttonCommonStyles.common,
      className
    );
    return (
      <button
        type={props.onClick ? "button" : "submit"}
        className={classes}
        ref={ref}
        {...rest}
      >
        <div className="items-center">
          <>{children}</>
        </div>
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
