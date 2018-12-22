import { createStore, combineReducers } from "redux";
import searchReducer from "../reducers/searchReducer";

export default () => {
  const store = createStore(
    combineReducers({
      searchObject: searchReducer
    })
  );

  return store;
};
