import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAuth } from '@/modules/auth/hooks';

import routes from '@/routes';

import * as Layouts from '@/layouts';

import Login from '@/pages/Login';

import Spinner from '@/components/Spinner';

import CheckRole from '@/requires/CheckRole';

const App: React.FC = () => {
  const { isAuthenticated, isFetched, token } = useAuth();

  if (!isFetched) {
    return <Spinner full />;
  }

  if (!isAuthenticated && !token) {
    return (
      <Layouts.Auth>
        <Suspense fallback=''>
          <Routes>
            <Route path='/' element={<Login />} />

            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Suspense>
      </Layouts.Auth>
    );
  }

  return (
    <Layouts.Main>
      <Suspense fallback=''>
        <Routes>
          {routes.map(({ path, roles, Page }) => (
            <Route key={path} path={path} element={<CheckRole roles={roles} page={<Page />} />} />
          ))}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </Layouts.Main>
  );
};

export default App;
