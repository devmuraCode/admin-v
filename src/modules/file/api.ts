import { AxiosPromise, CancelToken } from 'axios';

import { http } from '@/services';

import { IParams } from '@/helpers/interfaces';

import * as Types from './types';

export const List = ({ params }: { params: IParams }): AxiosPromise<Types.IApi.List.Response> =>
  http.request.post('/files/pageable', {
    perPage: params.perPage,
    page: params.page,
    sort: params.sort,
    search: params.filter,
  });

export const Single = ({
  id,
}: {
  id: string;
}): AxiosPromise<{ data: Types.IApi.Single.Response }> => http.request.get(`/files/${id}`);

export const Upload = ({
  values,
  onUploadProgress,
  cancelToken,
}: {
  values: Types.IForm.Upload;
  onUploadProgress: (e: any) => void;
  cancelToken: CancelToken;
}): AxiosPromise<{ data: Types.IApi.Single.Response }> => {
  const data = new FormData();
  data.append('file', values.file);

  return http.request.post('/files/upload', data, {
    onUploadProgress,
    cancelToken,
  });
};

export const Download = ({
  uuid,
}: {
  uuid: string;
}): AxiosPromise<{ data: Types.IApi.Single.Response }> => {
  return http.request.get(`/files/download/${uuid}`, {
    responseType: 'blob',
  });
};

export const Delete = ({
  id,
}: {
  id: string;
}): AxiosPromise<{ data: Types.IApi.Single.Response }> => http.request.delete(`/files/${id}`);
