/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/2048-master/2048.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/2048-master/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader!./src/2048-master/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./style/helpers.scss */ "./node_modules/css-loader/index.js!./src/2048-master/style/helpers.scss"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./style/main.css */ "./node_modules/css-loader/index.js!./src/2048-master/style/main.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./style/main.scss */ "./node_modules/css-loader/index.js!./src/2048-master/style/main.scss"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/2048-master/style/fonts/clear-sans.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/2048-master/style/fonts/clear-sans.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n    font-family: \"Clear Sans\";\n    src: url(" + escape(__webpack_require__(/*! ./ClearSans-Light-webfont.eot */ "./src/2048-master/style/fonts/ClearSans-Light-webfont.eot")) + ");\n    src: url(" + escape(__webpack_require__(/*! ./ClearSans-Light-webfont.eot */ "./src/2048-master/style/fonts/ClearSans-Light-webfont.eot")) + "?#iefix) format(\"embedded-opentype\"),\n         url(" + escape(__webpack_require__(/*! ./ClearSans-Light-webfont.svg */ "./src/2048-master/style/fonts/ClearSans-Light-webfont.svg")) + "#clear_sans_lightregular) format(\"svg\"),\n         url(" + escape(__webpack_require__(/*! ./ClearSans-Light-webfont.woff */ "./src/2048-master/style/fonts/ClearSans-Light-webfont.woff")) + ") format(\"woff\");\n    font-weight: 200;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Clear Sans\";\n    src: url(" + escape(__webpack_require__(/*! ./ClearSans-Regular-webfont.eot */ "./src/2048-master/style/fonts/ClearSans-Regular-webfont.eot")) + ");\n    src: url(" + escape(__webpack_require__(/*! ./ClearSans-Regular-webfont.eot */ "./src/2048-master/style/fonts/ClearSans-Regular-webfont.eot")) + "?#iefix) format(\"embedded-opentype\"),\n         url(" + escape(__webpack_require__(/*! ./ClearSans-Regular-webfont.svg */ "./src/2048-master/style/fonts/ClearSans-Regular-webfont.svg")) + "#clear_sansregular) format(\"svg\"),\n         url(" + escape(__webpack_require__(/*! ./ClearSans-Regular-webfont.woff */ "./src/2048-master/style/fonts/ClearSans-Regular-webfont.woff")) + ") format(\"woff\");\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Clear Sans\";\n    src: url(" + escape(__webpack_require__(/*! ./ClearSans-Bold-webfont.eot */ "./src/2048-master/style/fonts/ClearSans-Bold-webfont.eot")) + ");\n    src: url(" + escape(__webpack_require__(/*! ./ClearSans-Bold-webfont.eot */ "./src/2048-master/style/fonts/ClearSans-Bold-webfont.eot")) + "?#iefix) format(\"embedded-opentype\"),\n         url(" + escape(__webpack_require__(/*! ./ClearSans-Bold-webfont.svg */ "./src/2048-master/style/fonts/ClearSans-Bold-webfont.svg")) + "#clear_sansbold) format(\"svg\"),\n         url(" + escape(__webpack_require__(/*! ./ClearSans-Bold-webfont.woff */ "./src/2048-master/style/fonts/ClearSans-Bold-webfont.woff")) + ") format(\"woff\");\n    font-weight: 700;\n    font-style: normal;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/2048-master/style/helpers.scss":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader!./src/2048-master/style/helpers.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nUnknown word (15:1)\n\n  13 | //     @for $i from 0 through -$exponent {\n  14 | //       $value: $value / $base; } }\n> 15 | //   // return the last value written\n     | ^\n  16 | //   @return $value;\n  17 | // }\n  18 | \n");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/2048-master/style/main.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader!./src/2048-master/style/main.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader!./fonts/clear-sans.css */ "./node_modules/css-loader/index.js!./src/2048-master/style/fonts/clear-sans.css"), "");

