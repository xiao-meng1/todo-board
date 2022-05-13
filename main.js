/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Roboto-Regular.ttf */ "./src/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/circle_white_24dp.svg */ "./src/icons/circle_white_24dp.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Roboto;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: 600;\n    font-style: normal;\n}\n\n:root {\n    box-sizing: border-box;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 14px;\n}\n\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    position: relative;\n    background-color: rgb(190, 219, 229);\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px 100px;\n    font-size: 24px;\n    background-color: white;\n}\n\n.board {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 260px;\n    grid-auto-columns: 260px;\n    align-items: start;\n    gap: 40px;\n    padding: 20px 40px;\n}\n\n.board-blocker {\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 999;\n}\n\n.list {\n    background-color: white;\n    padding: 10px;\n    border-radius: 10px;\n    border-left: solid black 10px;\n}\n\n.list > .list-name {\n    padding-bottom: 30px;\n    font-size: 20px;\n}\n\n.list > .new-task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    gap: 4px;\n    padding-bottom: 20px;\n}\n\n.list > .new-task-container > .plus-icon-container {\n    display: flex;\n    align-items: center;\n}\n\n.list > .new-task-container > .add-new-task {\n    display: flex;\n    align-items: center;\n}\n\n.list > .uncomplete-container .date-container{\n    padding-bottom: 20px;\n}\n\n.list > .uncomplete-container .date{\n    padding-bottom: 4px;\n}\n\n.list .task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    grid-template-rows: auto auto;\n    gap: 4px;\n}\n\n.list .task-container > .task-name {\n    display: flex;\n    align-items: center;\n}\n\n.list .task-container > .container {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: flex;\n    gap: 10px;\n}\n\n.list .task-time, .list .priority-icon {\n    padding: 1px 8px;\n    border-radius: 20px;\n    background-color: lightyellow;\n}\n\n.list .icon {\n    height: 16px;\n}\n\n.add-new-list {\n    background-color: white;\n    padding: 10px;\n    border-radius: 10px;\n    text-align: center;\n}\n\n.popup-container {\n    position: absolute;\n    top: 34%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 10px;\n    border-radius: 10px;\n    background-color: white;\n}\n\n.popup-container > .icon-container {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.popup-container .icon {\n    height: 16px;\n}\n\n.popup-container > .popup-content {\n    padding: 0 20px;\n}\n\n.popup-container > .popup-content > input {\n    box-sizing: border-box;\n    width: 100%;\n    font-size: 20px;\n    margin-bottom: 20px;\n    border: none;\n    outline: none;\n    background-color: white;\n}\n\n.popup-container > .popup-content > fieldset {\n    border: none;\n    padding: 0 0 10px 0;\n    margin: 0;\n}\n\n.popup-container fieldset > legend {\n    padding-bottom: 10px;\n    font-size: 16px;\n}\n\n.popup-container fieldset > .color-buttons {\n    display: grid;\n    grid-template-columns: repeat(5, auto);\n    grid-template-rows: repeat(2, 40px);\n    justify-items: center;\n    align-items: center;\n\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#red:after {\n    background-color: red;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#green:after {\n    background-color: green;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#blue:after {\n    background-color: blue;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#orange:after {\n    background-color: orange;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#teal:after {\n    background-color: teal;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#lightgrey:after {\n    background-color: lightgrey;\n}\n.popup-container .color-buttons input[type=\"radio\"]#grey:after {\n    background-color: grey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#darkgrey:after {\n    background-color: darkgrey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#black:after {\n    background-color: black;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#magenta:after {\n    background-color: magenta;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:checked:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-repeat:no-repeat;\n    background-size: 16px;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container > .popup-content > .button {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    margin: 20px 0;\n    padding: 10px 0;\n    border-radius: 20px;\n    font-size: 16px;\n    background-color: rgba(255, 0, 0, 0.4);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Roboto;\n    src: url(Roboto-Regular.ttf);\n    font-weight: 600;\n    font-style: normal;\n}\n\n:root {\n    box-sizing: border-box;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 14px;\n}\n\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    position: relative;\n    background-color: rgb(190, 219, 229);\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px 100px;\n    font-size: 24px;\n    background-color: white;\n}\n\n.board {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 260px;\n    grid-auto-columns: 260px;\n    align-items: start;\n    gap: 40px;\n    padding: 20px 40px;\n}\n\n.board-blocker {\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 999;\n}\n\n.list {\n    background-color: white;\n    padding: 10px;\n    border-radius: 10px;\n    border-left: solid black 10px;\n}\n\n.list > .list-name {\n    padding-bottom: 30px;\n    font-size: 20px;\n}\n\n.list > .new-task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    gap: 4px;\n    padding-bottom: 20px;\n}\n\n.list > .new-task-container > .plus-icon-container {\n    display: flex;\n    align-items: center;\n}\n\n.list > .new-task-container > .add-new-task {\n    display: flex;\n    align-items: center;\n}\n\n.list > .uncomplete-container .date-container{\n    padding-bottom: 20px;\n}\n\n.list > .uncomplete-container .date{\n    padding-bottom: 4px;\n}\n\n.list .task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    grid-template-rows: auto auto;\n    gap: 4px;\n}\n\n.list .task-container > .task-name {\n    display: flex;\n    align-items: center;\n}\n\n.list .task-container > .container {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: flex;\n    gap: 10px;\n}\n\n.list .task-time, .list .priority-icon {\n    padding: 1px 8px;\n    border-radius: 20px;\n    background-color: lightyellow;\n}\n\n.list .icon {\n    height: 16px;\n}\n\n.add-new-list {\n    background-color: white;\n    padding: 10px;\n    border-radius: 10px;\n    text-align: center;\n}\n\n.popup-container {\n    position: absolute;\n    top: 34%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 10px;\n    border-radius: 10px;\n    background-color: white;\n}\n\n.popup-container > .icon-container {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.popup-container .icon {\n    height: 16px;\n}\n\n.popup-container > .popup-content {\n    padding: 0 20px;\n}\n\n.popup-container > .popup-content > input {\n    box-sizing: border-box;\n    width: 100%;\n    font-size: 20px;\n    margin-bottom: 20px;\n    border: none;\n    outline: none;\n    background-color: white;\n}\n\n.popup-container > .popup-content > fieldset {\n    border: none;\n    padding: 0 0 10px 0;\n    margin: 0;\n}\n\n.popup-container fieldset > legend {\n    padding-bottom: 10px;\n    font-size: 16px;\n}\n\n.popup-container fieldset > .color-buttons {\n    display: grid;\n    grid-template-columns: repeat(5, auto);\n    grid-template-rows: repeat(2, 40px);\n    justify-items: center;\n    align-items: center;\n\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#red:after {\n    background-color: red;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#green:after {\n    background-color: green;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#blue:after {\n    background-color: blue;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#orange:after {\n    background-color: orange;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#teal:after {\n    background-color: teal;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#lightgrey:after {\n    background-color: lightgrey;\n}\n.popup-container .color-buttons input[type=\"radio\"]#grey:after {\n    background-color: grey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#darkgrey:after {\n    background-color: darkgrey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#black:after {\n    background-color: black;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#magenta:after {\n    background-color: magenta;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:checked:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    background-image: url(\"./icons/circle_white_24dp.svg\");\n    background-position: center;\n    background-repeat:no-repeat;\n    background-size: 16px;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container > .popup-content > .button {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    margin: 20px 0;\n    padding: 10px 0;\n    border-radius: 20px;\n    font-size: 16px;\n    background-color: rgba(255, 0, 0, 0.4);\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/scripts/controller.js":
/*!***********************************!*\
  !*** ./src/scripts/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewList": () => (/* binding */ addNewList),
/* harmony export */   "deleteList": () => (/* binding */ deleteList),
/* harmony export */   "editList": () => (/* binding */ editList),
/* harmony export */   "exitPopup": () => (/* binding */ exitPopup),
/* harmony export */   "getListColor": () => (/* binding */ getListColor),
/* harmony export */   "getListTitle": () => (/* binding */ getListTitle),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/scripts/model.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./src/scripts/view.js");



const init = () => {
    _model_js__WEBPACK_IMPORTED_MODULE_0__.initializeBoard();
    _view_js__WEBPACK_IMPORTED_MODULE_1__.initializeTemplate();
}

const addNewList = (listTitle, listColor) => {
    const newListKey = _model_js__WEBPACK_IMPORTED_MODULE_0__.createList(listTitle, listColor);
    const newList = _model_js__WEBPACK_IMPORTED_MODULE_0__.getList(newListKey);
    _view_js__WEBPACK_IMPORTED_MODULE_1__.createList(newList);
};

const editList = (key, name, color) => {
    _model_js__WEBPACK_IMPORTED_MODULE_0__.editList(key, name, color);
    _view_js__WEBPACK_IMPORTED_MODULE_1__.editList(key, name, color);
};

const exitPopup = () => {
    _view_js__WEBPACK_IMPORTED_MODULE_1__.removePopup();
    _view_js__WEBPACK_IMPORTED_MODULE_1__.removeBoardBlocker();
};

const getListTitle = (listKey) => {
    const list = _model_js__WEBPACK_IMPORTED_MODULE_0__.getList(listKey);
    return list.name;
};

const getListColor = (listKey) => {
    const list = _model_js__WEBPACK_IMPORTED_MODULE_0__.getList(listKey);
    return list.color;
};

const deleteList = (listKey) => {
    _model_js__WEBPACK_IMPORTED_MODULE_0__.deleteList(listKey);
    _view_js__WEBPACK_IMPORTED_MODULE_1__.deleteList(listKey);
};



/***/ }),

