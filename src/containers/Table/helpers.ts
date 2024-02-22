import { ColumnsType } from 'antd/lib/table';
import { SortOrder } from 'antd/es/table/interface';

interface IParams {
  sort?: string;
}

export const columns = <RecordType>(columns: ColumnsType<RecordType> = [], { sort = '' }: IParams): ColumnsType<RecordType> =>
  columns.map(column => {
    let sortOrder: SortOrder = null;

    if (sort && typeof sort === 'string' && column.sorter) {
      if (sort.replace('-', '') === column.key) {
        sortOrder = sort.includes('-') ? 'descend' : 'ascend';
      } else {
        sortOrder = null;
      }
    }
    return {
      ...column,
      sortOrder,
    };
  });
