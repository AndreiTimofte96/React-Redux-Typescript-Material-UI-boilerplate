import { combineReducers, Reducer } from "redux"
import mainPageReducer from "../modules/mainPage/reducer";
import { IAppState } from "./types";

const rootReducer = combineReducers<IAppState>({
  mainPage: mainPageReducer,
});
export default rootReducer;