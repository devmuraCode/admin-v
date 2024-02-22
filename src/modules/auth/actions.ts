import { action } from 'typesafe-actions';

import * as Types from './types';
import * as Constants from './constants';

export const Login = {
  request: (args: Types.IAction.Login.Request) => action(Constants.LOGIN.REQUEST, args),
};

export const Profile = {
  request: (args: Types.IAction.Profile.Request) => action(Constants.PROFILE.REQUEST, args),
};

export const Logout = {
  request: () => action(Constants.LOGOUT.REQUEST),
  success: () => action(Constants.LOGOUT.SUCCESS),
};
