import React from "react";
import "./Button.scss";
interface ButtonProps {
  variant?: "primary" | "brown" | "smPrimary" | "danger";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  onClick,
  children,
}) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
