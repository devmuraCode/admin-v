import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useField } from 'formik';

import { useSingle, useUpload } from '@/modules/file/hooks';

import Modal from '@/components/Modal';
import UploaderBase from '@/components/Uploader';

interface IProps {
  name: string;
  type: 'image' | 'video' | 'file';
  accept: string[];
  maxFileSize?: number;
  details: {
    resolution?: string;
    extension?: string;
    size?: string;
  };
  validation?: {
    required?: boolean;
  };
}

const Uploader: React.FC<IProps> = ({ name, type, accept, maxFileSize, details, validation }) => {
  const { t } = useTranslation();
  const [isView, setView] = useState(false);
  const [field, meta, helpers] = useField({
    name,
    validate: (value): string => {
      if (!validation) {
        return '';
      }

      if (validation.required && !value) {
        return 'validation_required';
      }

      return '';
    },
  });

  const { progress, ...mutation } = useUpload();

  const { item } = useSingle({ id: field.value });

  const onSelect = (file: File) => {
    if (maxFileSize && file.size > maxFileSize * 1000) {
      helpers.setError(t('file_size_large'));
      return;
    }

    helpers.setError(undefined);

    mutation.mutate(
      { file },
      {
        onSuccess: data => {
          helpers.setValue(data.id);
        },
      },
    );
  };

  let state;

  const status = {
    loading: 'progress',
    error: 'error',
    success: 'success',
  };

  if (field.value && item.id) {
    state = 'preview';
  } else if (meta.error) {
    state = 'error';
  } else if (field.value && !item.id) {
    state = 'progress';
  } else {
    state = status[mutation.status];
  }

  return (
    <>
      <UploaderBase
        {...{ state, type, accept, details, onSelect }}
        progress={{
          percent: progress.percent,
          total: progress.total,
          loaded: progress.loaded,
          onCancel: () => helpers.setValue(null),
        }}
        file={{
          name: item.name,
          source: item.url,
          size: item.size,
          extension: item.extension,
          onView: () => setView(true),
          onRemove: () => helpers.setValue(null),
        }}
        message={meta.error}
      />
      <Modal title={item.name} open={isView} onCancel={() => setView(false)} width={800}>
        <img
          src={item.url}
          style={{ width: 'auto', display: 'block', margin: 'auto', maxWidth: 600 }}
          alt={item.name}
        />
      </Modal>
    </>
  );
};

export default Uploader;
