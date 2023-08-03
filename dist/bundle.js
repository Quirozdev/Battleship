/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/gameBoard.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/gameBoard.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
}

#game {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: 75vh;
}

#gameboards-container {
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 32px;
  padding: 24px;
}

.gameboard {
  display: grid;
  flex: 1;
  min-width: 250px;
  max-width: 400px;
  aspect-ratio: 1 / 1;
}

.cell {
  border: 1px solid black;
}

#computer-gameboard .cell:hover {
  cursor: cell;
  background-color: red;
}

#ships-container {
  width: 30%;
  text-align: center;
}

.ships {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
}

.ship {
  display: flex;
  cursor: move;
}

.ship[data-ship-orientation='horizontal'] {
  flex-direction: row;
}

.ship[data-ship-orientation='vertical'] {
  flex-direction: column;
}

.ship-cell {
  width: 30px;
  height: 30px;
  border: 1px solid black;
}

.dragging-element {
  opacity: 0.5;
}

.hovered-cell {
  background-color: green;
}

.placed-ship {
  border: 2px dashed black;
  opacity: 0.5;
  cursor: no-drop;
}

.ship-cell-placed {
  border: 2px solid yellow;
  background-color: coral;
}

.hidden {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/assets/gameBoard.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,OAAO;EACP,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,OAAO;EACP,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n}\r\n\r\n#game {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 24px;\r\n  height: 75vh;\r\n}\r\n\r\n#gameboards-container {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-wrap: wrap;\r\n  gap: 32px;\r\n  padding: 24px;\r\n}\r\n\r\n.gameboard {\r\n  display: grid;\r\n  flex: 1;\r\n  min-width: 250px;\r\n  max-width: 400px;\r\n  aspect-ratio: 1 / 1;\r\n}\r\n\r\n.cell {\r\n  border: 1px solid black;\r\n}\r\n\r\n#computer-gameboard .cell:hover {\r\n  cursor: cell;\r\n  background-color: red;\r\n}\r\n\r\n#ships-container {\r\n  width: 30%;\r\n  text-align: center;\r\n}\r\n\r\n.ships {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 32px;\r\n}\r\n\r\n.ship {\r\n  display: flex;\r\n  cursor: move;\r\n}\r\n\r\n.ship[data-ship-orientation='horizontal'] {\r\n  flex-direction: row;\r\n}\r\n\r\n.ship[data-ship-orientation='vertical'] {\r\n  flex-direction: column;\r\n}\r\n\r\n.ship-cell {\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.dragging-element {\r\n  opacity: 0.5;\r\n}\r\n\r\n.hovered-cell {\r\n  background-color: green;\r\n}\r\n\r\n.placed-ship {\r\n  border: 2px dashed black;\r\n  opacity: 0.5;\r\n  cursor: no-drop;\r\n}\r\n\r\n.ship-cell-placed {\r\n  border: 2px solid yellow;\r\n  background-color: coral;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/gameBoard.css":
/*!**********************************!*\
  !*** ./src/assets/gameBoard.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameBoard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameBoard.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/gameBoard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Computer)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


function Computer(name) {
  const gameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  // to prevent the ai from hitting the same spot
  const notAttackedCells = createPossibleHits();

  function createPossibleHits() {
    const cells = [];
    for (let i = 0; i < gameBoard.getNumberOfRows(); i++) {
      for (let j = 0; j < gameBoard.getNumberOfColumns(); j++) {
        cells.push({ x: i, y: j });
      }
    }
    return cells;
  }

  function getName() {
    return name;
  }

  function getGameBoard() {
    return gameBoard;
  }

  function attackRandomly(enemyGameBoard) {
    const cellToAttackIndex = Math.floor(
      Math.random() * notAttackedCells.length
    );
    const { x, y } = notAttackedCells[cellToAttackIndex];
    notAttackedCells.splice(cellToAttackIndex, 1);
    return enemyGameBoard.receiveAttack(x, y);
  }

  return { getName, getGameBoard, attackRandomly };
}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMHandler: () => (/* binding */ DOMHandler)
/* harmony export */ });
/* harmony import */ var _assets_gameBoard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/gameBoard.css */ "./src/assets/gameBoard.css");


const gameBoardsContainer = document.getElementById('gameboards-container');
const playBtn = document.getElementById('play-btn');

