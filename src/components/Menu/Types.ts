import { MenuProps } from "antd/es/menu";
import { ROLE } from "../../helpers/enums";

export interface IMenu {
  key: string;
  title: string;
  icon: string;
  roles: ROLE[];
  suffix?: React.ReactNode;
  children?: ISubMenu[];
}

export interface ISubMenu extends Omit<IMenu, "icon"> {
  icon?: string;
}

export interface IPropsMenu extends Omit<MenuProps, "items" | "className"> {
  items: Array<IMenu>;
}
