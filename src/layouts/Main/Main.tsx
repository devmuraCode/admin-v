import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import * as Hooks from '@/modules/auth/hooks';

import { IPropsSidebar } from '@/components/Layout/Sidebar/ui/Types';

import useRoute from '@/hooks/useRoute';
import useLocalStorage from '@/hooks/useLocalStorage';

import Icon from '@/components/Icon';
import Layout from '@/components/Layout';

import routes from './routes';

interface IProps {
  children: React.ReactNode;
}

const Main: React.FC<IProps> = ({ children }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    profile: { role },
  } = Hooks.useAuth();

  const [openedRoute, route] = useRoute(routes, '/');
  const [collapsed, setCollapsed] = useLocalStorage('collapse-sidebar', false);
  const [openedKeys, setOpenedKeys] = useState<string[]>([(!collapsed && openedRoute) || '']);

  const filterRoutes = () => {
    const array = [];
    routes.forEach(route => {
      if (route.roles.includes(role)) {
        if (route.children && route.children.length) {
          const subs = [];
          route.children.forEach(sub => {
            if (sub.roles.includes(role)) {
              subs.push({
                ...sub,
                label: t(sub.title),
                icon: <Icon name={sub.icon} size={20} />,
              });
            }
          });
          route.children = subs;
        }
        array.push({
          ...route,
          label: t(route.title),
          icon: <Icon name={route.icon} size={20} />,
        });
      }
    });
    return array;
  };

  return (
    <Layout
      onToggle={() => setCollapsed(c => !c)}
      sidebar={
        {
          activeKey: route,
          defaultSelectedKeys: [route],
          onOpenChange: keys => setOpenedKeys(keys),
          openKeys: openedKeys,
          onSelect: ({ key }) => navigate(key),
          collapsed: collapsed,
          items: filterRoutes(),
          width: 256,
          collapsedWidth: 48,
        } as IPropsSidebar
      }
    >
      {children}
    </Layout>
  );
};

export default Main;
