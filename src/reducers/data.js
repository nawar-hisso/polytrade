import { ACTION_TYPES } from "../constants";

const dataReducer = (data = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.INIT:
      return action.payload;
    case ACTION_TYPES.FETCH:
      return action.payload;
    case ACTION_TYPES.STORE:
      return [...data, action.payload];
    default:
      return data;
  }
};

export default dataReducer;
