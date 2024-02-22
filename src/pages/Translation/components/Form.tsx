import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { STATUS } from '@/helpers/enums';

import { TRANSLATION_TYPE } from '@/modules/translation/constants';

import * as Fields from '@/containers/Fields';

import * as Grid from '@/components/Grid';

import Label from '@/components/Label';

const Form: React.FC = () => {
  const { t } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState('uz');

  return (
    <Grid.Row gutter={[24, 24]}>
      <Grid.Col xs={24} xl={16}>
        <Fields.LanguageSwitcher
          active={activeLanguage}
          onChange={value => setActiveLanguage(value)}
          fields={['name', 'title', 'description']}
        />
      </Grid.Col>

      <Grid.Col xs={24} xl={16}>
        <Label title={t('field_name')} required>
          <Fields.Textarea name={`name[${activeLanguage}]`} validation={{ required: true }} />
        </Label>
      </Grid.Col>

      <Grid.Col xs={24} xl={8}>
        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={24}>
            <Label title={t('field_tag')} required>
              <Fields.Text name='tag' validation={{ required: true }} />
            </Label>
          </Grid.Col>

          <Grid.Col xs={24}>
            <Label title={t('field_types')} required>
              <Fields.Select
                name='types'
                mode='multiple'
                options={[
                  {
                    value: TRANSLATION_TYPE.ADMIN_CABINET,
                    title: t(TRANSLATION_TYPE.ADMIN_CABINET),
                  },
                  {
                    value: TRANSLATION_TYPE.CLIENT_CABINET,
                    title: t(TRANSLATION_TYPE.CLIENT_CABINET),
                  },
                ]}
                validation={{ required: true, min: 1 }}
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
