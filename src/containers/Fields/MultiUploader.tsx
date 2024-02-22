import React from 'react';
import { useTranslation } from 'react-i18next';
import { useField } from 'formik';

import { useUpload } from '@/modules/file/hooks';

import MultiUploaderBase from '@/components/MultiUploader';

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
    max?: number;
    min?: number;
  };
}

const MultiUploader: React.FC<IProps> = ({
  name,
  type,
  accept,
  maxFileSize,
  details,
  validation,
}) => {
  const { t } = useTranslation();
  const [field, meta, helpers] = useField({
    name,
    validate: (value): string => {
      if (!validation) {
        return '';
      }

      if (validation.required && !value.length) {
        return 'validation_required';
      }

      if (validation.min && validation.min > value.length) {
        return `validation_min_length_${validation.min}`;
      }

      if (validation.max && validation.max < value.length) {
        return `validation_max_length_${validation.max}`;
      }

      return '';
    },
  });

  const { progress, ...mutation } = useUpload();

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
          helpers.setValue([...field.value, data.id]);
        },
      },
    );
  };

  let state;

  if (meta.error) {
    state = 'error';
  } else if (mutation.isLoading) {
    state = 'progress';
  } else {
    state = 'default';
  }

  return (
    <MultiUploaderBase
      {...{ fileIds: field.value || [], state, type, accept, details, onSelect }}
      progress={{
        percent: progress.percent,
        total: progress.total,
        loaded: progress.loaded,
        onCancel: () => helpers.setValue(null),
      }}
      onRemove={id => {
        helpers.setValue(field.value.filter(v => v != id));
      }}
      message={meta.error}
    />
  );
};

export default MultiUploader;
