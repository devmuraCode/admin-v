import React from 'react';
import ImageBase from 'antd/lib/image';

import config from '@/config';

interface IProps {
  uuid: string; 
  width?: number;
  height?: number;
}

const Image: React.FC<IProps> = ({ uuid, width = 36, height = 36 }) => {
  if (!uuid) {
    return null;
  }

  return <ImageBase src={`${config.api.downloadUrl}/${uuid}`} {...{ width, height }} />;
};

export default Image;
