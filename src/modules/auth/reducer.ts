import { createTransform, persistReducer } from 'redux-persist';
import persistStorage from 'redux-persist/lib/storage';
import { ActionType } from 'typesafe-actions';

import * as Actions from './actions';
import * as Constants from './constants';

import type * as Types from './types';

const initialState: Types.IState = {
  isAuthenticated: false,
  isFetched: true,
  token: '',
  profile: {
    id: '',
    fullName: '',
    firstName: '',
    lastName: '',
    username: '',
    role: null,
  },
};

const reducer = (
  state: Types.IState = initialState,
  action: ActionType<typeof Actions>,
): Types.IState => {
  switch (action.type) {
    case Constants.LOGOUT.REQUEST: {
      return {
        ...state,
        isFetched: false,
      };
    }
    case Constants.LOGOUT.SUCCESS: {
      return {
        ...state,
        ...initialState,
        token: '',
        isAuthenticated: false,
        isFetched: true,
      };
    }
    case Constants.LOGIN.REQUEST: {
      const { token } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        isFetched: false,
        token: token.accessToken,
      };
    }
    case Constants.PROFILE.REQUEST: {
      const { profile } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        isFetched: true,
        profile,
      };
    }
    default:
      return state;
  }
};

const isFetchedTransform = createTransform<boolean, boolean, Types.IState, any>(
  state => state,
  (isFetched, key, stored) => {
    const token: Types.IEntity.Token = JSON.parse(stored.token);

    return !token.accessToken;
  },
  { whitelist: ['isFetched'] },
);

const persistConfig = {
  key: 'auth',
  storage: persistStorage,
  whitelist: ['isFetched', 'token'],
  transforms: [isFetchedTransform],
};

export default persistReducer<Types.IState>(persistConfig, reducer);
