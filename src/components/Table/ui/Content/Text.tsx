import React from 'react';
import cx from 'classnames';

import cls from '../Table.module.scss';

interface IProps {
  title?: string;
  subtitle?: string;
}

const Text: React.FC<IProps> = ({ title, subtitle }) => (
  <div className={cx(cls.content, cls['content--text'])}>
    {!!title && <div className={cls['content--text-title']}>{title}</div>}
    {!!subtitle && <div className={cls['content--text-subtitle']}>{subtitle}</div>}
  </div>
);

export default Text;
