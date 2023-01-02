import { ButtonProps } from "./Button.props";
import s from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "./right-arrow.svg";
import ArrowIconComponent from "./ArrowIconComponent";

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
          <ArrowIconComponent />
          {/* <ArrowIcon /> */}
        </span>
      )}
    </button>
  );
};
