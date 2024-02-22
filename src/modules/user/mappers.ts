import get from 'lodash/get';

import * as Types from './types';

export const getData = (item?): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  firstName: get(item, 'firstName') || '',
  lastName: get(item, 'lastName') || '',
  username: get(item, 'username') || '',
  password: get(item, 'password') || '',
  role: get(item, 'role') || '',
  createdAt: get(item, 'createdAt') || '',
  updatedAt: get(item, 'updatedAt') || '',
  status: get(item, 'status') || '',
});
