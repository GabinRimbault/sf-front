"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Code;
function Code(_ref) {
  let {
    classCode,
    children
  } = _ref;
  const style = classCode !== undefined ? classCode + " bloc-code" : "bloc-code";
  return /*#__PURE__*/React.createElement("pre", {
    className: style
  }, children);
}