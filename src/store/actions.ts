import { action } from 'typesafe-actions';

import * as Constants from './constants';

export const StoreReset = () => action(Constants.STORE_RESET);