// module
exports.push([module.i, "html, body {\n  margin: 0;\n  padding: 0;\n  background: #faf8ef;\n  color: #776e65;\n  font-family: \"Clear Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 18px; }\n\nbody {\n  margin: 80px 0; }\n\n.heading:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\nh1.title {\n  font-size: 80px;\n  font-weight: bold;\n  margin: 0;\n  display: block;\n  float: left; }\n\n@-webkit-keyframes move-up {\n  0% {\n    top: 25px;\n    opacity: 1; }\n\n  100% {\n    top: -50px;\n    opacity: 0; } }\n@-moz-keyframes move-up {\n  0% {\n    top: 25px;\n    opacity: 1; }\n\n  100% {\n    top: -50px;\n    opacity: 0; } }\n@keyframes move-up {\n  0% {\n    top: 25px;\n    opacity: 1; }\n\n  100% {\n    top: -50px;\n    opacity: 0; } }\n.scores-container {\n  float: right;\n  text-align: right; }\n\n.score-container, .best-container {\n  position: relative;\n  display: inline-block;\n  background: #bbada0;\n  padding: 15px 25px;\n  font-size: 25px;\n  height: 25px;\n  line-height: 47px;\n  font-weight: bold;\n  border-radius: 3px;\n  color: white;\n  margin-top: 8px;\n  text-align: center; }\n  .score-container:after, .best-container:after {\n    position: absolute;\n    width: 100%;\n    top: 10px;\n    left: 0;\n    text-transform: uppercase;\n    font-size: 13px;\n    line-height: 13px;\n    text-align: center;\n    color: #eee4da; }\n  .score-container .score-addition, .best-container .score-addition {\n    position: absolute;\n    right: 30px;\n    color: red;\n    font-size: 25px;\n    line-height: 25px;\n    font-weight: bold;\n    color: rgba(119, 110, 101, 0.9);\n    z-index: 100;\n    -webkit-animation: move-up 600ms ease-in;\n    -moz-animation: move-up 600ms ease-in;\n    animation: move-up 600ms ease-in;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n    animation-fill-mode: both; }\n\n.score-container:after {\n  content: \"Score\"; }\n\n.best-container:after {\n  content: \"Best\"; }\n\np {\n  margin-top: 0;\n  margin-bottom: 10px;\n  line-height: 1.65; }\n\na {\n  color: #776e65;\n  font-weight: bold;\n  text-decoration: underline;\n  cursor: pointer; }\n\nstrong.important {\n  text-transform: uppercase; }\n\nhr {\n  border: none;\n  border-bottom: 1px solid #d8d4d0;\n  margin-top: 20px;\n  margin-bottom: 30px; }\n\n.container {\n  width: 500px;\n  margin: 0 auto; }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n\n  100% {\n    opacity: 1; } }\n@-moz-keyframes fade-in {\n  0% {\n    opacity: 0; }\n\n  100% {\n    opacity: 1; } }\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n\n  100% {\n    opacity: 1; } }\n.game-container {\n  margin-top: 40px;\n  position: relative;\n  padding: 15px;\n  cursor: default;\n  -webkit-touch-callout: none;\n  -ms-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  background: #bbada0;\n  border-radius: 6px;\n  width: 500px;\n  height: 500px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n  .game-container .game-message {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(238, 228, 218, 0.5);\n    z-index: 100;\n    text-align: center;\n    -webkit-animation: fade-in 800ms ease 1200ms;\n    -moz-animation: fade-in 800ms ease 1200ms;\n    animation: fade-in 800ms ease 1200ms;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n    animation-fill-mode: both; }\n    .game-container .game-message p {\n      font-size: 60px;\n      font-weight: bold;\n      height: 60px;\n      line-height: 60px;\n      margin-top: 222px; }\n    .game-container .game-message .lower {\n      display: block;\n      margin-top: 59px; }\n    .game-container .game-message a {\n      display: inline-block;\n      background: #8f7a66;\n      border-radius: 3px;\n      padding: 0 20px;\n      text-decoration: none;\n      color: #f9f6f2;\n      height: 40px;\n      line-height: 42px;\n      margin-left: 9px; }\n      .game-container .game-message a.keep-playing-button {\n        display: none; }\n    .game-container .game-message.game-won {\n      background: rgba(237, 194, 46, 0.5);\n      color: #f9f6f2; }\n      .game-container .game-message.game-won a.keep-playing-button {\n        display: inline-block; }\n    .game-container .game-message.game-won, .game-container .game-message.game-over {\n      display: block; }\n\n.grid-container {\n  position: absolute;\n  z-index: 1; }\n\n.grid-row {\n  margin-bottom: 15px; }\n  .grid-row:last-child {\n    margin-bottom: 0; }\n  .grid-row:after {\n    content: \"\";\n    display: block;\n    clear: both; }\n\n.grid-cell {\n  width: 106.25px;\n  height: 106.25px;\n  margin-right: 15px;\n  float: left;\n  border-radius: 3px;\n  background: rgba(238, 228, 218, 0.35); }\n  .grid-cell:last-child {\n    margin-right: 0; }\n\n.tile-container {\n  position: absolute;\n  z-index: 2; }\n\n.tile, .tile .tile-inner {\n  width: 107px;\n  height: 107px;\n  line-height: 107px; }\n.tile.tile-position-1-1 {\n  -webkit-transform: translate(0px, 0px);\n  -moz-transform: translate(0px, 0px);\n  -ms-transform: translate(0px, 0px);\n  transform: translate(0px, 0px); }\n.tile.tile-position-1-2 {\n  -webkit-transform: translate(0px, 121px);\n  -moz-transform: translate(0px, 121px);\n  -ms-transform: translate(0px, 121px);\n  transform: translate(0px, 121px); }\n.tile.tile-position-1-3 {\n  -webkit-transform: translate(0px, 242px);\n  -moz-transform: translate(0px, 242px);\n  -ms-transform: translate(0px, 242px);\n  transform: translate(0px, 242px); }\n.tile.tile-position-1-4 {\n  -webkit-transform: translate(0px, 363px);\n  -moz-transform: translate(0px, 363px);\n  -ms-transform: translate(0px, 363px);\n  transform: translate(0px, 363px); }\n.tile.tile-position-2-1 {\n  -webkit-transform: translate(121px, 0px);\n  -moz-transform: translate(121px, 0px);\n  -ms-transform: translate(121px, 0px);\n  transform: translate(121px, 0px); }\n.tile.tile-position-2-2 {\n  -webkit-transform: translate(121px, 121px);\n  -moz-transform: translate(121px, 121px);\n  -ms-transform: translate(121px, 121px);\n  transform: translate(121px, 121px); }\n.tile.tile-position-2-3 {\n  -webkit-transform: translate(121px, 242px);\n  -moz-transform: translate(121px, 242px);\n  -ms-transform: translate(121px, 242px);\n  transform: translate(121px, 242px); }\n.tile.tile-position-2-4 {\n  -webkit-transform: translate(121px, 363px);\n  -moz-transform: translate(121px, 363px);\n  -ms-transform: translate(121px, 363px);\n  transform: translate(121px, 363px); }\n.tile.tile-position-3-1 {\n  -webkit-transform: translate(242px, 0px);\n  -moz-transform: translate(242px, 0px);\n  -ms-transform: translate(242px, 0px);\n  transform: translate(242px, 0px); }\n.tile.tile-position-3-2 {\n  -webkit-transform: translate(242px, 121px);\n  -moz-transform: translate(242px, 121px);\n  -ms-transform: translate(242px, 121px);\n  transform: translate(242px, 121px); }\n.tile.tile-position-3-3 {\n  -webkit-transform: translate(242px, 242px);\n  -moz-transform: translate(242px, 242px);\n  -ms-transform: translate(242px, 242px);\n  transform: translate(242px, 242px); }\n.tile.tile-position-3-4 {\n  -webkit-transform: translate(242px, 363px);\n  -moz-transform: translate(242px, 363px);\n  -ms-transform: translate(242px, 363px);\n  transform: translate(242px, 363px); }\n.tile.tile-position-4-1 {\n  -webkit-transform: translate(363px, 0px);\n  -moz-transform: translate(363px, 0px);\n  -ms-transform: translate(363px, 0px);\n  transform: translate(363px, 0px); }\n.tile.tile-position-4-2 {\n  -webkit-transform: translate(363px, 121px);\n  -moz-transform: translate(363px, 121px);\n  -ms-transform: translate(363px, 121px);\n  transform: translate(363px, 121px); }\n.tile.tile-position-4-3 {\n  -webkit-transform: translate(363px, 242px);\n  -moz-transform: translate(363px, 242px);\n  -ms-transform: translate(363px, 242px);\n  transform: translate(363px, 242px); }\n.tile.tile-position-4-4 {\n  -webkit-transform: translate(363px, 363px);\n  -moz-transform: translate(363px, 363px);\n  -ms-transform: translate(363px, 363px);\n  transform: translate(363px, 363px); }\n\n.tile {\n  position: absolute;\n  -webkit-transition: 100ms ease-in-out;\n  -moz-transition: 100ms ease-in-out;\n  transition: 100ms ease-in-out;\n  -webkit-transition-property: -webkit-transform;\n  -moz-transition-property: -moz-transform;\n  transition-property: transform; }\n  .tile .tile-inner {\n    border-radius: 3px;\n    background: #eee4da;\n    text-align: center;\n    font-weight: bold;\n    z-index: 10;\n    font-size: 55px; }\n  .tile.tile-2 .tile-inner {\n    background: #eee4da;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0); }\n  .tile.tile-4 .tile-inner {\n    background: #ede0c8;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0); }\n  .tile.tile-8 .tile-inner {\n    color: #f9f6f2;\n    background: #f2b179; }\n  .tile.tile-16 .tile-inner {\n    color: #f9f6f2;\n    background: #f59563; }\n  .tile.tile-32 .tile-inner {\n    color: #f9f6f2;\n    background: #f67c5f; }\n  .tile.tile-64 .tile-inner {\n    color: #f9f6f2;\n    background: #f65e3b; }\n  .tile.tile-128 .tile-inner {\n    color: #f9f6f2;\n    background: #edcf72;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286);\n    font-size: 45px; }\n    @media screen and (max-width: 520px) {\n      .tile.tile-128 .tile-inner {\n        font-size: 25px; } }\n  .tile.tile-256 .tile-inner {\n    color: #f9f6f2;\n    background: #edcc61;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.31746), inset 0 0 0 1px rgba(255, 255, 255, 0.19048);\n    font-size: 45px; }\n    @media screen and (max-width: 520px) {\n      .tile.tile-256 .tile-inner {\n        font-size: 25px; } }\n  .tile.tile-512 .tile-inner {\n    color: #f9f6f2;\n    background: #edc850;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.39683), inset 0 0 0 1px rgba(255, 255, 255, 0.2381);\n    font-size: 45px; }\n    @media screen and (max-width: 520px) {\n      .tile.tile-512 .tile-inner {\n        font-size: 25px; } }\n  .tile.tile-1024 .tile-inner {\n    color: #f9f6f2;\n    background: #edc53f;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.47619), inset 0 0 0 1px rgba(255, 255, 255, 0.28571);\n    font-size: 35px; }\n    @media screen and (max-width: 520px) {\n      .tile.tile-1024 .tile-inner {\n        font-size: 15px; } }\n  .tile.tile-2048 .tile-inner {\n    color: #f9f6f2;\n    background: #edc22e;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.55556), inset 0 0 0 1px rgba(255, 255, 255, 0.33333);\n    font-size: 35px; }\n    @media screen and (max-width: 520px) {\n      .tile.tile-2048 .tile-inner {\n        font-size: 15px; } }\n  .tile.tile-super .tile-inner {\n    color: #f9f6f2;\n    background: #3c3a32;\n    font-size: 30px; }\n    @media screen and (max-width: 520px) {\n      .tile.tile-super .tile-inner {\n        font-size: 10px; } }\n\n@-webkit-keyframes appear {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0); }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n@-moz-keyframes appear {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0); }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n@keyframes appear {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0); }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n.tile-new .tile-inner {\n  -webkit-animation: appear 200ms ease 100ms;\n  -moz-animation: appear 200ms ease 100ms;\n  animation: appear 200ms ease 100ms;\n  -webkit-animation-fill-mode: backwards;\n  -moz-animation-fill-mode: backwards;\n  animation-fill-mode: backwards; }\n\n@-webkit-keyframes pop {\n  0% {\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0); }\n\n  50% {\n    -webkit-transform: scale(1.2);\n    -moz-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2); }\n\n  100% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n@-moz-keyframes pop {\n  0% {\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0); }\n\n  50% {\n    -webkit-transform: scale(1.2);\n    -moz-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2); }\n\n  100% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n@keyframes pop {\n  0% {\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0); }\n\n  50% {\n    -webkit-transform: scale(1.2);\n    -moz-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2); }\n\n  100% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n.tile-merged .tile-inner {\n  z-index: 20;\n  -webkit-animation: pop 200ms ease 100ms;\n  -moz-animation: pop 200ms ease 100ms;\n  animation: pop 200ms ease 100ms;\n  -webkit-animation-fill-mode: backwards;\n  -moz-animation-fill-mode: backwards;\n  animation-fill-mode: backwards; }\n\n.above-game:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\n.game-intro {\n  float: left;\n  line-height: 42px;\n  margin-bottom: 0; }\n\n.restart-button {\n  display: inline-block;\n  background: #8f7a66;\n  border-radius: 3px;\n  padding: 0 20px;\n  text-decoration: none;\n  color: #f9f6f2;\n  height: 40px;\n  line-height: 42px;\n  display: block;\n  text-align: center;\n  float: right; }\n\n.game-explanation {\n  margin-top: 50px; }\n\n@media screen and (max-width: 520px) {\n  html, body {\n    font-size: 15px; }\n\n  body {\n    margin: 20px 0;\n    padding: 0 20px; }\n\n  h1.title {\n    font-size: 27px;\n    margin-top: 15px; }\n\n  .container {\n    width: 280px;\n    margin: 0 auto; }\n\n  .score-container, .best-container {\n    margin-top: 0;\n    padding: 15px 10px;\n    min-width: 40px; }\n\n  .heading {\n    margin-bottom: 10px; }\n\n  .game-intro {\n    width: 55%;\n    display: block;\n    box-sizing: border-box;\n    line-height: 1.65; }\n\n  .restart-button {\n    width: 42%;\n    padding: 0;\n    display: block;\n    box-sizing: border-box;\n    margin-top: 2px; }\n\n  .game-container {\n    margin-top: 17px;\n    position: relative;\n    padding: 10px;\n    cursor: default;\n    -webkit-touch-callout: none;\n    -ms-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -ms-touch-action: none;\n    touch-action: none;\n    background: #bbada0;\n    border-radius: 6px;\n    width: 280px;\n    height: 280px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box; }\n    .game-container .game-message {\n      display: none;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background: rgba(238, 228, 218, 0.5);\n      z-index: 100;\n      text-align: center;\n      -webkit-animation: fade-in 800ms ease 1200ms;\n      -moz-animation: fade-in 800ms ease 1200ms;\n      animation: fade-in 800ms ease 1200ms;\n      -webkit-animation-fill-mode: both;\n      -moz-animation-fill-mode: both;\n      animation-fill-mode: both; }\n      .game-container .game-message p {\n        font-size: 60px;\n        font-weight: bold;\n        height: 60px;\n        line-height: 60px;\n        margin-top: 222px; }\n      .game-container .game-message .lower {\n        display: block;\n        margin-top: 59px; }\n      .game-container .game-message a {\n        display: inline-block;\n        background: #8f7a66;\n        border-radius: 3px;\n        padding: 0 20px;\n        text-decoration: none;\n        color: #f9f6f2;\n        height: 40px;\n        line-height: 42px;\n        margin-left: 9px; }\n        .game-container .game-message a.keep-playing-button {\n          display: none; }\n      .game-container .game-message.game-won {\n        background: rgba(237, 194, 46, 0.5);\n        color: #f9f6f2; }\n        .game-container .game-message.game-won a.keep-playing-button {\n          display: inline-block; }\n      .game-container .game-message.game-won, .game-container .game-message.game-over {\n        display: block; }\n\n  .grid-container {\n    position: absolute;\n    z-index: 1; }\n\n  .grid-row {\n    margin-bottom: 10px; }\n    .grid-row:last-child {\n      margin-bottom: 0; }\n    .grid-row:after {\n      content: \"\";\n      display: block;\n      clear: both; }\n\n  .grid-cell {\n    width: 57.5px;\n    height: 57.5px;\n    margin-right: 10px;\n    float: left;\n    border-radius: 3px;\n    background: rgba(238, 228, 218, 0.35); }\n    .grid-cell:last-child {\n      margin-right: 0; }\n\n  .tile-container {\n    position: absolute;\n    z-index: 2; }\n\n  .tile, .tile .tile-inner {\n    width: 58px;\n    height: 58px;\n    line-height: 58px; }\n  .tile.tile-position-1-1 {\n    -webkit-transform: translate(0px, 0px);\n    -moz-transform: translate(0px, 0px);\n    -ms-transform: translate(0px, 0px);\n    transform: translate(0px, 0px); }\n  .tile.tile-position-1-2 {\n    -webkit-transform: translate(0px, 67px);\n    -moz-transform: translate(0px, 67px);\n    -ms-transform: translate(0px, 67px);\n    transform: translate(0px, 67px); }\n  .tile.tile-position-1-3 {\n    -webkit-transform: translate(0px, 135px);\n    -moz-transform: translate(0px, 135px);\n    -ms-transform: translate(0px, 135px);\n    transform: translate(0px, 135px); }\n  .tile.tile-position-1-4 {\n    -webkit-transform: translate(0px, 202px);\n    -moz-transform: translate(0px, 202px);\n    -ms-transform: translate(0px, 202px);\n    transform: translate(0px, 202px); }\n  .tile.tile-position-2-1 {\n    -webkit-transform: translate(67px, 0px);\n    -moz-transform: translate(67px, 0px);\n    -ms-transform: translate(67px, 0px);\n    transform: translate(67px, 0px); }\n  .tile.tile-position-2-2 {\n    -webkit-transform: translate(67px, 67px);\n    -moz-transform: translate(67px, 67px);\n    -ms-transform: translate(67px, 67px);\n    transform: translate(67px, 67px); }\n  .tile.tile-position-2-3 {\n    -webkit-transform: translate(67px, 135px);\n    -moz-transform: translate(67px, 135px);\n    -ms-transform: translate(67px, 135px);\n    transform: translate(67px, 135px); }\n  .tile.tile-position-2-4 {\n    -webkit-transform: translate(67px, 202px);\n    -moz-transform: translate(67px, 202px);\n    -ms-transform: translate(67px, 202px);\n    transform: translate(67px, 202px); }\n  .tile.tile-position-3-1 {\n    -webkit-transform: translate(135px, 0px);\n    -moz-transform: translate(135px, 0px);\n    -ms-transform: translate(135px, 0px);\n    transform: translate(135px, 0px); }\n  .tile.tile-position-3-2 {\n    -webkit-transform: translate(135px, 67px);\n    -moz-transform: translate(135px, 67px);\n    -ms-transform: translate(135px, 67px);\n    transform: translate(135px, 67px); }\n  .tile.tile-position-3-3 {\n    -webkit-transform: translate(135px, 135px);\n    -moz-transform: translate(135px, 135px);\n    -ms-transform: translate(135px, 135px);\n    transform: translate(135px, 135px); }\n  .tile.tile-position-3-4 {\n    -webkit-transform: translate(135px, 202px);\n    -moz-transform: translate(135px, 202px);\n    -ms-transform: translate(135px, 202px);\n    transform: translate(135px, 202px); }\n  .tile.tile-position-4-1 {\n    -webkit-transform: translate(202px, 0px);\n    -moz-transform: translate(202px, 0px);\n    -ms-transform: translate(202px, 0px);\n    transform: translate(202px, 0px); }\n  .tile.tile-position-4-2 {\n    -webkit-transform: translate(202px, 67px);\n    -moz-transform: translate(202px, 67px);\n    -ms-transform: translate(202px, 67px);\n    transform: translate(202px, 67px); }\n  .tile.tile-position-4-3 {\n    -webkit-transform: translate(202px, 135px);\n    -moz-transform: translate(202px, 135px);\n    -ms-transform: translate(202px, 135px);\n    transform: translate(202px, 135px); }\n  .tile.tile-position-4-4 {\n    -webkit-transform: translate(202px, 202px);\n    -moz-transform: translate(202px, 202px);\n    -ms-transform: translate(202px, 202px);\n    transform: translate(202px, 202px); }\n\n  .tile .tile-inner {\n    font-size: 35px; }\n\n  .game-message p {\n    font-size: 30px !important;\n    height: 30px !important;\n    line-height: 30px !important;\n    margin-top: 90px !important; }\n  .game-message .lower {\n    margin-top: 30px !important; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/2048-master/style/main.scss":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader!./src/2048-master/style/main.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nUnknown word (301:27)\n\n  299 |     @for $x from 1 through $grid-row-cells {\n  300 |       @for $y from 1 through $grid-row-cells {\n> 301 |         &.tile-position-#{$x}-#{$y} {\n      |                           ^\n  302 |           $xPos: floor(($tile-size + $grid-spacing) * ($x - 1));\n  303 |           $yPos: floor(($tile-size + $grid-spacing) * ($y - 1));\n  304 |           @include transform(translate($xPos, $yPos));\n");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/2048-master/2048.js":
/*!*********************************!*\
  !*** ./src/2048-master/2048.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/2048-master/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_bind_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/bind_polyfill */ "./src/2048-master/js/bind_polyfill.js");
/* harmony import */ var _js_classlist_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/classlist_polyfill */ "./src/2048-master/js/classlist_polyfill.js");
/* harmony import */ var _js_animframe_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/animframe_polyfill */ "./src/2048-master/js/animframe_polyfill.js");
/* harmony import */ var _js_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/grid */ "./src/2048-master/js/grid.js");
/* harmony import */ var _js_local_storage_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/local_storage_manager */ "./src/2048-master/js/local_storage_manager.js");
/* harmony import */ var _js_application__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/application */ "./src/2048-master/js/application.js");



 //import './js/keyboard_input_manager';
