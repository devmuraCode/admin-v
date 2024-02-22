import React from 'react';
import cx from 'classnames';

import { STATUS } from '@/helpers/enums';

import { BLOG_TYPE } from '@/modules/blog/constants';
import { TRANSLATION_TYPE } from '@/modules/translation/constants';

import cls from './Tag.module.scss';

interface IProps {
  variant?: STATUS | BLOG_TYPE | TRANSLATION_TYPE | 'INFO';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Tag: React.FC<IProps> = ({ variant = 'INACTIVE', size = 'md', children }) => (
  <div
    className={cx(cls.wrapper, cls[`wrapper--variant-${variant}`], cls[`wrapper--size-${size}`])}
  >
    {children}
  </div>
);

export default Tag;
