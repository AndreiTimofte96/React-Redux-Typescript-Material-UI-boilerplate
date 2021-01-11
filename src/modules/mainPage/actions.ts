import { Dispatch } from 'redux';
import { fetchData } from './services';
import { IAppState } from '../../store/types';
import * as types from './types';

export const getServerData = () => async (dispatch: Dispatch, getState: () => IAppState) => {
  const state: IAppState = getState();

  try {
    dispatch(loadingData(true));
    const response = await fetchData();
    dispatch(fetchCounterData(response.data.stargazers_count));
    dispatch(loadingData(false));
  } catch (error) {
    console.error(error);
  }
};

export const fetchCounterData = (counter: number): types.IFetchCounter => ({
  type: types.FETCH_COUNTER,
  payload: counter,
});

export const loadingData = (loading: boolean): types.ILoadingData => ({
  type: types.LOADING_DATA,
  payload: loading,
});

// INCREMENT COUNTER BY 1
export const incrementCount = (): types.IIncrement => ({
  type: types.INCREMENT,
});

// DECREMENT COUNTER BY 1
export const decrementCount = (): types.IDecrement => ({
  type: types.DECREMENT,
});

// RESET COUNTER
export const resetCount = (): types.IReset => ({ type: types.RESET });
