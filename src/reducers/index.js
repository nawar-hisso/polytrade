import { combineReducers } from "redux";
import auth from "./auth";
import transactions from "./transactions";
import data from "./data";

export default combineReducers({
  auth,
  transactions,
  data,
});
