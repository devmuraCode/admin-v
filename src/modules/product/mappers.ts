import get from 'lodash/get';

import { getMinFile, getMultiName } from '@/helpers/mappers';

import * as Types from './types';

export const getData = (item?: Types.IEntity.Data | Types.IApi.Single.Response): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  name: getMultiName(get(item, 'name')),
  price: get(item, 'price') || 0,
  description: getMultiName(get(item, 'description')),
  categoryId: get(item, 'category.name'),
  photos: (get(item, 'photos') || []).map((item: any) => getMinFile(item)),
  status: get(item, 'status') || '',
});
