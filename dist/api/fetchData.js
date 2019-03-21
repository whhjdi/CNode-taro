"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require("./request.js");

var _request2 = _interopRequireDefault(_request);

var _index = require("./index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fetchData = function () {
  function fetchData() {
    _classCallCheck(this, fetchData);
  }

  _createClass(fetchData, null, [{
    key: "getTopicList",
    value: function getTopicList(params) {
      return (0, _request2.default)(_index2.default.topics, "GET", params);
    }
  }, {
    key: "getTopicDetail",
    value: function getTopicDetail(id, accessToken) {
      var accesstoken = accessToken ? accessToken : "";
      return (0, _request2.default)(_index2.default.topic + "/" + id, "GET", { accesstoken: accesstoken });
    }
  }, {
    key: "userLogin",
    value: function userLogin(accesstoken) {
      return (0, _request2.default)(_index2.default.accessToken, "POST", { accesstoken: accesstoken });
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo(userName) {
      return (0, _request2.default)(_index2.default.userInfo + "/" + userName, "GET");
    }
  }, {
    key: "fetchMessages",
    value: function fetchMessages(accesstoken) {
      return (0, _request2.default)(_index2.default.msgs, "GET", { accesstoken: accesstoken });
    }
  }]);

  return fetchData;
}();

exports.default = fetchData;