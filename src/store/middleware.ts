import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

import config from '@/config';

const middleware = [sagaMiddleware];

if (config.app.isDev) {
  (async () => {
    const { createLogger } = await import('redux-logger');

    middleware.push(createLogger());
  })()
}

export default middleware;
