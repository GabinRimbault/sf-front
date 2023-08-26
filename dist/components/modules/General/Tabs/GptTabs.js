"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GptTabs;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _Tabs = _interopRequireDefault(require("./Tabs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function GptTabs(_ref) {
  let {
    classTabs,
    children
  } = _ref;
  const style = classTabs ? "gpt-tabs  " + classTabs : "gpt-tabs";
  const [activeTab, setActiveTab] = (0, _react.useState)(0);
  const handleTabClick = index => {
    setActiveTab(index);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: style
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-buttons"
  }, _react.default.Children.map(children, (child, index) => /*#__PURE__*/_react.default.createElement("button", {
    key: index,
    onClick: () => handleTabClick(index),
    className: index === activeTab ? 'active' : ''
  }, child.props.title))), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    className: "tab-content"
  }, children[activeTab].props.children));
}