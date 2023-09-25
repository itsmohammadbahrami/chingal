import { combineReducers } from 'redux';
import appData from 'src/redux/app/app.reducer';
import userData from 'src/redux/user/user.reducer';

const rootReducer = combineReducers({
   appData,
   userData,
});

export default rootReducer;
