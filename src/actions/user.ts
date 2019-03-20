import Taro from "@tarojs/taro";
import fetchData from "../api/fetchData";
import { ACCESSTOKEN, ACCESSTOKENFAILED, GETUSERINFO } from "../constants/user";

export const accessUserToken = token => async dispatch => {
  console.log(token, 333);

  try {
    let res = await fetchData.userLogin(token);
    if (res && res.data.success) {
      saveAccessToken(token);
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

export const saveAccessToken = token => {
  Taro.setStorageSync("token", token);
};
