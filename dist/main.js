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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Roboto;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: 600;\n    font-style: normal;\n}\n\n:root {\n    box-sizing: border-box;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 14px;\n}\n\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    position: relative;\n    background-color: rgb(190, 219, 229);\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px 100px;\n    font-size: 24px;\n    background-color: aliceblue;\n}\n\n.board {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 260px;\n    grid-auto-columns: 260px;\n    align-items: start;\n    gap: 40px;\n    padding: 20px 40px;\n}\n\n.board-blocker {\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 999;\n}\n\n.list {\n    background-color:aliceblue;\n    padding: 10px;\n    border-radius: 10px;\n    border-left: solid black 10px;\n}\n\n.list > .list-name {\n    padding-bottom: 30px;\n    font-size: 20px;\n}\n\n.list > .new-task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    gap: 4px;\n    padding-bottom: 20px;\n}\n\n.list > .new-task-container > .plus-icon-container {\n    display: flex;\n    align-items: center;\n}\n\n.list > .new-task-container > .add-new-task {\n    display: flex;\n    align-items: center;\n}\n\n.list > .uncomplete-container .date-container{\n    padding-bottom: 20px;\n}\n\n.list > .uncomplete-container .date{\n    padding-bottom: 4px;\n}\n\n.list .task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    grid-template-rows: auto auto;\n    gap: 4px;\n}\n\n.list .task-container > .complete-icon-container {\n    display: flex;\n    align-items: center;\n}\n\n.list .task-container > .task-name {\n    display: flex;\n    align-items: center;\n}\n\n.list .task-container > .container {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: flex;\n    gap: 10px;\n}\n\n.list .task-time, .list .priority-icon {\n    padding: 1px 8px;\n    border-radius: 20px;\n    background-color: lightyellow;\n}\n\n.list > .completed-container > .completed-header {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 10px;\n    border-top: solid grey 1px;\n}\n\n.list > .completed-container .completed-header-icon {\n    display: flex;\n    align-items: center;\n}\n\n.list .completed-header > .header-text {\n    display: flex;\n    align-items: center;\n}\n\n.list > .completed-container > .tasks-container {\n    padding-top: 10px;\n}\n\n.list > .completed-container .task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    padding-bottom: 4px;\n}\n\n.list > .completed-container .complete-icon-container {\n    display: flex;\n    align-items: center;\n} \n\n.list .icon {\n    height: 16px;\n}\n\n.add-new-list {\n    background-color:aliceblue;\n    padding: 10px;\n    border-radius: 10px;\n    text-align: center;\n}\n\n.popup-container {\n    position: absolute;\n    top: 34%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 10px;\n    border-radius: 10px;\n    background-color: aliceblue;\n}\n\n.popup-container > .icon-container {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.popup-container .icon {\n    height: 16px;\n}\n\n.popup-container > .popup-content {\n    padding: 0 20px;\n}\n\n.popup-container > .popup-content > input {\n    box-sizing: border-box;\n    width: 100%;\n    font-size: 20px;\n    margin-bottom: 20px;\n    border: none;\n    outline: none;\n    background-color: aliceblue;\n}\n\n.popup-container > .popup-content > fieldset {\n    border: none;\n    padding: 0 0 10px 0;\n    margin: 0;\n}\n\n.popup-container fieldset > legend {\n    padding-bottom: 10px;\n    font-size: 16px;\n}\n\n.popup-container fieldset > .color-buttons {\n    display: grid;\n    grid-template-columns: repeat(5, auto);\n    grid-template-rows: repeat(2, 40px);\n    justify-items: center;\n    align-items: center;\n\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#red:after {\n    background-color: red;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#green:after {\n    background-color: green;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#blue:after {\n    background-color: blue;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#orange:after {\n    background-color: orange;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#teal:after {\n    background-color: teal;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#lightgrey:after {\n    background-color: lightgrey;\n}\n.popup-container .color-buttons input[type=\"radio\"]#grey:after {\n    background-color: grey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#darkgrey:after {\n    background-color: darkgrey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#black:after {\n    background-color: black;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#magenta:after {\n    background-color: magenta;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:checked:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-repeat:no-repeat;\n    background-size: 16px;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Roboto;\n    src: url(Roboto-Regular.ttf);\n    font-weight: 600;\n    font-style: normal;\n}\n\n:root {\n    box-sizing: border-box;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 14px;\n}\n\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    position: relative;\n    background-color: rgb(190, 219, 229);\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px 100px;\n    font-size: 24px;\n    background-color: aliceblue;\n}\n\n.board {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 260px;\n    grid-auto-columns: 260px;\n    align-items: start;\n    gap: 40px;\n    padding: 20px 40px;\n}\n\n.board-blocker {\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 999;\n}\n\n.list {\n    background-color:aliceblue;\n    padding: 10px;\n    border-radius: 10px;\n    border-left: solid black 10px;\n}\n\n.list > .list-name {\n    padding-bottom: 30px;\n    font-size: 20px;\n}\n\n.list > .new-task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    gap: 4px;\n    padding-bottom: 20px;\n}\n\n.list > .new-task-container > .plus-icon-container {\n    display: flex;\n    align-items: center;\n}\n\n.list > .new-task-container > .add-new-task {\n    display: flex;\n    align-items: center;\n}\n\n.list > .uncomplete-container .date-container{\n    padding-bottom: 20px;\n}\n\n.list > .uncomplete-container .date{\n    padding-bottom: 4px;\n}\n\n.list .task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    grid-template-rows: auto auto;\n    gap: 4px;\n}\n\n.list .task-container > .complete-icon-container {\n    display: flex;\n    align-items: center;\n}\n\n.list .task-container > .task-name {\n    display: flex;\n    align-items: center;\n}\n\n.list .task-container > .container {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: flex;\n    gap: 10px;\n}\n\n.list .task-time, .list .priority-icon {\n    padding: 1px 8px;\n    border-radius: 20px;\n    background-color: lightyellow;\n}\n\n.list > .completed-container > .completed-header {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 10px;\n    border-top: solid grey 1px;\n}\n\n.list > .completed-container .completed-header-icon {\n    display: flex;\n    align-items: center;\n}\n\n.list .completed-header > .header-text {\n    display: flex;\n    align-items: center;\n}\n\n.list > .completed-container > .tasks-container {\n    padding-top: 10px;\n}\n\n.list > .completed-container .task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    padding-bottom: 4px;\n}\n\n.list > .completed-container .complete-icon-container {\n    display: flex;\n    align-items: center;\n} \n\n.list .icon {\n    height: 16px;\n}\n\n.add-new-list {\n    background-color:aliceblue;\n    padding: 10px;\n    border-radius: 10px;\n    text-align: center;\n}\n\n.popup-container {\n    position: absolute;\n    top: 34%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 10px;\n    border-radius: 10px;\n    background-color: aliceblue;\n}\n\n.popup-container > .icon-container {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.popup-container .icon {\n    height: 16px;\n}\n\n.popup-container > .popup-content {\n    padding: 0 20px;\n}\n\n.popup-container > .popup-content > input {\n    box-sizing: border-box;\n    width: 100%;\n    font-size: 20px;\n    margin-bottom: 20px;\n    border: none;\n    outline: none;\n    background-color: aliceblue;\n}\n\n.popup-container > .popup-content > fieldset {\n    border: none;\n    padding: 0 0 10px 0;\n    margin: 0;\n}\n\n.popup-container fieldset > legend {\n    padding-bottom: 10px;\n    font-size: 16px;\n}\n\n.popup-container fieldset > .color-buttons {\n    display: grid;\n    grid-template-columns: repeat(5, auto);\n    grid-template-rows: repeat(2, 40px);\n    justify-items: center;\n    align-items: center;\n\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#red:after {\n    background-color: red;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#green:after {\n    background-color: green;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#blue:after {\n    background-color: blue;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#orange:after {\n    background-color: orange;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#teal:after {\n    background-color: teal;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#lightgrey:after {\n    background-color: lightgrey;\n}\n.popup-container .color-buttons input[type=\"radio\"]#grey:after {\n    background-color: grey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#darkgrey:after {\n    background-color: darkgrey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#black:after {\n    background-color: black;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#magenta:after {\n    background-color: magenta;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:checked:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    background-image: url(\"./icons/circle_white_24dp.svg\");\n    background-position: center;\n    background-repeat:no-repeat;\n    background-size: 16px;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "addNewListPopup": () => (/* binding */ addNewListPopup),
/* harmony export */   "exitPopup": () => (/* binding */ exitPopup),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/scripts/model.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./src/scripts/view.js");



const init = () => {
    _model_js__WEBPACK_IMPORTED_MODULE_0__.initializeBoard();
    _view_js__WEBPACK_IMPORTED_MODULE_1__.initializeTemplate();
}

const addNewList = () => {
    const newListIndex = _model_js__WEBPACK_IMPORTED_MODULE_0__.createList("Sample list", "blue");
    const newList = _model_js__WEBPACK_IMPORTED_MODULE_0__.getList(newListIndex);
    _view_js__WEBPACK_IMPORTED_MODULE_1__.createList(newList);
}

const addNewListPopup = (e) => {
    _view_js__WEBPACK_IMPORTED_MODULE_1__.createAddNewListPopup();
};

const exitPopup = (e) => {
    _view_js__WEBPACK_IMPORTED_MODULE_1__.removePopup();
    _view_js__WEBPACK_IMPORTED_MODULE_1__.removeBoardBlocker();
    return false;
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
/* harmony export */   "getList": () => (/* binding */ getList),
/* harmony export */   "initializeBoard": () => (/* binding */ initializeBoard)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/scripts/controller.js");


let board;

const initializeBoard = () => {
    if (storageAvailable("localStorage") && boardInStorage()) {
        board = localStorage.getItem("board");
    }
    else {
        board = [];
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
    const index = board.length;
    const updateName = (newName) => {name = newName};
    const updateColor = (newColor) => {color = newColor};

    return {name,
            color,
            index,
            content,
            updateName,
            updateColor};
};

const createList = (name, color) => {
    const newList = List(name, color);
    addList(newList);
    return newList.index;
};

const addList = (list) => {board.push(list)};

const getList = (index) => Object.assign({}, board[index]);



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

    addNewList.addEventListener("click", _controller_js__WEBPACK_IMPORTED_MODULE_0__.addNewListPopup);

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

    list.dataset.index = listObject.index;
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
    const popupContent = popup.querySelector(".popup-content");
    const listTitle = popup.querySelector("input#list-title");

    listTitle.placeholder = "Enter List Title";
    
    popupContent.appendChild(colorPickerFieldset);

    addPopup(popup);
    addBoardBlocker();
};

const createPopupTemplate = () => {
    const popupTemplate = document.createDocumentFragment();
    const popupContainer = document.createElement("div");
    const iconContainer = document.createElement("div");
    const icon = document.createElement("img");
    const popupContent = document.createElement("div");
    const listTitle = document.createElement("input");

    popupContainer.classList = "popup-container";
    iconContainer.classList = "icon-container";
    icon.classList = "icon";
    icon.src = "../src/icons/close_black_24dp.svg";
    popupContent.classList = "popup-content";
    listTitle.type = "text";
    listTitle.id = "list-title";

    popupTemplate.appendChild(popupContainer);
    popupContainer.appendChild(iconContainer);
    popupContainer.appendChild(popupContent);
    iconContainer.appendChild(icon);
    popupContent.appendChild(listTitle);

    return popupTemplate;
};

const createColorPickerFieldset = () => {
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

    legend.textContent = "List Color";
    colorButtons.classList = "color-buttons";
    redButton.type = "radio";
    redButton.name = "color";
    redButton.id = "red";
    redButton.value = "red";
    greenButton.type = "radio";
    greenButton.name = "color";
    greenButton.id = "green";
    greenButton.value = "green";
    blueButton.type = "radio";
    blueButton.name = "color";
    blueButton.id = "blue";
    blueButton.value = "blue";
    orangeButton.type = "radio";
    orangeButton.name = "color";
    orangeButton.id = "orange";
    orangeButton.value = "orange";
    tealButton.type = "radio";
    tealButton.name = "color";
    tealButton.id = "teal";
    tealButton.value = "teal";
    lightgreyButton.type = "radio";
    lightgreyButton.name = "color";
    lightgreyButton.id = "lightgrey";
    lightgreyButton.value = "lightgrey";
    greyButton.type = "radio";
    greyButton.name = "color";
    greyButton.id = "grey";
    greyButton.value = "grey";
    darkgreyButton.type = "radio";
    darkgreyButton.name = "color";
    darkgreyButton.id = "darkgrey";
    darkgreyButton.value = "darkgrey";
    blackButton.type = "radio";
    blackButton.name = "color";
    blackButton.id = "black";
    blackButton.value = "black";
    blackButton.setAttribute("checked", "");
    magentaButton.type = "radio";
    magentaButton.name = "color";
    magentaButton.id = "magenta";
    magentaButton.value = "magenta";

    fieldset.appendChild(legend);
    fieldset.appendChild(colorButtons);
    colorButtons.appendChild(redButton);
    colorButtons.appendChild(greenButton);
    colorButtons.appendChild(blueButton);
    colorButtons.appendChild(orangeButton);
    colorButtons.appendChild(tealButton);
    colorButtons.appendChild(lightgreyButton);
    colorButtons.appendChild(greyButton);
    colorButtons.appendChild(darkgreyButton);
    colorButtons.appendChild(blackButton);
    colorButtons.appendChild(magentaButton);

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

    boardBlocker.addEventListener("click", _controller_js__WEBPACK_IMPORTED_MODULE_0__.exitPopup);

    board.appendChild(boardBlocker);
};

const removeBoardBlocker = () => {
    const board = document.querySelector(".board");
    const boardBlocker = document.querySelector(".board-blocker");
    
    board.style.opacity = 1;
    boardBlocker.remove();
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
_scripts_controller_js__WEBPACK_IMPORTED_MODULE_1__.addNewList();



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
//  createEditTaskPopup(), addPopup(), removePopup(), createList(), 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVks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Q3RCNkM7O0FBRTdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsdUNBQXVDOztBQUV2QyxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQiwyQ0FBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFRTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsMkRBQTBCOztBQUVuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQ0FBMkMscURBQW9COztBQUUvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDak5BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNnQzs7QUFFdEQsd0RBQWU7O0FBRWY7QUFDQSw4REFBcUI7Ozs7QUFJckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYm9hcmQvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vc3JjL3NjcmlwdHMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vc3JjL3NjcmlwdHMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL3NyYy9zY3JpcHRzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYm9hcmQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYm9hcmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJSb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ljb25zL2NpcmNsZV93aGl0ZV8yNGRwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMjE5LCAyMjkpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNjBweDtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDI2MHB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogNDBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbn1cXG5cXG4uYm9hcmQtYmxvY2tlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmFsaWNlYmx1ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDEwcHg7XFxufVxcblxcbi5saXN0ID4gLmxpc3QtbmFtZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5saXN0ID4gLm5ldy10YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3QgPiAubmV3LXRhc2stY29udGFpbmVyID4gLnBsdXMtaWNvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCA+IC5uZXctdGFzay1jb250YWluZXIgPiAuYWRkLW5ldy10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgPiAudW5jb21wbGV0ZS1jb250YWluZXIgLmRhdGUtY29udGFpbmVye1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3QgPiAudW5jb21wbGV0ZS1jb250YWluZXIgLmRhdGV7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5saXN0IC50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLmxpc3QgLnRhc2stY29udGFpbmVyID4gLmNvbXBsZXRlLWljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgLnRhc2stY29udGFpbmVyID4gLnRhc2stbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0IC50YXNrLWNvbnRhaW5lciA+IC5jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdCAudGFzay10aW1lLCAubGlzdCAucHJpb3JpdHktaWNvbiB7XFxuICAgIHBhZGRpbmc6IDFweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xcbn1cXG5cXG4ubGlzdCA+IC5jb21wbGV0ZWQtY29udGFpbmVyID4gLmNvbXBsZXRlZC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCBncmV5IDFweDtcXG59XFxuXFxuLmxpc3QgPiAuY29tcGxldGVkLWNvbnRhaW5lciAuY29tcGxldGVkLWhlYWRlci1pY29uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgLmNvbXBsZXRlZC1oZWFkZXIgPiAuaGVhZGVyLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCA+IC5jb21wbGV0ZWQtY29udGFpbmVyID4gLnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4ubGlzdCA+IC5jb21wbGV0ZWQtY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5saXN0ID4gLmNvbXBsZXRlZC1jb250YWluZXIgLmNvbXBsZXRlLWljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59IFxcblxcbi5saXN0IC5pY29uIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uYWRkLW5ldy1saXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjphbGljZWJsdWU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzNCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5pY29uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmljb24ge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgPiAucG9wdXAtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50ID4gaW5wdXQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50ID4gZmllbGRzZXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciBmaWVsZHNldCA+IGxlZ2VuZCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgPiAuY29sb3ItYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIGF1dG8pO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA0MHB4KTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06YWZ0ZXIge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jcmVkOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jZ3JlZW46YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2JsdWU6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jb3JhbmdlOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jdGVhbDphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNsaWdodGdyZXk6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNncmV5OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2RhcmtncmV5OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNibGFjazphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jbWFnZW50YTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hZ2VudGE7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkOmFmdGVyIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixRQUFRO0lBQ1Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseURBQXNEO0lBQ3RELDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICBzcmM6IHVybChSb2JvdG8tUmVndWxhci50dGYpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMjE5LCAyMjkpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNjBweDtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDI2MHB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogNDBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbn1cXG5cXG4uYm9hcmQtYmxvY2tlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmFsaWNlYmx1ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDEwcHg7XFxufVxcblxcbi5saXN0ID4gLmxpc3QtbmFtZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5saXN0ID4gLm5ldy10YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3QgPiAubmV3LXRhc2stY29udGFpbmVyID4gLnBsdXMtaWNvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCA+IC5uZXctdGFzay1jb250YWluZXIgPiAuYWRkLW5ldy10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgPiAudW5jb21wbGV0ZS1jb250YWluZXIgLmRhdGUtY29udGFpbmVye1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3QgPiAudW5jb21wbGV0ZS1jb250YWluZXIgLmRhdGV7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5saXN0IC50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLmxpc3QgLnRhc2stY29udGFpbmVyID4gLmNvbXBsZXRlLWljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgLnRhc2stY29udGFpbmVyID4gLnRhc2stbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0IC50YXNrLWNvbnRhaW5lciA+IC5jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdCAudGFzay10aW1lLCAubGlzdCAucHJpb3JpdHktaWNvbiB7XFxuICAgIHBhZGRpbmc6IDFweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xcbn1cXG5cXG4ubGlzdCA+IC5jb21wbGV0ZWQtY29udGFpbmVyID4gLmNvbXBsZXRlZC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCBncmV5IDFweDtcXG59XFxuXFxuLmxpc3QgPiAuY29tcGxldGVkLWNvbnRhaW5lciAuY29tcGxldGVkLWhlYWRlci1pY29uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgLmNvbXBsZXRlZC1oZWFkZXIgPiAuaGVhZGVyLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCA+IC5jb21wbGV0ZWQtY29udGFpbmVyID4gLnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4ubGlzdCA+IC5jb21wbGV0ZWQtY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5saXN0ID4gLmNvbXBsZXRlZC1jb250YWluZXIgLmNvbXBsZXRlLWljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59IFxcblxcbi5saXN0IC5pY29uIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uYWRkLW5ldy1saXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjphbGljZWJsdWU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzNCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5pY29uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmljb24ge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgPiAucG9wdXAtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50ID4gaW5wdXQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50ID4gZmllbGRzZXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciBmaWVsZHNldCA+IGxlZ2VuZCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgPiAuY29sb3ItYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIGF1dG8pO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA0MHB4KTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06YWZ0ZXIge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jcmVkOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jZ3JlZW46YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2JsdWU6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jb3JhbmdlOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jdGVhbDphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNsaWdodGdyZXk6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNncmV5OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2RhcmtncmV5OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNibGFjazphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jbWFnZW50YTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hZ2VudGE7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkOmFmdGVyIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ljb25zL2NpcmNsZV93aGl0ZV8yNGRwLnN2Z1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyBtb2RlbCBmcm9tIFwiLi9tb2RlbC5qc1wiO1xuaW1wb3J0ICogYXMgdmlldyBmcm9tIFwiLi92aWV3LmpzXCI7XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgbW9kZWwuaW5pdGlhbGl6ZUJvYXJkKCk7XG4gICAgdmlldy5pbml0aWFsaXplVGVtcGxhdGUoKTtcbn1cblxuY29uc3QgYWRkTmV3TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdMaXN0SW5kZXggPSBtb2RlbC5jcmVhdGVMaXN0KFwiU2FtcGxlIGxpc3RcIiwgXCJibHVlXCIpO1xuICAgIGNvbnN0IG5ld0xpc3QgPSBtb2RlbC5nZXRMaXN0KG5ld0xpc3RJbmRleCk7XG4gICAgdmlldy5jcmVhdGVMaXN0KG5ld0xpc3QpO1xufVxuXG5jb25zdCBhZGROZXdMaXN0UG9wdXAgPSAoZSkgPT4ge1xuICAgIHZpZXcuY3JlYXRlQWRkTmV3TGlzdFBvcHVwKCk7XG59O1xuXG5jb25zdCBleGl0UG9wdXAgPSAoZSkgPT4ge1xuICAgIHZpZXcucmVtb3ZlUG9wdXAoKTtcbiAgICB2aWV3LnJlbW92ZUJvYXJkQmxvY2tlcigpO1xuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7aW5pdCwgYWRkTmV3TGlzdCwgYWRkTmV3TGlzdFBvcHVwLCBleGl0UG9wdXB9OyIsImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlci5qc1wiXG5cbmxldCBib2FyZDtcblxuY29uc3QgaW5pdGlhbGl6ZUJvYXJkID0gKCkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpICYmIGJvYXJkSW5TdG9yYWdlKCkpIHtcbiAgICAgICAgYm9hcmQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJvYXJkXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYm9hcmQgPSBbXTtcbiAgICB9XG59O1xuXG5jb25zdCBzdG9yYWdlQXZhaWxhYmxlID0gKHR5cGUpID0+IHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICBsZXQgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbn07XG5cbmNvbnN0IGJvYXJkSW5TdG9yYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJib2FyZFwiKSA/IHRydWUgOiBmYWxzZSk7XG59O1xuXG5jb25zdCBMaXN0ID0gKG5hbWUsIGNvbG9yKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IFtdO1xuICAgIGNvbnN0IGluZGV4ID0gYm9hcmQubGVuZ3RoO1xuICAgIGNvbnN0IHVwZGF0ZU5hbWUgPSAobmV3TmFtZSkgPT4ge25hbWUgPSBuZXdOYW1lfTtcbiAgICBjb25zdCB1cGRhdGVDb2xvciA9IChuZXdDb2xvcikgPT4ge2NvbG9yID0gbmV3Q29sb3J9O1xuXG4gICAgcmV0dXJuIHtuYW1lLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICB1cGRhdGVOYW1lLFxuICAgICAgICAgICAgdXBkYXRlQ29sb3J9O1xufTtcblxuY29uc3QgY3JlYXRlTGlzdCA9IChuYW1lLCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBMaXN0KG5hbWUsIGNvbG9yKTtcbiAgICBhZGRMaXN0KG5ld0xpc3QpO1xuICAgIHJldHVybiBuZXdMaXN0LmluZGV4O1xufTtcblxuY29uc3QgYWRkTGlzdCA9IChsaXN0KSA9PiB7Ym9hcmQucHVzaChsaXN0KX07XG5cbmNvbnN0IGdldExpc3QgPSAoaW5kZXgpID0+IE9iamVjdC5hc3NpZ24oe30sIGJvYXJkW2luZGV4XSk7XG5cbmV4cG9ydCB7aW5pdGlhbGl6ZUJvYXJkLFxuICAgICAgICBjcmVhdGVMaXN0LFxuICAgICAgICBnZXRMaXN0LFxufTsiLCJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIlxuXG5jb25zdCBpbml0aWFsaXplVGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZSgpO1xuICAgIGFkZFRlbXBsYXRlKHRlbXBsYXRlKTtcbn1cblxuY29uc3QgY3JlYXRlVGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkTmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBib2FyZC5jbGFzc0xpc3QgPSBcImJvYXJkXCI7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJUb2RvIEJvYXJkXCI7XG4gICAgYWRkTmV3TGlzdC5jbGFzc0xpc3QgPSBcImFkZC1uZXctbGlzdFwiO1xuICAgIGFkZE5ld0xpc3QudGV4dENvbnRlbnQgPSBcIisgQWRkIG5ldyBsaXN0XCI7XG5cbiAgICBhZGROZXdMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250cm9sbGVyLmFkZE5ld0xpc3RQb3B1cCk7XG5cbiAgICB0ZW1wbGF0ZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIHRlbXBsYXRlLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChhZGROZXdMaXN0KTtcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbmNvbnN0IGFkZFRlbXBsYXRlID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGVtcGxhdGUpO1xufTtcblxuY29uc3QgY3JlYXRlTGlzdCA9IChsaXN0T2JqZWN0KSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBsdXNJY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwbHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29uc3QgYWRkTmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsaXN0LmRhdGFzZXQuaW5kZXggPSBsaXN0T2JqZWN0LmluZGV4O1xuICAgIGxpc3QuY2xhc3NMaXN0ID0gXCJsaXN0XCI7XG4gICAgbGlzdC5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBsaXN0T2JqZWN0LmNvbG9yO1xuICAgIGxpc3ROYW1lLnRleHRDb250ZW50ID0gbGlzdE9iamVjdC5uYW1lO1xuICAgIGxpc3ROYW1lLmNsYXNzTGlzdCA9IFwibGlzdC1uYW1lXCI7XG4gICAgbmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QgPSBcIm5ldy10YXNrLWNvbnRhaW5lclwiO1xuICAgIHBsdXNJY29uQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwicGx1c0ljb25Db250YWluZXJcIjtcbiAgICBhZGROZXdUYXNrLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IHRhc2tcIjtcbiAgICBhZGROZXdUYXNrLmNsYXNzTGlzdCA9IFwiYWRkLW5ldy10YXNrXCI7XG4gICAgcGx1c0ljb24uY2xhc3NMaXN0ID0gXCJpY29uXCI7XG4gICAgcGx1c0ljb24uc3JjID0gXCIuLi9zcmMvaWNvbnMvYWRkX2JsYWNrXzI0ZHAuc3ZnXCJcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdE5hbWUpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRhaW5lcik7XG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbHVzSWNvbkNvbnRhaW5lcik7XG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGROZXdUYXNrKTtcbiAgICBwbHVzSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5cbiAgICBhZGRMaXN0KGxpc3QpO1xufTtcblxuY29uc3QgYWRkTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkXCIpO1xuICAgIGNvbnN0IGFkZE5ld0xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1uZXctbGlzdFwiKTtcbiAgICBib2FyZC5pbnNlcnRCZWZvcmUobGlzdCwgYWRkTmV3TGlzdEJ1dHRvbik7XG59O1xuXG5jb25zdCBjcmVhdGVBZGROZXdMaXN0UG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBjcmVhdGVQb3B1cFRlbXBsYXRlKCk7XG4gICAgY29uc3QgY29sb3JQaWNrZXJGaWVsZHNldCA9IGNyZWF0ZUNvbG9yUGlja2VyRmllbGRzZXQoKTtcbiAgICBjb25zdCBwb3B1cENvbnRlbnQgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLWNvbnRlbnRcIik7XG4gICAgY29uc3QgbGlzdFRpdGxlID0gcG9wdXAucXVlcnlTZWxlY3RvcihcImlucHV0I2xpc3QtdGl0bGVcIik7XG5cbiAgICBsaXN0VGl0bGUucGxhY2Vob2xkZXIgPSBcIkVudGVyIExpc3QgVGl0bGVcIjtcbiAgICBcbiAgICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXJGaWVsZHNldCk7XG5cbiAgICBhZGRQb3B1cChwb3B1cCk7XG4gICAgYWRkQm9hcmRCbG9ja2VyKCk7XG59O1xuXG5jb25zdCBjcmVhdGVQb3B1cFRlbXBsYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IHBvcHVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0ID0gXCJwb3B1cC1jb250YWluZXJcIjtcbiAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwiaWNvbi1jb250YWluZXJcIjtcbiAgICBpY29uLmNsYXNzTGlzdCA9IFwiaWNvblwiO1xuICAgIGljb24uc3JjID0gXCIuLi9zcmMvaWNvbnMvY2xvc2VfYmxhY2tfMjRkcC5zdmdcIjtcbiAgICBwb3B1cENvbnRlbnQuY2xhc3NMaXN0ID0gXCJwb3B1cC1jb250ZW50XCI7XG4gICAgbGlzdFRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICBsaXN0VGl0bGUuaWQgPSBcImxpc3QtdGl0bGVcIjtcblxuICAgIHBvcHVwVGVtcGxhdGUuYXBwZW5kQ2hpbGQocG9wdXBDb250YWluZXIpO1xuICAgIHBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuICAgIHBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwQ29udGVudCk7XG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcblxuICAgIHJldHVybiBwb3B1cFRlbXBsYXRlO1xufTtcblxuY29uc3QgY3JlYXRlQ29sb3JQaWNrZXJGaWVsZHNldCA9ICgpID0+IHtcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICAgIGNvbnN0IGNvbG9yQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcmVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGdyZWVuQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGJsdWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3Qgb3JhbmdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IHRlYWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgbGlnaHRncmV5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGdyZXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgZGFya2dyZXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgYmxhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgbWFnZW50YUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiTGlzdCBDb2xvclwiO1xuICAgIGNvbG9yQnV0dG9ucy5jbGFzc0xpc3QgPSBcImNvbG9yLWJ1dHRvbnNcIjtcbiAgICByZWRCdXR0b24udHlwZSA9IFwicmFkaW9cIjtcbiAgICByZWRCdXR0b24ubmFtZSA9IFwiY29sb3JcIjtcbiAgICByZWRCdXR0b24uaWQgPSBcInJlZFwiO1xuICAgIHJlZEJ1dHRvbi52YWx1ZSA9IFwicmVkXCI7XG4gICAgZ3JlZW5CdXR0b24udHlwZSA9IFwicmFkaW9cIjtcbiAgICBncmVlbkJ1dHRvbi5uYW1lID0gXCJjb2xvclwiO1xuICAgIGdyZWVuQnV0dG9uLmlkID0gXCJncmVlblwiO1xuICAgIGdyZWVuQnV0dG9uLnZhbHVlID0gXCJncmVlblwiO1xuICAgIGJsdWVCdXR0b24udHlwZSA9IFwicmFkaW9cIjtcbiAgICBibHVlQnV0dG9uLm5hbWUgPSBcImNvbG9yXCI7XG4gICAgYmx1ZUJ1dHRvbi5pZCA9IFwiYmx1ZVwiO1xuICAgIGJsdWVCdXR0b24udmFsdWUgPSBcImJsdWVcIjtcbiAgICBvcmFuZ2VCdXR0b24udHlwZSA9IFwicmFkaW9cIjtcbiAgICBvcmFuZ2VCdXR0b24ubmFtZSA9IFwiY29sb3JcIjtcbiAgICBvcmFuZ2VCdXR0b24uaWQgPSBcIm9yYW5nZVwiO1xuICAgIG9yYW5nZUJ1dHRvbi52YWx1ZSA9IFwib3JhbmdlXCI7XG4gICAgdGVhbEJ1dHRvbi50eXBlID0gXCJyYWRpb1wiO1xuICAgIHRlYWxCdXR0b24ubmFtZSA9IFwiY29sb3JcIjtcbiAgICB0ZWFsQnV0dG9uLmlkID0gXCJ0ZWFsXCI7XG4gICAgdGVhbEJ1dHRvbi52YWx1ZSA9IFwidGVhbFwiO1xuICAgIGxpZ2h0Z3JleUJ1dHRvbi50eXBlID0gXCJyYWRpb1wiO1xuICAgIGxpZ2h0Z3JleUJ1dHRvbi5uYW1lID0gXCJjb2xvclwiO1xuICAgIGxpZ2h0Z3JleUJ1dHRvbi5pZCA9IFwibGlnaHRncmV5XCI7XG4gICAgbGlnaHRncmV5QnV0dG9uLnZhbHVlID0gXCJsaWdodGdyZXlcIjtcbiAgICBncmV5QnV0dG9uLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgZ3JleUJ1dHRvbi5uYW1lID0gXCJjb2xvclwiO1xuICAgIGdyZXlCdXR0b24uaWQgPSBcImdyZXlcIjtcbiAgICBncmV5QnV0dG9uLnZhbHVlID0gXCJncmV5XCI7XG4gICAgZGFya2dyZXlCdXR0b24udHlwZSA9IFwicmFkaW9cIjtcbiAgICBkYXJrZ3JleUJ1dHRvbi5uYW1lID0gXCJjb2xvclwiO1xuICAgIGRhcmtncmV5QnV0dG9uLmlkID0gXCJkYXJrZ3JleVwiO1xuICAgIGRhcmtncmV5QnV0dG9uLnZhbHVlID0gXCJkYXJrZ3JleVwiO1xuICAgIGJsYWNrQnV0dG9uLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgYmxhY2tCdXR0b24ubmFtZSA9IFwiY29sb3JcIjtcbiAgICBibGFja0J1dHRvbi5pZCA9IFwiYmxhY2tcIjtcbiAgICBibGFja0J1dHRvbi52YWx1ZSA9IFwiYmxhY2tcIjtcbiAgICBibGFja0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuICAgIG1hZ2VudGFCdXR0b24udHlwZSA9IFwicmFkaW9cIjtcbiAgICBtYWdlbnRhQnV0dG9uLm5hbWUgPSBcImNvbG9yXCI7XG4gICAgbWFnZW50YUJ1dHRvbi5pZCA9IFwibWFnZW50YVwiO1xuICAgIG1hZ2VudGFCdXR0b24udmFsdWUgPSBcIm1hZ2VudGFcIjtcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoY29sb3JCdXR0b25zKTtcbiAgICBjb2xvckJ1dHRvbnMuYXBwZW5kQ2hpbGQocmVkQnV0dG9uKTtcbiAgICBjb2xvckJ1dHRvbnMuYXBwZW5kQ2hpbGQoZ3JlZW5CdXR0b24pO1xuICAgIGNvbG9yQnV0dG9ucy5hcHBlbmRDaGlsZChibHVlQnV0dG9uKTtcbiAgICBjb2xvckJ1dHRvbnMuYXBwZW5kQ2hpbGQob3JhbmdlQnV0dG9uKTtcbiAgICBjb2xvckJ1dHRvbnMuYXBwZW5kQ2hpbGQodGVhbEJ1dHRvbik7XG4gICAgY29sb3JCdXR0b25zLmFwcGVuZENoaWxkKGxpZ2h0Z3JleUJ1dHRvbik7XG4gICAgY29sb3JCdXR0b25zLmFwcGVuZENoaWxkKGdyZXlCdXR0b24pO1xuICAgIGNvbG9yQnV0dG9ucy5hcHBlbmRDaGlsZChkYXJrZ3JleUJ1dHRvbik7XG4gICAgY29sb3JCdXR0b25zLmFwcGVuZENoaWxkKGJsYWNrQnV0dG9uKTtcbiAgICBjb2xvckJ1dHRvbnMuYXBwZW5kQ2hpbGQobWFnZW50YUJ1dHRvbik7XG5cbiAgICByZXR1cm4gZmllbGRzZXQ7XG59O1xuXG5jb25zdCBhZGRQb3B1cCA9IChwb3B1cCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcbn07XG5cbmNvbnN0IHJlbW92ZVBvcHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1jb250YWluZXJcIik7XG4gICAgcG9wdXAucmVtb3ZlKCk7XG59O1xuXG5jb25zdCBhZGRCb2FyZEJsb2NrZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkXCIpO1xuICAgIGNvbnN0IGJvYXJkQmxvY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBib2FyZC5zdHlsZS5vcGFjaXR5ID0gMC40O1xuICAgIGJvYXJkQmxvY2tlci5jbGFzc0xpc3QgPSBcImJvYXJkLWJsb2NrZXJcIjtcblxuICAgIGJvYXJkQmxvY2tlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udHJvbGxlci5leGl0UG9wdXApO1xuXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRCbG9ja2VyKTtcbn07XG5cbmNvbnN0IHJlbW92ZUJvYXJkQmxvY2tlciA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIik7XG4gICAgY29uc3QgYm9hcmRCbG9ja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1ibG9ja2VyXCIpO1xuICAgIFxuICAgIGJvYXJkLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIGJvYXJkQmxvY2tlci5yZW1vdmUoKTtcbn07XG5cbmV4cG9ydCB7aW5pdGlhbGl6ZVRlbXBsYXRlLFxuICAgICAgICBjcmVhdGVMaXN0LFxuICAgICAgICBjcmVhdGVBZGROZXdMaXN0UG9wdXAsXG4gICAgICAgIHJlbW92ZVBvcHVwLFxuICAgICAgICByZW1vdmVCb2FyZEJsb2NrZXIsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSBcIi4vc2NyaXB0cy9jb250cm9sbGVyLmpzXCI7XG5cbmNvbnRyb2xsZXIuaW5pdCgpO1xuXG4vL3Rlc3QgZnVuY3Rpb24gY2FsbHNcbmNvbnRyb2xsZXIuYWRkTmV3TGlzdCgpO1xuXG5cblxuLy9QbGFubmluZ1xuLy9JbmRleFxuLy8gIGNvbnRyb2xsZXIuaW5pdCgpO1xuLy9Nb2RlbFxuLy8gIGJvYXJkIChhcnJheSkgLT4gbGlzdCAob2JqZWN0OiBuYW1lIChzdHIpLCBjb2xvciAoc3RyKSwgY29udGVudCAoYXJyYXkpLCBcbi8vICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZU5hbWUoKSwgdXBkYXRlQ29sb3IoKSxcbi8vICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSgpLCBkZWxldGVBbGxDb21wbGV0ZWRUYXNrcygpKVxuLy8gICAgICBjb250ZW50IChhcnJheSkgLT4gdGFzayAob2JqZWN0OiBuYW1lIChzdHIpLCBkYXRlVGltZSAoc3RyKSwgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5IChzdHIpLCBjb21wbGV0ZSAoYm9vbGVhbiksIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVOYW1lKCksIHVwZGF0ZURhdGVUaW1lKCksIHVwZGF0ZVByaW9yaXR5KCksIHVwZGF0ZUNvbXBsZXRlKCksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSgpKVxuLy8gIGluaXRpdGlhbGl6ZUJvYXJkKCksIGNyZWF0ZUxpc3QoKSwgY3JlYXRlVGFzaygpLCBhZGRMaXN0KCksIGFkZFRhc2soKSwgZ2V0TGlzdCgpLCBnZXRUYXNrKCksIHVwZGF0ZUxpc3QoKSxcbi8vICAgICAgdXBkYXRlVGFzaygpLCBkZWxldGVMaXN0KCksIGRlbGV0ZVRhc2soKVxuLy9cbi8vVmlld1xuLy8gIG5ld0xpc3RQb3B1cCAobm9kZUxpc3QpXG4vLyAgbmV3VGFza1BvcHVwIChub2RlbGlzdClcbi8vICBlZGl0TGlzdFBvcHVwIChub2RlTGlzdClcbi8vICBlZGl0VGFza1BvcHVwIChub2RlTGlzdClcbi8vICBpbml0aWFsaXplVGVtcGxhdGUoKSwgY3JlYXRlVGVtcGxhdGUoKSwgYWRkVGVtcGxhdGUoKSxcbi8vICBjcmVhdGVBZGROZXdMaXN0UG9wdXAoKSwgY3JlYXRlQWRkTmV3VGFza1BvcHVwKCksIGNyZWF0ZUVkaXRMaXN0UG9wdXAoKSxcbi8vICBjcmVhdGVFZGl0VGFza1BvcHVwKCksIGFkZFBvcHVwKCksIHJlbW92ZVBvcHVwKCksIGNyZWF0ZUxpc3QoKSwgXG4vLyAgY3JlYXRlVGFzaygpLCBhZGRMaXN0KCksIGFkZFRhc2soKVxuLy8gIFxuLy9Db250cm9sbGVyXG4vLyAgaW5pdCgpLCBhZGROZXdMaXN0UG9wdXAoZSksIGFkZE5ld1Rhc2tQb3B1cChlKSwgZWRpdExpc3RQb3B1cChlKSxcbi8vICBlZGl0VGFza1BvcHVwKGUpLCBleGl0UG9wdXAoZSksIFxuLy8gIGFkZE5ld0xpc3QoZSksIGFkZE5ld1Rhc2soZSksIGVkaXRMaXN0KGUpLCBlZGl0VGFzayhlKSxcbi8vICBkZWxldGVMaXN0KGUpLCBkZWxldGVBbGxDb21wbGV0ZWRMaXN0cyhlKSwgZGVsZXRlVGFzayhlKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==