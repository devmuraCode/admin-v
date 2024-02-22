import React from 'react';

import cls from './RoleDenied.module.scss';

const RoleDenied: React.FC = () => (
  <div className={cls.wrapper}>
    <div className={cls.title}>Oops!</div>
    <div className={cls.description}>403 Permission Denied</div>
    <div className={cls.message}>Sorry, you do not have access to this page, please contact your administrator</div>
  </div>
);

export default RoleDenied;
