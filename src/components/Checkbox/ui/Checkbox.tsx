import React from 'react';
import cx from 'classnames';

import Icon from '@/components/Icon';

import cls from './Checkbox.module.scss';

export interface IProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}

const Checkbox: React.FC<IProps> = ({ checked, disabled, onChange }) => (
  <div
    className={cx(
      cls.wrapper,
      disabled && cls['wrapper--disabled'],
      checked && cls['wrapper--checked'],
    )}
    onClick={() => {
      if (!disabled) {
        onChange && onChange(!checked);
      }
    }}
  >
    <div className={cls.icon}>
      <Icon name='Check' size={16} />
    </div>
  </div>
);

export default Checkbox;
