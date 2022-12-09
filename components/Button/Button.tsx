import { ButtonProps } from "./Button.props";
import s from "./Button.module.css";
import cn from "classnames";
import Image from "next/image";

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
          <Image src="/right-arrow.svg" alt="arrow" width={8} height={8} />
        </span>
      )}
    </button>
  );
};
