import React from 'react';
import cx from 'classnames';

import { IFile } from '@/helpers/interfaces';

import { useSingle } from '@/modules/file/hooks';

import Icon from '@/components/Icon';

import Details from './Details';

import cls from './MultiUploader.module.scss';

interface IProps {
  id: string;
  type: 'image' | 'video' | 'file';
  onView: (file: IFile) => void;
  onRemove: () => void;
}

const Preview: React.FC<IProps> = ({ id, type, onView, onRemove }) => {
  const { item } = useSingle({ id });

  const { name, extension, size, url } = item;

  return (
    <div className={cls.wrapper}>
      <div className={cls.content}>
        <div className={cls.name}>{name}</div>
        <Details {...{ extension, size }} />
      </div>

      <div className={cls.preview}>
        <div className={cls.previewImage}>
          {type === ('image' || 'video' || 'file') ? (
            <img src={url} alt='Image preview' />
          ) : (
            <div className={cx(cls['file-type'], cls[`file-type--${type}`])} />
          )}
        </div>

        <div className={cls.previewButtonList}>
          {type === 'image' ? (
            <div className={cls.previewButtonItem} onClick={() => onView(item)}>
              <Icon name='EyeOn' size={20} />
            </div>
          ) : null}

          <a className={cls.previewButtonItem} href={url}>
            <Icon name='DownloadArrow' size={20} />
          </a>

          <div className={cls.previewButtonItem} onClick={() => onRemove()}>
            <Icon name='Delete' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