//import './js/html_actuator';

 //import './js/tile';

 //import './js/game_manager';



/***/ }),

/***/ "./src/2048-master/js/animframe_polyfill.js":
/*!**************************************************!*\
  !*** ./src/2048-master/js/animframe_polyfill.js ***!
  \**************************************************/
/*! exports provided: Calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calc", function() { return Calc; });
var Calc = function () {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
}();

/***/ }),

/***/ "./src/2048-master/js/application.js":
/*!*******************************************!*\
  !*** ./src/2048-master/js/application.js ***!
  \*******************************************/
/*! exports provided: Show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Show", function() { return Show; });
/* harmony import */ var _game_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_manager */ "./src/2048-master/js/game_manager.js");
/* harmony import */ var _keyboard_input_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard_input_manager */ "./src/2048-master/js/keyboard_input_manager.js");
/* harmony import */ var _html_actuator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html_actuator */ "./src/2048-master/js/html_actuator.js");
/* harmony import */ var _local_storage_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local_storage_manager */ "./src/2048-master/js/local_storage_manager.js");
// Wait till the browser is ready to render the game (avoids glitches)




var Show = window.requestAnimationFrame(function () {
  new _game_manager__WEBPACK_IMPORTED_MODULE_0__["default"](4, _keyboard_input_manager__WEBPACK_IMPORTED_MODULE_1__["default"], _html_actuator__WEBPACK_IMPORTED_MODULE_2__["default"], _local_storage_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);
});

