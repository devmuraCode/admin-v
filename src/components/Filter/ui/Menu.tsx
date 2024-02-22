import React from 'react';
import cx from 'classnames';

import Icon from '@/components/Icon';

import cls from './Filter.module.scss';

type IValue = string | number;

interface Item {
  title: string;
  value: IValue;
}

interface IProps {
  items: Item[];
  active: IValue;
  onChange?: (value: IValue) => void;
}

const Menu: React.FC<IProps> = ({ items, active, onChange }) => (
  <div className={cls.menu}>
    {items.map(item => {
      const isActive = active === item.value;

      return (
        <div
          key={`${item.title}-${item.value}`}
          className={cx(cls.menuItem, isActive && cls.menuItemActive)}
          onClick={() => onChange && onChange(item.value)}
        >
          <div className={cls.menuItemTitle}>{item.title}</div>
          {isActive && (
            <div className={cls.menuItemIcon}>
              <Icon name='CheckmarkCircle' />
            </div>
          )}
        </div>
      );
    })}
  </div>
);

export default Menu;
