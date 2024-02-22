import get from 'lodash/get';

import { getMultiName } from '@/helpers/mappers';

import * as Types from './types';

export const getData = (item?): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  info: getMultiName(get(item, 'info')),
  pageName: get(item, 'pageName') || '',
});
