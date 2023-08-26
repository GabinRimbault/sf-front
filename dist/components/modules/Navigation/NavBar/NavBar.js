"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavBar;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function NavBar(_ref) {
  let {
    classNavBar,
    children
  } = _ref;
  const style = classNavBar ? "nav_bar " + classNavBar : "nav_bar";
  return /*#__PURE__*/_react.default.createElement("header", {
    className: style
  }, /*#__PURE__*/_react.default.createElement("nav", null, children));
}