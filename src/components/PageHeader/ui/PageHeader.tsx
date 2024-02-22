import React from 'react';

import Icon from '@/components/Icon';
import Breadcrumb, { IProps as IBreadcrumb } from '@/components/Breadcrumb';

import cls from './PageHeader.module.scss';

interface IProps {
  title: string;
  buttons?: React.ReactNode[];
  mobileButtons?: React.ReactNode[];
  breadcrumb?: IBreadcrumb;
  onBack?: () => void;
}

const PageHeader: React.FC<IProps> = ({ title, buttons, mobileButtons, breadcrumb, onBack }) => (
  <div className={cls.wrapper}>
    {!!breadcrumb && (
      <div className={cls.breadcrumb}>
        <Breadcrumb {...breadcrumb} />
      </div>
    )}
    <div className={cls.content}>
      <div className={cls.left}>
        {!!onBack && (
          <div className={cls.back} onClick={onBack}>
            <Icon name='ArrowLeft' size={24} />
          </div>
        )}
        <div className={cls.title}>{title}</div>
      </div>
      {!!buttons && <div className={cls.buttons}>{buttons}</div>}
      {!!mobileButtons && <div className={cls.mobileButtons}>{mobileButtons}</div>}
    </div>
  </div>
);

export default PageHeader;
