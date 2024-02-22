import React from 'react';
import { useField } from 'formik';

import SelectBase, { IProps as SelectProps } from '@/components/Select/ui/Select';

export interface IProps extends Omit<SelectProps, 'value'> {
  name: string;
  validation?: {
    required?: boolean;
    max?: number;
    min?: number;
  };
}

const Select: React.FC<IProps> = ({ name, validation, onChange, ...props }) => {
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
    <SelectBase
      {...field}
      {...props}
      state={hasError ? 'error' : 'default'}
      message={hasError ? meta.error : ''}
      filterOption={(input, option) => {
        return String(option.children).toLowerCase().indexOf(input.toLowerCase()) >= 0;
      }}
      onChange={(value, option) => {
        helper.setValue(value);
        onChange && onChange(value, option);
      }}
    />
  );
};

export default Select;
