import React from 'react';
import MenuBase from 'antd/lib/menu';

import { IPropsMenu } from './Types';

import './Menu.scss';

const Menu: React.FC<IPropsMenu> = ({ items, ...props }) => <MenuBase {...props} items={items} />;

export default Menu;
