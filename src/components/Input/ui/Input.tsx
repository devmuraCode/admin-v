import React, { useState } from 'react';

import { TextInputProps } from './Types';

import Wrapper from './Wrapper';

export type IProps = TextInputProps;

const Input: React.FC<IProps> = ({
  id,
  state,
  value,
  type = 'text',
  size = 'medium',
  placeholder,
  disabled,
  readOnly,
  autoFocus,
  onChange,
  onBlur,
  prefix,
  suffix,
  iconPrefix,
  onIconPrefix,
  iconSuffix,
  onIconSuffix,
  validationMessage,
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <Wrapper
      {...{
        size,
        state,
        isFocused,
        disabled,
        prefix,
        suffix,
        iconPrefix,
        onIconPrefix,
        iconSuffix,
        onIconSuffix,
        validationMessage,
      }}
    >
      <input
        {...{ id, value, type, placeholder, disabled, readOnly, autoFocus }}
        onChange={e => onChange && onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={e => {
          setFocused(false);
          onBlur && onBlur(e);
        }}
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
      />
    </Wrapper>
  );
};

export default Input;
