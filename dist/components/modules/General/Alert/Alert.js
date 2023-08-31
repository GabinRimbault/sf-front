"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Alert;
var _react = _interopRequireWildcard(require("react"));
var _Wrapper = _interopRequireDefault(require("../../../base/Wrapper.js"));
var _Content = _interopRequireDefault(require("../../../base/Content"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Alert(_ref) {
  let {
    classAlert,
    children,
    name,
    cross = true,
    additionalContent
  } = _ref;
  const idDel = (0, _react.useRef)("block");
  const style = classAlert !== undefined ? "alert " + classAlert : "alert";
  const handleDel = () => {
    idDel.current.style.display = "none";
  };
  return /*#__PURE__*/_react.default.createElement(_Wrapper.default, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: idDel,
    id: name,
    className: style
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "content_alert"
  }, /*#__PURE__*/_react.default.createElement(_Content.default, {
    classContent: "text-alert"
  }, children), /*#__PURE__*/_react.default.createElement(_Content.default, {
    classContent: "cross-alert"
  }, cross ? /*#__PURE__*/_react.default.createElement("i", {
    onClick: handleDel,
    className: "fa-solid fa-xmark"
  }) : "")), /*#__PURE__*/_react.default.createElement("div", {
    className: "content_additional"
  }, additionalContent ? additionalContent : null))));
}