/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    font-size: 100%;\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    box-sizing: inherit;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-flow: row nowrap;\n    background: linear-gradient(45deg, black, darkblue);\n    background-size: 200%;\n    animation: bg-animation 40s infinite alternate;\n    color: white;\n}\n\n@keyframes bg-animation {\n    0% {background-position: left;}\n    100% {background-position: right;}\n}\n\np {\n    margin: 0;\n    padding: 1em;\n    text-align: center;\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    min-height: 55px;\n    height: 10%;\n    padding: 1em;\n    text-align: center;\n    border-left: 2px solid white;\n    border-radius: 8px;\n    overflow: hidden;\n    background: linear-gradient(45deg, rgb(0, 162, 255) 50%, rgb(63, 63, 63) 50%);\n    background-size: 250% 100%;\n    background-position: right;\n    transition: background-position 0.75s ease-in-out;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nli:hover {\n    background-position: left;\n}\n\nbutton {\n    width: 100%;\n    \n    background-color: transparent;\n    color: white;\n    border: transparent;\n}\n\n.library-box {\n    width: 20%;\n    height: 100%;\n    background-color: rgb(37, 37, 37);\n}\n\n.welcome-text {\n    width: 100%;\n    min-height: 75px;\n    height: 10%;\n    font-size: 1.3em;\n}\n\n.project-library {\n    width: 100%;\n    height: 70%;\n    overflow: auto;\n    background-color: rgb(63, 63, 63);\n}\n\n.project-controls {\n    min-height: 1em;\n    height: 20%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    gap: 0.5em;\n    overflow: auto;\n}\n\n.project-btn {\n    font-size: 1.3em;\n    border: 3px solid white;\n    border-radius: 8px;\n    transition: font-size 0.5s;\n}\n\n.project-btn:hover {\n    font-size: 1.4em;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.task-library {\n    height: 80%;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n    border-radius: 0 8px 8px 0;\n    background-color: rgb(63, 63, 63);\n    animation: slide-in 250ms cubic-bezier(.76,.27,.72,1.41) forwards;\n}\n\n@keyframes slide-in {\n    0% {width: 0%;}\n    100% {width: 20%;}\n}\n\n.priority-box {\n    width: 100%;\n    height: 6.7%;\n    background: black;\n    font-size: 1.3em;\n    line-height: 0;\n    color: cyan;\n    border-radius: 5px;\n\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n}\n\n.add-task-btn {\n    width: 20%;\n    height: 70%;\n    margin: 0;\n    padding: 0;\n    background-color: grey;\n    border-left: 1px solid inherit;\n    border-right: 1px solid inherit;\n    border-radius: inherit;\n    font-size: 1em;\n    font-weight: 900;\n}\n\n.add-task-btn:hover {\n    font-size: 1.1em;\n}\n\n.essential-library {\n    height: 26.7%;\n    overflow: auto;\n}\n\n.major-library {\n    height: 26.7%;\n    overflow: auto;\n}\n\n.minor-library {\n    height: 26.7%;\n    overflow: auto;\n}\n\n.big-circle {\n    width: 1.5em;\n    height: 1.5em;\n    border: 1px solid cyan;\n    border-radius: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .small-circle {\n    width: 1em;\n    height: 1em;\n    border-radius: 100px;\n    background: transparent;\n  }\n  \n  .small-circle:hover {\n    background: cyan;\n  }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.task-info-box {\n    width: 30%;\n    height: 50%;\n    margin: auto;\n    background: white;\n    border-radius: 8px;\n    animation: unravel 1s ease-out 1 forwards;\n}\n\n@keyframes unravel {\n    0% {height: 0%;}\n    100% {height: 50%;}\n}\n\n.due-date-display {\n    height: 20%;\n    font-size: 1.1em;\n    font-weight: 900;\n    background: grey;\n    border-bottom: 3px solid white;\n    border-radius: 4px;\n}\n\n.description-display {\n    height: 70%;\n    padding: 1.5em;\n    font-size: 1em;\n    color: black;\n    text-align: left;\n    overflow: auto;\n}\n\n.edit-btn {\n    height: 10%;\n    font-size: 1.3em;\n    font-weight: 900;\n    background: linear-gradient(to top, dodgerblue 50%, grey 50%);\n    background-size: 100% 250%;\n    background-position: top;\n    border-top: 1px solid grey;\n    border-radius: 4px;\n    transition: background-position 0.75s ease-in-out;\n}\n\n.edit-btn:hover {\n    background-position: bottom;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n    font-size: 100%;\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    box-sizing: inherit;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-flow: row nowrap;\n    background: linear-gradient(45deg, black, darkblue);\n    background-size: 200%;\n    animation: bg-animation 40s infinite alternate;\n    color: white;\n}\n\n@keyframes bg-animation {\n    0% {background-position: left;}\n    100% {background-position: right;}\n}\n\np {\n    margin: 0;\n    padding: 1em;\n    text-align: center;\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    min-height: 55px;\n    height: 10%;\n    padding: 1em;\n    text-align: center;\n    border-left: 2px solid white;\n    border-radius: 8px;\n    overflow: hidden;\n    background: linear-gradient(45deg, rgb(0, 162, 255) 50%, rgb(63, 63, 63) 50%);\n    background-size: 250% 100%;\n    background-position: right;\n    transition: background-position 0.75s ease-in-out;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nli:hover {\n    background-position: left;\n}\n\nbutton {\n    width: 100%;\n    \n    background-color: transparent;\n    color: white;\n    border: transparent;\n}\n\n.library-box {\n    width: 20%;\n    height: 100%;\n    background-color: rgb(37, 37, 37);\n}\n\n.welcome-text {\n    width: 100%;\n    min-height: 75px;\n    height: 10%;\n    font-size: 1.3em;\n}\n\n.project-library {\n    width: 100%;\n    height: 70%;\n    overflow: auto;\n    background-color: rgb(63, 63, 63);\n}\n\n.project-controls {\n    min-height: 1em;\n    height: 20%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    gap: 0.5em;\n    overflow: auto;\n}\n\n.project-btn {\n    font-size: 1.3em;\n    border: 3px solid white;\n    border-radius: 8px;\n    transition: font-size 0.5s;\n}\n\n.project-btn:hover {\n    font-size: 1.4em;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.task-library {\n    height: 80%;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n    border-radius: 0 8px 8px 0;\n    background-color: rgb(63, 63, 63);\n    animation: slide-in 250ms cubic-bezier(.76,.27,.72,1.41) forwards;\n}\n\n@keyframes slide-in {\n    0% {width: 0%;}\n    100% {width: 20%;}\n}\n\n.priority-box {\n    width: 100%;\n    height: 6.7%;\n    background: black;\n    font-size: 1.3em;\n    line-height: 0;\n    color: cyan;\n    border-radius: 5px;\n\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n}\n\n.add-task-btn {\n    width: 20%;\n    height: 70%;\n    margin: 0;\n    padding: 0;\n    background-color: grey;\n    border-left: 1px solid inherit;\n    border-right: 1px solid inherit;\n    border-radius: inherit;\n    font-size: 1em;\n    font-weight: 900;\n}\n\n.add-task-btn:hover {\n    font-size: 1.1em;\n}\n\n.essential-library {\n    height: 26.7%;\n    overflow: auto;\n}\n\n.major-library {\n    height: 26.7%;\n    overflow: auto;\n}\n\n.minor-library {\n    height: 26.7%;\n    overflow: auto;\n}\n\n.big-circle {\n    width: 1.5em;\n    height: 1.5em;\n    border: 1px solid cyan;\n    border-radius: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .small-circle {\n    width: 1em;\n    height: 1em;\n    border-radius: 100px;\n    background: transparent;\n  }\n  \n  .small-circle:hover {\n    background: cyan;\n  }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.task-info-box {\n    width: 30%;\n    height: 50%;\n    margin: auto;\n    background: white;\n    border-radius: 8px;\n    animation: unravel 1s ease-out 1 forwards;\n}\n\n@keyframes unravel {\n    0% {height: 0%;}\n    100% {height: 50%;}\n}\n\n.due-date-display {\n    height: 20%;\n    font-size: 1.1em;\n    font-weight: 900;\n    background: grey;\n    border-bottom: 3px solid white;\n    border-radius: 4px;\n}\n\n.description-display {\n    height: 70%;\n    padding: 1.5em;\n    font-size: 1em;\n    color: black;\n    text-align: left;\n    overflow: auto;\n}\n\n.edit-btn {\n    height: 10%;\n    font-size: 1.3em;\n    font-weight: 900;\n    background: linear-gradient(to top, dodgerblue 50%, grey 50%);\n    background-size: 100% 250%;\n    background-position: top;\n    border-top: 1px solid grey;\n    border-radius: 4px;\n    transition: background-position 0.75s ease-in-out;\n}\n\n.edit-btn:hover {\n    background-position: bottom;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/libraryLogic.js":
/*!*****************************!*\
  !*** ./src/libraryLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "returnProjectLibrary": () => (/* binding */ returnProjectLibrary),
/* harmony export */   "returnTaskList": () => (/* binding */ returnTaskList),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
const Project = title => {
    let essentialTasks = [];
    let majorTasks = [];
    let minorTasks = [];
    return {title, essentialTasks, majorTasks, minorTasks};
};

const Task = (title, enteredDueDate, description) => {
    let dueDate = new Date(enteredDueDate);
    return {title, dueDate, description};
};

let projectLibrary = [
    {
        title: "Start Here",
        essentialTasks: [],
        majorTasks: [],
        minorTasks: []
    }
];

function orderByDueDate(targetTaskList) {
    targetTaskList.sort((a, b) => a["dueDate"].getTime() - b["dueDate"].getTime())
}

function returnProjectLibrary() {
    return projectLibrary;
};

function returnTaskList(targetProjectTitle, targetTaskList) {
    const projectIndex = projectLibrary.findIndex((project) => project.title === targetProjectTitle);
    const targetProject = returnProjectLibrary()[projectIndex];
    return targetProject[targetTaskList];
};

function addProject() {
    projectLibrary.push(Project(prompt("Name new project:")));
};

function addTask(targetTaskList) {
    const newTask = Task(prompt("Enter task's name:"), prompt("Enter task's due date:", "MM/DD/YYYY"), prompt("Enter task's description:"));
    targetTaskList.push(newTask);
    orderByDueDate(targetTaskList);
};

function editTask(targetTaskList, targetTask, targetTaskIndex) {
    const revisedTask = Task(
        prompt("Enter task's name:", `${targetTask.title}`),
        prompt("Enter task's due date:", `${targetTask.DueDate}`),
        prompt("Enter task's description:", `${targetTask.description}`)
    );
    targetTaskList.splice(targetTaskIndex, 1, revisedTask);
    orderByDueDate(targetTaskList);
    console.log(targetTaskList);
};



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/gui.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libraryLogic.js */ "./src/libraryLogic.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const body = document.querySelector("body");


const homeLibraryBox = document.createElement("div");
const welcomeText = document.createElement("p");
const projectLibrary = document.createElement("ul");
const projectControls = document.createElement("div");
const newProjectBtn = document.createElement("button");
const renameProjectBtn = document.createElement("button");
const finishProjectBtn = document.createElement("button");

const taskLibraryBox = document.createElement("div");
const essentialTaskBar = document.createElement("div");
const majorTaskBar = document.createElement("div");
const minorTaskBar = document.createElement("div");

const taskInfoBox = document.createElement("div");
const dueDateDisplay = document.createElement("p");
const descriptionDisplay = document.createElement("p");


function clearTaskInfoBox() {
    while (taskInfoBox.firstChild) {
        taskInfoBox.removeChild(taskInfoBox.firstChild);
    };
    body.removeChild(taskInfoBox);
};

function renderTaskInfoBox(targetProjectTitle, targetTaskList, targetTask, targetTaskIndex) {
    if (taskInfoBox.firstChild) {clearTaskInfoBox()};
    taskInfoBox.classList.add("task-info-box");

    dueDateDisplay.classList.add("due-date-display");
    dueDateDisplay.textContent = targetTask["dueDate"];
    taskInfoBox.appendChild(dueDateDisplay);

    descriptionDisplay.classList.add("description-display");
    descriptionDisplay.textContent = targetTask["description"]
    taskInfoBox.appendChild(descriptionDisplay);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.editTask)(targetTaskList, targetTask, targetTaskIndex);
        renderTaskLibraryBox(targetProjectTitle);
        clearTaskInfoBox();
    });
    taskInfoBox.appendChild(editBtn);

    body.appendChild(taskInfoBox);
};


function clearTaskLibraryBox() {
    while (essentialTaskBar.firstChild) {
        essentialTaskBar.removeChild(essentialTaskBar.firstChild);
    };
    while (majorTaskBar.firstChild) {
        majorTaskBar.removeChild(majorTaskBar.firstChild);
    };
    while (minorTaskBar.firstChild) {
        minorTaskBar.removeChild(minorTaskBar.firstChild);
    };
    while (taskLibraryBox.firstChild) {
        taskLibraryBox.removeChild(taskLibraryBox.firstChild);
    };
    body.removeChild(taskLibraryBox);
};

function renderEssentialTasksList(targetProjectTitle, parentDiv) {
    for (let i = 0; i < (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "essentialTasks").length; i++) {
        const task = document.createElement("li");
        task.textContent = `${(0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "essentialTasks")[i].title}`;
        task.addEventListener("click", () => {
            renderTaskInfoBox(targetProjectTitle, (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "essentialTasks"), (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "essentialTasks")[i], [i]);
        });
        const bigCircle = document.createElement("div");
        bigCircle.classList.add("big-circle");
        const smallCircle = document.createElement("div");
        smallCircle.classList.add("small-circle");
        bigCircle.appendChild(smallCircle);
        task.appendChild(bigCircle);
        parentDiv.appendChild(task);
    };
};

function renderMajorTasksList(targetProjectTitle, parentDiv) {
    for (let i = 0; i < (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "majorTasks").length; i++) {
        const task = document.createElement("li");
        task.textContent = `${(0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "majorTasks")[i].title}`;
        task.addEventListener("click", () => {
            renderTaskInfoBox(targetProjectTitle, (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "majorTasks"), (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "majorTasks")[i], [i]);
        });
        const bigCircle = document.createElement("div");
        bigCircle.classList.add("big-circle");
        const smallCircle = document.createElement("div");
        smallCircle.classList.add("small-circle");
        bigCircle.appendChild(smallCircle);
        task.appendChild(bigCircle);
        parentDiv.appendChild(task);
    };
};

function renderMinorTasksList(targetProjectTitle, parentDiv) {
    for (let i = 0; i < (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "minorTasks").length; i++) {
        const task = document.createElement("li");
        task.textContent = `${(0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "minorTasks")[i].title}`;
        task.addEventListener("click", () => {
            renderTaskInfoBox(targetProjectTitle, (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "minorTasks"), (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "minorTasks")[i], [i]);
        });
        const bigCircle = document.createElement("div");
        bigCircle.classList.add("big-circle");
        const smallCircle = document.createElement("div");
        smallCircle.classList.add("small-circle");
        bigCircle.appendChild(smallCircle);
        task.appendChild(bigCircle);
        parentDiv.appendChild(task);
    };
};

function renderTaskLibraryBox(targetProjectTitle) {
    if (taskLibraryBox.firstChild) {clearTaskLibraryBox()};
    
    taskLibraryBox.classList.add("library-box", "task-library");

    const taskBarArrays = [essentialTaskBar, majorTaskBar, minorTaskBar, "essential", "major", "minor", renderEssentialTasksList, renderMajorTasksList, renderMinorTasksList];
    for (let i = 0; i < 3; i++) {
        taskBarArrays[i].classList.add("priority-box");
        const taskRank = document.createElement("p");
        taskRank.textContent =  `${taskBarArrays[i + 3]}`;
        taskBarArrays[i].appendChild(taskRank);
        const addTaskBtn = document.createElement("button");
        addTaskBtn.classList.add("add-task-btn");
        addTaskBtn.textContent = "+";
        addTaskBtn.addEventListener("click", () => {
            if (taskInfoBox.firstChild) {
                clearTaskInfoBox();
            };
            (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.addTask)((0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, `${taskBarArrays[i + 3]}Tasks`));
            clearTaskLibraryBox();
            renderTaskLibraryBox(targetProjectTitle);
        });
        taskBarArrays[i].appendChild(addTaskBtn);
        taskLibraryBox.appendChild(taskBarArrays[i]);

        const taskLibrary = document.createElement("ul");
        taskLibrary.classList.add(`${taskBarArrays[i + 3]}-library`);
        taskBarArrays[i + 6](targetProjectTitle, taskLibrary);
        taskLibraryBox.appendChild(taskLibrary);
    };

    body.appendChild(taskLibraryBox);
};

function renderProjectList() {
    if (projectLibrary.firstChild) {
        while (projectLibrary.firstChild) {
            projectLibrary.removeChild(projectLibrary.firstChild);
        };
    };
    for (let i = 0; i < (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnProjectLibrary)().length; i++) {
        const project = document.createElement("li");
        project.textContent = `${(0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnProjectLibrary)()[i]["title"]}`;
        project.addEventListener("click", () => {
            if (taskInfoBox.firstChild) {
                clearTaskInfoBox();
            };
            renderTaskLibraryBox(project.textContent);
        });
        projectLibrary.appendChild(project);
    };
};

function renderHomeLibrayBox() {
    homeLibraryBox.classList.add("library-box");

    welcomeText.classList.add("welcome-text");
    welcomeText.textContent = "Welcome, User";
    homeLibraryBox.appendChild(welcomeText);

    projectLibrary.classList.add("project-library");
    renderProjectList();
    homeLibraryBox.appendChild(projectLibrary);

    projectControls.classList.add("project-controls");
    newProjectBtn.classList.add("project-btn");
    newProjectBtn.textContent = "New Project";
    newProjectBtn.addEventListener("click", () => {
        (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.addProject)();
        renderProjectList();
    });
    projectControls.appendChild(newProjectBtn);
    renameProjectBtn.classList.add("project-btn");
    renameProjectBtn.textContent = "Rename Project";
    projectControls.appendChild(renameProjectBtn);
    finishProjectBtn.classList.add("project-btn");
    finishProjectBtn.textContent = "Finish Project";
    projectControls.appendChild(finishProjectBtn);
    homeLibraryBox.appendChild(projectControls);

    body.appendChild(homeLibraryBox);
};



renderHomeLibrayBox();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQVU7QUFDbEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUEsc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXZpdmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jldml2ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmV2aXZlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmV2aXZlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jldml2ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXZpdmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jldml2ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXZpdmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmV2aXZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmV2aXZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmV2aXZlLy4vc3JjL2xpYnJhcnlMb2dpYy5qcyIsIndlYnBhY2s6Ly9yZXZpdmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmV2aXZlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jldml2ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmV2aXZlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmV2aXZlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmV2aXZlLy4vc3JjL2d1aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBibGFjaywgZGFya2JsdWUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XFxuICAgIGFuaW1hdGlvbjogYmctYW5pbWF0aW9uIDQwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBiZy1hbmltYXRpb24ge1xcbiAgICAwJSB7YmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDt9XFxuICAgIDEwMCUge2JhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O31cXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gICAgbWluLWhlaWdodDogNTVweDtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDAsIDE2MiwgMjU1KSA1MCUsIHJnYig2MywgNjMsIDYzKSA1MCUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1MCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC43NXMgZWFzZS1pbi1vdXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5saWJyYXJ5LWJveCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAzNywgMzcpO1xcbn1cXG5cXG4ud2VsY29tZS10ZXh0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDc1cHg7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4ucHJvamVjdC1saWJyYXJ5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA2MywgNjMpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250cm9scyB7XFxuICAgIG1pbi1oZWlnaHQ6IDFlbTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC41ZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1idG4ge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC41cztcXG59XFxuXFxuLnByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgZm9udC1zaXplOiAxLjRlbTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnRhc2stbGlicmFyeSB7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgNjMsIDYzKTtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbiAyNTBtcyBjdWJpYy1iZXppZXIoLjc2LC4yNywuNzIsMS40MSkgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgICAwJSB7d2lkdGg6IDAlO31cXG4gICAgMTAwJSB7d2lkdGg6IDIwJTt9XFxufVxcblxcbi5wcmlvcml0eS1ib3gge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2LjclO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIGNvbG9yOiBjeWFuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBpbmhlcml0O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbi5lc3NlbnRpYWwtbGlicmFyeSB7XFxuICAgIGhlaWdodDogMjYuNyU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubWFqb3ItbGlicmFyeSB7XFxuICAgIGhlaWdodDogMjYuNyU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubWlub3ItbGlicmFyeSB7XFxuICAgIGhlaWdodDogMjYuNyU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uYmlnLWNpcmNsZSB7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgY3lhbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuc21hbGwtY2lyY2xlIHtcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIFxcbiAgLnNtYWxsLWNpcmNsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IGN5YW47XFxuICB9XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnRhc2staW5mby1ib3gge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBhbmltYXRpb246IHVucmF2ZWwgMXMgZWFzZS1vdXQgMSBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyB1bnJhdmVsIHtcXG4gICAgMCUge2hlaWdodDogMCU7fVxcbiAgICAxMDAlIHtoZWlnaHQ6IDUwJTt9XFxufVxcblxcbi5kdWUtZGF0ZS1kaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQ6IGdyZXk7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tZGlzcGxheSB7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBwYWRkaW5nOiAxLjVlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5lZGl0LWJ0biB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBkb2RnZXJibHVlIDUwJSwgZ3JleSA1MCUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjUwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuNzVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZWRpdC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbURBQW1EO0lBQ25ELHFCQUFxQjtJQUNyQiw4Q0FBOEM7SUFDOUMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLElBQUkseUJBQXlCLENBQUM7SUFDOUIsTUFBTSwwQkFBMEIsQ0FBQztBQUNyQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNkVBQTZFO0lBQzdFLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsaURBQWlEO0lBQ2pELGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVzs7SUFFWCw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7SUFDSSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLGlFQUFpRTtBQUNyRTs7QUFFQTtJQUNJLElBQUksU0FBUyxDQUFDO0lBQ2QsTUFBTSxVQUFVLENBQUM7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNGO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxJQUFJLFVBQVUsQ0FBQztJQUNmLE1BQU0sV0FBVyxDQUFDO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiw2REFBNkQ7SUFDN0QsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgYmxhY2ssIGRhcmtibHVlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xcbiAgICBhbmltYXRpb246IGJnLWFuaW1hdGlvbiA0MHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYmctYW5pbWF0aW9uIHtcXG4gICAgMCUge2JhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7fVxcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDt9XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5saSB7XFxuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigwLCAxNjIsIDI1NSkgNTAlLCByZ2IoNjMsIDYzLCA2MykgNTAlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNTAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuNzVzIGVhc2UtaW4tb3V0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubGlicmFyeS1ib3gge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgMzcsIDM3KTtcXG59XFxuXFxuLndlbGNvbWUtdGV4dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA3NXB4O1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuLnByb2plY3QtbGlicmFyeSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgNjMsIDYzKTtcXG59XFxuXFxuLnByb2plY3QtY29udHJvbHMge1xcbiAgICBtaW4taGVpZ2h0OiAxZW07XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNWVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnByb2plY3QtYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXM7XFxufVxcblxcbi5wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMS40ZW07XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi50YXNrLWxpYnJhcnkge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDYzLCA2Myk7XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4gMjUwbXMgY3ViaWMtYmV6aWVyKC43NiwuMjcsLjcyLDEuNDEpIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gICAgMCUge3dpZHRoOiAwJTt9XFxuICAgIDEwMCUge3dpZHRoOiAyMCU7fVxcbn1cXG5cXG4ucHJpb3JpdHktYm94IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNi43JTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBjb2xvcjogY3lhbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXIge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG4uZXNzZW50aWFsLWxpYnJhcnkge1xcbiAgICBoZWlnaHQ6IDI2LjclO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLm1ham9yLWxpYnJhcnkge1xcbiAgICBoZWlnaHQ6IDI2LjclO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLm1pbm9yLWxpYnJhcnkge1xcbiAgICBoZWlnaHQ6IDI2LjclO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmJpZy1jaXJjbGUge1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN5YW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLnNtYWxsLWNpcmNsZSB7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxuICBcXG4gIC5zbWFsbC1jaXJjbGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBjeWFuO1xcbiAgfVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi50YXNrLWluZm8tYm94IHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYW5pbWF0aW9uOiB1bnJhdmVsIDFzIGVhc2Utb3V0IDEgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgdW5yYXZlbCB7XFxuICAgIDAlIHtoZWlnaHQ6IDAlO31cXG4gICAgMTAwJSB7aGVpZ2h0OiA1MCU7fVxcbn1cXG5cXG4uZHVlLWRhdGUtZGlzcGxheSB7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWRpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgcGFkZGluZzogMS41ZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZWRpdC1idG4ge1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgZG9kZ2VyYmx1ZSA1MCUsIGdyZXkgNTAlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDI1MCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjc1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmVkaXQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFByb2plY3QgPSB0aXRsZSA9PiB7XG4gICAgbGV0IGVzc2VudGlhbFRhc2tzID0gW107XG4gICAgbGV0IG1ham9yVGFza3MgPSBbXTtcbiAgICBsZXQgbWlub3JUYXNrcyA9IFtdO1xuICAgIHJldHVybiB7dGl0bGUsIGVzc2VudGlhbFRhc2tzLCBtYWpvclRhc2tzLCBtaW5vclRhc2tzfTtcbn07XG5cbmNvbnN0IFRhc2sgPSAodGl0bGUsIGVudGVyZWREdWVEYXRlLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGxldCBkdWVEYXRlID0gbmV3IERhdGUoZW50ZXJlZER1ZURhdGUpO1xuICAgIHJldHVybiB7dGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9ufTtcbn07XG5cbmxldCBwcm9qZWN0TGlicmFyeSA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIlN0YXJ0IEhlcmVcIixcbiAgICAgICAgZXNzZW50aWFsVGFza3M6IFtdLFxuICAgICAgICBtYWpvclRhc2tzOiBbXSxcbiAgICAgICAgbWlub3JUYXNrczogW11cbiAgICB9XG5dO1xuXG5mdW5jdGlvbiBvcmRlckJ5RHVlRGF0ZSh0YXJnZXRUYXNrTGlzdCkge1xuICAgIHRhcmdldFRhc2tMaXN0LnNvcnQoKGEsIGIpID0+IGFbXCJkdWVEYXRlXCJdLmdldFRpbWUoKSAtIGJbXCJkdWVEYXRlXCJdLmdldFRpbWUoKSlcbn1cblxuZnVuY3Rpb24gcmV0dXJuUHJvamVjdExpYnJhcnkoKSB7XG4gICAgcmV0dXJuIHByb2plY3RMaWJyYXJ5O1xufTtcblxuZnVuY3Rpb24gcmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCB0YXJnZXRUYXNrTGlzdCkge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RMaWJyYXJ5LmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gdGFyZ2V0UHJvamVjdFRpdGxlKTtcbiAgICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gcmV0dXJuUHJvamVjdExpYnJhcnkoKVtwcm9qZWN0SW5kZXhdO1xuICAgIHJldHVybiB0YXJnZXRQcm9qZWN0W3RhcmdldFRhc2tMaXN0XTtcbn07XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgcHJvamVjdExpYnJhcnkucHVzaChQcm9qZWN0KHByb21wdChcIk5hbWUgbmV3IHByb2plY3Q6XCIpKSk7XG59O1xuXG5mdW5jdGlvbiBhZGRUYXNrKHRhcmdldFRhc2tMaXN0KSB7XG4gICAgY29uc3QgbmV3VGFzayA9IFRhc2socHJvbXB0KFwiRW50ZXIgdGFzaydzIG5hbWU6XCIpLCBwcm9tcHQoXCJFbnRlciB0YXNrJ3MgZHVlIGRhdGU6XCIsIFwiTU0vREQvWVlZWVwiKSwgcHJvbXB0KFwiRW50ZXIgdGFzaydzIGRlc2NyaXB0aW9uOlwiKSk7XG4gICAgdGFyZ2V0VGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICBvcmRlckJ5RHVlRGF0ZSh0YXJnZXRUYXNrTGlzdCk7XG59O1xuXG5mdW5jdGlvbiBlZGl0VGFzayh0YXJnZXRUYXNrTGlzdCwgdGFyZ2V0VGFzaywgdGFyZ2V0VGFza0luZGV4KSB7XG4gICAgY29uc3QgcmV2aXNlZFRhc2sgPSBUYXNrKFxuICAgICAgICBwcm9tcHQoXCJFbnRlciB0YXNrJ3MgbmFtZTpcIiwgYCR7dGFyZ2V0VGFzay50aXRsZX1gKSxcbiAgICAgICAgcHJvbXB0KFwiRW50ZXIgdGFzaydzIGR1ZSBkYXRlOlwiLCBgJHt0YXJnZXRUYXNrLkR1ZURhdGV9YCksXG4gICAgICAgIHByb21wdChcIkVudGVyIHRhc2sncyBkZXNjcmlwdGlvbjpcIiwgYCR7dGFyZ2V0VGFzay5kZXNjcmlwdGlvbn1gKVxuICAgICk7XG4gICAgdGFyZ2V0VGFza0xpc3Quc3BsaWNlKHRhcmdldFRhc2tJbmRleCwgMSwgcmV2aXNlZFRhc2spO1xuICAgIG9yZGVyQnlEdWVEYXRlKHRhcmdldFRhc2tMaXN0KTtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXRUYXNrTGlzdCk7XG59O1xuXG5leHBvcnQgeyByZXR1cm5Qcm9qZWN0TGlicmFyeSwgcmV0dXJuVGFza0xpc3QsIGFkZFByb2plY3QsIGFkZFRhc2ssIGVkaXRUYXNrIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJldHVyblByb2plY3RMaWJyYXJ5LCByZXR1cm5UYXNrTGlzdCwgYWRkUHJvamVjdCwgYWRkVGFzaywgZWRpdFRhc2sgfSBmcm9tIFwiLi9saWJyYXJ5TG9naWMuanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuXG5jb25zdCBob21lTGlicmFyeUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgcHJvamVjdExpYnJhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5jb25zdCBwcm9qZWN0Q29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCByZW5hbWVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IGZpbmlzaFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5jb25zdCB0YXNrTGlicmFyeUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBlc3NlbnRpYWxUYXNrQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IG1ham9yVGFza0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBtaW5vclRhc2tCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5jb25zdCB0YXNrSW5mb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBkdWVEYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgZGVzY3JpcHRpb25EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cblxuZnVuY3Rpb24gY2xlYXJUYXNrSW5mb0JveCgpIHtcbiAgICB3aGlsZSAodGFza0luZm9Cb3guZmlyc3RDaGlsZCkge1xuICAgICAgICB0YXNrSW5mb0JveC5yZW1vdmVDaGlsZCh0YXNrSW5mb0JveC5maXJzdENoaWxkKTtcbiAgICB9O1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQodGFza0luZm9Cb3gpO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyVGFza0luZm9Cb3godGFyZ2V0UHJvamVjdFRpdGxlLCB0YXJnZXRUYXNrTGlzdCwgdGFyZ2V0VGFzaywgdGFyZ2V0VGFza0luZGV4KSB7XG4gICAgaWYgKHRhc2tJbmZvQm94LmZpcnN0Q2hpbGQpIHtjbGVhclRhc2tJbmZvQm94KCl9O1xuICAgIHRhc2tJbmZvQm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWluZm8tYm94XCIpO1xuXG4gICAgZHVlRGF0ZURpc3BsYXkuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlLWRpc3BsYXlcIik7XG4gICAgZHVlRGF0ZURpc3BsYXkudGV4dENvbnRlbnQgPSB0YXJnZXRUYXNrW1wiZHVlRGF0ZVwiXTtcbiAgICB0YXNrSW5mb0JveC5hcHBlbmRDaGlsZChkdWVEYXRlRGlzcGxheSk7XG5cbiAgICBkZXNjcmlwdGlvbkRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLWRpc3BsYXlcIik7XG4gICAgZGVzY3JpcHRpb25EaXNwbGF5LnRleHRDb250ZW50ID0gdGFyZ2V0VGFza1tcImRlc2NyaXB0aW9uXCJdXG4gICAgdGFza0luZm9Cb3guYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXNwbGF5KTtcblxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtYnRuXCIpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGVkaXRUYXNrKHRhcmdldFRhc2tMaXN0LCB0YXJnZXRUYXNrLCB0YXJnZXRUYXNrSW5kZXgpO1xuICAgICAgICByZW5kZXJUYXNrTGlicmFyeUJveCh0YXJnZXRQcm9qZWN0VGl0bGUpO1xuICAgICAgICBjbGVhclRhc2tJbmZvQm94KCk7XG4gICAgfSk7XG4gICAgdGFza0luZm9Cb3guYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHRhc2tJbmZvQm94KTtcbn07XG5cblxuZnVuY3Rpb24gY2xlYXJUYXNrTGlicmFyeUJveCgpIHtcbiAgICB3aGlsZSAoZXNzZW50aWFsVGFza0Jhci5maXJzdENoaWxkKSB7XG4gICAgICAgIGVzc2VudGlhbFRhc2tCYXIucmVtb3ZlQ2hpbGQoZXNzZW50aWFsVGFza0Jhci5maXJzdENoaWxkKTtcbiAgICB9O1xuICAgIHdoaWxlIChtYWpvclRhc2tCYXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWpvclRhc2tCYXIucmVtb3ZlQ2hpbGQobWFqb3JUYXNrQmFyLmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gICAgd2hpbGUgKG1pbm9yVGFza0Jhci5maXJzdENoaWxkKSB7XG4gICAgICAgIG1pbm9yVGFza0Jhci5yZW1vdmVDaGlsZChtaW5vclRhc2tCYXIuZmlyc3RDaGlsZCk7XG4gICAgfTtcbiAgICB3aGlsZSAodGFza0xpYnJhcnlCb3guZmlyc3RDaGlsZCkge1xuICAgICAgICB0YXNrTGlicmFyeUJveC5yZW1vdmVDaGlsZCh0YXNrTGlicmFyeUJveC5maXJzdENoaWxkKTtcbiAgICB9O1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQodGFza0xpYnJhcnlCb3gpO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyRXNzZW50aWFsVGFza3NMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgcGFyZW50RGl2KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXR1cm5UYXNrTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIFwiZXNzZW50aWFsVGFza3NcIikubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGFzay50ZXh0Q29udGVudCA9IGAke3JldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgXCJlc3NlbnRpYWxUYXNrc1wiKVtpXS50aXRsZX1gO1xuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJUYXNrSW5mb0JveCh0YXJnZXRQcm9qZWN0VGl0bGUsIHJldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgXCJlc3NlbnRpYWxUYXNrc1wiKSwgcmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBcImVzc2VudGlhbFRhc2tzXCIpW2ldLCBbaV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmlnQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYmlnQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJiaWctY2lyY2xlXCIpO1xuICAgICAgICBjb25zdCBzbWFsbENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNtYWxsQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC1jaXJjbGVcIik7XG4gICAgICAgIGJpZ0NpcmNsZS5hcHBlbmRDaGlsZChzbWFsbENpcmNsZSk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoYmlnQ2lyY2xlKTtcbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKHRhc2spO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiByZW5kZXJNYWpvclRhc2tzTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIHBhcmVudERpdikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBcIm1ham9yVGFza3NcIikubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGFzay50ZXh0Q29udGVudCA9IGAke3JldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgXCJtYWpvclRhc2tzXCIpW2ldLnRpdGxlfWA7XG4gICAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclRhc2tJbmZvQm94KHRhcmdldFByb2plY3RUaXRsZSwgcmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBcIm1ham9yVGFza3NcIiksIHJldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgXCJtYWpvclRhc2tzXCIpW2ldLCBbaV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmlnQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYmlnQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJiaWctY2lyY2xlXCIpO1xuICAgICAgICBjb25zdCBzbWFsbENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNtYWxsQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC1jaXJjbGVcIik7XG4gICAgICAgIGJpZ0NpcmNsZS5hcHBlbmRDaGlsZChzbWFsbENpcmNsZSk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoYmlnQ2lyY2xlKTtcbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKHRhc2spO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiByZW5kZXJNaW5vclRhc2tzTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIHBhcmVudERpdikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBcIm1pbm9yVGFza3NcIikubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGFzay50ZXh0Q29udGVudCA9IGAke3JldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgXCJtaW5vclRhc2tzXCIpW2ldLnRpdGxlfWA7XG4gICAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclRhc2tJbmZvQm94KHRhcmdldFByb2plY3RUaXRsZSwgcmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBcIm1pbm9yVGFza3NcIiksIHJldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgXCJtaW5vclRhc2tzXCIpW2ldLCBbaV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmlnQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYmlnQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJiaWctY2lyY2xlXCIpO1xuICAgICAgICBjb25zdCBzbWFsbENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNtYWxsQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC1jaXJjbGVcIik7XG4gICAgICAgIGJpZ0NpcmNsZS5hcHBlbmRDaGlsZChzbWFsbENpcmNsZSk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoYmlnQ2lyY2xlKTtcbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKHRhc2spO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrTGlicmFyeUJveCh0YXJnZXRQcm9qZWN0VGl0bGUpIHtcbiAgICBpZiAodGFza0xpYnJhcnlCb3guZmlyc3RDaGlsZCkge2NsZWFyVGFza0xpYnJhcnlCb3goKX07XG4gICAgXG4gICAgdGFza0xpYnJhcnlCb3guY2xhc3NMaXN0LmFkZChcImxpYnJhcnktYm94XCIsIFwidGFzay1saWJyYXJ5XCIpO1xuXG4gICAgY29uc3QgdGFza0JhckFycmF5cyA9IFtlc3NlbnRpYWxUYXNrQmFyLCBtYWpvclRhc2tCYXIsIG1pbm9yVGFza0JhciwgXCJlc3NlbnRpYWxcIiwgXCJtYWpvclwiLCBcIm1pbm9yXCIsIHJlbmRlckVzc2VudGlhbFRhc2tzTGlzdCwgcmVuZGVyTWFqb3JUYXNrc0xpc3QsIHJlbmRlck1pbm9yVGFza3NMaXN0XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICB0YXNrQmFyQXJyYXlzW2ldLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1ib3hcIik7XG4gICAgICAgIGNvbnN0IHRhc2tSYW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRhc2tSYW5rLnRleHRDb250ZW50ID0gIGAke3Rhc2tCYXJBcnJheXNbaSArIDNdfWA7XG4gICAgICAgIHRhc2tCYXJBcnJheXNbaV0uYXBwZW5kQ2hpbGQodGFza1JhbmspO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnRuXCIpO1xuICAgICAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrSW5mb0JveC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUYXNrSW5mb0JveCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFkZFRhc2socmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBgJHt0YXNrQmFyQXJyYXlzW2kgKyAzXX1UYXNrc2ApKTtcbiAgICAgICAgICAgIGNsZWFyVGFza0xpYnJhcnlCb3goKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tMaWJyYXJ5Qm94KHRhcmdldFByb2plY3RUaXRsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrQmFyQXJyYXlzW2ldLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgICAgICB0YXNrTGlicmFyeUJveC5hcHBlbmRDaGlsZCh0YXNrQmFyQXJyYXlzW2ldKTtcblxuICAgICAgICBjb25zdCB0YXNrTGlicmFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgdGFza0xpYnJhcnkuY2xhc3NMaXN0LmFkZChgJHt0YXNrQmFyQXJyYXlzW2kgKyAzXX0tbGlicmFyeWApO1xuICAgICAgICB0YXNrQmFyQXJyYXlzW2kgKyA2XSh0YXJnZXRQcm9qZWN0VGl0bGUsIHRhc2tMaWJyYXJ5KTtcbiAgICAgICAgdGFza0xpYnJhcnlCb3guYXBwZW5kQ2hpbGQodGFza0xpYnJhcnkpO1xuICAgIH07XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHRhc2tMaWJyYXJ5Qm94KTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RMaXN0KCkge1xuICAgIGlmIChwcm9qZWN0TGlicmFyeS5maXJzdENoaWxkKSB7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0TGlicmFyeS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlicmFyeS5yZW1vdmVDaGlsZChwcm9qZWN0TGlicmFyeS5maXJzdENoaWxkKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0dXJuUHJvamVjdExpYnJhcnkoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gYCR7cmV0dXJuUHJvamVjdExpYnJhcnkoKVtpXVtcInRpdGxlXCJdfWA7XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrSW5mb0JveC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUYXNrSW5mb0JveCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tMaWJyYXJ5Qm94KHByb2plY3QudGV4dENvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdExpYnJhcnkuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWVMaWJyYXlCb3goKSB7XG4gICAgaG9tZUxpYnJhcnlCb3guY2xhc3NMaXN0LmFkZChcImxpYnJhcnktYm94XCIpO1xuXG4gICAgd2VsY29tZVRleHQuY2xhc3NMaXN0LmFkZChcIndlbGNvbWUtdGV4dFwiKTtcbiAgICB3ZWxjb21lVGV4dC50ZXh0Q29udGVudCA9IFwiV2VsY29tZSwgVXNlclwiO1xuICAgIGhvbWVMaWJyYXJ5Qm94LmFwcGVuZENoaWxkKHdlbGNvbWVUZXh0KTtcblxuICAgIHByb2plY3RMaWJyYXJ5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpYnJhcnlcIik7XG4gICAgcmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICBob21lTGlicmFyeUJveC5hcHBlbmRDaGlsZChwcm9qZWN0TGlicmFyeSk7XG5cbiAgICBwcm9qZWN0Q29udHJvbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udHJvbHNcIik7XG4gICAgbmV3UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG5cIik7XG4gICAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFkZFByb2plY3QoKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0Q29udHJvbHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG4gICAgcmVuYW1lUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG5cIik7XG4gICAgcmVuYW1lUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiUmVuYW1lIFByb2plY3RcIjtcbiAgICBwcm9qZWN0Q29udHJvbHMuYXBwZW5kQ2hpbGQocmVuYW1lUHJvamVjdEJ0bik7XG4gICAgZmluaXNoUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG5cIik7XG4gICAgZmluaXNoUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiRmluaXNoIFByb2plY3RcIjtcbiAgICBwcm9qZWN0Q29udHJvbHMuYXBwZW5kQ2hpbGQoZmluaXNoUHJvamVjdEJ0bik7XG4gICAgaG9tZUxpYnJhcnlCb3guYXBwZW5kQ2hpbGQocHJvamVjdENvbnRyb2xzKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaG9tZUxpYnJhcnlCb3gpO1xufTtcblxuXG5cbnJlbmRlckhvbWVMaWJyYXlCb3goKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=