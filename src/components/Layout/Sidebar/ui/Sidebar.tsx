import React from 'react';
import Layout from 'antd/lib/layout';

import { IPropsSidebar } from './Types';

import Menu from '@/components/Menu';

import './Sidebar.scss';
import cls from './Sidebar.module.scss';

const Sidebar: React.FC<IPropsSidebar> = ({ collapsedWidth, collapsed, ...props }) => (
  <Layout.Sider
    className={cls.wrapper}
    {...{ collapsedWidth, collapsed }}
    trigger={null}
    collapsible
  >
    <Menu
      rootClassName={cls.menu}
      theme='light'
      mode='inline'
      defaultSelectedKeys={['1']}
      {...props}
    />
  </Layout.Sider>
);

export default Sidebar;
