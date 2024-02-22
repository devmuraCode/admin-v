import React from 'react';
import cx from 'classnames';

import cls from './Detail.module.scss';

interface IProps {
  title: string;
}

const Title: React.FC<IProps> = ({ title }) => <div className={cx(cls.title)}>{title}</div>;

export default Title;
