import React from 'react';
import cx from 'classnames';

import cls from './Detail.module.scss';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const List: React.FC<IProps> = ({ className, children }) => (
  <div className={cx(cls.list, className)}>{children}</div>
);

export default List;
