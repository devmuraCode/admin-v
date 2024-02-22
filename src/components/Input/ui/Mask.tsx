import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';

import { MASK_TYPE, MaskInputProp } from './Types';
import Wrapper from './Wrapper';

export type IProps = MaskInputProp;

const Mask: React.FC<IProps> = ({
  id,
  size = 'medium',
  state,
  mask,
  maskType = MASK_TYPE.TEXT,
  unmask = true,
  lazy,
  overwrite = false,
  placeholderChar = '_',
  value,
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
  ...props
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
        {...{
          id,
          lazy,
          mask,
          unmask,
          placeholder,
          placeholderChar,
          disabled,
          readOnly,
          autoFocus,
          overwrite,
        }}
        {...props}
        value={String(value || '') || ''}
        type={maskType === MASK_TYPE.NUMBER ? 'tel' : 'text'}
        onChange={e => console.log(e.target)}
        onAccept={value => onChange && onChange(value as string)}
        onFocus={() => setFocused(true)}
        onBlur={e => {
          setFocused(false);
          onBlur && onBlur(e);
        }}
        definitions={{ '#': maskTypeFn(maskType) }}
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
      />
    </Wrapper>
  );
};

const maskTypeFn = (type?: MASK_TYPE | string) => {
  switch (type) {
    case MASK_TYPE.NUMBER:
      return /^\d+$/;
    case MASK_TYPE.EMAIL:
      return /^[A-Za-z0-9\@\.]$/;
    case MASK_TYPE.ONLY_TEXT:
      return /^[a-zA-Zа-яА-ЯёЁ]$/;
    case MASK_TYPE.TEXT:
    default:
      return /^\w+$/;
  }
};

export default Mask;
