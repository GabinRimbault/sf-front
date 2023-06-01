"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProgressBar;
var _react = _interopRequireDefault(require("react"));
var _Wrapper = _interopRequireDefault(require("../../base/Wrapper.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ProgressBar(_ref) {
  let {
    children,
    width,
    height = "2px",
    color
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Wrapper.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress_bar"
  }, /*#__PURE__*/_react.default.createElement("span", null, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "bar_style",
    style: {
      height: height
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: color,
      width: width
    },
    className: "bar_color"
  }))));
}