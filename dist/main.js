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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Roboto;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: 600;\n    font-style: normal;\n}\n\n:root {\n    box-sizing: border-box;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 14px;\n}\n\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    position: relative;\n    background-color: rgb(190, 219, 229);\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px 100px;\n    font-size: 24px;\n    background-color: white;\n}\n\n.board {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 260px;\n    grid-auto-columns: 260px;\n    align-items: start;\n    gap: 40px;\n    padding: 20px 40px;\n}\n\n.board-blocker {\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 999;\n}\n\n.list {\n    background-color: white;\n    padding: 10px;\n    border-radius: 10px;\n    border-left: solid black 10px;\n}\n\n.list > .list-name {\n    padding-bottom: 30px;\n    font-size: 20px;\n}\n\n.list > .new-task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    gap: 4px;\n    padding-bottom: 20px;\n}\n\n.list > .new-task-container > .plus-icon-container {\n    display: flex;\n    align-items: center;\n}\n\n.list > .new-task-container > .add-new-task {\n    display: flex;\n    align-items: center;\n}\n\n.list > .uncomplete-container .date-container{\n    padding-bottom: 20px;\n}\n\n.list > .uncomplete-container .date{\n    padding-bottom: 4px;\n}\n\n.list .task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    grid-template-rows: auto auto;\n    gap: 4px;\n}\n\n.list .task-container > .complete-icon-container {\n    display: flex;\n    align-items: center;\n}\n\n.list .task-container > .task-name {\n    display: flex;\n    align-items: center;\n}\n\n.list .task-container > .container {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: flex;\n    gap: 10px;\n}\n\n.list .task-time, .list .priority-icon {\n    padding: 1px 8px;\n    border-radius: 20px;\n    background-color: lightyellow;\n}\n\n.list > .completed-container > .completed-header {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 10px;\n    border-top: solid grey 1px;\n}\n\n.list > .completed-container .completed-header-icon {\n    display: flex;\n    align-items: center;\n}\n\n.list .completed-header > .header-text {\n    display: flex;\n    align-items: center;\n}\n\n.list > .completed-container > .tasks-container {\n    padding-top: 10px;\n}\n\n.list > .completed-container .task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    padding-bottom: 4px;\n}\n\n.list > .completed-container .complete-icon-container {\n    display: flex;\n    align-items: center;\n} \n\n.list .icon {\n    height: 16px;\n}\n\n.add-new-list {\n    background-color: white;\n    padding: 10px;\n    border-radius: 10px;\n    text-align: center;\n}\n\n.popup-container {\n    position: absolute;\n    top: 34%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 10px;\n    border-radius: 10px;\n    background-color: white;\n}\n\n.popup-container > .icon-container {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.popup-container .icon {\n    height: 16px;\n}\n\n.popup-container > .popup-content {\n    padding: 0 20px;\n}\n\n.popup-container > .popup-content > input {\n    box-sizing: border-box;\n    width: 100%;\n    font-size: 20px;\n    margin-bottom: 20px;\n    border: none;\n    outline: none;\n    background-color: white;\n}\n\n.popup-container > .popup-content > fieldset {\n    border: none;\n    padding: 0 0 10px 0;\n    margin: 0;\n}\n\n.popup-container fieldset > legend {\n    padding-bottom: 10px;\n    font-size: 16px;\n}\n\n.popup-container fieldset > .color-buttons {\n    display: grid;\n    grid-template-columns: repeat(5, auto);\n    grid-template-rows: repeat(2, 40px);\n    justify-items: center;\n    align-items: center;\n\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#red:after {\n    background-color: red;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#green:after {\n    background-color: green;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#blue:after {\n    background-color: blue;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#orange:after {\n    background-color: orange;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#teal:after {\n    background-color: teal;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#lightgrey:after {\n    background-color: lightgrey;\n}\n.popup-container .color-buttons input[type=\"radio\"]#grey:after {\n    background-color: grey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#darkgrey:after {\n    background-color: darkgrey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#black:after {\n    background-color: black;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#magenta:after {\n    background-color: magenta;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:checked:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-repeat:no-repeat;\n    background-size: 16px;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4CAA4B;IAC5B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,wBAAwB;IACxB,kBAAkB;IAClB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,QAAQ;IACR,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,6BAA6B;IAC7B,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,qBAAqB;IACrB,mBAAmB;;AAEvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;AAC/B;AACA;IACI,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,mBAAmB;IACnB,kBAAkB;IAClB,yDAAsD;IACtD,2BAA2B;IAC3B,2BAA2B;IAC3B,qBAAqB;IACrB,WAAW;IACX,qBAAqB;IACrB,mBAAmB;AACvB","sourcesContent":["@font-face {\n    font-family: Roboto;\n    src: url(Roboto-Regular.ttf);\n    font-weight: 600;\n    font-style: normal;\n}\n\n:root {\n    box-sizing: border-box;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 14px;\n}\n\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    position: relative;\n    background-color: rgb(190, 219, 229);\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px 100px;\n    font-size: 24px;\n    background-color: white;\n}\n\n.board {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 260px;\n    grid-auto-columns: 260px;\n    align-items: start;\n    gap: 40px;\n    padding: 20px 40px;\n}\n\n.board-blocker {\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 999;\n}\n\n.list {\n    background-color: white;\n    padding: 10px;\n    border-radius: 10px;\n    border-left: solid black 10px;\n}\n\n.list > .list-name {\n    padding-bottom: 30px;\n    font-size: 20px;\n}\n\n.list > .new-task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    gap: 4px;\n    padding-bottom: 20px;\n}\n\n.list > .new-task-container > .plus-icon-container {\n    display: flex;\n    align-items: center;\n}\n\n.list > .new-task-container > .add-new-task {\n    display: flex;\n    align-items: center;\n}\n\n.list > .uncomplete-container .date-container{\n    padding-bottom: 20px;\n}\n\n.list > .uncomplete-container .date{\n    padding-bottom: 4px;\n}\n\n.list .task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    grid-template-rows: auto auto;\n    gap: 4px;\n}\n\n.list .task-container > .complete-icon-container {\n    display: flex;\n    align-items: center;\n}\n\n.list .task-container > .task-name {\n    display: flex;\n    align-items: center;\n}\n\n.list .task-container > .container {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: flex;\n    gap: 10px;\n}\n\n.list .task-time, .list .priority-icon {\n    padding: 1px 8px;\n    border-radius: 20px;\n    background-color: lightyellow;\n}\n\n.list > .completed-container > .completed-header {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 10px;\n    border-top: solid grey 1px;\n}\n\n.list > .completed-container .completed-header-icon {\n    display: flex;\n    align-items: center;\n}\n\n.list .completed-header > .header-text {\n    display: flex;\n    align-items: center;\n}\n\n.list > .completed-container > .tasks-container {\n    padding-top: 10px;\n}\n\n.list > .completed-container .task-container {\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    padding-bottom: 4px;\n}\n\n.list > .completed-container .complete-icon-container {\n    display: flex;\n    align-items: center;\n} \n\n.list .icon {\n    height: 16px;\n}\n\n.add-new-list {\n    background-color: white;\n    padding: 10px;\n    border-radius: 10px;\n    text-align: center;\n}\n\n.popup-container {\n    position: absolute;\n    top: 34%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 10px;\n    border-radius: 10px;\n    background-color: white;\n}\n\n.popup-container > .icon-container {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.popup-container .icon {\n    height: 16px;\n}\n\n.popup-container > .popup-content {\n    padding: 0 20px;\n}\n\n.popup-container > .popup-content > input {\n    box-sizing: border-box;\n    width: 100%;\n    font-size: 20px;\n    margin-bottom: 20px;\n    border: none;\n    outline: none;\n    background-color: white;\n}\n\n.popup-container > .popup-content > fieldset {\n    border: none;\n    padding: 0 0 10px 0;\n    margin: 0;\n}\n\n.popup-container fieldset > legend {\n    padding-bottom: 10px;\n    font-size: 16px;\n}\n\n.popup-container fieldset > .color-buttons {\n    display: grid;\n    grid-template-columns: repeat(5, auto);\n    grid-template-rows: repeat(2, 40px);\n    justify-items: center;\n    align-items: center;\n\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#red:after {\n    background-color: red;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#green:after {\n    background-color: green;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#blue:after {\n    background-color: blue;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#orange:after {\n    background-color: orange;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#teal:after {\n    background-color: teal;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#lightgrey:after {\n    background-color: lightgrey;\n}\n.popup-container .color-buttons input[type=\"radio\"]#grey:after {\n    background-color: grey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#darkgrey:after {\n    background-color: darkgrey;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#black:after {\n    background-color: black;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]#magenta:after {\n    background-color: magenta;\n}\n\n.popup-container .color-buttons input[type=\"radio\"]:checked:after {\n    width: 30px;\n    height: 30px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 15px;\n    position: relative;\n    background-image: url(\"./icons/circle_white_24dp.svg\");\n    background-position: center;\n    background-repeat:no-repeat;\n    background-size: 16px;\n    content: '';\n    display: inline-block;\n    visibility: visible;\n}"],"sourceRoot":""}]);
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

const addNewList = (listTitle, listColor) => {
    const newListIndex = _model_js__WEBPACK_IMPORTED_MODULE_0__.createList(listTitle, listColor);
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
    const popupTitle = popup.querySelector("input.popup-title");

    popupTitle.placeholder = "Enter List Title";
    
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

    boardBlocker.addEventListener("click", (e) => {
        if (popupFilled()) {
            const popupTitle = document.querySelector(".popup-title");
            const selectedColorButton = document.querySelector(
                "input[name='color']:checked"
                );
            _controller_js__WEBPACK_IMPORTED_MODULE_0__.addNewList(
                popupTitle.value, selectedColorButton.value
                );
        }
        
        _controller_js__WEBPACK_IMPORTED_MODULE_0__.exitPopup(e);
    });

    board.appendChild(boardBlocker);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFxQztBQUNqRiw0Q0FBNEMsdUlBQWdEO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esc0RBQXNELDBCQUEwQiwyREFBMkQsdUJBQXVCLHlCQUF5QixHQUFHLFdBQVcsNkJBQTZCLDBDQUEwQyxzQkFBc0IsR0FBRyxnQkFBZ0IsbUJBQW1CLGdCQUFnQixHQUFHLFVBQVUsb0JBQW9CLG1DQUFtQyx5QkFBeUIsMkNBQTJDLEdBQUcsWUFBWSxvQkFBb0IsMEJBQTBCLDBCQUEwQixzQkFBc0IsOEJBQThCLEdBQUcsWUFBWSxvQkFBb0IsNkJBQTZCLG1DQUFtQywrQkFBK0IseUJBQXlCLGdCQUFnQix5QkFBeUIsR0FBRyxvQkFBb0IseUJBQXlCLGNBQWMsZUFBZSxtQkFBbUIsa0JBQWtCLG1CQUFtQixHQUFHLFdBQVcsOEJBQThCLG9CQUFvQiwwQkFBMEIsb0NBQW9DLEdBQUcsd0JBQXdCLDJCQUEyQixzQkFBc0IsR0FBRyxpQ0FBaUMsb0JBQW9CLHNDQUFzQyxlQUFlLDJCQUEyQixHQUFHLHdEQUF3RCxvQkFBb0IsMEJBQTBCLEdBQUcsaURBQWlELG9CQUFvQiwwQkFBMEIsR0FBRyxrREFBa0QsMkJBQTJCLEdBQUcsd0NBQXdDLDBCQUEwQixHQUFHLDJCQUEyQixvQkFBb0Isc0NBQXNDLG9DQUFvQyxlQUFlLEdBQUcsc0RBQXNELG9CQUFvQiwwQkFBMEIsR0FBRyx3Q0FBd0Msb0JBQW9CLDBCQUEwQixHQUFHLHdDQUF3QyxzQkFBc0IseUJBQXlCLG9CQUFvQixnQkFBZ0IsR0FBRyw0Q0FBNEMsdUJBQXVCLDBCQUEwQixvQ0FBb0MsR0FBRyxzREFBc0Qsb0JBQW9CLHFDQUFxQyx3QkFBd0IsaUNBQWlDLEdBQUcseURBQXlELG9CQUFvQiwwQkFBMEIsR0FBRyw0Q0FBNEMsb0JBQW9CLDBCQUEwQixHQUFHLHFEQUFxRCx3QkFBd0IsR0FBRyxrREFBa0Qsb0JBQW9CLHNDQUFzQywwQkFBMEIsR0FBRywyREFBMkQsb0JBQW9CLDBCQUEwQixJQUFJLGlCQUFpQixtQkFBbUIsR0FBRyxtQkFBbUIsOEJBQThCLG9CQUFvQiwwQkFBMEIseUJBQXlCLEdBQUcsc0JBQXNCLHlCQUF5QixlQUFlLGdCQUFnQix1Q0FBdUMsb0JBQW9CLDBCQUEwQiw4QkFBOEIsR0FBRyx3Q0FBd0Msb0JBQW9CLGdDQUFnQyxHQUFHLDRCQUE0QixtQkFBbUIsR0FBRyx1Q0FBdUMsc0JBQXNCLEdBQUcsK0NBQStDLDZCQUE2QixrQkFBa0Isc0JBQXNCLDBCQUEwQixtQkFBbUIsb0JBQW9CLDhCQUE4QixHQUFHLGtEQUFrRCxtQkFBbUIsMEJBQTBCLGdCQUFnQixHQUFHLHdDQUF3QywyQkFBMkIsc0JBQXNCLEdBQUcsZ0RBQWdELG9CQUFvQiw2Q0FBNkMsMENBQTBDLDRCQUE0QiwwQkFBMEIsS0FBSyxpRUFBaUUsa0JBQWtCLG1CQUFtQixlQUFlLGdCQUFnQix1Q0FBdUMsMEJBQTBCLHlCQUF5QixrQkFBa0IsNEJBQTRCLDBCQUEwQixHQUFHLHFFQUFxRSw0QkFBNEIsR0FBRyx1RUFBdUUsOEJBQThCLEdBQUcsc0VBQXNFLDZCQUE2QixHQUFHLHdFQUF3RSwrQkFBK0IsR0FBRyxzRUFBc0UsNkJBQTZCLEdBQUcsMkVBQTJFLGtDQUFrQyxHQUFHLG9FQUFvRSw2QkFBNkIsR0FBRywwRUFBMEUsaUNBQWlDLEdBQUcsdUVBQXVFLDhCQUE4QixHQUFHLHlFQUF5RSxnQ0FBZ0MsR0FBRyx5RUFBeUUsa0JBQWtCLG1CQUFtQixlQUFlLGdCQUFnQix1Q0FBdUMsMEJBQTBCLHlCQUF5Qix3RUFBd0Usa0NBQWtDLGtDQUFrQyw0QkFBNEIsa0JBQWtCLDRCQUE0QiwwQkFBMEIsR0FBRyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVks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Q0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNnQzs7QUFFdEQsd0RBQWU7O0FBRWY7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYm9hcmQvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL3NyYy9zY3JpcHRzL21vZGVsLmpzIiwid2VicGFjazovL3RvZG8tYm9hcmQvLi9zcmMvc2NyaXB0cy92aWV3LmpzIiwid2VicGFjazovL3RvZG8tYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWJvYXJkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWJvYXJkL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYm9hcmQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1ib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9jaXJjbGVfd2hpdGVfMjRkcC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDIxOSwgMjI5KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAxMDBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNjBweDtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDI2MHB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogNDBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbn1cXG5cXG4uYm9hcmQtYmxvY2tlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDEwcHg7XFxufVxcblxcbi5saXN0ID4gLmxpc3QtbmFtZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5saXN0ID4gLm5ldy10YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3QgPiAubmV3LXRhc2stY29udGFpbmVyID4gLnBsdXMtaWNvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCA+IC5uZXctdGFzay1jb250YWluZXIgPiAuYWRkLW5ldy10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgPiAudW5jb21wbGV0ZS1jb250YWluZXIgLmRhdGUtY29udGFpbmVye1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3QgPiAudW5jb21wbGV0ZS1jb250YWluZXIgLmRhdGV7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5saXN0IC50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLmxpc3QgLnRhc2stY29udGFpbmVyID4gLmNvbXBsZXRlLWljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgLnRhc2stY29udGFpbmVyID4gLnRhc2stbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0IC50YXNrLWNvbnRhaW5lciA+IC5jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdCAudGFzay10aW1lLCAubGlzdCAucHJpb3JpdHktaWNvbiB7XFxuICAgIHBhZGRpbmc6IDFweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xcbn1cXG5cXG4ubGlzdCA+IC5jb21wbGV0ZWQtY29udGFpbmVyID4gLmNvbXBsZXRlZC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCBncmV5IDFweDtcXG59XFxuXFxuLmxpc3QgPiAuY29tcGxldGVkLWNvbnRhaW5lciAuY29tcGxldGVkLWhlYWRlci1pY29uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgLmNvbXBsZXRlZC1oZWFkZXIgPiAuaGVhZGVyLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCA+IC5jb21wbGV0ZWQtY29udGFpbmVyID4gLnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4ubGlzdCA+IC5jb21wbGV0ZWQtY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5saXN0ID4gLmNvbXBsZXRlZC1jb250YWluZXIgLmNvbXBsZXRlLWljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59IFxcblxcbi5saXN0IC5pY29uIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uYWRkLW5ldy1saXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzNCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gLmljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuaWNvbiB7XFxuICAgIGhlaWdodDogMTZweDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gLnBvcHVwLWNvbnRlbnQgPiBpbnB1dCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgPiAucG9wdXAtY29udGVudCA+IGZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgPiBsZWdlbmQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIGZpZWxkc2V0ID4gLmNvbG9yLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBhdXRvKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDBweCk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmFmdGVyIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI3JlZDphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2dyZWVuOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNibHVlOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI29yYW5nZTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI3RlYWw6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jbGlnaHRncmV5OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jZ3JleTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNkYXJrZ3JleTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jYmxhY2s6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI21hZ2VudGE6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYWdlbnRhO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZDphZnRlciB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHg7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsUUFBUTtJQUNSLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlEQUFzRDtJQUN0RCwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgc3JjOiB1cmwoUm9ib3RvLVJlZ3VsYXIudHRmKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDIxOSwgMjI5KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAxMDBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNjBweDtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDI2MHB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogNDBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbn1cXG5cXG4uYm9hcmQtYmxvY2tlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDEwcHg7XFxufVxcblxcbi5saXN0ID4gLmxpc3QtbmFtZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5saXN0ID4gLm5ldy10YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3QgPiAubmV3LXRhc2stY29udGFpbmVyID4gLnBsdXMtaWNvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCA+IC5uZXctdGFzay1jb250YWluZXIgPiAuYWRkLW5ldy10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgPiAudW5jb21wbGV0ZS1jb250YWluZXIgLmRhdGUtY29udGFpbmVye1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3QgPiAudW5jb21wbGV0ZS1jb250YWluZXIgLmRhdGV7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5saXN0IC50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLmxpc3QgLnRhc2stY29udGFpbmVyID4gLmNvbXBsZXRlLWljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgLnRhc2stY29udGFpbmVyID4gLnRhc2stbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0IC50YXNrLWNvbnRhaW5lciA+IC5jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdCAudGFzay10aW1lLCAubGlzdCAucHJpb3JpdHktaWNvbiB7XFxuICAgIHBhZGRpbmc6IDFweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xcbn1cXG5cXG4ubGlzdCA+IC5jb21wbGV0ZWQtY29udGFpbmVyID4gLmNvbXBsZXRlZC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCBncmV5IDFweDtcXG59XFxuXFxuLmxpc3QgPiAuY29tcGxldGVkLWNvbnRhaW5lciAuY29tcGxldGVkLWhlYWRlci1pY29uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QgLmNvbXBsZXRlZC1oZWFkZXIgPiAuaGVhZGVyLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCA+IC5jb21wbGV0ZWQtY29udGFpbmVyID4gLnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4ubGlzdCA+IC5jb21wbGV0ZWQtY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5saXN0ID4gLmNvbXBsZXRlZC1jb250YWluZXIgLmNvbXBsZXRlLWljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59IFxcblxcbi5saXN0IC5pY29uIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uYWRkLW5ldy1saXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzNCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gLmljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuaWNvbiB7XFxuICAgIGhlaWdodDogMTZweDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IC5wb3B1cC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gLnBvcHVwLWNvbnRlbnQgPiBpbnB1dCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgPiAucG9wdXAtY29udGVudCA+IGZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgZmllbGRzZXQgPiBsZWdlbmQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIGZpZWxkc2V0ID4gLmNvbG9yLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBhdXRvKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDBweCk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmFmdGVyIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI3JlZDphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI2dyZWVuOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNibHVlOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI29yYW5nZTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI3RlYWw6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jbGlnaHRncmV5OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jZ3JleTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgLmNvbG9yLWJ1dHRvbnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSNkYXJrZ3JleTphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0jYmxhY2s6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciAuY29sb3ItYnV0dG9ucyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdI21hZ2VudGE6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYWdlbnRhO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIC5jb2xvci1idXR0b25zIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZDphZnRlciB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pY29ucy9jaXJjbGVfd2hpdGVfMjRkcC5zdmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICogYXMgbW9kZWwgZnJvbSBcIi4vbW9kZWwuanNcIjtcbmltcG9ydCAqIGFzIHZpZXcgZnJvbSBcIi4vdmlldy5qc1wiO1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIG1vZGVsLmluaXRpYWxpemVCb2FyZCgpO1xuICAgIHZpZXcuaW5pdGlhbGl6ZVRlbXBsYXRlKCk7XG59XG5cbmNvbnN0IGFkZE5ld0xpc3QgPSAobGlzdFRpdGxlLCBsaXN0Q29sb3IpID0+IHtcbiAgICBjb25zdCBuZXdMaXN0SW5kZXggPSBtb2RlbC5jcmVhdGVMaXN0KGxpc3RUaXRsZSwgbGlzdENvbG9yKTtcbiAgICBjb25zdCBuZXdMaXN0ID0gbW9kZWwuZ2V0TGlzdChuZXdMaXN0SW5kZXgpO1xuICAgIHZpZXcuY3JlYXRlTGlzdChuZXdMaXN0KTtcbn1cblxuY29uc3QgYWRkTmV3TGlzdFBvcHVwID0gKGUpID0+IHtcbiAgICB2aWV3LmNyZWF0ZUFkZE5ld0xpc3RQb3B1cCgpO1xufTtcblxuY29uc3QgZXhpdFBvcHVwID0gKGUpID0+IHtcbiAgICB2aWV3LnJlbW92ZVBvcHVwKCk7XG4gICAgdmlldy5yZW1vdmVCb2FyZEJsb2NrZXIoKTtcbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge2luaXQsIGFkZE5ld0xpc3QsIGFkZE5ld0xpc3RQb3B1cCwgZXhpdFBvcHVwfTsiLCJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIlxuXG5sZXQgYm9hcmQ7XG5cbmNvbnN0IGluaXRpYWxpemVCb2FyZCA9ICgpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSAmJiBib2FyZEluU3RvcmFnZSgpKSB7XG4gICAgICAgIGJvYXJkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJib2FyZFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGJvYXJkID0gW107XG4gICAgfVxufTtcblxuY29uc3Qgc3RvcmFnZUF2YWlsYWJsZSA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgbGV0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59O1xuXG5jb25zdCBib2FyZEluU3RvcmFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYm9hcmRcIikgPyB0cnVlIDogZmFsc2UpO1xufTtcblxuY29uc3QgTGlzdCA9IChuYW1lLCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcbiAgICBjb25zdCBpbmRleCA9IGJvYXJkLmxlbmd0aDtcbiAgICBjb25zdCB1cGRhdGVOYW1lID0gKG5ld05hbWUpID0+IHtuYW1lID0gbmV3TmFtZX07XG4gICAgY29uc3QgdXBkYXRlQ29sb3IgPSAobmV3Q29sb3IpID0+IHtjb2xvciA9IG5ld0NvbG9yfTtcblxuICAgIHJldHVybiB7bmFtZSxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgdXBkYXRlTmFtZSxcbiAgICAgICAgICAgIHVwZGF0ZUNvbG9yfTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAobmFtZSwgY29sb3IpID0+IHtcbiAgICBjb25zdCBuZXdMaXN0ID0gTGlzdChuYW1lLCBjb2xvcik7XG4gICAgYWRkTGlzdChuZXdMaXN0KTtcbiAgICByZXR1cm4gbmV3TGlzdC5pbmRleDtcbn07XG5cbmNvbnN0IGFkZExpc3QgPSAobGlzdCkgPT4ge2JvYXJkLnB1c2gobGlzdCl9O1xuXG5jb25zdCBnZXRMaXN0ID0gKGluZGV4KSA9PiBPYmplY3QuYXNzaWduKHt9LCBib2FyZFtpbmRleF0pO1xuXG5leHBvcnQge2luaXRpYWxpemVCb2FyZCxcbiAgICAgICAgY3JlYXRlTGlzdCxcbiAgICAgICAgZ2V0TGlzdCxcbn07IiwiaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCJcblxuY29uc3QgaW5pdGlhbGl6ZVRlbXBsYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gY3JlYXRlVGVtcGxhdGUoKTtcbiAgICBhZGRUZW1wbGF0ZSh0ZW1wbGF0ZSk7XG59XG5cbmNvbnN0IGNyZWF0ZVRlbXBsYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGFkZE5ld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgYm9hcmQuY2xhc3NMaXN0ID0gXCJib2FyZFwiO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVG9kbyBCb2FyZFwiO1xuICAgIGFkZE5ld0xpc3QuY2xhc3NMaXN0ID0gXCJhZGQtbmV3LWxpc3RcIjtcbiAgICBhZGROZXdMaXN0LnRleHRDb250ZW50ID0gXCIrIEFkZCBuZXcgbGlzdFwiO1xuXG4gICAgYWRkTmV3TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udHJvbGxlci5hZGROZXdMaXN0UG9wdXApO1xuXG4gICAgdGVtcGxhdGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB0ZW1wbGF0ZS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoYWRkTmV3TGlzdCk7XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG59O1xuXG5jb25zdCBhZGRUZW1wbGF0ZSA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHRlbXBsYXRlKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAobGlzdE9iamVjdCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuZXdUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwbHVzSWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcGx1c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IGFkZE5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGlzdC5kYXRhc2V0LmluZGV4ID0gbGlzdE9iamVjdC5pbmRleDtcbiAgICBsaXN0LmNsYXNzTGlzdCA9IFwibGlzdFwiO1xuICAgIGxpc3Quc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gbGlzdE9iamVjdC5jb2xvcjtcbiAgICBsaXN0TmFtZS50ZXh0Q29udGVudCA9IGxpc3RPYmplY3QubmFtZTtcbiAgICBsaXN0TmFtZS5jbGFzc0xpc3QgPSBcImxpc3QtbmFtZVwiO1xuICAgIG5ld1Rhc2tDb250YWluZXIuY2xhc3NMaXN0ID0gXCJuZXctdGFzay1jb250YWluZXJcIjtcbiAgICBwbHVzSWNvbkNvbnRhaW5lci5jbGFzc0xpc3QgPSBcInBsdXNJY29uQ29udGFpbmVyXCI7XG4gICAgYWRkTmV3VGFzay50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyB0YXNrXCI7XG4gICAgYWRkTmV3VGFzay5jbGFzc0xpc3QgPSBcImFkZC1uZXctdGFza1wiO1xuICAgIHBsdXNJY29uLmNsYXNzTGlzdCA9IFwiaWNvblwiO1xuICAgIHBsdXNJY29uLnNyYyA9IFwiLi4vc3JjL2ljb25zL2FkZF9ibGFja18yNGRwLnN2Z1wiXG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3ROYW1lKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKG5ld1Rhc2tDb250YWluZXIpO1xuICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQocGx1c0ljb25Db250YWluZXIpO1xuICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTmV3VGFzayk7XG4gICAgcGx1c0ljb25Db250YWluZXIuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuXG4gICAgYWRkTGlzdChsaXN0KTtcbn07XG5cbmNvbnN0IGFkZExpc3QgPSAobGlzdCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZFwiKTtcbiAgICBjb25zdCBhZGROZXdMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbmV3LWxpc3RcIik7XG4gICAgYm9hcmQuaW5zZXJ0QmVmb3JlKGxpc3QsIGFkZE5ld0xpc3RCdXR0b24pO1xufTtcblxuY29uc3QgY3JlYXRlQWRkTmV3TGlzdFBvcHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gY3JlYXRlUG9wdXBUZW1wbGF0ZSgpO1xuICAgIGNvbnN0IGNvbG9yUGlja2VyRmllbGRzZXQgPSBjcmVhdGVDb2xvclBpY2tlckZpZWxkc2V0KCk7XG4gICAgY29uc3QgcG9wdXBDb250ZW50ID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1jb250ZW50XCIpO1xuICAgIGNvbnN0IHBvcHVwVGl0bGUgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQucG9wdXAtdGl0bGVcIik7XG5cbiAgICBwb3B1cFRpdGxlLnBsYWNlaG9sZGVyID0gXCJFbnRlciBMaXN0IFRpdGxlXCI7XG4gICAgXG4gICAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGNvbG9yUGlja2VyRmllbGRzZXQpO1xuXG4gICAgYWRkUG9wdXAocG9wdXApO1xuICAgIGFkZEJvYXJkQmxvY2tlcigpO1xufTtcblxuY29uc3QgY3JlYXRlUG9wdXBUZW1wbGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cFRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCBwb3B1cENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBvcHVwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QgPSBcInBvcHVwLWNvbnRhaW5lclwiO1xuICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0ID0gXCJpY29uLWNvbnRhaW5lclwiO1xuICAgIGljb24uY2xhc3NMaXN0ID0gXCJpY29uXCI7XG4gICAgaWNvbi5zcmMgPSBcIi4uL3NyYy9pY29ucy9jbG9zZV9ibGFja18yNGRwLnN2Z1wiO1xuICAgIHBvcHVwQ29udGVudC5jbGFzc0xpc3QgPSBcInBvcHVwLWNvbnRlbnRcIjtcbiAgICBwb3B1cFRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICBwb3B1cFRpdGxlLmNsYXNzTGlzdCA9IFwicG9wdXAtdGl0bGVcIjtcblxuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRyb2xsZXIuZXhpdFBvcHVwKTtcblxuICAgIHBvcHVwVGVtcGxhdGUuYXBwZW5kQ2hpbGQocG9wdXBDb250YWluZXIpO1xuICAgIHBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuICAgIHBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwQ29udGVudCk7XG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXBUaXRsZSk7XG5cbiAgICByZXR1cm4gcG9wdXBUZW1wbGF0ZTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbG9yUGlja2VyRmllbGRzZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbiAgICBjb25zdCBjb2xvckJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHJlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBncmVlbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBibHVlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IG9yYW5nZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB0ZWFsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGxpZ2h0Z3JleUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBncmV5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGRhcmtncmV5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGJsYWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IG1hZ2VudGFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIkxpc3QgQ29sb3JcIjtcbiAgICBjb2xvckJ1dHRvbnMuY2xhc3NMaXN0ID0gXCJjb2xvci1idXR0b25zXCI7XG4gICAgcmVkQnV0dG9uLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgcmVkQnV0dG9uLm5hbWUgPSBcImNvbG9yXCI7XG4gICAgcmVkQnV0dG9uLmlkID0gXCJyZWRcIjtcbiAgICByZWRCdXR0b24udmFsdWUgPSBcInJlZFwiO1xuICAgIGdyZWVuQnV0dG9uLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgZ3JlZW5CdXR0b24ubmFtZSA9IFwiY29sb3JcIjtcbiAgICBncmVlbkJ1dHRvbi5pZCA9IFwiZ3JlZW5cIjtcbiAgICBncmVlbkJ1dHRvbi52YWx1ZSA9IFwiZ3JlZW5cIjtcbiAgICBibHVlQnV0dG9uLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgYmx1ZUJ1dHRvbi5uYW1lID0gXCJjb2xvclwiO1xuICAgIGJsdWVCdXR0b24uaWQgPSBcImJsdWVcIjtcbiAgICBibHVlQnV0dG9uLnZhbHVlID0gXCJibHVlXCI7XG4gICAgb3JhbmdlQnV0dG9uLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgb3JhbmdlQnV0dG9uLm5hbWUgPSBcImNvbG9yXCI7XG4gICAgb3JhbmdlQnV0dG9uLmlkID0gXCJvcmFuZ2VcIjtcbiAgICBvcmFuZ2VCdXR0b24udmFsdWUgPSBcIm9yYW5nZVwiO1xuICAgIHRlYWxCdXR0b24udHlwZSA9IFwicmFkaW9cIjtcbiAgICB0ZWFsQnV0dG9uLm5hbWUgPSBcImNvbG9yXCI7XG4gICAgdGVhbEJ1dHRvbi5pZCA9IFwidGVhbFwiO1xuICAgIHRlYWxCdXR0b24udmFsdWUgPSBcInRlYWxcIjtcbiAgICBsaWdodGdyZXlCdXR0b24udHlwZSA9IFwicmFkaW9cIjtcbiAgICBsaWdodGdyZXlCdXR0b24ubmFtZSA9IFwiY29sb3JcIjtcbiAgICBsaWdodGdyZXlCdXR0b24uaWQgPSBcImxpZ2h0Z3JleVwiO1xuICAgIGxpZ2h0Z3JleUJ1dHRvbi52YWx1ZSA9IFwibGlnaHRncmV5XCI7XG4gICAgZ3JleUJ1dHRvbi50eXBlID0gXCJyYWRpb1wiO1xuICAgIGdyZXlCdXR0b24ubmFtZSA9IFwiY29sb3JcIjtcbiAgICBncmV5QnV0dG9uLmlkID0gXCJncmV5XCI7XG4gICAgZ3JleUJ1dHRvbi52YWx1ZSA9IFwiZ3JleVwiO1xuICAgIGRhcmtncmV5QnV0dG9uLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgZGFya2dyZXlCdXR0b24ubmFtZSA9IFwiY29sb3JcIjtcbiAgICBkYXJrZ3JleUJ1dHRvbi5pZCA9IFwiZGFya2dyZXlcIjtcbiAgICBkYXJrZ3JleUJ1dHRvbi52YWx1ZSA9IFwiZGFya2dyZXlcIjtcbiAgICBibGFja0J1dHRvbi50eXBlID0gXCJyYWRpb1wiO1xuICAgIGJsYWNrQnV0dG9uLm5hbWUgPSBcImNvbG9yXCI7XG4gICAgYmxhY2tCdXR0b24uaWQgPSBcImJsYWNrXCI7XG4gICAgYmxhY2tCdXR0b24udmFsdWUgPSBcImJsYWNrXCI7XG4gICAgYmxhY2tCdXR0b24uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcbiAgICBtYWdlbnRhQnV0dG9uLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgbWFnZW50YUJ1dHRvbi5uYW1lID0gXCJjb2xvclwiO1xuICAgIG1hZ2VudGFCdXR0b24uaWQgPSBcIm1hZ2VudGFcIjtcbiAgICBtYWdlbnRhQnV0dG9uLnZhbHVlID0gXCJtYWdlbnRhXCI7XG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGNvbG9yQnV0dG9ucyk7XG4gICAgY29sb3JCdXR0b25zLmFwcGVuZENoaWxkKHJlZEJ1dHRvbik7XG4gICAgY29sb3JCdXR0b25zLmFwcGVuZENoaWxkKGdyZWVuQnV0dG9uKTtcbiAgICBjb2xvckJ1dHRvbnMuYXBwZW5kQ2hpbGQoYmx1ZUJ1dHRvbik7XG4gICAgY29sb3JCdXR0b25zLmFwcGVuZENoaWxkKG9yYW5nZUJ1dHRvbik7XG4gICAgY29sb3JCdXR0b25zLmFwcGVuZENoaWxkKHRlYWxCdXR0b24pO1xuICAgIGNvbG9yQnV0dG9ucy5hcHBlbmRDaGlsZChsaWdodGdyZXlCdXR0b24pO1xuICAgIGNvbG9yQnV0dG9ucy5hcHBlbmRDaGlsZChncmV5QnV0dG9uKTtcbiAgICBjb2xvckJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGFya2dyZXlCdXR0b24pO1xuICAgIGNvbG9yQnV0dG9ucy5hcHBlbmRDaGlsZChibGFja0J1dHRvbik7XG4gICAgY29sb3JCdXR0b25zLmFwcGVuZENoaWxkKG1hZ2VudGFCdXR0b24pO1xuXG4gICAgcmV0dXJuIGZpZWxkc2V0O1xufTtcblxuY29uc3QgYWRkUG9wdXAgPSAocG9wdXApID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XG59O1xuXG5jb25zdCByZW1vdmVQb3B1cCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtY29udGFpbmVyXCIpO1xuICAgIHBvcHVwLnJlbW92ZSgpO1xufTtcblxuY29uc3QgYWRkQm9hcmRCbG9ja2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZFwiKTtcbiAgICBjb25zdCBib2FyZEJsb2NrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgYm9hcmQuc3R5bGUub3BhY2l0eSA9IDAuNDtcbiAgICBib2FyZEJsb2NrZXIuY2xhc3NMaXN0ID0gXCJib2FyZC1ibG9ja2VyXCI7XG5cbiAgICBib2FyZEJsb2NrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChwb3B1cEZpbGxlZCgpKSB7XG4gICAgICAgICAgICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC10aXRsZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sb3JCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIFwiaW5wdXRbbmFtZT0nY29sb3InXTpjaGVja2VkXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGROZXdMaXN0KFxuICAgICAgICAgICAgICAgIHBvcHVwVGl0bGUudmFsdWUsIHNlbGVjdGVkQ29sb3JCdXR0b24udmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb250cm9sbGVyLmV4aXRQb3B1cChlKTtcbiAgICB9KTtcblxuICAgIGJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQmxvY2tlcik7XG59O1xuXG5jb25zdCByZW1vdmVCb2FyZEJsb2NrZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkXCIpO1xuICAgIGNvbnN0IGJvYXJkQmxvY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYmxvY2tlclwiKTtcbiAgICBcbiAgICBib2FyZC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBib2FyZEJsb2NrZXIucmVtb3ZlKCk7XG59O1xuXG5jb25zdCBwb3B1cEZpbGxlZCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC10aXRsZVwiKTtcbiAgICBcbiAgICByZXR1cm4gKHBvcHVwVGl0bGUudmFsdWUgPT09IFwiXCIpID8gZmFsc2UgOiB0cnVlO1xufTtcblxuZXhwb3J0IHtpbml0aWFsaXplVGVtcGxhdGUsXG4gICAgICAgIGNyZWF0ZUxpc3QsXG4gICAgICAgIGNyZWF0ZUFkZE5ld0xpc3RQb3B1cCxcbiAgICAgICAgcmVtb3ZlUG9wdXAsXG4gICAgICAgIHJlbW92ZUJvYXJkQmxvY2tlcixcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tIFwiLi9zY3JpcHRzL2NvbnRyb2xsZXIuanNcIjtcblxuY29udHJvbGxlci5pbml0KCk7XG5cbi8vdGVzdCBmdW5jdGlvbiBjYWxsc1xuXG5cblxuLy9QbGFubmluZ1xuLy9JbmRleFxuLy8gIGNvbnRyb2xsZXIuaW5pdCgpO1xuLy9Nb2RlbFxuLy8gIGJvYXJkIChhcnJheSkgLT4gbGlzdCAob2JqZWN0OiBuYW1lIChzdHIpLCBjb2xvciAoc3RyKSwgY29udGVudCAoYXJyYXkpLCBcbi8vICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZU5hbWUoKSwgdXBkYXRlQ29sb3IoKSxcbi8vICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSgpLCBkZWxldGVBbGxDb21wbGV0ZWRUYXNrcygpKVxuLy8gICAgICBjb250ZW50IChhcnJheSkgLT4gdGFzayAob2JqZWN0OiBuYW1lIChzdHIpLCBkYXRlVGltZSAoc3RyKSwgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5IChzdHIpLCBjb21wbGV0ZSAoYm9vbGVhbiksIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVOYW1lKCksIHVwZGF0ZURhdGVUaW1lKCksIHVwZGF0ZVByaW9yaXR5KCksIHVwZGF0ZUNvbXBsZXRlKCksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSgpKVxuLy8gIGluaXRpdGlhbGl6ZUJvYXJkKCksIGNyZWF0ZUxpc3QoKSwgY3JlYXRlVGFzaygpLCBhZGRMaXN0KCksIGFkZFRhc2soKSwgZ2V0TGlzdCgpLCBnZXRUYXNrKCksIHVwZGF0ZUxpc3QoKSxcbi8vICAgICAgdXBkYXRlVGFzaygpLCBkZWxldGVMaXN0KCksIGRlbGV0ZVRhc2soKVxuLy9cbi8vVmlld1xuLy8gIG5ld0xpc3RQb3B1cCAobm9kZUxpc3QpXG4vLyAgbmV3VGFza1BvcHVwIChub2RlbGlzdClcbi8vICBlZGl0TGlzdFBvcHVwIChub2RlTGlzdClcbi8vICBlZGl0VGFza1BvcHVwIChub2RlTGlzdClcbi8vICBpbml0aWFsaXplVGVtcGxhdGUoKSwgY3JlYXRlVGVtcGxhdGUoKSwgYWRkVGVtcGxhdGUoKSxcbi8vICBjcmVhdGVBZGROZXdMaXN0UG9wdXAoKSwgY3JlYXRlQWRkTmV3VGFza1BvcHVwKCksIGNyZWF0ZUVkaXRMaXN0UG9wdXAoKSxcbi8vICBjcmVhdGVFZGl0VGFza1BvcHVwKCksIGFkZFBvcHVwKCksIHJlbW92ZVBvcHVwKCksIGFkZEJvYXJkQmxvY2tlcigpLFxuLy8gIHJlbW92ZUJvYXJkQmxvY2tlcigpLCBjcmVhdGVMaXN0KCksIFxuLy8gIGNyZWF0ZVRhc2soKSwgYWRkTGlzdCgpLCBhZGRUYXNrKClcbi8vICBcbi8vQ29udHJvbGxlclxuLy8gIGluaXQoKSwgYWRkTmV3TGlzdFBvcHVwKGUpLCBhZGROZXdUYXNrUG9wdXAoZSksIGVkaXRMaXN0UG9wdXAoZSksXG4vLyAgZWRpdFRhc2tQb3B1cChlKSwgZXhpdFBvcHVwKGUpLCBcbi8vICBhZGROZXdMaXN0KGUpLCBhZGROZXdUYXNrKGUpLCBlZGl0TGlzdChlKSwgZWRpdFRhc2soZSksXG4vLyAgZGVsZXRlTGlzdChlKSwgZGVsZXRlQWxsQ29tcGxldGVkTGlzdHMoZSksIGRlbGV0ZVRhc2soZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=