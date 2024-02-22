import React from 'react';
import ColBase, { ColProps } from 'antd/lib/col';

type IProps = ColProps;

const Col: React.FC<IProps> = props => <ColBase {...props} />;

export default Col;