/***/ }),

/***/ "./src/2048-master/js/bind_polyfill.js":
/*!*********************************************!*\
  !*** ./src/2048-master/js/bind_polyfill.js ***!
  \*********************************************/
/*! exports provided: Poly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poly", function() { return Poly; });
var Poly = Function.prototype.bind = Function.prototype.bind || function (target) {
  var self = this;
  return function (args) {
    if (!(args instanceof Array)) {
      args = [args];
    }

    self.apply(target, args);
  };
};

/***/ }),

/***/ "./src/2048-master/js/classlist_polyfill.js":
/*!**************************************************!*\
  !*** ./src/2048-master/js/classlist_polyfill.js ***!
  \**************************************************/
/*! exports provided: Classlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Classlist", function() { return Classlist; });
var Classlist = function () {
  if (typeof window.Element === "undefined" || "classList" in document.documentElement) {
    return;
  }

  var prototype = Array.prototype,
      push = prototype.push,
      splice = prototype.splice,
      join = prototype.join;

  function DOMTokenList(el) {
    this.el = el; // The className needs to be trimmed and split on whitespace
    // to retrieve a list of classes.

    var classes = el.className.replace(/^\s+|\s+$/g, '').split(/\s+/);

    for (var i = 0; i < classes.length; i++) {
      push.call(this, classes[i]);
    }
  }

  DOMTokenList.prototype = {
    add: function add(token) {
      if (this.contains(token)) return;
      push.call(this, token);
      this.el.className = this.toString();
    },
    contains: function contains(token) {
      return this.el.className.indexOf(token) != -1;
    },
    item: function item(index) {
      return this[index] || null;
    },
    remove: function remove(token) {
      if (!this.contains(token)) return;

      for (var i = 0; i < this.length; i++) {
        if (this[i] == token) break;
      }

      splice.call(this, i, 1);
      this.el.className = this.toString();
    },
    toString: function toString() {
      return join.call(this, ' ');
    },
    toggle: function toggle(token) {
      if (!this.contains(token)) {
        this.add(token);
      } else {
        this.remove(token);
      }

      return this.contains(token);
    }
  };
  window.DOMTokenList = DOMTokenList;

  function defineElementGetter(obj, prop, getter) {
    if (Object.defineProperty) {
      Object.defineProperty(obj, prop, {
        get: getter
      });
    } else {
      obj.__defineGetter__(prop, getter);
    }
  }

  defineElementGetter(HTMLElement.prototype, 'classList', function () {
    return new DOMTokenList(this);
  });
}();

/***/ }),

