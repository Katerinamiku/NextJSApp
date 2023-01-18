import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import up from "./UpIconComponent";
import cross from "./CrossSvgComponent";
import menu from "./MenuIconComponent";

export const icons = {
  up,
  cross,
  menu,
};
export type IconName = keyof typeof icons;
export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: IconName;
  appearance: "primary" | "white";
}
