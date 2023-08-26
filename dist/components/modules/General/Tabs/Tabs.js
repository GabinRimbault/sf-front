"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tabs;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Tabs(_ref) {
  let {
    title,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-content"
  }, children);
}