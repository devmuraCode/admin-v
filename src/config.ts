const ENV = import.meta.env;
const config = {
  app: {
    env: ENV.VITE_ENV,
    version: ENV.VITE_VERSION,
    isDev: ENV.VITE_ENV !== 'production',
    publicUrl: ENV.PUBLIC_URL,
    editorApiKey: ENV.EDITOR_API_KEY,
  },
  api: {
    baseUrl: ENV.VITE_API_BASE_URL,
    downloadUrl: `${ENV.VITE_API_BASE_URL}/references/download`,
  },
  language: {
    key: 'language',
    initial: 'uz',
    list: ['uz', 'oz', 'ru'],
  },
  list: {
    perPage: 10,
  },
};

export default config;
