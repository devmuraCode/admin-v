import React from 'react';
import { useField } from 'formik';

import config from '@/config';

import { http } from '@/services';

import EditorBase, { IProps as EditorProps } from '@/components/Editor';
import { getFile } from '@/helpers/mappers';

interface IProps extends Omit<EditorProps, 'id' | 'apiKey' | 'name' | 'onChange' | 'value'> {
  name: string;
  validation?: {
    required?: boolean;
    max?: number;
    min?: number;
  };
}

const Editor: React.FC<IProps> = ({ name, validation, ...props }) => {
  const [field, meta, helper] = useField({
    name,
    validate: (value): string => {
      if (!validation) {
        return '';
      }

      if (validation.required && !value) {
        return 'validation_required';
      }

      if (validation.min && validation.min > (value || '').length) {
        return `validation_min_length_${validation.min}`;
      }

      if (validation.max && validation.max < (value || '').length) {
        return `validation_max_length_${validation.max}`;
      }

      return '';
    },
  });

  const hasError = !!(meta.error && meta.touched);

  const imagesUploadHandler = (blobInfo, onSuccess, onError, progress) => {
    const formData = new FormData();

    formData.append('file', blobInfo.blob());

    http.request
      .post('/files/upload', formData, {
        onUploadProgress: ({ total, loaded }) => {
          progress && progress((loaded / total) * 100);
        },
      })
      .then(({ data }) => {
        onSuccess(getFile(data && data.data).url);
      })
      .catch(() => {
        onError('Error occurred', { remove: true });
      });
  };

  return (
    <EditorBase
      {...field}
      {...props}
      {...{ imagesUploadHandler }}
      apiKey={config.app.editorApiKey}
      id={field.name}
      value={field.value || ''}
      message={hasError ? meta.error : ''}
      state={hasError ? 'error' : 'default'}
      onChange={value => helper.setValue(value)}
    />
  );
};

export default Editor;
