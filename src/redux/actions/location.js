import * as actiontypes from "../actions/actiontypes";
import api from "../../api/rickandmorty.instance";

const returnData = (action, result) => {
  return {
    type: action,
    res: result,
  };
};

export const getLocation = (url) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api
        .get(`${url}`)
        .then((result) => {
          const action = actiontypes.GET_LOCATION;
          dispatch(returnData(action, result));
          return resolve(result);
        })
        .catch((err) => {
          console.log(err);
          return reject(err);
        });
    });
  };
};
