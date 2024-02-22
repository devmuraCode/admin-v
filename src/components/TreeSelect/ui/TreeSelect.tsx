import React, { useState } from 'react';
import TreeSelectBase, { TreeSelectProps } from 'antd/lib/tree-select';
import cx from 'classnames';

import Icon from '@/components/Icon';

import './TreeSelect.scss';
import cls from './TreeSelect.module.scss';

interface ITreeNode {
  value?: string | number;
  title?: React.ReactNode;
  disabled?: boolean;
  key?: string | number;
  children?: ITreeNode[];
  [prop: string]: any;
}

export interface IProps extends Omit<TreeSelectProps<any>, 'treeData' | 'onFocus' | 'onBlur'> {
  options: ITreeNode[];
  state?: 'default' | 'success' | 'error';
  message?: string;
}

const TreeSelect: React.FC<IProps> = ({ options, state, message, disabled, ...props }) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <div
      className={cx(
        cls.wrapper,
        state && cls[`wrapper--state-${state}`],
        isFocused && cls['wrapper--focused'],
        disabled && cls['wrapper--disabled'],
      )}
    >
      <TreeSelectBase
        className={cls.treeSelect}
        {...props}
        {...{ disabled }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onDropdownVisibleChange={open => setFocused(open)}
        suffixIcon={<Icon name='ChevronDown' size={14} />}
        treeData={options}
        switcherIcon={<Icon name='ChevronDown' size={12} />}
      />
      {!!message && <div className={cls.validation}>{message}</div>}
    </div>
  );
};

export default TreeSelect;
