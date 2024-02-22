import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import message from 'antd/lib/message';

import { ROLE } from '@/helpers/enums';

import { useAuth } from '@/modules/auth/hooks';
import * as Forms from '@/modules/contact/forms';
import * as Hooks from '@/modules/contact/hooks';
import { PAGE_NAME } from '@/modules/contact/constants';

import Icon from '@/components/Icon';
import Spacer from '@/components/Spacer';
import Button from '@/components/Button';
import PageHeader from '@/components/PageHeader';

import Form from './components/Form';

const PageInfo: React.FC = () => {
  const { t } = useTranslation();
  const [query] = useSearchParams();
  const { profile } = useAuth();

  const { item } = Hooks.useSingle({ pageName: query.get('pageName') as PAGE_NAME });

  return (
    <>
      <Forms.Save
        values={{
          info: item.info,
          pageName: item.pageName,
        }}
        onSuccess={() => {
          message.success(t('successfully_saved'));
        }}
      >
        {({ values }) => (
          <>
            <PageHeader
              title={t('title_contact')}
              breadcrumb={{
                routes: [
                  {
                    to: '/',
                    icon: 'Home',
                  },
                  {
                    name: t('title_contact'),
                  },
                ],
              }}
              buttons={[
                <Button
                  htmlType='submit'
                  key='save'
                  title={t('action_save')}
                  variant='green'
                  prefixIcon={<Icon name='CheckmarkCircle' />}
                  disabled={
                    ![ROLE.ADMIN, ROLE.MODERATOR].includes(profile.role) || !values.pageName
                  }
                />,
              ]}
            />

            <Spacer size={24} />

            <Form />
          </>
        )}
      </Forms.Save>
    </>
  );
};

export default PageInfo;
