import { useMutation, useQueryClient } from 'react-query';

import { getFile } from '@/helpers/mappers';
import { IFile } from '@/helpers/interfaces';

import * as Api from '../api';
import * as Types from '../types';
import * as Constants from '../constants';

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation<IFile, string, Types.IQuery.Delete, any>(
    async ({ id }) => {
      const { data } = await Api.Delete({ id });

      return getFile(data && data.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          predicate: query => query.queryKey[0] === Constants.ENTITY && query.queryKey[1] === 'list',
        });
      },
    },
  );
};

export default useDelete;
