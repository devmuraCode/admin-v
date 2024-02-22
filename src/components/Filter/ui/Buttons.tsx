import React from 'react';
import cx from 'classnames';

import * as Icon from './components/Icon';

import cls from './Filter.module.scss';

export type IValue = 'equal' | 'not_equal' | 'less_than' | 'greater_than' | 'between';

interface IProps {
  items: IValue[];
  active: IValue;
  onChange?: (value: IValue) => void;
}

const Buttons: React.FC<IProps> = ({ items, active, onChange }) => {
  const icon = {
    equal: <Icon.Equal />,
    not_equal: <Icon.NotEqual />,
    greater_than: <Icon.GreaterThan />,
    less_than: <Icon.LessThan />,
    between: <Icon.Between />,
  };

  return (
    <div className={cls.button} onClick={e => e.stopPropagation()}>
      {items.map(item => {
        const isActive = active === item;

        return (
          <div key={`${item}`} className={cx(cls.buttonItem, isActive && cls.buttonItemActive)} onClick={() => onChange && onChange(item)}>
            {icon[item]}
          </div>
        );
      })}
    </div>
  );
};

export default Buttons;
