export const setInputValue = (inputValue = "") => ({
  type: "SET_INPUT_VALUE",
  inputValue
});
  
export const setTextSearch = (search = "") => ({
  type: "SET_SEARCH",
  search
});

export const setMatches = (matches = []) => ({
  type: "SET_MATCHES",
  matches
});

export const setData = (data = []) => ({
  type: "SET_DATA",
  data
});
  