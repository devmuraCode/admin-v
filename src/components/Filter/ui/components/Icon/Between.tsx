import React from 'react';

import Icon from '@/components/Icon';

import cls from './FilterIcon.module.scss';

const Between: React.FC = () => (
  <div className={cls.between}>
    <Icon name='ChevronLeft' />
    <Icon name='ChevronLeft' />
  </div>
);

export default Between;
