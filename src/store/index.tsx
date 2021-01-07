import { createStore, applyMiddleware, Store } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer, { IAppState } from "./reducers";

const store: Store<IAppState> = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);


export default store;