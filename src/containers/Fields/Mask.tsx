import React from 'react';
import Input, { IProps as InputProps } from '@/components/Input/ui/Mask';
import { useField } from 'formik';

interface IProps extends Omit<InputProps, 'id' | 'value'> {
  name: string;
  validation?: {
    required?: boolean;
  };
  onChange?: (value: string) => void;
}

const Mask: React.FC<IProps> = ({ name, mask, validation, onChange, ...props }) => {
  const [field, meta, helper] = useField({
    name,
    validate: (value): string => {
      if (!validation) {
        return '';
      }

      if (validation.required && !value) {
        return 'validation_required';
      }

      if (!mask) {
        return 'validation_mask_not_valid';
      }

      if (typeof mask === 'string') {
        const maskLength = mask.replace(/[^#|a|0]+/g, '').length;

        if (maskLength) {
          if (maskLength > (value || '').length) {
            return 'validation_min_length';
          }

          if (maskLength < (value || '').length) {
            return 'validation_max_length';
          }
        }
      }

      return '';
    },
  });

  const hasError = !!(meta.error && meta.touched);

  return (
    <Input
      {...field}
      {...props}
      {...{ mask }}
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

export default Mask;
