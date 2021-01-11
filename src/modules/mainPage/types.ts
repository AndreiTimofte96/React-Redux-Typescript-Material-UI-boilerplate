/*
  ACTIONS types
*/
export const FETCH_COUNTER = 'FETCH_COUNTER';
export const LOADING_DATA = 'LOADING_DATA';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface IFetchCounter {
  type: typeof FETCH_COUNTER;
  payload: number;
}

export interface ILoadingData {
  type: typeof LOADING_DATA;
  payload: boolean;
}

export interface IIncrement {
  type: typeof INCREMENT;
}

export interface IDecrement {
  type: typeof DECREMENT;
}

export interface IReset {
  type: typeof RESET;
}

export type DispatchPayload = IFetchCounter | ILoadingData | IIncrement | IDecrement | IReset;

/*
  REDUCER types
*/
export interface IMainPageState {
  counter: number;
  loading?: boolean;
}
