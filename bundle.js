/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/game.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/game.css ***!
  \*******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `#game {
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
  background-color: #a5f3fc;
}

.cell {
  border: 1px solid black;
  background-color: #a5f3fc;
  font-size: 1.3rem;
}

#computer-gameboard .cell:hover {
  cursor: cell;
  background-color: #e11d48;
}

#ships-container {
  width: 30%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

#ships-title {
  color: #eff6ff;
  font-size: 1.5rem;
  font-weight: bold;
}

#ship-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

#ship-buttons button {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid black;
  color: #020617;
}

#ship-buttons button:hover {
  background-color: white;
}

#rotate-ships-btn {
  background-color: #8b5cf6;
}

#randomize-ships-btn {
  background-color: #10b981;
}

#reset-ships-btn {
  background-color: #fde047;
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
  border: 1px solid #042f2e;
  background-color: #14b8a6;
}

.dragging-element {
  opacity: 0.5;
}

.hovered-cell {
  background-color: green;
}

.placed-ship {
  border: 2px dashed #f7fee7;
  opacity: 0.5;
  cursor: no-drop;
}

.ship-cell-placed {
  border: 1px solid #042f2e;
  background-color: #14b8a6;
}

.ship-cell-placed.invisible {
  border: 1px solid black;
  background-color: inherit;
}

#computer-gameboard .cell.already-hit-cell {
  cursor: not-allowed;
}

#computer-gameboard .cell.already-hit-cell:hover {
  background-color: inherit;
}

#replay-btn {
  align-self: center;
  padding: 8px 24px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 6px;
  border: 2px solid black;
  background-color: #fbbf24;
}

#replay-btn:hover {
  background-color: #eff6ff;
}
`, "",{"version":3,"sources":["webpack://./src/assets/game.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,OAAO;EACP,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,OAAO;EACP,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["#game {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 24px;\r\n  height: 75vh;\r\n}\r\n\r\n#gameboards-container {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-wrap: wrap;\r\n  gap: 32px;\r\n  padding: 24px;\r\n}\r\n\r\n.gameboard {\r\n  display: grid;\r\n  flex: 1;\r\n  min-width: 250px;\r\n  max-width: 400px;\r\n  aspect-ratio: 1 / 1;\r\n  background-color: #a5f3fc;\r\n}\r\n\r\n.cell {\r\n  border: 1px solid black;\r\n  background-color: #a5f3fc;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n#computer-gameboard .cell:hover {\r\n  cursor: cell;\r\n  background-color: #e11d48;\r\n}\r\n\r\n#ships-container {\r\n  width: 30%;\r\n  min-width: 400px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 24px;\r\n}\r\n\r\n#ships-title {\r\n  color: #eff6ff;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n#ship-buttons {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 16px;\r\n}\r\n\r\n#ship-buttons button {\r\n  padding: 8px 16px;\r\n  border-radius: 6px;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  border: 1px solid black;\r\n  color: #020617;\r\n}\r\n\r\n#ship-buttons button:hover {\r\n  background-color: white;\r\n}\r\n\r\n#rotate-ships-btn {\r\n  background-color: #8b5cf6;\r\n}\r\n\r\n#randomize-ships-btn {\r\n  background-color: #10b981;\r\n}\r\n\r\n#reset-ships-btn {\r\n  background-color: #fde047;\r\n}\r\n\r\n.ships {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 32px;\r\n}\r\n\r\n.ship {\r\n  display: flex;\r\n  cursor: move;\r\n}\r\n\r\n.ship[data-ship-orientation='horizontal'] {\r\n  flex-direction: row;\r\n}\r\n\r\n.ship[data-ship-orientation='vertical'] {\r\n  flex-direction: column;\r\n}\r\n\r\n.ship-cell {\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 1px solid #042f2e;\r\n  background-color: #14b8a6;\r\n}\r\n\r\n.dragging-element {\r\n  opacity: 0.5;\r\n}\r\n\r\n.hovered-cell {\r\n  background-color: green;\r\n}\r\n\r\n.placed-ship {\r\n  border: 2px dashed #f7fee7;\r\n  opacity: 0.5;\r\n  cursor: no-drop;\r\n}\r\n\r\n.ship-cell-placed {\r\n  border: 1px solid #042f2e;\r\n  background-color: #14b8a6;\r\n}\r\n\r\n.ship-cell-placed.invisible {\r\n  border: 1px solid black;\r\n  background-color: inherit;\r\n}\r\n\r\n#computer-gameboard .cell.already-hit-cell {\r\n  cursor: not-allowed;\r\n}\r\n\r\n#computer-gameboard .cell.already-hit-cell:hover {\r\n  background-color: inherit;\r\n}\r\n\r\n#replay-btn {\r\n  align-self: center;\r\n  padding: 8px 24px;\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  border-radius: 6px;\r\n  border: 2px solid black;\r\n  background-color: #fbbf24;\r\n}\r\n\r\n#replay-btn:hover {\r\n  background-color: #eff6ff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
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

html {
  font-size: 16px;
  font-family: sans-serif;
}

body {
  min-height: 100vh;
  background-color: #172554;
}

header {
  background-color: #292524;
  padding: 16px;
}

#game-title {
  text-align: center;
  color: #eff6ff;
  font-size: 2.6rem;
  font-weight: bold;
}

#message-and-play-container {
  display: flex;
  flex-direction: column;
}

#message {
  font-size: 1.5rem;
  color: #eff6ff;
  text-align: center;
  padding: 12px;
  background-color: #171717;
  border-radius: 8px;
  margin: 12px 24px;
}

#play-btn {
  align-self: center;
  padding: 8px 24px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 6px;
  border: 2px solid black;
  background-color: #3b82f6;
}

