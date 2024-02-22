import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';

import { NumberInputProps } from './Types';
import Wrapper from './Wrapper';

export type IProps = NumberInputProps;

const NumberInput: React.FC<IProps> = ({
  id,
  state,
  size = 'medium',
  min,
  max,
  value,
  placeholder,
  disabled,
  readOnly,
  autoFocus,
  onChange,
  onBlur,
  valuePrefix,
  valueSuffix,
  prefix,
  suffix,
  iconPrefix,
  onIconPrefix,
  iconSuffix,
  onIconSuffix,
  overwrite = false,
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
      <IMaskInput
        {...{ id, placeholder, disabled, readOnly, autoFocus, overwrite }}
        value={value || ''}
        type='tel'
        onAccept={value => onChange && onChange(typeof value === 'string' ? value : '')}
        onFocus={() => setFocused(true)}
        onBlur={e => {
          setFocused(false);
          onBlur && onBlur(e);
        }}
        unmask
        lazy={false}
        autofix={false}
        mask={`${valuePrefix || ''}amount${valueSuffix || ''}`}
        blocks={{
          amount: {
            mask: Number,
            min,
            max,
            scale: 2,
            radix: '.',
            signed: false,
            normalizeZeros: true,
          },
        }}
        prepare={(value, mask) => {
          if (mask.value === '0') {
            mask.value = value;
            return '';
          }
          return value;
        }}
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
      />
    </Wrapper>
  );
};

export default NumberInput;
