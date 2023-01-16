import cn from "classnames";
import { CardProps } from "./Card.props";
import s from "./Card.module.css";
import { forwardRef } from "react";
import { ForwardedRef } from "react";

export const Card = forwardRef(
  (
    { color = "white", children, className, ...rest }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={cn(s.card, className, {
          [s.blue]: color === "blue",
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";
