import config from '@src/config';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import * as reducers from './reducers';
import sagas from './sagas';
// import storage from 'redux-persist/lib/storage';
// import { fakeState } from './fake-state';

// Options for redux dev tools
const composeEnhancers = composeWithDevTools({
  ...config.REDUX_DEV_TOOLS
});

// Browsing history
export const history = createBrowserHistory();

// Combine all reducers
export const rootReducer = combineReducers({
  router: connectRouter(history),
  ...reducers
});

// Combine all sagas
export function* rootSaga() {
  yield all(sagas);
}

// const persistConfig = {
//   storage,
//   key: 'root',
//   blacklist: ['router']
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure middlewares
const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware];

// Compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// create store
const store = createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(rootSaga);

// Export store singleton instance
export const persistor = persistStore(store);
export default store;
