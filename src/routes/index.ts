import { lazy } from 'react';

import { ROLE } from '@/helpers/enums';

export default [
  {
    path: '/',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Dashboard')),
  },
  {
    path: '/category',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Category/List')),
  },
  {
    path: '/category/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Category/Create')),
  },
  {
    path: '/category/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Category/Update')),
  },
  {
    path: '/product',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Product/List')),
  },
  {
    path: '/product/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Product/Create')),
  },
  {
    path: '/product/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Product/Update')),
  },
  {
    path: '/networks',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Network/List')),
  },
  {
    path: '/networks/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Network/Create')),
  },
  {
    path: '/networks/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Network/Update')),
  },
  {
    path: '/banners',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Banner/List')),
  },
  {
    path: '/banners/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Banner/Create')),
  },
  {
    path: '/banners/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Banner/Update')),
  },
  {
    path: '/blogs',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Blog/List')),
  },
  {
    path: '/blogs/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Blog/Create')),
  },
  {
    path: '/blogs/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Blog/Update')),
  },
  {
    path: '/partners',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Partner/List')),
  },
  {
    path: '/partners/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Partner/Create')),
  },
  {
    path: '/partners/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Partner/Update')),
  },
  {
    path: '/contact',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Contact')),
  },
  {
    path: '/users',
    roles: [ROLE.ADMIN],
    Page: lazy(() => import('@/pages/User/List')),
  },
  {
    path: '/user-view',
    roles: [ROLE.ADMIN],
    Page: lazy(() => import('@/pages/ViewUser/List')),
  },
  {
    path: '/users/create',
    roles: [ROLE.ADMIN],
    Page: lazy(() => import('@/pages/User/Create')),
  },
  {
    path: '/users/update/:id',
    roles: [ROLE.ADMIN],
    Page: lazy(() => import('@/pages/User/Update')),
  },
  {
    path: '/translations',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Translation/List')),
  },
  {
    path: '/translations/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Translation/Create')),
  },
  {
    path: '/translations/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Translation/Update')),
  },
  {
    path: '/vacancies',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Vacancies/List')),
  },
  {
    path: '/vacancies/create',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Vacancies/Create')),
  },
  {
    path: '/vacancies/update/:id',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
    Page: lazy(() => import('@/pages/Vacancies/Update')),
  },
];
