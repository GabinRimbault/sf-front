"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _prismjs = _interopRequireDefault(require("prismjs"));
var _react = require("react");
require("../scss/prism.css");
var _Tag = _interopRequireDefault(require("./base/Tag"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const WrapperExample = _ref => {
  let {
    children
  } = _ref;
  (0, _react.useEffect)(() => {
    _prismjs.default.highlightAll();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "wrapper_example"
  }, children);
};
WrapperExample.Component = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React.createElement("div", {
    className: "component_example center"
  }, children);
};
WrapperExample.Code = _ref3 => {
  let {
    children
  } = _ref3;
  return /*#__PURE__*/React.createElement("div", {
    className: "code_example"
  }, /*#__PURE__*/React.createElement(_Tag.default, {
    classTag: "infos bg-color font-small"
  }, "React"), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    className: "language-javascript"
  }, children)));
};
var _default = WrapperExample;
exports.default = _default;