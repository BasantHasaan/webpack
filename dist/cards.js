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

/***/ "./src/2048-master/2048.js":
/*!*********************************!*\
  !*** ./src/2048-master/2048.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_bind_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/bind_polyfill */ \"./src/2048-master/js/bind_polyfill.js\");\n/* harmony import */ var _js_classlist_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/classlist_polyfill */ \"./src/2048-master/js/classlist_polyfill.js\");\n/* harmony import */ var _js_animframe_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/animframe_polyfill */ \"./src/2048-master/js/animframe_polyfill.js\");\n/* harmony import */ var _js_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/grid */ \"./src/2048-master/js/grid.js\");\n/* harmony import */ var _js_local_storage_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/local_storage_manager */ \"./src/2048-master/js/local_storage_manager.js\");\n/* harmony import */ var _js_application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/application */ \"./src/2048-master/js/application.js\");\n//import '../styles/main.css';\n\n\n //import './js/keyboard_input_manager';\n//import './js/html_actuator';\n\n //import './js/tile';\n\n //import './js/game_manager';\n\n\n\n//# sourceURL=webpack:///./src/2048-master/2048.js?");

/***/ }),

/***/ "./src/2048-master/js/animframe_polyfill.js":
/*!**************************************************!*\
  !*** ./src/2048-master/js/animframe_polyfill.js ***!
  \**************************************************/
/*! exports provided: Calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Calc\", function() { return Calc; });\nvar Calc = function () {\n  var lastTime = 0;\n  var vendors = ['webkit', 'moz'];\n\n  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {\n    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];\n    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];\n  }\n\n  if (!window.requestAnimationFrame) {\n    window.requestAnimationFrame = function (callback) {\n      var currTime = new Date().getTime();\n      var timeToCall = Math.max(0, 16 - (currTime - lastTime));\n      var id = window.setTimeout(function () {\n        callback(currTime + timeToCall);\n      }, timeToCall);\n      lastTime = currTime + timeToCall;\n      return id;\n    };\n  }\n\n  if (!window.cancelAnimationFrame) {\n    window.cancelAnimationFrame = function (id) {\n      clearTimeout(id);\n    };\n  }\n}();\n\n//# sourceURL=webpack:///./src/2048-master/js/animframe_polyfill.js?");

/***/ }),

/***/ "./src/2048-master/js/application.js":
/*!*******************************************!*\
  !*** ./src/2048-master/js/application.js ***!
  \*******************************************/
/*! exports provided: Show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Show\", function() { return Show; });\n/* harmony import */ var _game_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_manager */ \"./src/2048-master/js/game_manager.js\");\n/* harmony import */ var _keyboard_input_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard_input_manager */ \"./src/2048-master/js/keyboard_input_manager.js\");\n/* harmony import */ var _html_actuator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html_actuator */ \"./src/2048-master/js/html_actuator.js\");\n/* harmony import */ var _local_storage_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local_storage_manager */ \"./src/2048-master/js/local_storage_manager.js\");\n// Wait till the browser is ready to render the game (avoids glitches)\n\n\n\n\nvar Show = window.requestAnimationFrame(function () {\n  new _game_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, _keyboard_input_manager__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _html_actuator__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _local_storage_manager__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./src/2048-master/js/application.js?");

/***/ }),

/***/ "./src/2048-master/js/bind_polyfill.js":
/*!*********************************************!*\
  !*** ./src/2048-master/js/bind_polyfill.js ***!
  \*********************************************/
/*! exports provided: Poly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Poly\", function() { return Poly; });\nvar Poly = Function.prototype.bind = Function.prototype.bind || function (target) {\n  var self = this;\n  return function (args) {\n    if (!(args instanceof Array)) {\n      args = [args];\n    }\n\n    self.apply(target, args);\n  };\n};\n\n//# sourceURL=webpack:///./src/2048-master/js/bind_polyfill.js?");

/***/ }),

/***/ "./src/2048-master/js/classlist_polyfill.js":
/*!**************************************************!*\
  !*** ./src/2048-master/js/classlist_polyfill.js ***!
  \**************************************************/
