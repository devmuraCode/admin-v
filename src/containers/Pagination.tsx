import React from 'react';
import { useSearchParams } from 'react-router-dom';

import PaginationBase from '@/components/Pagination';

interface IProps {
  total: number;
  current: number;
}

const Pagination: React.FC<IProps> = ({ total, current }) => {
  const [query, setQuery] = useSearchParams();

  const handleChange = page => {
    query.set('page', page);
    setQuery(query);
  };

  return <PaginationBase {...{ total, current }} onChange={handleChange} />;
};

export default Pagination;
