import { createStore, combineReducers } from "redux";
import searchReducer from "../reducers/searchReducer";
import cityDetailsReducer from "../reducers/cityDetailsReducer";

export default () => {
  const store = createStore(
    combineReducers({
      searchObject: searchReducer,
      cityObject: cityDetailsReducer
    })
  );

  return store;
};
