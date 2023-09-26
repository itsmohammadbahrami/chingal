import { app as actionTypes } from 'src/redux/action-types';
import { AppAction, AppDataState } from 'src/interfaces';

const initialState: AppDataState = {
   darkMode: false,
   searchText: '',
   sortOrder: undefined,
};

const appReducer = (state = initialState, action: AppAction) => {
   switch (action.type) {
      case actionTypes.SET_DARK_MODE:
         return {
            ...state,
            darkMode: action.darkMode,
         };

      case actionTypes.SET_SEARCH_TEXT:
         return {
            ...state,
            searchText: action.searchText,
         };

      case actionTypes.SET_SORT_ORDER:
         return {
            ...state,
            sortOrder: action.sortOrder,
         };

      default:
         return state;
   }
};

export default appReducer;
