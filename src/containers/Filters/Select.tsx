import React from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';

import Icon from '@/components/Icon';
import Filter from '@/components/Filter';
import Dropdown from '@/components/Dropdown';

import cls from './Filter.module.scss';

interface IProps {
  name: string;
  value: string;
  setValue: (value: string) => void;
  filterList: string[];
}

const Status: React.FC<IProps> = ({ name, value, setValue, filterList }) => {
  const { t } = useTranslation();

  const items = [
    { title: t('filter_all'), value: '' },
    ...filterList.map(item => ({ title: t(item), value: item })),
  ];

  return (
    <Dropdown
      menu={{
        items: [
          ...items.map(item => {
            const isActive = value === item.value;

            return {
              key: item.value,
              label: (
                <div
                  className={cx(cls.menuItem, isActive && cls.menuItemActive)}
                  onClick={() => setValue(item.value)}
                >
                  <div className={cls.menuItemTitle}>{item.title}</div>
                  {isActive && (
                    <div className={cls.menuItemIcon}>
                      <Icon name='CheckmarkCircle' />
                    </div>
                  )}
                </div>
              ),
            };
          }),
        ],
      }}
      overlayClassName={cls.overlay}
      trigger={['click']}
    >
      <Filter
        title={t(`column_${name}`)}
        value={value || t('filter_all')}
        isActive={!!value}
        onClear={() => setValue('')}
      />
    </Dropdown>
  );
};

export default Status;
