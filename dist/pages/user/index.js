"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = require("../../npm/tslib/tslib.js");

var tslib_1 = _interopRequireWildcard(_tslib);

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _user = require("../../actions/user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = (_temp2 = _class = function (_BaseComponent) {
  _inherits(User, _BaseComponent);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["avatar_url", "recent_topics", "recent_replies", "hasReadMsgs", "notReadMsgs", "loginname", "loginName", "userInfo", "getMessages", "token", "userLogout", "userData"], _this.config = {
      navigationBarTitleText: "个人中心",
      navigationBarBackgroundColor: "#fff",
      navigationBarTextStyle: "black"
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: "_constructor",
    value: function _constructor() {
      _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), "_constructor", this).apply(this, arguments);
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleUserInfo();
    }
  }, {
    key: "handleUserInfo",
    value: function handleUserInfo() {
      var _props = this.props,
          loginName = _props.loginName,
          userInfo = _props.userInfo,
          getMessages = _props.getMessages,
          token = _props.token;

      if (loginName) {
        userInfo(loginName);
        getMessages(token);
      }
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      _index2.default.setStorageSync("token", "");
      this.props.userLogout();
      _index2.default.redirectTo({ url: "/pages/index/index" });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props$userData = this.__props.userData,
          avatar_url = _props$userData.avatar_url,
          loginname = _props$userData.loginname,
          recent_replies = _props$userData.recent_replies,
          recent_topics = _props$userData.recent_topics,
          hasReadMsgs = _props$userData.hasReadMsgs,
          notReadMsgs = _props$userData.notReadMsgs;

      Object.assign(this.__state, {
        avatar_url: avatar_url,
        recent_topics: recent_topics,
        recent_replies: recent_replies,
        hasReadMsgs: hasReadMsgs,
        notReadMsgs: notReadMsgs,
        loginname: loginname
      });
      return this.__state;
    }
  }]);

  return User;
}(_index.Component), _class.properties = {
  "loginName": {
    "type": null,
    "value": null
  },
  "userInfo": {
    "type": null,
    "value": null
  },
  "getMessages": {
    "type": null,
    "value": null
  },
  "token": {
    "type": null,
    "value": null
  },
  "userLogout": {
    "type": null,
    "value": null
  },
  "userData": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleLogout"], _temp2);
User = tslib_1.__decorate([(0, _index3.connect)(function (store) {
  return {
    userData: store.user.userData,
    loginName: store.user.loginName,
    token: store.user.accessToken,
    hasReadMsgs: store.user.hasReadMsgs,
    notReadMsgs: store.user.notReadMsgs
  };
}, function (dispatch) {
  return {
    userInfo: function userInfo(userName) {
      dispatch((0, _user.userInfo)(userName));
    },
    userLogout: function userLogout() {
      dispatch((0, _user.userLogout)());
    },
    getMessages: function getMessages(token) {
      dispatch((0, _user.getMessages)(token));
    }
  };
})], User);
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
exports.default = User;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(User, true));