function DOMHandler(game) {
  const player = game.getPlayer();
  const computer = game.getComputer();

  const playerGameBoard = player.getGameBoard();
  const computerGameBoard = computer.getGameBoard();

  const playerDomGameBoard = createDOMGameBoard(
    playerGameBoard,
    'player-gameboard'
  );
  const computerDomGameBoard = createDOMGameBoard(
    computerGameBoard,
    'computer-gameboard'
  );

  gameBoardsContainer.appendChild(playerDomGameBoard);
  gameBoardsContainer.appendChild(computerDomGameBoard);

  playBtn.addEventListener('click', () => {
    removeShipsContainer();
    playBtn.remove();
    computer.getGameBoard().placeShipsRandomly();
    updateDisplay(computerGameBoard, computerDomGameBoard);
  });

  document
    .getElementById('randomize-ships-btn')
    .addEventListener('click', randomizeShips);

  function randomizeShips() {
    resetShips();
    playerGameBoard.placeShipsRandomly();
    updateDisplay(playerGameBoard, playerDomGameBoard);
    enablePlayButton();
  }

  function enablePlayButton() {
    playBtn.removeAttribute('disabled');
  }

  function disablePlayButton() {
    playBtn.setAttribute('disabled', '');
  }

  function createCell(row, column) {
    const cell = document.createElement('button');
    cell.classList.add('cell');
    cell.setAttribute('data-x-position', row);
    cell.setAttribute('data-y-position', column);

    return cell;
  }

  function updateDisplay(gameBoard, domGameBoard) {
    const gameBoardState = gameBoard.getState();

    const rows = gameBoard.getNumberOfRows();
    const columns = gameBoard.getNumberOfColumns();
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const objectAtCurrentCell = gameBoardState[i][j];
        if (objectAtCurrentCell === '') {
          domGameBoard
            .querySelector(
              `.cell[data-x-position="${i}"][data-y-position="${j}"]`
            )
            .classList.remove('ship-cell-placed');
        } else if (objectAtCurrentCell === 'hit') {
          domGameBoard.querySelector(
            `.cell[data-x-position="${i}"][data-y-position="${j}"]`
          ).textContent = 'hit';
        } else if (objectAtCurrentCell === 'miss') {
          domGameBoard.querySelector(
            `.cell[data-x-position="${i}"][data-y-position="${j}"]`
          ).textContent = 'miss';
        } else {
          const cell = domGameBoard.querySelector(
            `.cell[data-x-position="${i}"][data-y-position="${j}"]`
          );
          // to avoid computer gameboard ships from being visible
          /*





            COMMENTED FOR DEBUGGING




          */
          // if (domGameBoard === playerDomGameBoard) {
          cell.classList.add('ship-cell-placed');
          // }
        }
      }
    }
  }

  function removeShipsContainer() {
    document.getElementById('ships-container').remove();
  }

  function createDOMGameBoard(gameBoard, id) {
    const domGameBoard = document.createElement('div');
    domGameBoard.classList.add('gameboard');
    domGameBoard.setAttribute('id', id);
    const rows = gameBoard.getNumberOfRows();
    const columns = gameBoard.getNumberOfColumns();
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const cell = createCell(i, j);
        if (id === 'player-gameboard') {
          addDropFunctionality(cell);
        } else {
          addAtackFunctionality(cell);
        }
        domGameBoard.appendChild(cell);
      }
    }
    domGameBoard.style[
      'grid-template-rows'
    ] = `repeat(${gameBoard.getNumberOfRows()}, 1fr)`;
    domGameBoard.style[
      'grid-template-columns'
    ] = `repeat(${gameBoard.getNumberOfColumns()}, 1fr)`;

    return domGameBoard;
  }

  document.querySelectorAll(`.ship`).forEach((element) => {
    addDragFunctionality(element);
  });

  function hoverCellAndItsNearCells(x, y, shipLength, orientation) {
    for (let i = 0; i < shipLength; i++) {
      let currentCell;
      if (orientation === 'horizontal') {
        currentCell = playerDomGameBoard.querySelector(
          `.cell[data-x-position="${x}"][data-y-position="${y + i}"]`
        );
      } else {
        // vertical
        currentCell = playerDomGameBoard.querySelector(
          `.cell[data-x-position="${x + i}"][data-y-position="${y}"]`
        );
      }
      currentCell.classList.add('hovered-cell');
    }
  }

  function removeHoverCellAndNearCells() {
    playerDomGameBoard
      .querySelectorAll('.hovered-cell')
      .forEach((cell) => cell.classList.remove('hovered-cell'));
  }

  document
    .getElementById('rotate-ships-btn')
    .addEventListener('click', rotateShips);

  function rotateShips() {
    document.querySelectorAll('.ship').forEach((ship) => {
      const currentOrientation = ship.getAttribute('data-ship-orientation');
      const rotatedOrientation =
        currentOrientation === 'horizontal' ? 'vertical' : 'horizontal';
      ship.setAttribute('data-ship-orientation', rotatedOrientation);
    });
  }

  document.getElementById('reset-ships-btn').addEventListener('click', () => {
    resetShips();
    updateDisplay(playerGameBoard, playerDomGameBoard);
  });

  function resetShips() {
    disablePlayButton();
    playerGameBoard.clearGameBoard();
    document.querySelectorAll('.placed-ship').forEach((placedShip) => {
      placedShip.classList.remove('placed-ship');
      placedShip.classList.remove('dragging-element');
      addDragFunctionality(placedShip);
    });
  }

  let currentDraggingElement;

  function addDropFunctionality(element) {
    element.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (!currentDraggingElement) return;
      removeHoverCellAndNearCells();
      const x = Number(element.getAttribute('data-x-position'));
      const y = Number(element.getAttribute('data-y-position'));
      const shipLength = Number(
        currentDraggingElement.getAttribute('data-ship-length')
      );
      const orientation = currentDraggingElement.getAttribute(
        'data-ship-orientation'
      );
      if (playerGameBoard.isShipPlaceValid(x, y, shipLength, orientation)) {
        console.log('valid');
        hoverCellAndItsNearCells(x, y, shipLength, orientation);
      } else {
        console.log('invalid');
      }
    });

    element.addEventListener('drop', (e) => {
      e.preventDefault();
      if (!currentDraggingElement) return;
      const cellToPlaceShip = e.target;
      const x = Number(cellToPlaceShip.getAttribute('data-x-position'));
      const y = Number(cellToPlaceShip.getAttribute('data-y-position'));
      const shipLength = Number(
        currentDraggingElement.getAttribute('data-ship-length')
      );
      const orientation = currentDraggingElement.getAttribute(
        'data-ship-orientation'
      );
      if (playerGameBoard.isShipPlaceValid(x, y, shipLength, orientation)) {
        playerGameBoard.placeShip(x, y, shipLength, orientation);
        currentDraggingElement.classList.add('placed-ship');
        updateDisplay(playerGameBoard, playerDomGameBoard);
        removeDragFunctionality(currentDraggingElement);
        removeHoverCellAndNearCells();
        if (playerGameBoard.allTheShipsHaveBeenPlaced()) {
          enablePlayButton();
        }
      }
      currentDraggingElement = null;
    });
  }

  function addAtackFunctionality(cell) {
    cell.addEventListener('click', () => {
      if (game.getCurrentPlayerTurn() !== player) {
        return;
      }
      const x = Number(cell.getAttribute('data-x-position'));
      const y = Number(cell.getAttribute('data-y-position'));
      const [succesfulAttack, msg] = player.attack(x, y, computerGameBoard);
      if (succesfulAttack) {
        game.setCurrentPlayerTurn(computer);
        updateDisplay(computerGameBoard, computerDomGameBoard);
        if (computerGameBoard.allTheShipsHaveBeenSunk()) {
          game.end(player);
          return;
        }
        computer.attackRandomly(playerGameBoard);
        updateDisplay(playerGameBoard, playerDomGameBoard);
        if (playerGameBoard.allTheShipsHaveBeenSunk()) {
          game.end(computer);
          return;
        }
        game.setCurrentPlayerTurn(player);
      }
    });
  }

  function onDragStart(event) {
    currentDraggingElement = event.currentTarget;
    currentDraggingElement.classList.add('dragging-element');
  }

  function onDragEnd(event) {
    currentDraggingElement = null;
    event.target.classList.remove('dragging-element');
    playerDomGameBoard
      .querySelectorAll('.hovered-cell')
      .forEach((cell) => cell.classList.remove('hovered-cell'));
  }

  function addDragFunctionality(element) {
    element.setAttribute('draggable', 'true');
    element.addEventListener('dragstart', onDragStart);
    element.addEventListener('dragend', onDragEnd);
  }

  function removeDragFunctionality(element) {
    console.log(element);
    element.removeAttribute('draggable');
    element.removeEventListener('dragstart', onDragStart);
    element.removeEventListener('dragend', onDragEnd);
  }

  return { updateDisplay };
}


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
function Game(player, computer) {
  let currentTurn = player;

  function getPlayer() {
    return player;
  }

  function getComputer() {
    return computer;
  }

  function getCurrentPlayerTurn() {
    return currentTurn;
  }

  function setCurrentPlayerTurn(player) {
    currentTurn = player;
  }

  function end(player) {
    alert(`${player.getName()} wins!!!!`);
  }

  return {
    getPlayer,
    getComputer,
    getCurrentPlayerTurn,
    setCurrentPlayerTurn,
    end,
  };
}


