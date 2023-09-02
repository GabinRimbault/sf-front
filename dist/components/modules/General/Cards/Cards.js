"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Content = _interopRequireDefault(require("../../../base/Content"));
var _Title = _interopRequireDefault(require("../../../base/Title"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Cards = _ref => {
  let {
    link = "#",
    classCards,
    children
  } = _ref;
  const style = classCards !== undefined ? classCards + " cards" : "cards";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: link,
    className: style
  }, children));
};
Cards.Header = _ref2 => {
  let {
    src,
    title = "h2",
    children
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cards-header"
  }, src !== undefined && /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    alt: "Image"
  }), /*#__PURE__*/_react.default.createElement(_Title.default, {
    lvl: title
  }, children));
};
Cards.Body = _ref3 => {
  let {
    children
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement(_Content.default, null, children));
};
Cards.Footer = _ref4 => {
  let {
    children
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card-footer"
  }, /*#__PURE__*/_react.default.createElement(_Content.default, null, children));
};
var _default = Cards;
exports.default = _default;