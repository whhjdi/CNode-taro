import fetchData from "../api/fetchData";
import { ACCESSTOKEN, ACCESSTOKENFAILED, GETUSERINFO } from "../constants/user";

export const accessUserToken = token => async dispatch => {
  try {
    let res = await fetchData.userLogin(token);
    console.log(res);

    if (res && res.data.success) {
      dispatch(_accessUserToken(res.data, token));
    } else {
      dispatch(_accessUserTokenFailed());
    }
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
    dispatch(_userInfo(res.data));
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
