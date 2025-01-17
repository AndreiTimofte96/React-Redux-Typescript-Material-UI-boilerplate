import { combineReducers } from 'redux';
import { mainPageReducer } from '../modules/mainPage';
import { IAppState } from './types';

const rootReducer = combineReducers<IAppState>({
  mainPage: mainPageReducer,
});

export default rootReducer;