/*! exports provided: Classlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Classlist\", function() { return Classlist; });\nvar Classlist = function () {\n  if (typeof window.Element === \"undefined\" || \"classList\" in document.documentElement) {\n    return;\n  }\n\n  var prototype = Array.prototype,\n      push = prototype.push,\n      splice = prototype.splice,\n      join = prototype.join;\n\n  function DOMTokenList(el) {\n    this.el = el; // The className needs to be trimmed and split on whitespace\n    // to retrieve a list of classes.\n\n    var classes = el.className.replace(/^\\s+|\\s+$/g, '').split(/\\s+/);\n\n    for (var i = 0; i < classes.length; i++) {\n      push.call(this, classes[i]);\n    }\n  }\n\n  DOMTokenList.prototype = {\n    add: function add(token) {\n      if (this.contains(token)) return;\n      push.call(this, token);\n      this.el.className = this.toString();\n    },\n    contains: function contains(token) {\n      return this.el.className.indexOf(token) != -1;\n    },\n    item: function item(index) {\n      return this[index] || null;\n    },\n    remove: function remove(token) {\n      if (!this.contains(token)) return;\n\n      for (var i = 0; i < this.length; i++) {\n        if (this[i] == token) break;\n      }\n\n      splice.call(this, i, 1);\n      this.el.className = this.toString();\n    },\n    toString: function toString() {\n      return join.call(this, ' ');\n    },\n    toggle: function toggle(token) {\n      if (!this.contains(token)) {\n        this.add(token);\n      } else {\n        this.remove(token);\n      }\n\n      return this.contains(token);\n    }\n  };\n  window.DOMTokenList = DOMTokenList;\n\n  function defineElementGetter(obj, prop, getter) {\n    if (Object.defineProperty) {\n      Object.defineProperty(obj, prop, {\n        get: getter\n      });\n    } else {\n      obj.__defineGetter__(prop, getter);\n    }\n  }\n\n  defineElementGetter(HTMLElement.prototype, 'classList', function () {\n    return new DOMTokenList(this);\n  });\n}();\n\n//# sourceURL=webpack:///./src/2048-master/js/classlist_polyfill.js?");

/***/ }),