/***/ "./src/2048-master/js/game_manager.js":
/*!********************************************!*\
  !*** ./src/2048-master/js/game_manager.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/2048-master/js/grid.js");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile */ "./src/2048-master/js/tile.js");



function GameManager(size, InputManager, Actuator, StorageManager) {
  this.size = size; // Size of the grid

  this.inputManager = new InputManager();
  this.storageManager = new StorageManager();
  this.actuator = new Actuator();
  this.startTiles = 2;
  this.inputManager.on("move", this.move.bind(this));
  this.inputManager.on("restart", this.restart.bind(this));
  this.inputManager.on("keepPlaying", this.keepPlaying.bind(this));
  this.setup();
} // Restart the game


GameManager.prototype.restart = function () {
  this.storageManager.clearGameState();
  this.actuator.continueGame(); // Clear the game won/lost message

  this.setup();
}; // Keep playing after winning (allows going over 2048)


GameManager.prototype.keepPlaying = function () {
  this.keepPlaying = true;
  this.actuator.continueGame(); // Clear the game won/lost message
}; // Return true if the game is lost, or has won and the user hasn't kept playing


GameManager.prototype.isGameTerminated = function () {
  return this.over || this.won && !this.keepPlaying;
}; // Set up the game


GameManager.prototype.setup = function () {
  var previousState = this.storageManager.getGameState(); // Reload the game from a previous game if present

  if (previousState) {
    this.grid = new _grid__WEBPACK_IMPORTED_MODULE_0__["default"](previousState.grid.size, previousState.grid.cells); // Reload grid

    this.score = previousState.score;
    this.over = previousState.over;
    this.won = previousState.won;
    this.keepPlaying = previousState.keepPlaying;
  } else {
    this.grid = new _grid__WEBPACK_IMPORTED_MODULE_0__["default"](this.size);
    this.score = 0;
    this.over = false;
    this.won = false;
    this.keepPlaying = false; // Add the initial tiles

    this.addStartTiles();
  } // Update the actuator


  this.actuate();
}; // Set up the initial tiles to start the game with


GameManager.prototype.addStartTiles = function () {
  for (var i = 0; i < this.startTiles; i++) {
    this.addRandomTile();
  }
}; // Adds a tile in a random position


GameManager.prototype.addRandomTile = function () {
  if (this.grid.cellsAvailable()) {
    var value = Math.random() < 0.9 ? 2 : 4;
    var tile = new _tile__WEBPACK_IMPORTED_MODULE_1__["default"](this.grid.randomAvailableCell(), value);
    this.grid.insertTile(tile);
  }
}; // Sends the updated grid to the actuator


GameManager.prototype.actuate = function () {
  if (this.storageManager.getBestScore() < this.score) {
    this.storageManager.setBestScore(this.score);
  } // Clear the state when the game is over (game over only, not win)


  if (this.over) {
    this.storageManager.clearGameState();
  } else {
    this.storageManager.setGameState(this.serialize());
  }

  this.actuator.actuate(this.grid, {
    score: this.score,
    over: this.over,
    won: this.won,
    bestScore: this.storageManager.getBestScore(),
    terminated: this.isGameTerminated()
  });
}; // Represent the current game as an object


