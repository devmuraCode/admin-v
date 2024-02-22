import React from 'react';
import EmptyBase, { EmptyProps } from 'antd/lib/empty';

import cls from './Empty.module.scss';

const Empty: React.FC<EmptyProps> = ({ ...props }) => (
  <div className={cls.wrapper}>
    <EmptyBase {...props} />
  </div>
);

export default Empty;
