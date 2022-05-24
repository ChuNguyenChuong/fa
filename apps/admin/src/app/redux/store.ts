import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers';
import { initialTestState, IStateTest } from './reducers/TestReducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
export interface IIntState {
  test: IStateTest;
}

const sagaMiddleware = createSagaMiddleware();
const initialState: IIntState = {
  test: initialTestState,
};

export const store = createStore(
  rootReducer,
  initialState as any,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
