import { axiosBase } from 'src/fetch';
import { user as actionTypes } from 'src/redux/action-types';
import { all, put, takeLatest } from 'redux-saga/effects';
import { User, SagaAction } from 'src/interfaces';

const url = {
   getUsers: '/users',
};

function* setUsersLoading(loading: boolean) {
   yield put({
      type: actionTypes.SET_USERS_LOADING,
      loading,
   });
}
function* setUsers(users?: User[]) {
   yield put({
      type: actionTypes.SET_USERS,
      users,
   });
}

function* getUsers(action?: SagaAction) {
   yield setUsersLoading(true);
   yield setUsers();

   try {
      const response = yield axiosBase.get(url.getUsers);
      yield setUsers(response?.data);
   } catch (err) {
      console.log(err);
   }
   yield setUsersLoading(false);
}

export default function* userSagas() {
   yield all([yield takeLatest(actionTypes.REQUEST_GET_USERS, getUsers)]);
}