GameManager.prototype.serialize = function () {
  return {
    grid: this.grid.serialize(),
    score: this.score,
    over: this.over,
    won: this.won,
    keepPlaying: this.keepPlaying
  };
}; // Save all tile positions and remove merger info


GameManager.prototype.prepareTiles = function () {
  this.grid.eachCell(function (x, y, tile) {
    if (tile) {
      tile.mergedFrom = null;
      tile.savePosition();
    }
  });
}; // Move a tile and its representation


GameManager.prototype.moveTile = function (tile, cell) {
  this.grid.cells[tile.x][tile.y] = null;
  this.grid.cells[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
}; // Move tiles on the grid in the specified direction


GameManager.prototype.move = function (direction) {
  // 0: up, 1: right, 2: down, 3: left
  var self = this;
  if (this.isGameTerminated()) return; // Don't do anything if the game's over

  var cell, tile;
  var vector = this.getVector(direction);
  var traversals = this.buildTraversals(vector);
  var moved = false; // Save the current tile positions and remove merger information

  this.prepareTiles(); // Traverse the grid in the right direction and move tiles

  traversals.x.forEach(function (x) {
    traversals.y.forEach(function (y) {
      cell = {
        x: x,
        y: y
      };
      tile = self.grid.cellContent(cell);

      if (tile) {
        var positions = self.findFarthestPosition(cell, vector);
        var next = self.grid.cellContent(positions.next); // Only one merger per row traversal?

        if (next && next.value === tile.value && !next.mergedFrom) {
          var merged = new _tile__WEBPACK_IMPORTED_MODULE_1__["default"](positions.next, tile.value * 2);
          merged.mergedFrom = [tile, next];
          self.grid.insertTile(merged);
          self.grid.removeTile(tile); // Converge the two tiles' positions

          tile.updatePosition(positions.next); // Update the score

          self.score += merged.value; // The mighty 2048 tile

          if (merged.value === 2048) self.won = true;
        } else {
          self.moveTile(tile, positions.farthest);
        }

        if (!self.positionsEqual(cell, tile)) {
          moved = true; // The tile moved from its original cell!
        }
      }
    });
  });

  if (moved) {
    this.addRandomTile();

    if (!this.movesAvailable()) {
      this.over = true; // Game over!
    }

    this.actuate();
  }
}; // Get the vector representing the chosen direction


GameManager.prototype.getVector = function (direction) {
  // Vectors representing tile movement
  var map = {
    0: {
      x: 0,
      y: -1
    },
    // Up
    1: {
      x: 1,
      y: 0
    },
    // Right
    2: {
      x: 0,
      y: 1
    },
    // Down
    3: {
      x: -1,
      y: 0 // Left

    }
  };
  return map[direction];
}; // Build a list of positions to traverse in the right order


GameManager.prototype.buildTraversals = function (vector) {
  var traversals = {
    x: [],
    y: []
  };

  for (var pos = 0; pos < this.size; pos++) {
    traversals.x.push(pos);
    traversals.y.push(pos);
  } // Always traverse from the farthest cell in the chosen direction


  if (vector.x === 1) traversals.x = traversals.x.reverse();
  if (vector.y === 1) traversals.y = traversals.y.reverse();
  return traversals;
};

GameManager.prototype.findFarthestPosition = function (cell, vector) {
  var previous; // Progress towards the vector direction until an obstacle is found

  do {
    previous = cell;
    cell = {
      x: previous.x + vector.x,
      y: previous.y + vector.y
    };
  } while (this.grid.withinBounds(cell) && this.grid.cellAvailable(cell));

  return {
    farthest: previous,
    next: cell // Used to check if a merge is required

  };
};

GameManager.prototype.movesAvailable = function () {
  return this.grid.cellsAvailable() || this.tileMatchesAvailable();
}; // Check for available matches between tiles (more expensive check)


GameManager.prototype.tileMatchesAvailable = function () {
  var self = this;
  var tile;

  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      tile = this.grid.cellContent({
        x: x,
        y: y
      });

      if (tile) {
        for (var direction = 0; direction < 4; direction++) {
          var vector = self.getVector(direction);
          var cell = {
            x: x + vector.x,
            y: y + vector.y
          };
          var other = self.grid.cellContent(cell);

          if (other && other.value === tile.value) {
            return true; // These two tiles can be merged
          }
        }
      }
    }
  }

  return false;
};

GameManager.prototype.positionsEqual = function (first, second) {
  return first.x === second.x && first.y === second.y;
};

/* harmony default export */ __webpack_exports__["default"] = (GameManager);

/***/ }),

