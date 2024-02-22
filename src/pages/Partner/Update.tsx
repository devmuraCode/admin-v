import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import message from 'antd/lib/message';

import * as Forms from '@/modules/partner/forms';
import * as Hooks from '@/modules/partner/hooks';

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
          url: item.url,
          photoId: item.photo.id,
          status: item.status,
        }}
        onSuccess={() => {
          navigate('/partners');
          message.success(t('successfully_updated'));
        }}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitting && <Spinner full />}

            <PageHeader
              title={t('title_partner_update')}
              breadcrumb={{
                routes: [
                  {
                    to: '/',
                    icon: 'Home',
                  },
                  {
                    to: '/partners',
                    name: t('title_partners'),
                  },
                  {
                    name: t('title_partner_update'),
                  },
                ],
              }}
              buttons={[
                <Button
                  key='cancel'
                  title={t('action_cancel')}
                  variant='white'
                  prefixIcon={<Icon name='CloseCircle' />}
                  container={<Link to='/partners' />}
                />,
                <Button
                  htmlType='submit'
                  key='save'
                  title={t('action_save')}
                  variant='green'
                  prefixIcon={<Icon name='CheckmarkCircle' />}
                />,
              ]}
              onBack={() => navigate('/partners')}
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
