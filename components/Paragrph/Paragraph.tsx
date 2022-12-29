import cn from "classnames";
import { ParagraphProps } from "./Paragraph.props";
import s from "./Paragraph.module.css";

export const Paragraph = ({
  fontSize = "default",
  children,
  className,
  ...rest
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(s.p, className, {
        [s.small]: fontSize === "small",
        [s.large]: fontSize === "large",
      })}
      {...rest}
    >
      {children}
    </p>
  );
};
