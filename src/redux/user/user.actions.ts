import { user as actionTypes } from 'src/redux/action-types';

export const getUsers = () => {
   return {
      type: actionTypes.REQUEST_GET_USERS,
   };
};
