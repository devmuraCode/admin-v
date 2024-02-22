import get from 'lodash/get';

import { getMinFile, getMultiName } from '@/helpers/mappers';

import * as Types from './types';

export const getData = (item?): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  name: getMultiName(get(item, 'name')),
  title: getMultiName(get(item, 'title')),
  description: getMultiName(get(item, 'description')),
  photo: getMinFile(get(item, 'photo')),
  createdAt: get(item, 'createdAt') || '',
  updatedAt: get(item, 'updatedAt') || '',
  type: get(item, 'type') || '',
  status: get(item, 'status') || '',
});
