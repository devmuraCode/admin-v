import React from 'react';
import { useField } from 'formik';

import TreeSelectBase, { IProps as TreeSelectProps } from '@/components/TreeSelect';

interface IProps extends Omit<TreeSelectProps, 'value'> {
  name: string;
  validation?: {
    required?: boolean;
    max?: number;
    min?: number;
  };
}

const TreeSelect: React.FC<IProps> = ({ name, validation, onChange, ...props }) => {
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
    <TreeSelectBase
      {...field}
      {...props}
      state={hasError ? 'error' : 'default'}
      message={hasError ? meta.error : ''}
      onChange={(value, option, extra) => {
        helper.setValue(value);
        onChange && onChange(value, option, extra);
      }}
    />
  );
};

export default TreeSelect;
