import { TestActionTypes } from '../types';

export interface IIncrement {
  type: TestActionTypes.INCREMENT_TEST;
  payload?: any;
}

export interface IDecrement {
  type: TestActionTypes.DECREMENT_TEST;
  payload?: any;
}

export function incrementTest(): IIncrement {
  return {
    type: TestActionTypes.INCREMENT_TEST,
  };
}

export function decrementTest(): IDecrement {
  return {
    type: TestActionTypes.DECREMENT_TEST,
  };
}

export type TestAction = IDecrement | IIncrement;
