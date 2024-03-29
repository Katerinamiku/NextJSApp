import { FooterProps } from "./Footer.props";
import s from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({ className, ...rest }: FooterProps): JSX.Element => {
  return (
    <footer {...rest} className={cn(className, s.footer)}>
      <div>Все права защищены, {format(new Date(), "yyyy")}</div>
      <a href="#" target="_blank">
        Privacy policy
      </a>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
    </footer>
  );
};
