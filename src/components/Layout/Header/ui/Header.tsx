import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from 'antd/lib/layout';
import cx from 'classnames';

import { useAuth } from '@/modules/auth/hooks';

import Icon from '@/components/Icon';
import Dropdown from '@/components/Dropdown';

import cls from './Header.module.scss';

interface Language {
  key: 'uz' | 'oz' | 'ru';
  name: string;
  flag: 'Uzbek' | 'English' | 'Russian';
}

interface Item {
  name: string;
  icon: string;
  onClick: () => void;
}

interface IProps {
  header?: string;
  onToggle: () => void;
}

const Header: React.FC<IProps> = ({ onToggle }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const {
    profile: { firstName, lastName },
    methods: { logout },
  } = useAuth();

  const languages: Language[] = useMemo(
    () => [
      {
        key: 'uz',
        name: 'uzbek',
        flag: 'Uzbek',
      },
      {
        key: 'oz',
        name: 'english',
        flag: 'English',
      },
      {
        key: 'ru',
        name: 'russian',
        flag: 'Russian',
      },
    ],
    [i18n.language],
  );

  const items: Item[] = useMemo(
    () => [
      {
        name: t('profile'),
        icon: 'Person',
        onClick: () => {
          navigate('/user-view');
        },
      },
      {
        name: t('logout'),
        icon: 'Logout',
        onClick: () => logout(),
      },
    ],
    [],
  );

  const currentLanguage = useMemo(
    () => languages.find(language => language.key === i18n.language),
    [i18n.language],
  );

  return (
    <Layout.Header className={cls.wrapper}>
      <Icon className={cls.toggle} onClick={onToggle} name='Menu' size={28} />

      <div className={cls.settings}>
        <Dropdown
          menu={{
            items: [
              ...languages.map(item => ({
                key: item.name,
                label: (
                  <div
                    className={cx(cls.language, item.key === i18n.language && cls.active)}
                    onClick={() => i18n.changeLanguage(item.key)}
                  >
                    <Icon name={item.flag} type='flag' size={20} />
                    <div>{item.name}</div>
                  </div>
                ),
              })),
            ],
          }}
          overlayClassName={cls.overlay}
          trigger={['click']}
        >
          <div className={cls.currentLanguage}>
            <Icon name={currentLanguage.flag} type='flag' variant='regular' size={32} />
          </div>
        </Dropdown>

        <Dropdown
          menu={{
            items: [
              ...items.map(item => ({
                key: item.name,
                label: (
                  <div className={cls.item} onClick={item.onClick}>
                    <Icon name={item.icon} size={16} />
                    <div>{item.name}</div>
                  </div>
                ),
              })),
            ],
          }}
          overlayClassName={cls.overlay}
          trigger={['click']}
        >
          <div className={cls.name}>
            {firstName.charAt(0)} {lastName.charAt(0)}
          </div>
        </Dropdown>
      </div>
    </Layout.Header>
  );
};

export default Header;
