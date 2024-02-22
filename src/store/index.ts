import configure from './configure';

export * as Types from './types';
export * as Actions from './actions';
export * as Constants from './constants';

export { configure };

export const { store, persist } = configure();
