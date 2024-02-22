import React from 'react';
import cx from 'classnames';

import Icon from '@/components/Icon';

import cls from './Label.module.scss';

export interface IProps {
  title: string;
  required?: boolean;
  link?: React.ReactNode;
  icon?: React.ReactNode;
  error?: boolean;
  message?: string;
  position?: 'vertical' | 'horizontal';
  children?: React.ReactNode;
}

const Label: React.FC<IProps> = ({ title, required, link, icon, error, message, position = 'vertical', children }) => (
  <div className={cx(cls.wrapper, cls[`wrapper--position-${position}`], error && cls['wrapper--error'])}>
    <div className={cls.header}>
      <div className={cls.headerLeft}>
        <div className={cls.title}>
          {required && <span>*</span>}
          {title}
        </div>
      </div>
      {(!!link || !!icon) && (
        <div className={cls.headerRight}>
          {!!link && <div className={cls.link}>{link}</div>}
          {!!icon && <div className={cls.icon}>{icon}</div>}
        </div>
      )}
    </div>
    {!!children && (
      <div className={cls.content}>
        {children}

        {!error && !!message && (
          <div className={cls.message}>
            <div className={cls.messageIcon}>
              <Icon variant='regular' name='QuestionCircle' size={14} />
            </div>
            <div className={cls.messageValue}>{message}</div>
          </div>
        )}
      </div>
    )}
  </div>
);

export default Label;
