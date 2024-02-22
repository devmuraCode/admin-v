import React from 'react';
import { useField } from 'formik';

import TextareaBase, { IProps as InputProps } from '@/components/Textarea/ui/Textarea';

interface IProps extends Omit<InputProps, 'id' | 'value'> {
  name: string;
  validation?: {
    required?: boolean;
    max?: number;
    min?: number;
  };
}

const Textarea: React.FC<IProps> = ({ name, validation, ...props }) => {
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
    <TextareaBase
      {...field}
      {...props}
      id={field.name}
      validationMessage={meta.touched && meta.error}
      value={field.value || ''}
      state={hasError ? 'error' : undefined}
      onChange={value => {
        helper.setValue(value);
      }}
    />
  );
};

export default Textarea;
