"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = topicList;

var _topicList = require("../constants/topicList.js");

var TOPIC_STATE = {
  page: 1,
  limit: 20,
  list: []
};
function topicList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TOPIC_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _topicList.GET_TOPICLIST:
      return _extends({}, state, { list: action.list, page: 1 });
    case _topicList.ADD_TOPICLIST:
      return _extends({}, state, {
        list: state.list.concat(action.list),
        page: action.page
      });
    default:
      return state;
  }
}