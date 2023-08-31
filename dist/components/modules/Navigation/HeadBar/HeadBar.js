"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeadBar;
var _react = _interopRequireDefault(require("react"));
var _List = _interopRequireDefault(require("../../../base/List"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function HeadBar(_ref) {
  let {
    classHeadBar,
    classLink = "liseret",
    data,
    icons
  } = _ref;
  const style = classHeadBar ? "headbar " + classHeadBar : "headbar";
  let listNav = null;
  if (data != null) listNav = data;else listNav = {
    home: {
      liens: ["/", "Accueil"]
    },
    products: {
      liens: ["/products", "Produits"]
    },
    category: {
      liens: ["/products/category", "Catégorie"]
    }
  };
  return /*#__PURE__*/_react.default.createElement("header", {
    className: style
  }, /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo_content"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-brands fa-drupal"
  }), " SF"), /*#__PURE__*/_react.default.createElement(_List.default, {
    type: "ul",
    classLink: classLink,
    data: listNav
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "social_content"
  }, icons ? /*#__PURE__*/_react.default.createElement(_List.default, {
    classLink: "icons_headbar",
    data: icons,
    type: "ul"
  }) : null)));
}