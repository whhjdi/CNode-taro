"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = menu;

var _menu = require("../constants/menu.js");

var MENU_STATE = {
  menuData: [{ key: "all", value: "全部" }, { key: "good", value: "精华" }, { key: "share", value: "分享" }, { key: "ask", value: "问答" }, { key: "job", value: "招聘" }, { key: "dev", value: "客户端测试" }],
  currentMenu: { key: "all", value: "全部" },
  showDrawer: false
};
function menu() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MENU_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _menu.SHOW_DRAWER:
      return _extends({}, state, { showDrawer: true });
    case _menu.HIDE_DRAWER:
      return _extends({}, state, { showDrawer: false });
    case _menu.CHANGE_CURRENT_MENU:
      return _extends({}, state, { currentMenu: action.currentMenu });
    default:
      return state;
  }
}