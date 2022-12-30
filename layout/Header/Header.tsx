import { HeaderProps } from "./Header.props";
import s from "./Header.module.css";

export const Header = ({ ...rest }: HeaderProps): JSX.Element => {
  return <div {...rest}>Header</div>;
};
