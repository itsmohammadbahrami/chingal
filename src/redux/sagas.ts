import { all } from 'redux-saga/effects';
import userSagas from './user/user.saga';

export default function* sagas() {
   yield all([userSagas()]);
}
