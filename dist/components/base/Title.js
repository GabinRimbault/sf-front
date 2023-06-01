"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Title;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Title(_ref) {
  let {
    classTitle,
    lvl = "h1",
    children
  } = _ref;
  const Type = lvl;
  return /*#__PURE__*/_react.default.createElement(Type, {
    className: classTitle
  }, children);
}