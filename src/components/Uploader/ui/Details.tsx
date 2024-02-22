import React from 'react';

import cls from './Uploader.module.scss';

interface IProps {
  resolution?: string;
  extension?: string;
  size?: string;
}

const Details: React.FC<IProps> = ({ resolution, extension, size }) => (
  <div className={cls.detailList}>
    {resolution && <div className={cls.detailItem}>Hajmi: {resolution}</div>}
    {extension && <div className={cls.detailItem}>Format: {extension}</div>}
    {size && <div className={cls.detailItem}>Jami: {size}</div>}
  </div>
);

export default Details;
