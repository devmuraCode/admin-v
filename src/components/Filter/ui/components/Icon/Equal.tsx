import React from 'react';

import cls from './FilterIcon.module.scss';

const Equal: React.FC = props => (
  <div className={cls.equal}>
    <svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect x='5' y='9' width='14' height='1' rx='0.5' fill='currentColor' />
      <rect x='5' y='14' width='14' height='1' rx='0.5' fill='currentColor' />
    </svg>
  </div>
);

export default Equal;