/***/ "./src/2048-master/js/game_manager.js":
/*!********************************************!*\
  !*** ./src/2048-master/js/game_manager.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ \"./src/2048-master/js/grid.js\");\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile */ \"./src/2048-master/js/tile.js\");\n\n\n\nfunction GameManager(size, InputManager, Actuator, StorageManager) {\n  this.size = size; // Size of the grid\n\n  this.inputManager = new InputManager();\n  this.storageManager = new StorageManager();\n  this.actuator = new Actuator();\n  this.startTiles = 2;\n  this.inputManager.on(\"move\", this.move.bind(this));\n  this.inputManager.on(\"restart\", this.restart.bind(this));\n  this.inputManager.on(\"keepPlaying\", this.keepPlaying.bind(this));\n  this.setup();\n} // Restart the game\n\n\nGameManager.prototype.restart = function () {\n  this.storageManager.clearGameState();\n  this.actuator.continueGame(); // Clear the game won/lost message\n\n  this.setup();\n}; // Keep playing after winning (allows going over 2048)\n\n\nGameManager.prototype.keepPlaying = function () {\n  this.keepPlaying = true;\n  this.actuator.continueGame(); // Clear the game won/lost message\n}; // Return true if the game is lost, or has won and the user hasn't kept playing\n\n\nGameManager.prototype.isGameTerminated = function () {\n  return this.over || this.won && !this.keepPlaying;\n}; // Set up the game\n\n\nGameManager.prototype.setup = function () {\n  var previousState = this.storageManager.getGameState(); // Reload the game from a previous game if present\n\n  if (previousState) {\n    this.grid = new _grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](previousState.grid.size, previousState.grid.cells); // Reload grid\n\n    this.score = previousState.score;\n    this.over = previousState.over;\n    this.won = previousState.won;\n    this.keepPlaying = previousState.keepPlaying;\n  } else {\n    this.grid = new _grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.size);\n    this.score = 0;\n    this.over = false;\n    this.won = false;\n    this.keepPlaying = false; // Add the initial tiles\n\n    this.addStartTiles();\n  } // Update the actuator\n\n\n  this.actuate();\n}; // Set up the initial tiles to start the game with\n\n\nGameManager.prototype.addStartTiles = function () {\n  for (var i = 0; i < this.startTiles; i++) {\n    this.addRandomTile();\n  }\n}; // Adds a tile in a random position\n\n\nGameManager.prototype.addRandomTile = function () {\n  if (this.grid.cellsAvailable()) {\n    var value = Math.random() < 0.9 ? 2 : 4;\n    var tile = new _tile__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.grid.randomAvailableCell(), value);\n    this.grid.insertTile(tile);\n  }\n}; // Sends the updated grid to the actuator\n\n\nGameManager.prototype.actuate = function () {\n  if (this.storageManager.getBestScore() < this.score) {\n    this.storageManager.setBestScore(this.score);\n  } // Clear the state when the game is over (game over only, not win)\n\n\n  if (this.over) {\n    this.storageManager.clearGameState();\n  } else {\n    this.storageManager.setGameState(this.serialize());\n  }\n\n  this.actuator.actuate(this.grid, {\n    score: this.score,\n    over: this.over,\n    won: this.won,\n    bestScore: this.storageManager.getBestScore(),\n    terminated: this.isGameTerminated()\n  });\n}; // Represent the current game as an object\n\n\nGameManager.prototype.serialize = function () {\n  return {\n    grid: this.grid.serialize(),\n    score: this.score,\n    over: this.over,\n    won: this.won,\n    keepPlaying: this.keepPlaying\n  };\n}; // Save all tile positions and remove merger info\n\n\nGameManager.prototype.prepareTiles = function () {\n  this.grid.eachCell(function (x, y, tile) {\n    if (tile) {\n      tile.mergedFrom = null;\n      tile.savePosition();\n    }\n  });\n}; // Move a tile and its representation\n\n\nGameManager.prototype.moveTile = function (tile, cell) {\n  this.grid.cells[tile.x][tile.y] = null;\n  this.grid.cells[cell.x][cell.y] = tile;\n  tile.updatePosition(cell);\n}; // Move tiles on the grid in the specified direction\n\n\nGameManager.prototype.move = function (direction) {\n  // 0: up, 1: right, 2: down, 3: left\n  var self = this;\n  if (this.isGameTerminated()) return; // Don't do anything if the game's over\n\n  var cell, tile;\n  var vector = this.getVector(direction);\n  var traversals = this.buildTraversals(vector);\n  var moved = false; // Save the current tile positions and remove merger information\n\n  this.prepareTiles(); // Traverse the grid in the right direction and move tiles\n\n  traversals.x.forEach(function (x) {\n    traversals.y.forEach(function (y) {\n      cell = {\n        x: x,\n        y: y\n      };\n      tile = self.grid.cellContent(cell);\n\n      if (tile) {\n        var positions = self.findFarthestPosition(cell, vector);\n        var next = self.grid.cellContent(positions.next); // Only one merger per row traversal?\n\n        if (next && next.value === tile.value && !next.mergedFrom) {\n          var merged = new _tile__WEBPACK_IMPORTED_MODULE_1__[\"default\"](positions.next, tile.value * 2);\n          merged.mergedFrom = [tile, next];\n          self.grid.insertTile(merged);\n          self.grid.removeTile(tile); // Converge the two tiles' positions\n\n          tile.updatePosition(positions.next); // Update the score\n\n          self.score += merged.value; // The mighty 2048 tile\n\n          if (merged.value === 2048) self.won = true;\n        } else {\n          self.moveTile(tile, positions.farthest);\n        }\n\n        if (!self.positionsEqual(cell, tile)) {\n          moved = true; // The tile moved from its original cell!\n        }\n      }\n    });\n  });\n\n  if (moved) {\n    this.addRandomTile();\n\n    if (!this.movesAvailable()) {\n      this.over = true; // Game over!\n    }\n\n    this.actuate();\n  }\n}; // Get the vector representing the chosen direction\n\n\nGameManager.prototype.getVector = function (direction) {\n  // Vectors representing tile movement\n  var map = {\n    0: {\n      x: 0,\n      y: -1\n    },\n    // Up\n    1: {\n      x: 1,\n      y: 0\n    },\n    // Right\n    2: {\n      x: 0,\n      y: 1\n    },\n    // Down\n    3: {\n      x: -1,\n      y: 0 // Left\n\n    }\n  };\n  return map[direction];\n}; // Build a list of positions to traverse in the right order\n\n\nGameManager.prototype.buildTraversals = function (vector) {\n  var traversals = {\n    x: [],\n    y: []\n  };\n\n  for (var pos = 0; pos < this.size; pos++) {\n    traversals.x.push(pos);\n    traversals.y.push(pos);\n  } // Always traverse from the farthest cell in the chosen direction\n\n\n  if (vector.x === 1) traversals.x = traversals.x.reverse();\n  if (vector.y === 1) traversals.y = traversals.y.reverse();\n  return traversals;\n};\n\nGameManager.prototype.findFarthestPosition = function (cell, vector) {\n  var previous; // Progress towards the vector direction until an obstacle is found\n\n  do {\n    previous = cell;\n    cell = {\n      x: previous.x + vector.x,\n      y: previous.y + vector.y\n    };\n  } while (this.grid.withinBounds(cell) && this.grid.cellAvailable(cell));\n\n  return {\n    farthest: previous,\n    next: cell // Used to check if a merge is required\n\n  };\n};\n\nGameManager.prototype.movesAvailable = function () {\n  return this.grid.cellsAvailable() || this.tileMatchesAvailable();\n}; // Check for available matches between tiles (more expensive check)\n\n\nGameManager.prototype.tileMatchesAvailable = function () {\n  var self = this;\n  var tile;\n\n  for (var x = 0; x < this.size; x++) {\n    for (var y = 0; y < this.size; y++) {\n      tile = this.grid.cellContent({\n        x: x,\n        y: y\n      });\n\n      if (tile) {\n        for (var direction = 0; direction < 4; direction++) {\n          var vector = self.getVector(direction);\n          var cell = {\n            x: x + vector.x,\n            y: y + vector.y\n          };\n          var other = self.grid.cellContent(cell);\n\n          if (other && other.value === tile.value) {\n            return true; // These two tiles can be merged\n          }\n        }\n      }\n    }\n  }\n\n  return false;\n};\n\nGameManager.prototype.positionsEqual = function (first, second) {\n  return first.x === second.x && first.y === second.y;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameManager);\n\n//# sourceURL=webpack:///./src/2048-master/js/game_manager.js?");

