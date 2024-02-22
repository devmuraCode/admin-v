import React, { useState } from 'react';
import cx from 'classnames';

import Modal from '@/components/Modal';

import Default from './Default';
import Preview from './Preview';
import Progress from './Progress';

import cls from './MultiUploader.module.scss';

interface IProps {
  fileIds: string[];
  state?: 'default' | 'error' | 'progress';
  accept?: string[];
  type: 'image' | 'video' | 'file';
  details: {
    resolution?: string;
    extension?: string;
    size?: string;
  };
  onSelect: (file: File) => void;
  progress?: {
    percent: number;
    total: string;
    loaded: string;
    onCancel: () => void;
  };
  onRemove: (id: string) => void;
  message?: string;
}

const MultiUploader: React.FC<IProps> = ({
  fileIds,
  state = 'default',
  accept,
  type,
  details,
  onSelect,
  progress,
  onRemove,
  message,
}) => {
  const [file, setFile] = useState(null);

  return (
    <>
      {fileIds.length ? (
        <div className={cls.list}>
          {fileIds.map(fileId => (
            <Preview
              id={fileId}
              {...{ type }}
              onView={file => {
                setFile(file);
              }}
              onRemove={() => onRemove(fileId)}
              key={fileId}
            />
          ))}
        </div>
      ) : null}

      <div className={cx(cls.wrapper, state && cls[`wrapper--state-${state}`])}>
        {state === 'progress' && progress ? (
          <Progress {...{ type }} {...progress} />
        ) : (
          <Default {...{ accept, type, details, onSelect }} />
        )}
        {!!message && <div className={cls.message}>{message}</div>}
      </div>

      <Modal title={file?.name} open={!!file} onCancel={() => setFile(null)} width={800}>
        <img
          src={file?.url}
          style={{ display: 'block', margin: 'auto', width: 'auto', maxWidth: 600 }}
          alt={file?.name}
        />
      </Modal>
    </>
  );
};

export default MultiUploader;
