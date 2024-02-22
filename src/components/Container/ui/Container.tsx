import React from 'react';

import cls from './Container.module.scss';

interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }) => <div className={cls.wrapper}>{children}</div>;

export default Container;
