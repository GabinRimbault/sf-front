"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WrapperExample;
var _Wrapper = _interopRequireDefault(require("./base/Wrapper"));
var _Title = _interopRequireDefault(require("./base/Title"));
var _Lame = _interopRequireDefault(require("./base/Lame"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function WrapperExample(_ref) {
  let {
    children,
    code,
    title
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Lame.default, null, /*#__PURE__*/React.createElement(_Title.default, {
    lvl: "h2",
    classTitle: "heading type1 center"
  }, title), /*#__PURE__*/React.createElement(_Wrapper.default, {
    classWrapper: "wrapper_example"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content_example"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "code_example"
  }, /*#__PURE__*/React.createElement("pre", null, "List of props:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("code", null, code))))));
}