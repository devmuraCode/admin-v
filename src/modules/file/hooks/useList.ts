import get from 'lodash/get';
import { useQuery } from 'react-query';

import config from '@/config';

import { getMeta, getFile } from '@/helpers/mappers';
import { IParams } from '@/helpers/interfaces';

import * as Api from '../api';
import * as Types from '../types';
import * as Constants from '../constants';

interface IProps {
  params?: IParams;
}

const useList = ({ params }: IProps = {}) => {
  const initialData = { items: [], meta: getMeta() } as Types.IQuery.List;

  const paramsWithDefaults = {
    page: params?.page ? params.page - 1 : 0,
    perPage: params?.perPage || config.list.perPage,
    sort: {
      name: params?.sort?.name || 'createdAt',
      direction: params?.sort?.direction || 'desc',
    },
    filter: (params?.filter || []).filter(i => !!i.value),
  };

  const { data = initialData, ...args } = useQuery<Types.IQuery.List, string, Types.IQuery.List>(
    [Constants.ENTITY, 'list', paramsWithDefaults],
    async () => {
      const { data } = await Api.List({
        params: paramsWithDefaults,
      });

      const items = (get(data, 'data.data') || []).reduce(
        (prev, item) => [...prev, getFile(item)],
        [],
      );
      const meta = getMeta(data);

      return {
        items,
        meta,
      };
    },
    { initialData, keepPreviousData: true },
  );

  return { ...args, ...data };
};

export default useList;
