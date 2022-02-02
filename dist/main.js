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
/* harmony export */   "returnTaskList": () => (/* binding */ returnTaskList)
/* harmony export */ });
let projectLibrary = [
    {
        title: "Start Here",
        essentialTasks: [
            {
                title: "Have cake!"
            }
        ],
        majorTasks: [
            {
                title: "Vacuum room"
            }
        ],
        minorTasks: [
            {
                title: "Read your book"
            }
        ]
    }
];

function returnProjectLibrary() {
    return projectLibrary;
};

function returnTaskList(targetProjectTitle, targetTaskList) {
    const projectIndex = projectLibrary.findIndex((project) => project.title === targetProjectTitle);
    const targetProject = returnProjectLibrary()[projectIndex];
    return targetProject[targetTaskList];
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
const editBtn = document.createElement("button");


function clearTaskInfoBox() {
    while (taskInfoBox.firstChild) {
        taskInfoBox.removeChild(taskInfoBox.firstChild);
    };
    body.removeChild(taskInfoBox);
};

function renderTaskInfoBox() {
    if (taskInfoBox.firstChild) {clearTaskInfoBox()};
    taskInfoBox.classList.add("task-info-box");

    dueDateDisplay.classList.add("due-date-display");
    dueDateDisplay.textContent = "Due Date: 6:00AM XX/XX/XXXX";
    taskInfoBox.appendChild(dueDateDisplay);

    descriptionDisplay.classList.add("description-display");
    descriptionDisplay.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum iusto distinctio, ex quos quo molestias molestiae? Neque accusantium culpa perferendis, non nulla aperiam eaque magnam omnis ipsam beatae, deleniti porro? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat repudiandae quam iure. Voluptatum omnis eveniet iste, dolor adipisci culpa obcaecati placeat veniam aspernatur tempore aliquid nemo dicta magnam, est reprehenderit?";
    taskInfoBox.appendChild(descriptionDisplay);

    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
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
            renderTaskInfoBox();
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
            renderTaskInfoBox();
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
            renderTaskInfoBox();
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
        taskBarArrays[i].appendChild(addTaskBtn);
        taskLibraryBox.appendChild(taskBarArrays[i]);

        const taskLibrary = document.createElement("ul");
        taskLibrary.classList.add(`${taskBarArrays[i + 3]}-library`);
        taskBarArrays[i + 6](targetProjectTitle, taskLibrary);
        taskLibraryBox.appendChild(taskLibrary);
    };

    body.appendChild(taskLibraryBox);
};

