"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExposeProduct;
var _Lame = _interopRequireDefault(require("../../../base/Lame"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ExposeProduct(_ref) {
  let {
    classExposeProduct,
    children
  } = _ref;
  const style = classExposeProduct !== undefined ? "expose_product " + classExposeProduct : "expose_product";
  return /*#__PURE__*/React.createElement(_Lame.default, {
    classLame: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "content_product"
  }, children));
}