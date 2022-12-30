import { ButtonProps } from "./Button.props";
import s from "./Button.module.css";
import cn from "classnames";
import Image from "next/image";
import ArrowIcon from "./right-arrow.svg";

export const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(s.button, className, {
        [s.primary]: appearance === "primary",
        [s.ghost]: appearance === "ghost",
      })}
      {...rest}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(s.arrow, {
            [s.down]: arrow === "down",
            [s.right]: arrow === "right",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
