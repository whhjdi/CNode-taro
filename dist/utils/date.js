"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = formatDate;
function formatDate(str) {
  if (!str) {
    return;
  }
  str = str.replace("T", " ");
  var index = str.indexOf(".");
  str = str.substr(0, index);
  return str;
}