import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { STATUS, ROLE } from '@/helpers/enums';

import * as Fields from '@/containers/Fields';

import * as Grid from '@/components/Grid';

import Icon from '@/components/Icon';
import Label from '@/components/Label';

const Form: React.FC = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  return (
    <Grid.Row gutter={[24, 24]}>
      <Grid.Col xs={24} xl={16}>
        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={12}>
            <Label title={t('field_first_name')} required>
              <Fields.Text name='firstName' validation={{ required: true }} />
            </Label>
          </Grid.Col>

          <Grid.Col xs={12}>
            <Label title={t('field_last_name')} required>
              <Fields.Text name='lastName' validation={{ required: true }} />
            </Label>
          </Grid.Col>

          <Grid.Col xs={12}>
            <Label title={t('field_login')} required>
              <Fields.Text name='username' validation={{ required: true }} />
            </Label>
          </Grid.Col>

          <Grid.Col xs={12}>
            <Label title={t('field_password')} required>
              <Fields.Text
                name='password'
                type={show ? 'text' : 'password'}
                iconSuffix={<Icon name='Eye' />}
                onIconSuffix={() => setShow(prev => !prev)}
              />
            </Label>
          </Grid.Col>
        </Grid.Row>
      </Grid.Col>

      <Grid.Col xs={24} xl={8}>
        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={24}>
            <Label title={t('field_role')}>
              <Fields.Select
                name='role'
                options={[
                  {
                    value: ROLE.ADMIN,
                    title: t(ROLE.ADMIN),
                  },
                  {
                    value: ROLE.MODERATOR,
                    title: t(ROLE.MODERATOR),
                  },
                ]}
              />
            </Label>
          </Grid.Col>

          <Grid.Col xs={24}>
            <Label title={t('field_status')}>
              <Fields.Select
                name='status'
                options={[
                  {
                    value: STATUS.ACTIVE,
                    title: t(STATUS.ACTIVE),
                  },
                  {
                    value: STATUS.INACTIVE,
                    title: t(STATUS.INACTIVE),
                  },
                ]}
              />
            </Label>
          </Grid.Col>
        </Grid.Row>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Form;
