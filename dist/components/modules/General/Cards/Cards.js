"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Cards;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Cards(_ref) {
  let {
    classCards,
    children
  } = _ref;
  const style = classCards !== undefined ? classCards + " cards" : "cards";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: style
  }, children));
}