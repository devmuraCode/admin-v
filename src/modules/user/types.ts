import { ROLE, STATUS } from '@/helpers/enums';
import { IMinFile, IMeta, IIdAndName } from '@/helpers/interfaces';

export declare namespace IApi {
  export namespace List {
    export interface Response {
      data: IEntity.Data[];
    }
  }

  export namespace Single {
    export interface Response {
      data: IEntity.Data;
    }
  }
}

export declare namespace IEntity {
  export interface Data extends IForm.Values {
    id: string;
    createdAt: string;
    updatedAt: string;
  }
}

export declare namespace IQuery {
  export interface List {
    items: IEntity.Data[];
    meta: IMeta;
  }

  export interface Single {
    item: IEntity.Data;
  }

  export interface Delete {
    id: string;
  }
}

export declare namespace IForm {
  export interface Values {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    role: ROLE;
    status: STATUS;
  }
}
