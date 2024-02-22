import React, { cloneElement, isValidElement } from 'react';
import cx from 'classnames';

import cls from './Button.module.scss';

interface IProps {
  title?: string;
  variant?: 'blue' | 'green' | 'red' | 'neutral' | 'white' | 'orange' | 'yellow';
  size?: 'small' | 'medium' | 'large';
  block?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  htmlType?: 'submit' | 'reset' | 'button';
  form?: string;
  className?: string;
  disabled?: boolean;
  container?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({
  title,
  variant = 'neutral',
  size = 'medium',
  block,
  htmlType = 'button',
  form,
  className,
  prefixIcon,
  suffixIcon,
  disabled,
  container,
  onClick,
}) => {
  const resultProps = {
    className: cx(
      cls.wrapper,
      cls[`wrapper--variant-${variant}`],
      cls[`wrapper--size-${size}`],
      block && cls['wrapper--block'],
      disabled && cls['wrapper--disabled'],
      className,
    ),
    onClick,
    form,
    disabled,
  };

  const resultChildren = (
    <>
      {!!prefixIcon && <div className={cx(cls.icon, cls.prefixIcon)}>{prefixIcon}</div>}
      {!!title && <div className={cls.title}>{title}</div>}
      {!!suffixIcon && <div className={cx(cls.icon, cls.suffixIcon)}>{suffixIcon}</div>}
    </>
  );

  const resultContainer = isValidElement(container) ? container : <button type={htmlType} />;

  return cloneElement(resultContainer, resultProps, resultChildren);
};

export default Button;
