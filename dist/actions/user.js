"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getMessages = exports.getMessages = exports.userLogout = exports._userInfo = exports.userInfo = exports._accessUserTokenFailed = exports._accessUserToken = exports.accessUserToken = undefined;

var _fetchData = require("../api/fetchData.js");

var _fetchData2 = _interopRequireDefault(_fetchData);

var _user = require("../constants/user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var accessUserToken = exports.accessUserToken = function accessUserToken(token) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _fetchData2.default.userLogin(token);

            case 3:
              res = _context.sent;

              if (res.data.success) {
                dispatch(_accessUserToken(res.data, token));
              } else {
                dispatch(_accessUserTokenFailed());
              }
              return _context.abrupt("return", res.data);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var _accessUserToken = exports._accessUserToken = function _accessUserToken(userData, token) {
  return {
    type: _user.ACCESSTOKEN,
    userData: userData,
    token: token
  };
};
var _accessUserTokenFailed = exports._accessUserTokenFailed = function _accessUserTokenFailed() {
  return {
    type: _user.ACCESSTOKENFAILED
  };
};
var userInfo = exports.userInfo = function userInfo(userName) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _fetchData2.default.getUserInfo(userName);

            case 3:
              res = _context2.sent;

              dispatch(_userInfo(res.data.data));
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
var _userInfo = exports._userInfo = function _userInfo(userData) {
  return {
    type: _user.GETUSERINFO,
    userData: userData
  };
};
var userLogout = exports.userLogout = function userLogout() {
  return {
    type: _user.LOGOUT
  };
};
var getMessages = exports.getMessages = function getMessages(token) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _fetchData2.default.fetchMessages(token);

            case 3:
              res = _context3.sent;

              dispatch(_getMessages(res.data.data));
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);

              console.log(_context3.t0);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 7]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var _getMessages = exports._getMessages = function _getMessages(messages) {
  return {
    type: _user.GETMESSAGES,
    messages: messages
  };
};