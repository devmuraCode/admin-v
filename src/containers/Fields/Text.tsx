import React from 'react';
import { useField } from 'formik';

import InputBase, { IProps as InputProps } from '@/components/Input';

export interface IProps extends Omit<InputProps, 'id' | 'value'> {
  name: string;
  validation?: {
    required?: boolean;
    max?: number;
    min?: number;
  };
  onChange?: (value: string) => void;
}

const Text: React.FC<IProps> = ({ name, validation, onChange, ...props }) => {
  const [field, meta, helper] = useField({
    name,
    validate: (value): string => {
      if (!validation) {
        return '';
      }

      if (validation.required && !value) {
        return 'validation_required';
      }

      if (validation.min && validation.min > (value || '').length) {
        return `validation_min_length_${validation.min}`;
      }

      if (validation.max && validation.max < (value || '').length) {
        return `validation_max_length_${validation.max}`;
      }

      return '';
    },
  });

  const hasError = !!(meta.error && meta.touched);

  return (
    <InputBase
      {...field}
      {...props}
      id={field.name}
      value={field.value || ''}
      validationMessage={!!meta.touched && meta.error}
      state={hasError ? 'error' : undefined}
      onChange={value => {
        helper.setValue(value);
        onChange && onChange(value);
      }}
    />
  );
};

export default Text;
