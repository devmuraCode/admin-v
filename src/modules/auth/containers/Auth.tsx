import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import type * as Store from '@/store';

import * as Api from '../api';
import * as Types from '../types';
import * as Actions from '../actions';
import * as Mappers from '../mappers';
import * as Constants from '../constants';

interface IProps {
  children: JSX.Element;
}

const Auth: React.FC<IProps> = ({ children }) => {
  const dispatch = useDispatch();

  const accessToken = useSelector<Store.Types.IState, string>(state => state.auth.token);

  useQuery<Types.IEntity.Profile, any, Types.IEntity.Profile>(
    [Constants.ENTITY, 'profile', accessToken],
    async () => {
      const { data } = await Api.Profile();

      return Mappers.Profile(data && data.data);
    },
    {
      enabled: !!accessToken,
      onSuccess: profile => {
        dispatch(Actions.Profile.request({ profile }));
      },
      onError: () => {
        dispatch(Actions.Logout.request());
      },
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  return children;
};

export default Auth;
