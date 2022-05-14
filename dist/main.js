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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Roboto;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: 600;\n    font-style: normal;\n}\n\n:root {\n    box-sizing: border-box;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 14px;\n}\n\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    position: relative;\n    background-color: rgb(190, 219, 229);\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px 100px;\n    font-size: 24px;\n    background-color: white;\n}\n\n.board {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 260px;\n    grid-auto-columns: 260px;\n    align-items: start;\n    gap: 40px;\n    padding: 20px 40px;\n}\n\n.board-blocker {\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 999;\n}\n\n.list {\n    background-color: white;\n    padding: 10px;\n    border-radius: 10px;\n    border-left: solid black 10px;\n}\n\n.list > .list-title {\n    padding-bottom: 15px;\n    font-size: 20px;\n}\n\n.list > .new-task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    gap: 4px;\n    padding: 10px;\n}\n\n.list > .new-task-container > .plus-icon-container {\n    display: flex;\n    align-items: center;\n}\n\n.list > .new-task-container > .add-new-task {\n    display: flex;\n    align-items: center;\n}\n\n.list > .uncomplete-container .date-container{\n    padding-bottom: 20px;\n}\n\n.list > .uncomplete-container .date{\n    padding-bottom: 4px;\n}\n\n.list .task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    grid-template-rows: auto auto;\n    gap: 4px;\n}\n\n.list .task-container > .task-title {\n    display: flex;\n    align-items: center;\n}\n\n.list .task-container > .container {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: flex;\n    gap: 10px;\n}\n\n.list .task-time, .list .priority-icon {\n    padding: 1px 8px;\n    border-radius: 20px;\n    background-color: lightyellow;\n}\n\n.list .icon {\n    height: 16px;\n}\n\n.add-new-list {\n    background-color: white;\n    padding: 10px;\n    border-radius: 10px;\n    text-align: center;\n}\n\n.popup-container {\n    position: absolute;\n    top: 34%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 10px;\n    border-radius: 10px;\n    background-color: white;\n}\n\n.popup-container > .icon-container {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.popup-container .icon {\n    height: 16px;\n}\n\n.popup-container > .popup-content {\n    padding: 0 20px;\n}\n\n.popup-container > .popup-content input {\n    box-sizing: border-box;\n    width: 100%;\n    font-size: 20px;\n    margin-bottom: 20px;\n    border: none;\n    outline: none;\n    background-color: white;\n}\n\n.popup-container > .popup-content > fieldset {\n    border: none;\n    padding: 0 0 10px 0;\n    margin: 0;\n}\n\n.popup-container fieldset > legend {\n    padding-bottom: 10px;\n    font-size: 16px;\n}\n\n.popup-container fieldset > .color-buttons {\n    display: grid;\n    grid-template-columns: repeat(5, auto);\n    grid-template-rows: repeat(2, 40px);\n    justify-items: center;\n    align-items: center;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#red:after {\n    background-color: red;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#green:after {\n    background-color: green;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#blue:after {\n    background-color: blue;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#orange:after {\n    background-color: orange;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#teal:after {\n    background-color: teal;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#lightgrey:after {\n    background-color: lightgrey;\n}\n.popup-container .color-buttons input[type=\"radio\"]#grey:after {\n    background-color: grey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#darkgrey:after {\n    background-color: darkgrey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#black:after {\n    background-color: black;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#magenta:after {\n    background-color: magenta;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:checked:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-repeat:no-repeat;\n    background-size: 16px;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container > .popup-content > .button {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    margin: 20px 0;\n    padding: 10px 0;\n    border-radius: 20px;\n    font-size: 16px;\n    background-color: rgba(255, 0, 0, 0.4);\n}\n\n.popup-container > .popup-content .datetime-picker {\n    font-size: 16px;\n}\n\n.popup-container fieldset > .priority-buttons {\n    position: relative;\n    height: 20px;\n}\n\n.popup-container fieldset .container {\n    box-sizing: border-box;\n    position: absolute;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n}\n\n.popup-container fieldset .radio.container > input {\n    z-index: 999;\n    visibility: hidden;\n    height: 20px;\n    width: 50px;\n}\n\n.popup-container fieldset .radio.container > input:after {\n    width: 60px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container fieldset .radio.container > input.low:after {\n    background-color: rgba(0, 128, 0, 0.2);\n}\n\n.popup-container fieldset .radio.container > input.medium:after {\n    background-color: rgba(255, 166, 0, 0.2);\n}\n\n.popup-container fieldset .radio.container > input.high:after {\n    background-color: rgba(255, 0, 0, 0.2);\n}\n\n.popup-container fieldset .radio.container > input.low:checked:after {\n    background-color: rgba(0, 128, 0, 0.5);\n}\n\n.popup-container fieldset .radio.container > input.medium:checked:after {\n    background-color: rgba(255, 166, 0, 0.6);\n}\n\n.popup-container fieldset .radio.container > input.high:checked:after {\n    background-color: rgba(255, 0, 0, 0.5);\n}\n\n.popup-container fieldset .text.container > div {\n    padding: 4px 16px;\n    border-radius: 20px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Roboto;\n    src: url(Roboto-Regular.ttf);\n    font-weight: 600;\n    font-style: normal;\n}\n\n:root {\n    box-sizing: border-box;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 14px;\n}\n\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    position: relative;\n    background-color: rgb(190, 219, 229);\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px 100px;\n    font-size: 24px;\n    background-color: white;\n}\n\n.board {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 260px;\n    grid-auto-columns: 260px;\n    align-items: start;\n    gap: 40px;\n    padding: 20px 40px;\n}\n\n.board-blocker {\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 999;\n}\n\n.list {\n    background-color: white;\n    padding: 10px;\n    border-radius: 10px;\n    border-left: solid black 10px;\n}\n\n.list > .list-title {\n    padding-bottom: 15px;\n    font-size: 20px;\n}\n\n.list > .new-task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    gap: 4px;\n    padding: 10px;\n}\n\n.list > .new-task-container > .plus-icon-container {\n    display: flex;\n    align-items: center;\n}\n\n.list > .new-task-container > .add-new-task {\n    display: flex;\n    align-items: center;\n}\n\n.list > .uncomplete-container .date-container{\n    padding-bottom: 20px;\n}\n\n.list > .uncomplete-container .date{\n    padding-bottom: 4px;\n}\n\n.list .task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    grid-template-rows: auto auto;\n    gap: 4px;\n}\n\n.list .task-container > .task-title {\n    display: flex;\n    align-items: center;\n}\n\n.list .task-container > .container {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: flex;\n    gap: 10px;\n}\n\n.list .task-time, .list .priority-icon {\n    padding: 1px 8px;\n    border-radius: 20px;\n    background-color: lightyellow;\n}\n\n.list .icon {\n    height: 16px;\n}\n\n.add-new-list {\n    background-color: white;\n    padding: 10px;\n    border-radius: 10px;\n    text-align: center;\n}\n\n.popup-container {\n    position: absolute;\n    top: 34%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 10px;\n    border-radius: 10px;\n    background-color: white;\n}\n\n.popup-container > .icon-container {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.popup-container .icon {\n    height: 16px;\n}\n\n.popup-container > .popup-content {\n    padding: 0 20px;\n}\n\n.popup-container > .popup-content input {\n    box-sizing: border-box;\n    width: 100%;\n    font-size: 20px;\n    margin-bottom: 20px;\n    border: none;\n    outline: none;\n    background-color: white;\n}\n\n.popup-container > .popup-content > fieldset {\n    border: none;\n    padding: 0 0 10px 0;\n    margin: 0;\n}\n\n.popup-container fieldset > legend {\n    padding-bottom: 10px;\n    font-size: 16px;\n}\n\n.popup-container fieldset > .color-buttons {\n    display: grid;\n    grid-template-columns: repeat(5, auto);\n    grid-template-rows: repeat(2, 40px);\n    justify-items: center;\n    align-items: center;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#red:after {\n    background-color: red;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#green:after {\n    background-color: green;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#blue:after {\n    background-color: blue;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#orange:after {\n    background-color: orange;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#teal:after {\n    background-color: teal;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#lightgrey:after {\n    background-color: lightgrey;\n}\n.popup-container .color-buttons input[type=\"radio\"]#grey:after {\n    background-color: grey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#darkgrey:after {\n    background-color: darkgrey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#black:after {\n    background-color: black;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#magenta:after {\n    background-color: magenta;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:checked:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    background-image: url(\"./icons/circle_white_24dp.svg\");\n    background-position: center;\n    background-repeat:no-repeat;\n    background-size: 16px;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container > .popup-content > .button {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    margin: 20px 0;\n    padding: 10px 0;\n    border-radius: 20px;\n    font-size: 16px;\n    background-color: rgba(255, 0, 0, 0.4);\n}\n\n.popup-container > .popup-content .datetime-picker {\n    font-size: 16px;\n}\n\n.popup-container fieldset > .priority-buttons {\n    position: relative;\n    height: 20px;\n}\n\n.popup-container fieldset .container {\n    box-sizing: border-box;\n    position: absolute;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n}\n\n.popup-container fieldset .radio.container > input {\n    z-index: 999;\n    visibility: hidden;\n    height: 20px;\n    width: 50px;\n}\n\n.popup-container fieldset .radio.container > input:after {\n    width: 60px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container fieldset .radio.container > input.low:after {\n    background-color: rgba(0, 128, 0, 0.2);\n}\n\n.popup-container fieldset .radio.container > input.medium:after {\n    background-color: rgba(255, 166, 0, 0.2);\n}\n\n.popup-container fieldset .radio.container > input.high:after {\n    background-color: rgba(255, 0, 0, 0.2);\n}\n\n.popup-container fieldset .radio.container > input.low:checked:after {\n    background-color: rgba(0, 128, 0, 0.5);\n}\n\n.popup-container fieldset .radio.container > input.medium:checked:after {\n    background-color: rgba(255, 166, 0, 0.6);\n}\n\n.popup-container fieldset .radio.container > input.high:checked:after {\n    background-color: rgba(255, 0, 0, 0.5);\n}\n\n.popup-container fieldset .text.container > div {\n    padding: 4px 16px;\n    border-radius: 20px;\n}\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
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

const addNewList = (title, color) => {
    const newListKey = _model_js__WEBPACK_IMPORTED_MODULE_0__.createList(title, color);
    const newList = _model_js__WEBPACK_IMPORTED_MODULE_0__.getList(newListKey);
    _view_js__WEBPACK_IMPORTED_MODULE_1__.createList(newList);
};

const editList = (key, title, color) => {
    _model_js__WEBPACK_IMPORTED_MODULE_0__.editList(key, title, color);
    _view_js__WEBPACK_IMPORTED_MODULE_1__.editList(key, title, color);
};

const exitPopup = () => {
    _view_js__WEBPACK_IMPORTED_MODULE_1__.removePopup();
    _view_js__WEBPACK_IMPORTED_MODULE_1__.removeBoardBlocker();
};

const getListTitle = (listKey) => {
    const list = _model_js__WEBPACK_IMPORTED_MODULE_0__.getList(listKey);
    return list.title;
};

const getListColor = (listKey) => {
    const list = _model_js__WEBPACK_IMPORTED_MODULE_0__.getList(listKey);
    return list.color;
};

const deleteList = (listKey) => {
    _model_js__WEBPACK_IMPORTED_MODULE_0__.deleteList(listKey);
    _view_js__WEBPACK_IMPORTED_MODULE_1__.deleteList(listKey);
};

const addNewTask = (listKey, title, datetime, priority) => {
    const newTaskKey = _model_js__WEBPACK_IMPORTED_MODULE_0__.createTask(listKey, title, datetime, priority);
    // const newTask = model.getTask(listKey, newTaskKey);
    // view.createTask(listKey, newTask);
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
/* harmony export */   "createTask": () => (/* binding */ createTask),
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

const List = (title, color) => {
    const content = {};
    const key = lowestAvailableListKey.toString();
    const updateTitle = (newTitle) => {title = newTitle};
    const updateColor = (newColor) => {color = newColor};

    lowestAvailableListKey++;

    return {title,
            color,
            key,
            content,
            updateTitle,
            updateColor};
};

const createList = (title, color) => {
    const newList = List(title, color);
    addList(newList.key, newList);
    return newList.key;
};

const editList = (key, title, color) => {
    board[key].title = title;
    board[key].color = color;
};

const addList = (key, list) => {board[key] = list};

const getList = (key) => Object.assign({}, board[key]);

const deleteList = (key) => {
    delete board[key];
    console.log(board)
};

const Task = (listKey, title, datetime, priority) => {
    

    return {listKey,
            title,
            datetime,
            priority,
    };
};

const createTask = (listKey, title, datetime, priority) => {
    console.log(listKey, title, datetime, priority)
};



/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
    const listTitle = document.createElement("div");
    const newTaskContainer = document.createElement("div");
    const plusIconContainer = document.createElement("div");
    const plusIcon = document.createElement("img");
    const addNewTask = document.createElement("div");

    list.dataset.key = listObject.key;
    list.classList = "list";
    list.style.borderLeftColor = listObject.color;
    listTitle.textContent = listObject.title;
    listTitle.classList = "list-title";
    newTaskContainer.classList = "new-task-container";
    plusIconContainer.classList = "plusIconContainer";
    addNewTask.textContent = "Add new task";
    addNewTask.classList = "add-new-task";
    plusIcon.classList = "icon";
    plusIcon.src = "../src/icons/add_black_24dp.svg"

    listTitle.addEventListener("click", createEditListPopup);
    newTaskContainer.addEventListener("click", createAddNewTaskPopup);

    list.appendChild(listTitle);
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
    popupTitle.placeholder = "Enter list title";
    
    popupContent.appendChild(colorPickerFieldset);

    addPopup(popup);
    addBoardBlocker();
};

const createEditListPopup = (e) => {
    const listKey = e.srcElement.parentNode.dataset.key;
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
    popupTitle.placeholder = "Enter list title";
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
    let selectedDateTime;
    let selectedPriorityButton;

    if (!(popupFilled())) {
        _controller_js__WEBPACK_IMPORTED_MODULE_0__.exitPopup(e);

        return;
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
        case "add-new-task":
            selectedDateTime =
                document.querySelector("input[name='datetime']");
            selectedPriorityButton =
                document.querySelector("input[name='priority']:checked");

            _controller_js__WEBPACK_IMPORTED_MODULE_0__.addNewTask(
                popupContainer.dataset.listKey,
                popupTitle.value,
                selectedDateTime.value,
                selectedPriorityButton.value
            );

    }

    _controller_js__WEBPACK_IMPORTED_MODULE_0__.exitPopup();

    return;
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

const editList = (key, title, color) => {
    const list = document.querySelector(`.list[data-key='${key}']`)
    const listTitle = list.querySelector(".list-title");

    list.style.borderLeftColor = color;
    listTitle.textContent = title;
};

const deleteList = (key) => {
    const list = document.querySelector(`.list[data-key='${key}']`)
    list.remove();
};

const createAddNewTaskPopup = (e) => {
    const popup = createPopupTemplate();
    const popupContainer = popup.querySelector(".popup-container");
    const popupContent = popup.querySelector(".popup-content");
    const popupTitle = popup.querySelector("input.popup-title");
    const dateTimeFieldset = createDateTimeFieldset();
    const priorityFieldset = createPriorityFieldset();
    const listKey = e.currentTarget.parentNode.dataset.key;

    popupContainer.id = "add-new-task";
    popupContainer.dataset.listKey = listKey;
    popupTitle.placeholder = "Enter task title";

    popupContent.appendChild(dateTimeFieldset);
    popupContent.appendChild(priorityFieldset);

    addPopup(popup);
    addBoardBlocker();
};

const createDateTimeFieldset = () => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    const input = document.createElement("input");

    legend.textContent = "Date/time";
    input.type = "datetime-local";
    input.name = "datetime";
    input.classList = "datetime-picker";

    fieldset.appendChild(legend);
    fieldset.appendChild(input);

    return fieldset;
};

const createPriorityFieldset = (selectedButton = "medium") => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    const priorityButtons = document.createElement("div");
    const radioContainer = document.createElement("div");
    const textContainer = document.createElement("div");
    const lowRadio = document.createElement("input");
    const mediumRadio = document.createElement("input");
    const highRadio = document.createElement("input");
    const lowText = document.createElement("div");
    const mediumText = document.createElement("div");
    const highText = document.createElement("div");
    const buttons = {
        low: lowRadio,
        medium: mediumRadio,
        high: highRadio,
    };

    for (const button in buttons) {
        buttons[button].type = "radio";
        buttons[button].name = "priority";
        buttons[button].classList = button;
        buttons[button].value = button;
    }

    buttons[selectedButton].setAttribute("checked", "");
    legend.textContent = "Priority";
    priorityButtons.classList = "priority-buttons";
    radioContainer.classList = "radio container";
    textContainer.classList = "text container";
    lowText.textContent = "Low";
    lowText.classList = "low";
    mediumText.textContent = "Med";
    mediumText.classList = "medium";
    highText.textContent = "High";
    highText.classList = "high";

    fieldset.appendChild(legend);
    fieldset.appendChild(priorityButtons);
    priorityButtons.appendChild(radioContainer);
    priorityButtons.appendChild(textContainer);
    radioContainer.appendChild(lowRadio);
    radioContainer.appendChild(mediumRadio);
    radioContainer.appendChild(highRadio);
    textContainer.appendChild(lowText);
    textContainer.appendChild(mediumText);
    textContainer.appendChild(highText);

    return fieldset;
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
//  board (obj) -> list (object: name (str), color (str), content (obj),
//                      lowestAvailableTaskKey (num),
//                      updateName(), updateColor(),
//                      delete(), deleteAllCompletedTasks())
//      content (obj) -> key: task (object: name (str), dateTime (str), 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxzREFBcUI7QUFDN0IsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMscURBQW9COztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscURBQW9COztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxvREFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxzREFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLHFEQUFvQjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkRBQTJELElBQUk7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkRBQTJELElBQUk7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDelhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNnQzs7QUFFdEQsd0RBQWU7O0FBRWY7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYm9hcmQvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vc3JjL3NjcmlwdHMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vc3JjL3NjcmlwdHMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL3NyYy9zY3JpcHRzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYm9hcmQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYm9hcmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJSb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ljb25zL2NpcmNsZV93aGl0ZV8yNGRwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMjE5LCAyMjkpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI2MHB4O1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogMjYwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxufVxcblxcbi5ib2FyZC1ibG9ja2VyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItbGVmdDogc29saWQgYmxhY2sgMTBweDtcXG59XFxuXFxuLmxpc3QgPiAubGlzdC10aXRsZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5saXN0ID4gLm5ldy10YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubGlzdCA+IC5uZXctdGFzay1jb250YWluZXIgPiAucGx1cy1pY29uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0ID4gLm5ldy10YXNrLWNvbnRhaW5lciA+IC5hZGQtbmV3LXRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCA+IC51bmNvbXBsZXRlLWNvbnRhaW5lciAuZGF0ZS1jb250YWluZXJ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubGlzdCA+IC51bmNvbXBsZXRlLWNvbnRhaW5lciAuZGF0ZXtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLmxpc3QgLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ubGlzdCAudGFzay1jb250YWluZXIgPiAudGFzay10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0IC50YXNrLWNvbnRhaW5lciA+IC5jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdCAudGFzay10aW1lLCAubGlzdCAucHJpb3JpdHktaWNvbiB7XFxuICAgIHBhZGRpbmc6IDFweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xcbn1cXG5cXG4ubGlzdCAuaWNvbiB7XFxuICAgIGhlaWdodDogMTZweDtcXG59XFxuXFxuLmFkZC1uZXctbGlzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzQlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5pY29uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmljb24ge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgPiAucG9wdXAtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50IGlucHV0IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50ID4gZmllbGRzZXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciBmaWVsZHNldCA+IGxlZ2VuZCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgPiAuY29sb3ItYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIGF1dG8pO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA0MHB4KTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06YWZ0ZXIge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jcmVkOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jZ3JlZW46YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2JsdWU6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jb3JhbmdlOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jdGVhbDphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNsaWdodGdyZXk6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNncmV5OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2RhcmtncmV5OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNibGFjazphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jbWFnZW50YTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hZ2VudGE7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkOmFmdGVyIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50ID4gLmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50IC5kYXRldGltZS1waWNrZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgPiAucHJpb3JpdHktYnV0dG9ucyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIGZpZWxkc2V0IC5jb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgLnJhZGlvLmNvbnRhaW5lciA+IGlucHV0IHtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgLnJhZGlvLmNvbnRhaW5lciA+IGlucHV0OmFmdGVyIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciBmaWVsZHNldCAucmFkaW8uY29udGFpbmVyID4gaW5wdXQubG93OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuMik7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgLnJhZGlvLmNvbnRhaW5lciA+IGlucHV0Lm1lZGl1bTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuMik7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgLnJhZGlvLmNvbnRhaW5lciA+IGlucHV0LmhpZ2g6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciBmaWVsZHNldCAucmFkaW8uY29udGFpbmVyID4gaW5wdXQubG93OmNoZWNrZWQ6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciBmaWVsZHNldCAucmFkaW8uY29udGFpbmVyID4gaW5wdXQubWVkaXVtOmNoZWNrZWQ6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjYpO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIGZpZWxkc2V0IC5yYWRpby5jb250YWluZXIgPiBpbnB1dC5oaWdoOmNoZWNrZWQ6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciBmaWVsZHNldCAudGV4dC5jb250YWluZXIgPiBkaXYge1xcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixRQUFRO0lBQ1IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFD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QUF3QztBQUM1Qzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICAgIHNyYzogdXJsKFJvYm90by1SZWd1bGFyLnR0Zik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAyMTksIDIyOSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjYwcHg7XFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAyNjBweDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG59XFxuXFxuLmJvYXJkLWJsb2NrZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5saXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCBibGFjayAxMHB4O1xcbn1cXG5cXG4ubGlzdCA+IC5saXN0LXRpdGxlIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmxpc3QgPiAubmV3LXRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5saXN0ID4gLm5ldy10YXNrLWNvbnRhaW5lciA+IC5wbHVzLWljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgPiAubmV3LXRhc2stY29udGFpbmVyID4gLmFkZC1uZXctdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0ID4gLnVuY29tcGxldGUtY29udGFpbmVyIC5kYXRlLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5saXN0ID4gLnVuY29tcGxldGUtY29udGFpbmVyIC5kYXRle1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4ubGlzdCAudGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5saXN0IC50YXNrLWNvbnRhaW5lciA+IC50YXNrLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgLnRhc2stY29udGFpbmVyID4gLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5saXN0IC50YXNrLXRpbWUsIC5saXN0IC5wcmlvcml0eS1pY29uIHtcXG4gICAgcGFkZGluZzogMXB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxufVxcblxcbi5saXN0IC5pY29uIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uYWRkLW5ldy1saXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzNCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gLmljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuaWNvbiB7XFxuICAgIGhlaWdodDogMTZweDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gLnBvcHVwLWNvbnRlbnQgaW5wdXQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gLnBvcHVwLWNvbnRlbnQgPiBmaWVsZHNldCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMCAwIDEwcHggMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIGZpZWxkc2V0ID4gbGVnZW5kIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciBmaWVsZHNldCA+IC5jb2xvci1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgYXV0byk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDQwcHgpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTphZnRlciB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNyZWQ6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNncmVlbjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jYmx1ZTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNvcmFuZ2U6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSN0ZWFsOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2xpZ2h0Z3JleTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2dyZXk6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jZGFya2dyZXk6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2JsYWNrOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNtYWdlbnRhOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFnZW50YTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQ6YWZ0ZXIge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaWNvbnMvY2lyY2xlX3doaXRlXzI0ZHAuc3ZnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHg7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgPiAucG9wdXAtY29udGVudCA+IC5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgPiAucG9wdXAtY29udGVudCAuZGF0ZXRpbWUtcGlja2VyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIGZpZWxkc2V0ID4gLnByaW9yaXR5LWJ1dHRvbnMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciBmaWVsZHNldCAuY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIGZpZWxkc2V0IC5yYWRpby5jb250YWluZXIgPiBpbnB1dCB7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIGZpZWxkc2V0IC5yYWRpby5jb250YWluZXIgPiBpbnB1dDphZnRlciB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgLnJhZGlvLmNvbnRhaW5lciA+IGlucHV0LmxvdzphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIGZpZWxkc2V0IC5yYWRpby5jb250YWluZXIgPiBpbnB1dC5tZWRpdW06YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjIpO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIGZpZWxkc2V0IC5yYWRpby5jb250YWluZXIgPiBpbnB1dC5oaWdoOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgLnJhZGlvLmNvbnRhaW5lciA+IGlucHV0LmxvdzpjaGVja2VkOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNSk7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgLnJhZGlvLmNvbnRhaW5lciA+IGlucHV0Lm1lZGl1bTpjaGVja2VkOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC42KTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciBmaWVsZHNldCAucmFkaW8uY29udGFpbmVyID4gaW5wdXQuaGlnaDpjaGVja2VkOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgLnRleHQuY29udGFpbmVyID4gZGl2IHtcXG4gICAgcGFkZGluZzogNHB4IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIG1vZGVsIGZyb20gXCIuL21vZGVsLmpzXCI7XG5pbXBvcnQgKiBhcyB2aWV3IGZyb20gXCIuL3ZpZXcuanNcIjtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBtb2RlbC5pbml0aWFsaXplQm9hcmQoKTtcbiAgICB2aWV3LmluaXRpYWxpemVUZW1wbGF0ZSgpO1xufVxuXG5jb25zdCBhZGROZXdMaXN0ID0gKHRpdGxlLCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IG5ld0xpc3RLZXkgPSBtb2RlbC5jcmVhdGVMaXN0KHRpdGxlLCBjb2xvcik7XG4gICAgY29uc3QgbmV3TGlzdCA9IG1vZGVsLmdldExpc3QobmV3TGlzdEtleSk7XG4gICAgdmlldy5jcmVhdGVMaXN0KG5ld0xpc3QpO1xufTtcblxuY29uc3QgZWRpdExpc3QgPSAoa2V5LCB0aXRsZSwgY29sb3IpID0+IHtcbiAgICBtb2RlbC5lZGl0TGlzdChrZXksIHRpdGxlLCBjb2xvcik7XG4gICAgdmlldy5lZGl0TGlzdChrZXksIHRpdGxlLCBjb2xvcik7XG59O1xuXG5jb25zdCBleGl0UG9wdXAgPSAoKSA9PiB7XG4gICAgdmlldy5yZW1vdmVQb3B1cCgpO1xuICAgIHZpZXcucmVtb3ZlQm9hcmRCbG9ja2VyKCk7XG59O1xuXG5jb25zdCBnZXRMaXN0VGl0bGUgPSAobGlzdEtleSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBtb2RlbC5nZXRMaXN0KGxpc3RLZXkpO1xuICAgIHJldHVybiBsaXN0LnRpdGxlO1xufTtcblxuY29uc3QgZ2V0TGlzdENvbG9yID0gKGxpc3RLZXkpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gbW9kZWwuZ2V0TGlzdChsaXN0S2V5KTtcbiAgICByZXR1cm4gbGlzdC5jb2xvcjtcbn07XG5cbmNvbnN0IGRlbGV0ZUxpc3QgPSAobGlzdEtleSkgPT4ge1xuICAgIG1vZGVsLmRlbGV0ZUxpc3QobGlzdEtleSk7XG4gICAgdmlldy5kZWxldGVMaXN0KGxpc3RLZXkpO1xufTtcblxuY29uc3QgYWRkTmV3VGFzayA9IChsaXN0S2V5LCB0aXRsZSwgZGF0ZXRpbWUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgbmV3VGFza0tleSA9IG1vZGVsLmNyZWF0ZVRhc2sobGlzdEtleSwgdGl0bGUsIGRhdGV0aW1lLCBwcmlvcml0eSk7XG4gICAgLy8gY29uc3QgbmV3VGFzayA9IG1vZGVsLmdldFRhc2sobGlzdEtleSwgbmV3VGFza0tleSk7XG4gICAgLy8gdmlldy5jcmVhdGVUYXNrKGxpc3RLZXksIG5ld1Rhc2spO1xufTtcblxuZXhwb3J0IHtpbml0LFxuICAgICAgICBhZGROZXdMaXN0LFxuICAgICAgICBlZGl0TGlzdCxcbiAgICAgICAgZXhpdFBvcHVwLFxuICAgICAgICBnZXRMaXN0VGl0bGUsXG4gICAgICAgIGdldExpc3RDb2xvcixcbiAgICAgICAgZGVsZXRlTGlzdCxcbiAgICAgICAgYWRkTmV3VGFzayxcbn07IiwiaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCJcblxubGV0IGJvYXJkO1xubGV0IGxvd2VzdEF2YWlsYWJsZUxpc3RLZXkgPSAwO1xuXG5jb25zdCBpbml0aWFsaXplQm9hcmQgPSAoKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikgJiYgYm9hcmRJblN0b3JhZ2UoKSkge1xuICAgICAgICBib2FyZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYm9hcmRcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBib2FyZCA9IHt9O1xuICAgIH1cbn07XG5cbmNvbnN0IHN0b3JhZ2VBdmFpbGFibGUgPSAodHlwZSkgPT4ge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGxldCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufTtcblxuY29uc3QgYm9hcmRJblN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJvYXJkXCIpID8gdHJ1ZSA6IGZhbHNlKTtcbn07XG5cbmNvbnN0IExpc3QgPSAodGl0bGUsIGNvbG9yKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHt9O1xuICAgIGNvbnN0IGtleSA9IGxvd2VzdEF2YWlsYWJsZUxpc3RLZXkudG9TdHJpbmcoKTtcbiAgICBjb25zdCB1cGRhdGVUaXRsZSA9IChuZXdUaXRsZSkgPT4ge3RpdGxlID0gbmV3VGl0bGV9O1xuICAgIGNvbnN0IHVwZGF0ZUNvbG9yID0gKG5ld0NvbG9yKSA9PiB7Y29sb3IgPSBuZXdDb2xvcn07XG5cbiAgICBsb3dlc3RBdmFpbGFibGVMaXN0S2V5Kys7XG5cbiAgICByZXR1cm4ge3RpdGxlLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgdXBkYXRlVGl0bGUsXG4gICAgICAgICAgICB1cGRhdGVDb2xvcn07XG59O1xuXG5jb25zdCBjcmVhdGVMaXN0ID0gKHRpdGxlLCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBMaXN0KHRpdGxlLCBjb2xvcik7XG4gICAgYWRkTGlzdChuZXdMaXN0LmtleSwgbmV3TGlzdCk7XG4gICAgcmV0dXJuIG5ld0xpc3Qua2V5O1xufTtcblxuY29uc3QgZWRpdExpc3QgPSAoa2V5LCB0aXRsZSwgY29sb3IpID0+IHtcbiAgICBib2FyZFtrZXldLnRpdGxlID0gdGl0bGU7XG4gICAgYm9hcmRba2V5XS5jb2xvciA9IGNvbG9yO1xufTtcblxuY29uc3QgYWRkTGlzdCA9IChrZXksIGxpc3QpID0+IHtib2FyZFtrZXldID0gbGlzdH07XG5cbmNvbnN0IGdldExpc3QgPSAoa2V5KSA9PiBPYmplY3QuYXNzaWduKHt9LCBib2FyZFtrZXldKTtcblxuY29uc3QgZGVsZXRlTGlzdCA9IChrZXkpID0+IHtcbiAgICBkZWxldGUgYm9hcmRba2V5XTtcbiAgICBjb25zb2xlLmxvZyhib2FyZClcbn07XG5cbmNvbnN0IFRhc2sgPSAobGlzdEtleSwgdGl0bGUsIGRhdGV0aW1lLCBwcmlvcml0eSkgPT4ge1xuICAgIFxuXG4gICAgcmV0dXJuIHtsaXN0S2V5LFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkYXRldGltZSxcbiAgICAgICAgICAgIHByaW9yaXR5LFxuICAgIH07XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrID0gKGxpc3RLZXksIHRpdGxlLCBkYXRldGltZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsaXN0S2V5LCB0aXRsZSwgZGF0ZXRpbWUsIHByaW9yaXR5KVxufTtcblxuZXhwb3J0IHtpbml0aWFsaXplQm9hcmQsXG4gICAgICAgIGNyZWF0ZUxpc3QsXG4gICAgICAgIGVkaXRMaXN0LFxuICAgICAgICBnZXRMaXN0LFxuICAgICAgICBkZWxldGVMaXN0LFxuICAgICAgICBjcmVhdGVUYXNrLFxufTsiLCJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIlxuXG5jb25zdCBpbml0aWFsaXplVGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZSgpO1xuICAgIGFkZFRlbXBsYXRlKHRlbXBsYXRlKTtcbn1cblxuY29uc3QgY3JlYXRlVGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkTmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBib2FyZC5jbGFzc0xpc3QgPSBcImJvYXJkXCI7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJUb2RvIEJvYXJkXCI7XG4gICAgYWRkTmV3TGlzdC5jbGFzc0xpc3QgPSBcImFkZC1uZXctbGlzdFwiO1xuICAgIGFkZE5ld0xpc3QudGV4dENvbnRlbnQgPSBcIisgQWRkIG5ldyBsaXN0XCI7XG5cbiAgICBhZGROZXdMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVBZGROZXdMaXN0UG9wdXApO1xuXG4gICAgdGVtcGxhdGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB0ZW1wbGF0ZS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoYWRkTmV3TGlzdCk7XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG59O1xuXG5jb25zdCBhZGRUZW1wbGF0ZSA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHRlbXBsYXRlKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAobGlzdE9iamVjdCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmV3VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcGx1c0ljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCBhZGROZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxpc3QuZGF0YXNldC5rZXkgPSBsaXN0T2JqZWN0LmtleTtcbiAgICBsaXN0LmNsYXNzTGlzdCA9IFwibGlzdFwiO1xuICAgIGxpc3Quc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gbGlzdE9iamVjdC5jb2xvcjtcbiAgICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBsaXN0T2JqZWN0LnRpdGxlO1xuICAgIGxpc3RUaXRsZS5jbGFzc0xpc3QgPSBcImxpc3QtdGl0bGVcIjtcbiAgICBuZXdUYXNrQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwibmV3LXRhc2stY29udGFpbmVyXCI7XG4gICAgcGx1c0ljb25Db250YWluZXIuY2xhc3NMaXN0ID0gXCJwbHVzSWNvbkNvbnRhaW5lclwiO1xuICAgIGFkZE5ld1Rhc2sudGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgdGFza1wiO1xuICAgIGFkZE5ld1Rhc2suY2xhc3NMaXN0ID0gXCJhZGQtbmV3LXRhc2tcIjtcbiAgICBwbHVzSWNvbi5jbGFzc0xpc3QgPSBcImljb25cIjtcbiAgICBwbHVzSWNvbi5zcmMgPSBcIi4uL3NyYy9pY29ucy9hZGRfYmxhY2tfMjRkcC5zdmdcIlxuXG4gICAgbGlzdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVFZGl0TGlzdFBvcHVwKTtcbiAgICBuZXdUYXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVBZGROZXdUYXNrUG9wdXApO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRhaW5lcik7XG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbHVzSWNvbkNvbnRhaW5lcik7XG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGROZXdUYXNrKTtcbiAgICBwbHVzSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5cbiAgICBhZGRMaXN0KGxpc3QpO1xufTtcblxuY29uc3QgYWRkTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkXCIpO1xuICAgIGNvbnN0IGFkZE5ld0xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1uZXctbGlzdFwiKTtcbiAgICBib2FyZC5pbnNlcnRCZWZvcmUobGlzdCwgYWRkTmV3TGlzdEJ1dHRvbik7XG59O1xuXG5jb25zdCBjcmVhdGVBZGROZXdMaXN0UG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBjcmVhdGVQb3B1cFRlbXBsYXRlKCk7XG4gICAgY29uc3QgY29sb3JQaWNrZXJGaWVsZHNldCA9IGNyZWF0ZUNvbG9yUGlja2VyRmllbGRzZXQoKTtcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBvcHVwQ29udGVudCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtY29udGVudFwiKTtcbiAgICBjb25zdCBwb3B1cFRpdGxlID0gcG9wdXAucXVlcnlTZWxlY3RvcihcImlucHV0LnBvcHVwLXRpdGxlXCIpO1xuXG4gICAgcG9wdXBDb250YWluZXIuaWQgPSBcImFkZC1uZXctbGlzdFwiO1xuICAgIHBvcHVwVGl0bGUucGxhY2Vob2xkZXIgPSBcIkVudGVyIGxpc3QgdGl0bGVcIjtcbiAgICBcbiAgICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXJGaWVsZHNldCk7XG5cbiAgICBhZGRQb3B1cChwb3B1cCk7XG4gICAgYWRkQm9hcmRCbG9ja2VyKCk7XG59O1xuXG5jb25zdCBjcmVhdGVFZGl0TGlzdFBvcHVwID0gKGUpID0+IHtcbiAgICBjb25zdCBsaXN0S2V5ID0gZS5zcmNFbGVtZW50LnBhcmVudE5vZGUuZGF0YXNldC5rZXk7XG4gICAgY29uc3QgbGlzdENvbG9yID0gY29udHJvbGxlci5nZXRMaXN0Q29sb3IobGlzdEtleSk7XG4gICAgY29uc3QgY29sb3JQaWNrZXJGaWVsZHNldCA9IGNyZWF0ZUNvbG9yUGlja2VyRmllbGRzZXQobGlzdENvbG9yKTtcbiAgICBjb25zdCBwb3B1cCA9IGNyZWF0ZVBvcHVwVGVtcGxhdGUoKTtcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBvcHVwQ29udGVudCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtY29udGVudFwiKTtcbiAgICBjb25zdCBwb3B1cFRpdGxlID0gcG9wdXAucXVlcnlTZWxlY3RvcihcImlucHV0LnBvcHVwLXRpdGxlXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBwb3B1cENvbnRhaW5lci5pZCA9IFwiZWRpdC1saXN0XCI7XG4gICAgcG9wdXBDb250YWluZXIuZGF0YXNldC5saXN0S2V5ID0gbGlzdEtleTtcbiAgICBwb3B1cFRpdGxlLnZhbHVlID0gY29udHJvbGxlci5nZXRMaXN0VGl0bGUobGlzdEtleSk7XG4gICAgcG9wdXBUaXRsZS5wbGFjZWhvbGRlciA9IFwiRW50ZXIgbGlzdCB0aXRsZVwiO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIGxpc3RcIjtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0ID0gXCJidXR0b24gZGVsZXRlLWxpc3RcIjtcblxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250cm9sbGVyLmV4aXRQb3B1cCgpO1xuICAgICAgICBjb250cm9sbGVyLmRlbGV0ZUxpc3QobGlzdEtleSk7XG4gICAgfSk7XG5cbiAgICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXJGaWVsZHNldCk7XG4gICAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBhZGRQb3B1cChwb3B1cCk7XG4gICAgYWRkQm9hcmRCbG9ja2VyKCk7XG59O1xuXG5jb25zdCBjcmVhdGVQb3B1cFRlbXBsYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IHBvcHVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcG9wdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwicG9wdXAtY29udGFpbmVyXCI7XG4gICAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImljb24tY29udGFpbmVyXCI7XG4gICAgaWNvbi5jbGFzc0xpc3QgPSBcImljb25cIjtcbiAgICBpY29uLnNyYyA9IFwiLi4vc3JjL2ljb25zL2Nsb3NlX2JsYWNrXzI0ZHAuc3ZnXCI7XG4gICAgcG9wdXBDb250ZW50LmNsYXNzTGlzdCA9IFwicG9wdXAtY29udGVudFwiO1xuICAgIHBvcHVwVGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICAgIHBvcHVwVGl0bGUuY2xhc3NMaXN0ID0gXCJwb3B1cC10aXRsZVwiO1xuXG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udHJvbGxlci5leGl0UG9wdXApO1xuXG4gICAgcG9wdXBUZW1wbGF0ZS5hcHBlbmRDaGlsZChwb3B1cENvbnRhaW5lcik7XG4gICAgcG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG4gICAgcG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXBDb250ZW50KTtcbiAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICAgIHBvcHVwQ29udGVudC5hcHBlbmRDaGlsZChwb3B1cFRpdGxlKTtcblxuICAgIHJldHVybiBwb3B1cFRlbXBsYXRlO1xufTtcblxuY29uc3QgY3JlYXRlQ29sb3JQaWNrZXJGaWVsZHNldCA9IChzZWxlY3RlZEJ1dHRvbiA9IFwiYmxhY2tcIikgPT4ge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gICAgY29uc3QgY29sb3JCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCByZWRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgZ3JlZW5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgYmx1ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBvcmFuZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgdGVhbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBsaWdodGdyZXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgZ3JleUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBkYXJrZ3JleUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBibGFja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBtYWdlbnRhQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGJ1dHRvbnMgPSB7XG4gICAgICAgIHJlZDogcmVkQnV0dG9uLFxuICAgICAgICBncmVlbjogZ3JlZW5CdXR0b24sXG4gICAgICAgIGJsdWU6IGJsdWVCdXR0b24sXG4gICAgICAgIG9yYW5nZTogb3JhbmdlQnV0dG9uLFxuICAgICAgICB0ZWFsOiB0ZWFsQnV0dG9uLFxuICAgICAgICBsaWdodGdyZXk6IGxpZ2h0Z3JleUJ1dHRvbixcbiAgICAgICAgZ3JleTogZ3JleUJ1dHRvbixcbiAgICAgICAgZGFya2dyZXk6IGRhcmtncmV5QnV0dG9uLFxuICAgICAgICBibGFjazogYmxhY2tCdXR0b24sXG4gICAgICAgIG1hZ2VudGE6IG1hZ2VudGFCdXR0b24sXG4gICAgfTtcblxuICAgIGZvciAoY29uc3QgYnV0dG9uIGluIGJ1dHRvbnMpIHtcbiAgICAgICAgYnV0dG9uc1tidXR0b25dLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIGJ1dHRvbnNbYnV0dG9uXS5uYW1lID0gXCJjb2xvclwiO1xuICAgICAgICBidXR0b25zW2J1dHRvbl0uaWQgPSBidXR0b247XG4gICAgICAgIGJ1dHRvbnNbYnV0dG9uXS52YWx1ZSA9IGJ1dHRvbjtcbiAgICB9XG5cbiAgICBidXR0b25zW3NlbGVjdGVkQnV0dG9uXS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiTGlzdCBDb2xvclwiO1xuICAgIGNvbG9yQnV0dG9ucy5jbGFzc0xpc3QgPSBcImNvbG9yLWJ1dHRvbnNcIjtcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoY29sb3JCdXR0b25zKTtcblxuICAgIGZvciAoY29uc3QgYnV0dG9uIGluIGJ1dHRvbnMpIHtcbiAgICAgICAgY29sb3JCdXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbnNbYnV0dG9uXSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBmaWVsZHNldDtcbn07XG5cbmNvbnN0IGFkZFBvcHVwID0gKHBvcHVwKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xufTtcblxuY29uc3QgcmVtb3ZlUG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLWNvbnRhaW5lclwiKTtcbiAgICBwb3B1cC5yZW1vdmUoKTtcbn07XG5cbmNvbnN0IGFkZEJvYXJkQmxvY2tlciA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIik7XG4gICAgY29uc3QgYm9hcmRCbG9ja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGJvYXJkLnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgYm9hcmRCbG9ja2VyLmNsYXNzTGlzdCA9IFwiYm9hcmQtYmxvY2tlclwiO1xuXG4gICAgYm9hcmRCbG9ja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBib2FyZEJsb2NrZXJDbGljayk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRCbG9ja2VyKTtcbn07XG5cbmNvbnN0IGJvYXJkQmxvY2tlckNsaWNrID0gKGUpID0+IHtcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBvcHVwVHlwZSA9IHBvcHVwQ29udGFpbmVyLmlkO1xuICAgIGNvbnN0IHBvcHVwVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLXRpdGxlXCIpO1xuICAgIGxldCBzZWxlY3RlZENvbG9yQnV0dG9uO1xuICAgIGxldCBzZWxlY3RlZERhdGVUaW1lO1xuICAgIGxldCBzZWxlY3RlZFByaW9yaXR5QnV0dG9uO1xuXG4gICAgaWYgKCEocG9wdXBGaWxsZWQoKSkpIHtcbiAgICAgICAgY29udHJvbGxlci5leGl0UG9wdXAoZSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBzd2l0Y2gocG9wdXBUeXBlKSB7XG4gICAgICAgIGNhc2UgXCJhZGQtbmV3LWxpc3RcIjpcbiAgICAgICAgICAgIHNlbGVjdGVkQ29sb3JCdXR0b24gPSBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nY29sb3InXTpjaGVja2VkXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29udHJvbGxlci5hZGROZXdMaXN0KFxuICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUudmFsdWUsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvckJ1dHRvbi52YWx1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZWRpdC1saXN0XCI6XG4gICAgICAgICAgICBzZWxlY3RlZENvbG9yQnV0dG9uID0gXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2NvbG9yJ106Y2hlY2tlZFwiKTtcblxuICAgICAgICAgICAgY29udHJvbGxlci5lZGl0TGlzdChcbiAgICAgICAgICAgICAgICBwb3B1cENvbnRhaW5lci5kYXRhc2V0Lmxpc3RLZXksXG4gICAgICAgICAgICAgICAgcG9wdXBUaXRsZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yQnV0dG9uLnZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhZGQtbmV3LXRhc2tcIjpcbiAgICAgICAgICAgIHNlbGVjdGVkRGF0ZVRpbWUgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdkYXRldGltZSddXCIpO1xuICAgICAgICAgICAgc2VsZWN0ZWRQcmlvcml0eUJ1dHRvbiA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKTtcblxuICAgICAgICAgICAgY29udHJvbGxlci5hZGROZXdUYXNrKFxuICAgICAgICAgICAgICAgIHBvcHVwQ29udGFpbmVyLmRhdGFzZXQubGlzdEtleSxcbiAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZVRpbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQcmlvcml0eUJ1dHRvbi52YWx1ZVxuICAgICAgICAgICAgKTtcblxuICAgIH1cblxuICAgIGNvbnRyb2xsZXIuZXhpdFBvcHVwKCk7XG5cbiAgICByZXR1cm47XG59O1xuXG5jb25zdCByZW1vdmVCb2FyZEJsb2NrZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkXCIpO1xuICAgIGNvbnN0IGJvYXJkQmxvY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYmxvY2tlclwiKTtcbiAgICBcbiAgICBib2FyZC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBib2FyZEJsb2NrZXIucmVtb3ZlKCk7XG59O1xuXG5jb25zdCBwb3B1cEZpbGxlZCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC10aXRsZVwiKTtcbiAgICBcbiAgICByZXR1cm4gKHBvcHVwVGl0bGUudmFsdWUgPT09IFwiXCIpID8gZmFsc2UgOiB0cnVlO1xufTtcblxuY29uc3QgZWRpdExpc3QgPSAoa2V5LCB0aXRsZSwgY29sb3IpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3RbZGF0YS1rZXk9JyR7a2V5fSddYClcbiAgICBjb25zdCBsaXN0VGl0bGUgPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC10aXRsZVwiKTtcblxuICAgIGxpc3Quc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29sb3I7XG4gICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG59O1xuXG5jb25zdCBkZWxldGVMaXN0ID0gKGtleSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlzdFtkYXRhLWtleT0nJHtrZXl9J11gKVxuICAgIGxpc3QucmVtb3ZlKCk7XG59O1xuXG5jb25zdCBjcmVhdGVBZGROZXdUYXNrUG9wdXAgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gY3JlYXRlUG9wdXBUZW1wbGF0ZSgpO1xuICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1jb250YWluZXJcIik7XG4gICAgY29uc3QgcG9wdXBDb250ZW50ID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1jb250ZW50XCIpO1xuICAgIGNvbnN0IHBvcHVwVGl0bGUgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQucG9wdXAtdGl0bGVcIik7XG4gICAgY29uc3QgZGF0ZVRpbWVGaWVsZHNldCA9IGNyZWF0ZURhdGVUaW1lRmllbGRzZXQoKTtcbiAgICBjb25zdCBwcmlvcml0eUZpZWxkc2V0ID0gY3JlYXRlUHJpb3JpdHlGaWVsZHNldCgpO1xuICAgIGNvbnN0IGxpc3RLZXkgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmtleTtcblxuICAgIHBvcHVwQ29udGFpbmVyLmlkID0gXCJhZGQtbmV3LXRhc2tcIjtcbiAgICBwb3B1cENvbnRhaW5lci5kYXRhc2V0Lmxpc3RLZXkgPSBsaXN0S2V5O1xuICAgIHBvcHVwVGl0bGUucGxhY2Vob2xkZXIgPSBcIkVudGVyIHRhc2sgdGl0bGVcIjtcblxuICAgIHBvcHVwQ29udGVudC5hcHBlbmRDaGlsZChkYXRlVGltZUZpZWxkc2V0KTtcbiAgICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlGaWVsZHNldCk7XG5cbiAgICBhZGRQb3B1cChwb3B1cCk7XG4gICAgYWRkQm9hcmRCbG9ja2VyKCk7XG59O1xuXG5jb25zdCBjcmVhdGVEYXRlVGltZUZpZWxkc2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIkRhdGUvdGltZVwiO1xuICAgIGlucHV0LnR5cGUgPSBcImRhdGV0aW1lLWxvY2FsXCI7XG4gICAgaW5wdXQubmFtZSA9IFwiZGF0ZXRpbWVcIjtcbiAgICBpbnB1dC5jbGFzc0xpc3QgPSBcImRhdGV0aW1lLXBpY2tlclwiO1xuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4gZmllbGRzZXQ7XG59O1xuXG5jb25zdCBjcmVhdGVQcmlvcml0eUZpZWxkc2V0ID0gKHNlbGVjdGVkQnV0dG9uID0gXCJtZWRpdW1cIikgPT4ge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbG93UmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgbWVkaXVtUmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgaGlnaFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGxvd1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lZGl1bVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhpZ2hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBidXR0b25zID0ge1xuICAgICAgICBsb3c6IGxvd1JhZGlvLFxuICAgICAgICBtZWRpdW06IG1lZGl1bVJhZGlvLFxuICAgICAgICBoaWdoOiBoaWdoUmFkaW8sXG4gICAgfTtcblxuICAgIGZvciAoY29uc3QgYnV0dG9uIGluIGJ1dHRvbnMpIHtcbiAgICAgICAgYnV0dG9uc1tidXR0b25dLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIGJ1dHRvbnNbYnV0dG9uXS5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgICAgICBidXR0b25zW2J1dHRvbl0uY2xhc3NMaXN0ID0gYnV0dG9uO1xuICAgICAgICBidXR0b25zW2J1dHRvbl0udmFsdWUgPSBidXR0b247XG4gICAgfVxuXG4gICAgYnV0dG9uc1tzZWxlY3RlZEJ1dHRvbl0uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlCdXR0b25zLmNsYXNzTGlzdCA9IFwicHJpb3JpdHktYnV0dG9uc1wiO1xuICAgIHJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwicmFkaW8gY29udGFpbmVyXCI7XG4gICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QgPSBcInRleHQgY29udGFpbmVyXCI7XG4gICAgbG93VGV4dC50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgbG93VGV4dC5jbGFzc0xpc3QgPSBcImxvd1wiO1xuICAgIG1lZGl1bVRleHQudGV4dENvbnRlbnQgPSBcIk1lZFwiO1xuICAgIG1lZGl1bVRleHQuY2xhc3NMaXN0ID0gXCJtZWRpdW1cIjtcbiAgICBoaWdoVGV4dC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIGhpZ2hUZXh0LmNsYXNzTGlzdCA9IFwiaGlnaFwiO1xuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChwcmlvcml0eUJ1dHRvbnMpO1xuICAgIHByaW9yaXR5QnV0dG9ucy5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcik7XG4gICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvd1JhZGlvKTtcbiAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWRpdW1SYWRpbyk7XG4gICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQoaGlnaFJhZGlvKTtcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvd1RleHQpO1xuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVkaXVtVGV4dCk7XG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdoVGV4dCk7XG5cbiAgICByZXR1cm4gZmllbGRzZXQ7XG59O1xuXG5leHBvcnQge2luaXRpYWxpemVUZW1wbGF0ZSxcbiAgICAgICAgY3JlYXRlTGlzdCxcbiAgICAgICAgcmVtb3ZlUG9wdXAsXG4gICAgICAgIHJlbW92ZUJvYXJkQmxvY2tlcixcbiAgICAgICAgZWRpdExpc3QsXG4gICAgICAgIGRlbGV0ZUxpc3QsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSBcIi4vc2NyaXB0cy9jb250cm9sbGVyLmpzXCI7XG5cbmNvbnRyb2xsZXIuaW5pdCgpO1xuXG4vL3Rlc3QgZnVuY3Rpb24gY2FsbHNcblxuXG5cbi8vUGxhbm5pbmdcbi8vSW5kZXhcbi8vICBjb250cm9sbGVyLmluaXQoKTtcbi8vTW9kZWxcbi8vICBib2FyZCAob2JqKSAtPiBsaXN0IChvYmplY3Q6IG5hbWUgKHN0ciksIGNvbG9yIChzdHIpLCBjb250ZW50IChvYmopLFxuLy8gICAgICAgICAgICAgICAgICAgICAgbG93ZXN0QXZhaWxhYmxlVGFza0tleSAobnVtKSxcbi8vICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZU5hbWUoKSwgdXBkYXRlQ29sb3IoKSxcbi8vICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSgpLCBkZWxldGVBbGxDb21wbGV0ZWRUYXNrcygpKVxuLy8gICAgICBjb250ZW50IChvYmopIC0+IGtleTogdGFzayAob2JqZWN0OiBuYW1lIChzdHIpLCBkYXRlVGltZSAoc3RyKSwgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5IChzdHIpLCBjb21wbGV0ZSAoYm9vbGVhbiksIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVOYW1lKCksIHVwZGF0ZURhdGVUaW1lKCksIHVwZGF0ZVByaW9yaXR5KCksIHVwZGF0ZUNvbXBsZXRlKCksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSgpKVxuLy8gIGluaXRpdGlhbGl6ZUJvYXJkKCksIGNyZWF0ZUxpc3QoKSwgY3JlYXRlVGFzaygpLCBhZGRMaXN0KCksIGFkZFRhc2soKSwgZ2V0TGlzdCgpLCBnZXRUYXNrKCksIHVwZGF0ZUxpc3QoKSxcbi8vICAgICAgdXBkYXRlVGFzaygpLCBkZWxldGVMaXN0KCksIGRlbGV0ZVRhc2soKVxuLy9cbi8vVmlld1xuLy8gIG5ld0xpc3RQb3B1cCAobm9kZUxpc3QpXG4vLyAgbmV3VGFza1BvcHVwIChub2RlbGlzdClcbi8vICBlZGl0TGlzdFBvcHVwIChub2RlTGlzdClcbi8vICBlZGl0VGFza1BvcHVwIChub2RlTGlzdClcbi8vICBpbml0aWFsaXplVGVtcGxhdGUoKSwgY3JlYXRlVGVtcGxhdGUoKSwgYWRkVGVtcGxhdGUoKSxcbi8vICBjcmVhdGVBZGROZXdMaXN0UG9wdXAoKSwgY3JlYXRlQWRkTmV3VGFza1BvcHVwKCksIGNyZWF0ZUVkaXRMaXN0UG9wdXAoKSxcbi8vICBjcmVhdGVFZGl0VGFza1BvcHVwKCksIGFkZFBvcHVwKCksIHJlbW92ZVBvcHVwKCksIGFkZEJvYXJkQmxvY2tlcigpLFxuLy8gIHJlbW92ZUJvYXJkQmxvY2tlcigpLCBjcmVhdGVMaXN0KCksIFxuLy8gIGNyZWF0ZVRhc2soKSwgYWRkTGlzdCgpLCBhZGRUYXNrKClcbi8vICBcbi8vQ29udHJvbGxlclxuLy8gIGluaXQoKSwgYWRkTmV3TGlzdFBvcHVwKGUpLCBhZGROZXdUYXNrUG9wdXAoZSksIGVkaXRMaXN0UG9wdXAoZSksXG4vLyAgZWRpdFRhc2tQb3B1cChlKSwgZXhpdFBvcHVwKGUpLCBcbi8vICBhZGROZXdMaXN0KGUpLCBhZGROZXdUYXNrKGUpLCBlZGl0TGlzdChlKSwgZWRpdFRhc2soZSksXG4vLyAgZGVsZXRlTGlzdChlKSwgZGVsZXRlQWxsQ29tcGxldGVkTGlzdHMoZSksIGRlbGV0ZVRhc2soZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=