import React, { ReactNode } from 'react';
import Layout from 'antd/lib/layout';

import cls from './Content.module.scss';

interface IProps {
   children: ReactNode;
}

const Content: React.FC<IProps> = ({ children }) => (
   <Layout.Content className={cls.wrapper}>
      {children}
   </Layout.Content>
);

export default Content;
