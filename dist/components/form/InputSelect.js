"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputSelect;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function InputSelect(_ref) {
  let {
    options = [],
    classSelectInput,
    callback
  } = _ref;
  const handleSelectChange = event => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    callback(selectedValue);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("select", {
    className: classSelectInput !== undefined ? classSelectInput + " input_select" : "input_select",
    onChange: handleSelectChange
  }, Array.isArray(options) && options.map((value, key) => /*#__PURE__*/_react.default.createElement("option", {
    key: key,
    value: value
  }, value))));
}