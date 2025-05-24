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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebBroker: () => (/* binding */ WebBroker)\n/* harmony export */ });\n/* harmony import */ var _js_dom_router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dom/router.js */ \"./src/js/dom/router.js\");\n/* harmony import */ var _js_broker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/broker.js */ \"./src/js/broker.js\");\n//commits, brnaches, merge (merge conflicts), rebase, remotes\n\n\n// import loadIntroPage from \"./js/pages/introduction.js\"\n\nconsole.log(\"hi\");\nvar WebBroker = new _js_broker_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n// const routes = [\"src/examples/introduction.html\"]\nvar routes = [\"examples/introduction.html\"];\nvar callbacks = [];\nvar PageRouter = new _js_dom_router_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](routes);\nvar navbar = document.createElement(\"nav\");\nvar body = document.createElement(\"div\");\nvar start = document.createElement(\"button\");\nstart.addEventListener(\"click\", function () {\n  // PageRouter.get(\"examples/introduction.html\", loadIntroPage)\n  PageRouter.get(\"examples/introduction.html\");\n});\nstart.textContent = \"Get Started\";\nbody.appendChild(start);\ndocument.body.appendChild(navbar);\ndocument.body.appendChild(body);\n\n\n//# sourceURL=webpack://git_visualizer/./src/index.js?");

/***/ }),

/***/ "./src/js/broker.js":
/*!**************************!*\
  !*** ./src/js/broker.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Broker = /*#__PURE__*/function () {\n  function Broker(options) {\n    _classCallCheck(this, Broker);\n    this.consumers = options.consumers ? options.consumers : [];\n    this.producers = options.producers ? options.producers : [];\n  }\n  return _createClass(Broker, [{\n    key: \"addConsumer\",\n    value: function addConsumer(consumer) {\n      this.consumers.push(consumer);\n    }\n  }, {\n    key: \"removeConsumer\",\n    value: function removeConsumer(consumer) {\n      this.consumers = this.consumers.filter(function (ele) {\n        return ele != consumer;\n      });\n    }\n  }, {\n    key: \"removeProducer\",\n    value: function removeProducer(producer) {\n      this.producer = this.producer.filter(function (ele) {\n        return ele != producer;\n      });\n    }\n  }, {\n    key: \"addProducer\",\n    value: function addProducer(producer) {\n      this.producers.push(producer);\n    }\n  }, {\n    key: \"signalProducers\",\n    value: function signalProducers(event) {\n      return this.producers.map(function (element) {\n        return element.signal(event);\n      });\n    }\n  }, {\n    key: \"signalConsumers\",\n    value: function signalConsumers(event) {\n      return this.consumers.map(function (element) {\n        return element.signal(event);\n      });\n    }\n  }, {\n    key: \"signal\",\n    value: function signal(event) {\n      // return new Promise((resolve) => resolve(signalProducers)) \n      if (event.source === \"producer\") return this.signalConsumers(event);\n      return this.signalProducers(event);\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Broker);\n\n//# sourceURL=webpack://git_visualizer/./src/js/broker.js?");

/***/ }),

/***/ "./src/js/dom/router.js":
/*!******************************!*\
  !*** ./src/js/dom/router.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Router = /*#__PURE__*/function () {\n  //simple router class to handle pages\n  function Router(routes) {\n    _classCallCheck(this, Router);\n    this.routes = routes;\n  }\n  return _createClass(Router, [{\n    key: \"get\",\n    value: function get(uri) {\n      //add DOMContent loaded to document, redirect, then run relevant JS fcn\n      // const execCallback = () => {\n      //     callback()\n      // }\n\n      window.location.assign(uri);\n      // execCallback()\n      document.addEventListener(\"DOMContentLoaded\", function () {\n        console.log(\"fjdsklfsjdlkfjkls\");\n        document.removeEventListener(\"DOMContentLoaded\", execCallback);\n      });\n    }\n\n    // document.addEventListener('DOMContentLoaded', () => {\n    //   // Your init code here\n    // });\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\n\n//# sourceURL=webpack://git_visualizer/./src/js/dom/router.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;