/***/ "./src/2048-master/js/grid.js":
/*!************************************!*\
  !*** ./src/2048-master/js/grid.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./src/2048-master/js/tile.js");


function Grid(size, previousState) {
  this.size = size;
  this.cells = previousState ? this.fromState(previousState) : this.empty();
} // Build a grid of the specified size


Grid.prototype.empty = function () {
  var cells = [];

  for (var x = 0; x < this.size; x++) {
    var row = cells[x] = [];

    for (var y = 0; y < this.size; y++) {
      row.push(null);
    }
  }

  return cells;
};

Grid.prototype.fromState = function (state) {
  var cells = [];

  for (var x = 0; x < this.size; x++) {
    var row = cells[x] = [];

    for (var y = 0; y < this.size; y++) {
      var tile = state[x][y];
      row.push(tile ? new _tile__WEBPACK_IMPORTED_MODULE_0__["default"](tile.position, tile.value) : null);
    }
  }

  return cells;
}; // Find the first available random position


Grid.prototype.randomAvailableCell = function () {
  var cells = this.availableCells();

  if (cells.length) {
    return cells[Math.floor(Math.random() * cells.length)];
  }
};

Grid.prototype.availableCells = function () {
  var cells = [];
  this.eachCell(function (x, y, tile) {
    if (!tile) {
      cells.push({
        x: x,
        y: y
      });
    }
  });
  return cells;
}; // Call callback for every cell


Grid.prototype.eachCell = function (callback) {
  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      callback(x, y, this.cells[x][y]);
    }
  }
}; // Check if there are any cells available


Grid.prototype.cellsAvailable = function () {
  return !!this.availableCells().length;
}; // Check if the specified cell is taken


Grid.prototype.cellAvailable = function (cell) {
  return !this.cellOccupied(cell);
};

Grid.prototype.cellOccupied = function (cell) {
  return !!this.cellContent(cell);
};

Grid.prototype.cellContent = function (cell) {
  if (this.withinBounds(cell)) {
    return this.cells[cell.x][cell.y];
  } else {
    return null;
  }
}; // Inserts a tile at its position


Grid.prototype.insertTile = function (tile) {
  this.cells[tile.x][tile.y] = tile;
};

Grid.prototype.removeTile = function (tile) {
  this.cells[tile.x][tile.y] = null;
};

Grid.prototype.withinBounds = function (position) {
  return position.x >= 0 && position.x < this.size && position.y >= 0 && position.y < this.size;
};

Grid.prototype.serialize = function () {
  var cellState = [];

  for (var x = 0; x < this.size; x++) {
    var row = cellState[x] = [];

    for (var y = 0; y < this.size; y++) {
      row.push(this.cells[x][y] ? this.cells[x][y].serialize() : null);
    }
  }

  return {
    size: this.size,
    cells: cellState
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/2048-master/js/html_actuator.js":
/*!*********************************************!*\
  !*** ./src/2048-master/js/html_actuator.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function HTMLActuator() {
  this.tileContainer = document.querySelector(".tile-container");
  this.scoreContainer = document.querySelector(".score-container");
  this.bestContainer = document.querySelector(".best-container");
  this.messageContainer = document.querySelector(".game-message");
  this.score = 0;
}

HTMLActuator.prototype.actuate = function (grid, metadata) {
  var self = this;
  window.requestAnimationFrame(function () {
    self.clearContainer(self.tileContainer);
    grid.cells.forEach(function (column) {
      column.forEach(function (cell) {
        if (cell) {
          self.addTile(cell);
        }
      });
    });
    self.updateScore(metadata.score);
    self.updateBestScore(metadata.bestScore);

    if (metadata.terminated) {
      if (metadata.over) {
        self.message(false); // You lose
      } else if (metadata.won) {
        self.message(true); // You win!
      }
    }
  });
}; // Continues the game (both restart and keep playing)


HTMLActuator.prototype.continueGame = function () {
  this.clearMessage();
};

HTMLActuator.prototype.clearContainer = function (container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

HTMLActuator.prototype.addTile = function (tile) {
  var self = this;
  var wrapper = document.createElement("div");
  var inner = document.createElement("div");
  var position = tile.previousPosition || {
    x: tile.x,
    y: tile.y
  };
  var positionClass = this.positionClass(position); // We can't use classlist because it somehow glitches when replacing classes

  var classes = ["tile", "tile-" + tile.value, positionClass];
  if (tile.value > 2048) classes.push("tile-super");
  this.applyClasses(wrapper, classes);
  inner.classList.add("tile-inner");
  inner.textContent = tile.value;

  if (tile.previousPosition) {
    // Make sure that the tile gets rendered in the previous position first
    window.requestAnimationFrame(function () {
      classes[2] = self.positionClass({
        x: tile.x,
        y: tile.y
      });
      self.applyClasses(wrapper, classes); // Update the position
    });
  } else if (tile.mergedFrom) {
    classes.push("tile-merged");
    this.applyClasses(wrapper, classes); // Render the tiles that merged

    tile.mergedFrom.forEach(function (merged) {
      self.addTile(merged);
    });
  } else {
    classes.push("tile-new");
    this.applyClasses(wrapper, classes);
  } // Add the inner part of the tile to the wrapper


  wrapper.appendChild(inner); // Put the tile on the board

  this.tileContainer.appendChild(wrapper);
};

HTMLActuator.prototype.applyClasses = function (element, classes) {
  element.setAttribute("class", classes.join(" "));
};

HTMLActuator.prototype.normalizePosition = function (position) {
  return {
    x: position.x + 1,
    y: position.y + 1
  };
};

HTMLActuator.prototype.positionClass = function (position) {
  position = this.normalizePosition(position);
  return "tile-position-" + position.x + "-" + position.y;
};

HTMLActuator.prototype.updateScore = function (score) {
  this.clearContainer(this.scoreContainer);
  var difference = score - this.score;
  this.score = score;
  this.scoreContainer.textContent = this.score;

  if (difference > 0) {
    var addition = document.createElement("div");
    addition.classList.add("score-addition");
    addition.textContent = "+" + difference;
    this.scoreContainer.appendChild(addition);
  }
};

HTMLActuator.prototype.updateBestScore = function (bestScore) {
  this.bestContainer.textContent = bestScore;
};

HTMLActuator.prototype.message = function (won) {
  var type = won ? "game-won" : "game-over";
  var message = won ? "You win!" : "Game over!";
  this.messageContainer.classList.add(type);
  this.messageContainer.getElementsByTagName("p")[0].textContent = message;
};

HTMLActuator.prototype.clearMessage = function () {
  // IE only takes one value to remove at a time.
  this.messageContainer.classList.remove("game-won");
  this.messageContainer.classList.remove("game-over");
};

/* harmony default export */ __webpack_exports__["default"] = (HTMLActuator);

/***/ }),

/***/ "./src/2048-master/js/keyboard_input_manager.js":
/*!******************************************************!*\
  !*** ./src/2048-master/js/keyboard_input_manager.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function KeyboardInputManager() {
  this.events = {};

  if (window.navigator.msPointerEnabled) {
    //Internet Explorer 10 style
    this.eventTouchstart = "MSPointerDown";
    this.eventTouchmove = "MSPointerMove";
    this.eventTouchend = "MSPointerUp";
  } else {
    this.eventTouchstart = "touchstart";
    this.eventTouchmove = "touchmove";
    this.eventTouchend = "touchend";
  }

  this.listen();
}

KeyboardInputManager.prototype.on = function (event, callback) {
  if (!this.events[event]) {
    this.events[event] = [];
  }

  this.events[event].push(callback);
};

KeyboardInputManager.prototype.emit = function (event, data) {
  var callbacks = this.events[event];

  if (callbacks) {
    callbacks.forEach(function (callback) {
      callback(data);
    });
  }
};

KeyboardInputManager.prototype.listen = function () {
  var self = this;
  var map = {
    38: 0,
    // Up
    39: 1,
    // Right
    40: 2,
    // Down
    37: 3,
    // Left
    75: 0,
    // Vim up
    76: 1,
    // Vim right
    74: 2,
    // Vim down
    72: 3,
    // Vim left
    87: 0,
    // W
    68: 1,
    // D
    83: 2,
    // S
    65: 3 // A

  }; // Respond to direction keys

  document.addEventListener("keydown", function (event) {
    var modifiers = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
    var mapped = map[event.which];

    if (!modifiers) {
      if (mapped !== undefined) {
        event.preventDefault();
        self.emit("move", mapped);
      }
    } // R key restarts the game


    if (!modifiers && event.which === 82) {
      self.restart.call(self, event);
    }
  }); // Respond to button presses

  this.bindButtonPress(".retry-button", this.restart);
  this.bindButtonPress(".restart-button", this.restart);
  this.bindButtonPress(".keep-playing-button", this.keepPlaying); // Respond to swipe events

  var touchStartClientX, touchStartClientY;
  var gameContainer = document.getElementsByClassName("game-container")[0];
  gameContainer.addEventListener(this.eventTouchstart, function (event) {
    if (!window.navigator.msPointerEnabled && event.touches.length > 1 || event.targetTouches.length > 1) {
      return; // Ignore if touching with more than 1 finger
    }

    if (window.navigator.msPointerEnabled) {
      touchStartClientX = event.pageX;
      touchStartClientY = event.pageY;
    } else {
      touchStartClientX = event.touches[0].clientX;
      touchStartClientY = event.touches[0].clientY;
    }

    event.preventDefault();
  });
  gameContainer.addEventListener(this.eventTouchmove, function (event) {
    event.preventDefault();
  });
  gameContainer.addEventListener(this.eventTouchend, function (event) {
    if (!window.navigator.msPointerEnabled && event.touches.length > 0 || event.targetTouches.length > 0) {
      return; // Ignore if still touching with one or more fingers
    }

    var touchEndClientX, touchEndClientY;

    if (window.navigator.msPointerEnabled) {
      touchEndClientX = event.pageX;
      touchEndClientY = event.pageY;
    } else {
      touchEndClientX = event.changedTouches[0].clientX;
      touchEndClientY = event.changedTouches[0].clientY;
    }

    var dx = touchEndClientX - touchStartClientX;
    var absDx = Math.abs(dx);
    var dy = touchEndClientY - touchStartClientY;
    var absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) > 10) {
      // (right : left) : (down : up)
      self.emit("move", absDx > absDy ? dx > 0 ? 1 : 3 : dy > 0 ? 2 : 0);
    }
  });
};

KeyboardInputManager.prototype.restart = function (event) {
  event.preventDefault();
  this.emit("restart");
};

KeyboardInputManager.prototype.keepPlaying = function (event) {
  event.preventDefault();
  this.emit("keepPlaying");
};

KeyboardInputManager.prototype.bindButtonPress = function (selector, fn) {
  var button = document.querySelector(selector);
  button.addEventListener("click", fn.bind(this));
  button.addEventListener(this.eventTouchend, fn.bind(this));
};

/* harmony default export */ __webpack_exports__["default"] = (KeyboardInputManager);

