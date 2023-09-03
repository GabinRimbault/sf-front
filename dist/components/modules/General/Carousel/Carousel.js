"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Carousel;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Carousel(_ref) {
  let {
    children,
    slideInterval = 5000
  } = _ref;
  const [currentIndex, setCurrentIndex] = (0, _react.useState)(0);
  const images = _react.Children.map(children, child => child.props.src);
  const [activeSlide, setActiveSlide] = (0, _react.useState)(currentIndex);
  const handleSlideChange = index => {
    setCurrentIndex(index);
    setActiveSlide(index);
  };
  const goToPreviousSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };
  const goToNextSlide = (0, _react.useCallback)(() => {
    // Utilisez useCallback pour mémoriser la fonction
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  }, [images]);
  (0, _react.useEffect)(() => {
    const carouselInterval = setInterval(goToNextSlide, slideInterval);
    return () => {
      clearInterval(carouselInterval);
    };
  }, [images, slideInterval, goToNextSlide]);
  const currentImage = images[currentIndex];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: currentImage,
    alt: "Slide ".concat(currentIndex + 1)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-navigation"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "carousel-button",
    onClick: goToPreviousSlide
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-chevron-left"
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "carousel-button",
    onClick: goToNextSlide
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-chevron-right"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "slide-indicators"
  }, images.map((_, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: "slide-indicator ".concat(index === activeSlide ? 'active' : ''),
    onClick: () => handleSlideChange(index)
  }))));
}