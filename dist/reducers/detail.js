"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = detail;

var _detail = require("../constants/detail.js");

var DETAIL_STATE = {
  detailInfo: {},
  replies: []
};
function detail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DETAIL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _detail.GET_DETAIL:
      return _extends({}, state, {
        replies: action.res.replies,
        detailInfo: _extends({}, action.res, { replies: null })
      });
    default:
      return state;
  }
}