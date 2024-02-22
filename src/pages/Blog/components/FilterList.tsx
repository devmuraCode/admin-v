import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { STATUS } from '@/helpers/enums';

import * as Filters from '@/containers/Filters';

import * as Grid from '@/components/Grid';

export enum NEWS_TYPE {
  NEW = 'NEW',
  ARTICLE = 'ARTICLE',
}

const FilterList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const STATUS_LIST = [STATUS.ACTIVE, STATUS.INACTIVE];
  const NEW_TYPE_LIST = [NEWS_TYPE.NEW, NEWS_TYPE.ARTICLE];

  const setParamValue = (name, value) => {
    searchParams.delete('page');
    if (value) searchParams.set(name, value);
    else searchParams.delete(name);
    setSearchParams(searchParams);
  };

  return (
    <Grid.Row gutter={[12, 12]}>
      <Grid.Col>
        <Filters.Input
          name='name'
          value={searchParams.get('name') || ''}
          setValue={value => setParamValue('name', value)}
        />
      </Grid.Col>

      <Grid.Col>
        <Filters.Select
          name='type'
          value={searchParams.get('type') || ''}
          setValue={value => setParamValue('type', value)}
          filterList={NEW_TYPE_LIST}
        />
      </Grid.Col>

      <Grid.Col>
        <Filters.Select
          name='status'
          value={searchParams.get('status') || ''}
          setValue={value => setParamValue('status', value)}
          filterList={STATUS_LIST}
        />
      </Grid.Col>
    </Grid.Row>
  );
};

export default FilterList;
