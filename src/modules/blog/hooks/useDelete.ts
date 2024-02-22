import { useMutation, useQueryClient } from 'react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';
import * as Constants from '../constants';

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation<Types.IEntity.Data, string, Types.IQuery.Delete, any>(
    async ({ id }) => {
      const { data } = await Api.Delete({ id });

      return Mappers.getData(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          predicate: query => query.queryKey[0] === Constants.ENTITY && query.queryKey[1] === 'list'
        });
      }
    }
  );
};

export default useDelete;
