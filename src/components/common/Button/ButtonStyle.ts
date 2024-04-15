import { ButtonRounded, ButtonSize, ButtonColor } from "./Button";

export const buttonCommonStyles = {
  common: "rounded border-solid border-2",
};
export const buttonSizes: { [x in ButtonSize]: string } = {
  sm: "min-w-[87px] min-h-[30px] text-sm",
  md: "min-w-[200px] min-h-[60px] text-md",
  lg: "min-w-[200px] min-h-[70px] text-md",
};

export const buttonRounded: { [x in ButtonRounded]: string } = {
  none: "rounded-none",
  sm: "rounded-sm",
  default: "rounded",
  full: "rounded-full",
};

export const buttonColors: { [x in ButtonColor]: string } = {
  primary: "bg-white text-black",
  brown: "bg-brown-button text-white",
};

export const buttonOutlines: { [x in ButtonColor]: string } = {
  primary: "bg-white text-black",
  brown: "bg-white-button text-brown border-solid border-1 border-brown",
};
