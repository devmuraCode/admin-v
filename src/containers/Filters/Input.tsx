import React, { lazy, useEffect, useId, useState, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import Icon from '@/components/Icon';
import Filter from '@/components/Filter';
import Dropdown from '@/components/Dropdown';

import cls from './Filter.module.scss';

const InputBase = lazy(() => import('@/components/Input'));

interface IProps {
  name: string;
  value: string;
  setValue: (value: string) => void;
}

const Input: React.FC<IProps> = ({ name, value, setValue }) => {
  const { t } = useTranslation();
  const id = useId();

  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: '0',
            label: (
              <div onClick={e => e.stopPropagation()}>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    setValue(inputValue);
                  }}
                >
                  <Suspense fallback={''}>
                    <InputBase
                      id={id}
                      value={inputValue}
                      placeholder={t('what_to_search')}
                      onChange={value => setInputValue(value)}
                      iconSuffix={
                        (value || inputValue) && (
                          <Icon
                            name='DismissCircle'
                            onClick={() => {
                              setInputValue('');
                              setValue('');
                            }}
                          />
                        )
                      }
                      autoFocus
                      size='small'
                    />
                  </Suspense>
                </form>
              </div>
            ),
          },
        ],
      }}
      overlayClassName={cls.overlay}
      trigger={['click']}
    >
      <Filter
        title={t(`column_${name}`)}
        value={value || t('filter_all')}
        isActive={!!value}
        onClear={() => setValue('')}
      />
    </Dropdown>
  );
};

export default Input;
