import { Path, PathItem } from 'src/interfaces';

export const path: Path = {
   root: {
      title: 'Root',
      href: '/',
      navigateTo: '/users',
   } as PathItem,
   users: {
      root: {
         title: 'Users',
         href: '/users',
      },
      items: {
         user: {
            title: 'User',
            href: '/users/:id',
         },
      },
   },
};
