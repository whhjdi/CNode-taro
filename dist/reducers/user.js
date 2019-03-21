"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = user;

var _user = require("../constants/user.js");

var USER_STATE = {
  accessToken: "",
  loginName: "",
  userData: {},
  hasReadMsgs: [],
  notReadMsgs: []
};
function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _user.ACCESSTOKEN:
      return _extends({}, state, {
        loginName: action.userData.loginname,
        accessToken: action.token
      });
    case _user.ACCESSTOKENFAILED:
      return _extends({}, state, { loginName: null, accessToken: null });
    case _user.GETUSERINFO:
      return _extends({}, state, { userData: action.userData });
    case _user.LOGOUT:
      return _extends({}, state, { userData: {}, accessToken: "", loginName: "" });
    case _user.GETMESSAGES:
      return _extends({}, state, {
        hasReadMsgs: action.messages.has_read_messages,
        notReadMsgs: action.messages.hasnot_read_messages
      });
    default:
      return state;
  }
}