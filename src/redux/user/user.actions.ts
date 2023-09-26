import { User } from 'src/interfaces';
import { user as actionTypes } from 'src/redux/action-types';

export const getUsers = () => {
   return {
      type: actionTypes.REQUEST_GET_USERS,
   };
};

export const getUser = (id: number | string) => {
   return {
      type: actionTypes.REQUEST_GET_USER,
      data: {
         id,
      },
   };
};

export const editUser = (user: User) => {
   return {
      type: actionTypes.REQUEST_EDIT_USER,
      data: {
         user,
      },
   };
};

export const deleteUser = (id: number | string, onSuccess: Function) => {
   return {
      type: actionTypes.REQUEST_DELETE_USER,
      data: {
         id,
      },
      callbacks: {
         onSuccess,
      },
   };
};
