import DataForm from "../components/DataForm/DataForm";

const API_KEY = "7MUZFPJDHX6N8832YE66H5U9V7429D5WVH";
const CONTRACT_ADDRESS = "0x833c0de74b9f99c2d76aee61f64293c84264a09b";
const REQUEST_METHOD = "eth_requestAccounts";
const GOOGLE_CLIENT_ID =
  "566592530818-gq11b8t6381ul8li5qo04t2enn2s60rg.apps.googleusercontent.com";

const INIT = "INIT";
const AUTH = "AUTH";
const LOGOUT = "LOGOUT";
const FETCH = "FETCH";
const STORE = "STORE";
const FETCH_ALL_TXN = "FETCH_ALL_TXN";

export const CONFIG = {
  API_KEY,
  CONTRACT_ADDRESS,
  REQUEST_METHOD,
  GOOGLE_CLIENT_ID,
};
export const COMPONENTS = { dataForm: DataForm };
export const ACTION_TYPES = {
  INIT,
  AUTH,
  LOGOUT,
  FETCH,
  STORE,
  FETCH_ALL_TXN,
};
