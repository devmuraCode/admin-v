import React from 'react';
import TimePickerBase, { TimePickerProps } from 'antd/lib/time-picker';
import cx from 'classnames';

import './TimePicker.scss';
import cls from './TimePicker.module.scss';

export interface IProps extends TimePickerProps {
  state?: 'default' | 'success' | 'error';
  message?: string;
}

const TimePicker: React.FC<IProps> = ({ state, message, ...props }) => (
  <div className={cx(cls.wrapper, state && cls[`wrapper--state-${state}`])}>
    <TimePickerBase className={cls.timePicker} {...props} />
    {!!message && <div className={cls.validation}>{message}</div>}
  </div>
);

export default TimePicker;