/***/ "./src/scripts/model.js":
/*!******************************!*\
  !*** ./src/scripts/model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList),
/* harmony export */   "deleteList": () => (/* binding */ deleteList),
/* harmony export */   "editList": () => (/* binding */ editList),
/* harmony export */   "getList": () => (/* binding */ getList),
/* harmony export */   "initializeBoard": () => (/* binding */ initializeBoard)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/scripts/controller.js");


let board;
let lowestAvailableListKey = 0;

const initializeBoard = () => {
    if (storageAvailable("localStorage") && boardInStorage()) {
        board = localStorage.getItem("board");
    }
    else {
        board = {};
    }
};

const storageAvailable = (type) => {
    let storage;
    try {
        storage = window[type];
        let x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
};

const boardInStorage = () => {
    return (localStorage.getItem("board") ? true : false);
};

const List = (name, color) => {
    const content = [];
    const key = lowestAvailableListKey.toString();
    const updateName = (newName) => {name = newName};
    const updateColor = (newColor) => {color = newColor};

    lowestAvailableListKey++;

    return {name,
            color,
            key,
            content,
            updateName,
            updateColor};
};

const createList = (name, color) => {
    const newList = List(name, color);
    addList(newList.key, newList);
    return newList.key;
};

const editList = (key, name, color) => {
    board[key].name = name;
    board[key].color = color;
    console.log(board)
};

const addList = (key, list) => {board[key] = list};

const getList = (key) => Object.assign({}, board[key]);

const deleteList = (key) => {
    delete board[key];
    console.log(board)
};



/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddNewListPopup": () => (/* binding */ createAddNewListPopup),
/* harmony export */   "createList": () => (/* binding */ createList),
/* harmony export */   "deleteList": () => (/* binding */ deleteList),
/* harmony export */   "editList": () => (/* binding */ editList),
/* harmony export */   "initializeTemplate": () => (/* binding */ initializeTemplate),
/* harmony export */   "removeBoardBlocker": () => (/* binding */ removeBoardBlocker),
/* harmony export */   "removePopup": () => (/* binding */ removePopup)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/scripts/controller.js");


const initializeTemplate = () => {
    const template = createTemplate();
    addTemplate(template);
}

const createTemplate = () => {
    const template = document.createDocumentFragment();
    const header = document.createElement("header");
    const board = document.createElement("div");
    const addNewList = document.createElement("div");

    board.classList = "board";
    header.textContent = "Todo Board";
    addNewList.classList = "add-new-list";
    addNewList.textContent = "+ Add new list";

    addNewList.addEventListener("click", createAddNewListPopup);

    template.appendChild(header);
    template.appendChild(board);
    board.appendChild(addNewList);

    return template;
};

const addTemplate = (template) => {
    const body = document.querySelector("body");
    body.appendChild(template);
};

const createList = (listObject) => {
    const list = document.createElement("div");
    const listName = document.createElement("div");
    const newTaskContainer = document.createElement("div");
    const plusIconContainer = document.createElement("div");
    const plusIcon = document.createElement("img");
    const addNewTask = document.createElement("div");

    list.dataset.key = listObject.key;
    list.classList = "list";
    list.style.borderLeftColor = listObject.color;
    listName.textContent = listObject.name;
    listName.classList = "list-name";
    newTaskContainer.classList = "new-task-container";
    plusIconContainer.classList = "plusIconContainer";
    addNewTask.textContent = "Add new task";
    addNewTask.classList = "add-new-task";
    plusIcon.classList = "icon";
    plusIcon.src = "../src/icons/add_black_24dp.svg"

    listName.addEventListener("click", createEditListPopup);

    list.appendChild(listName);
    list.appendChild(newTaskContainer);
    newTaskContainer.appendChild(plusIconContainer);
    newTaskContainer.appendChild(addNewTask);
    plusIconContainer.appendChild(plusIcon);

    addList(list);
};

const addList = (list) => {
    const board = document.querySelector(".board");
    const addNewListButton = document.querySelector(".add-new-list");
    board.insertBefore(list, addNewListButton);
};

const createAddNewListPopup = () => {
    const popup = createPopupTemplate();
    const colorPickerFieldset = createColorPickerFieldset();
    const popupContainer = popup.querySelector(".popup-container");
    const popupContent = popup.querySelector(".popup-content");
    const popupTitle = popup.querySelector("input.popup-title");

    popupContainer.id = "add-new-list";
    popupTitle.placeholder = "Enter List Title";
    
    popupContent.appendChild(colorPickerFieldset);

    addPopup(popup);
    addBoardBlocker();
};

const createEditListPopup = (e) => {
    const listKey = e.target.parentNode.dataset.key;
    const listColor = _controller_js__WEBPACK_IMPORTED_MODULE_0__.getListColor(listKey);
    const colorPickerFieldset = createColorPickerFieldset(listColor);
    const popup = createPopupTemplate();
    const popupContainer = popup.querySelector(".popup-container");
    const popupContent = popup.querySelector(".popup-content");
    const popupTitle = popup.querySelector("input.popup-title");
    const deleteButton = document.createElement("div");

    popupContainer.id = "edit-list";
    popupContainer.dataset.listKey = listKey;
    popupTitle.value = _controller_js__WEBPACK_IMPORTED_MODULE_0__.getListTitle(listKey);
    popupTitle.placeholder = "Enter List Title";
    deleteButton.textContent = "Delete list";
    deleteButton.classList = "button delete-list";

    deleteButton.addEventListener("click", () => {
        _controller_js__WEBPACK_IMPORTED_MODULE_0__.exitPopup();
        _controller_js__WEBPACK_IMPORTED_MODULE_0__.deleteList(listKey);
    });

    popupContent.appendChild(colorPickerFieldset);
    popupContent.appendChild(deleteButton);

    addPopup(popup);
    addBoardBlocker();
};

const createPopupTemplate = () => {
    const popupTemplate = document.createDocumentFragment();
    const popupContainer = document.createElement("div");
    const iconContainer = document.createElement("div");
    const icon = document.createElement("img");
    const popupContent = document.createElement("div");
    const popupTitle = document.createElement("input");

    popupContainer.classList = "popup-container";
    iconContainer.classList = "icon-container";
    icon.classList = "icon";
    icon.src = "../src/icons/close_black_24dp.svg";
    popupContent.classList = "popup-content";
    popupTitle.type = "text";
    popupTitle.classList = "popup-title";

    icon.addEventListener("click", _controller_js__WEBPACK_IMPORTED_MODULE_0__.exitPopup);

    popupTemplate.appendChild(popupContainer);
    popupContainer.appendChild(iconContainer);
    popupContainer.appendChild(popupContent);
    iconContainer.appendChild(icon);
    popupContent.appendChild(popupTitle);

    return popupTemplate;
};

const createColorPickerFieldset = (selectedButton = "black") => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    const colorButtons = document.createElement("div");
    const redButton = document.createElement("input");
    const greenButton = document.createElement("input");
    const blueButton = document.createElement("input");
    const orangeButton = document.createElement("input");
    const tealButton = document.createElement("input");
    const lightgreyButton = document.createElement("input");
    const greyButton = document.createElement("input");
    const darkgreyButton = document.createElement("input");
    const blackButton = document.createElement("input");
    const magentaButton = document.createElement("input");
    const buttons = {
        red: redButton,
        green: greenButton,
        blue: blueButton,
        orange: orangeButton,
        teal: tealButton,
        lightgrey: lightgreyButton,
        grey: greyButton,
        darkgrey: darkgreyButton,
        black: blackButton,
        magenta: magentaButton,
    };

    for (const button in buttons) {
        buttons[button].type = "radio";
        buttons[button].name = "color";
        buttons[button].id = button;
        buttons[button].value = button;
    }

    buttons[selectedButton].setAttribute("checked", "");
    legend.textContent = "List Color";
    colorButtons.classList = "color-buttons";

    fieldset.appendChild(legend);
    fieldset.appendChild(colorButtons);

    for (const button in buttons) {
        colorButtons.appendChild(buttons[button]);
    }
    
    return fieldset;
};

