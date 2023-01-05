import cn from "classnames";
import { CardProps } from "./Card.props";
import s from "./Card.module.css";

export const Card = ({
  color = "white",
  children,
  className,
  ...rest
}: CardProps): JSX.Element => {
  return (
    <div
      className={cn(s.card, className, {
        [s.blue]: color === "blue",
      })}
      {...rest}
    >
      {children}
    </div>
  );
};
