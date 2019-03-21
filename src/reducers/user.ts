import {
  ACCESSTOKEN,
  ACCESSTOKENFAILED,
  GETUSERINFO,
  LOGOUT,
  GETMESSAGES
} from "../constants/user";

const USER_STATE = {
  accessToken: "",
  loginName: "",
  userData: {},
  hasReadMsgs: [],
  notReadMsgs: []
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
    case GETMESSAGES:
      return {
        ...state,
        hasReadMsgs: action.messages.has_read_messages,
        notReadMsgs: action.messages.hasnot_read_messages
      };
    default:
      return state;
  }
}
