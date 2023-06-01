"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Skills;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Skills(_ref) {
  let {
    children,
    technos,
    progress
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "skill_experiences"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "skill_define"
  }, /*#__PURE__*/_react.default.createElement("span", null, children), /*#__PURE__*/_react.default.createElement("div", {
    className: progress
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: technos
  }))));
}