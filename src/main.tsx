import '@/bootstrap';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import get from 'lodash/get';

import { persist, store } from '@/store';

import * as AuthModule from '@/modules/auth';

import { MESSAGE_TYPE } from '@/helpers/enums';

import notification, { IArgs } from '@/components/notification';

import App from '@/App';

const queryResponseHandler = data => {
  const type = get(data, 'data.message.type');
  const message = get(data, 'data.message.message');
  const status = get(data, 'data.status');

  if (type && message) {
    const props = { key: status, message: message, placement: 'topRight' as const } as IArgs;

    if (type === MESSAGE_TYPE.INFO) {
      notification.info(props);
    } else if (type === MESSAGE_TYPE.WARNING) {
      notification.warning(props);
    } else if (type === MESSAGE_TYPE.ERROR) {
      notification.error(props);
    }
  }
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onSuccess: queryResponseHandler,
    onError: queryResponseHandler,
  }),
  mutationCache: new MutationCache({
    onSuccess: queryResponseHandler,
    onError: queryResponseHandler,
  }),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Suspense fallback=''>
    <Provider {...{ store }}>
      <PersistGate loading={null} persistor={persist}>
        <QueryClientProvider client={queryClient}>
          <AuthModule.Containers.Auth>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AuthModule.Containers.Auth>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </Suspense>,
);
