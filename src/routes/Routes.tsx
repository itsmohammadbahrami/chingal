import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { path } from './path';
import { PathItem } from 'src/interfaces';
import { Users } from 'src/pages';

const Components = {
   'لیست کاربران': <Users />,
   'ویرایش کاربر': <>User Component</>,
}

export const MainRoutes: React.FC = () => {
   return (
      <Routes>
         {
            Object.values(path).map((pathItem, index) => {
               if (pathItem?.items) {
                  const root: PathItem = pathItem?.root
                  return (
                     <Route key={index} path={root.href}>
                        <Route index element={Components[root.title]} />
                        {
                           Object.values(pathItem.items)?.length > 0 &&
                           Object.values(pathItem.items).map((item: any) => {
                              const { title, href }: PathItem = item
                              return (
                                 <Route
                                    key={title}
                                    path={href}
                                    element={Components[title]}
                                 />
                              )
                           })
                        }
                     </Route>
                  )
               }
               const item: PathItem = pathItem
               return (
                  <Route
                     key={index}
                     path={item.href}
                     element={<Navigate to={item?.navigateTo || '/'} replace />}
                  />
               )
            })
         }
         <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
   );
};
