"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function List(_ref) {
  let {
    type = "ul",
    data = [] | {},
    classList
  } = _ref;
  const Type = type === "ol" || type === "ul" ? type : "ul";
  let listItems = null;
  if (Array.isArray(data)) {
    listItems = data.map((value, key) => {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: key
      }, value);
    });
  } else if (typeof data === "object" && data !== null) {
    listItems = Object.entries(data).map((_ref2, index) => {
      let [key, value] = _ref2;
      return /*#__PURE__*/_react.default.createElement("li", {
        key: index,
        id: key
      }, /*#__PURE__*/_react.default.createElement("a", {
        alt: "Lien " + key,
        href: value.liens[0]
      }, value.icons && value.icons[0] === "left" && value.icons[1], value.icons && value.icons[0] === "left" && " ", value.liens[1], value.icons && value.icons[0] === "right" && " ", value.icons && value.icons[0] === "right" && value.icons[1]));
    });
  }
  return /*#__PURE__*/_react.default.createElement(Type, {
    className: classList !== undefined ? "list " + classList : "list"
  }, listItems);
}