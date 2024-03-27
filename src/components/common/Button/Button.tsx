import React from "react";
import "./Button.scss";
interface ButtonProps {
  variant?: "primary" | "secondary" | "success" | "danger";
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

// interface IButtonProps {
//   type?: "submit" | "reset" | "button" | undefined;
//   size?: "xs" | "sm" | "base" | "lg" | "xl";
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
//   color?: IColorName;
//   disabled?: boolean;
//   children: any;
// }

// const Button1= ({
//   type,
//   size,
//   color,
//   onClick,
//   disabled,
//   children,
// }: IButtonProps) => {
//   const classes = twMerge(

//   )
//   return (
//     <button
//       type={type || "button"}
//       className={`py-2 px-4 rounded-md border curosr-pointer break-keep w-215 border-black text-${size} ${classes}`}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// };

export default Button;
