import React from 'react';
import { useTranslation } from 'react-i18next';



import Details from './Details';

import cls from './Uploader.module.scss';
import Icon from '@/components/Icon';

interface IProps {
  accept?: string[];
  type: 'image' | 'video' | 'file';
  details: {
    resolution?: string;
    extension?: string;
    size?: string;
  };
  onSelect: (file: File) => void;
}

const Default: React.FC<IProps> = ({ accept, type, details, onSelect }) => {
  const { t } = useTranslation();

  const icon = {
    image: 'CameraAdd',
    video: 'VideoAdd',
    file: 'DocumentAdd',
  };

  return (
    <label className={cls.trigger}>
      <div className={cls.content}>
        <Details {...details} size={`gacha ${details.size}`} />
      </div>
      <div className={cls.upload}>
        <div className={cls.uploadIcon}>
          <Icon name={icon[type]} />
        </div>
        <div className={cls.uploadButton}>
          <input
            type='file'
            multiple={false}
            accept={accept && accept.join(',')}
            onChange={({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
              const file = files && files[0];

              if (file) {
                onSelect(file);
              }
            }}
          />
          <span>{t('download')}</span>
        </div>
      </div>
    </label>
  );
};

export default Default;
