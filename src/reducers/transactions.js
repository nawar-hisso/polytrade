import { ACTION_TYPES } from "../constants";

const transactionsReducer = (transactions = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.INIT:
      return action.payload;
    case ACTION_TYPES.FETCH_ALL_TXN:
      return action.payload;
    default:
      return transactions;
  }
};

export default transactionsReducer;
