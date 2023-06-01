"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Notification;
var _react = _interopRequireWildcard(require("react"));
var _Wrapper = _interopRequireDefault(require("../../base/Wrapper.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Notification(_ref) {
  let {
    classNotification,
    children,
    name,
    del = true
  } = _ref;
  const idDel = (0, _react.useRef)("block");
  const style = classNotification !== undefined ? "notification " + classNotification : "notification";
  const handleDel = () => {
    idDel.current.style.display = "none";
  };
  return /*#__PURE__*/_react.default.createElement(_Wrapper.default, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: idDel,
    id: name,
    className: style
  }, /*#__PURE__*/_react.default.createElement("p", null, children, del ? /*#__PURE__*/_react.default.createElement("i", {
    onClick: handleDel,
    className: "fa-solid fa-xmark"
  }) : "")));
}