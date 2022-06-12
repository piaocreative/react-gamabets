import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducers from "./rootReducers";
import { loadState, saveState } from "../lib/commons";
const persistedState = loadState();

const middleware = [thunkMiddleware];

const store = createStore(
  rootReducers,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// store.subscribe(() => {
//   saveState({
//     general: store.getState().general,
//   });
// });

export default store;
