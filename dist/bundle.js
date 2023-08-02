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

#gameboards-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  padding: 32px;
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

.ships {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
}

.ship {
  display: flex;
  cursor: move;
}

.ship-cell {
  width: 30px;
  height: 30px;
  width: 50px;
  height: 50px;
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
`, "",{"version":3,"sources":["webpack://./src/assets/gameBoard.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,OAAO;EACP,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n}\r\n\r\n#gameboards-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 32px;\r\n  padding: 32px;\r\n}\r\n\r\n.gameboard {\r\n  display: grid;\r\n  flex: 1;\r\n  min-width: 250px;\r\n  max-width: 400px;\r\n  aspect-ratio: 1 / 1;\r\n}\r\n\r\n.cell {\r\n  border: 1px solid black;\r\n}\r\n\r\n.cell:hover {\r\n  cursor: cell;\r\n  background-color: blue;\r\n}\r\n\r\n.ships {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 32px;\r\n}\r\n\r\n.ship {\r\n  display: flex;\r\n  cursor: move;\r\n}\r\n\r\n.ship-cell {\r\n  width: 30px;\r\n  height: 30px;\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.dragging-element {\r\n  opacity: 0.5;\r\n}\r\n\r\n.hovered-cell {\r\n  background-color: green;\r\n}\r\n\r\n.placed-ship {\r\n  border: 2px dashed black;\r\n  opacity: 0.5;\r\n  cursor: no-drop;\r\n}\r\n\r\n.ship-cell-placed {\r\n  border: 2px solid yellow;\r\n  background-color: coral;\r\n}\r\n"],"sourceRoot":""}]);
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
        if (objectAtCurrentCell === 'hit') {
          domGameBoard.querySelector(
            `.cell[data-x-position="${i}"][data-y-position="${j}"]`
          ).textContent = 'hit';
        }
        // ship
        if (typeof objectAtCurrentCell === 'object') {
          const cell = domGameBoard.querySelector(
            `.cell[data-x-position="${i}"][data-y-position="${j}"]`
          );
          cell.classList.add('ship-cell-placed');
        }
      }
    }
  }

  function displayGameboard() {
    const domGameBoard = document.createElement('div');
    domGameBoard.setAttribute('id', gameBoardId);
    domGameBoard.classList.add('gameboard');
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

  function hoverCellAndItsNearCells(x, y, shipLength) {
    for (let i = 0; i < shipLength; i++) {
      const currentCell = document.querySelector(
        `.cell[data-x-position="${x}"][data-y-position="${y + i}"]`
      );
      currentCell.classList.add('hovered-cell');
    }
  }

  let currentDraggingElement;

  function addDropFunctionality(element) {
    element.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (!currentDraggingElement) return;
      document
        .querySelectorAll('.hovered-cell')
        .forEach((cell) => cell.classList.remove('hovered-cell'));
      const x = Number(element.getAttribute('data-x-position'));
      const y = Number(element.getAttribute('data-y-position'));
      const shipLength = Number(
        currentDraggingElement.getAttribute('data-ship-length')
      );
      if (gameBoard.isShipPlaceValid(x, y, shipLength)) {
        console.log('valid');
        hoverCellAndItsNearCells(x, y, shipLength);
      } else {
        console.log('invalid');
      }
    });

    element.addEventListener('drop', (e) => {
      e.preventDefault();
      if (!currentDraggingElement) return;
      const cellToPlaceShip = e.target;
      // const draggedShipId = e.dataTransfer.getData('draggedElementId');
      // const draggedShip = document.getElementById(draggedShipId);
      const x = Number(cellToPlaceShip.getAttribute('data-x-position'));
      const y = Number(cellToPlaceShip.getAttribute('data-y-position'));
      const shipLength = Number(
        currentDraggingElement.getAttribute('data-ship-length')
      );
      if (gameBoard.isShipPlaceValid(x, y, shipLength)) {
        gameBoard.placeShip(x, y, shipLength);
        currentDraggingElement.classList.add('placed-ship');
        updateDisplay();
      }
      removeDragFunctionality(currentDraggingElement);
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
  const placedShips = [];

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

  function isShipPlaceValid(x, y, shipLength, shipOrientation) {
    if (shipOrientation === 'horizontal') {
      return x + shipLength - 1 < getNumberOfRows();
    }
    // vertical
    return y + shipLength - 1 < getNumberOfColumns();
  }

  function placeShip(x, y, shipLength, shipOrientation = 'horizontal') {
    if (!isShipPlaceValid(x, y, shipLength, shipOrientation)) {
      return false;
    }
    if (shipOrientation === 'horizontal') {
      placeShipHorizontally(x, y, shipLength);
    } else {
      placeShipVertically(x, y, shipLength);
    }
    return true;
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

  return {
    getState,
    getNumberOfRows,
    getNumberOfColumns,
    isShipPlaceValid,
    placeShip,
    receiveAttack,
    allTheShipsHaveBeenPlaced,
    allTheShipsHaveBeenSunk,
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]('luis');

const computer = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]('computer');

const playerDomHandler = (0,_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(player.getGameBoard(), 'player');

// TODOS
/*
-resolver lo de repetir eventos, talvez cambiar de posicion a .ships
-agregar mas validaciones al posicionamiento de las naves
-rotar nave
-resetear posiciones
*/

// const computerDomHandler = DOMHandler(computer.getGameBoard(), 'computer');

playerDomHandler.displayGameboard();

// computerDomHandler.displayGameboard();

// const ships = {
//   Carrier: 5,
//   Battleship: 4,
//   Destroyer: 3,
//   Submarine: 3,
//   'Patrol Boat': 2,
// };

// playerGameboard.placeShip(0, 0, 5, 'horizontal');
// playerGameboard.placeShip(9, 3, 4, 'horizontal');
// playerGameboard.placeShip(5, 1, 3, 'vertical');
// playerGameboard.placeShip(6, 5, 3, 'horizontal');
// playerGameboard.placeShip(8, 7, 2, 'horizontal');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFDQztBQUMvQjtBQUNBLG1CQUFtQiwrQ0FBTTtBQUN6QjtBQUNBLHFCQUFxQiwrQ0FBTTtBQUMzQjtBQUNBLHlCQUF5QixnREFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL2dhbWVCb2FyZC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL2dhbWVCb2FyZC5jc3M/ODEwNyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuI2dhbWVib2FyZHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDMycHg7XHJcbiAgcGFkZGluZzogMzJweDtcclxufVxyXG5cclxuLmdhbWVib2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5jZWxsOmhvdmVyIHtcclxuICBjdXJzb3I6IGNlbGw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLnNoaXBzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDMycHg7XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuLnNoaXAtY2VsbCB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRyYWdnaW5nLWVsZW1lbnQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmhvdmVyZWQtY2VsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5wbGFjZWQtc2hpcCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IG5vLWRyb3A7XHJcbn1cclxuXHJcbi5zaGlwLWNlbGwtcGxhY2VkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2dhbWVCb2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZWJvYXJkcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgcGFkZGluZzogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jZWxsOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogY2VsbDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5zaGlwcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNlbGwge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dpbmctZWxlbWVudCB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlcmVkLWNlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5wbGFjZWQtc2hpcCB7XFxyXFxuICBib3JkZXI6IDJweCBkYXNoZWQgYmxhY2s7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICBjdXJzb3I6IG5vLWRyb3A7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNlbGwtcGxhY2VkIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lQm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lQm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vYXNzZXRzL2dhbWVCb2FyZC5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRE9NSGFuZGxlcihnYW1lQm9hcmQsIGdhbWVCb2FyZElkKSB7XHJcbiAgY29uc3QgZ2FtZUJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmRzLWNvbnRhaW5lcicpO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVDZWxsKHJvdywgY29sdW1uKSB7XHJcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXgtcG9zaXRpb24nLCByb3cpO1xyXG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteS1wb3NpdGlvbicsIGNvbHVtbik7XHJcbiAgICAvLyBhdGFja1xyXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteC1wb3NpdGlvbicpLFxyXG4gICAgICAgIGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXktcG9zaXRpb24nKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkRHJvcEZ1bmN0aW9uYWxpdHkoY2VsbCk7XHJcblxyXG4gICAgcmV0dXJuIGNlbGw7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xyXG4gICAgY29uc3QgZ2FtZUJvYXJkU3RhdGUgPSBnYW1lQm9hcmQuZ2V0U3RhdGUoKTtcclxuICAgIGNvbnN0IGRvbUdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lYm9hcmQjJHtnYW1lQm9hcmRJZH1gKTtcclxuICAgIGNvbnN0IHJvd3MgPSBnYW1lQm9hcmQuZ2V0TnVtYmVyT2ZSb3dzKCk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gZ2FtZUJvYXJkLmdldE51bWJlck9mQ29sdW1ucygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBjb25zdCBvYmplY3RBdEN1cnJlbnRDZWxsID0gZ2FtZUJvYXJkU3RhdGVbaV1bal07XHJcbiAgICAgICAgaWYgKG9iamVjdEF0Q3VycmVudENlbGwgPT09ICdoaXQnKSB7XHJcbiAgICAgICAgICBkb21HYW1lQm9hcmQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgYC5jZWxsW2RhdGEteC1wb3NpdGlvbj1cIiR7aX1cIl1bZGF0YS15LXBvc2l0aW9uPVwiJHtqfVwiXWBcclxuICAgICAgICAgICkudGV4dENvbnRlbnQgPSAnaGl0JztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2hpcFxyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0QXRDdXJyZW50Q2VsbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb21HYW1lQm9hcmQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgYC5jZWxsW2RhdGEteC1wb3NpdGlvbj1cIiR7aX1cIl1bZGF0YS15LXBvc2l0aW9uPVwiJHtqfVwiXWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY2VsbC1wbGFjZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRpc3BsYXlHYW1lYm9hcmQoKSB7XHJcbiAgICBjb25zdCBkb21HYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRvbUdhbWVCb2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgZ2FtZUJvYXJkSWQpO1xyXG4gICAgZG9tR2FtZUJvYXJkLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZCcpO1xyXG4gICAgY29uc3Qgcm93cyA9IGdhbWVCb2FyZC5nZXROdW1iZXJPZlJvd3MoKTtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBnYW1lQm9hcmQuZ2V0TnVtYmVyT2ZDb2x1bW5zKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIGRvbUdhbWVCb2FyZC5hcHBlbmRDaGlsZChjcmVhdGVDZWxsKGksIGopKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9tR2FtZUJvYXJkLnN0eWxlWydncmlkLXRlbXBsYXRlLXJvd3MnXSA9ICdyZXBlYXQoMTAsIDFmciknO1xyXG4gICAgZG9tR2FtZUJvYXJkLnN0eWxlWydncmlkLXRlbXBsYXRlLWNvbHVtbnMnXSA9ICdyZXBlYXQoMTAsIDFmciknO1xyXG5cclxuICAgIGdhbWVCb2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tR2FtZUJvYXJkKTtcclxuICB9XHJcblxyXG4gIC8vIGVzdGEgc2UgcHVlZGUgcmVwZXRpciBhbCBjcmVhciBhIGxhIGNvbXB1dGFkb3JhIENBTUJJQVJcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuc2hpcGApLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGFkZERyYWdGdW5jdGlvbmFsaXR5KGVsZW1lbnQpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBob3ZlckNlbGxBbmRJdHNOZWFyQ2VsbHMoeCwgeSwgc2hpcExlbmd0aCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY3VycmVudENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGAuY2VsbFtkYXRhLXgtcG9zaXRpb249XCIke3h9XCJdW2RhdGEteS1wb3NpdGlvbj1cIiR7eSArIGl9XCJdYFxyXG4gICAgICApO1xyXG4gICAgICBjdXJyZW50Q2VsbC5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkLWNlbGwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBjdXJyZW50RHJhZ2dpbmdFbGVtZW50O1xyXG5cclxuICBmdW5jdGlvbiBhZGREcm9wRnVuY3Rpb25hbGl0eShlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoIWN1cnJlbnREcmFnZ2luZ0VsZW1lbnQpIHJldHVybjtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmhvdmVyZWQtY2VsbCcpXHJcbiAgICAgICAgLmZvckVhY2goKGNlbGwpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZC1jZWxsJykpO1xyXG4gICAgICBjb25zdCB4ID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXgtcG9zaXRpb24nKSk7XHJcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEteS1wb3NpdGlvbicpKTtcclxuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IE51bWJlcihcclxuICAgICAgICBjdXJyZW50RHJhZ2dpbmdFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLWxlbmd0aCcpXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChnYW1lQm9hcmQuaXNTaGlwUGxhY2VWYWxpZCh4LCB5LCBzaGlwTGVuZ3RoKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCcpO1xyXG4gICAgICAgIGhvdmVyQ2VsbEFuZEl0c05lYXJDZWxscyh4LCB5LCBzaGlwTGVuZ3RoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICghY3VycmVudERyYWdnaW5nRWxlbWVudCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBjZWxsVG9QbGFjZVNoaXAgPSBlLnRhcmdldDtcclxuICAgICAgLy8gY29uc3QgZHJhZ2dlZFNoaXBJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2RyYWdnZWRFbGVtZW50SWQnKTtcclxuICAgICAgLy8gY29uc3QgZHJhZ2dlZFNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnZ2VkU2hpcElkKTtcclxuICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsVG9QbGFjZVNoaXAuZ2V0QXR0cmlidXRlKCdkYXRhLXgtcG9zaXRpb24nKSk7XHJcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbFRvUGxhY2VTaGlwLmdldEF0dHJpYnV0ZSgnZGF0YS15LXBvc2l0aW9uJykpO1xyXG4gICAgICBjb25zdCBzaGlwTGVuZ3RoID0gTnVtYmVyKFxyXG4gICAgICAgIGN1cnJlbnREcmFnZ2luZ0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAtbGVuZ3RoJylcclxuICAgICAgKTtcclxuICAgICAgaWYgKGdhbWVCb2FyZC5pc1NoaXBQbGFjZVZhbGlkKHgsIHksIHNoaXBMZW5ndGgpKSB7XHJcbiAgICAgICAgZ2FtZUJvYXJkLnBsYWNlU2hpcCh4LCB5LCBzaGlwTGVuZ3RoKTtcclxuICAgICAgICBjdXJyZW50RHJhZ2dpbmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BsYWNlZC1zaGlwJyk7XHJcbiAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbW92ZURyYWdGdW5jdGlvbmFsaXR5KGN1cnJlbnREcmFnZ2luZ0VsZW1lbnQpO1xyXG4gICAgICBjdXJyZW50RHJhZ2dpbmdFbGVtZW50ID0gbnVsbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZXZlbnQpIHtcclxuICAgIGN1cnJlbnREcmFnZ2luZ0VsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY3VycmVudERyYWdnaW5nRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZy1lbGVtZW50Jyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkRyYWdFbmQoZXZlbnQpIHtcclxuICAgIGN1cnJlbnREcmFnZ2luZ0VsZW1lbnQgPSBudWxsO1xyXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nLWVsZW1lbnQnKTtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuaG92ZXJlZC1jZWxsJylcclxuICAgICAgLmZvckVhY2goKGNlbGwpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZC1jZWxsJykpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkRHJhZ0Z1bmN0aW9uYWxpdHkoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIG9uRHJhZ1N0YXJ0KTtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIG9uRHJhZ0VuZCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVEcmFnRnVuY3Rpb25hbGl0eShlbGVtZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKTtcclxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0Jywgb25EcmFnU3RhcnQpO1xyXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgb25EcmFnRW5kKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGRpc3BsYXlHYW1lYm9hcmQsIHVwZGF0ZURpc3BsYXkgfTtcclxufVxyXG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUJvYXJkKHhMZW5ndGggPSAxMCwgeUxlbmd0aCA9IDEwKSB7XHJcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGVCb2FyZCh4TGVuZ3RoLCB5TGVuZ3RoKTtcclxuICAvLyB0aGlzIGlzIGFuIGFycmF5IHRoYXQgd2lsbCBrZWVwIGFsbCB0aGUgcGxhY2VkIFNoaXAgb2JqZWN0cywgYW5kIGl0cyBnb2luZyB0byBiZSB1c2VmdWxcclxuICAvLyBmb3IgdGhlIGFsbFRoZVNoaXBzSGF2ZUJlZW5TdW5rIG1ldGhvZCAodG8gYXZvaWQgZG91YmxlIGxvb3BpbmcgdGhlIGJvYXJkIGFuZCBzZWFyY2hpbmcgd2hlcmUgYXJlIHRoZSBzaGlwcylcclxuICBjb25zdCBwbGFjZWRTaGlwcyA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZCh4TGVuZ3RoLCB5TGVuZ3RoKSB7XHJcbiAgICBjb25zdCBuZXdCb2FyZCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4TGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgcm93ID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgeUxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgcm93W2pdID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgbmV3Qm9hcmQucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0JvYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XHJcbiAgICByZXR1cm4gYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXROdW1iZXJPZlJvd3MoKSB7XHJcbiAgICByZXR1cm4gYm9hcmQubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TnVtYmVyT2ZDb2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIGJvYXJkWzBdLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzU2hpcFBsYWNlVmFsaWQoeCwgeSwgc2hpcExlbmd0aCwgc2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgcmV0dXJuIHggKyBzaGlwTGVuZ3RoIC0gMSA8IGdldE51bWJlck9mUm93cygpO1xyXG4gICAgfVxyXG4gICAgLy8gdmVydGljYWxcclxuICAgIHJldHVybiB5ICsgc2hpcExlbmd0aCAtIDEgPCBnZXROdW1iZXJPZkNvbHVtbnMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcCh4LCB5LCBzaGlwTGVuZ3RoLCBzaGlwT3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCcpIHtcclxuICAgIGlmICghaXNTaGlwUGxhY2VWYWxpZCh4LCB5LCBzaGlwTGVuZ3RoLCBzaGlwT3JpZW50YXRpb24pKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChzaGlwT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICBwbGFjZVNoaXBIb3Jpem9udGFsbHkoeCwgeSwgc2hpcExlbmd0aCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGFjZVNoaXBWZXJ0aWNhbGx5KHgsIHksIHNoaXBMZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZVNoaXBWZXJ0aWNhbGx5KHgsIHksIHNoaXBMZW5ndGgpIHtcclxuICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGJvYXJkW2ldW3ldID0gc2hpcDtcclxuICAgIH1cclxuICAgIHBsYWNlZFNoaXBzLnB1c2goc2hpcCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZVNoaXBIb3Jpem9udGFsbHkoeCwgeSwgc2hpcExlbmd0aCkge1xyXG4gICAgY29uc3Qgc2hpcCA9IFNoaXAoc2hpcExlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgYm9hcmRbeF1baV0gPSBzaGlwO1xyXG4gICAgfVxyXG4gICAgcGxhY2VkU2hpcHMucHVzaChzaGlwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG4gICAgY29uc3Qgb2JqZWN0QXRDdXJyZW50Q29yZGluYXRlID0gYm9hcmRbeF1beV07XHJcbiAgICAvLyBjb29yZGluYXRlIGFscmVhZHkgaGl0XHJcbiAgICBpZiAob2JqZWN0QXRDdXJyZW50Q29yZGluYXRlID09PSAnaGl0Jykge1xyXG4gICAgICByZXR1cm4gW2ZhbHNlLCAnQ2VsbCBhbHJlYWR5IGhpdCddO1xyXG4gICAgfVxyXG4gICAgLy8gbWlzc1xyXG4gICAgaWYgKG9iamVjdEF0Q3VycmVudENvcmRpbmF0ZSA9PT0gJycpIHtcclxuICAgICAgYm9hcmRbeF1beV0gPSAnaGl0JztcclxuICAgICAgcmV0dXJuIFt0cnVlLCAnTWlzcyddO1xyXG4gICAgfVxyXG4gICAgLy8gdGhlcmUgaXMgYSBzaGlwXHJcbiAgICBvYmplY3RBdEN1cnJlbnRDb3JkaW5hdGUuaGl0KCk7XHJcbiAgICBib2FyZFt4XVt5XSA9ICdoaXQnO1xyXG4gICAgcmV0dXJuIFt0cnVlLCAnU3VjY2VzZnVsIGhpdCddO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWxsVGhlU2hpcHNIYXZlQmVlblBsYWNlZCgpIHtcclxuICAgIHJldHVybiBwbGFjZWRTaGlwcy5sZW5ndGggPT09IDU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhbGxUaGVTaGlwc0hhdmVCZWVuU3VuaygpIHtcclxuICAgIC8vIGlmIGF0bGVhc3Qgb25lIHNoaXAgaGFzbid0IGJlZW4gc3VuaywgdGhlbiByZXR1cm4gZmFsc2VcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhY2VkU2hpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCFwbGFjZWRTaGlwc1tpXS5pc1N1bmsoKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0U3RhdGUsXHJcbiAgICBnZXROdW1iZXJPZlJvd3MsXHJcbiAgICBnZXROdW1iZXJPZkNvbHVtbnMsXHJcbiAgICBpc1NoaXBQbGFjZVZhbGlkLFxyXG4gICAgcGxhY2VTaGlwLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIGFsbFRoZVNoaXBzSGF2ZUJlZW5QbGFjZWQsXHJcbiAgICBhbGxUaGVTaGlwc0hhdmVCZWVuU3VuayxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKHBsYXllck5hbWUpIHtcclxuICBjb25zdCBuYW1lID0gcGxheWVyTmFtZTtcclxuICBjb25zdCBnYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcclxuICAvLyBwbGFjZSBzaGlwc1xyXG4gIC8vIC4uLlxyXG4gIC8vIHBsYXlcclxuICAvLyAuLi5cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiBuYW1lO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0R2FtZUJvYXJkKCkge1xyXG4gICAgcmV0dXJuIGdhbWVCb2FyZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF0dGFjayh4LCB5LCBlbmVteUdhbWVCb2FyZCkge1xyXG4gICAgZW5lbXlHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGdldE5hbWUsIGdldEdhbWVCb2FyZCwgYXR0YWNrIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChzaGlwTGVuZ3RoKSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gc2hpcExlbmd0aDtcclxuICBsZXQgaGl0cyA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGhpdCgpIHtcclxuICAgIGhpdHMrKztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcclxuICAgIHJldHVybiBsZW5ndGggPT09IGhpdHM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBoaXQsIGlzU3VuayB9O1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgRE9NSGFuZGxlciBmcm9tICcuL2RvbSc7XHJcblxyXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCdsdWlzJyk7XHJcblxyXG5jb25zdCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoJ2NvbXB1dGVyJyk7XHJcblxyXG5jb25zdCBwbGF5ZXJEb21IYW5kbGVyID0gRE9NSGFuZGxlcihwbGF5ZXIuZ2V0R2FtZUJvYXJkKCksICdwbGF5ZXInKTtcclxuXHJcbi8vIFRPRE9TXHJcbi8qXHJcbi1yZXNvbHZlciBsbyBkZSByZXBldGlyIGV2ZW50b3MsIHRhbHZleiBjYW1iaWFyIGRlIHBvc2ljaW9uIGEgLnNoaXBzXHJcbi1hZ3JlZ2FyIG1hcyB2YWxpZGFjaW9uZXMgYWwgcG9zaWNpb25hbWllbnRvIGRlIGxhcyBuYXZlc1xyXG4tcm90YXIgbmF2ZVxyXG4tcmVzZXRlYXIgcG9zaWNpb25lc1xyXG4qL1xyXG5cclxuLy8gY29uc3QgY29tcHV0ZXJEb21IYW5kbGVyID0gRE9NSGFuZGxlcihjb21wdXRlci5nZXRHYW1lQm9hcmQoKSwgJ2NvbXB1dGVyJyk7XHJcblxyXG5wbGF5ZXJEb21IYW5kbGVyLmRpc3BsYXlHYW1lYm9hcmQoKTtcclxuXHJcbi8vIGNvbXB1dGVyRG9tSGFuZGxlci5kaXNwbGF5R2FtZWJvYXJkKCk7XHJcblxyXG4vLyBjb25zdCBzaGlwcyA9IHtcclxuLy8gICBDYXJyaWVyOiA1LFxyXG4vLyAgIEJhdHRsZXNoaXA6IDQsXHJcbi8vICAgRGVzdHJveWVyOiAzLFxyXG4vLyAgIFN1Ym1hcmluZTogMyxcclxuLy8gICAnUGF0cm9sIEJvYXQnOiAyLFxyXG4vLyB9O1xyXG5cclxuLy8gcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcCgwLCAwLCA1LCAnaG9yaXpvbnRhbCcpO1xyXG4vLyBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKDksIDMsIDQsICdob3Jpem9udGFsJyk7XHJcbi8vIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoNSwgMSwgMywgJ3ZlcnRpY2FsJyk7XHJcbi8vIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoNiwgNSwgMywgJ2hvcml6b250YWwnKTtcclxuLy8gcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcCg4LCA3LCAyLCAnaG9yaXpvbnRhbCcpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=