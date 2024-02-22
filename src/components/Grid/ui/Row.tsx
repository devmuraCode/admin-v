import React from 'react';
import RowBase, { RowProps } from 'antd/lib/row';

type IProps = RowProps;

const Row: React.FC<IProps> = props => <RowBase {...props} />;

export default Row;
