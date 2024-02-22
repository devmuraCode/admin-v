import React from 'react';
import { useTranslation } from 'react-i18next';

import * as Fields from '@/containers/Fields';

import * as Grid from '@/components/Grid';

import Label from '@/components/Label';

const Form: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Grid.Row gutter={[24, 24]}>
      <Grid.Col xs={24}>
        <Label title={t('field_username')} required>
          <Fields.Text name='username' validation={{ required: true }} />
        </Label>
      </Grid.Col>

      <Grid.Col xs={24}>
        <Label title={t('field_password')} required>
          <Fields.Text name='password' validation={{ required: true }} />
        </Label>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Form;
