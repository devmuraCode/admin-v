import get from 'lodash/get';

import { getMinFile, getMultiName } from '@/helpers/mappers';

import * as Types from './types';

export const getData = (item?): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  name: getMultiName(get(item, 'name')),
  url: get(item, 'url') || '',
  photo: getMinFile(get(item, 'photo')),
  status: get(item, 'status') || '',
});
