import { useDispatch, useSelector } from 'react-redux';

import * as StoreTypes from '@/store/types';

import * as Types from '../types';
import * as Actions from '../actions';

interface IReturn {
  isAuthenticated: boolean;
  isFetched: boolean;
  token: string;
  profile: Types.IEntity.Profile;
  methods: {
    logout: () => void;
  };
}

const useAuth = (): IReturn => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector<StoreTypes.IState, boolean>(
    state => state.auth.isAuthenticated,
  );
  const isFetched = useSelector<StoreTypes.IState, boolean>(state => state.auth.isFetched);
  const token = useSelector<StoreTypes.IState, string>(state => state.auth.token);
  const profile = useSelector<StoreTypes.IState, Types.IEntity.Profile>(
    state => state.auth.profile,
  );

  const logout = () => {
    dispatch(Actions.Logout.request());
  };

  return { isAuthenticated, isFetched, token, profile, methods: { logout } };
};

export default useAuth;
