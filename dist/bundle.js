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

.cell:hover {
  cursor: cell;
  background-color: blue;
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
`, "",{"version":3,"sources":["webpack://./src/assets/gameBoard.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,OAAO;EACP,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,OAAO;EACP,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n}\r\n\r\n#game {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 24px;\r\n  height: 75vh;\r\n}\r\n\r\n#gameboards-container {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-wrap: wrap;\r\n  gap: 32px;\r\n  padding: 24px;\r\n}\r\n\r\n.gameboard {\r\n  display: grid;\r\n  flex: 1;\r\n  min-width: 250px;\r\n  max-width: 400px;\r\n  aspect-ratio: 1 / 1;\r\n}\r\n\r\n.cell {\r\n  border: 1px solid black;\r\n}\r\n\r\n.cell:hover {\r\n  cursor: cell;\r\n  background-color: blue;\r\n}\r\n\r\n#ships-container {\r\n  width: 30%;\r\n  text-align: center;\r\n}\r\n\r\n.ships {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 32px;\r\n}\r\n\r\n.ship {\r\n  display: flex;\r\n  cursor: move;\r\n}\r\n\r\n.ship[data-ship-orientation='horizontal'] {\r\n  flex-direction: row;\r\n}\r\n\r\n.ship[data-ship-orientation='vertical'] {\r\n  flex-direction: column;\r\n}\r\n\r\n.ship-cell {\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.dragging-element {\r\n  opacity: 0.5;\r\n}\r\n\r\n.hovered-cell {\r\n  background-color: green;\r\n}\r\n\r\n.placed-ship {\r\n  border: 2px dashed black;\r\n  opacity: 0.5;\r\n  cursor: no-drop;\r\n}\r\n\r\n.ship-cell-placed {\r\n  border: 2px solid yellow;\r\n  background-color: coral;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMHandler)
/* harmony export */ });
/* harmony import */ var _assets_gameBoard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/gameBoard.css */ "./src/assets/gameBoard.css");


function DOMHandler(gameBoard, gameBoardId) {
  const gameBoardsContainer = document.getElementById('gameboards-container');
  const domGameBoard = document.createElement('div');
  domGameBoard.setAttribute('id', gameBoardId);
  domGameBoard.classList.add('gameboard');

  const playBtn = document.getElementById('play-btn');

  playBtn.addEventListener('click', () => {
    removeShipsContainer();
    playBtn.remove();
  });

  document
    .getElementById('randomize-ships-btn')
    .addEventListener('click', randomizeShips);

  function randomizeShips() {
    resetShips();
    gameBoard.placeShipsRandomly();
    updateDisplay();
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
    // atack
    cell.addEventListener('click', () => {
      console.log(
        cell.getAttribute('data-x-position'),
        cell.getAttribute('data-y-position')
      );
    });

    addDropFunctionality(cell);

    return cell;
  }

  function updateDisplay() {
    const gameBoardState = gameBoard.getState();
    const domGameBoard = document.querySelector(`.gameboard#${gameBoardId}`);
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
        } else {
          const cell = domGameBoard.querySelector(
            `.cell[data-x-position="${i}"][data-y-position="${j}"]`
          );
          cell.classList.add('ship-cell-placed');
        }
      }
    }
  }

  function removeShipsContainer() {
    document.getElementById('ships-container').remove();
  }

  function displayGameboard() {
    const rows = gameBoard.getNumberOfRows();
    const columns = gameBoard.getNumberOfColumns();
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        domGameBoard.appendChild(createCell(i, j));
      }
    }
    domGameBoard.style['grid-template-rows'] = 'repeat(10, 1fr)';
    domGameBoard.style['grid-template-columns'] = 'repeat(10, 1fr)';

    gameBoardsContainer.appendChild(domGameBoard);
  }

  // esta se puede repetir al crear a la computadora CAMBIAR
  document.querySelectorAll(`.ship`).forEach((element) => {
    addDragFunctionality(element);
  });

  function hoverCellAndItsNearCells(x, y, shipLength, orientation) {
    for (let i = 0; i < shipLength; i++) {
      let currentCell;
      if (orientation === 'horizontal') {
        currentCell = document.querySelector(
          `.cell[data-x-position="${x}"][data-y-position="${y + i}"]`
        );
      } else {
        // vertical
        currentCell = document.querySelector(
          `.cell[data-x-position="${x + i}"][data-y-position="${y}"]`
        );
      }
      currentCell.classList.add('hovered-cell');
    }
  }

  function removeHoverCellAndNearCells() {
    domGameBoard
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
    updateDisplay();
  });

  function resetShips() {
    disablePlayButton();
    gameBoard.clearGameBoard();
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
      if (gameBoard.isShipPlaceValid(x, y, shipLength, orientation)) {
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
      if (gameBoard.isShipPlaceValid(x, y, shipLength, orientation)) {
        gameBoard.placeShip(x, y, shipLength, orientation);
        currentDraggingElement.classList.add('placed-ship');
        updateDisplay();
        removeDragFunctionality(currentDraggingElement);
        removeHoverCellAndNearCells();
        if (gameBoard.allTheShipsHaveBeenPlaced()) {
          enablePlayButton();
        }
      }
      currentDraggingElement = null;
    });
  }

  function onDragStart(event) {
    currentDraggingElement = event.currentTarget;
    currentDraggingElement.classList.add('dragging-element');
  }

  function onDragEnd(event) {
    currentDraggingElement = null;
    event.target.classList.remove('dragging-element');
    document
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

  return { displayGameboard, updateDisplay };
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
    if (objectAtCurrentCordinate === 'hit') {
      return [false, 'Cell already hit'];
    }
    // miss
    if (objectAtCurrentCordinate === '') {
      board[x][y] = 'hit';
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


function Player(playerName) {
  const name = playerName;
  const gameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  // place ships
  // ...
  // play
  // ...

  function getName() {
    return name;
  }

  function getGameBoard() {
    return gameBoard;
  }

  function attack(x, y, enemyGameBoard) {
    enemyGameBoard.receiveAttack(x, y);
  }

  function hasPlacedAllShips() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        if (gameBoard.allTheShipsHaveBeenPlaced()) {
          resolve(true);
        }
      }, 1000);
    });
  }

  return { getName, getGameBoard, attack, hasPlacedAllShips };
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]('luis');

