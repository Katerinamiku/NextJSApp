import { HTMLAttributes, ReactNode, DetailedHTMLProps } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  fontSize?: "small" | "large";
  color: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
}
