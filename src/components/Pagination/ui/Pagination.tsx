import React from 'react';
import cx from 'classnames';
import Paginate from 'react-paginate';

import Icon from '@/components/Icon';

import cls from './Pagination.module.scss';

interface IProps {
  total: number;
  current: number;
  pageRangeDisplayed?: number;
  onChange: (current: number) => void;
}

const Pagination: React.FC<IProps> = ({ total, current, pageRangeDisplayed = 5, onChange }) => (
  <Paginate
    {...{ pageRangeDisplayed }}
    pageCount={total}
    forcePage={current - 1}
    onPageChange={({ selected }) => onChange(selected + 1)}
    containerClassName={cls.wrapper}
    pageClassName={cls.item}
    pageLinkClassName={cls.itemLink}
    activeClassName={cls.itemActive}
    activeLinkClassName={cls.itemActiveLink}
    previousLinkClassName={cx(cls.itemLink, cls.itemPrevLink)}
    nextLinkClassName={cx(cls.itemLink, cls.itemNextLink)}
    disabledClassName={cls.itemDisabled}
    previousLabel={<Icon className={cls.itemIcon} name='ChevronLeft' size={16} />}
    nextLabel={<Icon className={cls.itemIcon} name='ChevronRight' size={16} />}
    breakLabel={<Icon className={cls.itemBreakIcon} name='MoreVertical' size={16} />}
    breakClassName={cx(cls.itemLink, cls.itemBreak)}
    marginPagesDisplayed={1}
  />
);

export default Pagination;
