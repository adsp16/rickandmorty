import * as actiontypes from "../actions/actiontypes";
import api from "../../api/rickandmorty.instance";

const returnData = (result, action) => {
  return {
    type: action,
    res: result,
  };
};

export const getSingleChar = (id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api
        .get(`/character/${id}`)
        .then((result) => {
          const action = actiontypes.GET_SINGLE_CHAR;
          dispatch(returnData(result, action));
          return resolve(result);
        })
        .catch((err) => {
          console.log(err);
          return reject(err);
        });
    });
  };
};

export const getAllChars = (page) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api
        .get(`/character/?page=${page}`)
        .then((result) => {
          const action = actiontypes.GET_ALL_CHARS;
          dispatch(returnData(result, action));
          return resolve(result);
        })
        .catch((err) => {
          console.log(err);
          return reject(err);
        });
    });
  };
};

export const searchName = (name) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api
        .get(`/character/?name=${name}`)
        .then((result) => {
          const action = actiontypes.SEARCH_NAME;
          dispatch(returnData(result, action));
          resolve(result);
        })
        .catch((err) => {
          console.log(err);
          return reject(err);
        });
    });
  };
};
