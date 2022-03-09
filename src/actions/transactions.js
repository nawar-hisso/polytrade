import * as api from "../api";
import { ACTION_TYPES } from "../constants";

export const getTransactions = () => async (dispatch) => {
  try {
    await api.init();
    const { data } = await api.getTransactions();
    const action = { type: ACTION_TYPES.FETCH_ALL_TXN, payload: data.result };
    dispatch(action);
  } catch (error) {
    alert(error.message);
  }
};
