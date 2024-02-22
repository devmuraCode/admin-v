import React from 'react';
import cx from 'classnames';
import get from 'lodash/get';

import * as List from '../list';

import cls from './Icon.module.scss';

export type Type = 'myicons' | 'flag';

export type Variant = 'regular' | 'custom';

export type Color = '#000000' | '#ffffff' | '#2d4191' | '#f03a45' | '#39bd83';

interface IProps {
  name: string;
  type?: Type;
  variant?: Variant;
  size?: number;
  className?: string;
  color?: Color;
  onClick?: () => void;
}

const Icon: React.FC<IProps> = ({
  name,
  type = 'myicons',
  variant = 'regular',
  size,
  className,
  color,
  onClick,
}) => {
  const Component = get(List, `[${type}][${variant}][${name}]`);

  if (!Component) {
    console.log('Icon component not found');
    return null;
  }

  return (
    <div
      className={cx(cls.wrapper, className)}
      {...{ onClick }}
      style={{ ...(size ? { '--size': `${size}px` } : {}), color } as React.CSSProperties}
    >
      <Component />
    </div>
  );
};

export default Icon;
