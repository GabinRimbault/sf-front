"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Breadcrumb;
var _react = _interopRequireDefault(require("react"));
var _List = _interopRequireDefault(require("../../../base/List"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Breadcrumb(_ref) {
  let {
    classBread,
    dataNav
  } = _ref;
  const style = classBread !== undefined ? classBread + " bread" : "bread";
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: style,
    "aria-label": "Breadcrumb"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-house"
  }), /*#__PURE__*/_react.default.createElement(_List.default, {
    type: "ol",
    data: dataNav
  }));
}