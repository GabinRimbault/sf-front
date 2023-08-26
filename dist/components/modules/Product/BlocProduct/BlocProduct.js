"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlocProduct;
var _Lame = _interopRequireDefault(require("../../../base/Lame"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function BlocProduct(_ref) {
  let {
    classBlocProduct,
    children
  } = _ref;
  const style = classBlocProduct !== undefined ? "bloc_product " + classBlocProduct : "bloc_product";
  return /*#__PURE__*/React.createElement(_Lame.default, {
    className: style
  }, children);
}