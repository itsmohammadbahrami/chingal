import { axiosBase } from 'src/fetch';
import { user as actionTypes } from 'src/redux/action-types';
import { all, put, takeLatest } from 'redux-saga/effects';
import { User, SagaAction } from 'src/interfaces';
import { setAppMessage } from 'src/redux/actions';

const url = {
   getUsers: '/users',
   getUser: (id: number) => `/users/${id}`,
   editUser: (id: number) => `/users/${id}`,
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

function* setUser(user?: User) {
   yield put({
      type: actionTypes.SET_USER,
      user,
   });
}

function* getUser(action?: SagaAction) {
   const { id } = action?.data;
   yield setUsersLoading(true);
   yield setUser();

   try {
      const response = yield axiosBase.get(url.getUser(id));
      yield setUser(response?.data);
   } catch (err) {
      console.log(err);
   }
   yield setUsersLoading(false);
}

function* editUser(action?: SagaAction) {
   const { user }: { user: User } = action?.data;
   yield setUsersLoading(true);

   try {
      const response = yield axiosBase.put(url.getUser(user.id), user);
      response && setAppMessage('success', 'اطلاعات کاربر با موفقیت ویرایش شد');
      yield setUser(response?.data);
   } catch (err) {
      console.log(err);
   }
   yield setUsersLoading(false);
}

function* deleteUser(action?: SagaAction) {
   const { id } = action?.data;
   const { onSuccess } = action?.callbacks;
   yield setUsersLoading(true);

   try {
      const response = yield axiosBase.delete(url.getUser(id));
      response && setAppMessage('success', 'کاربر با موفقیت حذف شد');
      onSuccess && onSuccess();
   } catch (err) {
      console.log(err);
   }
   yield setUsersLoading(false);
}

export default function* userSagas() {
   yield all([
      yield takeLatest(actionTypes.REQUEST_GET_USERS, getUsers),
      yield takeLatest(actionTypes.REQUEST_GET_USER, getUser),
      yield takeLatest(actionTypes.REQUEST_EDIT_USER, editUser),
      yield takeLatest(actionTypes.REQUEST_DELETE_USER, deleteUser),
   ]);
}
