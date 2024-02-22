import React from 'react';
import cx from 'classnames';

import Icon from '@/components/Icon';

import Menu from './Menu';
import Buttons from './Buttons';

import cls from './Filter.module.scss';

interface IProps {
  title: string;
  value: string;
  isActive?: boolean;
  onClear?: () => void;
}

interface IComponent extends React.FC<IProps> {
  Menu: typeof Menu;
  Buttons: typeof Buttons;
}

const Filter: IComponent = ({ title, value, isActive, onClear }) => (
  <div className={cx(cls.wrapper, isActive && cls['wrapper--active'])}>
    <div className={cls.title}>{title}:</div>
    <div className={cls.value}>{value}</div>
    {isActive && (
      <div
        className={cls.clear}
        onClick={e => {
          e.stopPropagation();
          onClear && onClear();
        }}
      >
        <Icon name='DismissCircle' />
      </div>
    )}
  </div>
);

Filter.Buttons = Buttons;
Filter.Menu = Menu;

export default Filter;
