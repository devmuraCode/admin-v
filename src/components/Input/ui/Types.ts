import React from 'react';

export interface WrapperProps {
  state?: 'success' | 'error';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  readOnly?: boolean;
  isFocused?: boolean;
  prefix?: string;
  suffix?: string;
  iconPrefix?: React.ReactNode;
  onIconPrefix?: () => void;
  iconSuffix?: React.ReactNode;
  onIconSuffix?: () => void;
  validationMessage?: string | React.ReactNode;
}

export interface TextInputProps extends WrapperProps {
  id: string;
  value: string;
  type?: 'text' | 'number' | 'password';
  placeholder?: string;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  onBlur?: (e: any) => void;
  overwrite?: boolean;
}

export enum MASK_TYPE {
  TEXT = 'TEXT',
  ONLY_TEXT = 'ONLY_TEXT',
  NUMBER = 'NUMBER',
  EMAIL = 'EMAIL',
}

export interface MaskInputProp extends Omit<TextInputProps, 'type'> {
  mask: string | NumberConstructor | DateConstructor;
  maskType?: MASK_TYPE;
  unmask?: boolean;
  lazy?: boolean;
  placeholderChar?: string;

  [key: string]: any;
}

export interface NumberInputProps extends Omit<TextInputProps, 'type'> {
  valuePrefix?: string;
  valueSuffix?: string;
  min?: number;
  max?: number;
}

export interface AmountInputProps extends Omit<TextInputProps, 'type'> {
  valuePrefix?: string;
  valueSuffix?: string;
  min?: number;
  max?: number;
}
