import { IMultiName } from '@/helpers/interfaces';

import { PAGE_NAME } from './constants';

export declare namespace IApi {
  export namespace Single {
    export interface Response {
      data: IEntity.Data;
    }
  }
}

export declare namespace IEntity {
  export interface Data extends IForm.Values {
    id: string;
  }
}

export declare namespace IQuery {
  export interface Single {
    item: IEntity.Data;
  }
}

export declare namespace IForm {
  export interface Values {
    info: IMultiName;
    pageName: PAGE_NAME;
  }
}
