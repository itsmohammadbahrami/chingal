import { Path } from 'src/interfaces';

export const path: Path = {
   root: {
      title: 'Root',
      href: '/',
      navigateTo: '/users',
   },
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
