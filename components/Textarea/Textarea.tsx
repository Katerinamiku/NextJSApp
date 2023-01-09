import cn from "classnames";
import { TextareaProps } from "./Textarea.props";
import s from "./Textarea.module.css";

export const Textarea = ({
  className,
  ...rest
}: TextareaProps): JSX.Element => {
  return (
    <textarea
      className={cn(className, s.textarea)}
      {...rest}
      placeholder={"test"}
    />
  );
};
