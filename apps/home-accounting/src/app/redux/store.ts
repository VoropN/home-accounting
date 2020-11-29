import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const tools = [
  applyMiddleware(sagaMiddleware),
  process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION__?.()
].filter(e => e);

export const store = createStore(
  rootReducer,
  compose(...tools)
);

sagaMiddleware.run(rootSaga);
