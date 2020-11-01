import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import characterReducer from "../reducers/characters";
import locationReducer from "../reducers/location";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  character: characterReducer,
  location: locationReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("Middleware Dispatching", action);
      const result = next(action);
      console.log("Middleware next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
