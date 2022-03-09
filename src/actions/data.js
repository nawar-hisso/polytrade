import * as api from "../api";
import { ACTION_TYPES } from "../constants";

export const getAllData = () => async (dispatch) => {
  try {
    await api.init();
    const data = await api.retreive();
    const action = { type: ACTION_TYPES.FETCH, payload: data };
    dispatch(action);
  } catch (error) {
    alert(error.message);
  }
};

export const storeData = (word) => async (dispatch) => {
  try {
    const data = await api.store(word);
    const action = { type: ACTION_TYPES.STORE, payload: data };
    dispatch(action);
  } catch (error) {
    alert(error.message);
  }
};
