import React from 'react';
import cx from 'classnames';

import { ROLE } from '@/helpers/enums';

import { useAuth } from '@/modules/auth/hooks';

import Icon from '@/components/Icon';
import Dropdown from '@/components/Dropdown';

import cls from '../Table.module.scss';

interface Item {
  title: string;
  icon?: React.ReactNode;
  roles?: ROLE[];
  variant?: 'primary' | 'blue' | 'danger';
  onClick?: () => void;
}

interface IProps {
  items?: Item[];
}

const More: React.FC<IProps> = ({ items = [] }) => {
  const { profile } = useAuth();

  const checkedItems = items.filter(({ roles }) => roles.includes(profile.role));

  return (
    <Dropdown
      menu={{
        items: checkedItems.map(item => ({
          key: item.title,
          label: (
            <div
              className={cx(cls.menuItem, item.variant && cls[`menuItem--variant-${item.variant}`])}
              onClick={item.onClick}
            >
              {!!item.icon && <div className={cls.menuItemIcon}>{item.icon}</div>}
              <div className={cls.menuItemTitle}>{item.title}</div>
            </div>
          ),
        })),
      }}
      overlayClassName={cls.overlay}
      placement='bottomRight'
      trigger={['click']}
    >
      {checkedItems.length ? (
        <div className={cx(cls.content, cls['content--more'])}>
          <Icon name='MoreHorizontal' size={28} />
        </div>
      ) : (
        ''
      )}
    </Dropdown>
  );
};

export default More;
