import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import message from 'antd/lib/message';

import * as Forms from '@/modules/blog/forms';
import * as Hooks from '@/modules/blog/hooks';

import Icon from '@/components/Icon';
import Button from '@/components/Button';
import Spacer from '@/components/Spacer';
import Spinner from '@/components/Spinner';
import PageHeader from '@/components/PageHeader';

import Form from './components/Form';

const Update: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { item } = Hooks.useSingle({ id });

  return (
    <>
      <Forms.Update
        id={id}
        values={{
          name: item.name,
          title: item.title,
          description: item.description,
          photoId: item.photo.id,
          type: item.type,
          status: item.status,
        }}
        onSuccess={() => {
          navigate('/blogs');
          message.success(t('successfully_updated'));
        }}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitting && <Spinner full />}

            <PageHeader
              title={t('title_blog_update')}
              breadcrumb={{
                routes: [
                  {
                    to: '/',
                    icon: 'Home',
                  },
                  {
                    to: '/blogs',
                    name: t('title_blogs'),
                  },
                  {
                    name: t('title_blog_update'),
                  },
                ],
              }}
              buttons={[
                <Button
                  key='cancel'
                  title={t('action_cancel')}
                  variant='white'
                  prefixIcon={<Icon name='CloseCircle' />}
                  container={<Link to='/blogs' />}
                />,
                <Button
                  htmlType='submit'
                  key='save'
                  title={t('action_save')}
                  variant='green'
                  prefixIcon={<Icon name='CheckmarkCircle' />}
                />,
              ]}
              onBack={() => navigate('/blogs')}
            />

            <Spacer size={24} />

            <Form />
          </>
        )}
      </Forms.Update>
    </>
  );
};

export default Update;
