import { SiderProps } from 'antd/lib/layout';

import { IPropsMenu } from 'components/Menu/Types';

export type IPropsSidebar =
   Pick<IPropsMenu, 'activeKey' | 'items' | 'onSelect' | 'defaultSelectedKeys' | 'openKeys' | 'onOpenChange'> &
   Pick<SiderProps, 'collapsedWidth' | 'width' | 'collapsed'>;