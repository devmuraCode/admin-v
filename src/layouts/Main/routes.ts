import { IMenu } from "../../components/Menu/Types";
import { ROLE } from "../../helpers/enums";


const routes: IMenu[] = [
  {
    key: '/',
    icon: 'Dashboard',
    title: 'dashboard',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
  },
  {
    key: '/category',
    icon: 'Category',
    title: 'category',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
  },
  {
    key: '/product',
    icon: 'Product',
    title: 'product',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
  },
  {
    key: '/vacancies',
    icon: 'Dashboard',
    title: 'vacancies',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
  },
  {
    key: '/networks',
    icon: 'Banner',
    title: 'networks',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
  },
  {
    key: '/banners',
    icon: 'Banner',
    title: 'banners',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
  },
  {
    key: '/blogs',
    icon: 'Video',
    title: 'blogs',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
  },
  {
    key: '/partners',
    icon: 'Partner',
    title: 'partners',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
  },
  {
    key: '/contact',
    icon: 'Banner',
    title: 'contact',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
  },
  {
    key: '/users',
    icon: 'UserCircle',
    title: 'users',
    roles: [ROLE.ADMIN],
  },
  {
    key: '/translations',
    icon: 'Translation',
    title: 'translations',
    roles: [ROLE.ADMIN, ROLE.MODERATOR],
  },
];

export default routes;