/***/ }),

/***/ "./src/2048-master/js/local_storage_manager.js":
/*!*****************************************************!*\
  !*** ./src/2048-master/js/local_storage_manager.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
window.fakeStorage = {
  _data: {},
  setItem: function setItem(id, val) {
    return this._data[id] = String(val);
  },
  getItem: function getItem(id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },
  removeItem: function removeItem(id) {
    return delete this._data[id];
  },
  clear: function clear() {
    return this._data = {};
  }
};

function LocalStorageManager() {
  this.bestScoreKey = "bestScore";
  this.gameStateKey = "gameState";
  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";

  try {
    var storage = window.localStorage;
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}; // Best score getters/setters


LocalStorageManager.prototype.getBestScore = function () {
  return this.storage.getItem(this.bestScoreKey) || 0;
};

LocalStorageManager.prototype.setBestScore = function (score) {
  this.storage.setItem(this.bestScoreKey, score);
}; // Game state getters/setters and clearing


LocalStorageManager.prototype.getGameState = function () {
  var stateJSON = this.storage.getItem(this.gameStateKey);
  return stateJSON ? JSON.parse(stateJSON) : null;
};

LocalStorageManager.prototype.setGameState = function (gameState) {
  this.storage.setItem(this.gameStateKey, JSON.stringify(gameState));
};

LocalStorageManager.prototype.clearGameState = function () {
  this.storage.removeItem(this.gameStateKey);
};

/* harmony default export */ __webpack_exports__["default"] = (LocalStorageManager);

/***/ }),

/***/ "./src/2048-master/js/tile.js":
/*!************************************!*\
  !*** ./src/2048-master/js/tile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Tile(position, value) {
  this.x = position.x;
  this.y = position.y;
  this.value = value || 2;
  this.previousPosition = null;
  this.mergedFrom = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = {
    x: this.x,
    y: this.y
  };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Tile);

/***/ }),

/***/ "./src/2048-master/main.css":
/*!**********************************!*\
  !*** ./src/2048-master/main.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./main.css */ "./node_modules/css-loader/index.js!./src/2048-master/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/2048-master/style/fonts/ClearSans-Bold-webfont.eot":
/*!****************************************************************!*\
  !*** ./src/2048-master/style/fonts/ClearSans-Bold-webfont.eot ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ClearSans-Bold-webfont.eot";

/***/ }),

/***/ "./src/2048-master/style/fonts/ClearSans-Bold-webfont.svg":
/*!****************************************************************!*\
  !*** ./src/2048-master/style/fonts/ClearSans-Bold-webfont.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "168f8f6796d31c9d1022cd7c0c3aab1c.svg";

/***/ }),

/***/ "./src/2048-master/style/fonts/ClearSans-Bold-webfont.woff":
/*!*****************************************************************!*\
  !*** ./src/2048-master/style/fonts/ClearSans-Bold-webfont.woff ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ClearSans-Bold-webfont.woff";

/***/ }),

/***/ "./src/2048-master/style/fonts/ClearSans-Light-webfont.eot":
/*!*****************************************************************!*\
  !*** ./src/2048-master/style/fonts/ClearSans-Light-webfont.eot ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ClearSans-Light-webfont.eot";

/***/ }),

/***/ "./src/2048-master/style/fonts/ClearSans-Light-webfont.svg":
/*!*****************************************************************!*\
  !*** ./src/2048-master/style/fonts/ClearSans-Light-webfont.svg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "69a222fe9feae67a27ebdfd21346004b.svg";

/***/ }),

/***/ "./src/2048-master/style/fonts/ClearSans-Light-webfont.woff":
/*!******************************************************************!*\
  !*** ./src/2048-master/style/fonts/ClearSans-Light-webfont.woff ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ClearSans-Light-webfont.woff";

/***/ }),

/***/ "./src/2048-master/style/fonts/ClearSans-Regular-webfont.eot":
/*!*******************************************************************!*\
  !*** ./src/2048-master/style/fonts/ClearSans-Regular-webfont.eot ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ClearSans-Regular-webfont.eot";

/***/ }),

/***/ "./src/2048-master/style/fonts/ClearSans-Regular-webfont.svg":
/*!*******************************************************************!*\
  !*** ./src/2048-master/style/fonts/ClearSans-Regular-webfont.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d192436d3055376195ed93898f7c6fbf.svg";

/***/ }),

/***/ "./src/2048-master/style/fonts/ClearSans-Regular-webfont.woff":
/*!********************************************************************!*\
  !*** ./src/2048-master/style/fonts/ClearSans-Regular-webfont.woff ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ClearSans-Regular-webfont.woff";

/***/ })

/******/ });
//# sourceMappingURL=cards.js.map