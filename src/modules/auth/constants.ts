export const ENTITY = 'AUTH';

export enum LOGIN {
  REQUEST = '@@AUTH/LOGIN/REQUEST',
}

export enum PROFILE {
  REQUEST = '@@AUTH/PROFILE/REQUEST',
}

export enum LOGOUT {
  REQUEST = '@@AUTH/LOGOUT/REQUEST',
  SUCCESS = '@@AUTH/LOGOUT/SUCCESS',
}
