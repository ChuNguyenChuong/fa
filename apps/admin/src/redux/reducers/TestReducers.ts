import { TestAction } from '../actions/TestAction';
import { TestActionTypes } from '../types';

export interface IStateTest {
  readonly counter: number;
}

export const initialTestState: IStateTest = {
  counter: 0,
};

export const testReducer = (state = initialTestState, action: TestAction) => {
  switch (action.type) {
    case TestActionTypes.DECREMENT_TEST:
      return { ...state, counter: state.counter + 1 };
    // eslint-disable-next-line no-duplicate-case
    case TestActionTypes.DECREMENT_TEST:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
