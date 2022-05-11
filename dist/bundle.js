/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\nh1 {\\n  color: black;\\n  text-align: center;\\n}\\n\\n.container {\\n  width: 700px;\\n  margin: 0 auto;\\n}\\n\\ntextarea {\\n  padding: 10px;\\n  margin-bottom: 20px;\\n  font-size: 16px;\\n  width: 100%;\\n  height: 200px;\\n  box-sizing: border-box;\\n}\\n\\n.keyboard {\\n  display: flex;\\n  flex-wrap: wrap;\\n  background-color: grey;\\n  padding: 10px;\\n  gap: 5px;\\n}\\n\\n.button {\\n  width: 40px;\\n  height: 40px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  color: #ffffff;\\n  font-size: 14px;\\n  font-weight: 500;\\n  cursor: pointer;\\n  background: black;\\n  border-radius: 3px;\\n  transition: all 0.3s;\\n}\\n.button.Backspace, .button.Enter, .button.ShiftLeft {\\n  width: 95px;\\n}\\n.button.CapsLock, .button.ShiftRight {\\n  width: 85px;\\n}\\n.button.Tab {\\n  width: 50px;\\n}\\n.button.Space {\\n  flex: 1;\\n}\\n.button:hover {\\n  opacity: 0.7;\\n}\\n.button.active {\\n  background: blue;\\n}\\n.button.on {\\n  color: blue;\\n}\\n\\n.lang {\\n  text-align: center;\\n  font-weight: bold;\\n}\\n\\n.info {\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/assets/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/assets/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/style.scss */ \"./src/assets/styles/style.scss\");\n\r\n\r\n\r\nconst wrapper = document.body;\r\n\r\nconsole.log('Добрый день. Ветка https://github.com/AllaBorisova/virtual-keyboard/tree/gh-pages и исходный код в https://github.com/AllaBorisova/virtual-keyboard/tree/development. Чуть позже будет там пул реквест, не знаю как кинуть на него потом ссылку((');\r\n\r\nlet language = \"rus\";\r\nlet capsCheck = false;\r\n\r\nif (localStorage.getItem(\"language\") !== null) {\r\n\tlanguage = localStorage.getItem(\"language\");;\r\n} else {\r\n\tlocalStorage.setItem(\"language\", \"rus\");\r\n}\r\n\r\n\r\nconst container = document.createElement('div');\r\ncontainer.className = \"container\";\r\nwrapper.appendChild(container);\r\n\r\nconst h1 = document.createElement(\"h1\");\r\nh1.textContent = \"Виртуальная клавиатура\";\r\n\r\ncontainer.appendChild(h1);\r\n\r\nconst textarea = document.createElement(\"textarea\");\r\ncontainer.appendChild(textarea);\r\n\r\nconst keyboard = document.createElement(\"div\");\r\nkeyboard.className = \"keyboard\";\r\ncontainer.appendChild(keyboard);\r\n\r\nconst langBlock = document.createElement(\"p\");\r\nlangBlock.className = \"lang\";\r\nlangBlock.innerHTML = language;\r\ncontainer.appendChild(langBlock);\r\n\r\nconst infoBlock = document.createElement(\"p\");\r\ninfoBlock.className = \"info\";\r\ninfoBlock.innerHTML = \"Для переключения языка комбинация: левыe ctrl + alt\";\r\ncontainer.appendChild(infoBlock);\r\n\r\n\r\n//first line\r\nconst Backquote = document.createElement(\"div\");\r\ngenerateButton(Backquote, \"ё\", \"\", \"`\", \"Backquote\")\r\n\r\nconst Digit1 = document.createElement(\"div\");\r\ngenerateButton(Digit1, \"1\", \"\", \"\", \"Digit1\")\r\n\r\nconst Digit2 = document.createElement(\"div\");\r\ngenerateButton(Digit2, \"2\", \"\", \"\", \"Digit2\")\r\n\r\nconst Digit3 = document.createElement(\"div\");\r\ngenerateButton(Digit3, \"3\", \"\", \"\", \"Digit3\")\r\n\r\nconst Digit4 = document.createElement(\"div\");\r\ngenerateButton(Digit4, \"4\", \"\", \"\", \"Digit4\")\r\n\r\nconst Digit5 = document.createElement(\"div\");\r\ngenerateButton(Digit5, \"5\", \"\", \"\", \"Digit5\")\r\n\r\nconst Digit6 = document.createElement(\"div\");\r\ngenerateButton(Digit6, \"6\", \"\", \"\", \"Digit6\")\r\n\r\nconst Digit7 = document.createElement(\"div\");\r\ngenerateButton(Digit7, \"7\", \"\", \"\", \"Digit7\")\r\n\r\nconst Digit8 = document.createElement(\"div\");\r\ngenerateButton(Digit8, \"8\", \"\", \"\", \"Digit8\")\r\n\r\nconst Digit9 = document.createElement(\"div\");\r\ngenerateButton(Digit9, \"9\", \"\", \"\", \"Digit9\")\r\n\r\nconst Digit0 = document.createElement(\"div\");\r\ngenerateButton(Digit0, \"0\", \"\", \"\", \"Digit0\")\r\n\r\nconst Minus = document.createElement(\"div\");\r\ngenerateButton(Minus, \"-\", \"\", \"\", \"Minus\")\r\n\r\nconst Equal = document.createElement(\"div\");\r\ngenerateButton(Equal, \"=\", \"\", \"\", \"Equal\")\r\n\r\nconst Backspace = document.createElement(\"div\");\r\ngenerateButton(Backspace, \"Backspace\", \"Backspace\", \"\", \"Backspace\")\r\n\r\n\r\n//second line\r\nconst Tab = document.createElement(\"div\");\r\ngenerateButton(Tab, \"Tab\", \"Tab\", \"\", \"Tab\")\r\n\r\nconst KeyQ = document.createElement(\"div\");\r\ngenerateButton(KeyQ, \"й\", \"\", \"q\", \"KeyQ\")\r\n\r\nconst KeyW = document.createElement(\"div\");\r\ngenerateButton(KeyW, \"ц\", \"\", \"w\", \"KeyW\")\r\n\r\nconst KeyE = document.createElement(\"div\");\r\ngenerateButton(KeyE, \"у\", \"\", \"e\", \"KeyE\")\r\n\r\nconst KeyR = document.createElement(\"div\");\r\ngenerateButton(KeyR, \"к\", \"\", \"r\", \"KeyR\")\r\n\r\nconst KeyT = document.createElement(\"div\");\r\ngenerateButton(KeyT, \"е\", \"\", \"t\", \"KeyT\")\r\n\r\nconst KeyY = document.createElement(\"div\");\r\ngenerateButton(KeyY, \"н\", \"\", \"y\", \"KeyY\")\r\n\r\nconst KeyU = document.createElement(\"div\");\r\ngenerateButton(KeyU, \"г\", \"\", \"u\", \"KeyU\")\r\n\r\nconst KeyI = document.createElement(\"div\");\r\ngenerateButton(KeyI, \"ш\", \"\", \"i\", \"KeyI\")\r\n\r\nconst KeyO = document.createElement(\"div\");\r\ngenerateButton(KeyO, \"щ\", \"\", \"o\", \"KeyO\")\r\n\r\nconst KeyP = document.createElement(\"div\");\r\ngenerateButton(KeyP, \"з\", \"\", \"p\", \"KeyP\")\r\n\r\nconst BracketLeft = document.createElement(\"div\");\r\ngenerateButton(BracketLeft, \"х\", \"\", \"[\", \"BracketLeft\")\r\n\r\nconst BracketRight = document.createElement(\"div\");\r\ngenerateButton(BracketRight, \"ъ\", \"\", \"]\", \"BracketRight\")\r\n\r\nconst Backslash = document.createElement(\"div\");\r\ngenerateButton(Backslash, \"\\\\\", \"\", \"\\\\\", \"Backslash\");\r\n\r\nconst Delete = document.createElement(\"div\");\r\ngenerateButton(Delete, \"Del\", \"\", \"Del\", \"Delete\")\r\n\r\n\r\n//third line\r\nconst CapsLock = document.createElement(\"div\");\r\ngenerateButton(CapsLock, \"CapsLock\", \"CapsLock\", \"\", \"CapsLock\")\r\n\r\nconst KeyA = document.createElement(\"div\");\r\ngenerateButton(KeyA, \"ф\", \"\", \"a\", \"KeyA\")\r\n\r\nconst KeyS = document.createElement(\"div\");\r\ngenerateButton(KeyS, \"ы\", \"\", \"s\", \"KeyS\")\r\n\r\nconst KeyD = document.createElement(\"div\");\r\ngenerateButton(KeyD, \"в\", \"\", \"d\", \"KeyD\")\r\n\r\nconst KeyF = document.createElement(\"div\");\r\ngenerateButton(KeyF, \"а\", \"\", \"f\", \"KeyF\")\r\n\r\nconst KeyG = document.createElement(\"div\");\r\ngenerateButton(KeyG, \"п\", \"\", \"g\", \"KeyG\")\r\n\r\nconst KeyH = document.createElement(\"div\");\r\ngenerateButton(KeyH, \"р\", \"\", \"h\", \"KeyH\")\r\n\r\nconst KeyJ = document.createElement(\"div\");\r\ngenerateButton(KeyJ, \"о\", \"\", \"j\", \"KeyJ\")\r\n\r\nconst KeyK = document.createElement(\"div\");\r\ngenerateButton(KeyK, \"л\", \"\", \"k\", \"KeyK\")\r\n\r\nconst KeyL = document.createElement(\"div\");\r\ngenerateButton(KeyL, \"д\", \"\", \"l\", \"KeyL\")\r\n\r\nconst Semicolon = document.createElement(\"div\");\r\ngenerateButton(Semicolon, \"ж\", \"\", \";\", \"Semicolon\")\r\n\r\nconst Quote = document.createElement(\"div\");\r\ngenerateButton(Quote, \"э\", \"\", \"'\", \"Quote\")\r\n\r\nconst Enter = document.createElement(\"div\");\r\ngenerateButton(Enter, \"Enter\", \"Enter\", \"\", \"Enter\")\r\n\r\n\r\n//fourth line\r\n\r\nconst ShiftLeft = document.createElement(\"div\");\r\ngenerateButton(ShiftLeft, \"Shift\", \"ShiftLeft\", \"\", \"ShiftLeft\")\r\n\r\nconst KeyZ = document.createElement(\"div\");\r\ngenerateButton(KeyZ, \"я\", \"\", \"z\", \"KeyZ\")\r\n\r\nconst KeyX = document.createElement(\"div\");\r\ngenerateButton(KeyX, \"ч\", \"\", \"x\", \"KeyX\")\r\n\r\nconst KeyC = document.createElement(\"div\");\r\ngenerateButton(KeyC, \"с\", \"\", \"c\", \"KeyC\")\r\n\r\nconst KeyV = document.createElement(\"div\");\r\ngenerateButton(KeyV, \"м\", \"\", \"v\", \"KeyV\")\r\n\r\nconst KeyB = document.createElement(\"div\");\r\ngenerateButton(KeyB, \"и\", \"\", \"b\", \"KeyB\")\r\n\r\nconst KeyN = document.createElement(\"div\");\r\ngenerateButton(KeyN, \"т\", \"\", \"n\", \"KeyN\")\r\n\r\nconst KeyM = document.createElement(\"div\");\r\ngenerateButton(KeyM, \"ь\", \"\", \"m\", \"KeyM\")\r\n\r\nconst Comma = document.createElement(\"div\");\r\ngenerateButton(Comma, \"б\", \"\", \",\", \"Comma\")\r\n\r\nconst Period = document.createElement(\"div\");\r\ngenerateButton(Period, \"ю\", \"\", \".\", \"Period\")\r\n\r\nconst Slash = document.createElement(\"div\");\r\ngenerateButton(Slash, \".\", \"\", \"/\", \"Slash\")\r\n\r\nconst ArrowUp = document.createElement(\"div\");\r\ngenerateButton(ArrowUp, \"▲\", \"\", \"\", \"ArrowUp\")\r\n\r\nconst ShiftRight = document.createElement(\"div\");\r\ngenerateButton(ShiftRight, \"Shift\", \"ShiftRight\", \"\", \"ShiftRight\")\r\n\r\n//fifth line\r\nconst ControlLeft = document.createElement(\"div\");\r\ngenerateButton(ControlLeft, \"Ctrl\", \"ControlLeft\", \"\", \"ControlLeft\")\r\n\r\nconst MetaLeft = document.createElement(\"div\");\r\ngenerateButton(MetaLeft, \"Win\", \"\", \"\", \"MetaLeft\")\r\n\r\nconst AltLeft = document.createElement(\"div\");\r\ngenerateButton(AltLeft, \"Alt\", \"\", \"\", \"AltLeft\")\r\n\r\nconst Space = document.createElement(\"div\");\r\ngenerateButton(Space, \" \", \"Space\", \"\", \"Space\")\r\n\r\nconst AltRight = document.createElement(\"div\");\r\ngenerateButton(AltRight, \"Alt\", \"\", \"\", \"AltRight\")\r\n\r\nconst ArrowLeft = document.createElement(\"div\");\r\ngenerateButton(ArrowLeft, \"◄\", \"\", \"\", \"ArrowLeft\")\r\n\r\nconst ArrowDown = document.createElement(\"div\");\r\ngenerateButton(ArrowDown, \"▼\", \"\", \"\", \"ArrowDown\")\r\n\r\nconst ArrowRight = document.createElement(\"div\");\r\ngenerateButton(ArrowRight, \"►\", \"\", \"\", \"ArrowRight\")\r\n\r\nconst ControlRight = document.createElement(\"div\");\r\ngenerateButton(ControlRight, \"Ctrl\", \"\", \"\", \"ControlRight\")\r\n\r\nfunction generateButton(button, rustext, addClass, engtext, name) {\r\n\tbutton.className = \"button\";\r\n\tif (addClass) {\r\n\t\tbutton.classList.add(addClass);\r\n\t}\r\n\tif (language === \"rus\") {\r\n\t\tbutton.textContent = rustext;\r\n\t} else {\r\n\t\tif (engtext) {\r\n\t\t\tbutton.textContent = engtext;\r\n\t\t} else {\r\n\t\t\tbutton.textContent = rustext;\r\n\t\t}\r\n\t}\r\n\tif (rustext && engtext) {\r\n\t\tbutton.dataset.rus = rustext;\r\n\t\tbutton.dataset.eng = engtext;\r\n\t}\r\n\t// console.log(button);\r\n\tbutton.dataset.name = name;\r\n\r\n\tkeyboard.appendChild(button);\r\n\r\n}\r\n\r\ndocument.addEventListener(\"click\", function (event) {\r\n\tif (event.target.classList.contains(\"button\")) {\r\n\t\tswitch (event.target.dataset.name) {\r\n\t\t\tcase 'CapsLock':\r\n\t\t\t\ttoggleCaps();\r\n\t\t\t\tshowButton(eval(event.target.dataset.name));\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'Backspace':\r\n\t\t\t\tshowButton(eval(event.target.dataset.name));\r\n\t\t\t\ttextarea.value = textarea.value.substring(0, textarea.value.length - 1);\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'Delete':\r\n\t\t\t\ttextarea.value = textarea.value.substring(0, textarea.selectionStart) + textarea.value.substring(textarea.selectionStart + 1, textarea.value.length);\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'Enter':\r\n\t\t\t\tshowButton(eval(event.target.dataset.name));\r\n\t\t\t\ttextarea.value = textarea.value + '\\r\\n';\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'Tab':\r\n\t\t\tcase 'ControlRight':\r\n\t\t\tcase 'AltRight':\r\n\t\t\tcase 'ShiftLeft':\r\n\t\t\tcase 'ShiftRight':\r\n\t\t\tcase 'MetaLeft':\r\n\t\t\tcase 'ArrowUp':\r\n\t\t\tcase 'ArrowLeft':\r\n\t\t\tcase 'ArrowRight':\r\n\t\t\tcase 'ArrowDown':\r\n\t\t\tcase 'AltLeft':\r\n\t\t\tcase 'ControlLeft':\r\n\t\t\t\tshowButton(eval(event.target.dataset.name));\r\n\t\t\t\tbreak;\r\n\r\n\t\t\tdefault:\r\n\t\t\t\tshowButton(eval(event.target.dataset.name));\r\n\t\t\t\texecuteButton(eval(event.target.dataset.name));\r\n\t\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\r\n})\r\n\r\n\r\n\r\nfunction showButton(button) {\r\n\tbutton.classList.add('active');\r\n\tsetTimeout(() => {\r\n\t\tbutton.classList.remove('active');\r\n\t}, 300);\r\n\r\n}\r\n\r\nfunction executeButton(button) {\r\n\ttextarea.value += button.textContent;\r\n}\r\n\r\nlet letters = [Backquote, Semicolon, Quote, Comma, Period, BracketLeft, BracketRight, KeyA, KeyB, KeyC, KeyD, KeyE, KeyF, KeyG, KeyH, KeyI, KeyJ, KeyK, KeyL, KeyM, KeyN, KeyO, KeyP, KeyQ, KeyR, KeyS, KeyT, KeyU, KeyV, KeyW, KeyX, KeyY, KeyZ];\r\n\r\nfunction toggleCaps() {\r\n\t//console.log('toggle');\r\n\tletters.forEach((element) => {\r\n\t\tlet letter = element.innerText;\r\n\t\tif (letter == letter.toUpperCase()) {\r\n\t\t\telement.textContent = letter.toLowerCase();\r\n\t\t} else {\r\n\t\t\telement.textContent = letter.toUpperCase();\r\n\t\t}\r\n\t})\r\n\tif (capsCheck === true) {\r\n\t\tcapsCheck = false;\r\n\t\tCapsLock.classList.remove(\"on\");\r\n\t} else {\r\n\t\tcapsCheck = true;\r\n\t\tCapsLock.classList.add(\"on\");\r\n\t}\r\n\t//console.log(capsCheck);\r\n}\r\n\r\nfunction changeLanguage() {\r\n\t//console.log('Change language');\r\n\tif (language === \"rus\") {\r\n\t\tlanguage = \"eng\";\r\n\r\n\t\tlangBlock.innerHTML = language;\r\n\t\tletters.forEach((element) => {\r\n\r\n\t\t\telement.innerText = (capsCheck === true) ? element.dataset.eng.toUpperCase() : element.dataset.eng;\r\n\t\t})\r\n\t} else {\r\n\t\tlanguage = \"rus\";\r\n\t\tlangBlock.innerHTML = language;\r\n\t\tletters.forEach((element) => {\r\n\t\t\telement.innerText = (capsCheck === true) ? element.dataset.rus.toUpperCase() : element.dataset.rus;\r\n\t\t})\r\n\t}\r\n\tlocalStorage.setItem(\"language\", language);\r\n\r\n\r\n}\r\n\r\n\r\ndocument.addEventListener('keydown', pressKey);\r\n\r\nfunction pressKey(event) {\r\n\tconsole.log(event);\r\n\r\n\tswitch (event.code) {\r\n\t\tcase 'CapsLock':\r\n\t\t\ttoggleCaps();\r\n\t\t\tshowButton(eval(event.code));\r\n\t\t\tbreak;\r\n\t\tcase 'Tab':\r\n\t\tcase 'ControlRight':\r\n\t\tcase 'AltRight':\r\n\t\tcase 'Enter':\r\n\t\tcase 'Backspace':\r\n\t\tcase 'Delete':\r\n\t\tcase 'ShiftLeft':\r\n\t\tcase 'ShiftRight':\r\n\t\tcase 'MetaLeft':\r\n\t\tcase 'ArrowUp':\r\n\t\tcase 'ArrowLeft':\r\n\t\tcase 'ArrowRight':\r\n\t\tcase 'ArrowDown':\r\n\t\t\tshowButton(eval(event.code));\r\n\t\t\tbreak;\r\n\t\tcase 'AltLeft':\r\n\t\t\tif (event.ctrlKey) {\r\n\t\t\t\tchangeLanguage();\r\n\r\n\t\t\t}\r\n\t\t\tshowButton(eval(event.code)); break;\r\n\t\tcase 'ControlLeft':\r\n\t\t\tif (event.altKey) {\r\n\t\t\t\tchangeLanguage();\r\n\t\t\t}\r\n\t\t\tshowButton(eval(event.code));\r\n\t\t\tbreak;\r\n\t\tdefault: showButton(eval(event.code)); executeButton(eval(event.code)); break;\r\n\t}\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/scripts/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;