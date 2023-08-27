"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.string.starts-with.js");
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function List(_ref) {
  let {
    type = "ul",
    data = [],
    classList,
    classLink
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
      const isExternalLink = value.liens[0].startsWith("http");
      const linkProps = isExternalLink ? {
        to: value.liens[0],
        target: "_blank",
        rel: "noopener noreferrer"
      } : {
        to: value.liens[0]
      };
      return /*#__PURE__*/_react.default.createElement("li", {
        key: index,
        id: key
      }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, _extends({}, linkProps, {
        className: classLink,
        alt: "Lien " + key
      }), value.icons && value.icons[0] === "left" && value.icons[1], value.icons && value.icons[0] === "left" && " ", value.liens[1], value.icons && value.icons[0] === "right" && " ", value.icons && value.icons[0] === "right" && value.icons[1]));
    });
  }
  return /*#__PURE__*/_react.default.createElement(Type, {
    className: classList !== undefined ? "list " + classList : "list"
  }, listItems);
}