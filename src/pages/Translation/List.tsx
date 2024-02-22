import React, { lazy, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { ROLE } from '@/helpers/enums';

import { useList } from '@/modules/translation/hooks';

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
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const [selected, setSelected] = useState('');

  const { items, meta, isFetched } = useList({
    params: {
      page: +query.get('page')!,
      filter: [
        {
          key: 'name',
          operation: '%_%',
          value: query.get('name'),
          type: 'STRING',
        },
        {
          key: 'tag',
          operation: '%_%',
          value: query.get('tag'),
          type: 'STRING',
        },
        {
          key: 'status',
          operation: '=',
          value: query.get('status'),
          type: 'STRING',
        },
      ],
    },
  });

  return (
    <>
      <div>
        <PageHeader
          title={t('title_translations')}
          breadcrumb={{
            routes: [
              {
                to: '/',
                icon: 'Home',
              },
              {
                name: t('title_translations'),
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
              container={<Link to='/translations/create' />}
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
              key: 'name',
              title: t('column_name'),
              dataIndex: ['name', i18n.language],
            },
            {
              key: 'tag',
              title: t('column_tag'),
              dataIndex: 'tag',
            },
            {
              key: 'types',
              title: t('column_types'),
              dataIndex: 'types',
              render: values =>
                values.map(value => (
                  <Tag variant={value} size='sm' key={value}>
                    {t(value)}
                  </Tag>
                )),
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
                      roles: [ROLE.ADMIN, ROLE.MODERATOR],
                      variant: 'blue',
                      onClick: () => navigate(`/translations/update/${item.id}`),
                    },
                    {
                      title: t('action_delete'),
                      icon: <Icon name='Delete' />,
                      roles: [ROLE.ADMIN, ROLE.MODERATOR],
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
