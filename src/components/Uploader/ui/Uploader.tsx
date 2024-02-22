import React from 'react';
import cx from 'classnames';

import Default from './Default';
import Preview from './Preview';
import Progress from './Progress';

import cls from './Uploader.module.scss';

interface IProps {
  state?: 'default' | 'success' | 'error' | 'progress' | 'preview';
  accept?: string[];
  type: 'image' | 'video' | 'file';
  details: {
    resolution?: string;
    extension?: string;
    size?: string;
  };
  onSelect: (file: File) => void;
  file?: {
    name: string;
    source: string;
    size: string;
    extension: string;
    onView: () => void;
    onRemove: () => void;
  };
  progress?: {
    percent: number;
    total: string;
    loaded: string;
    onCancel: () => void;
  };
  message?: string;
}

const Uploader: React.FC<IProps> = ({
  state = 'default',
  accept,
  type,
  details,
  onSelect,
  file,
  progress,
  message,
}) => {
  let content;

  if (state === 'progress' && progress) {
    content = <Progress {...{ type }} {...progress} />;
  } else if (state === 'preview' && file) {
    content = <Preview {...{ type, details }} {...file} />;
  } else {
    content = <Default {...{ accept, type, details, onSelect }} />;
  }

  return (
    <div className={cx(cls.wrapper, state && cls[`wrapper--state-${state}`])}>
      <div className={cls.wrapperInner}>{content}</div>
      {!!message && <div className={cls.message}>{message}</div>}
    </div>
  );
};

export default Uploader;
