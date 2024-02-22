import React from 'react';
import { useField } from 'formik';
import moment from 'moment';

import TimePickerBase, { IProps as TimePickerProps } from '@/components/TimePicker/ui/TimePicker';

export interface IProps extends Omit<TimePickerProps, 'value' | 'format'> {
  name: string;
  format?: 'HH:mm:ss' | 'HH:mm' | 'mm:ss';
  validation?: {
    required?: boolean;
  };
}

const TimePicker: React.FC<IProps> = ({
  name,
  format = 'HH:mm:ss',
  validation,
  onChange,
  ...props
}) => {
  const [field, meta, helper] = useField({
    name,
    validate: (value): string => {
      if (!validation) {
        return '';
      }

      if (validation.required && !value) {
        return 'validation_required';
      }

      return '';
    },
  });

  const defaultValue = {
    'HH:mm:ss': '00:00:00',
    'HH:mm': '00:00',
    'mm:ss': '00:00',
  };

  const hasError = !!(meta.error && meta.touched);

  return (
    <TimePickerBase
      {...field}
      {...props}
      showNow={false}
      format={format}
      value={moment(field.value || defaultValue[format], format)}
      state={hasError ? 'error' : 'default'}
      message={hasError ? meta.error : ''}
      onChange={(value, time) => {
        helper.setValue(time);
        onChange && onChange(value, time);
      }}
    />
  );
};

export default TimePicker;
