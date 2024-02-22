import React, { ReactNode } from 'react';
import cx from 'classnames';

import { WrapperProps } from './Types';

import cls from './Input.module.scss';

interface IProps extends WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<IProps> = ({
  size,
  state,
  disabled,
  isFocused,
  prefix,
  suffix,
  iconPrefix,
  onIconPrefix,
  iconSuffix,
  onIconSuffix,
  validationMessage,
  children,
}) => (
  <label
    className={cx(
      cls.wrapper,
      size && cls[`wrapper--size-${size}`],
      state && cls[`wrapper--state-${state}`],
      isFocused && cls['wrapper--focused'],
      disabled && cls['wrapper--disabled'],
    )}
  >
    {!!iconPrefix && (
      <div className={cx(cls.icon, cls.iconPrefix)} onClick={onIconPrefix}>
        {iconPrefix}
      </div>
    )}
    {!!prefix && <div className={cls.prefix}>{prefix}</div>}
    {children}
    {!!suffix && <div className={cls.suffix}>{suffix}</div>}
    {!!iconSuffix && (
      <div className={cx(cls.icon, cls.iconSuffix)} onClick={onIconSuffix}>
        {iconSuffix}
      </div>
    )}
    {!!validationMessage && <span className={cls.validation}>{validationMessage}</span>}
  </label>
);

export default Wrapper;