/***/ }),

/***/ "./src/2048-master/js/grid.js":
/*!************************************!*\
  !*** ./src/2048-master/js/grid.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./src/2048-master/js/tile.js\");\n\n\nfunction Grid(size, previousState) {\n  this.size = size;\n  this.cells = previousState ? this.fromState(previousState) : this.empty();\n} // Build a grid of the specified size\n\n\nGrid.prototype.empty = function () {\n  var cells = [];\n\n  for (var x = 0; x < this.size; x++) {\n    var row = cells[x] = [];\n\n    for (var y = 0; y < this.size; y++) {\n      row.push(null);\n    }\n  }\n\n  return cells;\n};\n\nGrid.prototype.fromState = function (state) {\n  var cells = [];\n\n  for (var x = 0; x < this.size; x++) {\n    var row = cells[x] = [];\n\n    for (var y = 0; y < this.size; y++) {\n      var tile = state[x][y];\n      row.push(tile ? new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](tile.position, tile.value) : null);\n    }\n  }\n\n  return cells;\n}; // Find the first available random position\n\n\nGrid.prototype.randomAvailableCell = function () {\n  var cells = this.availableCells();\n\n  if (cells.length) {\n    return cells[Math.floor(Math.random() * cells.length)];\n  }\n};\n\nGrid.prototype.availableCells = function () {\n  var cells = [];\n  this.eachCell(function (x, y, tile) {\n    if (!tile) {\n      cells.push({\n        x: x,\n        y: y\n      });\n    }\n  });\n  return cells;\n}; // Call callback for every cell\n\n\nGrid.prototype.eachCell = function (callback) {\n  for (var x = 0; x < this.size; x++) {\n    for (var y = 0; y < this.size; y++) {\n      callback(x, y, this.cells[x][y]);\n    }\n  }\n}; // Check if there are any cells available\n\n\nGrid.prototype.cellsAvailable = function () {\n  return !!this.availableCells().length;\n}; // Check if the specified cell is taken\n\n\nGrid.prototype.cellAvailable = function (cell) {\n  return !this.cellOccupied(cell);\n};\n\nGrid.prototype.cellOccupied = function (cell) {\n  return !!this.cellContent(cell);\n};\n\nGrid.prototype.cellContent = function (cell) {\n  if (this.withinBounds(cell)) {\n    return this.cells[cell.x][cell.y];\n  } else {\n    return null;\n  }\n}; // Inserts a tile at its position\n\n\nGrid.prototype.insertTile = function (tile) {\n  this.cells[tile.x][tile.y] = tile;\n};\n\nGrid.prototype.removeTile = function (tile) {\n  this.cells[tile.x][tile.y] = null;\n};\n\nGrid.prototype.withinBounds = function (position) {\n  return position.x >= 0 && position.x < this.size && position.y >= 0 && position.y < this.size;\n};\n\nGrid.prototype.serialize = function () {\n  var cellState = [];\n\n  for (var x = 0; x < this.size; x++) {\n    var row = cellState[x] = [];\n\n    for (var y = 0; y < this.size; y++) {\n      row.push(this.cells[x][y] ? this.cells[x][y].serialize() : null);\n    }\n  }\n\n  return {\n    size: this.size,\n    cells: cellState\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack:///./src/2048-master/js/grid.js?");

/***/ }),

