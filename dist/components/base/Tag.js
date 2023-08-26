"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tag;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Tag(_ref) {
  let {
    children,
    classTag
  } = _ref;
  const style = classTag !== undefined ? classTag + " tag" : "tag";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: style
  }, children));
}