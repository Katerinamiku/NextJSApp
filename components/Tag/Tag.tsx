import cn from "classnames";
import { TagProps } from "./Tag.props";
import s from "./Tag.module.css";

export const Tag = ({
  fontSize = "large",
  children,
  color = "ghost",
  href,
  className,
  ...rest
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(s.tag, className, {
        [s.small]: fontSize === "small",
        [s.large]: fontSize === "large",
        [s.ghost]: color === "ghost",
        [s.red]: color === "red",
        [s.grey]: color === "grey",
        [s.green]: color === "green",
        [s.primary]: color === "primary",
      })}
      {...rest}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
