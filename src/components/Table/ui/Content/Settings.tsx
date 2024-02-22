import React from 'react';
import cx from 'classnames';

import Icon from '@/components/Icon';

import cls from '../Table.module.scss';

interface IProps {
  onClick?: () => void;
}

const Settings: React.FC<IProps> = ({ onClick }) => (
  <div className={cx(cls.content, cls['content--settings'])} {...{ onClick }}>
    <Icon name='TableSettings' size={24} />
  </div>
);

export default Settings;
