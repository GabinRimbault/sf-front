"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Table = _ref => {
  let {
    classTable,
    children
  } = _ref;
  const style = classTable !== undefined ? classTable + " table" : "table";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("table", {
    className: style
  }, children));
};
Table.Head = _ref2 => {
  let {
    classHeading,
    children
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("tr", {
    className: "heading_table " + classHeading
  }, children);
};
Table.HeadCell = _ref3 => {
  let {
    children
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("th", null, children);
};
Table.Row = _ref4 => {
  let {
    classRow,
    children
  } = _ref4;
  const style = classRow !== undefined ? classRow + " row_table" : "row_table";
  return /*#__PURE__*/_react.default.createElement("tr", {
    className: style
  }, children);
};
Table.Cell = _ref5 => {
  let {
    children
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("td", null, children);
};
var _default = Table;
exports.default = _default;