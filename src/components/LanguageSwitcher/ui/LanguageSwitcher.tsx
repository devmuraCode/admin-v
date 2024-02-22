import React from 'react';
import cx from 'classnames';

import cls from './LanguageSwitcher.module.scss';

interface IOption {
  title: string;
  value: string;
  badge?: number;
}

interface IProps {
  active: string;
  options: IOption[];
  onChange: (value: string) => void;
}

const LanguageSwitcher: React.FC<IProps> = ({ active, options, onChange }) => (
  <div className={cls.wrapper}>
    {options.map(option => (
      <div
        key={option.value}
        className={cx(cls.option, option.value === active && cls.optionActive, option.badge && cls.optionHasBadge)}
        onClick={() => onChange(option.value)}
      >
        <div className={cx(cls.optionFlag, cls[`optionFlag--${option.value}`])} />
        <div className={cls.optionValue}>{option.title}</div>
        {!!option.badge && <div className={cls.optionBadge}>{option.badge}</div>}
      </div>
    ))}
  </div>
);

export default LanguageSwitcher;
