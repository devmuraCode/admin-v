import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link, useNavigate, useParams} from 'react-router-dom';
import message from 'antd/lib/message';

import * as Forms from '@/modules/product/forms';
import * as Hooks from '@/modules/product/hooks';

import Icon from '@/components/Icon';
import Button from '@/components/Button';
import Spacer from '@/components/Spacer';
import Spinner from '@/components/Spinner';
import PageHeader from '@/components/PageHeader';

import Form from './components/Form';

const Update: React.FC = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const {id} = useParams<{ id: string }>();
  
  const {item} = Hooks.useSingle({id});
  
  return (
    <>
      <Forms.Update
        id={id}
        values={{
          name: item.name,
          price: item.price,
          description: item.description,
          photoIds: item.photos.map(item => item.id),
          categoryId: item.id,
          status: item.status,
        }}
        onSuccess={() => {
          navigate('/product');
          message.success(t('successfully_updated'));
        }}
      >
        {({isSubmitting}) => (
          <>
            {isSubmitting && <Spinner full/>}
            
            <PageHeader
              title={t('title_product_update')}
              breadcrumb={{
                routes: [
                  {
                    to: '/',
                    icon: 'Home',
                  },
                  {
                    to: '/product',
                    name: t('title_product'),
                  },
                  {
                    name: t('title_product_update'),
                  },
                ],
              }}
              buttons={[
                <Button
                  key='cancel'
                  title={t('action_cancel')}
                  variant='white'
                  prefixIcon={<Icon name='CloseCircle'/>}
                  container={<Link to='/product'/>}
                />,
                <Button
                  htmlType='submit'
                  key='save'
                  title={t('action_save')}
                  variant='green'
                  prefixIcon={<Icon name='CheckmarkCircle'/>}
                />,
              ]}
              onBack={() => navigate('/product')}
            />
            
            <Spacer size={24}/>
            
            <Form/>
          </>
        )}
      </Forms.Update>
    </>
  );
};

export default Update;
