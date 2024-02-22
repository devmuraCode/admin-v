import { useQuery } from 'react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';
import * as Constants from '../constants';

interface IProps {
  pageName: Constants.PAGE_NAME;
}

const useSingle = ({ pageName }: IProps) => {
  const initialData = { item: Mappers.getData() } as Types.IQuery.Single;

  const { data = initialData, ...args } = useQuery<
    Types.IQuery.Single,
    string,
    Types.IQuery.Single
  >(
    [Constants.ENTITY, 'single', pageName],
    async () => {
      const { data } = await Api.Single({ pageName });

      return {
        item: Mappers.getData(data && data.data),
      };
    },
    { initialData, enabled: !!pageName, retry: false },
  );

  return { ...args, ...data };
};

export default useSingle;
