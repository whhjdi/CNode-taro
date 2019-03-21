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

var _menu = require("../../actions/menu.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Menu, _BaseComponent);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["showDrawer", "items", "currentMenu", "showMenu", "hideMenu", "menu", "changeMenu", "loginName"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Menu.prototype.__proto__ || Object.getPrototypeOf(Menu.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "onShow",
    value: function onShow() {
      this.props.showMenu();
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.props.hideMenu();
    }
  }, {
    key: "handleItems",
    value: function handleItems(menuData) {
      return menuData.map(function (item) {
        return item.value;
      });
    }
  }, {
    key: "changeItem",
    value: function changeItem(index) {
      var _props$menu = this.props.menu,
          menuData = _props$menu.menuData,
          currentMenu = _props$menu.currentMenu;

      var currentMenu2 = menuData[index];
      if (currentMenu.value === currentMenu2.value) {
        return;
      }this.props.changeMenu && this.props.changeMenu(currentMenu2);
    }
  }, {
    key: "toLogin",
    value: function toLogin() {
      if (this.props.loginName) {
        _index2.default.navigateTo({ url: "/pages/user/index" });
      } else {
        _index2.default.navigateTo({ url: "/pages/login/index" });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props$menu2 = this.__props.menu,
          menuData = _props$menu2.menuData,
          currentMenu = _props$menu2.currentMenu,
          showDrawer = _props$menu2.showDrawer;

      var items = this.handleItems(menuData);
      Object.assign(this.__state, {
        showDrawer: showDrawer,
        items: items,
        currentMenu: currentMenu
      });
      return this.__state;
    }
  }]);

  return Menu;
}(_index.Component), _class.properties = {
  "showMenu": {
    "type": null,
    "value": null
  },
  "hideMenu": {
    "type": null,
    "value": null
  },
  "menu": {
    "type": null,
    "value": null
  },
  "changeMenu": {
    "type": null,
    "value": null
  },
  "loginName": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["toLogin", "onShow", "onClose", "changeItem"], _temp2);
Menu = tslib_1.__decorate([(0, _index3.connect)(function (store) {
  return { menu: store.menu, loginName: store.user.loginName };
}, function (dispatch) {
  return {
    showMenu: function showMenu() {
      dispatch((0, _menu.showMenu)());
    },
    hideMenu: function hideMenu() {
      dispatch((0, _menu.hideMenu)());
    },
    changeMenu: function changeMenu(currentMenu) {
      dispatch((0, _menu.changeMenu)(currentMenu));
    }
  };
})], Menu);
exports.default = Menu;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Menu));