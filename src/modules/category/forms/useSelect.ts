import get from 'lodash/get';
import { useQuery } from 'react-query';

import { getIdAndMultiName } from '@/helpers/mappers';
import { IIdAndMultiName } from '@/helpers/interfaces';

import * as Api from '../api';
import * as Constants from '../constants';

interface ISelectItems {
  items: IIdAndMultiName[];
}

const useSelect = () => {
  const initialData = { items: [] } as ISelectItems;

  const { data = initialData, ...args } = useQuery<ISelectItems, string, ISelectItems>(
    [Constants.ENTITY, 'select'],
    async () => {
      const data = await Api.Select();

      const items = (get(data, 'data') || []).map(item => getIdAndMultiName(item));

      return { items };
    },
    { initialData, keepPreviousData: true, retry: false },
  );

  return { ...data, ...args };
};

export default useSelect;
