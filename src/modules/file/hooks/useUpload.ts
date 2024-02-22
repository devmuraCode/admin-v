import { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

import { IFile } from '@/helpers/interfaces';
import { getFile, getFileSize } from '@/helpers/mappers';

import * as Api from '../api';
import * as Types from '../types';

type IFormValues = Types.IForm.Upload;

let cancelSource = axios.CancelToken.source();

const useUpload = () => {
  const [progress, setProgress] = useState({
    percent: 0,
    total: '0 KB',
    loaded: '0 KB',
  });

  const cancel = () => cancelSource.cancel('canceled');

  const mutation = useMutation<IFile, string, IFormValues, any>(
    async values => {
      cancelSource = axios.CancelToken.source();

      const { data } = await Api.Upload({
        values,
        onUploadProgress: event => {
          const percent = Math.round((event.loaded * 100) / event.total);

          setProgress({
            percent,
            total: getFileSize(event.total),
            loaded: getFileSize(event.loaded),
          });
        },
        cancelToken: cancelSource.token,
      });

      return getFile(data && data.data);
    },
    {
      onMutate: () => {
        setProgress({
          percent: 0,
          total: '0 KB',
          loaded: '0 KB',
        });
      },
    },
  );

  return {
    ...mutation,
    progress,
    cancel,
  };
};

export default useUpload;
