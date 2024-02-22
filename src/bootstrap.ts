import '@/assets/styles/index.scss';

import config from '@/config';
import { store } from '@/store';
import { http, i18n, storage } from '@/services';

if (config.app.isDev) {
  console.log('DEVELOPMENT');
} else {
  console.log('PRODUCTION');
}

i18n.init({
  languages: config.language.list,
  currentLanguage: storage.local.get(config.language.key),
  initialLanguage: config.language.initial,
  backend: {
    loadPath: `${config.api.baseUrl}/references/translations/ADMIN_CABINET/{{lng}}`,
  },
  onChange: language => storage.local.set('language', language),
});

http.init({
  configFn: () => {
    const state = store.getState();
    const token = state.auth.token;

    return {
      baseURL: config.api.baseUrl,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}), 
      },
    };
  },
});
