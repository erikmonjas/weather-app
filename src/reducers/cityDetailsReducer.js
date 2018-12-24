const cityDetailsDefaultState = {
  cityDetails: {}
};
  
export default (state = cityDetailsDefaultState, action) => {
  switch (action.type) {
    case "SET_CITY_DETAILS":
      return {
        ...state,
        cityDetails: action.cityDetails
      };
    default:
      return state;
  }
};
  