const computer = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]('computer');

// const domHandler = DOMHandler(player.getGameBoard(), computer.getGameBoard());

const playerDomHandler = (0,_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(player.getGameBoard(), 'player');

// const computerDomHandler = DOMHandler(computer.getGameBoard(), 'computer');

playerDomHandler.displayGameboard();

// await player.hasPlacedAllShips();

// computerDomHandler.displayGameboard();

console.log('xd');

// TODOS
/*
-resolver lo de repetir eventos, talvez cambiar de posicion a .ships
-agregar mas validaciones al posicionamiento de las naves
-rotar nave
-resetear posiciones
*/

// const computerDomHandler = DOMHandler(computer.getGameBoard(), 'computer');

// computerDomHandler.displayGameboard();

// playerGameboard.placeShip(0, 0, 5, 'horizontal');
// playerGameboard.placeShip(9, 3, 4, 'horizontal');
// playerGameboard.placeShip(5, 1, 3, 'vertical');
// playerGameboard.placeShip(6, 5, 3, 'horizontal');
// playerGameboard.placeShip(8, 7, 2, 'horizontal');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9nYW1lQm9hcmQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9nYW1lQm9hcmQuY3NzPzgxMDciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiNnYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMjRweDtcclxuICBoZWlnaHQ6IDc1dmg7XHJcbn1cclxuXHJcbiNnYW1lYm9hcmRzLWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDMycHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuLmdhbWVib2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5jZWxsOmhvdmVyIHtcclxuICBjdXJzb3I6IGNlbGw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaGlwcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDMycHg7XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuLnNoaXBbZGF0YS1zaGlwLW9yaWVudGF0aW9uPSdob3Jpem9udGFsJ10ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5zaGlwW2RhdGEtc2hpcC1vcmllbnRhdGlvbj0ndmVydGljYWwnXSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNoaXAtY2VsbCB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZHJhZ2dpbmctZWxlbWVudCB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uaG92ZXJlZC1jZWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnBsYWNlZC1zaGlwIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgYmxhY2s7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogbm8tZHJvcDtcclxufVxyXG5cclxuLnNoaXAtY2VsbC1wbGFjZWQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvZ2FtZUJvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNnYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDc1dmg7XFxyXFxufVxcclxcblxcclxcbiNnYW1lYm9hcmRzLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgcGFkZGluZzogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jZWxsOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogY2VsbDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbiNzaGlwcy1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5zaGlwW2RhdGEtc2hpcC1vcmllbnRhdGlvbj0naG9yaXpvbnRhbCddIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5zaGlwW2RhdGEtc2hpcC1vcmllbnRhdGlvbj0ndmVydGljYWwnXSB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jZWxsIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2luZy1lbGVtZW50IHtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyZWQtY2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYWNlZC1zaGlwIHtcXHJcXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBibGFjaztcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIGN1cnNvcjogbm8tZHJvcDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2VsbC1wbGFjZWQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZUJvYXJkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZUJvYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2Fzc2V0cy9nYW1lQm9hcmQuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERPTUhhbmRsZXIoZ2FtZUJvYXJkLCBnYW1lQm9hcmRJZCkge1xyXG4gIGNvbnN0IGdhbWVCb2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkcy1jb250YWluZXInKTtcclxuICBjb25zdCBkb21HYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkb21HYW1lQm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsIGdhbWVCb2FyZElkKTtcclxuICBkb21HYW1lQm9hcmQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XHJcblxyXG4gIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1idG4nKTtcclxuXHJcbiAgcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbW92ZVNoaXBzQ29udGFpbmVyKCk7XHJcbiAgICBwbGF5QnRuLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKCdyYW5kb21pemUtc2hpcHMtYnRuJylcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJhbmRvbWl6ZVNoaXBzKTtcclxuXHJcbiAgZnVuY3Rpb24gcmFuZG9taXplU2hpcHMoKSB7XHJcbiAgICByZXNldFNoaXBzKCk7XHJcbiAgICBnYW1lQm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgICB1cGRhdGVEaXNwbGF5KCk7XHJcbiAgICBlbmFibGVQbGF5QnV0dG9uKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbmFibGVQbGF5QnV0dG9uKCkge1xyXG4gICAgcGxheUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkaXNhYmxlUGxheUJ1dHRvbigpIHtcclxuICAgIHBsYXlCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUNlbGwocm93LCBjb2x1bW4pIHtcclxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteC1wb3NpdGlvbicsIHJvdyk7XHJcbiAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS15LXBvc2l0aW9uJywgY29sdW1uKTtcclxuICAgIC8vIGF0YWNrXHJcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS14LXBvc2l0aW9uJyksXHJcbiAgICAgICAgY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteS1wb3NpdGlvbicpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGREcm9wRnVuY3Rpb25hbGl0eShjZWxsKTtcclxuXHJcbiAgICByZXR1cm4gY2VsbDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XHJcbiAgICBjb25zdCBnYW1lQm9hcmRTdGF0ZSA9IGdhbWVCb2FyZC5nZXRTdGF0ZSgpO1xyXG4gICAgY29uc3QgZG9tR2FtZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVib2FyZCMke2dhbWVCb2FyZElkfWApO1xyXG4gICAgY29uc3Qgcm93cyA9IGdhbWVCb2FyZC5nZXROdW1iZXJPZlJvd3MoKTtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBnYW1lQm9hcmQuZ2V0TnVtYmVyT2ZDb2x1bW5zKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIGNvbnN0IG9iamVjdEF0Q3VycmVudENlbGwgPSBnYW1lQm9hcmRTdGF0ZVtpXVtqXTtcclxuICAgICAgICBpZiAob2JqZWN0QXRDdXJyZW50Q2VsbCA9PT0gJycpIHtcclxuICAgICAgICAgIGRvbUdhbWVCb2FyZFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICBgLmNlbGxbZGF0YS14LXBvc2l0aW9uPVwiJHtpfVwiXVtkYXRhLXktcG9zaXRpb249XCIke2p9XCJdYFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLWNlbGwtcGxhY2VkJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvYmplY3RBdEN1cnJlbnRDZWxsID09PSAnaGl0Jykge1xyXG4gICAgICAgICAgZG9tR2FtZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIGAuY2VsbFtkYXRhLXgtcG9zaXRpb249XCIke2l9XCJdW2RhdGEteS1wb3NpdGlvbj1cIiR7an1cIl1gXHJcbiAgICAgICAgICApLnRleHRDb250ZW50ID0gJ2hpdCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb21HYW1lQm9hcmQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgYC5jZWxsW2RhdGEteC1wb3NpdGlvbj1cIiR7aX1cIl1bZGF0YS15LXBvc2l0aW9uPVwiJHtqfVwiXWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY2VsbC1wbGFjZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZVNoaXBzQ29udGFpbmVyKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBzLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGlzcGxheUdhbWVib2FyZCgpIHtcclxuICAgIGNvbnN0IHJvd3MgPSBnYW1lQm9hcmQuZ2V0TnVtYmVyT2ZSb3dzKCk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gZ2FtZUJvYXJkLmdldE51bWJlck9mQ29sdW1ucygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBkb21HYW1lQm9hcmQuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbChpLCBqKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRvbUdhbWVCb2FyZC5zdHlsZVsnZ3JpZC10ZW1wbGF0ZS1yb3dzJ10gPSAncmVwZWF0KDEwLCAxZnIpJztcclxuICAgIGRvbUdhbWVCb2FyZC5zdHlsZVsnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10gPSAncmVwZWF0KDEwLCAxZnIpJztcclxuXHJcbiAgICBnYW1lQm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUdhbWVCb2FyZCk7XHJcbiAgfVxyXG5cclxuICAvLyBlc3RhIHNlIHB1ZWRlIHJlcGV0aXIgYWwgY3JlYXIgYSBsYSBjb21wdXRhZG9yYSBDQU1CSUFSXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnNoaXBgKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBhZGREcmFnRnVuY3Rpb25hbGl0eShlbGVtZW50KTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaG92ZXJDZWxsQW5kSXRzTmVhckNlbGxzKHgsIHksIHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgY3VycmVudENlbGw7XHJcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgY3VycmVudENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgYC5jZWxsW2RhdGEteC1wb3NpdGlvbj1cIiR7eH1cIl1bZGF0YS15LXBvc2l0aW9uPVwiJHt5ICsgaX1cIl1gXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB2ZXJ0aWNhbFxyXG4gICAgICAgIGN1cnJlbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIGAuY2VsbFtkYXRhLXgtcG9zaXRpb249XCIke3ggKyBpfVwiXVtkYXRhLXktcG9zaXRpb249XCIke3l9XCJdYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudENlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZC1jZWxsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVIb3ZlckNlbGxBbmROZWFyQ2VsbHMoKSB7XHJcbiAgICBkb21HYW1lQm9hcmRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3ZlcmVkLWNlbGwnKVxyXG4gICAgICAuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkLWNlbGwnKSk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKCdyb3RhdGUtc2hpcHMtYnRuJylcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVNoaXBzKTtcclxuXHJcbiAgZnVuY3Rpb24gcm90YXRlU2hpcHMoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudE9yaWVudGF0aW9uID0gc2hpcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcC1vcmllbnRhdGlvbicpO1xyXG4gICAgICBjb25zdCByb3RhdGVkT3JpZW50YXRpb24gPVxyXG4gICAgICAgIGN1cnJlbnRPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcclxuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcC1vcmllbnRhdGlvbicsIHJvdGF0ZWRPcmllbnRhdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1zaGlwcy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlc2V0U2hpcHMoKTtcclxuICAgIHVwZGF0ZURpc3BsYXkoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRTaGlwcygpIHtcclxuICAgIGRpc2FibGVQbGF5QnV0dG9uKCk7XHJcbiAgICBnYW1lQm9hcmQuY2xlYXJHYW1lQm9hcmQoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZWQtc2hpcCcpLmZvckVhY2goKHBsYWNlZFNoaXApID0+IHtcclxuICAgICAgcGxhY2VkU2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZWQtc2hpcCcpO1xyXG4gICAgICBwbGFjZWRTaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nLWVsZW1lbnQnKTtcclxuICAgICAgYWRkRHJhZ0Z1bmN0aW9uYWxpdHkocGxhY2VkU2hpcCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxldCBjdXJyZW50RHJhZ2dpbmdFbGVtZW50O1xyXG5cclxuICBmdW5jdGlvbiBhZGREcm9wRnVuY3Rpb25hbGl0eShlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoIWN1cnJlbnREcmFnZ2luZ0VsZW1lbnQpIHJldHVybjtcclxuICAgICAgcmVtb3ZlSG92ZXJDZWxsQW5kTmVhckNlbGxzKCk7XHJcbiAgICAgIGNvbnN0IHggPSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEteC1wb3NpdGlvbicpKTtcclxuICAgICAgY29uc3QgeSA9IE51bWJlcihlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS15LXBvc2l0aW9uJykpO1xyXG4gICAgICBjb25zdCBzaGlwTGVuZ3RoID0gTnVtYmVyKFxyXG4gICAgICAgIGN1cnJlbnREcmFnZ2luZ0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAtbGVuZ3RoJylcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBjdXJyZW50RHJhZ2dpbmdFbGVtZW50LmdldEF0dHJpYnV0ZShcclxuICAgICAgICAnZGF0YS1zaGlwLW9yaWVudGF0aW9uJ1xyXG4gICAgICApO1xyXG4gICAgICBpZiAoZ2FtZUJvYXJkLmlzU2hpcFBsYWNlVmFsaWQoeCwgeSwgc2hpcExlbmd0aCwgb3JpZW50YXRpb24pKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkJyk7XHJcbiAgICAgICAgaG92ZXJDZWxsQW5kSXRzTmVhckNlbGxzKHgsIHksIHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICghY3VycmVudERyYWdnaW5nRWxlbWVudCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBjZWxsVG9QbGFjZVNoaXAgPSBlLnRhcmdldDtcclxuICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsVG9QbGFjZVNoaXAuZ2V0QXR0cmlidXRlKCdkYXRhLXgtcG9zaXRpb24nKSk7XHJcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbFRvUGxhY2VTaGlwLmdldEF0dHJpYnV0ZSgnZGF0YS15LXBvc2l0aW9uJykpO1xyXG4gICAgICBjb25zdCBzaGlwTGVuZ3RoID0gTnVtYmVyKFxyXG4gICAgICAgIGN1cnJlbnREcmFnZ2luZ0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAtbGVuZ3RoJylcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBjdXJyZW50RHJhZ2dpbmdFbGVtZW50LmdldEF0dHJpYnV0ZShcclxuICAgICAgICAnZGF0YS1zaGlwLW9yaWVudGF0aW9uJ1xyXG4gICAgICApO1xyXG4gICAgICBpZiAoZ2FtZUJvYXJkLmlzU2hpcFBsYWNlVmFsaWQoeCwgeSwgc2hpcExlbmd0aCwgb3JpZW50YXRpb24pKSB7XHJcbiAgICAgICAgZ2FtZUJvYXJkLnBsYWNlU2hpcCh4LCB5LCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbik7XHJcbiAgICAgICAgY3VycmVudERyYWdnaW5nRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQtc2hpcCcpO1xyXG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcclxuICAgICAgICByZW1vdmVEcmFnRnVuY3Rpb25hbGl0eShjdXJyZW50RHJhZ2dpbmdFbGVtZW50KTtcclxuICAgICAgICByZW1vdmVIb3ZlckNlbGxBbmROZWFyQ2VsbHMoKTtcclxuICAgICAgICBpZiAoZ2FtZUJvYXJkLmFsbFRoZVNoaXBzSGF2ZUJlZW5QbGFjZWQoKSkge1xyXG4gICAgICAgICAgZW5hYmxlUGxheUJ1dHRvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50RHJhZ2dpbmdFbGVtZW50ID0gbnVsbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZXZlbnQpIHtcclxuICAgIGN1cnJlbnREcmFnZ2luZ0VsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY3VycmVudERyYWdnaW5nRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZy1lbGVtZW50Jyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkRyYWdFbmQoZXZlbnQpIHtcclxuICAgIGN1cnJlbnREcmFnZ2luZ0VsZW1lbnQgPSBudWxsO1xyXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nLWVsZW1lbnQnKTtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuaG92ZXJlZC1jZWxsJylcclxuICAgICAgLmZvckVhY2goKGNlbGwpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZC1jZWxsJykpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkRHJhZ0Z1bmN0aW9uYWxpdHkoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIG9uRHJhZ1N0YXJ0KTtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIG9uRHJhZ0VuZCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVEcmFnRnVuY3Rpb25hbGl0eShlbGVtZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKTtcclxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0Jywgb25EcmFnU3RhcnQpO1xyXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgb25EcmFnRW5kKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGRpc3BsYXlHYW1lYm9hcmQsIHVwZGF0ZURpc3BsYXkgfTtcclxufVxyXG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUJvYXJkKHhMZW5ndGggPSAxMCwgeUxlbmd0aCA9IDEwKSB7XHJcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGVCb2FyZCh4TGVuZ3RoLCB5TGVuZ3RoKTtcclxuICAvLyB0aGlzIGlzIGFuIGFycmF5IHRoYXQgd2lsbCBrZWVwIGFsbCB0aGUgcGxhY2VkIFNoaXAgb2JqZWN0cywgYW5kIGl0cyBnb2luZyB0byBiZSB1c2VmdWxcclxuICAvLyBmb3IgdGhlIGFsbFRoZVNoaXBzSGF2ZUJlZW5TdW5rIG1ldGhvZCAodG8gYXZvaWQgZG91YmxlIGxvb3BpbmcgdGhlIGJvYXJkIGFuZCBzZWFyY2hpbmcgd2hlcmUgYXJlIHRoZSBzaGlwcylcclxuICBsZXQgcGxhY2VkU2hpcHMgPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoeExlbmd0aCwgeUxlbmd0aCkge1xyXG4gICAgY29uc3QgbmV3Qm9hcmQgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHlMZW5ndGg7IGorKykge1xyXG4gICAgICAgIHJvd1tqXSA9ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld0JvYXJkLnB1c2gocm93KTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdCb2FyZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xyXG4gICAgcmV0dXJuIGJvYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TnVtYmVyT2ZSb3dzKCkge1xyXG4gICAgcmV0dXJuIGJvYXJkLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldE51bWJlck9mQ29sdW1ucygpIHtcclxuICAgIHJldHVybiBib2FyZFswXS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbnN1cmVTaGlwUGxhY2VJc05vdE91dE9mQm91bmRzKGVuZGluZ1Bvc2l0aW9uLCBsaW1pdCkge1xyXG4gICAgcmV0dXJuIGVuZGluZ1Bvc2l0aW9uIDwgbGltaXQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1RoZXJlQVNoaXBIb3Jpem9udGFsbHkoeCwgeSwgc2hpcExlbmd0aCkge1xyXG4gICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgYm9hcmRbeF1baV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzVGhlcmVBU2hpcFZlcnRpY2FsbHkoeCwgeSwgc2hpcExlbmd0aCkge1xyXG4gICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgYm9hcmRbaV1beV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzU2hpcFBsYWNlVmFsaWQoeCwgeSwgc2hpcExlbmd0aCwgc2hpcE9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnKSB7XHJcbiAgICBjb25zdCBpc1NoaXBQbGFjZW1lbnRPdXRPZkJvdW5kcyA9XHJcbiAgICAgIHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnXHJcbiAgICAgICAgPyBlbnN1cmVTaGlwUGxhY2VJc05vdE91dE9mQm91bmRzKFxyXG4gICAgICAgICAgICB5ICsgc2hpcExlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgIGdldE51bWJlck9mQ29sdW1ucygpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgOiBlbnN1cmVTaGlwUGxhY2VJc05vdE91dE9mQm91bmRzKFxyXG4gICAgICAgICAgICB4ICsgc2hpcExlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgIGdldE51bWJlck9mUm93cygpXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgIGlmICghaXNTaGlwUGxhY2VtZW50T3V0T2ZCb3VuZHMpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzVGhlcmVBU2hpcEFscmVhZHkgPVxyXG4gICAgICBzaGlwT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJ1xyXG4gICAgICAgID8gaXNUaGVyZUFTaGlwSG9yaXpvbnRhbGx5KHgsIHksIHNoaXBMZW5ndGgpXHJcbiAgICAgICAgOiBpc1RoZXJlQVNoaXBWZXJ0aWNhbGx5KHgsIHksIHNoaXBMZW5ndGgpO1xyXG5cclxuICAgIGlmIChpc1RoZXJlQVNoaXBBbHJlYWR5KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcCh4LCB5LCBzaGlwTGVuZ3RoLCBzaGlwT3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCcpIHtcclxuICAgIGlmIChzaGlwT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICBwbGFjZVNoaXBIb3Jpem9udGFsbHkoeCwgeSwgc2hpcExlbmd0aCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGFjZVNoaXBWZXJ0aWNhbGx5KHgsIHksIHNoaXBMZW5ndGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxhY2VTaGlwVmVydGljYWxseSh4LCB5LCBzaGlwTGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzaGlwID0gU2hpcChzaGlwTGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICBib2FyZFtpXVt5XSA9IHNoaXA7XHJcbiAgICB9XHJcbiAgICBwbGFjZWRTaGlwcy5wdXNoKHNoaXApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxhY2VTaGlwSG9yaXpvbnRhbGx5KHgsIHksIHNoaXBMZW5ndGgpIHtcclxuICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGJvYXJkW3hdW2ldID0gc2hpcDtcclxuICAgIH1cclxuICAgIHBsYWNlZFNoaXBzLnB1c2goc2hpcCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZVNoaXBSYW5kb21seShzaGlwTGVuZ3RoKSB7XHJcbiAgICBjb25zdCBvcmllbnRhdGlvbnMgPSBbJ2hvcml6b250YWwnLCAndmVydGljYWwnXTtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnZXROdW1iZXJPZlJvd3MoKSk7XHJcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnZXROdW1iZXJPZkNvbHVtbnMoKSk7XHJcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID1cclxuICAgICAgICBvcmllbnRhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3JpZW50YXRpb25zLmxlbmd0aCldO1xyXG4gICAgICBpZiAoaXNTaGlwUGxhY2VWYWxpZCh4LCB5LCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbikpIHtcclxuICAgICAgICBwbGFjZVNoaXAoeCwgeSwgc2hpcExlbmd0aCwgb3JpZW50YXRpb24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZVNoaXBzUmFuZG9tbHkoKSB7XHJcbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LCA0LCAzLCAzLCAyXTtcclxuICAgIHdoaWxlICghYWxsVGhlU2hpcHNIYXZlQmVlblBsYWNlZCgpKSB7XHJcbiAgICAgIHNoaXBMZW5ndGhzLmZvckVhY2goKHNoaXBMZW5ndGgpID0+IHtcclxuICAgICAgICBwbGFjZVNoaXBSYW5kb21seShzaGlwTGVuZ3RoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcclxuICAgIGNvbnN0IG9iamVjdEF0Q3VycmVudENvcmRpbmF0ZSA9IGJvYXJkW3hdW3ldO1xyXG4gICAgLy8gY29vcmRpbmF0ZSBhbHJlYWR5IGhpdFxyXG4gICAgaWYgKG9iamVjdEF0Q3VycmVudENvcmRpbmF0ZSA9PT0gJ2hpdCcpIHtcclxuICAgICAgcmV0dXJuIFtmYWxzZSwgJ0NlbGwgYWxyZWFkeSBoaXQnXTtcclxuICAgIH1cclxuICAgIC8vIG1pc3NcclxuICAgIGlmIChvYmplY3RBdEN1cnJlbnRDb3JkaW5hdGUgPT09ICcnKSB7XHJcbiAgICAgIGJvYXJkW3hdW3ldID0gJ2hpdCc7XHJcbiAgICAgIHJldHVybiBbdHJ1ZSwgJ01pc3MnXTtcclxuICAgIH1cclxuICAgIC8vIHRoZXJlIGlzIGEgc2hpcFxyXG4gICAgb2JqZWN0QXRDdXJyZW50Q29yZGluYXRlLmhpdCgpO1xyXG4gICAgYm9hcmRbeF1beV0gPSAnaGl0JztcclxuICAgIHJldHVybiBbdHJ1ZSwgJ1N1Y2Nlc2Z1bCBoaXQnXTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFsbFRoZVNoaXBzSGF2ZUJlZW5QbGFjZWQoKSB7XHJcbiAgICByZXR1cm4gcGxhY2VkU2hpcHMubGVuZ3RoID09PSA1O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWxsVGhlU2hpcHNIYXZlQmVlblN1bmsoKSB7XHJcbiAgICAvLyBpZiBhdGxlYXN0IG9uZSBzaGlwIGhhc24ndCBiZWVuIHN1bmssIHRoZW4gcmV0dXJuIGZhbHNlXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYWNlZFNoaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghcGxhY2VkU2hpcHNbaV0uaXNTdW5rKCkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJHYW1lQm9hcmQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHhMZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHlMZW5ndGg7IGorKykge1xyXG4gICAgICAgIGJvYXJkW2ldW2pdID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBsYWNlZFNoaXBzID0gW107XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0U3RhdGUsXHJcbiAgICBnZXROdW1iZXJPZlJvd3MsXHJcbiAgICBnZXROdW1iZXJPZkNvbHVtbnMsXHJcbiAgICBpc1NoaXBQbGFjZVZhbGlkLFxyXG4gICAgcGxhY2VTaGlwLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIHBsYWNlU2hpcHNSYW5kb21seSxcclxuICAgIGFsbFRoZVNoaXBzSGF2ZUJlZW5QbGFjZWQsXHJcbiAgICBhbGxUaGVTaGlwc0hhdmVCZWVuU3VuayxcclxuICAgIGNsZWFyR2FtZUJvYXJkLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2dhbWVCb2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIocGxheWVyTmFtZSkge1xyXG4gIGNvbnN0IG5hbWUgPSBwbGF5ZXJOYW1lO1xyXG4gIGNvbnN0IGdhbWVCb2FyZCA9IEdhbWVCb2FyZCgpO1xyXG4gIC8vIHBsYWNlIHNoaXBzXHJcbiAgLy8gLi4uXHJcbiAgLy8gcGxheVxyXG4gIC8vIC4uLlxyXG5cclxuICBmdW5jdGlvbiBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIG5hbWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRHYW1lQm9hcmQoKSB7XHJcbiAgICByZXR1cm4gZ2FtZUJvYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXR0YWNrKHgsIHksIGVuZW15R2FtZUJvYXJkKSB7XHJcbiAgICBlbmVteUdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFzUGxhY2VkQWxsU2hpcHMoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGdhbWVCb2FyZC5hbGxUaGVTaGlwc0hhdmVCZWVuUGxhY2VkKCkpIHtcclxuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgZ2V0TmFtZSwgZ2V0R2FtZUJvYXJkLCBhdHRhY2ssIGhhc1BsYWNlZEFsbFNoaXBzIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChzaGlwTGVuZ3RoKSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gc2hpcExlbmd0aDtcclxuICBsZXQgaGl0cyA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGhpdCgpIHtcclxuICAgIGhpdHMrKztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcclxuICAgIHJldHVybiBsZW5ndGggPT09IGhpdHM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBoaXQsIGlzU3VuayB9O1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgRE9NSGFuZGxlciBmcm9tICcuL2RvbSc7XHJcblxyXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCdsdWlzJyk7XHJcblxyXG5jb25zdCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoJ2NvbXB1dGVyJyk7XHJcblxyXG4vLyBjb25zdCBkb21IYW5kbGVyID0gRE9NSGFuZGxlcihwbGF5ZXIuZ2V0R2FtZUJvYXJkKCksIGNvbXB1dGVyLmdldEdhbWVCb2FyZCgpKTtcclxuXHJcbmNvbnN0IHBsYXllckRvbUhhbmRsZXIgPSBET01IYW5kbGVyKHBsYXllci5nZXRHYW1lQm9hcmQoKSwgJ3BsYXllcicpO1xyXG5cclxuLy8gY29uc3QgY29tcHV0ZXJEb21IYW5kbGVyID0gRE9NSGFuZGxlcihjb21wdXRlci5nZXRHYW1lQm9hcmQoKSwgJ2NvbXB1dGVyJyk7XHJcblxyXG5wbGF5ZXJEb21IYW5kbGVyLmRpc3BsYXlHYW1lYm9hcmQoKTtcclxuXHJcbi8vIGF3YWl0IHBsYXllci5oYXNQbGFjZWRBbGxTaGlwcygpO1xyXG5cclxuLy8gY29tcHV0ZXJEb21IYW5kbGVyLmRpc3BsYXlHYW1lYm9hcmQoKTtcclxuXHJcbmNvbnNvbGUubG9nKCd4ZCcpO1xyXG5cclxuLy8gVE9ET1NcclxuLypcclxuLXJlc29sdmVyIGxvIGRlIHJlcGV0aXIgZXZlbnRvcywgdGFsdmV6IGNhbWJpYXIgZGUgcG9zaWNpb24gYSAuc2hpcHNcclxuLWFncmVnYXIgbWFzIHZhbGlkYWNpb25lcyBhbCBwb3NpY2lvbmFtaWVudG8gZGUgbGFzIG5hdmVzXHJcbi1yb3RhciBuYXZlXHJcbi1yZXNldGVhciBwb3NpY2lvbmVzXHJcbiovXHJcblxyXG4vLyBjb25zdCBjb21wdXRlckRvbUhhbmRsZXIgPSBET01IYW5kbGVyKGNvbXB1dGVyLmdldEdhbWVCb2FyZCgpLCAnY29tcHV0ZXInKTtcclxuXHJcbi8vIGNvbXB1dGVyRG9tSGFuZGxlci5kaXNwbGF5R2FtZWJvYXJkKCk7XHJcblxyXG4vLyBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKDAsIDAsIDUsICdob3Jpem9udGFsJyk7XHJcbi8vIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoOSwgMywgNCwgJ2hvcml6b250YWwnKTtcclxuLy8gcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcCg1LCAxLCAzLCAndmVydGljYWwnKTtcclxuLy8gcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcCg2LCA1LCAzLCAnaG9yaXpvbnRhbCcpO1xyXG4vLyBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKDgsIDcsIDIsICdob3Jpem9udGFsJyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==