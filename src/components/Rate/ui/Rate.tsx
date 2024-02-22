import React from 'react';
import RateBase, { RateProps } from 'antd/lib/rate';

type IProps = RateProps;

const Rate: React.FC<IProps> = props => <RateBase {...props} />;

export default Rate;
