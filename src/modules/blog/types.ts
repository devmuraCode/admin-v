import { STATUS } from '@/helpers/enums';
import { IMeta, IMinFile, IMultiName } from '@/helpers/interfaces';

import { BLOG_TYPE } from './constants';

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
  export interface Data extends Omit<IForm.Values, 'photoId'> {
    id: string;
    photo: IMinFile;
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
    name: IMultiName;
    title: IMultiName;
    description: IMultiName;
    photoId: string;
    type: BLOG_TYPE;
    status: STATUS;
  }
}
