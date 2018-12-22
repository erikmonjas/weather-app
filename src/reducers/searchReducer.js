const searchDefaultState = {
  inputValue: "",
  search: "",
  matches: [],
  data: []
};
  
export default (state = searchDefaultState, action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.inputValue
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.search
      };
    case "SET_MATCHES":
      return {
        ...state,
        matches: action.matches
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};
  