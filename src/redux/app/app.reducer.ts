import { app as actionTypes } from 'src/redux/action-types';
import { AppAction, AppDataState } from 'src/interfaces';

const initialState: AppDataState = {
   darkMode: false,
};

const appReducer = (state = initialState, action: AppAction) => {
   switch (action.type) {
      case actionTypes.SET_DARK_MODE:
         return {
            ...state,
            darkMode: action.darkMode,
         };

      default:
         return state;
   }
};

export default appReducer;
