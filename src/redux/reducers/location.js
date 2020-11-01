import * as actiontypes from "../actions/actiontypes";

const initialState = {
  location: {
    id: null,
    name: "",
    type: "",
    dimension: "",
    residents: [],
    url: "",
    created: "",
  },
  locations: [],
};

const locationReducer = (state = initialState, action) => {
  if (action.type === actiontypes.GET_LOCATION) {
    return {
      ...state,
      location: action.res.data,
    };
  }
  return state;
};

export default locationReducer;
