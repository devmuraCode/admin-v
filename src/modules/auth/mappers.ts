import get from 'lodash/get';

import type * as Types from './types';

export const Profile = (item?): Types.IEntity.Profile => ({
  id: get(item, 'id') || '',
  fullName: get(item, 'fullName') || '',
  firstName: get(item, 'firstName') || '',
  lastName: get(item, 'lastName') || '',
  username: get(item, 'username') || '',
  role: get(item, 'role') || '',
});

export const Token = (item?): Types.IEntity.Token => ({
  accessToken: get(item, 'accessToken') || '',
});
