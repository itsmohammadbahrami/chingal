import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga';
import sagas from 'src/redux/sagas';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['appData'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
   persistedReducer,
   composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

let persistor = persistStore(store);
// window.__store__ = store;

export { store, persistor };