/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


function GameBoard(xLength = 10, yLength = 10) {
  const board = createBoard(xLength, yLength);
  // this is an array that will keep all the placed Ship objects, and its going to be useful
  // for the allTheShipsHaveBeenSunk method (to avoid double looping the board and searching where are the ships)
  let placedShips = [];

  function createBoard(xLength, yLength) {
    const newBoard = [];
    for (let i = 0; i < xLength; i++) {
      const row = [];
      for (let j = 0; j < yLength; j++) {
        row[j] = '';
      }
      newBoard.push(row);
    }
    return newBoard;
  }

  function getState() {
    return board;
  }

  function getNumberOfRows() {
    return board.length;
  }

  function getNumberOfColumns() {
    return board[0].length;
  }

  function ensureShipPlaceIsNotOutOfBounds(endingPosition, limit) {
    return endingPosition < limit;
  }

  function isThereAShipHorizontally(x, y, shipLength) {
    for (let i = y; i < y + shipLength; i++) {
      if (typeof board[x][i] === 'object') {
        return true;
      }
    }
    return false;
  }

  function isThereAShipVertically(x, y, shipLength) {
    for (let i = x; i < x + shipLength; i++) {
      if (typeof board[i][y] === 'object') {
        return true;
      }
    }
    return false;
  }

  function isShipPlaceValid(x, y, shipLength, shipOrientation = 'horizontal') {
    const isShipPlacementOutOfBounds =
      shipOrientation === 'horizontal'
        ? ensureShipPlaceIsNotOutOfBounds(
            y + shipLength - 1,
            getNumberOfColumns()
          )
        : ensureShipPlaceIsNotOutOfBounds(
            x + shipLength - 1,
            getNumberOfRows()
          );

    if (!isShipPlacementOutOfBounds) {
      return false;
    }

    const isThereAShipAlready =
      shipOrientation === 'horizontal'
        ? isThereAShipHorizontally(x, y, shipLength)
        : isThereAShipVertically(x, y, shipLength);

    if (isThereAShipAlready) {
      return false;
    }

    return true;
  }

  function placeShip(x, y, shipLength, shipOrientation = 'horizontal') {
    if (shipOrientation === 'horizontal') {
      placeShipHorizontally(x, y, shipLength);
    } else {
      placeShipVertically(x, y, shipLength);
    }
  }

  function placeShipVertically(x, y, shipLength) {
    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength);
    for (let i = x; i < x + shipLength; i++) {
      board[i][y] = ship;
    }
    placedShips.push(ship);
  }

  function placeShipHorizontally(x, y, shipLength) {
    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength);
    for (let i = y; i < y + shipLength; i++) {
      board[x][i] = ship;
    }
    placedShips.push(ship);
  }

  function placeShipRandomly(shipLength) {
    const orientations = ['horizontal', 'vertical'];
    while (true) {
      const x = Math.floor(Math.random() * getNumberOfRows());
      const y = Math.floor(Math.random() * getNumberOfColumns());
      const orientation =
        orientations[Math.floor(Math.random() * orientations.length)];
      if (isShipPlaceValid(x, y, shipLength, orientation)) {
        placeShip(x, y, shipLength, orientation);
        break;
      }
    }
  }

  function placeShipsRandomly() {
    const shipLengths = [5, 4, 3, 3, 2];
    while (!allTheShipsHaveBeenPlaced()) {
      shipLengths.forEach((shipLength) => {
        placeShipRandomly(shipLength);
      });
    }
  }

  function receiveAttack(x, y) {
    const objectAtCurrentCordinate = board[x][y];
    // coordinate already hit
    if (
      objectAtCurrentCordinate === 'hit' ||
      objectAtCurrentCordinate === 'miss'
    ) {
      return [false, 'Cell already hit'];
    }
    // miss
    if (objectAtCurrentCordinate === '') {
      board[x][y] = 'miss';
      return [true, 'Miss'];
    }
    // there is a ship
    objectAtCurrentCordinate.hit();
    board[x][y] = 'hit';
    return [true, 'Succesful hit'];
  }

  function allTheShipsHaveBeenPlaced() {
    return placedShips.length === 5;
  }

  function allTheShipsHaveBeenSunk() {
    // if atleast one ship hasn't been sunk, then return false
    for (let i = 0; i < placedShips.length; i++) {
      if (!placedShips[i].isSunk()) {
        return false;
      }
    }
    return true;
  }

  function clearGameBoard() {
    for (let i = 0; i < xLength; i++) {
      for (let j = 0; j < yLength; j++) {
        board[i][j] = '';
      }
    }
    placedShips = [];
  }

  return {
    getState,
    getNumberOfRows,
    getNumberOfColumns,
    isShipPlaceValid,
    placeShip,
    receiveAttack,
    placeShipsRandomly,
    allTheShipsHaveBeenPlaced,
    allTheShipsHaveBeenSunk,
    clearGameBoard,
  };
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


function Player(name) {
  const gameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  function getName() {
    return name;
  }

  function getGameBoard() {
    return gameBoard;
  }

  function attack(x, y, enemyGameBoard) {
    return enemyGameBoard.receiveAttack(x, y);
  }

  return { getName, getGameBoard, attack };
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(shipLength) {
  const length = shipLength;
  let hits = 0;

  function hit() {
    hits++;
  }

  function isSunk() {
    return length === hits;
  }

  return { hit, isSunk };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer */ "./src/computer.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./src/game.js");





const player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]('Luis');

const computer = new _computer__WEBPACK_IMPORTED_MODULE_1__["default"]('Computer');

const game = (0,_game__WEBPACK_IMPORTED_MODULE_3__["default"])(player, computer);

