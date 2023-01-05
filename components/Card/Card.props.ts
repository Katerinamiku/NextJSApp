import { HTMLAttributes, ReactNode, DetailedHTMLProps } from "react";

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: "white" | "blue";
  children: ReactNode;
}
