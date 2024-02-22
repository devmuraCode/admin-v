import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { PAGE_NAME } from '@/modules/contact/constants';

import * as Fields from '@/containers/Fields';

import * as Grid from '@/components/Grid';

import Label from '@/components/Label';

const Form: React.FC = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useSearchParams();
  const [activeLanguage, setActiveLanguage] = useState('uz');

  return (
    <Grid.Row gutter={[24, 24]}>
      <Grid.Col xs={24} xl={16}>
        <Fields.LanguageSwitcher
          active={activeLanguage}
          onChange={value => setActiveLanguage(value)}
          fields={['info']}
        />
      </Grid.Col>

      <Grid.Col xs={24} xl={16}>
        <Label title={t('field_info')}>
          <Fields.Editor name={`info[${activeLanguage}]`} />
        </Label>
      </Grid.Col>

      <Grid.Col xs={24} xl={8}>
        <Label title={t('field_page_name')}>
          <Fields.Select
            name='pageName'
            options={[
              {
                value: PAGE_NAME.AUTHOR,
                title: t(PAGE_NAME.AUTHOR),
              },
              {
                value: PAGE_NAME.CONTACT,
                title: t(PAGE_NAME.CONTACT),
              },
            ]}
            onChange={value => {
              query.set('pageName', value);
              setQuery(query);
            }}
          />
        </Label>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Form;