/***/ "./src/2048-master/js/html_actuator.js":
/*!*********************************************!*\
  !*** ./src/2048-master/js/html_actuator.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction HTMLActuator() {\n  this.tileContainer = document.querySelector(\".tile-container\");\n  this.scoreContainer = document.querySelector(\".score-container\");\n  this.bestContainer = document.querySelector(\".best-container\");\n  this.messageContainer = document.querySelector(\".game-message\");\n  this.score = 0;\n}\n\nHTMLActuator.prototype.actuate = function (grid, metadata) {\n  var self = this;\n  window.requestAnimationFrame(function () {\n    self.clearContainer(self.tileContainer);\n    grid.cells.forEach(function (column) {\n      column.forEach(function (cell) {\n        if (cell) {\n          self.addTile(cell);\n        }\n      });\n    });\n    self.updateScore(metadata.score);\n    self.updateBestScore(metadata.bestScore);\n\n    if (metadata.terminated) {\n      if (metadata.over) {\n        self.message(false); // You lose\n      } else if (metadata.won) {\n        self.message(true); // You win!\n      }\n    }\n  });\n}; // Continues the game (both restart and keep playing)\n\n\nHTMLActuator.prototype.continueGame = function () {\n  this.clearMessage();\n};\n\nHTMLActuator.prototype.clearContainer = function (container) {\n  while (container.firstChild) {\n    container.removeChild(container.firstChild);\n  }\n};\n\nHTMLActuator.prototype.addTile = function (tile) {\n  var self = this;\n  var wrapper = document.createElement(\"div\");\n  var inner = document.createElement(\"div\");\n  var position = tile.previousPosition || {\n    x: tile.x,\n    y: tile.y\n  };\n  var positionClass = this.positionClass(position); // We can't use classlist because it somehow glitches when replacing classes\n\n  var classes = [\"tile\", \"tile-\" + tile.value, positionClass];\n  if (tile.value > 2048) classes.push(\"tile-super\");\n  this.applyClasses(wrapper, classes);\n  inner.classList.add(\"tile-inner\");\n  inner.textContent = tile.value;\n\n  if (tile.previousPosition) {\n    // Make sure that the tile gets rendered in the previous position first\n    window.requestAnimationFrame(function () {\n      classes[2] = self.positionClass({\n        x: tile.x,\n        y: tile.y\n      });\n      self.applyClasses(wrapper, classes); // Update the position\n    });\n  } else if (tile.mergedFrom) {\n    classes.push(\"tile-merged\");\n    this.applyClasses(wrapper, classes); // Render the tiles that merged\n\n    tile.mergedFrom.forEach(function (merged) {\n      self.addTile(merged);\n    });\n  } else {\n    classes.push(\"tile-new\");\n    this.applyClasses(wrapper, classes);\n  } // Add the inner part of the tile to the wrapper\n\n\n  wrapper.appendChild(inner); // Put the tile on the board\n\n  this.tileContainer.appendChild(wrapper);\n};\n\nHTMLActuator.prototype.applyClasses = function (element, classes) {\n  element.setAttribute(\"class\", classes.join(\" \"));\n};\n\nHTMLActuator.prototype.normalizePosition = function (position) {\n  return {\n    x: position.x + 1,\n    y: position.y + 1\n  };\n};\n\nHTMLActuator.prototype.positionClass = function (position) {\n  position = this.normalizePosition(position);\n  return \"tile-position-\" + position.x + \"-\" + position.y;\n};\n\nHTMLActuator.prototype.updateScore = function (score) {\n  this.clearContainer(this.scoreContainer);\n  var difference = score - this.score;\n  this.score = score;\n  this.scoreContainer.textContent = this.score;\n\n  if (difference > 0) {\n    var addition = document.createElement(\"div\");\n    addition.classList.add(\"score-addition\");\n    addition.textContent = \"+\" + difference;\n    this.scoreContainer.appendChild(addition);\n  }\n};\n\nHTMLActuator.prototype.updateBestScore = function (bestScore) {\n  this.bestContainer.textContent = bestScore;\n};\n\nHTMLActuator.prototype.message = function (won) {\n  var type = won ? \"game-won\" : \"game-over\";\n  var message = won ? \"You win!\" : \"Game over!\";\n  this.messageContainer.classList.add(type);\n  this.messageContainer.getElementsByTagName(\"p\")[0].textContent = message;\n};\n\nHTMLActuator.prototype.clearMessage = function () {\n  // IE only takes one value to remove at a time.\n  this.messageContainer.classList.remove(\"game-won\");\n  this.messageContainer.classList.remove(\"game-over\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HTMLActuator);\n\n//# sourceURL=webpack:///./src/2048-master/js/html_actuator.js?");

/***/ }),

