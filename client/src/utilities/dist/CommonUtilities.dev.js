"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_SCREEN_INDEX = exports.TOTAL_SCREENS = void 0;

var _Home = _interopRequireDefault(require("../PortfolioContainer/Home/Home"));

var _AboutMe = _interopRequireDefault(require("../PortfolioContainer/AboutMe/AboutMe"));

var _Resume = _interopRequireDefault(require("../PortfolioContainer/Resume/Resume"));

var _Testimonial = _interopRequireDefault(require("../PortfolioContainer/Testimonial/Testimonial"));

var _ContactMe = _interopRequireDefault(require("../PortfolioContainer/ContactMe/ContactMe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TOTAL_SCREENS = [{
  screen_name: "Home",
  component: _Home["default"]
}, {
  screen_name: "AboutMe",
  component: _AboutMe["default"]
}, {
  screen_name: "Resume",
  component: _Resume["default"]
}, {
  screen_name: "Testimonial",
  component: _Testimonial["default"]
}, {
  screen_name: "ContactMe",
  component: _ContactMe["default"]
}];
exports.TOTAL_SCREENS = TOTAL_SCREENS;

var GET_SCREEN_INDEX = function GET_SCREEN_INDEX(screen_name) {
  if (!screen_name) return -1;

  for (var i = 0; i < TOTAL_SCREENS.lenght; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};

exports.GET_SCREEN_INDEX = GET_SCREEN_INDEX;