#play-btn:hover {
  background-color: #2563eb;
}
`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 16px;\r\n  font-family: sans-serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: #172554;\r\n}\r\n\r\nheader {\r\n  background-color: #292524;\r\n  padding: 16px;\r\n}\r\n\r\n#game-title {\r\n  text-align: center;\r\n  color: #eff6ff;\r\n  font-size: 2.6rem;\r\n  font-weight: bold;\r\n}\r\n\r\n#message-and-play-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#message {\r\n  font-size: 1.5rem;\r\n  color: #eff6ff;\r\n  text-align: center;\r\n  padding: 12px;\r\n  background-color: #171717;\r\n  border-radius: 8px;\r\n  margin: 12px 24px;\r\n}\r\n\r\n#play-btn {\r\n  align-self: center;\r\n  padding: 8px 24px;\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  border-radius: 6px;\r\n  border: 2px solid black;\r\n  background-color: #3b82f6;\r\n}\r\n\r\n#play-btn:hover {\r\n  background-color: #2563eb;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/game.css":
/*!*****************************!*\
  !*** ./src/assets/game.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./game.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/game.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _assets_game_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/game.css */ "./src/assets/game.css");


function DOMHandler(game) {
  const gameBoardsContainer = document.getElementById('gameboards-container');
  const gameMessage = document.getElementById('message');
  const playBtn = document.getElementById('play-btn');

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
  hideComputerGameBoard();

  gameBoardsContainer.appendChild(playerDomGameBoard);
  gameBoardsContainer.appendChild(computerDomGameBoard);

  playBtn.addEventListener('click', () => {
    removeShipsContainer();
    playBtn.remove();
    computer.getGameBoard().placeShipsRandomly();
    showComputerGameBoard();
    updateDisplay(computerGameBoard, computerDomGameBoard);
    setCurrentTurnMessage();
  });

  function hideComputerGameBoard() {
    computerDomGameBoard.style.display = 'none';
  }

  function showComputerGameBoard() {
    computerDomGameBoard.style.display = 'grid';
  }

  function showComputerShips() {
    computerDomGameBoard
      .querySelectorAll('.ship-cell-placed')
      .forEach((ship) => {
        ship.classList.remove('invisible');
      });
  }

  document
    .getElementById('randomize-ships-btn')
    .addEventListener('click', randomizeShips);

  function randomizeShips() {
    resetShips();
    document.querySelectorAll('.ship').forEach((ship) => {
      removeDragFunctionality(ship);
      ship.classList.add('placed-ship');
    });
    playerGameBoard.placeShipsRandomly();
    updateDisplay(playerGameBoard, playerDomGameBoard);
    enablePlayButton();
  }

  function enablePlayButton() {
    playBtn.style.visibility = 'visible';
  }

  function disablePlayButton() {
    playBtn.style.visibility = 'hidden';
  }

  function setCurrentTurnMessage() {
    gameMessage.textContent = `It's ${game
      .getCurrentPlayerTurn()
      .getName()} turn`;
  }

  function setWinner(winner) {
    gameMessage.textContent = `${winner.getName()} won!!`;
    const replayBtn = document.createElement('button');
    replayBtn.textContent = 'Replay';
    replayBtn.setAttribute('id', 'replay-btn');
    replayBtn.addEventListener('click', () => {
      location.reload();
    });
    document
      .getElementById('message-and-play-container')
      .appendChild(replayBtn);
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
        const domGameBoardCell = domGameBoard.querySelector(
          `.cell[data-x-position="${i}"][data-y-position="${j}"]`
        );
        if (objectAtCurrentCell === '') {
          domGameBoardCell.classList.remove('ship-cell-placed');
        } else if (objectAtCurrentCell === 'hit') {
          domGameBoardCell.textContent = '🎯';
        } else if (objectAtCurrentCell === 'miss') {
          domGameBoardCell.textContent = '🌊';
        } else {
          // to avoid computer gameboard ships from being visible
          if (domGameBoard === playerDomGameBoard) {
            domGameBoardCell.classList.add('ship-cell-placed');
          } else {
            domGameBoardCell.classList.add('ship-cell-placed');
            domGameBoardCell.classList.add('invisible');
          }
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

  // this is a simulation of the game loop
  function addAtackFunctionality(cell) {
    cell.addEventListener('click', async () => {
      // to avoid the player from attacking multiple times before the computer
      if (game.getCurrentPlayerTurn() !== player) {
        return;
      }
      const x = Number(cell.getAttribute('data-x-position'));
      const y = Number(cell.getAttribute('data-y-position'));
      const [succesfulAttack, msg] = player.attack(x, y, computerGameBoard);
      if (succesfulAttack) {
        cell.classList.add('already-hit-cell');
        game.setCurrentPlayerTurn(computer);
        setCurrentTurnMessage();
        updateDisplay(computerGameBoard, computerDomGameBoard);
        if (computerGameBoard.allTheShipsHaveBeenSunk()) {
          showComputerShips();
          setWinner(player);
          return;
        }
        setCurrentTurnMessage();
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(computer.attackRandomly(playerGameBoard));
          }, 1500);
        });
        updateDisplay(playerGameBoard, playerDomGameBoard);
        if (playerGameBoard.allTheShipsHaveBeenSunk()) {
          showComputerShips();
          setWinner(computer);
          return;
        }
        game.setCurrentPlayerTurn(player);
        setCurrentTurnMessage();
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

  return {
    getPlayer,
    getComputer,
    getCurrentPlayerTurn,
    setCurrentPlayerTurn,
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
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");






const player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player');

const computer = new _computer__WEBPACK_IMPORTED_MODULE_1__["default"]('Computer');

const game = (0,_game__WEBPACK_IMPORTED_MODULE_3__["default"])(player, computer);

(0,_dom__WEBPACK_IMPORTED_MODULE_2__.DOMHandler)(game);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzRkFBc0YsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxpQ0FBaUMsb0JBQW9CLHNCQUFzQiwwQkFBMEIsOEJBQThCLGdCQUFnQixtQkFBbUIsS0FBSywrQkFBK0IsY0FBYyxvQkFBb0Isb0NBQW9DLHNCQUFzQixnQkFBZ0Isb0JBQW9CLEtBQUssb0JBQW9CLG9CQUFvQixjQUFjLHVCQUF1Qix1QkFBdUIsMEJBQTBCLGdDQUFnQyxLQUFLLGVBQWUsOEJBQThCLGdDQUFnQyx3QkFBd0IsS0FBSyx5Q0FBeUMsbUJBQW1CLGdDQUFnQyxLQUFLLDBCQUEwQixpQkFBaUIsdUJBQXVCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixLQUFLLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixLQUFLLHVCQUF1QixvQkFBb0Isc0JBQXNCLDhCQUE4QixnQkFBZ0IsS0FBSyw4QkFBOEIsd0JBQXdCLHlCQUF5QixzQkFBc0Isd0JBQXdCLDhCQUE4QixxQkFBcUIsS0FBSyxvQ0FBb0MsOEJBQThCLEtBQUssMkJBQTJCLGdDQUFnQyxLQUFLLDhCQUE4QixnQ0FBZ0MsS0FBSywwQkFBMEIsZ0NBQWdDLEtBQUssZ0JBQWdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHNCQUFzQixnQkFBZ0IsS0FBSyxlQUFlLG9CQUFvQixtQkFBbUIsS0FBSyxtREFBbUQsMEJBQTBCLEtBQUssaURBQWlELDZCQUE2QixLQUFLLG9CQUFvQixrQkFBa0IsbUJBQW1CLGdDQUFnQyxnQ0FBZ0MsS0FBSywyQkFBMkIsbUJBQW1CLEtBQUssdUJBQXVCLDhCQUE4QixLQUFLLHNCQUFzQixpQ0FBaUMsbUJBQW1CLHNCQUFzQixLQUFLLDJCQUEyQixnQ0FBZ0MsZ0NBQWdDLEtBQUsscUNBQXFDLDhCQUE4QixnQ0FBZ0MsS0FBSyxvREFBb0QsMEJBQTBCLEtBQUssMERBQTBELGdDQUFnQyxLQUFLLHFCQUFxQix5QkFBeUIsd0JBQXdCLHdCQUF3Qix3QkFBd0IseUJBQXlCLDhCQUE4QixnQ0FBZ0MsS0FBSywyQkFBMkIsZ0NBQWdDLEtBQUssdUJBQXVCO0FBQ2htSTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckt2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksNkJBQTZCLGdCQUFnQixpQkFBaUIsNkJBQTZCLEtBQUssY0FBYyxzQkFBc0IsOEJBQThCLEtBQUssY0FBYyx3QkFBd0IsZ0NBQWdDLEtBQUssZ0JBQWdCLGdDQUFnQyxvQkFBb0IsS0FBSyxxQkFBcUIseUJBQXlCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEtBQUsscUNBQXFDLG9CQUFvQiw2QkFBNkIsS0FBSyxrQkFBa0Isd0JBQXdCLHFCQUFxQix5QkFBeUIsb0JBQW9CLGdDQUFnQyx5QkFBeUIsd0JBQXdCLEtBQUssbUJBQW1CLHlCQUF5Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIsOEJBQThCLGdDQUFnQyxLQUFLLHlCQUF5QixnQ0FBZ0MsS0FBSyx1QkFBdUI7QUFDeGhEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDL0QxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUc7QUFDckc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUkrQztBQUN2RSxPQUFPLGlFQUFlLHFGQUFPLElBQUkscUZBQU8sVUFBVSxxRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JvQztBQUNwQztBQUNlO0FBQ2Ysb0JBQW9CLHNEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUNBQWlDO0FBQ3JELHNCQUFzQixvQ0FBb0M7QUFDMUQscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7OztBQ25DMkI7QUFDM0I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QixzQkFBc0IsYUFBYTtBQUNuQztBQUNBO0FBQ0Esb0NBQW9DLEVBQUUsc0JBQXNCLEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QixzQkFBc0IsYUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQSxrQkFBa0IsK0JBQStCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsRUFBRSxzQkFBc0IsTUFBTTtBQUNsRTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0Esb0NBQW9DLE1BQU0sc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7QUM1VWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMEI7QUFDMUI7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBSTtBQUNyQixvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBSTtBQUNyQixvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakMsc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TG9DO0FBQ3BDO0FBQ2U7QUFDZixvQkFBb0Isc0RBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNJO0FBQ0M7QUFDVDtBQUNFO0FBQzVCO0FBQ0EsbUJBQW1CLCtDQUFNO0FBQ3pCO0FBQ0EscUJBQXFCLGlEQUFRO0FBQzdCO0FBQ0EsYUFBYSxpREFBSTtBQUNqQjtBQUNBLGdEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvZ2FtZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9nYW1lLmNzcz9jM2U5Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz82MDFkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNnYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMjRweDtcclxuICBoZWlnaHQ6IDc1dmg7XHJcbn1cclxuXHJcbiNnYW1lYm9hcmRzLWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDMycHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuLmdhbWVib2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWYzZmM7XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVmM2ZjO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcblxyXG4jY29tcHV0ZXItZ2FtZWJvYXJkIC5jZWxsOmhvdmVyIHtcclxuICBjdXJzb3I6IGNlbGw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxMWQ0ODtcclxufVxyXG5cclxuI3NoaXBzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMjRweDtcclxufVxyXG5cclxuI3NoaXBzLXRpdGxlIHtcclxuICBjb2xvcjogI2VmZjZmZjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI3NoaXAtYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4jc2hpcC1idXR0b25zIGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBjb2xvcjogIzAyMDYxNztcclxufVxyXG5cclxuI3NoaXAtYnV0dG9ucyBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jcm90YXRlLXNoaXBzLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNWNmNjtcclxufVxyXG5cclxuI3JhbmRvbWl6ZS1zaGlwcy1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMGI5ODE7XHJcbn1cclxuXHJcbiNyZXNldC1zaGlwcy1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGUwNDc7XHJcbn1cclxuXHJcbi5zaGlwcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDMycHg7XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuLnNoaXBbZGF0YS1zaGlwLW9yaWVudGF0aW9uPSdob3Jpem9udGFsJ10ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5zaGlwW2RhdGEtc2hpcC1vcmllbnRhdGlvbj0ndmVydGljYWwnXSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNoaXAtY2VsbCB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNDJmMmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0YjhhNjtcclxufVxyXG5cclxuLmRyYWdnaW5nLWVsZW1lbnQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmhvdmVyZWQtY2VsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5wbGFjZWQtc2hpcCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICNmN2ZlZTc7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogbm8tZHJvcDtcclxufVxyXG5cclxuLnNoaXAtY2VsbC1wbGFjZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNDJmMmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0YjhhNjtcclxufVxyXG5cclxuLnNoaXAtY2VsbC1wbGFjZWQuaW52aXNpYmxlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4jY29tcHV0ZXItZ2FtZWJvYXJkIC5jZWxsLmFscmVhZHktaGl0LWNlbGwge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbiNjb21wdXRlci1nYW1lYm9hcmQgLmNlbGwuYWxyZWFkeS1oaXQtY2VsbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuI3JlcGxheS1idG4ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4cHggMjRweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYmYyNDtcclxufVxyXG5cclxuI3JlcGxheS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2dhbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2dhbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG4gIGhlaWdodDogNzV2aDtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWVib2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxuICBwYWRkaW5nOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZjNmYztcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVmM2ZjO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbiNjb21wdXRlci1nYW1lYm9hcmQgLmNlbGw6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBjZWxsO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxMWQ0ODtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgbWluLXdpZHRoOiA0MDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXBzLXRpdGxlIHtcXHJcXG4gIGNvbG9yOiAjZWZmNmZmO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbiNzaGlwLWJ1dHRvbnMgYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGNvbG9yOiAjMDIwNjE3O1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3JvdGF0ZS1zaGlwcy1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNWNmNjtcXHJcXG59XFxyXFxuXFxyXFxuI3JhbmRvbWl6ZS1zaGlwcy1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwYjk4MTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2V0LXNoaXBzLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBbZGF0YS1zaGlwLW9yaWVudGF0aW9uPSdob3Jpem9udGFsJ10ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBbZGF0YS1zaGlwLW9yaWVudGF0aW9uPSd2ZXJ0aWNhbCddIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNlbGwge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDQyZjJlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0YjhhNjtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnaW5nLWVsZW1lbnQge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJlZC1jZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2VkLXNoaXAge1xcclxcbiAgYm9yZGVyOiAycHggZGFzaGVkICNmN2ZlZTc7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICBjdXJzb3I6IG5vLWRyb3A7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNlbGwtcGxhY2VkIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNDJmMmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRiOGE2O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jZWxsLXBsYWNlZC5pbnZpc2libGUge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tcHV0ZXItZ2FtZWJvYXJkIC5jZWxsLmFscmVhZHktaGl0LWNlbGwge1xcclxcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbXB1dGVyLWdhbWVib2FyZCAuY2VsbC5hbHJlYWR5LWhpdC1jZWxsOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbiNyZXBsYXktYnRuIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDhweCAyNHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYmYyNDtcXHJcXG59XFxyXFxuXFxyXFxuI3JlcGxheS1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzI1NTQ7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjUyNDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4jZ2FtZS10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZWZmNmZmO1xyXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jbWVzc2FnZS1hbmQtcGxheS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI21lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiAjZWZmNmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMTJweCAyNHB4O1xyXG59XHJcblxyXG4jcGxheS1idG4ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4cHggMjRweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcclxufVxyXG5cclxuI3BsYXktYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU2M2ViO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzI1NTQ7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyNTI0O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWUtdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNlZmY2ZmY7XFxyXFxuICBmb250LXNpemU6IDIuNnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVzc2FnZS1hbmQtcGxheS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNtZXNzYWdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6ICNlZmY2ZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIG1hcmdpbjogMTJweCAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheS1idG4ge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogOHB4IDI0cHg7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheS1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1NjNlYjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXB1dGVyKG5hbWUpIHtcclxuICBjb25zdCBnYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcclxuICAvLyB0byBwcmV2ZW50IHRoZSBhaSBmcm9tIGhpdHRpbmcgdGhlIHNhbWUgc3BvdFxyXG4gIGNvbnN0IG5vdEF0dGFja2VkQ2VsbHMgPSBjcmVhdGVQb3NzaWJsZUhpdHMoKTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUG9zc2libGVIaXRzKCkge1xyXG4gICAgY29uc3QgY2VsbHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUJvYXJkLmdldE51bWJlck9mUm93cygpOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lQm9hcmQuZ2V0TnVtYmVyT2ZDb2x1bW5zKCk7IGorKykge1xyXG4gICAgICAgIGNlbGxzLnB1c2goeyB4OiBpLCB5OiBqIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2VsbHM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIG5hbWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRHYW1lQm9hcmQoKSB7XHJcbiAgICByZXR1cm4gZ2FtZUJvYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXR0YWNrUmFuZG9tbHkoZW5lbXlHYW1lQm9hcmQpIHtcclxuICAgIGNvbnN0IGNlbGxUb0F0dGFja0luZGV4ID0gTWF0aC5mbG9vcihcclxuICAgICAgTWF0aC5yYW5kb20oKSAqIG5vdEF0dGFja2VkQ2VsbHMubGVuZ3RoXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBub3RBdHRhY2tlZENlbGxzW2NlbGxUb0F0dGFja0luZGV4XTtcclxuICAgIG5vdEF0dGFja2VkQ2VsbHMuc3BsaWNlKGNlbGxUb0F0dGFja0luZGV4LCAxKTtcclxuICAgIHJldHVybiBlbmVteUdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgZ2V0TmFtZSwgZ2V0R2FtZUJvYXJkLCBhdHRhY2tSYW5kb21seSB9O1xyXG59XHJcbiIsImltcG9ydCAnLi9hc3NldHMvZ2FtZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERPTUhhbmRsZXIoZ2FtZSkge1xyXG4gIGNvbnN0IGdhbWVCb2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkcy1jb250YWluZXInKTtcclxuICBjb25zdCBnYW1lTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XHJcbiAgY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ0bicpO1xyXG5cclxuICBjb25zdCBwbGF5ZXIgPSBnYW1lLmdldFBsYXllcigpO1xyXG4gIGNvbnN0IGNvbXB1dGVyID0gZ2FtZS5nZXRDb21wdXRlcigpO1xyXG5cclxuICBjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBwbGF5ZXIuZ2V0R2FtZUJvYXJkKCk7XHJcbiAgY29uc3QgY29tcHV0ZXJHYW1lQm9hcmQgPSBjb21wdXRlci5nZXRHYW1lQm9hcmQoKTtcclxuXHJcbiAgY29uc3QgcGxheWVyRG9tR2FtZUJvYXJkID0gY3JlYXRlRE9NR2FtZUJvYXJkKFxyXG4gICAgcGxheWVyR2FtZUJvYXJkLFxyXG4gICAgJ3BsYXllci1nYW1lYm9hcmQnXHJcbiAgKTtcclxuICBjb25zdCBjb21wdXRlckRvbUdhbWVCb2FyZCA9IGNyZWF0ZURPTUdhbWVCb2FyZChcclxuICAgIGNvbXB1dGVyR2FtZUJvYXJkLFxyXG4gICAgJ2NvbXB1dGVyLWdhbWVib2FyZCdcclxuICApO1xyXG4gIGhpZGVDb21wdXRlckdhbWVCb2FyZCgpO1xyXG5cclxuICBnYW1lQm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckRvbUdhbWVCb2FyZCk7XHJcbiAgZ2FtZUJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlckRvbUdhbWVCb2FyZCk7XHJcblxyXG4gIHBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZW1vdmVTaGlwc0NvbnRhaW5lcigpO1xyXG4gICAgcGxheUJ0bi5yZW1vdmUoKTtcclxuICAgIGNvbXB1dGVyLmdldEdhbWVCb2FyZCgpLnBsYWNlU2hpcHNSYW5kb21seSgpO1xyXG4gICAgc2hvd0NvbXB1dGVyR2FtZUJvYXJkKCk7XHJcbiAgICB1cGRhdGVEaXNwbGF5KGNvbXB1dGVyR2FtZUJvYXJkLCBjb21wdXRlckRvbUdhbWVCb2FyZCk7XHJcbiAgICBzZXRDdXJyZW50VHVybk1lc3NhZ2UoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGlkZUNvbXB1dGVyR2FtZUJvYXJkKCkge1xyXG4gICAgY29tcHV0ZXJEb21HYW1lQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dDb21wdXRlckdhbWVCb2FyZCgpIHtcclxuICAgIGNvbXB1dGVyRG9tR2FtZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93Q29tcHV0ZXJTaGlwcygpIHtcclxuICAgIGNvbXB1dGVyRG9tR2FtZUJvYXJkXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1jZWxsLXBsYWNlZCcpXHJcbiAgICAgIC5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKCdyYW5kb21pemUtc2hpcHMtYnRuJylcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJhbmRvbWl6ZVNoaXBzKTtcclxuXHJcbiAgZnVuY3Rpb24gcmFuZG9taXplU2hpcHMoKSB7XHJcbiAgICByZXNldFNoaXBzKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgcmVtb3ZlRHJhZ0Z1bmN0aW9uYWxpdHkoc2hpcCk7XHJcbiAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgncGxhY2VkLXNoaXAnKTtcclxuICAgIH0pO1xyXG4gICAgcGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xyXG4gICAgdXBkYXRlRGlzcGxheShwbGF5ZXJHYW1lQm9hcmQsIHBsYXllckRvbUdhbWVCb2FyZCk7XHJcbiAgICBlbmFibGVQbGF5QnV0dG9uKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbmFibGVQbGF5QnV0dG9uKCkge1xyXG4gICAgcGxheUJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGlzYWJsZVBsYXlCdXR0b24oKSB7XHJcbiAgICBwbGF5QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEN1cnJlbnRUdXJuTWVzc2FnZSgpIHtcclxuICAgIGdhbWVNZXNzYWdlLnRleHRDb250ZW50ID0gYEl0J3MgJHtnYW1lXHJcbiAgICAgIC5nZXRDdXJyZW50UGxheWVyVHVybigpXHJcbiAgICAgIC5nZXROYW1lKCl9IHR1cm5gO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0V2lubmVyKHdpbm5lcikge1xyXG4gICAgZ2FtZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHt3aW5uZXIuZ2V0TmFtZSgpfSB3b24hIWA7XHJcbiAgICBjb25zdCByZXBsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJlcGxheUJ0bi50ZXh0Q29udGVudCA9ICdSZXBsYXknO1xyXG4gICAgcmVwbGF5QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVwbGF5LWJ0bicpO1xyXG4gICAgcmVwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWFuZC1wbGF5LWNvbnRhaW5lcicpXHJcbiAgICAgIC5hcHBlbmRDaGlsZChyZXBsYXlCdG4pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQ2VsbChyb3csIGNvbHVtbikge1xyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS14LXBvc2l0aW9uJywgcm93KTtcclxuICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXktcG9zaXRpb24nLCBjb2x1bW4pO1xyXG5cclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlRGlzcGxheShnYW1lQm9hcmQsIGRvbUdhbWVCb2FyZCkge1xyXG4gICAgY29uc3QgZ2FtZUJvYXJkU3RhdGUgPSBnYW1lQm9hcmQuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCByb3dzID0gZ2FtZUJvYXJkLmdldE51bWJlck9mUm93cygpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IGdhbWVCb2FyZC5nZXROdW1iZXJPZkNvbHVtbnMoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0QXRDdXJyZW50Q2VsbCA9IGdhbWVCb2FyZFN0YXRlW2ldW2pdO1xyXG4gICAgICAgIGNvbnN0IGRvbUdhbWVCb2FyZENlbGwgPSBkb21HYW1lQm9hcmQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIGAuY2VsbFtkYXRhLXgtcG9zaXRpb249XCIke2l9XCJdW2RhdGEteS1wb3NpdGlvbj1cIiR7an1cIl1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAob2JqZWN0QXRDdXJyZW50Q2VsbCA9PT0gJycpIHtcclxuICAgICAgICAgIGRvbUdhbWVCb2FyZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1jZWxsLXBsYWNlZCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob2JqZWN0QXRDdXJyZW50Q2VsbCA9PT0gJ2hpdCcpIHtcclxuICAgICAgICAgIGRvbUdhbWVCb2FyZENlbGwudGV4dENvbnRlbnQgPSAn8J+Oryc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvYmplY3RBdEN1cnJlbnRDZWxsID09PSAnbWlzcycpIHtcclxuICAgICAgICAgIGRvbUdhbWVCb2FyZENlbGwudGV4dENvbnRlbnQgPSAn8J+Miic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIHRvIGF2b2lkIGNvbXB1dGVyIGdhbWVib2FyZCBzaGlwcyBmcm9tIGJlaW5nIHZpc2libGVcclxuICAgICAgICAgIGlmIChkb21HYW1lQm9hcmQgPT09IHBsYXllckRvbUdhbWVCb2FyZCkge1xyXG4gICAgICAgICAgICBkb21HYW1lQm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY2VsbC1wbGFjZWQnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvbUdhbWVCb2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1jZWxsLXBsYWNlZCcpO1xyXG4gICAgICAgICAgICBkb21HYW1lQm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlU2hpcHNDb250YWluZXIoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcHMtY29udGFpbmVyJykucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVET01HYW1lQm9hcmQoZ2FtZUJvYXJkLCBpZCkge1xyXG4gICAgY29uc3QgZG9tR2FtZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkb21HYW1lQm9hcmQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XHJcbiAgICBkb21HYW1lQm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgIGNvbnN0IHJvd3MgPSBnYW1lQm9hcmQuZ2V0TnVtYmVyT2ZSb3dzKCk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gZ2FtZUJvYXJkLmdldE51bWJlck9mQ29sdW1ucygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gY3JlYXRlQ2VsbChpLCBqKTtcclxuICAgICAgICBpZiAoaWQgPT09ICdwbGF5ZXItZ2FtZWJvYXJkJykge1xyXG4gICAgICAgICAgYWRkRHJvcEZ1bmN0aW9uYWxpdHkoY2VsbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFkZEF0YWNrRnVuY3Rpb25hbGl0eShjZWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9tR2FtZUJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkb21HYW1lQm9hcmQuc3R5bGVbXHJcbiAgICAgICdncmlkLXRlbXBsYXRlLXJvd3MnXHJcbiAgICBdID0gYHJlcGVhdCgke2dhbWVCb2FyZC5nZXROdW1iZXJPZlJvd3MoKX0sIDFmcilgO1xyXG4gICAgZG9tR2FtZUJvYXJkLnN0eWxlW1xyXG4gICAgICAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ1xyXG4gICAgXSA9IGByZXBlYXQoJHtnYW1lQm9hcmQuZ2V0TnVtYmVyT2ZDb2x1bW5zKCl9LCAxZnIpYDtcclxuXHJcbiAgICByZXR1cm4gZG9tR2FtZUJvYXJkO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnNoaXBgKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBhZGREcmFnRnVuY3Rpb25hbGl0eShlbGVtZW50KTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaG92ZXJDZWxsQW5kSXRzTmVhckNlbGxzKHgsIHksIHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgY3VycmVudENlbGw7XHJcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgY3VycmVudENlbGwgPSBwbGF5ZXJEb21HYW1lQm9hcmQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIGAuY2VsbFtkYXRhLXgtcG9zaXRpb249XCIke3h9XCJdW2RhdGEteS1wb3NpdGlvbj1cIiR7eSArIGl9XCJdYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdmVydGljYWxcclxuICAgICAgICBjdXJyZW50Q2VsbCA9IHBsYXllckRvbUdhbWVCb2FyZC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgYC5jZWxsW2RhdGEteC1wb3NpdGlvbj1cIiR7eCArIGl9XCJdW2RhdGEteS1wb3NpdGlvbj1cIiR7eX1cIl1gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50Q2VsbC5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkLWNlbGwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUhvdmVyQ2VsbEFuZE5lYXJDZWxscygpIHtcclxuICAgIHBsYXllckRvbUdhbWVCb2FyZFxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmhvdmVyZWQtY2VsbCcpXHJcbiAgICAgIC5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQtY2VsbCcpKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0ZS1zaGlwcy1idG4nKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcHMpO1xyXG5cclxuICBmdW5jdGlvbiByb3RhdGVTaGlwcygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50T3JpZW50YXRpb24gPSBzaGlwLmdldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLW9yaWVudGF0aW9uJyk7XHJcbiAgICAgIGNvbnN0IHJvdGF0ZWRPcmllbnRhdGlvbiA9XHJcbiAgICAgICAgY3VycmVudE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xyXG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLW9yaWVudGF0aW9uJywgcm90YXRlZE9yaWVudGF0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LXNoaXBzLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVzZXRTaGlwcygpO1xyXG4gICAgdXBkYXRlRGlzcGxheShwbGF5ZXJHYW1lQm9hcmQsIHBsYXllckRvbUdhbWVCb2FyZCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0U2hpcHMoKSB7XHJcbiAgICBkaXNhYmxlUGxheUJ1dHRvbigpO1xyXG4gICAgcGxheWVyR2FtZUJvYXJkLmNsZWFyR2FtZUJvYXJkKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VkLXNoaXAnKS5mb3JFYWNoKChwbGFjZWRTaGlwKSA9PiB7XHJcbiAgICAgIHBsYWNlZFNoaXAuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2VkLXNoaXAnKTtcclxuICAgICAgcGxhY2VkU2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZy1lbGVtZW50Jyk7XHJcbiAgICAgIGFkZERyYWdGdW5jdGlvbmFsaXR5KHBsYWNlZFNoaXApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsZXQgY3VycmVudERyYWdnaW5nRWxlbWVudDtcclxuXHJcbiAgZnVuY3Rpb24gYWRkRHJvcEZ1bmN0aW9uYWxpdHkoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKCFjdXJyZW50RHJhZ2dpbmdFbGVtZW50KSByZXR1cm47XHJcbiAgICAgIHJlbW92ZUhvdmVyQ2VsbEFuZE5lYXJDZWxscygpO1xyXG4gICAgICBjb25zdCB4ID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXgtcG9zaXRpb24nKSk7XHJcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEteS1wb3NpdGlvbicpKTtcclxuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IE51bWJlcihcclxuICAgICAgICBjdXJyZW50RHJhZ2dpbmdFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLWxlbmd0aCcpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gY3VycmVudERyYWdnaW5nRWxlbWVudC5nZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgJ2RhdGEtc2hpcC1vcmllbnRhdGlvbidcclxuICAgICAgKTtcclxuICAgICAgaWYgKHBsYXllckdhbWVCb2FyZC5pc1NoaXBQbGFjZVZhbGlkKHgsIHksIHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCcpO1xyXG4gICAgICAgIGhvdmVyQ2VsbEFuZEl0c05lYXJDZWxscyh4LCB5LCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoIWN1cnJlbnREcmFnZ2luZ0VsZW1lbnQpIHJldHVybjtcclxuICAgICAgY29uc3QgY2VsbFRvUGxhY2VTaGlwID0gZS50YXJnZXQ7XHJcbiAgICAgIGNvbnN0IHggPSBOdW1iZXIoY2VsbFRvUGxhY2VTaGlwLmdldEF0dHJpYnV0ZSgnZGF0YS14LXBvc2l0aW9uJykpO1xyXG4gICAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGxUb1BsYWNlU2hpcC5nZXRBdHRyaWJ1dGUoJ2RhdGEteS1wb3NpdGlvbicpKTtcclxuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IE51bWJlcihcclxuICAgICAgICBjdXJyZW50RHJhZ2dpbmdFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLWxlbmd0aCcpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gY3VycmVudERyYWdnaW5nRWxlbWVudC5nZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgJ2RhdGEtc2hpcC1vcmllbnRhdGlvbidcclxuICAgICAgKTtcclxuICAgICAgaWYgKHBsYXllckdhbWVCb2FyZC5pc1NoaXBQbGFjZVZhbGlkKHgsIHksIHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoeCwgeSwgc2hpcExlbmd0aCwgb3JpZW50YXRpb24pO1xyXG4gICAgICAgIGN1cnJlbnREcmFnZ2luZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxhY2VkLXNoaXAnKTtcclxuICAgICAgICB1cGRhdGVEaXNwbGF5KHBsYXllckdhbWVCb2FyZCwgcGxheWVyRG9tR2FtZUJvYXJkKTtcclxuICAgICAgICByZW1vdmVEcmFnRnVuY3Rpb25hbGl0eShjdXJyZW50RHJhZ2dpbmdFbGVtZW50KTtcclxuICAgICAgICByZW1vdmVIb3ZlckNlbGxBbmROZWFyQ2VsbHMoKTtcclxuICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkLmFsbFRoZVNoaXBzSGF2ZUJlZW5QbGFjZWQoKSkge1xyXG4gICAgICAgICAgZW5hYmxlUGxheUJ1dHRvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50RHJhZ2dpbmdFbGVtZW50ID0gbnVsbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gdGhpcyBpcyBhIHNpbXVsYXRpb24gb2YgdGhlIGdhbWUgbG9vcFxyXG4gIGZ1bmN0aW9uIGFkZEF0YWNrRnVuY3Rpb25hbGl0eShjZWxsKSB7XHJcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyB0byBhdm9pZCB0aGUgcGxheWVyIGZyb20gYXR0YWNraW5nIG11bHRpcGxlIHRpbWVzIGJlZm9yZSB0aGUgY29tcHV0ZXJcclxuICAgICAgaWYgKGdhbWUuZ2V0Q3VycmVudFBsYXllclR1cm4oKSAhPT0gcGxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHggPSBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteC1wb3NpdGlvbicpKTtcclxuICAgICAgY29uc3QgeSA9IE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS15LXBvc2l0aW9uJykpO1xyXG4gICAgICBjb25zdCBbc3VjY2VzZnVsQXR0YWNrLCBtc2ddID0gcGxheWVyLmF0dGFjayh4LCB5LCBjb21wdXRlckdhbWVCb2FyZCk7XHJcbiAgICAgIGlmIChzdWNjZXNmdWxBdHRhY2spIHtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2FscmVhZHktaGl0LWNlbGwnKTtcclxuICAgICAgICBnYW1lLnNldEN1cnJlbnRQbGF5ZXJUdXJuKGNvbXB1dGVyKTtcclxuICAgICAgICBzZXRDdXJyZW50VHVybk1lc3NhZ2UoKTtcclxuICAgICAgICB1cGRhdGVEaXNwbGF5KGNvbXB1dGVyR2FtZUJvYXJkLCBjb21wdXRlckRvbUdhbWVCb2FyZCk7XHJcbiAgICAgICAgaWYgKGNvbXB1dGVyR2FtZUJvYXJkLmFsbFRoZVNoaXBzSGF2ZUJlZW5TdW5rKCkpIHtcclxuICAgICAgICAgIHNob3dDb21wdXRlclNoaXBzKCk7XHJcbiAgICAgICAgICBzZXRXaW5uZXIocGxheWVyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudFR1cm5NZXNzYWdlKCk7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGNvbXB1dGVyLmF0dGFja1JhbmRvbWx5KHBsYXllckdhbWVCb2FyZCkpO1xyXG4gICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlRGlzcGxheShwbGF5ZXJHYW1lQm9hcmQsIHBsYXllckRvbUdhbWVCb2FyZCk7XHJcbiAgICAgICAgaWYgKHBsYXllckdhbWVCb2FyZC5hbGxUaGVTaGlwc0hhdmVCZWVuU3VuaygpKSB7XHJcbiAgICAgICAgICBzaG93Q29tcHV0ZXJTaGlwcygpO1xyXG4gICAgICAgICAgc2V0V2lubmVyKGNvbXB1dGVyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FtZS5zZXRDdXJyZW50UGxheWVyVHVybihwbGF5ZXIpO1xyXG4gICAgICAgIHNldEN1cnJlbnRUdXJuTWVzc2FnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGV2ZW50KSB7XHJcbiAgICBjdXJyZW50RHJhZ2dpbmdFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIGN1cnJlbnREcmFnZ2luZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmctZWxlbWVudCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25EcmFnRW5kKGV2ZW50KSB7XHJcbiAgICBjdXJyZW50RHJhZ2dpbmdFbGVtZW50ID0gbnVsbDtcclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZy1lbGVtZW50Jyk7XHJcbiAgICBwbGF5ZXJEb21HYW1lQm9hcmRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3ZlcmVkLWNlbGwnKVxyXG4gICAgICAuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkLWNlbGwnKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGREcmFnRnVuY3Rpb25hbGl0eShlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0Jywgb25EcmFnU3RhcnQpO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgb25EcmFnRW5kKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZURyYWdGdW5jdGlvbmFsaXR5KGVsZW1lbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpO1xyXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBvbkRyYWdTdGFydCk7XHJcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBvbkRyYWdFbmQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgdXBkYXRlRGlzcGxheSB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUocGxheWVyLCBjb21wdXRlcikge1xyXG4gIGxldCBjdXJyZW50VHVybiA9IHBsYXllcjtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0UGxheWVyKCkge1xyXG4gICAgcmV0dXJuIHBsYXllcjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldENvbXB1dGVyKCkge1xyXG4gICAgcmV0dXJuIGNvbXB1dGVyO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllclR1cm4oKSB7XHJcbiAgICByZXR1cm4gY3VycmVudFR1cm47XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRDdXJyZW50UGxheWVyVHVybihwbGF5ZXIpIHtcclxuICAgIGN1cnJlbnRUdXJuID0gcGxheWVyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldFBsYXllcixcclxuICAgIGdldENvbXB1dGVyLFxyXG4gICAgZ2V0Q3VycmVudFBsYXllclR1cm4sXHJcbiAgICBzZXRDdXJyZW50UGxheWVyVHVybixcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoeExlbmd0aCA9IDEwLCB5TGVuZ3RoID0gMTApIHtcclxuICBjb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKHhMZW5ndGgsIHlMZW5ndGgpO1xyXG4gIC8vIHRoaXMgaXMgYW4gYXJyYXkgdGhhdCB3aWxsIGtlZXAgYWxsIHRoZSBwbGFjZWQgU2hpcCBvYmplY3RzLCBhbmQgaXRzIGdvaW5nIHRvIGJlIHVzZWZ1bFxyXG4gIC8vIGZvciB0aGUgYWxsVGhlU2hpcHNIYXZlQmVlblN1bmsgbWV0aG9kICh0byBhdm9pZCBkb3VibGUgbG9vcGluZyB0aGUgYm9hcmQgYW5kIHNlYXJjaGluZyB3aGVyZSBhcmUgdGhlIHNoaXBzKVxyXG4gIGxldCBwbGFjZWRTaGlwcyA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZCh4TGVuZ3RoLCB5TGVuZ3RoKSB7XHJcbiAgICBjb25zdCBuZXdCb2FyZCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4TGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgcm93ID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgeUxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgcm93W2pdID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgbmV3Qm9hcmQucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0JvYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XHJcbiAgICByZXR1cm4gYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXROdW1iZXJPZlJvd3MoKSB7XHJcbiAgICByZXR1cm4gYm9hcmQubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TnVtYmVyT2ZDb2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIGJvYXJkWzBdLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVuc3VyZVNoaXBQbGFjZUlzTm90T3V0T2ZCb3VuZHMoZW5kaW5nUG9zaXRpb24sIGxpbWl0KSB7XHJcbiAgICByZXR1cm4gZW5kaW5nUG9zaXRpb24gPCBsaW1pdDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzVGhlcmVBU2hpcEhvcml6b250YWxseSh4LCB5LCBzaGlwTGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHR5cGVvZiBib2FyZFt4XVtpXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNUaGVyZUFTaGlwVmVydGljYWxseSh4LCB5LCBzaGlwTGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHR5cGVvZiBib2FyZFtpXVt5XSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNTaGlwUGxhY2VWYWxpZCh4LCB5LCBzaGlwTGVuZ3RoLCBzaGlwT3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCcpIHtcclxuICAgIGNvbnN0IGlzU2hpcFBsYWNlbWVudE91dE9mQm91bmRzID1cclxuICAgICAgc2hpcE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCdcclxuICAgICAgICA/IGVuc3VyZVNoaXBQbGFjZUlzTm90T3V0T2ZCb3VuZHMoXHJcbiAgICAgICAgICAgIHkgKyBzaGlwTGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgZ2V0TnVtYmVyT2ZDb2x1bW5zKClcclxuICAgICAgICAgIClcclxuICAgICAgICA6IGVuc3VyZVNoaXBQbGFjZUlzTm90T3V0T2ZCb3VuZHMoXHJcbiAgICAgICAgICAgIHggKyBzaGlwTGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgZ2V0TnVtYmVyT2ZSb3dzKClcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgaWYgKCFpc1NoaXBQbGFjZW1lbnRPdXRPZkJvdW5kcykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNUaGVyZUFTaGlwQWxyZWFkeSA9XHJcbiAgICAgIHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnXHJcbiAgICAgICAgPyBpc1RoZXJlQVNoaXBIb3Jpem9udGFsbHkoeCwgeSwgc2hpcExlbmd0aClcclxuICAgICAgICA6IGlzVGhlcmVBU2hpcFZlcnRpY2FsbHkoeCwgeSwgc2hpcExlbmd0aCk7XHJcblxyXG4gICAgaWYgKGlzVGhlcmVBU2hpcEFscmVhZHkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHgsIHksIHNoaXBMZW5ndGgsIHNoaXBPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJykge1xyXG4gICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgIHBsYWNlU2hpcEhvcml6b250YWxseSh4LCB5LCBzaGlwTGVuZ3RoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsYWNlU2hpcFZlcnRpY2FsbHkoeCwgeSwgc2hpcExlbmd0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZVNoaXBWZXJ0aWNhbGx5KHgsIHksIHNoaXBMZW5ndGgpIHtcclxuICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGJvYXJkW2ldW3ldID0gc2hpcDtcclxuICAgIH1cclxuICAgIHBsYWNlZFNoaXBzLnB1c2goc2hpcCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZVNoaXBIb3Jpem9udGFsbHkoeCwgeSwgc2hpcExlbmd0aCkge1xyXG4gICAgY29uc3Qgc2hpcCA9IFNoaXAoc2hpcExlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgYm9hcmRbeF1baV0gPSBzaGlwO1xyXG4gICAgfVxyXG4gICAgcGxhY2VkU2hpcHMucHVzaChzaGlwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcFJhbmRvbWx5KHNoaXBMZW5ndGgpIHtcclxuICAgIGNvbnN0IG9yaWVudGF0aW9ucyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdldE51bWJlck9mUm93cygpKTtcclxuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdldE51bWJlck9mQ29sdW1ucygpKTtcclxuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPVxyXG4gICAgICAgIG9yaWVudGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcmllbnRhdGlvbnMubGVuZ3RoKV07XHJcbiAgICAgIGlmIChpc1NoaXBQbGFjZVZhbGlkKHgsIHksIHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgIHBsYWNlU2hpcCh4LCB5LCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcclxuICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzUsIDQsIDMsIDMsIDJdO1xyXG4gICAgd2hpbGUgKCFhbGxUaGVTaGlwc0hhdmVCZWVuUGxhY2VkKCkpIHtcclxuICAgICAgc2hpcExlbmd0aHMuZm9yRWFjaCgoc2hpcExlbmd0aCkgPT4ge1xyXG4gICAgICAgIHBsYWNlU2hpcFJhbmRvbWx5KHNoaXBMZW5ndGgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG4gICAgY29uc3Qgb2JqZWN0QXRDdXJyZW50Q29yZGluYXRlID0gYm9hcmRbeF1beV07XHJcbiAgICAvLyBjb29yZGluYXRlIGFscmVhZHkgaGl0XHJcbiAgICBpZiAoXHJcbiAgICAgIG9iamVjdEF0Q3VycmVudENvcmRpbmF0ZSA9PT0gJ2hpdCcgfHxcclxuICAgICAgb2JqZWN0QXRDdXJyZW50Q29yZGluYXRlID09PSAnbWlzcydcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gW2ZhbHNlLCAnQ2VsbCBhbHJlYWR5IGhpdCddO1xyXG4gICAgfVxyXG4gICAgLy8gbWlzc1xyXG4gICAgaWYgKG9iamVjdEF0Q3VycmVudENvcmRpbmF0ZSA9PT0gJycpIHtcclxuICAgICAgYm9hcmRbeF1beV0gPSAnbWlzcyc7XHJcbiAgICAgIHJldHVybiBbdHJ1ZSwgJ01pc3MnXTtcclxuICAgIH1cclxuICAgIC8vIHRoZXJlIGlzIGEgc2hpcFxyXG4gICAgb2JqZWN0QXRDdXJyZW50Q29yZGluYXRlLmhpdCgpO1xyXG4gICAgYm9hcmRbeF1beV0gPSAnaGl0JztcclxuICAgIHJldHVybiBbdHJ1ZSwgJ1N1Y2Nlc2Z1bCBoaXQnXTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFsbFRoZVNoaXBzSGF2ZUJlZW5QbGFjZWQoKSB7XHJcbiAgICByZXR1cm4gcGxhY2VkU2hpcHMubGVuZ3RoID09PSA1O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWxsVGhlU2hpcHNIYXZlQmVlblN1bmsoKSB7XHJcbiAgICAvLyBpZiBhdGxlYXN0IG9uZSBzaGlwIGhhc24ndCBiZWVuIHN1bmssIHRoZW4gcmV0dXJuIGZhbHNlXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYWNlZFNoaXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghcGxhY2VkU2hpcHNbaV0uaXNTdW5rKCkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJHYW1lQm9hcmQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHhMZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHlMZW5ndGg7IGorKykge1xyXG4gICAgICAgIGJvYXJkW2ldW2pdID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBsYWNlZFNoaXBzID0gW107XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0U3RhdGUsXHJcbiAgICBnZXROdW1iZXJPZlJvd3MsXHJcbiAgICBnZXROdW1iZXJPZkNvbHVtbnMsXHJcbiAgICBpc1NoaXBQbGFjZVZhbGlkLFxyXG4gICAgcGxhY2VTaGlwLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIHBsYWNlU2hpcHNSYW5kb21seSxcclxuICAgIGFsbFRoZVNoaXBzSGF2ZUJlZW5QbGFjZWQsXHJcbiAgICBhbGxUaGVTaGlwc0hhdmVCZWVuU3VuayxcclxuICAgIGNsZWFyR2FtZUJvYXJkLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2dhbWVCb2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xyXG4gIGNvbnN0IGdhbWVCb2FyZCA9IEdhbWVCb2FyZCgpO1xyXG5cclxuICBmdW5jdGlvbiBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIG5hbWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRHYW1lQm9hcmQoKSB7XHJcbiAgICByZXR1cm4gZ2FtZUJvYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXR0YWNrKHgsIHksIGVuZW15R2FtZUJvYXJkKSB7XHJcbiAgICByZXR1cm4gZW5lbXlHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGdldE5hbWUsIGdldEdhbWVCb2FyZCwgYXR0YWNrIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChzaGlwTGVuZ3RoKSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gc2hpcExlbmd0aDtcclxuICBsZXQgaGl0cyA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGhpdCgpIHtcclxuICAgIGhpdHMrKztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcclxuICAgIHJldHVybiBsZW5ndGggPT09IGhpdHM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBoaXQsIGlzU3VuayB9O1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSAnLi9jb21wdXRlcic7XHJcbmltcG9ydCB7IERPTUhhbmRsZXIgfSBmcm9tICcuL2RvbSc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJ1BsYXllcicpO1xyXG5cclxuY29uc3QgY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoJ0NvbXB1dGVyJyk7XHJcblxyXG5jb25zdCBnYW1lID0gR2FtZShwbGF5ZXIsIGNvbXB1dGVyKTtcclxuXHJcbkRPTUhhbmRsZXIoZ2FtZSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==