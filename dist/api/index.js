"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var baseUrl = "https://cnodejs.org/api/v1";
var api = {
  topics: "/topics",
  topic: "/topic",
  userInfo: "/user",
  accessToken: "/accesstoken",
  msgs: "/messages" //所有消息 get
};
Object.keys(api).forEach(function (item) {
  api[item] = baseUrl + api[item];
});
exports.default = api;