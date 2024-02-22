import React from 'react';
import LayoutBase from 'antd/lib/layout';

import { IPropsSidebar } from './Sidebar/ui/Types';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

import cls from './Layout.module.scss';

interface IProps {
  children: React.ReactNode;
  onToggle: () => void;
  sidebar: IPropsSidebar;
}

const Layout: React.FC<IProps> = ({ children, onToggle, sidebar }) => (
  <LayoutBase className={cls.wrapper}>
    <Sidebar {...sidebar} />

    <LayoutBase className={cls.main}>
      <Header {...{ onToggle }} />

      <Content>{children}</Content>
    </LayoutBase>
  </LayoutBase>
);

export default Layout;
