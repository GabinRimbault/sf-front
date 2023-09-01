"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
const SideBar = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "sidebar"
  }, children);
};
SideBar.Item = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    className: "sidebar-item"
  }, children));
};
SideBar.Link = _ref3 => {
  let {
    link,
    children
  } = _ref3;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: link,
    className: "sidebar-link"
  }, children));
};
SideBar.Label = _ref4 => {
  let {
    children
  } = _ref4;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "sidebar-label"
  }, children));
};
var _default = SideBar;
exports.default = _default;