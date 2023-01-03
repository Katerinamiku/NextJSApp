import { SidebarProps } from "./Sidebar.props";
import s from "./Sidebar.module.css";
import { Menu } from "../Menu/Menu";

export const Sidebar = ({ ...rest }: SidebarProps): JSX.Element => {
  return (
    <div {...rest}>
      <Menu />
    </div>
  );
};
