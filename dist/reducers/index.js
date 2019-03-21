"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("../npm/redux/lib/redux.js");

var _menu = require("./menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _topicList = require("./topicList.js");

var _topicList2 = _interopRequireDefault(_topicList);

var _detail = require("./detail.js");

var _detail2 = _interopRequireDefault(_detail);

var _user = require("./user.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  menu: _menu2.default,
  topicList: _topicList2.default,
  detail: _detail2.default,
  user: _user2.default
});