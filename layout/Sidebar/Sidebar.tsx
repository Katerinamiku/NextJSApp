import { SidebarProps } from "./Sidebar.props";
import s from "./Sidebar.module.css";
import { Menu } from "../Menu/Menu";
import LogoIcon from "../LogoIcon";
import cn from "classnames";
import { Search } from "../../components/Search/Search";

export const Sidebar = ({ className, ...rest }: SidebarProps): JSX.Element => {
  return (
    <div {...rest} className={cn(className, s.sidebar)}>
      <div className={s.logo}>
        <LogoIcon />
      </div>
      <div>
        <Search />
      </div>
      <Menu />
    </div>
  );
};
