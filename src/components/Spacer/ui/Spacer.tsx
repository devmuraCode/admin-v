import React from 'react';

import cls from './Spacer.module.scss';

interface IProps {
  size?: number;
}

const Spacer: React.FC<IProps> = ({ size = 0 }) => (
  <div className={cls.wrapper} style={{ '--spacer-size': `${size}px` } as React.CSSProperties} />
);

export default Spacer;
