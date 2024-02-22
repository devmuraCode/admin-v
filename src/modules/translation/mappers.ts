import get from 'lodash/get';

import { getMultiName } from '@/helpers/mappers';

import * as Types from './types';

export const getData = (item?): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  name: getMultiName(get(item, 'name')),
  tag: get(item, 'tag') || '',
  types: get(item, 'types') || [],
  status: get(item, 'status') || '',
});
