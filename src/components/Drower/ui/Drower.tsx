import React from 'react';
import DrawerBase, { DrawerProps } from 'antd/lib/drawer';

type IProps = DrawerProps;

import './Drawer.scss';

const Drawer: React.FC<IProps> = props => <DrawerBase {...props} />;

export default Drawer;