/***/ "./src/2048-master/js/keyboard_input_manager.js":
/*!******************************************************!*\
  !*** ./src/2048-master/js/keyboard_input_manager.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction KeyboardInputManager() {\n  this.events = {};\n\n  if (window.navigator.msPointerEnabled) {\n    //Internet Explorer 10 style\n    this.eventTouchstart = \"MSPointerDown\";\n    this.eventTouchmove = \"MSPointerMove\";\n    this.eventTouchend = \"MSPointerUp\";\n  } else {\n    this.eventTouchstart = \"touchstart\";\n    this.eventTouchmove = \"touchmove\";\n    this.eventTouchend = \"touchend\";\n  }\n\n  this.listen();\n}\n\nKeyboardInputManager.prototype.on = function (event, callback) {\n  if (!this.events[event]) {\n    this.events[event] = [];\n  }\n\n  this.events[event].push(callback);\n};\n\nKeyboardInputManager.prototype.emit = function (event, data) {\n  var callbacks = this.events[event];\n\n  if (callbacks) {\n    callbacks.forEach(function (callback) {\n      callback(data);\n    });\n  }\n};\n\nKeyboardInputManager.prototype.listen = function () {\n  var self = this;\n  var map = {\n    38: 0,\n    // Up\n    39: 1,\n    // Right\n    40: 2,\n    // Down\n    37: 3,\n    // Left\n    75: 0,\n    // Vim up\n    76: 1,\n    // Vim right\n    74: 2,\n    // Vim down\n    72: 3,\n    // Vim left\n    87: 0,\n    // W\n    68: 1,\n    // D\n    83: 2,\n    // S\n    65: 3 // A\n\n  }; // Respond to direction keys\n\n  document.addEventListener(\"keydown\", function (event) {\n    var modifiers = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;\n    var mapped = map[event.which];\n\n    if (!modifiers) {\n      if (mapped !== undefined) {\n        event.preventDefault();\n        self.emit(\"move\", mapped);\n      }\n    } // R key restarts the game\n\n\n    if (!modifiers && event.which === 82) {\n      self.restart.call(self, event);\n    }\n  }); // Respond to button presses\n\n  this.bindButtonPress(\".retry-button\", this.restart);\n  this.bindButtonPress(\".restart-button\", this.restart);\n  this.bindButtonPress(\".keep-playing-button\", this.keepPlaying); // Respond to swipe events\n\n  var touchStartClientX, touchStartClientY;\n  var gameContainer = document.getElementsByClassName(\"game-container\")[0];\n  gameContainer.addEventListener(this.eventTouchstart, function (event) {\n    if (!window.navigator.msPointerEnabled && event.touches.length > 1 || event.targetTouches.length > 1) {\n      return; // Ignore if touching with more than 1 finger\n    }\n\n    if (window.navigator.msPointerEnabled) {\n      touchStartClientX = event.pageX;\n      touchStartClientY = event.pageY;\n    } else {\n      touchStartClientX = event.touches[0].clientX;\n      touchStartClientY = event.touches[0].clientY;\n    }\n\n    event.preventDefault();\n  });\n  gameContainer.addEventListener(this.eventTouchmove, function (event) {\n    event.preventDefault();\n  });\n  gameContainer.addEventListener(this.eventTouchend, function (event) {\n    if (!window.navigator.msPointerEnabled && event.touches.length > 0 || event.targetTouches.length > 0) {\n      return; // Ignore if still touching with one or more fingers\n    }\n\n    var touchEndClientX, touchEndClientY;\n\n    if (window.navigator.msPointerEnabled) {\n      touchEndClientX = event.pageX;\n      touchEndClientY = event.pageY;\n    } else {\n      touchEndClientX = event.changedTouches[0].clientX;\n      touchEndClientY = event.changedTouches[0].clientY;\n    }\n\n    var dx = touchEndClientX - touchStartClientX;\n    var absDx = Math.abs(dx);\n    var dy = touchEndClientY - touchStartClientY;\n    var absDy = Math.abs(dy);\n\n    if (Math.max(absDx, absDy) > 10) {\n      // (right : left) : (down : up)\n      self.emit(\"move\", absDx > absDy ? dx > 0 ? 1 : 3 : dy > 0 ? 2 : 0);\n    }\n  });\n};\n\nKeyboardInputManager.prototype.restart = function (event) {\n  event.preventDefault();\n  this.emit(\"restart\");\n};\n\nKeyboardInputManager.prototype.keepPlaying = function (event) {\n  event.preventDefault();\n  this.emit(\"keepPlaying\");\n};\n\nKeyboardInputManager.prototype.bindButtonPress = function (selector, fn) {\n  var button = document.querySelector(selector);\n  button.addEventListener(\"click\", fn.bind(this));\n  button.addEventListener(this.eventTouchend, fn.bind(this));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (KeyboardInputManager);\n\n//# sourceURL=webpack:///./src/2048-master/js/keyboard_input_manager.js?");

/***/ }),

