import React from 'react';
import TabsBase, { TabsProps as IProps } from 'antd/lib/tabs';

import './Tabs.scss';

const Tabs: React.FC<IProps> = props => <TabsBase {...props} />;

export default Tabs;
