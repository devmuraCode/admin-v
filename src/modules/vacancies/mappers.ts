import get from 'lodash/get';

import { getMultiName } from '@/helpers/mappers';

import * as Types from './types';

export const getData = (item?): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  name: getMultiName(get(item, 'name')),
  salary: get(item, 'salary') || 0,
  description: getMultiName(get(item, 'description')),
  photo: get(item, 'photo') || '',
  status: get(item, 'status') || '',
});
