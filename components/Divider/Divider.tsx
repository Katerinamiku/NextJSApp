import cn from "classnames";
import { DividerProps } from "./Divider.props";
import s from "./Divider.module.css";

export const Divider = ({ className, ...rest }: DividerProps): JSX.Element => {
  return <hr className={cn(className, s.hr)} {...rest} />;
};
