"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _index = require("../../../../index");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const BlocInformation = _ref => {
  let {
    titre,
    children
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const collapse = () => {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/_react.default.createElement(_index.Wrapper, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "bloc_information",
    onClick: collapse
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, titre), /*#__PURE__*/_react.default.createElement("span", null, isOpen ? /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-chevron-up"
  }) : /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-chevron-down"
  }))), isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "contenu-collapse"
  }, children)));
};
var _default = BlocInformation;
exports.default = _default;