const domHandler = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.DOMHandler)(game);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeExvQztBQUNwQztBQUNlO0FBQ2Ysb0JBQW9CLHNEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7QUNsQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNJO0FBQ0M7QUFDVDtBQUMxQjtBQUNBLG1CQUFtQiwrQ0FBTTtBQUN6QjtBQUNBLHFCQUFxQixpREFBUTtBQUM3QjtBQUNBLGFBQWEsaURBQUk7QUFDakI7QUFDQSxtQkFBbUIsZ0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9nYW1lQm9hcmQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9nYW1lQm9hcmQuY3NzPzgxMDciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXB1dGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiNnYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMjRweDtcclxuICBoZWlnaHQ6IDc1dmg7XHJcbn1cclxuXHJcbiNnYW1lYm9hcmRzLWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDMycHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuLmdhbWVib2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNjb21wdXRlci1nYW1lYm9hcmQgLmNlbGw6aG92ZXIge1xyXG4gIGN1cnNvcjogY2VsbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiNzaGlwcy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2hpcHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAzMnB4O1xyXG59XHJcblxyXG4uc2hpcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuXHJcbi5zaGlwW2RhdGEtc2hpcC1vcmllbnRhdGlvbj0naG9yaXpvbnRhbCddIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uc2hpcFtkYXRhLXNoaXAtb3JpZW50YXRpb249J3ZlcnRpY2FsJ10ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zaGlwLWNlbGwge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRyYWdnaW5nLWVsZW1lbnQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmhvdmVyZWQtY2VsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5wbGFjZWQtc2hpcCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IG5vLWRyb3A7XHJcbn1cclxuXHJcbi5zaGlwLWNlbGwtcGxhY2VkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2dhbWVCb2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiA3NXZoO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZWJvYXJkcy1jb250YWluZXIge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG4gIHBhZGRpbmc6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBtaW4td2lkdGg6IDI1MHB4O1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tcHV0ZXItZ2FtZWJvYXJkIC5jZWxsOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogY2VsbDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBbZGF0YS1zaGlwLW9yaWVudGF0aW9uPSdob3Jpem9udGFsJ10ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBbZGF0YS1zaGlwLW9yaWVudGF0aW9uPSd2ZXJ0aWNhbCddIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNlbGwge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnaW5nLWVsZW1lbnQge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJlZC1jZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2VkLXNoaXAge1xcclxcbiAgYm9yZGVyOiAycHggZGFzaGVkIGJsYWNrO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgY3Vyc29yOiBuby1kcm9wO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jZWxsLXBsYWNlZCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lQm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lQm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXB1dGVyKG5hbWUpIHtcclxuICBjb25zdCBnYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcclxuICAvLyB0byBwcmV2ZW50IHRoZSBhaSBmcm9tIGhpdHRpbmcgdGhlIHNhbWUgc3BvdFxyXG4gIGNvbnN0IG5vdEF0dGFja2VkQ2VsbHMgPSBjcmVhdGVQb3NzaWJsZUhpdHMoKTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUG9zc2libGVIaXRzKCkge1xyXG4gICAgY29uc3QgY2VsbHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUJvYXJkLmdldE51bWJlck9mUm93cygpOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lQm9hcmQuZ2V0TnVtYmVyT2ZDb2x1bW5zKCk7IGorKykge1xyXG4gICAgICAgIGNlbGxzLnB1c2goeyB4OiBpLCB5OiBqIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2VsbHM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIG5hbWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRHYW1lQm9hcmQoKSB7XHJcbiAgICByZXR1cm4gZ2FtZUJvYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXR0YWNrUmFuZG9tbHkoZW5lbXlHYW1lQm9hcmQpIHtcclxuICAgIGNvbnN0IGNlbGxUb0F0dGFja0luZGV4ID0gTWF0aC5mbG9vcihcclxuICAgICAgTWF0aC5yYW5kb20oKSAqIG5vdEF0dGFja2VkQ2VsbHMubGVuZ3RoXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBub3RBdHRhY2tlZENlbGxzW2NlbGxUb0F0dGFja0luZGV4XTtcclxuICAgIG5vdEF0dGFja2VkQ2VsbHMuc3BsaWNlKGNlbGxUb0F0dGFja0luZGV4LCAxKTtcclxuICAgIHJldHVybiBlbmVteUdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgZ2V0TmFtZSwgZ2V0R2FtZUJvYXJkLCBhdHRhY2tSYW5kb21seSB9O1xyXG59XHJcbiIsImltcG9ydCAnLi9hc3NldHMvZ2FtZUJvYXJkLmNzcyc7XHJcblxyXG5jb25zdCBnYW1lQm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZHMtY29udGFpbmVyJyk7XHJcbmNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1idG4nKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBET01IYW5kbGVyKGdhbWUpIHtcclxuICBjb25zdCBwbGF5ZXIgPSBnYW1lLmdldFBsYXllcigpO1xyXG4gIGNvbnN0IGNvbXB1dGVyID0gZ2FtZS5nZXRDb21wdXRlcigpO1xyXG5cclxuICBjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBwbGF5ZXIuZ2V0R2FtZUJvYXJkKCk7XHJcbiAgY29uc3QgY29tcHV0ZXJHYW1lQm9hcmQgPSBjb21wdXRlci5nZXRHYW1lQm9hcmQoKTtcclxuXHJcbiAgY29uc3QgcGxheWVyRG9tR2FtZUJvYXJkID0gY3JlYXRlRE9NR2FtZUJvYXJkKFxyXG4gICAgcGxheWVyR2FtZUJvYXJkLFxyXG4gICAgJ3BsYXllci1nYW1lYm9hcmQnXHJcbiAgKTtcclxuICBjb25zdCBjb21wdXRlckRvbUdhbWVCb2FyZCA9IGNyZWF0ZURPTUdhbWVCb2FyZChcclxuICAgIGNvbXB1dGVyR2FtZUJvYXJkLFxyXG4gICAgJ2NvbXB1dGVyLWdhbWVib2FyZCdcclxuICApO1xyXG5cclxuICBnYW1lQm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckRvbUdhbWVCb2FyZCk7XHJcbiAgZ2FtZUJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlckRvbUdhbWVCb2FyZCk7XHJcblxyXG4gIHBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZW1vdmVTaGlwc0NvbnRhaW5lcigpO1xyXG4gICAgcGxheUJ0bi5yZW1vdmUoKTtcclxuICAgIGNvbXB1dGVyLmdldEdhbWVCb2FyZCgpLnBsYWNlU2hpcHNSYW5kb21seSgpO1xyXG4gICAgdXBkYXRlRGlzcGxheShjb21wdXRlckdhbWVCb2FyZCwgY29tcHV0ZXJEb21HYW1lQm9hcmQpO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKCdyYW5kb21pemUtc2hpcHMtYnRuJylcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJhbmRvbWl6ZVNoaXBzKTtcclxuXHJcbiAgZnVuY3Rpb24gcmFuZG9taXplU2hpcHMoKSB7XHJcbiAgICByZXNldFNoaXBzKCk7XHJcbiAgICBwbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgICB1cGRhdGVEaXNwbGF5KHBsYXllckdhbWVCb2FyZCwgcGxheWVyRG9tR2FtZUJvYXJkKTtcclxuICAgIGVuYWJsZVBsYXlCdXR0b24oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVuYWJsZVBsYXlCdXR0b24oKSB7XHJcbiAgICBwbGF5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRpc2FibGVQbGF5QnV0dG9uKCkge1xyXG4gICAgcGxheUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQ2VsbChyb3csIGNvbHVtbikge1xyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS14LXBvc2l0aW9uJywgcm93KTtcclxuICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXktcG9zaXRpb24nLCBjb2x1bW4pO1xyXG5cclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlRGlzcGxheShnYW1lQm9hcmQsIGRvbUdhbWVCb2FyZCkge1xyXG4gICAgY29uc3QgZ2FtZUJvYXJkU3RhdGUgPSBnYW1lQm9hcmQuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCByb3dzID0gZ2FtZUJvYXJkLmdldE51bWJlck9mUm93cygpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IGdhbWVCb2FyZC5nZXROdW1iZXJPZkNvbHVtbnMoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0QXRDdXJyZW50Q2VsbCA9IGdhbWVCb2FyZFN0YXRlW2ldW2pdO1xyXG4gICAgICAgIGlmIChvYmplY3RBdEN1cnJlbnRDZWxsID09PSAnJykge1xyXG4gICAgICAgICAgZG9tR2FtZUJvYXJkXHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgIGAuY2VsbFtkYXRhLXgtcG9zaXRpb249XCIke2l9XCJdW2RhdGEteS1wb3NpdGlvbj1cIiR7an1cIl1gXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtY2VsbC1wbGFjZWQnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG9iamVjdEF0Q3VycmVudENlbGwgPT09ICdoaXQnKSB7XHJcbiAgICAgICAgICBkb21HYW1lQm9hcmQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgYC5jZWxsW2RhdGEteC1wb3NpdGlvbj1cIiR7aX1cIl1bZGF0YS15LXBvc2l0aW9uPVwiJHtqfVwiXWBcclxuICAgICAgICAgICkudGV4dENvbnRlbnQgPSAnaGl0JztcclxuICAgICAgICB9IGVsc2UgaWYgKG9iamVjdEF0Q3VycmVudENlbGwgPT09ICdtaXNzJykge1xyXG4gICAgICAgICAgZG9tR2FtZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIGAuY2VsbFtkYXRhLXgtcG9zaXRpb249XCIke2l9XCJdW2RhdGEteS1wb3NpdGlvbj1cIiR7an1cIl1gXHJcbiAgICAgICAgICApLnRleHRDb250ZW50ID0gJ21pc3MnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBjZWxsID0gZG9tR2FtZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIGAuY2VsbFtkYXRhLXgtcG9zaXRpb249XCIke2l9XCJdW2RhdGEteS1wb3NpdGlvbj1cIiR7an1cIl1gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLy8gdG8gYXZvaWQgY29tcHV0ZXIgZ2FtZWJvYXJkIHNoaXBzIGZyb20gYmVpbmcgdmlzaWJsZVxyXG4gICAgICAgICAgLypcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBDT01NRU5URUQgRk9SIERFQlVHR0lOR1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICovXHJcbiAgICAgICAgICAvLyBpZiAoZG9tR2FtZUJvYXJkID09PSBwbGF5ZXJEb21HYW1lQm9hcmQpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1jZWxsLXBsYWNlZCcpO1xyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlU2hpcHNDb250YWluZXIoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcHMtY29udGFpbmVyJykucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVET01HYW1lQm9hcmQoZ2FtZUJvYXJkLCBpZCkge1xyXG4gICAgY29uc3QgZG9tR2FtZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkb21HYW1lQm9hcmQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XHJcbiAgICBkb21HYW1lQm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgIGNvbnN0IHJvd3MgPSBnYW1lQm9hcmQuZ2V0TnVtYmVyT2ZSb3dzKCk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gZ2FtZUJvYXJkLmdldE51bWJlck9mQ29sdW1ucygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gY3JlYXRlQ2VsbChpLCBqKTtcclxuICAgICAgICBpZiAoaWQgPT09ICdwbGF5ZXItZ2FtZWJvYXJkJykge1xyXG4gICAgICAgICAgYWRkRHJvcEZ1bmN0aW9uYWxpdHkoY2VsbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFkZEF0YWNrRnVuY3Rpb25hbGl0eShjZWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9tR2FtZUJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkb21HYW1lQm9hcmQuc3R5bGVbXHJcbiAgICAgICdncmlkLXRlbXBsYXRlLXJvd3MnXHJcbiAgICBdID0gYHJlcGVhdCgke2dhbWVCb2FyZC5nZXROdW1iZXJPZlJvd3MoKX0sIDFmcilgO1xyXG4gICAgZG9tR2FtZUJvYXJkLnN0eWxlW1xyXG4gICAgICAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ1xyXG4gICAgXSA9IGByZXBlYXQoJHtnYW1lQm9hcmQuZ2V0TnVtYmVyT2ZDb2x1bW5zKCl9LCAxZnIpYDtcclxuXHJcbiAgICByZXR1cm4gZG9tR2FtZUJvYXJkO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnNoaXBgKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBhZGREcmFnRnVuY3Rpb25hbGl0eShlbGVtZW50KTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaG92ZXJDZWxsQW5kSXRzTmVhckNlbGxzKHgsIHksIHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgY3VycmVudENlbGw7XHJcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgY3VycmVudENlbGwgPSBwbGF5ZXJEb21HYW1lQm9hcmQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIGAuY2VsbFtkYXRhLXgtcG9zaXRpb249XCIke3h9XCJdW2RhdGEteS1wb3NpdGlvbj1cIiR7eSArIGl9XCJdYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdmVydGljYWxcclxuICAgICAgICBjdXJyZW50Q2VsbCA9IHBsYXllckRvbUdhbWVCb2FyZC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgYC5jZWxsW2RhdGEteC1wb3NpdGlvbj1cIiR7eCArIGl9XCJdW2RhdGEteS1wb3NpdGlvbj1cIiR7eX1cIl1gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50Q2VsbC5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkLWNlbGwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUhvdmVyQ2VsbEFuZE5lYXJDZWxscygpIHtcclxuICAgIHBsYXllckRvbUdhbWVCb2FyZFxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmhvdmVyZWQtY2VsbCcpXHJcbiAgICAgIC5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQtY2VsbCcpKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0ZS1zaGlwcy1idG4nKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcHMpO1xyXG5cclxuICBmdW5jdGlvbiByb3RhdGVTaGlwcygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50T3JpZW50YXRpb24gPSBzaGlwLmdldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLW9yaWVudGF0aW9uJyk7XHJcbiAgICAgIGNvbnN0IHJvdGF0ZWRPcmllbnRhdGlvbiA9XHJcbiAgICAgICAgY3VycmVudE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xyXG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLW9yaWVudGF0aW9uJywgcm90YXRlZE9yaWVudGF0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LXNoaXBzLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVzZXRTaGlwcygpO1xyXG4gICAgdXBkYXRlRGlzcGxheShwbGF5ZXJHYW1lQm9hcmQsIHBsYXllckRvbUdhbWVCb2FyZCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0U2hpcHMoKSB7XHJcbiAgICBkaXNhYmxlUGxheUJ1dHRvbigpO1xyXG4gICAgcGxheWVyR2FtZUJvYXJkLmNsZWFyR2FtZUJvYXJkKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VkLXNoaXAnKS5mb3JFYWNoKChwbGFjZWRTaGlwKSA9PiB7XHJcbiAgICAgIHBsYWNlZFNoaXAuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2VkLXNoaXAnKTtcclxuICAgICAgcGxhY2VkU2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZy1lbGVtZW50Jyk7XHJcbiAgICAgIGFkZERyYWdGdW5jdGlvbmFsaXR5KHBsYWNlZFNoaXApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsZXQgY3VycmVudERyYWdnaW5nRWxlbWVudDtcclxuXHJcbiAgZnVuY3Rpb24gYWRkRHJvcEZ1bmN0aW9uYWxpdHkoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKCFjdXJyZW50RHJhZ2dpbmdFbGVtZW50KSByZXR1cm47XHJcbiAgICAgIHJlbW92ZUhvdmVyQ2VsbEFuZE5lYXJDZWxscygpO1xyXG4gICAgICBjb25zdCB4ID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXgtcG9zaXRpb24nKSk7XHJcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEteS1wb3NpdGlvbicpKTtcclxuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IE51bWJlcihcclxuICAgICAgICBjdXJyZW50RHJhZ2dpbmdFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLWxlbmd0aCcpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gY3VycmVudERyYWdnaW5nRWxlbWVudC5nZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgJ2RhdGEtc2hpcC1vcmllbnRhdGlvbidcclxuICAgICAgKTtcclxuICAgICAgaWYgKHBsYXllckdhbWVCb2FyZC5pc1NoaXBQbGFjZVZhbGlkKHgsIHksIHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCcpO1xyXG4gICAgICAgIGhvdmVyQ2VsbEFuZEl0c05lYXJDZWxscyh4LCB5LCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoIWN1cnJlbnREcmFnZ2luZ0VsZW1lbnQpIHJldHVybjtcclxuICAgICAgY29uc3QgY2VsbFRvUGxhY2VTaGlwID0gZS50YXJnZXQ7XHJcbiAgICAgIGNvbnN0IHggPSBOdW1iZXIoY2VsbFRvUGxhY2VTaGlwLmdldEF0dHJpYnV0ZSgnZGF0YS14LXBvc2l0aW9uJykpO1xyXG4gICAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGxUb1BsYWNlU2hpcC5nZXRBdHRyaWJ1dGUoJ2RhdGEteS1wb3NpdGlvbicpKTtcclxuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IE51bWJlcihcclxuICAgICAgICBjdXJyZW50RHJhZ2dpbmdFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLWxlbmd0aCcpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gY3VycmVudERyYWdnaW5nRWxlbWVudC5nZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgJ2RhdGEtc2hpcC1vcmllbnRhdGlvbidcclxuICAgICAgKTtcclxuICAgICAgaWYgKHBsYXllckdhbWVCb2FyZC5pc1NoaXBQbGFjZVZhbGlkKHgsIHksIHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoeCwgeSwgc2hpcExlbmd0aCwgb3JpZW50YXRpb24pO1xyXG4gICAgICAgIGN1cnJlbnREcmFnZ2luZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxhY2VkLXNoaXAnKTtcclxuICAgICAgICB1cGRhdGVEaXNwbGF5KHBsYXllckdhbWVCb2FyZCwgcGxheWVyRG9tR2FtZUJvYXJkKTtcclxuICAgICAgICByZW1vdmVEcmFnRnVuY3Rpb25hbGl0eShjdXJyZW50RHJhZ2dpbmdFbGVtZW50KTtcclxuICAgICAgICByZW1vdmVIb3ZlckNlbGxBbmROZWFyQ2VsbHMoKTtcclxuICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkLmFsbFRoZVNoaXBzSGF2ZUJlZW5QbGFjZWQoKSkge1xyXG4gICAgICAgICAgZW5hYmxlUGxheUJ1dHRvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50RHJhZ2dpbmdFbGVtZW50ID0gbnVsbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkQXRhY2tGdW5jdGlvbmFsaXR5KGNlbGwpIHtcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmIChnYW1lLmdldEN1cnJlbnRQbGF5ZXJUdXJuKCkgIT09IHBsYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB4ID0gTnVtYmVyKGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgtcG9zaXRpb24nKSk7XHJcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteS1wb3NpdGlvbicpKTtcclxuICAgICAgY29uc3QgW3N1Y2Nlc2Z1bEF0dGFjaywgbXNnXSA9IHBsYXllci5hdHRhY2soeCwgeSwgY29tcHV0ZXJHYW1lQm9hcmQpO1xyXG4gICAgICBpZiAoc3VjY2VzZnVsQXR0YWNrKSB7XHJcbiAgICAgICAgZ2FtZS5zZXRDdXJyZW50UGxheWVyVHVybihjb21wdXRlcik7XHJcbiAgICAgICAgdXBkYXRlRGlzcGxheShjb21wdXRlckdhbWVCb2FyZCwgY29tcHV0ZXJEb21HYW1lQm9hcmQpO1xyXG4gICAgICAgIGlmIChjb21wdXRlckdhbWVCb2FyZC5hbGxUaGVTaGlwc0hhdmVCZWVuU3VuaygpKSB7XHJcbiAgICAgICAgICBnYW1lLmVuZChwbGF5ZXIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb21wdXRlci5hdHRhY2tSYW5kb21seShwbGF5ZXJHYW1lQm9hcmQpO1xyXG4gICAgICAgIHVwZGF0ZURpc3BsYXkocGxheWVyR2FtZUJvYXJkLCBwbGF5ZXJEb21HYW1lQm9hcmQpO1xyXG4gICAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmQuYWxsVGhlU2hpcHNIYXZlQmVlblN1bmsoKSkge1xyXG4gICAgICAgICAgZ2FtZS5lbmQoY29tcHV0ZXIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lLnNldEN1cnJlbnRQbGF5ZXJUdXJuKHBsYXllcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZXZlbnQpIHtcclxuICAgIGN1cnJlbnREcmFnZ2luZ0VsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY3VycmVudERyYWdnaW5nRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZy1lbGVtZW50Jyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkRyYWdFbmQoZXZlbnQpIHtcclxuICAgIGN1cnJlbnREcmFnZ2luZ0VsZW1lbnQgPSBudWxsO1xyXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nLWVsZW1lbnQnKTtcclxuICAgIHBsYXllckRvbUdhbWVCb2FyZFxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmhvdmVyZWQtY2VsbCcpXHJcbiAgICAgIC5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQtY2VsbCcpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZERyYWdGdW5jdGlvbmFsaXR5KGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBvbkRyYWdTdGFydCk7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBvbkRyYWdFbmQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlRHJhZ0Z1bmN0aW9uYWxpdHkoZWxlbWVudCkge1xyXG4gICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJyk7XHJcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIG9uRHJhZ1N0YXJ0KTtcclxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIG9uRHJhZ0VuZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyB1cGRhdGVEaXNwbGF5IH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZShwbGF5ZXIsIGNvbXB1dGVyKSB7XHJcbiAgbGV0IGN1cnJlbnRUdXJuID0gcGxheWVyO1xyXG5cclxuICBmdW5jdGlvbiBnZXRQbGF5ZXIoKSB7XHJcbiAgICByZXR1cm4gcGxheWVyO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q29tcHV0ZXIoKSB7XHJcbiAgICByZXR1cm4gY29tcHV0ZXI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDdXJyZW50UGxheWVyVHVybigpIHtcclxuICAgIHJldHVybiBjdXJyZW50VHVybjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEN1cnJlbnRQbGF5ZXJUdXJuKHBsYXllcikge1xyXG4gICAgY3VycmVudFR1cm4gPSBwbGF5ZXI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbmQocGxheWVyKSB7XHJcbiAgICBhbGVydChgJHtwbGF5ZXIuZ2V0TmFtZSgpfSB3aW5zISEhIWApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldFBsYXllcixcclxuICAgIGdldENvbXB1dGVyLFxyXG4gICAgZ2V0Q3VycmVudFBsYXllclR1cm4sXHJcbiAgICBzZXRDdXJyZW50UGxheWVyVHVybixcclxuICAgIGVuZCxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoeExlbmd0aCA9IDEwLCB5TGVuZ3RoID0gMTApIHtcclxuICBjb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKHhMZW5ndGgsIHlMZW5ndGgpO1xyXG4gIC8vIHRoaXMgaXMgYW4gYXJyYXkgdGhhdCB3aWxsIGtlZXAgYWxsIHRoZSBwbGFjZWQgU2hpcCBvYmplY3RzLCBhbmQgaXRzIGdvaW5nIHRvIGJlIHVzZWZ1bFxyXG4gIC8vIGZvciB0aGUgYWxsVGhlU2hpcHNIYXZlQmVlblN1bmsgbWV0aG9kICh0byBhdm9pZCBkb3VibGUgbG9vcGluZyB0aGUgYm9hcmQgYW5kIHNlYXJjaGluZyB3aGVyZSBhcmUgdGhlIHNoaXBzKVxyXG4gIGxldCBwbGFjZWRTaGlwcyA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZCh4TGVuZ3RoLCB5TGVuZ3RoKSB7XHJcbiAgICBjb25zdCBuZXdCb2FyZCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4TGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgcm93ID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgeUxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgcm93W2pdID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgbmV3Qm9hcmQucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0JvYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XHJcbiAgICByZXR1cm4gYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXROdW1iZXJPZlJvd3MoKSB7XHJcbiAgICByZXR1cm4gYm9hcmQubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TnVtYmVyT2ZDb2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIGJvYXJkWzBdLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVuc3VyZVNoaXBQbGFjZUlzTm90T3V0T2ZCb3VuZHMoZW5kaW5nUG9zaXRpb24sIGxpbWl0KSB7XHJcbiAgICByZXR1cm4gZW5kaW5nUG9zaXRpb24gPCBsaW1pdDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzVGhlcmVBU2hpcEhvcml6b250YWxseSh4LCB5LCBzaGlwTGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHR5cGVvZiBib2FyZFt4XVtpXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNUaGVyZUFTaGlwVmVydGljYWxseSh4LCB5LCBzaGlwTGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHR5cGVvZiBib2FyZFtpXVt5XSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNTaGlwUGxhY2VWYWxpZCh4LCB5LCBzaGlwTGVuZ3RoLCBzaGlwT3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCcpIHtcclxuICAgIGNvbnN0IGlzU2hpcFBsYWNlbWVudE91dE9mQm91bmRzID1cclxuICAgICAgc2hpcE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCdcclxuICAgICAgICA/IGVuc3VyZVNoaXBQbGFjZUlzTm90T3V0T2ZCb3VuZHMoXHJcbiAgICAgICAgICAgIHkgKyBzaGlwTGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgZ2V0TnVtYmVyT2ZDb2x1bW5zKClcclxuICAgICAgICAgIClcclxuICAgICAgICA6IGVuc3VyZVNoaXBQbGFjZUlzTm90T3V0T2ZCb3VuZHMoXHJcbiAgICAgICAgICAgIHggKyBzaGlwTGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgZ2V0TnVtYmVyT2ZSb3dzKClcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgaWYgKCFpc1NoaXBQbGFjZW1lbnRPdXRPZkJvdW5kcykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNUaGVyZUFTaGlwQWxyZWFkeSA9XHJcbiAgICAgIHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnXHJcbiAgICAgICAgPyBpc1RoZXJlQVNoaXBIb3Jpem9udGFsbHkoeCwgeSwgc2hpcExlbmd0aClcclxuICAgICAgICA6IGlzVGhlcmVBU2hpcFZlcnRpY2FsbHkoeCwgeSwgc2hpcExlbmd0aCk7XHJcblxyXG4gICAgaWYgKGlzVGhlcmVBU2hpcEFscmVhZHkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHgsIHksIHNoaXBMZW5ndGgsIHNoaXBPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJykge1xyXG4gICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgIHBsYWNlU2hpcEhvcml6b250YWxseSh4LCB5LCBzaGlwTGVuZ3RoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsYWNlU2hpcFZlcnRpY2FsbHkoeCwgeSwgc2hpcExlbmd0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZVNoaXBWZXJ0aWNhbGx5KHgsIHksIHNoaXBMZW5ndGgpIHtcclxuICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGJvYXJkW2ldW3ldID0gc2hpcDtcclxuICAgIH1cclxuICAgIHBsYWNlZFNoaXBzLnB1c2goc2hpcCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZVNoaXBIb3Jpem9udGFsbHkoeCwgeSwgc2hpcExlbmd0aCkge1xyXG4gICAgY29uc3Qgc2hpcCA9IFNoaXAoc2hpcExlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgYm9hcmRbeF1baV0gPSBzaGlwO1xyXG4gICAgfVxyXG4gICAgcGxhY2VkU2hpcHMucHVzaChzaGlwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcFJhbmRvbWx5KHNoaXBMZW5ndGgpIHtcclxuICAgIGNvbnN0IG9yaWVudGF0aW9ucyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdldE51bWJlck9mUm93cygpKTtcclxuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdldE51bWJlck9mQ29sdW1ucygpKTtcclxuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPVxyXG4gICAgICAgIG9yaWVudGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcmllbnRhdGlvbnMubGVuZ3RoKV07XHJcbiAgICAgIGlmIChpc1NoaXBQbGFjZVZhbGlkKHgsIHksIHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgIHBsYWNlU2hpcCh4LCB5LCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcclxuICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzUsIDQsIDMsIDMsIDJdO1xyXG4gICAgd2hpbGUgKCFhbGxUaGVTaGlwc0hhdmVCZWVuUGxhY2VkKCkpIHtcclxuICAgICAgc2hpcExlbmd0aHMuZm9yRWFjaCgoc2hpcExlbmd0aCkgPT4ge1xyXG4gICAgICAgIHBsYWNlU2hpcFJhbmRvbWx5KHNoaXBMZW5ndGgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG4gICAgY29uc3Qgb2JqZWN0QXRDdXJyZW50Q29yZGluYXRlID0gYm9hcmRbeF1beV07XHJcbiAgICAvLyBjb29yZGluYXRlIGFscmVhZHkgaGl0XHJcbiAgICBpZiAoXHJcbiAgICAgIG9iamVjdEF0Q3VycmVudENvcmRpbmF0ZSA9PT0gJ2hpdCcgfHxcclxuICAgICAgb2JqZWN0QXRDdXJyZW50Q29yZGluYXRlID09PSAnbWlzcydcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gW2ZhbHNlLCAnQ2VsbCBhbHJlYWR5IGhpdCddO1xyXG4gICAgfVxyXG4gICAgLy8gbWlzc1xyXG4gICAgaWYgKG9iamVjdEF0Q3VycmVudENvcmRpbmF0ZSA9PT0gJycpIHtcclxuICAgICAgYm9hcmRbeF1beV0gPSAnbWlzcyc7XHJcbiAgICAgIHJldHVybiBbdHJ1ZSwgJ01pc3MnXTtcclxuICAgIH1cclxuICAgIC8vIHRoZXJlIGlzIGEgc2hpcFxyXG4gICAgb2JqZWN0QXRDdXJyZW50Q29yZGluYXRlLmhpdCgpO1xyXG4gICAgYm9hcmRbeF1beV0gPSAnaGl0JztcclxuICAgIHJldHVybiBbdHJ1ZSwgJ1N1Y2Nlc2Z1bCBoaXQnXTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFsbFRoZVNoaXBzSGF2ZUJlZW5QbGFjZWQoKSB7XHJcbiAgICByZXR1cm4gcGxhY2VkU2hpcHMubGVuZ3RoID09PSA1O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWxsVGhlU2hpcHNIYXZlQmVlblN1bmsoKSB7XHJcbiAgICAvLyBpZiBhdGxlYXN0IG9uZSBzaGlwIGhhc24ndCBiZWVuIHN1bmssIHRoZW4gcmV0dXJuIGZhbHNlXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYWNlZFNoaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghcGxhY2VkU2hpcHNbaV0uaXNTdW5rKCkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJHYW1lQm9hcmQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHhMZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHlMZW5ndGg7IGorKykge1xyXG4gICAgICAgIGJvYXJkW2ldW2pdID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBsYWNlZFNoaXBzID0gW107XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0U3RhdGUsXHJcbiAgICBnZXROdW1iZXJPZlJvd3MsXHJcbiAgICBnZXROdW1iZXJPZkNvbHVtbnMsXHJcbiAgICBpc1NoaXBQbGFjZVZhbGlkLFxyXG4gICAgcGxhY2VTaGlwLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIHBsYWNlU2hpcHNSYW5kb21seSxcclxuICAgIGFsbFRoZVNoaXBzSGF2ZUJlZW5QbGFjZWQsXHJcbiAgICBhbGxUaGVTaGlwc0hhdmVCZWVuU3VuayxcclxuICAgIGNsZWFyR2FtZUJvYXJkLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2dhbWVCb2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xyXG4gIGNvbnN0IGdhbWVCb2FyZCA9IEdhbWVCb2FyZCgpO1xyXG5cclxuICBmdW5jdGlvbiBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIG5hbWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRHYW1lQm9hcmQoKSB7XHJcbiAgICByZXR1cm4gZ2FtZUJvYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXR0YWNrKHgsIHksIGVuZW15R2FtZUJvYXJkKSB7XHJcbiAgICByZXR1cm4gZW5lbXlHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGdldE5hbWUsIGdldEdhbWVCb2FyZCwgYXR0YWNrIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChzaGlwTGVuZ3RoKSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gc2hpcExlbmd0aDtcclxuICBsZXQgaGl0cyA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGhpdCgpIHtcclxuICAgIGhpdHMrKztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcclxuICAgIHJldHVybiBsZW5ndGggPT09IGhpdHM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBoaXQsIGlzU3VuayB9O1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSAnLi9jb21wdXRlcic7XHJcbmltcG9ydCB7IERPTUhhbmRsZXIgfSBmcm9tICcuL2RvbSc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XHJcblxyXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCdMdWlzJyk7XHJcblxyXG5jb25zdCBjb21wdXRlciA9IG5ldyBDb21wdXRlcignQ29tcHV0ZXInKTtcclxuXHJcbmNvbnN0IGdhbWUgPSBHYW1lKHBsYXllciwgY29tcHV0ZXIpO1xyXG5cclxuY29uc3QgZG9tSGFuZGxlciA9IERPTUhhbmRsZXIoZ2FtZSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==