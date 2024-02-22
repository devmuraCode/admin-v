import { AxiosPromise } from 'axios';

import { http } from '@/services';

import * as Types from './types';
import * as Constants from './constants';

export const Single = ({
  pageName,
}: {
  pageName: Constants.PAGE_NAME;
}): AxiosPromise<Types.IApi.Single.Response> => http.request.get(`/admin/page-infos/${pageName}`);

export const Save = ({
  values,
}: {
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post('/admin/page-infos', {
    info: values.info,
    pageName: values.pageName,
  });
