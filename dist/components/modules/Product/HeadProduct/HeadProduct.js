"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeadProduct;
var _Lame = _interopRequireDefault(require("../../../base/Lame"));
var _Img = _interopRequireDefault(require("../../../base/Img"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function HeadProduct(_ref) {
  let {
    classHeadProduct,
    imgTurn = 'right',
    children
  } = _ref;
  const style = classHeadProduct !== undefined ? "head_product " + classHeadProduct : "head_product";
  return /*#__PURE__*/React.createElement(React.Fragment, null, imgTurn === 'right' ? /*#__PURE__*/React.createElement(_Lame.default, {
    className: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "content_headproduct left_border"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "img_headproduct"
  }, /*#__PURE__*/React.createElement(_Img.default, {
    alt: "#",
    src: "https://fakeimg.pl/500x300/"
  }))) : /*#__PURE__*/React.createElement(_Lame.default, {
    className: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "img_headproduct"
  }, /*#__PURE__*/React.createElement(_Img.default, {
    alt: "#",
    classImg: "img_border img_rounded",
    src: "https://fakeimg.pl/500x300/"
  })), /*#__PURE__*/React.createElement("div", {
    className: "content_headproduct right_border"
  }, children)));
}