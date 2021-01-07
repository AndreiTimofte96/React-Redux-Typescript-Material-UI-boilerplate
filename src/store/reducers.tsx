import { combineReducers, Reducer } from "redux"
import mainPageReducer, { IMainPageState } from "../modules/mainPage/reducer";

export interface IAppState {
  mainPage: IMainPageState;
};

const rootReducer = combineReducers<IAppState>({
  mainPage: mainPageReducer,
});
export default rootReducer;