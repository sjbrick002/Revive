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
/* harmony export */   "eraseProject": () => (/* binding */ eraseProject),
/* harmony export */   "renameProject": () => (/* binding */ renameProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "eraseTask": () => (/* binding */ eraseTask),
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

function eraseProject(targetProjectTitle) {
    const index = projectLibrary.findIndex((project) => project.title === targetProjectTitle);
    projectLibrary.splice(index, 1);
}

function renameProject(targetProjectTitle) {
    const index = projectLibrary.findIndex((project) => project.title === targetProjectTitle);
    projectLibrary[index].title = prompt("Enter project's name:", `${targetProjectTitle}`);
}

function addTask(targetTaskList) {
    const newTask = Task(prompt("Enter task's name:"), prompt("Enter task's due date:", "MM/DD/YYYY"), prompt("Enter task's description:"));
    targetTaskList.push(newTask);
    orderByDueDate(targetTaskList);
};

function eraseTask(targetTaskList, targetTaskTitle) {
    console.log(targetTaskList);
    const index = targetTaskList.findIndex((task) => task.title === targetTaskTitle);
    targetTaskList.splice(index, 1);
    console.log(targetTaskList);
};

function editTask(targetTaskList, targetTask, targetTaskIndex) {
    const revisedTask = Task(
        prompt("Enter task's name:", `${targetTask.title}`),
        prompt("Enter task's due date:", `${targetTask.DueDate}`),
        prompt("Enter task's description:", `${targetTask.description}`)
    );
    targetTaskList.splice(targetTaskIndex, 1, revisedTask);
    orderByDueDate(targetTaskList);
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
        smallCircle.addEventListener("click", () => {
            (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.eraseTask)((0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "essentialTasks"), (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "essentialTasks")[i].title);
            renderTaskLibraryBox(targetProjectTitle);
        });
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
        smallCircle.addEventListener("click", () => {
            (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.eraseTask)((0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "majorTasks"), (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "majorTasks")[i].title);
            renderTaskLibraryBox(targetProjectTitle);
        });
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
        smallCircle.addEventListener("click", () => {
            (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.eraseTask)((0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "minorTasks"), (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.returnTaskList)(targetProjectTitle, "minorTasks")[i].title);
            renderTaskLibraryBox(targetProjectTitle);
        });
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
    renameProjectBtn.addEventListener("click", () => {
        (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.renameProject)(prompt("Please enter the project title you wish to change"));
        renderProjectList();
    });
    projectControls.appendChild(renameProjectBtn);
    finishProjectBtn.classList.add("project-btn");
    finishProjectBtn.textContent = "Finish Project";
    finishProjectBtn.addEventListener("click", () => {
        (0,_libraryLogic_js__WEBPACK_IMPORTED_MODULE_0__.eraseProject)(prompt("Please enter the finished project's title"));
        renderProjectList();
    });
    projectControls.appendChild(finishProjectBtn);
    homeLibraryBox.appendChild(projectControls);

    body.appendChild(homeLibraryBox);
};



renderHomeLibrayBox();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxnRUFBYyx3QkFBd0IscUJBQXFCO0FBQy9FO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksc0VBQW9CLFdBQVc7QUFDdkQ7QUFDQSxpQ0FBaUMsc0VBQW9CLGVBQWU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBVTtBQUNsQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQWE7QUFDckI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFZO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBLHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmV2aXZlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXZpdmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jldml2ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jldml2ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXZpdmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmV2aXZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXZpdmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmV2aXZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jldml2ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jldml2ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jldml2ZS8uL3NyYy9saWJyYXJ5TG9naWMuanMiLCJ3ZWJwYWNrOi8vcmV2aXZlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jldml2ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXZpdmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jldml2ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jldml2ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jldml2ZS8uL3NyYy9ndWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgYmxhY2ssIGRhcmtibHVlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xcbiAgICBhbmltYXRpb246IGJnLWFuaW1hdGlvbiA0MHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYmctYW5pbWF0aW9uIHtcXG4gICAgMCUge2JhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7fVxcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDt9XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5saSB7XFxuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigwLCAxNjIsIDI1NSkgNTAlLCByZ2IoNjMsIDYzLCA2MykgNTAlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNTAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuNzVzIGVhc2UtaW4tb3V0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubGlicmFyeS1ib3gge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgMzcsIDM3KTtcXG59XFxuXFxuLndlbGNvbWUtdGV4dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA3NXB4O1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuLnByb2plY3QtbGlicmFyeSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgNjMsIDYzKTtcXG59XFxuXFxuLnByb2plY3QtY29udHJvbHMge1xcbiAgICBtaW4taGVpZ2h0OiAxZW07XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNWVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnByb2plY3QtYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXM7XFxufVxcblxcbi5wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMS40ZW07XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi50YXNrLWxpYnJhcnkge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDYzLCA2Myk7XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4gMjUwbXMgY3ViaWMtYmV6aWVyKC43NiwuMjcsLjcyLDEuNDEpIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gICAgMCUge3dpZHRoOiAwJTt9XFxuICAgIDEwMCUge3dpZHRoOiAyMCU7fVxcbn1cXG5cXG4ucHJpb3JpdHktYm94IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNi43JTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBjb2xvcjogY3lhbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXIge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG4uZXNzZW50aWFsLWxpYnJhcnkge1xcbiAgICBoZWlnaHQ6IDI2LjclO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLm1ham9yLWxpYnJhcnkge1xcbiAgICBoZWlnaHQ6IDI2LjclO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLm1pbm9yLWxpYnJhcnkge1xcbiAgICBoZWlnaHQ6IDI2LjclO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmJpZy1jaXJjbGUge1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN5YW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLnNtYWxsLWNpcmNsZSB7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxuICBcXG4gIC5zbWFsbC1jaXJjbGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBjeWFuO1xcbiAgfVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi50YXNrLWluZm8tYm94IHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYW5pbWF0aW9uOiB1bnJhdmVsIDFzIGVhc2Utb3V0IDEgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgdW5yYXZlbCB7XFxuICAgIDAlIHtoZWlnaHQ6IDAlO31cXG4gICAgMTAwJSB7aGVpZ2h0OiA1MCU7fVxcbn1cXG5cXG4uZHVlLWRhdGUtZGlzcGxheSB7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWRpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgcGFkZGluZzogMS41ZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZWRpdC1idG4ge1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgZG9kZ2VyYmx1ZSA1MCUsIGdyZXkgNTAlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDI1MCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjc1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmVkaXQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1EQUFtRDtJQUNuRCxxQkFBcUI7SUFDckIsOENBQThDO0lBQzlDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxJQUFJLHlCQUF5QixDQUFDO0lBQzlCLE1BQU0sMEJBQTBCLENBQUM7QUFDckM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJ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RUE7SUFDSSwyQkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIGJsYWNrLCBkYXJrYmx1ZSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcXG4gICAgYW5pbWF0aW9uOiBiZy1hbmltYXRpb24gNDBzIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJnLWFuaW1hdGlvbiB7XFxuICAgIDAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O31cXG4gICAgMTAwJSB7YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7fVxcbn1cXG5cXG5wIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxubGkge1xcbiAgICBtaW4taGVpZ2h0OiA1NXB4O1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCwgMTYyLCAyNTUpIDUwJSwgcmdiKDYzLCA2MywgNjMpIDUwJSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjUwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjc1cyBlYXNlLWluLW91dDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmxpYnJhcnktYm94IHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XFxufVxcblxcbi53ZWxjb21lLXRleHQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNzVweDtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbi5wcm9qZWN0LWxpYnJhcnkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDYzLCA2Myk7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRyb2xzIHtcXG4gICAgbWluLWhlaWdodDogMWVtO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjVzO1xcbn1cXG5cXG4ucHJvamVjdC1idG46aG92ZXIge1xcbiAgICBmb250LXNpemU6IDEuNGVtO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4udGFzay1saWJyYXJ5IHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA2MywgNjMpO1xcbiAgICBhbmltYXRpb246IHNsaWRlLWluIDI1MG1zIGN1YmljLWJlemllciguNzYsLjI3LC43MiwxLjQxKSBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICAgIDAlIHt3aWR0aDogMCU7fVxcbiAgICAxMDAlIHt3aWR0aDogMjAlO31cXG59XFxuXFxuLnByaW9yaXR5LWJveCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYuNyU7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgY29sb3I6IGN5YW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGluaGVyaXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuLmVzc2VudGlhbC1saWJyYXJ5IHtcXG4gICAgaGVpZ2h0OiAyNi43JTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tYWpvci1saWJyYXJ5IHtcXG4gICAgaGVpZ2h0OiAyNi43JTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5taW5vci1saWJyYXJ5IHtcXG4gICAgaGVpZ2h0OiAyNi43JTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5iaWctY2lyY2xlIHtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjeWFuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5zbWFsbC1jaXJjbGUge1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgXFxuICAuc21hbGwtY2lyY2xlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogY3lhbjtcXG4gIH1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4udGFzay1pbmZvLWJveCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGFuaW1hdGlvbjogdW5yYXZlbCAxcyBlYXNlLW91dCAxIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHVucmF2ZWwge1xcbiAgICAwJSB7aGVpZ2h0OiAwJTt9XFxuICAgIDEwMCUge2hlaWdodDogNTAlO31cXG59XFxuXFxuLmR1ZS1kYXRlLWRpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZDogZ3JleTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1kaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIHBhZGRpbmc6IDEuNWVtO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmVkaXQtYnRuIHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGRvZGdlcmJsdWUgNTAlLCBncmV5IDUwJSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyNTAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC43NXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5lZGl0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBQcm9qZWN0ID0gdGl0bGUgPT4ge1xuICAgIGxldCBlc3NlbnRpYWxUYXNrcyA9IFtdO1xuICAgIGxldCBtYWpvclRhc2tzID0gW107XG4gICAgbGV0IG1pbm9yVGFza3MgPSBbXTtcbiAgICByZXR1cm4ge3RpdGxlLCBlc3NlbnRpYWxUYXNrcywgbWFqb3JUYXNrcywgbWlub3JUYXNrc307XG59O1xuXG5jb25zdCBUYXNrID0gKHRpdGxlLCBlbnRlcmVkRHVlRGF0ZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBsZXQgZHVlRGF0ZSA9IG5ldyBEYXRlKGVudGVyZWREdWVEYXRlKTtcbiAgICByZXR1cm4ge3RpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbn07XG59O1xuXG5sZXQgcHJvamVjdExpYnJhcnkgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJTdGFydCBIZXJlXCIsXG4gICAgICAgIGVzc2VudGlhbFRhc2tzOiBbXSxcbiAgICAgICAgbWFqb3JUYXNrczogW10sXG4gICAgICAgIG1pbm9yVGFza3M6IFtdXG4gICAgfVxuXTtcblxuZnVuY3Rpb24gb3JkZXJCeUR1ZURhdGUodGFyZ2V0VGFza0xpc3QpIHtcbiAgICB0YXJnZXRUYXNrTGlzdC5zb3J0KChhLCBiKSA9PiBhW1wiZHVlRGF0ZVwiXS5nZXRUaW1lKCkgLSBiW1wiZHVlRGF0ZVwiXS5nZXRUaW1lKCkpXG59XG5cbmZ1bmN0aW9uIHJldHVyblByb2plY3RMaWJyYXJ5KCkge1xuICAgIHJldHVybiBwcm9qZWN0TGlicmFyeTtcbn07XG5cbmZ1bmN0aW9uIHJldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgdGFyZ2V0VGFza0xpc3QpIHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0TGlicmFyeS5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHRhcmdldFByb2plY3RUaXRsZSk7XG4gICAgY29uc3QgdGFyZ2V0UHJvamVjdCA9IHJldHVyblByb2plY3RMaWJyYXJ5KClbcHJvamVjdEluZGV4XTtcbiAgICByZXR1cm4gdGFyZ2V0UHJvamVjdFt0YXJnZXRUYXNrTGlzdF07XG59O1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIHByb2plY3RMaWJyYXJ5LnB1c2goUHJvamVjdChwcm9tcHQoXCJOYW1lIG5ldyBwcm9qZWN0OlwiKSkpO1xufTtcblxuZnVuY3Rpb24gZXJhc2VQcm9qZWN0KHRhcmdldFByb2plY3RUaXRsZSkge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdExpYnJhcnkuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSB0YXJnZXRQcm9qZWN0VGl0bGUpO1xuICAgIHByb2plY3RMaWJyYXJ5LnNwbGljZShpbmRleCwgMSk7XG59XG5cbmZ1bmN0aW9uIHJlbmFtZVByb2plY3QodGFyZ2V0UHJvamVjdFRpdGxlKSB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0TGlicmFyeS5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHRhcmdldFByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdExpYnJhcnlbaW5kZXhdLnRpdGxlID0gcHJvbXB0KFwiRW50ZXIgcHJvamVjdCdzIG5hbWU6XCIsIGAke3RhcmdldFByb2plY3RUaXRsZX1gKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFzayh0YXJnZXRUYXNrTGlzdCkge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKHByb21wdChcIkVudGVyIHRhc2sncyBuYW1lOlwiKSwgcHJvbXB0KFwiRW50ZXIgdGFzaydzIGR1ZSBkYXRlOlwiLCBcIk1NL0REL1lZWVlcIiksIHByb21wdChcIkVudGVyIHRhc2sncyBkZXNjcmlwdGlvbjpcIikpO1xuICAgIHRhcmdldFRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgb3JkZXJCeUR1ZURhdGUodGFyZ2V0VGFza0xpc3QpO1xufTtcblxuZnVuY3Rpb24gZXJhc2VUYXNrKHRhcmdldFRhc2tMaXN0LCB0YXJnZXRUYXNrVGl0bGUpIHtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXRUYXNrTGlzdCk7XG4gICAgY29uc3QgaW5kZXggPSB0YXJnZXRUYXNrTGlzdC5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHRhcmdldFRhc2tUaXRsZSk7XG4gICAgdGFyZ2V0VGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXRUYXNrTGlzdCk7XG59O1xuXG5mdW5jdGlvbiBlZGl0VGFzayh0YXJnZXRUYXNrTGlzdCwgdGFyZ2V0VGFzaywgdGFyZ2V0VGFza0luZGV4KSB7XG4gICAgY29uc3QgcmV2aXNlZFRhc2sgPSBUYXNrKFxuICAgICAgICBwcm9tcHQoXCJFbnRlciB0YXNrJ3MgbmFtZTpcIiwgYCR7dGFyZ2V0VGFzay50aXRsZX1gKSxcbiAgICAgICAgcHJvbXB0KFwiRW50ZXIgdGFzaydzIGR1ZSBkYXRlOlwiLCBgJHt0YXJnZXRUYXNrLkR1ZURhdGV9YCksXG4gICAgICAgIHByb21wdChcIkVudGVyIHRhc2sncyBkZXNjcmlwdGlvbjpcIiwgYCR7dGFyZ2V0VGFzay5kZXNjcmlwdGlvbn1gKVxuICAgICk7XG4gICAgdGFyZ2V0VGFza0xpc3Quc3BsaWNlKHRhcmdldFRhc2tJbmRleCwgMSwgcmV2aXNlZFRhc2spO1xuICAgIG9yZGVyQnlEdWVEYXRlKHRhcmdldFRhc2tMaXN0KTtcbn07XG5cbmV4cG9ydCB7IHJldHVyblByb2plY3RMaWJyYXJ5LCByZXR1cm5UYXNrTGlzdCwgYWRkUHJvamVjdCwgZXJhc2VQcm9qZWN0LCByZW5hbWVQcm9qZWN0LCBhZGRUYXNrLCBlcmFzZVRhc2ssIGVkaXRUYXNrIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJldHVyblByb2plY3RMaWJyYXJ5LCByZXR1cm5UYXNrTGlzdCwgYWRkUHJvamVjdCwgZXJhc2VQcm9qZWN0LCByZW5hbWVQcm9qZWN0LCBhZGRUYXNrLCBlcmFzZVRhc2ssIGVkaXRUYXNrIH0gZnJvbSBcIi4vbGlicmFyeUxvZ2ljLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cblxuY29uc3QgaG9tZUxpYnJhcnlCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3Qgd2VsY29tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IHByb2plY3RMaWJyYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuY29uc3QgcHJvamVjdENvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgcmVuYW1lUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBmaW5pc2hQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuY29uc3QgdGFza0xpYnJhcnlCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgZXNzZW50aWFsVGFza0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBtYWpvclRhc2tCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgbWlub3JUYXNrQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuY29uc3QgdGFza0luZm9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgZHVlRGF0ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cbmZ1bmN0aW9uIGNsZWFyVGFza0luZm9Cb3goKSB7XG4gICAgd2hpbGUgKHRhc2tJbmZvQm94LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza0luZm9Cb3gucmVtb3ZlQ2hpbGQodGFza0luZm9Cb3guZmlyc3RDaGlsZCk7XG4gICAgfTtcbiAgICBib2R5LnJlbW92ZUNoaWxkKHRhc2tJbmZvQm94KTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tJbmZvQm94KHRhcmdldFByb2plY3RUaXRsZSwgdGFyZ2V0VGFza0xpc3QsIHRhcmdldFRhc2ssIHRhcmdldFRhc2tJbmRleCkge1xuICAgIGlmICh0YXNrSW5mb0JveC5maXJzdENoaWxkKSB7Y2xlYXJUYXNrSW5mb0JveCgpfTtcbiAgICB0YXNrSW5mb0JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1pbmZvLWJveFwiKTtcblxuICAgIGR1ZURhdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZS1kaXNwbGF5XCIpO1xuICAgIGR1ZURhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gdGFyZ2V0VGFza1tcImR1ZURhdGVcIl07XG4gICAgdGFza0luZm9Cb3guYXBwZW5kQ2hpbGQoZHVlRGF0ZURpc3BsYXkpO1xuXG4gICAgZGVzY3JpcHRpb25EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1kaXNwbGF5XCIpO1xuICAgIGRlc2NyaXB0aW9uRGlzcGxheS50ZXh0Q29udGVudCA9IHRhcmdldFRhc2tbXCJkZXNjcmlwdGlvblwiXVxuICAgIHRhc2tJbmZvQm94LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGlzcGxheSk7XG5cbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ0blwiKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBlZGl0VGFzayh0YXJnZXRUYXNrTGlzdCwgdGFyZ2V0VGFzaywgdGFyZ2V0VGFza0luZGV4KTtcbiAgICAgICAgcmVuZGVyVGFza0xpYnJhcnlCb3godGFyZ2V0UHJvamVjdFRpdGxlKTtcbiAgICAgICAgY2xlYXJUYXNrSW5mb0JveCgpO1xuICAgIH0pO1xuICAgIHRhc2tJbmZvQm94LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZCh0YXNrSW5mb0JveCk7XG59O1xuXG5cbmZ1bmN0aW9uIGNsZWFyVGFza0xpYnJhcnlCb3goKSB7XG4gICAgd2hpbGUgKGVzc2VudGlhbFRhc2tCYXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBlc3NlbnRpYWxUYXNrQmFyLnJlbW92ZUNoaWxkKGVzc2VudGlhbFRhc2tCYXIuZmlyc3RDaGlsZCk7XG4gICAgfTtcbiAgICB3aGlsZSAobWFqb3JUYXNrQmFyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFqb3JUYXNrQmFyLnJlbW92ZUNoaWxkKG1ham9yVGFza0Jhci5maXJzdENoaWxkKTtcbiAgICB9O1xuICAgIHdoaWxlIChtaW5vclRhc2tCYXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBtaW5vclRhc2tCYXIucmVtb3ZlQ2hpbGQobWlub3JUYXNrQmFyLmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gICAgd2hpbGUgKHRhc2tMaWJyYXJ5Qm94LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza0xpYnJhcnlCb3gucmVtb3ZlQ2hpbGQodGFza0xpYnJhcnlCb3guZmlyc3RDaGlsZCk7XG4gICAgfTtcbiAgICBib2R5LnJlbW92ZUNoaWxkKHRhc2tMaWJyYXJ5Qm94KTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlckVzc2VudGlhbFRhc2tzTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIHBhcmVudERpdikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBcImVzc2VudGlhbFRhc2tzXCIpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHRhc2sudGV4dENvbnRlbnQgPSBgJHtyZXR1cm5UYXNrTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIFwiZXNzZW50aWFsVGFza3NcIilbaV0udGl0bGV9YDtcbiAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyVGFza0luZm9Cb3godGFyZ2V0UHJvamVjdFRpdGxlLCByZXR1cm5UYXNrTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIFwiZXNzZW50aWFsVGFza3NcIiksIHJldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgXCJlc3NlbnRpYWxUYXNrc1wiKVtpXSwgW2ldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJpZ0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJpZ0NpcmNsZS5jbGFzc0xpc3QuYWRkKFwiYmlnLWNpcmNsZVwiKTtcbiAgICAgICAgY29uc3Qgc21hbGxDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzbWFsbENpcmNsZS5jbGFzc0xpc3QuYWRkKFwic21hbGwtY2lyY2xlXCIpO1xuICAgICAgICBzbWFsbENpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZXJhc2VUYXNrKHJldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgXCJlc3NlbnRpYWxUYXNrc1wiKSwgcmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBcImVzc2VudGlhbFRhc2tzXCIpW2ldLnRpdGxlKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tMaWJyYXJ5Qm94KHRhcmdldFByb2plY3RUaXRsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBiaWdDaXJjbGUuYXBwZW5kQ2hpbGQoc21hbGxDaXJjbGUpO1xuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGJpZ0NpcmNsZSk7XG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gcmVuZGVyTWFqb3JUYXNrc0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBwYXJlbnREaXYpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgXCJtYWpvclRhc2tzXCIpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHRhc2sudGV4dENvbnRlbnQgPSBgJHtyZXR1cm5UYXNrTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIFwibWFqb3JUYXNrc1wiKVtpXS50aXRsZX1gO1xuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJUYXNrSW5mb0JveCh0YXJnZXRQcm9qZWN0VGl0bGUsIHJldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgXCJtYWpvclRhc2tzXCIpLCByZXR1cm5UYXNrTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIFwibWFqb3JUYXNrc1wiKVtpXSwgW2ldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJpZ0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJpZ0NpcmNsZS5jbGFzc0xpc3QuYWRkKFwiYmlnLWNpcmNsZVwiKTtcbiAgICAgICAgY29uc3Qgc21hbGxDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzbWFsbENpcmNsZS5jbGFzc0xpc3QuYWRkKFwic21hbGwtY2lyY2xlXCIpO1xuICAgICAgICBzbWFsbENpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZXJhc2VUYXNrKHJldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgXCJtYWpvclRhc2tzXCIpLCByZXR1cm5UYXNrTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIFwibWFqb3JUYXNrc1wiKVtpXS50aXRsZSk7XG4gICAgICAgICAgICByZW5kZXJUYXNrTGlicmFyeUJveCh0YXJnZXRQcm9qZWN0VGl0bGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgYmlnQ2lyY2xlLmFwcGVuZENoaWxkKHNtYWxsQ2lyY2xlKTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChiaWdDaXJjbGUpO1xuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlck1pbm9yVGFza3NMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgcGFyZW50RGl2KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXR1cm5UYXNrTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIFwibWlub3JUYXNrc1wiKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICB0YXNrLnRleHRDb250ZW50ID0gYCR7cmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBcIm1pbm9yVGFza3NcIilbaV0udGl0bGV9YDtcbiAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyVGFza0luZm9Cb3godGFyZ2V0UHJvamVjdFRpdGxlLCByZXR1cm5UYXNrTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIFwibWlub3JUYXNrc1wiKSwgcmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBcIm1pbm9yVGFza3NcIilbaV0sIFtpXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiaWdDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBiaWdDaXJjbGUuY2xhc3NMaXN0LmFkZChcImJpZy1jaXJjbGVcIik7XG4gICAgICAgIGNvbnN0IHNtYWxsQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc21hbGxDaXJjbGUuY2xhc3NMaXN0LmFkZChcInNtYWxsLWNpcmNsZVwiKTtcbiAgICAgICAgc21hbGxDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGVyYXNlVGFzayhyZXR1cm5UYXNrTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIFwibWlub3JUYXNrc1wiKSwgcmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBcIm1pbm9yVGFza3NcIilbaV0udGl0bGUpO1xuICAgICAgICAgICAgcmVuZGVyVGFza0xpYnJhcnlCb3godGFyZ2V0UHJvamVjdFRpdGxlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJpZ0NpcmNsZS5hcHBlbmRDaGlsZChzbWFsbENpcmNsZSk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoYmlnQ2lyY2xlKTtcbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKHRhc2spO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrTGlicmFyeUJveCh0YXJnZXRQcm9qZWN0VGl0bGUpIHtcbiAgICBpZiAodGFza0xpYnJhcnlCb3guZmlyc3RDaGlsZCkge2NsZWFyVGFza0xpYnJhcnlCb3goKX07XG4gICAgXG4gICAgdGFza0xpYnJhcnlCb3guY2xhc3NMaXN0LmFkZChcImxpYnJhcnktYm94XCIsIFwidGFzay1saWJyYXJ5XCIpO1xuXG4gICAgY29uc3QgdGFza0JhckFycmF5cyA9IFtlc3NlbnRpYWxUYXNrQmFyLCBtYWpvclRhc2tCYXIsIG1pbm9yVGFza0JhciwgXCJlc3NlbnRpYWxcIiwgXCJtYWpvclwiLCBcIm1pbm9yXCIsIHJlbmRlckVzc2VudGlhbFRhc2tzTGlzdCwgcmVuZGVyTWFqb3JUYXNrc0xpc3QsIHJlbmRlck1pbm9yVGFza3NMaXN0XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICB0YXNrQmFyQXJyYXlzW2ldLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1ib3hcIik7XG4gICAgICAgIGNvbnN0IHRhc2tSYW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRhc2tSYW5rLnRleHRDb250ZW50ID0gIGAke3Rhc2tCYXJBcnJheXNbaSArIDNdfWA7XG4gICAgICAgIHRhc2tCYXJBcnJheXNbaV0uYXBwZW5kQ2hpbGQodGFza1JhbmspO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnRuXCIpO1xuICAgICAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrSW5mb0JveC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUYXNrSW5mb0JveCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFkZFRhc2socmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBgJHt0YXNrQmFyQXJyYXlzW2kgKyAzXX1UYXNrc2ApKTtcbiAgICAgICAgICAgIGNsZWFyVGFza0xpYnJhcnlCb3goKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tMaWJyYXJ5Qm94KHRhcmdldFByb2plY3RUaXRsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrQmFyQXJyYXlzW2ldLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgICAgICB0YXNrTGlicmFyeUJveC5hcHBlbmRDaGlsZCh0YXNrQmFyQXJyYXlzW2ldKTtcblxuICAgICAgICBjb25zdCB0YXNrTGlicmFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgdGFza0xpYnJhcnkuY2xhc3NMaXN0LmFkZChgJHt0YXNrQmFyQXJyYXlzW2kgKyAzXX0tbGlicmFyeWApO1xuICAgICAgICB0YXNrQmFyQXJyYXlzW2kgKyA2XSh0YXJnZXRQcm9qZWN0VGl0bGUsIHRhc2tMaWJyYXJ5KTtcbiAgICAgICAgdGFza0xpYnJhcnlCb3guYXBwZW5kQ2hpbGQodGFza0xpYnJhcnkpO1xuICAgIH07XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHRhc2tMaWJyYXJ5Qm94KTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RMaXN0KCkge1xuICAgIGlmIChwcm9qZWN0TGlicmFyeS5maXJzdENoaWxkKSB7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0TGlicmFyeS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlicmFyeS5yZW1vdmVDaGlsZChwcm9qZWN0TGlicmFyeS5maXJzdENoaWxkKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0dXJuUHJvamVjdExpYnJhcnkoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gYCR7cmV0dXJuUHJvamVjdExpYnJhcnkoKVtpXVtcInRpdGxlXCJdfWA7XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrSW5mb0JveC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUYXNrSW5mb0JveCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tMaWJyYXJ5Qm94KHByb2plY3QudGV4dENvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdExpYnJhcnkuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWVMaWJyYXlCb3goKSB7XG4gICAgaG9tZUxpYnJhcnlCb3guY2xhc3NMaXN0LmFkZChcImxpYnJhcnktYm94XCIpO1xuXG4gICAgd2VsY29tZVRleHQuY2xhc3NMaXN0LmFkZChcIndlbGNvbWUtdGV4dFwiKTtcbiAgICB3ZWxjb21lVGV4dC50ZXh0Q29udGVudCA9IFwiV2VsY29tZSwgVXNlclwiO1xuICAgIGhvbWVMaWJyYXJ5Qm94LmFwcGVuZENoaWxkKHdlbGNvbWVUZXh0KTtcblxuICAgIHByb2plY3RMaWJyYXJ5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpYnJhcnlcIik7XG4gICAgcmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICBob21lTGlicmFyeUJveC5hcHBlbmRDaGlsZChwcm9qZWN0TGlicmFyeSk7XG5cbiAgICBwcm9qZWN0Q29udHJvbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udHJvbHNcIik7XG4gICAgbmV3UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG5cIik7XG4gICAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFkZFByb2plY3QoKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0Q29udHJvbHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG4gICAgcmVuYW1lUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG5cIik7XG4gICAgcmVuYW1lUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiUmVuYW1lIFByb2plY3RcIjtcbiAgICByZW5hbWVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlbmFtZVByb2plY3QocHJvbXB0KFwiUGxlYXNlIGVudGVyIHRoZSBwcm9qZWN0IHRpdGxlIHlvdSB3aXNoIHRvIGNoYW5nZVwiKSk7XG4gICAgICAgIHJlbmRlclByb2plY3RMaXN0KCk7XG4gICAgfSk7XG4gICAgcHJvamVjdENvbnRyb2xzLmFwcGVuZENoaWxkKHJlbmFtZVByb2plY3RCdG4pO1xuICAgIGZpbmlzaFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuXCIpO1xuICAgIGZpbmlzaFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkZpbmlzaCBQcm9qZWN0XCI7XG4gICAgZmluaXNoUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBlcmFzZVByb2plY3QocHJvbXB0KFwiUGxlYXNlIGVudGVyIHRoZSBmaW5pc2hlZCBwcm9qZWN0J3MgdGl0bGVcIikpO1xuICAgICAgICByZW5kZXJQcm9qZWN0TGlzdCgpO1xuICAgIH0pO1xuICAgIHByb2plY3RDb250cm9scy5hcHBlbmRDaGlsZChmaW5pc2hQcm9qZWN0QnRuKTtcbiAgICBob21lTGlicmFyeUJveC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udHJvbHMpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChob21lTGlicmFyeUJveCk7XG59O1xuXG5cblxucmVuZGVySG9tZUxpYnJheUJveCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==