import React, { useState } from 'react';
import SelectBase, { SelectProps } from 'antd/lib/select';
import cx from 'classnames';

import Icon from '@/components/Icon';

import './Select.scss';
import cls from './Select.module.scss';

interface IOption {
  title: string;
  value: number | string;
  disabled?: boolean;
}

interface IOptionGroup {
  title: string;
  children: IOption[];
}

export interface IProps extends Omit<SelectProps<any>, 'options' | 'onFocus' | 'onBlur'> {
  options: IOption[] | IOptionGroup[];
  state?: 'default' | 'success' | 'error';
  message?: string;
}

const Select: React.FC<IProps> = ({ options, state, message, disabled, ...props }) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <div
      className={cx(
        cls.wrapper,
        state && cls[`wrapper--state-${state}`],
        isFocused && cls['wrapper--focused'],
        disabled && cls['wrapper--disabled'],
      )}
    >
      <SelectBase
        className={cls.select}
        {...props}
        {...{ disabled }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onDropdownVisibleChange={open => setFocused(open)}
        suffixIcon={<Icon name='ChevronDown' size={14} />}
      >
        {options.map(option => {
          if (option.children) {
            return (
              <SelectBase.OptGroup key={option.value} label={option.title}>
                {option.children.map(option => (
                  <SelectBase.Option key={option.value} value={option.value}>
                    {option.title}
                  </SelectBase.Option>
                ))}
              </SelectBase.OptGroup>
            );
          }

          return (
            <SelectBase.Option key={option.value} value={option.value} disabled={option.disabled}>
              {option.title}
            </SelectBase.Option>
          );
        })}
      </SelectBase>
      {!!message && <div className={cls.validation}>{message}</div>}
    </div>
  );
};

export default Select;
