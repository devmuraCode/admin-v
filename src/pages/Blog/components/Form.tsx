import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { STATUS } from '@/helpers/enums';

import { BLOG_TYPE } from '@/modules/blog/constants';

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
        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={24}>
            <Label title={t('field_name')} required>
              <Fields.Textarea name={`name[${activeLanguage}]`} validation={{ required: true }} />
            </Label>
          </Grid.Col>

          <Grid.Col xs={24}>
            <Label title={t('field_title')} required>
              <Fields.Textarea name={`title[${activeLanguage}]`} validation={{ required: true }} />
            </Label>
          </Grid.Col>

          <Grid.Col xs={24}>
            <Label title={t('field_description')} required>
              <Fields.Editor
                name={`description[${activeLanguage}]`}
                validation={{ required: true }}
              />
            </Label>
          </Grid.Col>
        </Grid.Row>
      </Grid.Col>

      <Grid.Col xs={24} xl={8}>
        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={24}>
            <Label title={t('field_photo')} required>
              <Fields.Uploader
                name='photoId'
                type='image'
                accept={['image/*']}
                maxFileSize={10240}
                details={{ resolution: '512 x 512', extension: 'svg, png, jpg', size: '10 мб' }}
                validation={{ required: true }}
              />
            </Label>
          </Grid.Col>

          <Grid.Col xs={24}>
            <Label title={t('field_type')}>
              <Fields.Select
                name='type'
                options={[
                  {
                    value: BLOG_TYPE.NEW,
                    title: t(BLOG_TYPE.NEW),
                  },
                  {
                    value: BLOG_TYPE.ARTICLE,
                    title: t(BLOG_TYPE.ARTICLE),
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
