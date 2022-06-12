import { combineReducers } from "redux";
import { reducer as counterReducer } from "./stores/counter";
import { reducer as dashboardReducer } from "./stores/dashboard";

// COMBINED REDUCERS
const rootReducers = combineReducers({
  counter: counterReducer,
  dashboard: dashboardReducer,
});

export default rootReducers;
