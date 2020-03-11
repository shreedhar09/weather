import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getResultByCityReducer } from "./Reducer";

let rootReducer = combineReducers({
  WeatherData: getResultByCityReducer
});

export const reduxStore = createStore(rootReducer, applyMiddleware(thunk));