const addPopup = (popup) => {
    const body = document.querySelector("body");
    body.appendChild(popup);
};

const removePopup = () => {
    const popup = document.querySelector(".popup-container");
    popup.remove();
};

const addBoardBlocker = () => {
    const board = document.querySelector(".board");
    const boardBlocker = document.createElement("div");

    board.style.opacity = 0.4;
    boardBlocker.classList = "board-blocker";

    boardBlocker.addEventListener("click", boardBlockerClick);
    board.appendChild(boardBlocker);
};

const boardBlockerClick = (e) => {
    const popupContainer = document.querySelector(".popup-container");
    const popupType = popupContainer.id;
    const popupTitle = document.querySelector(".popup-title");
    let selectedColorButton;

    if (!(popupFilled())) {
        _controller_js__WEBPACK_IMPORTED_MODULE_0__.exitPopup(e);
    }
    
    switch(popupType) {
        case "add-new-list":
            selectedColorButton = 
                document.querySelector("input[name='color']:checked");
                
            _controller_js__WEBPACK_IMPORTED_MODULE_0__.addNewList(
                popupTitle.value,
                selectedColorButton.value
            );
            break;
        case "edit-list":
            selectedColorButton = 
                document.querySelector("input[name='color']:checked");

            _controller_js__WEBPACK_IMPORTED_MODULE_0__.editList(
                popupContainer.dataset.listKey,
                popupTitle.value,
                selectedColorButton.value
            );
            break;
    }

    _controller_js__WEBPACK_IMPORTED_MODULE_0__.exitPopup();

    return false;
};

const removeBoardBlocker = () => {
    const board = document.querySelector(".board");
    const boardBlocker = document.querySelector(".board-blocker");
    
    board.style.opacity = 1;
    boardBlocker.remove();
};