function renderHomeLibrayBox() {
    homeLibraryBox.classList.add("library-box");

    welcomeText.classList.add("welcome-text");
    welcomeText.textContent = "Welcome, User";
    homeLibraryBox.appendChild(welcomeText);

    projectLibrary.classList.add("project-library");
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
    homeLibraryBox.appendChild(projectLibrary);

    projectControls.classList.add("project-controls");
    newProjectBtn.classList.add("project-btn");
    newProjectBtn.textContent = "New Project";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRDQUE0QztBQUN4RjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixJQUFJLGdFQUFjLDJDQUEyQztBQUNqRjtBQUNBLDhCQUE4QixnRUFBYyw0Q0FBNEM7QUFDeEY7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQSxtQ0FBbUMscUJBQXFCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsSUFBSSxzRUFBb0IsV0FBVztBQUN2RDtBQUNBLGlDQUFpQyxzRUFBb0IsZUFBZTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQSxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jldml2ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmV2aXZlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXZpdmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXZpdmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmV2aXZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jldml2ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmV2aXZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jldml2ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXZpdmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXZpdmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXZpdmUvLi9zcmMvbGlicmFyeUxvZ2ljLmpzIiwid2VicGFjazovL3Jldml2ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXZpdmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmV2aXZlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXZpdmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXZpdmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXZpdmUvLi9zcmMvZ3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIGJsYWNrLCBkYXJrYmx1ZSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcXG4gICAgYW5pbWF0aW9uOiBiZy1hbmltYXRpb24gNDBzIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJnLWFuaW1hdGlvbiB7XFxuICAgIDAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O31cXG4gICAgMTAwJSB7YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7fVxcbn1cXG5cXG5wIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxubGkge1xcbiAgICBtaW4taGVpZ2h0OiA1NXB4O1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCwgMTYyLCAyNTUpIDUwJSwgcmdiKDYzLCA2MywgNjMpIDUwJSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjUwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjc1cyBlYXNlLWluLW91dDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmxpYnJhcnktYm94IHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XFxufVxcblxcbi53ZWxjb21lLXRleHQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNzVweDtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbi5wcm9qZWN0LWxpYnJhcnkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDYzLCA2Myk7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRyb2xzIHtcXG4gICAgbWluLWhlaWdodDogMWVtO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjVzO1xcbn1cXG5cXG4ucHJvamVjdC1idG46aG92ZXIge1xcbiAgICBmb250LXNpemU6IDEuNGVtO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4udGFzay1saWJyYXJ5IHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA2MywgNjMpO1xcbiAgICBhbmltYXRpb246IHNsaWRlLWluIDI1MG1zIGN1YmljLWJlemllciguNzYsLjI3LC43MiwxLjQxKSBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICAgIDAlIHt3aWR0aDogMCU7fVxcbiAgICAxMDAlIHt3aWR0aDogMjAlO31cXG59XFxuXFxuLnByaW9yaXR5LWJveCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYuNyU7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgY29sb3I6IGN5YW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGluaGVyaXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuLmVzc2VudGlhbC1saWJyYXJ5IHtcXG4gICAgaGVpZ2h0OiAyNi43JTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tYWpvci1saWJyYXJ5IHtcXG4gICAgaGVpZ2h0OiAyNi43JTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5taW5vci1saWJyYXJ5IHtcXG4gICAgaGVpZ2h0OiAyNi43JTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5iaWctY2lyY2xlIHtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjeWFuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5zbWFsbC1jaXJjbGUge1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgXFxuICAuc21hbGwtY2lyY2xlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogY3lhbjtcXG4gIH1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4udGFzay1pbmZvLWJveCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGFuaW1hdGlvbjogdW5yYXZlbCAxcyBlYXNlLW91dCAxIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHVucmF2ZWwge1xcbiAgICAwJSB7aGVpZ2h0OiAwJTt9XFxuICAgIDEwMCUge2hlaWdodDogNTAlO31cXG59XFxuXFxuLmR1ZS1kYXRlLWRpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZDogZ3JleTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1kaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIHBhZGRpbmc6IDEuNWVtO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmVkaXQtYnRuIHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGRvZGdlcmJsdWUgNTAlLCBncmV5IDUwJSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyNTAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC43NXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5lZGl0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtREFBbUQ7SUFDbkQscUJBQXFCO0lBQ3JCLDhDQUE4QztJQUM5QyxZQUFZO0FBQ2hCOztBQUVB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QVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDZEQUE2RDtJQUM3RCwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBibGFjaywgZGFya2JsdWUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XFxuICAgIGFuaW1hdGlvbjogYmctYW5pbWF0aW9uIDQwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBiZy1hbmltYXRpb24ge1xcbiAgICAwJSB7YmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDt9XFxuICAgIDEwMCUge2JhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O31cXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gICAgbWluLWhlaWdodDogNTVweDtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDAsIDE2MiwgMjU1KSA1MCUsIHJnYig2MywgNjMsIDYzKSA1MCUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1MCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC43NXMgZWFzZS1pbi1vdXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5saWJyYXJ5LWJveCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAzNywgMzcpO1xcbn1cXG5cXG4ud2VsY29tZS10ZXh0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDc1cHg7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4ucHJvamVjdC1saWJyYXJ5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA2MywgNjMpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250cm9scyB7XFxuICAgIG1pbi1oZWlnaHQ6IDFlbTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC41ZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1idG4ge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC41cztcXG59XFxuXFxuLnByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgZm9udC1zaXplOiAxLjRlbTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnRhc2stbGlicmFyeSB7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgNjMsIDYzKTtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbiAyNTBtcyBjdWJpYy1iZXppZXIoLjc2LC4yNywuNzIsMS40MSkgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgICAwJSB7d2lkdGg6IDAlO31cXG4gICAgMTAwJSB7d2lkdGg6IDIwJTt9XFxufVxcblxcbi5wcmlvcml0eS1ib3gge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2LjclO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIGNvbG9yOiBjeWFuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBpbmhlcml0O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbi5lc3NlbnRpYWwtbGlicmFyeSB7XFxuICAgIGhlaWdodDogMjYuNyU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubWFqb3ItbGlicmFyeSB7XFxuICAgIGhlaWdodDogMjYuNyU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubWlub3ItbGlicmFyeSB7XFxuICAgIGhlaWdodDogMjYuNyU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uYmlnLWNpcmNsZSB7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgY3lhbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuc21hbGwtY2lyY2xlIHtcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIFxcbiAgLnNtYWxsLWNpcmNsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IGN5YW47XFxuICB9XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnRhc2staW5mby1ib3gge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBhbmltYXRpb246IHVucmF2ZWwgMXMgZWFzZS1vdXQgMSBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyB1bnJhdmVsIHtcXG4gICAgMCUge2hlaWdodDogMCU7fVxcbiAgICAxMDAlIHtoZWlnaHQ6IDUwJTt9XFxufVxcblxcbi5kdWUtZGF0ZS1kaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQ6IGdyZXk7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tZGlzcGxheSB7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBwYWRkaW5nOiAxLjVlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5lZGl0LWJ0biB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBkb2RnZXJibHVlIDUwJSwgZ3JleSA1MCUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjUwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuNzVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZWRpdC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IHByb2plY3RMaWJyYXJ5ID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiU3RhcnQgSGVyZVwiLFxuICAgICAgICBlc3NlbnRpYWxUYXNrczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhhdmUgY2FrZSFcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBtYWpvclRhc2tzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVmFjdXVtIHJvb21cIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBtaW5vclRhc2tzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhZCB5b3VyIGJvb2tcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuZnVuY3Rpb24gcmV0dXJuUHJvamVjdExpYnJhcnkoKSB7XG4gICAgcmV0dXJuIHByb2plY3RMaWJyYXJ5O1xufTtcblxuZnVuY3Rpb24gcmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCB0YXJnZXRUYXNrTGlzdCkge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RMaWJyYXJ5LmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gdGFyZ2V0UHJvamVjdFRpdGxlKTtcbiAgICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gcmV0dXJuUHJvamVjdExpYnJhcnkoKVtwcm9qZWN0SW5kZXhdO1xuICAgIHJldHVybiB0YXJnZXRQcm9qZWN0W3RhcmdldFRhc2tMaXN0XTtcbn07XG5cbmV4cG9ydCB7IHJldHVyblByb2plY3RMaWJyYXJ5LCByZXR1cm5UYXNrTGlzdCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZXR1cm5Qcm9qZWN0TGlicmFyeSwgcmV0dXJuVGFza0xpc3QgfSBmcm9tIFwiLi9saWJyYXJ5TG9naWMuanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuXG5jb25zdCBob21lTGlicmFyeUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgcHJvamVjdExpYnJhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5jb25zdCBwcm9qZWN0Q29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCByZW5hbWVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IGZpbmlzaFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5jb25zdCB0YXNrTGlicmFyeUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBlc3NlbnRpYWxUYXNrQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IG1ham9yVGFza0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBtaW5vclRhc2tCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5jb25zdCB0YXNrSW5mb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBkdWVEYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgZGVzY3JpcHRpb25EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuXG5mdW5jdGlvbiBjbGVhclRhc2tJbmZvQm94KCkge1xuICAgIHdoaWxlICh0YXNrSW5mb0JveC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhc2tJbmZvQm94LnJlbW92ZUNoaWxkKHRhc2tJbmZvQm94LmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gICAgYm9keS5yZW1vdmVDaGlsZCh0YXNrSW5mb0JveCk7XG59O1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrSW5mb0JveCgpIHtcbiAgICBpZiAodGFza0luZm9Cb3guZmlyc3RDaGlsZCkge2NsZWFyVGFza0luZm9Cb3goKX07XG4gICAgdGFza0luZm9Cb3guY2xhc3NMaXN0LmFkZChcInRhc2staW5mby1ib3hcIik7XG5cbiAgICBkdWVEYXRlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGUtZGlzcGxheVwiKTtcbiAgICBkdWVEYXRlRGlzcGxheS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IDY6MDBBTSBYWC9YWC9YWFhYXCI7XG4gICAgdGFza0luZm9Cb3guYXBwZW5kQ2hpbGQoZHVlRGF0ZURpc3BsYXkpO1xuXG4gICAgZGVzY3JpcHRpb25EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1kaXNwbGF5XCIpO1xuICAgIGRlc2NyaXB0aW9uRGlzcGxheS50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEhhcnVtIGl1c3RvIGRpc3RpbmN0aW8sIGV4IHF1b3MgcXVvIG1vbGVzdGlhcyBtb2xlc3RpYWU/IE5lcXVlIGFjY3VzYW50aXVtIGN1bHBhIHBlcmZlcmVuZGlzLCBub24gbnVsbGEgYXBlcmlhbSBlYXF1ZSBtYWduYW0gb21uaXMgaXBzYW0gYmVhdGFlLCBkZWxlbml0aSBwb3Jybz8gTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlcGVsbGF0IHJlcHVkaWFuZGFlIHF1YW0gaXVyZS4gVm9sdXB0YXR1bSBvbW5pcyBldmVuaWV0IGlzdGUsIGRvbG9yIGFkaXBpc2NpIGN1bHBhIG9iY2FlY2F0aSBwbGFjZWF0IHZlbmlhbSBhc3Blcm5hdHVyIHRlbXBvcmUgYWxpcXVpZCBuZW1vIGRpY3RhIG1hZ25hbSwgZXN0IHJlcHJlaGVuZGVyaXQ/XCI7XG4gICAgdGFza0luZm9Cb3guYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXNwbGF5KTtcblxuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtYnRuXCIpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICB0YXNrSW5mb0JveC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGFza0luZm9Cb3gpO1xufTtcblxuXG5mdW5jdGlvbiBjbGVhclRhc2tMaWJyYXJ5Qm94KCkge1xuICAgIHdoaWxlIChlc3NlbnRpYWxUYXNrQmFyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZXNzZW50aWFsVGFza0Jhci5yZW1vdmVDaGlsZChlc3NlbnRpYWxUYXNrQmFyLmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gICAgd2hpbGUgKG1ham9yVGFza0Jhci5maXJzdENoaWxkKSB7XG4gICAgICAgIG1ham9yVGFza0Jhci5yZW1vdmVDaGlsZChtYWpvclRhc2tCYXIuZmlyc3RDaGlsZCk7XG4gICAgfTtcbiAgICB3aGlsZSAobWlub3JUYXNrQmFyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWlub3JUYXNrQmFyLnJlbW92ZUNoaWxkKG1pbm9yVGFza0Jhci5maXJzdENoaWxkKTtcbiAgICB9O1xuICAgIHdoaWxlICh0YXNrTGlicmFyeUJveC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhc2tMaWJyYXJ5Qm94LnJlbW92ZUNoaWxkKHRhc2tMaWJyYXJ5Qm94LmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gICAgYm9keS5yZW1vdmVDaGlsZCh0YXNrTGlicmFyeUJveCk7XG59O1xuXG5mdW5jdGlvbiByZW5kZXJFc3NlbnRpYWxUYXNrc0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBwYXJlbnREaXYpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgXCJlc3NlbnRpYWxUYXNrc1wiKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICB0YXNrLnRleHRDb250ZW50ID0gYCR7cmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBcImVzc2VudGlhbFRhc2tzXCIpW2ldLnRpdGxlfWA7XG4gICAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclRhc2tJbmZvQm94KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiaWdDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBiaWdDaXJjbGUuY2xhc3NMaXN0LmFkZChcImJpZy1jaXJjbGVcIik7XG4gICAgICAgIGNvbnN0IHNtYWxsQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc21hbGxDaXJjbGUuY2xhc3NMaXN0LmFkZChcInNtYWxsLWNpcmNsZVwiKTtcbiAgICAgICAgYmlnQ2lyY2xlLmFwcGVuZENoaWxkKHNtYWxsQ2lyY2xlKTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChiaWdDaXJjbGUpO1xuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlck1ham9yVGFza3NMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgcGFyZW50RGl2KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXR1cm5UYXNrTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIFwibWFqb3JUYXNrc1wiKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICB0YXNrLnRleHRDb250ZW50ID0gYCR7cmV0dXJuVGFza0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBcIm1ham9yVGFza3NcIilbaV0udGl0bGV9YDtcbiAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyVGFza0luZm9Cb3goKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJpZ0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJpZ0NpcmNsZS5jbGFzc0xpc3QuYWRkKFwiYmlnLWNpcmNsZVwiKTtcbiAgICAgICAgY29uc3Qgc21hbGxDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzbWFsbENpcmNsZS5jbGFzc0xpc3QuYWRkKFwic21hbGwtY2lyY2xlXCIpO1xuICAgICAgICBiaWdDaXJjbGUuYXBwZW5kQ2hpbGQoc21hbGxDaXJjbGUpO1xuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGJpZ0NpcmNsZSk7XG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gcmVuZGVyTWlub3JUYXNrc0xpc3QodGFyZ2V0UHJvamVjdFRpdGxlLCBwYXJlbnREaXYpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldHVyblRhc2tMaXN0KHRhcmdldFByb2plY3RUaXRsZSwgXCJtaW5vclRhc2tzXCIpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHRhc2sudGV4dENvbnRlbnQgPSBgJHtyZXR1cm5UYXNrTGlzdCh0YXJnZXRQcm9qZWN0VGl0bGUsIFwibWlub3JUYXNrc1wiKVtpXS50aXRsZX1gO1xuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJUYXNrSW5mb0JveCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmlnQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYmlnQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJiaWctY2lyY2xlXCIpO1xuICAgICAgICBjb25zdCBzbWFsbENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNtYWxsQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC1jaXJjbGVcIik7XG4gICAgICAgIGJpZ0NpcmNsZS5hcHBlbmRDaGlsZChzbWFsbENpcmNsZSk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoYmlnQ2lyY2xlKTtcbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKHRhc2spO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrTGlicmFyeUJveCh0YXJnZXRQcm9qZWN0VGl0bGUpIHtcbiAgICBpZiAodGFza0xpYnJhcnlCb3guZmlyc3RDaGlsZCkge2NsZWFyVGFza0xpYnJhcnlCb3goKX07XG4gICAgXG4gICAgdGFza0xpYnJhcnlCb3guY2xhc3NMaXN0LmFkZChcImxpYnJhcnktYm94XCIsIFwidGFzay1saWJyYXJ5XCIpO1xuXG4gICAgY29uc3QgdGFza0JhckFycmF5cyA9IFtlc3NlbnRpYWxUYXNrQmFyLCBtYWpvclRhc2tCYXIsIG1pbm9yVGFza0JhciwgXCJlc3NlbnRpYWxcIiwgXCJtYWpvclwiLCBcIm1pbm9yXCIsIHJlbmRlckVzc2VudGlhbFRhc2tzTGlzdCwgcmVuZGVyTWFqb3JUYXNrc0xpc3QsIHJlbmRlck1pbm9yVGFza3NMaXN0XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICB0YXNrQmFyQXJyYXlzW2ldLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1ib3hcIik7XG4gICAgICAgIGNvbnN0IHRhc2tSYW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRhc2tSYW5rLnRleHRDb250ZW50ID0gIGAke3Rhc2tCYXJBcnJheXNbaSArIDNdfWA7XG4gICAgICAgIHRhc2tCYXJBcnJheXNbaV0uYXBwZW5kQ2hpbGQodGFza1JhbmspO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnRuXCIpO1xuICAgICAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgICAgIHRhc2tCYXJBcnJheXNbaV0uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgICAgIHRhc2tMaWJyYXJ5Qm94LmFwcGVuZENoaWxkKHRhc2tCYXJBcnJheXNbaV0pO1xuXG4gICAgICAgIGNvbnN0IHRhc2tMaWJyYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICB0YXNrTGlicmFyeS5jbGFzc0xpc3QuYWRkKGAke3Rhc2tCYXJBcnJheXNbaSArIDNdfS1saWJyYXJ5YCk7XG4gICAgICAgIHRhc2tCYXJBcnJheXNbaSArIDZdKHRhcmdldFByb2plY3RUaXRsZSwgdGFza0xpYnJhcnkpO1xuICAgICAgICB0YXNrTGlicmFyeUJveC5hcHBlbmRDaGlsZCh0YXNrTGlicmFyeSk7XG4gICAgfTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGFza0xpYnJhcnlCb3gpO1xufTtcblxuZnVuY3Rpb24gcmVuZGVySG9tZUxpYnJheUJveCgpIHtcbiAgICBob21lTGlicmFyeUJveC5jbGFzc0xpc3QuYWRkKFwibGlicmFyeS1ib3hcIik7XG5cbiAgICB3ZWxjb21lVGV4dC5jbGFzc0xpc3QuYWRkKFwid2VsY29tZS10ZXh0XCIpO1xuICAgIHdlbGNvbWVUZXh0LnRleHRDb250ZW50ID0gXCJXZWxjb21lLCBVc2VyXCI7XG4gICAgaG9tZUxpYnJhcnlCb3guYXBwZW5kQ2hpbGQod2VsY29tZVRleHQpO1xuXG4gICAgcHJvamVjdExpYnJhcnkuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlicmFyeVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldHVyblByb2plY3RMaWJyYXJ5KCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IGAke3JldHVyblByb2plY3RMaWJyYXJ5KClbaV1bXCJ0aXRsZVwiXX1gO1xuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFza0luZm9Cb3guZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGFza0luZm9Cb3goKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZW5kZXJUYXNrTGlicmFyeUJveChwcm9qZWN0LnRleHRDb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RMaWJyYXJ5LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIH07XG4gICAgaG9tZUxpYnJhcnlCb3guYXBwZW5kQ2hpbGQocHJvamVjdExpYnJhcnkpO1xuXG4gICAgcHJvamVjdENvbnRyb2xzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRyb2xzXCIpO1xuICAgIG5ld1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuXCIpO1xuICAgIG5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XG4gICAgcHJvamVjdENvbnRyb2xzLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xuICAgIHJlbmFtZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuXCIpO1xuICAgIHJlbmFtZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIlJlbmFtZSBQcm9qZWN0XCI7XG4gICAgcHJvamVjdENvbnRyb2xzLmFwcGVuZENoaWxkKHJlbmFtZVByb2plY3RCdG4pO1xuICAgIGZpbmlzaFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuXCIpO1xuICAgIGZpbmlzaFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkZpbmlzaCBQcm9qZWN0XCI7XG4gICAgcHJvamVjdENvbnRyb2xzLmFwcGVuZENoaWxkKGZpbmlzaFByb2plY3RCdG4pO1xuICAgIGhvbWVMaWJyYXJ5Qm94LmFwcGVuZENoaWxkKHByb2plY3RDb250cm9scyk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGhvbWVMaWJyYXJ5Qm94KTtcbn07XG5cblxuXG5yZW5kZXJIb21lTGlicmF5Qm94KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9