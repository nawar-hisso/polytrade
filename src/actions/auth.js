import { ACTION_TYPES } from "../constants";

export const googleLogin = (res, history) => async (dispatch) => {
  try {
    const result = res?.profileObj;
    const token = res?.tokenId;
    const action = { type: ACTION_TYPES.AUTH, payload: { result, token } };
    dispatch(action);
    history.push("/storage");
  } catch (error) {
    alert(error.message);
  }
};

export const googleLogout = (history) => async (dispatch) => {
  try {
    const action = { type: ACTION_TYPES.LOGOUT };
    dispatch(action);
    history.push("/");
  } catch (error) {
    alert(error.message);
  }
};
