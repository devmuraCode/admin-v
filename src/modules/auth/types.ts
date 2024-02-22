import { ROLE } from '@/helpers/enums';

export declare namespace IAction {
  export namespace Login {
    export interface Request {
      token: IEntity.Token;
    }
  }

  export namespace Logout {
    export interface Request {
      accessToken: string;
    }
  }

  export namespace Profile {
    export interface Request {
      profile: IEntity.Profile;
    }
  }
}

export declare namespace IApi {
  export namespace Login {
    export interface Request {
      username: string;
      password: string;
    }

    export interface Response {
      data: {
        accessToken: string;
      };
    }
  }

  export namespace Profile {
    export interface Response {
      data: IEntity.Profile;
    }
  }
}

export declare namespace IEntity {
  export interface Profile {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    username: string;
    role: ROLE;
  }

  export interface Token {
    accessToken: string;
  }
}

export declare namespace IQuery {
  export interface Login {
    username: string;
    password: string;
  }

  export type Profile = IEntity.Profile;
}

export declare namespace IForm {
  export interface Login {
    username: string;
    password: string;
  }
}

export interface IState {
  isAuthenticated: boolean;
  isFetched: boolean;
  token: string;
  profile: IEntity.Profile;
}
