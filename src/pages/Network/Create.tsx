import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import message from 'antd/lib/message';

import * as Forms from '@/modules/network/forms';

import Icon from '@/components/Icon';
import Spacer from '@/components/Spacer';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';
import PageHeader from '@/components/PageHeader';

import Form from './components/Form';

const Create: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Forms.Create
        onSuccess={() => {
          navigate('/networks');
          message.success(t('successfully_created'));
        }}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitting && <Spinner full />}

            <PageHeader
              title={t('title_network_create')}
              breadcrumb={{
                routes: [
                  {
                    to: '/',
                    icon: 'Home',
                  },
                  {
                    to: '/networks',
                    name: t('title_networks'),
                  },
                  {
                    name: t('title_network_create'),
                  },
                ],
              }}
              buttons={[
                <Button
                  key='cancel'
                  title={t('action_cancel')}
                  variant='white'
                  prefixIcon={<Icon name='CloseCircle' />}
                  container={<Link to='/networks' />}
                />,
                <Button
                  htmlType='submit'
                  key='save'
                  title={t('action_save')}
                  variant='green'
                  prefixIcon={<Icon name='CheckmarkCircle' />}
                />,
              ]}
              onBack={() => navigate('/networks')}
            />

            <Spacer size={24} />

            <Form />
          </>
        )}
      </Forms.Create>
    </>
  );
};

export default Create;
