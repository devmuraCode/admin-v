import { AxiosPromise } from 'axios';

import { http } from '@/services';

import { IParams } from '@/helpers/interfaces';

import * as Types from './types';

export const List = ({ params }: { params: IParams }): AxiosPromise<Types.IApi.List.Response> =>
  http.request.post('/admin/partners/pageable', {
    perPage: params.perPage,
    page: params.page,
    sort: params.sort,
    search: params.filter,
  });

export const Single = ({ id }: { id: string }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`/admin/partners/${id}`);

export const Create = ({
  values,
}: {
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post('/admin/partners', {
    name: values.name,
    url: values.url,
    photoId: values.photoId,
    status: values.status,
  });

export const Update = ({
  id,
  values,
}: {
  id: string;
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.put(`/admin/partners/${id}`, {
    name: values.name,
    url: values.url,
    photoId: values.photoId,
    status: values.status,
  });

export const Delete = ({ id }: { id: string }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.delete(`/admin/partners/${id}`);
