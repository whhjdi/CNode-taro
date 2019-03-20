import {
  ACCESSTOKEN,
  ACCESSTOKENFAILED,
  GETUSERINFO,
  LOGOUT
} from "../constants/user";

const USER_STATE = {
  accessToken: "",
  loginName: "",
  userData: {}
};

export default function user(state = USER_STATE, action) {
  switch (action.type) {
    case ACCESSTOKEN:
      return {
        ...state,
        loginName: action.userData.loginname,
        accessToken: action.token
      };
    case ACCESSTOKENFAILED:
      return { ...state, loginName: null, accessToken: null };
    case GETUSERINFO:
      return { ...state, userData: action.userData };
    case LOGOUT:
      return { ...state, userData: {}, accessToken: "", loginName: "" };
    default:
      return state;
  }
}
