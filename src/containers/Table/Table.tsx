import { useEffect } from 'react';
import { TableProps } from 'antd/lib/table';
import { SorterResult } from 'antd/lib/table/interface';
import { useSearchParams } from 'react-router-dom';

import Table from '@/components/Table';

import * as Helpers from './helpers';

interface IProps<RecordType>
  extends Omit<TableProps<RecordType>, 'pagination' | 'showSorterTooltip' | 'onChange'> {
  defaultSort?: string;
}

const TableContainer = <RecordType extends object = any>({
  columns,
  defaultSort,
  ...props
}: IProps<RecordType>) => {
  const [query, setQuery] = useSearchParams();

  const sort = defaultSort || '';

  useEffect(() => {
    const scrollContainer = document.querySelector('[class^="LayoutMain_content"]');

    if (!scrollContainer) {
      return;
    }

    scrollContainer.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [query.get('page'), query.get('sort')]);

  return (
    <Table
      {...props}
      columns={Helpers.columns<RecordType>(columns, { sort: sort ? String(sort) : '' })}
      onChange={(pagination, filters, sorter: SorterResult<RecordType>) => {
        const defaultSortColumnKey = !!defaultSort && defaultSort.replace('-', '');

        let sortValue: any = `${sorter.order === 'descend' ? '-' : ''}${sorter.columnKey}`;

        if (sorter.columnKey !== defaultSortColumnKey) {
          sortValue = sorter.order ? sortValue : undefined;
        }

        query.set('page', undefined);
        query.set('sort', sortValue);
        setQuery(query);
      }}
    />
  );
};

export default TableContainer;
