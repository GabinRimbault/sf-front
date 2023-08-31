"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;
function Footer(_ref) {
  let {
    classFooter,
    children
  } = _ref;
  const style = classFooter !== undefined ? classFooter : undefined;
  return /*#__PURE__*/React.createElement("footer", {
    className: style
  }, children);
}