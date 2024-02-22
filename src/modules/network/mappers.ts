import get from 'lodash/get';

import { getMinFile } from '@/helpers/mappers';

import * as Types from './types';

export const getData = (item?): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  url: get(item, 'url') || '',
  photo: getMinFile(get(item, 'photo')),
  status: get(item, 'status') || '',
});
