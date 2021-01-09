import { createStore, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { IAppState } from './types';

const store: Store<IAppState> = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
