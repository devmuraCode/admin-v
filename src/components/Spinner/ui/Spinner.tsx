import React from 'react';
import Spin, { SpinProps } from 'antd/lib/spin';
import cx from 'classnames';

import cls from './Spinner.module.scss';

interface IProps extends SpinProps {
  full?: boolean;
  children?: React.ReactNode;
}

const Spinner: React.FC<IProps> = ({ full, children, ...props }) => (
  <div className={cx(cls.wrapper, full && cls.wrapperFull)}>
    <Spin {...props}>{children}</Spin>
  </div>
);

export default Spinner;
