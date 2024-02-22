import { useQuery } from 'react-query';

import { getFile } from '@/helpers/mappers';

import * as Api from '../api';
import * as Types from '../types';
import * as Constants from '../constants';

interface IProps {
  id: string;
}

const useSingle = ({ id }: IProps) => {
  const initialData = { item: getFile() } as Types.IQuery.Single;

  const { data = initialData, ...args } = useQuery<
    Types.IQuery.Single,
    string,
    Types.IQuery.Single
  >(
    [Constants.ENTITY, 'single', id],
    async () => {
      const { data } = await Api.Single({ id });

      return {
        item: getFile(data && data.data),
      };
    },
    { initialData, enabled: !!id },
  );

  return { ...args, ...data };
};

export default useSingle;
