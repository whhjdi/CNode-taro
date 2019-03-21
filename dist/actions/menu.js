"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeMenu = exports._changeMenu = exports.hideMenu = exports.showMenu = undefined;
exports.asyncAdd = asyncAdd;

var _menu = require("../constants/menu.js");

var _topicList = require("./topicList.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var showMenu = exports.showMenu = function showMenu() {
  return {
    type: _menu.SHOW_DRAWER
  };
};
var hideMenu = exports.hideMenu = function hideMenu() {
  return {
    type: _menu.HIDE_DRAWER
  };
};
var _changeMenu = exports._changeMenu = function _changeMenu(currentMenu) {
  return {
    type: _menu.CHANGE_CURRENT_MENU,
    currentMenu: currentMenu
  };
};
var changeMenu = exports.changeMenu = function changeMenu(currentMenu) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(_changeMenu(currentMenu));
              dispatch((0, _topicList.getTopicList)({ tab: currentMenu.key, page: 1, limit: 20 }));
              // try {
              //   let res = await fetchData.getTopicList(params);
              //   if (res.data.length > 0) {
              //     dispatch(_getNextList(res.data, params.page + 1));
              //   }
              // } catch (err) {
              //   console.log(err);
              // }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
// 异步的action
function asyncAdd() {
  return function (dispatch) {
    setTimeout(function () {
      dispatch();
    }, 2000);
  };
}