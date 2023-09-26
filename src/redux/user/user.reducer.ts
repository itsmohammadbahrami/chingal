import { user as actionTypes } from 'src/redux/action-types';
import { UserDataState, UserDataAction } from 'src/interfaces';

const initialState: UserDataState = {
   loading: true,
   user: undefined,
   users: undefined,
};

const userReducer = (state = initialState, action: UserDataAction) => {
   switch (action.type) {
      case actionTypes.SET_USERS:
         return {
            ...state,
            users: action.users,
         };

      case actionTypes.SET_USER:
         return {
            ...state,
            user: action.user,
         };

      case actionTypes.SET_USERS_LOADING:
         return {
            ...state,
            loading: action.loading,
         };

      default:
         return state;
   }
};

export default userReducer;
