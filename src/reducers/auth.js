import { ACTION_TYPES } from "../constants";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case ACTION_TYPES.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };
    case ACTION_TYPES.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
