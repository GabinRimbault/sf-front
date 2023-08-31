"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tag;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Tag(_ref) {
  let {
    children,
    classTag,
    linkTag = null
  } = _ref;
  const style = classTag !== undefined ? classTag + " tag" : "tag";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, linkTag !== null ? /*#__PURE__*/_react.default.createElement("span", {
    className: style
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: linkTag
  }, children)) : /*#__PURE__*/_react.default.createElement("span", {
    className: style
  }, children));
}