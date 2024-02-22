import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { IMenu } from '@/components/Menu/Types';

type IRoute = Pick<IMenu, 'key' | 'children'>;

const getExactRoute = (routes: IRoute[], pathname: string): [string | null, string] => {
  const exactRoutes: [string | null, string] = [null, ''];

  exactRoutes[1] = routes.reduce<string>((route, { children = [], key }) => {
    if (pathname.startsWith(key)) {
      if (children.length > 0) {
        const exactRoute = getExactRoute(children, pathname)[1];

        if (exactRoute) exactRoutes[0] = key;
        return exactRoute;
      }

      return key.length > route.length ? key : route;
    }
    return route;
  }, '');

  return exactRoutes;
};

function useRoute(routes: IMenu[], defaultPath: string) {
  const { pathname } = useLocation() as { pathname: string };

  const state = useState<[string | null, string]>(
    () => getExactRoute(routes, pathname) || [defaultPath, pathname],
  );

  useEffect(() => state[1](getExactRoute(routes, pathname)), [pathname]);

  return state[0];
}

export default useRoute;
