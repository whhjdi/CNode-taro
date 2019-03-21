import fetchData from "../api/fetchData";
import {
  ACCESSTOKEN,
  ACCESSTOKENFAILED,
  GETUSERINFO,
  LOGOUT,
  GETMESSAGES
} from "../constants/user";

export const accessUserToken = token => async dispatch => {
  try {
    let res = await fetchData.userLogin(token);
    if (res.data.success) {
      dispatch(_accessUserToken(res.data, token));
    } else {
      dispatch(_accessUserTokenFailed());
    }
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const _accessUserToken = (userData, token) => {
  return {
    type: ACCESSTOKEN,
    userData,
    token
  };
};

export const _accessUserTokenFailed = () => {
  return {
    type: ACCESSTOKENFAILED
  };
};

export const userInfo = userName => async dispatch => {
  try {
    let res = await fetchData.getUserInfo(userName);
    dispatch(_userInfo(res.data.data));
  } catch (err) {
    console.log(err);
  }
};
export const _userInfo = userData => {
  return {
    type: GETUSERINFO,
    userData
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT
  };
};

export const getMessages = token => async dispatch => {
  try {
    let res = await fetchData.fetchMessages(token);
    dispatch(_getMessages(res.data.data));
  } catch (err) {
    console.log(err);
  }
};

export const _getMessages = messages => {
  return {
    type: GETMESSAGES,
    messages
  };
};
