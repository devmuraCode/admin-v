import React from 'react';
import TableBase, { TableProps } from 'antd/lib/table';
import cx from 'classnames';

import * as Content from './Content';

import './Table.scss';
import cls from './Table.module.scss';

interface IProps extends Omit<TableProps<any>, 'pagination' | 'showSorterTooltip'> {
  children?: any;
}

interface IComponent extends React.FC<IProps> {
  Content: typeof Content;
}

// @ts-ignore
const Table: IComponent = ({ className, ...props }) => (
  <div className={cx(cls.wrapper, className)}>
    <TableBase {...props} className={cls.table} pagination={false} showSorterTooltip={false} />
  </div>
);

Table.Content = Content;

export default Table;
