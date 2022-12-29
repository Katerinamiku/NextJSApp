import { HTMLAttributes, ReactNode, DetailedHTMLProps } from "react";

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  fontSize?: "small" | "default" | "large";
}
