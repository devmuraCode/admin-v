import React from 'react';
import { useField } from 'formik';

import Input, { IProps as InputProps } from '@/components/Input/ui/Input';

export interface IProps extends Omit<InputProps, 'id' | 'value'> {
  name: string;
  validation?: {
    required?: boolean;
    max?: number;
    min?: number;
  };
}

const NumberField: React.FC<IProps> = ({ name, validation, ...props }) => {
  const [field, meta, helper] = useField({
    name,
    validate: (value): string => {
      if (!validation) {
        return '';
      }

      if (validation.required && !value) {
        return 'validation_required';
      }

      if (validation.min && validation.min > Number(value)) {
        return `validation_min_length_${validation.min}`;
      }

      if (validation.max && validation.max < Number(value)) {
        return `validation_max_length_${validation.max}`;
      }

      return '';
    },
  });
  const hasError = !!(meta.error && meta.touched);

  return (
    <Input
      {...field}
      {...props}
      id={field.name}
      value={field.value?.toString() || ''}
      validationMessage={!!meta.touched && meta.error}
      state={hasError ? 'error' : undefined}
      onChange={value => {
        helper.setValue(value);
      }}
    />
  );
};

export default NumberField;
