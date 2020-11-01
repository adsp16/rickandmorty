import * as actiontypes from "../actions/actiontypes";

const initialState = {
  characterList: [],
  character: {
    id: null,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
    image: "",
    episode: [],
    url: "",
    created: "",
  },
  isLoading: false,
  error: false,
};

const characterReducer = (state = initialState, action) => {
  if (action.type === actiontypes.GET_SINGLE_CHAR) {
    const data = { ...action.res.data };
    return {
      ...state,
      character: data,
    };
  }

  if (action.type === actiontypes.GET_ALL_CHARS) {
    return {
      ...state,
      characterList: action.res.data.results.filter(() => {
        return true;
      }),
    };
  }

  if (action.type === actiontypes.SEARCH_NAME) {
    return {
      ...state,
      characterList: action.res.data.results.filter(() => {
        return true;
      }),
    };
  }

  return state;
};

export default characterReducer;
