import { FooterProps } from "./Footer.props";
import s from "./Footer.module.css";

export const Footer = ({ ...rest }: FooterProps): JSX.Element => {
  return <div {...rest}>Footer</div>;
};
