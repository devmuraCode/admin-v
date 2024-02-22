import React from 'react';
import cx from 'classnames';

import cls from './Typography.module.scss';

interface IProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: number;
  spacing?: number;
  weight?: 300 | 400 | 500 | 600 | 700;
  type?: 'default' | 'uppercase';
  align?: 'left' | 'right' | 'center';
  children: React.ReactNode;
}

const Typography: React.FC<IProps> = ({
  variant = 'primary',
  size = 14,
  spacing,
  weight = 400,
  type,
  align,
  children,
}) => (
  <div
    className={cx(
      cls.wrapper,
      variant && cls[`wrapper--variant-${variant}`],
      type && cls[`wrapper--type-${type}`],
      align && cls[`wrapper--align-${align}`],
    )}
    style={
      {
        '--size': `${size}px`,
        '--weight': weight,
        ...(spacing ? { '--spacing': `${spacing}px` } : {}),
      } as React.CSSProperties
    }
  >
    {children}
  </div>
);

export default Typography;
