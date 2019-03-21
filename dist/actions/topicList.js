"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getNextList = exports._getTopicList = exports.getNextList = exports.getTopicList = undefined;

var _fetchData = require("../api/fetchData.js");

var _fetchData2 = _interopRequireDefault(_fetchData);

var _topicList = require("../constants/topicList.js");

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//获取第一页
var getTopicList = exports.getTopicList = function getTopicList(params) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _fetchData2.default.getTopicList(params);

            case 3:
              res = _context.sent;

              dispatch(_getTopicList(res.data.data));
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 7]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
//获取下一页
var getNextList = exports.getNextList = function getNextList(params) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _fetchData2.default.getTopicList(params);

            case 3:
              res = _context2.sent;

              if (res.data.data.length > 0) {
                dispatch(_getNextList(res.data.data, params.page + 1));
              } else {
                _index2.default.showToast({ title: "没有更多数据了" });
                console.log("到底了");
              }
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);

              console.log(_context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 7]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var _getTopicList = exports._getTopicList = function _getTopicList(list) {
  return {
    type: _topicList.GET_TOPICLIST,
    list: list
  };
};
var _getNextList = exports._getNextList = function _getNextList(list, page) {
  return {
    type: _topicList.ADD_TOPICLIST,
    list: list,
    page: page
  };
};