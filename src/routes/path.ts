import { Path, PathItem } from 'src/interfaces';

export const path: Path = {
   root: {
      title: 'Root',
      href: '/',
      navigateTo: '/users',
   } as PathItem,
   users: {
      root: {
         title: 'لیست کاربران',
         href: '/users',
      },
      items: {
         user: {
            title: 'ویرایش کاربر',
            href: '/users/:id',
            getDynamicHref: value => `/users/${value}`,
         },
      },
   },
};
