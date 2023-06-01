"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlocInformation;
require("core-js/modules/es.promise.js");
var _react = _interopRequireDefault(require("react"));
var _Wrapper = _interopRequireDefault(require("../../base/Wrapper.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function BlocInformation(_ref) {
  let {
    name,
    classBlocInformation,
    type = "infos",
    child1,
    child2,
    drop = true
  } = _ref;
  const style = classBlocInformation !== undefined ? classBlocInformation + " bloc_information" : "bloc_information";
  return /*#__PURE__*/_react.default.createElement(_Wrapper.default, null, /*#__PURE__*/_react.default.createElement("div", {
    id: name,
    className: style + " " + type
  }, child1, drop ? /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-chevron-down"
  }) : /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-chevron-up"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "bloc_content"
  }, child2));
}