/***/ "./src/2048-master/js/local_storage_manager.js":
/*!*****************************************************!*\
  !*** ./src/2048-master/js/local_storage_manager.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nwindow.fakeStorage = {\n  _data: {},\n  setItem: function setItem(id, val) {\n    return this._data[id] = String(val);\n  },\n  getItem: function getItem(id) {\n    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;\n  },\n  removeItem: function removeItem(id) {\n    return delete this._data[id];\n  },\n  clear: function clear() {\n    return this._data = {};\n  }\n};\n\nfunction LocalStorageManager() {\n  this.bestScoreKey = \"bestScore\";\n  this.gameStateKey = \"gameState\";\n  var supported = this.localStorageSupported();\n  this.storage = supported ? window.localStorage : window.fakeStorage;\n}\n\nLocalStorageManager.prototype.localStorageSupported = function () {\n  var testKey = \"test\";\n\n  try {\n    var storage = window.localStorage;\n    storage.setItem(testKey, \"1\");\n    storage.removeItem(testKey);\n    return true;\n  } catch (error) {\n    return false;\n  }\n}; // Best score getters/setters\n\n\nLocalStorageManager.prototype.getBestScore = function () {\n  return this.storage.getItem(this.bestScoreKey) || 0;\n};\n\nLocalStorageManager.prototype.setBestScore = function (score) {\n  this.storage.setItem(this.bestScoreKey, score);\n}; // Game state getters/setters and clearing\n\n\nLocalStorageManager.prototype.getGameState = function () {\n  var stateJSON = this.storage.getItem(this.gameStateKey);\n  return stateJSON ? JSON.parse(stateJSON) : null;\n};\n\nLocalStorageManager.prototype.setGameState = function (gameState) {\n  this.storage.setItem(this.gameStateKey, JSON.stringify(gameState));\n};\n\nLocalStorageManager.prototype.clearGameState = function () {\n  this.storage.removeItem(this.gameStateKey);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocalStorageManager);\n\n//# sourceURL=webpack:///./src/2048-master/js/local_storage_manager.js?");

/***/ }),

/***/ "./src/2048-master/js/tile.js":
/*!************************************!*\
  !*** ./src/2048-master/js/tile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Tile(position, value) {\n  this.x = position.x;\n  this.y = position.y;\n  this.value = value || 2;\n  this.previousPosition = null;\n  this.mergedFrom = null; // Tracks tiles that merged together\n}\n\nTile.prototype.savePosition = function () {\n  this.previousPosition = {\n    x: this.x,\n    y: this.y\n  };\n};\n\nTile.prototype.updatePosition = function (position) {\n  this.x = position.x;\n  this.y = position.y;\n};\n\nTile.prototype.serialize = function () {\n  return {\n    position: {\n      x: this.x,\n      y: this.y\n    },\n    value: this.value\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);\n\n//# sourceURL=webpack:///./src/2048-master/js/tile.js?");

/***/ })

/******/ });