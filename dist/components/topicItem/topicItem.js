"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = require("../../npm/tslib/tslib.js");

var tslib_1 = _interopRequireWildcard(_tslib);

var _date = require("../../utils/date.js");

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopicItem = (_temp2 = _class = function (_BaseComponent) {
  _inherits(TopicItem, _BaseComponent);

  function TopicItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TopicItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TopicItem.__proto__ || Object.getPrototypeOf(TopicItem)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "item"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopicItem, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(TopicItem.prototype.__proto__ || Object.getPrototypeOf(TopicItem.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "pushDetail",
    value: function pushDetail(item) {
      _index2.default.navigateTo({ url: "/pages/detail/index?topicid=" + item.id });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var item = this.__props.item;

      var anonymousState__temp = item.create_at ? (0, _date.formatDate)(item.create_at) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        item: item
      });
      return this.__state;
    }
  }]);

  return TopicItem;
}(_index.Component), _class.properties = {
  "item": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["pushDetail"], _temp2);
TopicItem = tslib_1.__decorate([(0, _index3.connect)(function (store) {
  return { list: store.topicList.list };
}, function (dispatch) {
  return {};
})], TopicItem);
TopicItem.defaultProps = {
  item: []
};
exports.default = TopicItem;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(TopicItem));