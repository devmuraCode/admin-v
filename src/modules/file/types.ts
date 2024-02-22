import { IMeta, IFile } from '@/helpers/interfaces';

export declare namespace IApi {
  export namespace List {
    export interface Response {
      data: File[];
    }
  }

  export namespace Single {
    export interface Response {
      data: File;
    }
  }

  export interface File {
    id: number;
  }
}

export declare namespace IQuery {
  export interface List {
    items: IFile[];
    meta: IMeta;
  }

  export interface Single {
    item: IFile;
  }

  export interface Delete {
    id: string;
  }
}

export declare namespace IForm {
  export interface Upload {
    file: File;
  }
}
