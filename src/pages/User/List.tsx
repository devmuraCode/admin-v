import React, { lazy, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { STATUS, ROLE } from '@/helpers/enums';

import { useList } from '@/modules/user/hooks';

import TableContainer from '@/containers/Table';
import PaginationContainer from '@/containers/Pagination';

import Tag from '@/components/Tag';
import Icon from '@/components/Icon';
import Table from '@/components/Table';
import Modal from '@/components/Modal';
import Spacer from '@/components/Spacer';
import Button from '@/components/Button';
import PageHeader from '@/components/PageHeader';

import FilterList from './components/FilterList';

import cls from '@/assets/styles/base/page.module.scss';

const ConfirmDelete = lazy(() => import('./components/ConfirmDelete'));

const List: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const [selected, setSelected] = useState('');

  const { items, meta, isFetched } = useList({
    params: {
      page: +query.get('page')!,
      filter: [
        {
          key: 'firstName',
          operation: '%_%',
          value: query.get('first_name'),
          type: 'STRING',
        },
        {
          key: 'lastName',
          operation: '%_%',
          value: query.get('last_name'),
          type: 'STRING',
        },
        {
          key: 'username',
          operation: '%_%',
          value: query.get('username'),
          type: 'STRING',
        },
        {
          key: 'status',
          operation: '=',
          value: query.get('status'),
          type: 'STRING',
        },
        {
          key: 'status',
          operation: '!=',
          value: STATUS.DELETED,
          type: 'STRING',
        },
      ],
    },
  });

  return (
    <>
      <div>
        <PageHeader
          title={t('title_users')}
          breadcrumb={{
            routes: [
              {
                to: '/',
                icon: 'Home',
              },
              {
                name: t('title_users'),
              },
            ],
          }}
          buttons={[
            <Button
              key='create'
              size='medium'
              title={t('action_add')}
              variant='green'
              prefixIcon={<Icon name='AddCircle' />}
              container={<Link to='/users/create' />}
            />,
          ]}
        />

        <Spacer size={24} />

        <FilterList />

        <Spacer size={24} />

        <TableContainer
          rowKey='id'
          columns={[
            {
              title: '№',
              width: '60px',
              render: (text, record, index) => (meta.current - 1) * meta.perPage + index + 1,
            },
            {
              key: 'firstName',
              title: t('column_first_name'),
              dataIndex: 'firstName',
            },
            {
              key: 'lastName',
              title: t('column_last_name'),
              dataIndex: 'lastName',
            },
            {
              key: 'username',
              title: t('column_username'),
              dataIndex: 'username',
            },
            {
              key: 'createdAt',
              title: t('column_created_at'),
              dataIndex: 'createdAt',
              width: 200,
            },
            {
              key: 'updatedAt',
              title: t('column_updated_at'),
              dataIndex: 'updatedAt',
              width: 200,
            },
            {
              key: 'role',
              title: t('column_role'),
              align: 'center',
              dataIndex: 'role',
              render: value => (
                <Tag variant='INFO' size='sm'>
                  {t(value)}
                </Tag>
              ),
            },
            {
              key: 'status',
              title: t('column_status'),
              dataIndex: 'status',
              align: 'center',
              width: 120,
              render: value => <Tag variant={value}>{t(value)}</Tag>,
            },
            {
              title: <Table.Content.Settings />,
              width: 45,
              fixed: 'right',
              align: 'center',
              onCell: () => ({
                onClick: e => e.stopPropagation(),
              }),
              render: (v, item) => (
                <Table.Content.More
                  items={[
                    {
                      title: t('action_edit'),
                      icon: <Icon name='Edit' />,
                      roles: [ROLE.ADMIN],
                      variant: 'blue',
                      onClick: () => navigate(`/users/update/${item.id}`),
                    },
                    {
                      title: t('action_delete'),
                      icon: <Icon name='Delete' />,
                      roles: [ROLE.ADMIN],
                      variant: 'danger',
                      onClick: () => setSelected(item.id),
                    },
                  ]}
                />
              ),
            },
          ]}
          dataSource={items}
          loading={!isFetched}
          scroll={{ x: true }}
        />

        <Spacer size={24} />

        <div className={cls.pagination}>
          <PaginationContainer total={meta.totalPages} current={meta.current} />
        </div>
      </div>

      <Modal open={!!selected} onCancel={() => setSelected('')} width={320}>
        <ConfirmDelete id={selected} onCancel={() => setSelected('')} />
      </Modal>
    </>
  );
};

export default List;
