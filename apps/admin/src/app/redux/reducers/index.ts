import { combineReducers } from 'redux';
import { testReducer } from './TestReducers';

export const rootReducer = combineReducers({
  test: testReducer,
});
