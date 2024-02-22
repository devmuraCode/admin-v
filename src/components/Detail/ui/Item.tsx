import React from 'react';
import cx from 'classnames';

import cls from './Detail.module.scss';

interface IProps {
  title: string;
  value?: React.ReactNode;
  icon?: React.ReactNode;
  onIconClick?: () => void;
  placeholder?: React.ReactNode;
  variant?: 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'gray';
  borderBottom?: boolean;
  borderTop?: boolean;
}

const Item: React.FC<IProps> = ({
  title,
  variant,
  value,
  onIconClick,
  placeholder = '----------',
  borderBottom,
  borderTop,
  icon,
}) => (
  <div
    className={cx(
      cls.item,
      !!variant && cls[`item--variant-${variant}`],
      !value && placeholder && cls['item--value-placeholder'],
      borderBottom && cls.itemBorderBottom,
      borderTop && cls.itemBorderTop,
    )}
  >
    <div className={cls.itemTitle}>{title}</div>
    <div className={cls.itemValue}>{value || placeholder}</div>
    {!!icon && (
      <div className={cls.itemIcon} onClick={() => onIconClick && onIconClick()}>
        <div className={cls.itemIconInner}>{icon}</div>
      </div>
    )}
  </div>
);

export default Item;