const popupFilled = () => {
    const popupTitle = document.querySelector(".popup-title");
    
    return (popupTitle.value === "") ? false : true;
};

const editList = (key, name, color) => {
    const list = document.querySelector(`.list[data-key='${key}']`)
    const listName = list.querySelector(".list-name");

    list.style.borderLeftColor = color;
    listName.textContent = name;
};

const deleteList = (key) => {
    const list = document.querySelector(`.list[data-key='${key}']`)
    list.remove();
};



/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d6ac03c7b96b7acb62.ttf";

/***/ }),

/***/ "./src/icons/circle_white_24dp.svg":
/*!*****************************************!*\
  !*** ./src/icons/circle_white_24dp.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cd3c30b61f3ce67b435.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _scripts_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/controller.js */ "./src/scripts/controller.js");



_scripts_controller_js__WEBPACK_IMPORTED_MODULE_1__.init();

//test function calls



//Planning
//Index
//  controller.init();
//Model
//  board (array) -> list (object: name (str), color (str), content (array), 
//                      updateName(), updateColor(),
//                      delete(), deleteAllCompletedTasks())
//      content (array) -> task (object: name (str), dateTime (str), 
//                              priority (str), complete (boolean), 
//                              updateName(), updateDateTime(), updatePriority(), updateComplete(),
//                              delete())
//  inititializeBoard(), createList(), createTask(), addList(), addTask(), getList(), getTask(), updateList(),
//      updateTask(), deleteList(), deleteTask()
//
//View
//  newListPopup (nodeList)
//  newTaskPopup (nodelist)
//  editListPopup (nodeList)
//  editTaskPopup (nodeList)
//  initializeTemplate(), createTemplate(), addTemplate(),
//  createAddNewListPopup(), createAddNewTaskPopup(), createEditListPopup(),
//  createEditTaskPopup(), addPopup(), removePopup(), addBoardBlocker(),
//  removeBoardBlocker(), createList(), 
//  createTask(), addList(), addTask()
//  
//Controller
//  init(), addNewListPopup(e), addNewTaskPopup(e), editListPopup(e),
//  editTaskPopup(e), exitPopup(e), 
//  addNewList(e), addNewTask(e), editList(e), editTask(e),
//  deleteList(e), deleteAllCompletedLists(e), deleteTask(e)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FB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V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNnQzs7QUFFdEQsd0RBQWU7O0FBRWY7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYm9hcmQvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL3NyYy9zY3JpcHRzL21vZGVsLmpzIiwid2VicGFjazovL3RvZG8tYm9hcmQvLi9zcmMvc2NyaXB0cy92aWV3LmpzIiwid2VicGFjazovL3RvZG8tYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWJvYXJkL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYm9hcmQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9jaXJjbGVfd2hpdGVfMjRkcC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDIxOSwgMjI5KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAxMDBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNjBweDtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDI2MHB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogNDBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbn1cXG5cXG4uYm9hcmQtYmxvY2tlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDEwcHg7XFxufVxcblxcbi5saXN0ID4gLmxpc3QtbmFtZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5saXN0ID4gLm5ldy10YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3QgPiAubmV3LXRhc2stY29udGFpbmVyID4gLnBsdXMtaWNvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCA+IC5uZXctdGFzay1jb250YWluZXIgPiAuYWRkLW5ldy10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgPiAudW5jb21wbGV0ZS1jb250YWluZXIgLmRhdGUtY29udGFpbmVye1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3QgPiAudW5jb21wbGV0ZS1jb250YWluZXIgLmRhdGV7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5saXN0IC50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLmxpc3QgLnRhc2stY29udGFpbmVyID4gLnRhc2stbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0IC50YXNrLWNvbnRhaW5lciA+IC5jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdCAudGFzay10aW1lLCAubGlzdCAucHJpb3JpdHktaWNvbiB7XFxuICAgIHBhZGRpbmc6IDFweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xcbn1cXG5cXG4ubGlzdCAuaWNvbiB7XFxuICAgIGhlaWdodDogMTZweDtcXG59XFxuXFxuLmFkZC1uZXctbGlzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzQlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5pY29uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmljb24ge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgPiAucG9wdXAtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50ID4gaW5wdXQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gLnBvcHVwLWNvbnRlbnQgPiBmaWVsZHNldCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMCAwIDEwcHggMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIGZpZWxkc2V0ID4gbGVnZW5kIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciBmaWVsZHNldCA+IC5jb2xvci1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgYXV0byk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDQwcHgpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTphZnRlciB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNyZWQ6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNncmVlbjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jYmx1ZTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNvcmFuZ2U6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSN0ZWFsOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2xpZ2h0Z3JleTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2dyZXk6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jZGFya2dyZXk6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2JsYWNrOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNtYWdlbnRhOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFnZW50YTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQ6YWZ0ZXIge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gLnBvcHVwLWNvbnRlbnQgPiAuYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjQpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLFFBQVE7SUFDUixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5REFBc0Q7SUFDdEQsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0NBQXNDO0FBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICBzcmM6IHVybChSb2JvdG8tUmVndWxhci50dGYpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMjE5LCAyMjkpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI2MHB4O1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogMjYwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxufVxcblxcbi5ib2FyZC1ibG9ja2VyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItbGVmdDogc29saWQgYmxhY2sgMTBweDtcXG59XFxuXFxuLmxpc3QgPiAubGlzdC1uYW1lIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmxpc3QgPiAubmV3LXRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubGlzdCA+IC5uZXctdGFzay1jb250YWluZXIgPiAucGx1cy1pY29uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0ID4gLm5ldy10YXNrLWNvbnRhaW5lciA+IC5hZGQtbmV3LXRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCA+IC51bmNvbXBsZXRlLWNvbnRhaW5lciAuZGF0ZS1jb250YWluZXJ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubGlzdCA+IC51bmNvbXBsZXRlLWNvbnRhaW5lciAuZGF0ZXtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLmxpc3QgLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ubGlzdCAudGFzay1jb250YWluZXIgPiAudGFzay1uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgLnRhc2stY29udGFpbmVyID4gLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5saXN0IC50YXNrLXRpbWUsIC5saXN0IC5wcmlvcml0eS1pY29uIHtcXG4gICAgcGFkZGluZzogMXB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxufVxcblxcbi5saXN0IC5pY29uIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uYWRkLW5ldy1saXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzNCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gLmljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuaWNvbiB7XFxuICAgIGhlaWdodDogMTZweDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gLnBvcHVwLWNvbnRlbnQgPiBpbnB1dCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgPiAucG9wdXAtY29udGVudCA+IGZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgPiBsZWdlbmQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIGZpZWxkc2V0ID4gLmNvbG9yLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBhdXRvKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDBweCk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmFmdGVyIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI3JlZDphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2dyZWVuOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNibHVlOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI29yYW5nZTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI3RlYWw6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jbGlnaHRncmV5OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jZ3JleTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNkYXJrZ3JleTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jYmxhY2s6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI21hZ2VudGE6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYWdlbnRhO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZDphZnRlciB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pY29ucy9jaXJjbGVfd2hpdGVfMjRkcC5zdmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50ID4gLmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC40KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICogYXMgbW9kZWwgZnJvbSBcIi4vbW9kZWwuanNcIjtcbmltcG9ydCAqIGFzIHZpZXcgZnJvbSBcIi4vdmlldy5qc1wiO1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIG1vZGVsLmluaXRpYWxpemVCb2FyZCgpO1xuICAgIHZpZXcuaW5pdGlhbGl6ZVRlbXBsYXRlKCk7XG59XG5cbmNvbnN0IGFkZE5ld0xpc3QgPSAobGlzdFRpdGxlLCBsaXN0Q29sb3IpID0+IHtcbiAgICBjb25zdCBuZXdMaXN0S2V5ID0gbW9kZWwuY3JlYXRlTGlzdChsaXN0VGl0bGUsIGxpc3RDb2xvcik7XG4gICAgY29uc3QgbmV3TGlzdCA9IG1vZGVsLmdldExpc3QobmV3TGlzdEtleSk7XG4gICAgdmlldy5jcmVhdGVMaXN0KG5ld0xpc3QpO1xufTtcblxuY29uc3QgZWRpdExpc3QgPSAoa2V5LCBuYW1lLCBjb2xvcikgPT4ge1xuICAgIG1vZGVsLmVkaXRMaXN0KGtleSwgbmFtZSwgY29sb3IpO1xuICAgIHZpZXcuZWRpdExpc3Qoa2V5LCBuYW1lLCBjb2xvcik7XG59O1xuXG5jb25zdCBleGl0UG9wdXAgPSAoKSA9PiB7XG4gICAgdmlldy5yZW1vdmVQb3B1cCgpO1xuICAgIHZpZXcucmVtb3ZlQm9hcmRCbG9ja2VyKCk7XG59O1xuXG5jb25zdCBnZXRMaXN0VGl0bGUgPSAobGlzdEtleSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBtb2RlbC5nZXRMaXN0KGxpc3RLZXkpO1xuICAgIHJldHVybiBsaXN0Lm5hbWU7XG59O1xuXG5jb25zdCBnZXRMaXN0Q29sb3IgPSAobGlzdEtleSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBtb2RlbC5nZXRMaXN0KGxpc3RLZXkpO1xuICAgIHJldHVybiBsaXN0LmNvbG9yO1xufTtcblxuY29uc3QgZGVsZXRlTGlzdCA9IChsaXN0S2V5KSA9PiB7XG4gICAgbW9kZWwuZGVsZXRlTGlzdChsaXN0S2V5KTtcbiAgICB2aWV3LmRlbGV0ZUxpc3QobGlzdEtleSk7XG59O1xuXG5leHBvcnQge2luaXQsXG4gICAgICAgIGFkZE5ld0xpc3QsXG4gICAgICAgIGVkaXRMaXN0LFxuICAgICAgICBleGl0UG9wdXAsXG4gICAgICAgIGdldExpc3RUaXRsZSxcbiAgICAgICAgZ2V0TGlzdENvbG9yLFxuICAgICAgICBkZWxldGVMaXN0LFxufTsiLCJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIlxuXG5sZXQgYm9hcmQ7XG5sZXQgbG93ZXN0QXZhaWxhYmxlTGlzdEtleSA9IDA7XG5cbmNvbnN0IGluaXRpYWxpemVCb2FyZCA9ICgpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSAmJiBib2FyZEluU3RvcmFnZSgpKSB7XG4gICAgICAgIGJvYXJkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJib2FyZFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGJvYXJkID0ge307XG4gICAgfVxufTtcblxuY29uc3Qgc3RvcmFnZUF2YWlsYWJsZSA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgbGV0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59O1xuXG5jb25zdCBib2FyZEluU3RvcmFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYm9hcmRcIikgPyB0cnVlIDogZmFsc2UpO1xufTtcblxuY29uc3QgTGlzdCA9IChuYW1lLCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcbiAgICBjb25zdCBrZXkgPSBsb3dlc3RBdmFpbGFibGVMaXN0S2V5LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgdXBkYXRlTmFtZSA9IChuZXdOYW1lKSA9PiB7bmFtZSA9IG5ld05hbWV9O1xuICAgIGNvbnN0IHVwZGF0ZUNvbG9yID0gKG5ld0NvbG9yKSA9PiB7Y29sb3IgPSBuZXdDb2xvcn07XG5cbiAgICBsb3dlc3RBdmFpbGFibGVMaXN0S2V5Kys7XG5cbiAgICByZXR1cm4ge25hbWUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICB1cGRhdGVOYW1lLFxuICAgICAgICAgICAgdXBkYXRlQ29sb3J9O1xufTtcblxuY29uc3QgY3JlYXRlTGlzdCA9IChuYW1lLCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBMaXN0KG5hbWUsIGNvbG9yKTtcbiAgICBhZGRMaXN0KG5ld0xpc3Qua2V5LCBuZXdMaXN0KTtcbiAgICByZXR1cm4gbmV3TGlzdC5rZXk7XG59O1xuXG5jb25zdCBlZGl0TGlzdCA9IChrZXksIG5hbWUsIGNvbG9yKSA9PiB7XG4gICAgYm9hcmRba2V5XS5uYW1lID0gbmFtZTtcbiAgICBib2FyZFtrZXldLmNvbG9yID0gY29sb3I7XG4gICAgY29uc29sZS5sb2coYm9hcmQpXG59O1xuXG5jb25zdCBhZGRMaXN0ID0gKGtleSwgbGlzdCkgPT4ge2JvYXJkW2tleV0gPSBsaXN0fTtcblxuY29uc3QgZ2V0TGlzdCA9IChrZXkpID0+IE9iamVjdC5hc3NpZ24oe30sIGJvYXJkW2tleV0pO1xuXG5jb25zdCBkZWxldGVMaXN0ID0gKGtleSkgPT4ge1xuICAgIGRlbGV0ZSBib2FyZFtrZXldO1xuICAgIGNvbnNvbGUubG9nKGJvYXJkKVxufTtcblxuZXhwb3J0IHtpbml0aWFsaXplQm9hcmQsXG4gICAgICAgIGNyZWF0ZUxpc3QsXG4gICAgICAgIGVkaXRMaXN0LFxuICAgICAgICBnZXRMaXN0LFxuICAgICAgICBkZWxldGVMaXN0LFxufTsiLCJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIlxuXG5jb25zdCBpbml0aWFsaXplVGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZSgpO1xuICAgIGFkZFRlbXBsYXRlKHRlbXBsYXRlKTtcbn1cblxuY29uc3QgY3JlYXRlVGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkTmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBib2FyZC5jbGFzc0xpc3QgPSBcImJvYXJkXCI7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJUb2RvIEJvYXJkXCI7XG4gICAgYWRkTmV3TGlzdC5jbGFzc0xpc3QgPSBcImFkZC1uZXctbGlzdFwiO1xuICAgIGFkZE5ld0xpc3QudGV4dENvbnRlbnQgPSBcIisgQWRkIG5ldyBsaXN0XCI7XG5cbiAgICBhZGROZXdMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVBZGROZXdMaXN0UG9wdXApO1xuXG4gICAgdGVtcGxhdGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB0ZW1wbGF0ZS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoYWRkTmV3TGlzdCk7XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG59O1xuXG5jb25zdCBhZGRUZW1wbGF0ZSA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHRlbXBsYXRlKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAobGlzdE9iamVjdCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuZXdUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwbHVzSWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcGx1c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IGFkZE5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGlzdC5kYXRhc2V0LmtleSA9IGxpc3RPYmplY3Qua2V5O1xuICAgIGxpc3QuY2xhc3NMaXN0ID0gXCJsaXN0XCI7XG4gICAgbGlzdC5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBsaXN0T2JqZWN0LmNvbG9yO1xuICAgIGxpc3ROYW1lLnRleHRDb250ZW50ID0gbGlzdE9iamVjdC5uYW1lO1xuICAgIGxpc3ROYW1lLmNsYXNzTGlzdCA9IFwibGlzdC1uYW1lXCI7XG4gICAgbmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QgPSBcIm5ldy10YXNrLWNvbnRhaW5lclwiO1xuICAgIHBsdXNJY29uQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwicGx1c0ljb25Db250YWluZXJcIjtcbiAgICBhZGROZXdUYXNrLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IHRhc2tcIjtcbiAgICBhZGROZXdUYXNrLmNsYXNzTGlzdCA9IFwiYWRkLW5ldy10YXNrXCI7XG4gICAgcGx1c0ljb24uY2xhc3NMaXN0ID0gXCJpY29uXCI7XG4gICAgcGx1c0ljb24uc3JjID0gXCIuLi9zcmMvaWNvbnMvYWRkX2JsYWNrXzI0ZHAuc3ZnXCJcblxuICAgIGxpc3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVFZGl0TGlzdFBvcHVwKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdE5hbWUpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRhaW5lcik7XG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbHVzSWNvbkNvbnRhaW5lcik7XG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGROZXdUYXNrKTtcbiAgICBwbHVzSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5cbiAgICBhZGRMaXN0KGxpc3QpO1xufTtcblxuY29uc3QgYWRkTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkXCIpO1xuICAgIGNvbnN0IGFkZE5ld0xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1uZXctbGlzdFwiKTtcbiAgICBib2FyZC5pbnNlcnRCZWZvcmUobGlzdCwgYWRkTmV3TGlzdEJ1dHRvbik7XG59O1xuXG5jb25zdCBjcmVhdGVBZGROZXdMaXN0UG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBjcmVhdGVQb3B1cFRlbXBsYXRlKCk7XG4gICAgY29uc3QgY29sb3JQaWNrZXJGaWVsZHNldCA9IGNyZWF0ZUNvbG9yUGlja2VyRmllbGRzZXQoKTtcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBvcHVwQ29udGVudCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtY29udGVudFwiKTtcbiAgICBjb25zdCBwb3B1cFRpdGxlID0gcG9wdXAucXVlcnlTZWxlY3RvcihcImlucHV0LnBvcHVwLXRpdGxlXCIpO1xuXG4gICAgcG9wdXBDb250YWluZXIuaWQgPSBcImFkZC1uZXctbGlzdFwiO1xuICAgIHBvcHVwVGl0bGUucGxhY2Vob2xkZXIgPSBcIkVudGVyIExpc3QgVGl0bGVcIjtcbiAgICBcbiAgICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXJGaWVsZHNldCk7XG5cbiAgICBhZGRQb3B1cChwb3B1cCk7XG4gICAgYWRkQm9hcmRCbG9ja2VyKCk7XG59O1xuXG5jb25zdCBjcmVhdGVFZGl0TGlzdFBvcHVwID0gKGUpID0+IHtcbiAgICBjb25zdCBsaXN0S2V5ID0gZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmtleTtcbiAgICBjb25zdCBsaXN0Q29sb3IgPSBjb250cm9sbGVyLmdldExpc3RDb2xvcihsaXN0S2V5KTtcbiAgICBjb25zdCBjb2xvclBpY2tlckZpZWxkc2V0ID0gY3JlYXRlQ29sb3JQaWNrZXJGaWVsZHNldChsaXN0Q29sb3IpO1xuICAgIGNvbnN0IHBvcHVwID0gY3JlYXRlUG9wdXBUZW1wbGF0ZSgpO1xuICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1jb250YWluZXJcIik7XG4gICAgY29uc3QgcG9wdXBDb250ZW50ID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1jb250ZW50XCIpO1xuICAgIGNvbnN0IHBvcHVwVGl0bGUgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQucG9wdXAtdGl0bGVcIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHBvcHVwQ29udGFpbmVyLmlkID0gXCJlZGl0LWxpc3RcIjtcbiAgICBwb3B1cENvbnRhaW5lci5kYXRhc2V0Lmxpc3RLZXkgPSBsaXN0S2V5O1xuICAgIHBvcHVwVGl0bGUudmFsdWUgPSBjb250cm9sbGVyLmdldExpc3RUaXRsZShsaXN0S2V5KTtcbiAgICBwb3B1cFRpdGxlLnBsYWNlaG9sZGVyID0gXCJFbnRlciBMaXN0IFRpdGxlXCI7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGUgbGlzdFwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QgPSBcImJ1dHRvbiBkZWxldGUtbGlzdFwiO1xuXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXIuZXhpdFBvcHVwKCk7XG4gICAgICAgIGNvbnRyb2xsZXIuZGVsZXRlTGlzdChsaXN0S2V5KTtcbiAgICB9KTtcblxuICAgIHBvcHVwQ29udGVudC5hcHBlbmRDaGlsZChjb2xvclBpY2tlckZpZWxkc2V0KTtcbiAgICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIGFkZFBvcHVwKHBvcHVwKTtcbiAgICBhZGRCb2FyZEJsb2NrZXIoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVBvcHVwVGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXBUZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29uc3QgcG9wdXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0ID0gXCJwb3B1cC1jb250YWluZXJcIjtcbiAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwiaWNvbi1jb250YWluZXJcIjtcbiAgICBpY29uLmNsYXNzTGlzdCA9IFwiaWNvblwiO1xuICAgIGljb24uc3JjID0gXCIuLi9zcmMvaWNvbnMvY2xvc2VfYmxhY2tfMjRkcC5zdmdcIjtcbiAgICBwb3B1cENvbnRlbnQuY2xhc3NMaXN0ID0gXCJwb3B1cC1jb250ZW50XCI7XG4gICAgcG9wdXBUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcG9wdXBUaXRsZS5jbGFzc0xpc3QgPSBcInBvcHVwLXRpdGxlXCI7XG5cbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250cm9sbGVyLmV4aXRQb3B1cCk7XG5cbiAgICBwb3B1cFRlbXBsYXRlLmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcbiAgICBwb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uQ29udGFpbmVyKTtcbiAgICBwb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cENvbnRlbnQpO1xuICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKHBvcHVwVGl0bGUpO1xuXG4gICAgcmV0dXJuIHBvcHVwVGVtcGxhdGU7XG59O1xuXG5jb25zdCBjcmVhdGVDb2xvclBpY2tlckZpZWxkc2V0ID0gKHNlbGVjdGVkQnV0dG9uID0gXCJibGFja1wiKSA9PiB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbiAgICBjb25zdCBjb2xvckJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHJlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBncmVlbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBibHVlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IG9yYW5nZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB0ZWFsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGxpZ2h0Z3JleUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBncmV5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGRhcmtncmV5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGJsYWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IG1hZ2VudGFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgYnV0dG9ucyA9IHtcbiAgICAgICAgcmVkOiByZWRCdXR0b24sXG4gICAgICAgIGdyZWVuOiBncmVlbkJ1dHRvbixcbiAgICAgICAgYmx1ZTogYmx1ZUJ1dHRvbixcbiAgICAgICAgb3JhbmdlOiBvcmFuZ2VCdXR0b24sXG4gICAgICAgIHRlYWw6IHRlYWxCdXR0b24sXG4gICAgICAgIGxpZ2h0Z3JleTogbGlnaHRncmV5QnV0dG9uLFxuICAgICAgICBncmV5OiBncmV5QnV0dG9uLFxuICAgICAgICBkYXJrZ3JleTogZGFya2dyZXlCdXR0b24sXG4gICAgICAgIGJsYWNrOiBibGFja0J1dHRvbixcbiAgICAgICAgbWFnZW50YTogbWFnZW50YUJ1dHRvbixcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBidXR0b24gaW4gYnV0dG9ucykge1xuICAgICAgICBidXR0b25zW2J1dHRvbl0udHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgYnV0dG9uc1tidXR0b25dLm5hbWUgPSBcImNvbG9yXCI7XG4gICAgICAgIGJ1dHRvbnNbYnV0dG9uXS5pZCA9IGJ1dHRvbjtcbiAgICAgICAgYnV0dG9uc1tidXR0b25dLnZhbHVlID0gYnV0dG9uO1xuICAgIH1cblxuICAgIGJ1dHRvbnNbc2VsZWN0ZWRCdXR0b25dLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJMaXN0IENvbG9yXCI7XG4gICAgY29sb3JCdXR0b25zLmNsYXNzTGlzdCA9IFwiY29sb3ItYnV0dG9uc1wiO1xuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChjb2xvckJ1dHRvbnMpO1xuXG4gICAgZm9yIChjb25zdCBidXR0b24gaW4gYnV0dG9ucykge1xuICAgICAgICBjb2xvckJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uc1tidXR0b25dKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGZpZWxkc2V0O1xufTtcblxuY29uc3QgYWRkUG9wdXAgPSAocG9wdXApID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XG59O1xuXG5jb25zdCByZW1vdmVQb3B1cCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtY29udGFpbmVyXCIpO1xuICAgIHBvcHVwLnJlbW92ZSgpO1xufTtcblxuY29uc3QgYWRkQm9hcmRCbG9ja2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZFwiKTtcbiAgICBjb25zdCBib2FyZEJsb2NrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgYm9hcmQuc3R5bGUub3BhY2l0eSA9IDAuNDtcbiAgICBib2FyZEJsb2NrZXIuY2xhc3NMaXN0ID0gXCJib2FyZC1ibG9ja2VyXCI7XG5cbiAgICBib2FyZEJsb2NrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvYXJkQmxvY2tlckNsaWNrKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChib2FyZEJsb2NrZXIpO1xufTtcblxuY29uc3QgYm9hcmRCbG9ja2VyQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1jb250YWluZXJcIik7XG4gICAgY29uc3QgcG9wdXBUeXBlID0gcG9wdXBDb250YWluZXIuaWQ7XG4gICAgY29uc3QgcG9wdXBUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtdGl0bGVcIik7XG4gICAgbGV0IHNlbGVjdGVkQ29sb3JCdXR0b247XG5cbiAgICBpZiAoIShwb3B1cEZpbGxlZCgpKSkge1xuICAgICAgICBjb250cm9sbGVyLmV4aXRQb3B1cChlKTtcbiAgICB9XG4gICAgXG4gICAgc3dpdGNoKHBvcHVwVHlwZSkge1xuICAgICAgICBjYXNlIFwiYWRkLW5ldy1saXN0XCI6XG4gICAgICAgICAgICBzZWxlY3RlZENvbG9yQnV0dG9uID0gXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2NvbG9yJ106Y2hlY2tlZFwiKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkTmV3TGlzdChcbiAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3JCdXR0b24udmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImVkaXQtbGlzdFwiOlxuICAgICAgICAgICAgc2VsZWN0ZWRDb2xvckJ1dHRvbiA9IFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdjb2xvciddOmNoZWNrZWRcIik7XG5cbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZWRpdExpc3QoXG4gICAgICAgICAgICAgICAgcG9wdXBDb250YWluZXIuZGF0YXNldC5saXN0S2V5LFxuICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUudmFsdWUsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvckJ1dHRvbi52YWx1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnRyb2xsZXIuZXhpdFBvcHVwKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCByZW1vdmVCb2FyZEJsb2NrZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkXCIpO1xuICAgIGNvbnN0IGJvYXJkQmxvY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYmxvY2tlclwiKTtcbiAgICBcbiAgICBib2FyZC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBib2FyZEJsb2NrZXIucmVtb3ZlKCk7XG59O1xuXG5jb25zdCBwb3B1cEZpbGxlZCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC10aXRsZVwiKTtcbiAgICBcbiAgICByZXR1cm4gKHBvcHVwVGl0bGUudmFsdWUgPT09IFwiXCIpID8gZmFsc2UgOiB0cnVlO1xufTtcblxuY29uc3QgZWRpdExpc3QgPSAoa2V5LCBuYW1lLCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlzdFtkYXRhLWtleT0nJHtrZXl9J11gKVxuICAgIGNvbnN0IGxpc3ROYW1lID0gbGlzdC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtbmFtZVwiKTtcblxuICAgIGxpc3Quc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29sb3I7XG4gICAgbGlzdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xufTtcblxuY29uc3QgZGVsZXRlTGlzdCA9IChrZXkpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3RbZGF0YS1rZXk9JyR7a2V5fSddYClcbiAgICBsaXN0LnJlbW92ZSgpO1xufTtcblxuZXhwb3J0IHtpbml0aWFsaXplVGVtcGxhdGUsXG4gICAgICAgIGNyZWF0ZUxpc3QsXG4gICAgICAgIGNyZWF0ZUFkZE5ld0xpc3RQb3B1cCxcbiAgICAgICAgcmVtb3ZlUG9wdXAsXG4gICAgICAgIHJlbW92ZUJvYXJkQmxvY2tlcixcbiAgICAgICAgZWRpdExpc3QsXG4gICAgICAgIGRlbGV0ZUxpc3QsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSBcIi4vc2NyaXB0cy9jb250cm9sbGVyLmpzXCI7XG5cbmNvbnRyb2xsZXIuaW5pdCgpO1xuXG4vL3Rlc3QgZnVuY3Rpb24gY2FsbHNcblxuXG5cbi8vUGxhbm5pbmdcbi8vSW5kZXhcbi8vICBjb250cm9sbGVyLmluaXQoKTtcbi8vTW9kZWxcbi8vICBib2FyZCAoYXJyYXkpIC0+IGxpc3QgKG9iamVjdDogbmFtZSAoc3RyKSwgY29sb3IgKHN0ciksIGNvbnRlbnQgKGFycmF5KSwgXG4vLyAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVOYW1lKCksIHVwZGF0ZUNvbG9yKCksXG4vLyAgICAgICAgICAgICAgICAgICAgICBkZWxldGUoKSwgZGVsZXRlQWxsQ29tcGxldGVkVGFza3MoKSlcbi8vICAgICAgY29udGVudCAoYXJyYXkpIC0+IHRhc2sgKG9iamVjdDogbmFtZSAoc3RyKSwgZGF0ZVRpbWUgKHN0ciksIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eSAoc3RyKSwgY29tcGxldGUgKGJvb2xlYW4pLCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTmFtZSgpLCB1cGRhdGVEYXRlVGltZSgpLCB1cGRhdGVQcmlvcml0eSgpLCB1cGRhdGVDb21wbGV0ZSgpLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUoKSlcbi8vICBpbml0aXRpYWxpemVCb2FyZCgpLCBjcmVhdGVMaXN0KCksIGNyZWF0ZVRhc2soKSwgYWRkTGlzdCgpLCBhZGRUYXNrKCksIGdldExpc3QoKSwgZ2V0VGFzaygpLCB1cGRhdGVMaXN0KCksXG4vLyAgICAgIHVwZGF0ZVRhc2soKSwgZGVsZXRlTGlzdCgpLCBkZWxldGVUYXNrKClcbi8vXG4vL1ZpZXdcbi8vICBuZXdMaXN0UG9wdXAgKG5vZGVMaXN0KVxuLy8gIG5ld1Rhc2tQb3B1cCAobm9kZWxpc3QpXG4vLyAgZWRpdExpc3RQb3B1cCAobm9kZUxpc3QpXG4vLyAgZWRpdFRhc2tQb3B1cCAobm9kZUxpc3QpXG4vLyAgaW5pdGlhbGl6ZVRlbXBsYXRlKCksIGNyZWF0ZVRlbXBsYXRlKCksIGFkZFRlbXBsYXRlKCksXG4vLyAgY3JlYXRlQWRkTmV3TGlzdFBvcHVwKCksIGNyZWF0ZUFkZE5ld1Rhc2tQb3B1cCgpLCBjcmVhdGVFZGl0TGlzdFBvcHVwKCksXG4vLyAgY3JlYXRlRWRpdFRhc2tQb3B1cCgpLCBhZGRQb3B1cCgpLCByZW1vdmVQb3B1cCgpLCBhZGRCb2FyZEJsb2NrZXIoKSxcbi8vICByZW1vdmVCb2FyZEJsb2NrZXIoKSwgY3JlYXRlTGlzdCgpLCBcbi8vICBjcmVhdGVUYXNrKCksIGFkZExpc3QoKSwgYWRkVGFzaygpXG4vLyAgXG4vL0NvbnRyb2xsZXJcbi8vICBpbml0KCksIGFkZE5ld0xpc3RQb3B1cChlKSwgYWRkTmV3VGFza1BvcHVwKGUpLCBlZGl0TGlzdFBvcHVwKGUpLFxuLy8gIGVkaXRUYXNrUG9wdXAoZSksIGV4aXRQb3B1cChlKSwgXG4vLyAgYWRkTmV3TGlzdChlKSwgYWRkTmV3VGFzayhlKSwgZWRpdExpc3QoZSksIGVkaXRUYXNrKGUpLFxuLy8gIGRlbGV0ZUxpc3QoZSksIGRlbGV0ZUFsbENvbXBsZXRlZExpc3RzKGUpLCBkZWxldGVUYXNrKGUpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9