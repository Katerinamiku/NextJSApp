import { SidebarProps } from "./Sidebar.props";
import s from "./Sidebar.module.css";

export const Sidebar = ({ ...rest }: SidebarProps): JSX.Element => {
  return <div {...rest}>Sidebar</div>;
};
