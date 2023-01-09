import cn from "classnames";
import { InputProps } from "./Input.props";
import s from "./Input.module.css";

export const Input = ({
  className,
  placeholder,
  ...rest
}: InputProps): JSX.Element => {
  return (
    <input
      className={cn(className, s.input)}
      {...rest}
      placeholder={placeholder}
    />
  );
};
