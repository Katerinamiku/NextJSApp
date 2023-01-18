import { ButtonIconProps, icons } from "./ButtonIcon.props";
import s from "./ButtonIcon.module.css";
import cn from "classnames";

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...rest
}: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];
  return (
    <button
      className={cn(s.button, className, {
        [s.primary]: appearance === "primary",
        [s.ghost]: appearance === "white",
      })}
      {...rest}
    >
      <IconComp />
    </button>
  );
};
