"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account/view/[trackId]",{

/***/ "./pages/account/view/[trackId].tsx":
/*!******************************************!*\
  !*** ./pages/account/view/[trackId].tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/MainLayout */ \"./components/MainLayout.tsx\");\n/* harmony import */ var _components_PlatformLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/PlatformLink */ \"./components/PlatformLink.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TrackView = function(param) {\n    var track = param.track, links = param.links, jwt = param.jwt;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), platformChoose = ref[0], setPlatformChoose = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var newPlatformButton = function() {\n        var _ref = _asyncToGenerator(C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (jwt) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", router.push(\"/account/login\"));\n                    case 2:\n                        axios__WEBPACK_IMPORTED_MODULE_3___default()({\n                            url: \"/links\",\n                            method: \"POST\"\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function newPlatformButton() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"tw\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: [\n                        track.name,\n                        \" (\",\n                        track.author,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: \"\\u041F\\u043B\\u0430\\u0442\\u0444\\u043E\\u0440\\u043C\\u044B: \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, _this),\n                links.map(function(el) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_PlatformLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        platform: el.platform,\n                        link: el.trackRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                        lineNumber: 29,\n                        columnNumber: 37\n                    }, _this1);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u043F\\u043B\\u0430\\u0442\\u0444\\u043E\\u0440\\u043C\\u0443: \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"new-platform-line\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                            value: platformChoose,\n                            onChange: function(e) {\n                                return setPlatformChoose(e.target.value);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    children: \"\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u043F\\u043B\\u0430\\u0442\\u0444\\u043E\\u0440\\u043C\\u0443\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                    value: \"Apple Music\",\n                                    children: \"Apple Music\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                    value: \"Spotify\",\n                                    children: \"Spotify\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                    value: \"VK \\u041C\\u0443\\u0437\\u044B\\u043A\\u0430\",\n                                    children: \"VK \\u041C\\u0443\\u0437\\u044B\\u043A\\u0430\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                    value: \"Yandex Music\",\n                                    children: \"Yandex Music\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                    value: \"YouTube Music\",\n                                    children: \"YouTube Music\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"new-platform-input\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: newPlatformButton,\n                            children: \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, _this);\n};\n_s(TrackView, \"kB+1bgOdPT4ZCZhO2h9IiNEK54w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = TrackView;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrackView);\nvar _c;\n$RefreshReg$(_c, \"TrackView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50L3ZpZXcvW3RyYWNrSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1o7QUFDOEI7QUFDSTtBQUV0Qjs7QUFFdEMsSUFBTU0sU0FBUyxHQUFHLGdCQUE4QjtRQUE1QkMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxHQUFHLFNBQUhBLEdBQUc7OztJQUNqQyxJQUEwQ1IsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVIxRCxjQVF1QixHQUF1QkEsR0FBWSxHQUFuQyxFQVJ2QixpQkFRMEMsR0FBSUEsR0FBWSxHQUFoQjtJQUN0QyxJQUFJVyxNQUFNLEdBQUdQLHNEQUFTLEVBQUU7SUFFeEIsSUFBTVEsaUJBQWlCO21CQUFHLHlMQUFZOzs7OzRCQUM3QkosR0FBRzs7OztxREFBU0csTUFBTSxDQUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7O3dCQUU5Q1osNENBQUssQ0FBQzs0QkFDRmEsR0FBRyxFQUFFLFFBQVE7NEJBQ2JDLE1BQU0sRUFBRSxNQUFNO3lCQUVqQixDQUFDOzs7Ozs7U0FDTDt3QkFSS0gsaUJBQWlCOzs7T0FRdEI7SUFFRCxxQkFDSSw4REFBQ1YsOERBQVU7a0JBQ1AsNEVBQUNjLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLElBQUk7OzhCQUNmLDhEQUFDQyxJQUFFOzt3QkFBRVosS0FBSyxDQUFDYSxJQUFJO3dCQUFDLElBQUU7d0JBQUNiLEtBQUssQ0FBQ2MsTUFBTTt3QkFBQyxHQUFDOzs7Ozs7eUJBQUs7OEJBRXRDLDhEQUFDQyxJQUFFOzhCQUFDLDBEQUFXOzs7Ozt5QkFBYztnQkFFaEJkLEtBQUosQ0FBQ2UsR0FBRyxDQUFDQyxTQUFBQSxFQUFFO3lDQUFJLDhEQUFDcEIsZ0VBQVk7d0JBQUNxQixRQUFRLEVBQUVELEVBQUUsQ0FBQ0MsUUFBUTt3QkFBRUMsSUFBSSxFQUFFRixFQUFFLENBQUNHLFFBQVE7Ozs7OzhCQUFHO2lCQUFBLENBQUM7OEJBSTlFLDhEQUFDQyxHQUFDOzhCQUFDLDJHQUFvQjs7Ozs7eUJBQXFCOzhCQUUzQiw4REFBaEJYLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxtQkFBbUI7O3NDQUM5Qiw4REFBQ1csUUFBTTs0QkFBQ0MsS0FBSyxFQUFFcEIsY0FBYzs0QkFBRXFCLFFBQVEsRUFBRUMsU0FBQUEsQ0FBQzt1Q0FBSXJCLGlCQUFpQixDQUFDcUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQzs2QkFBQTs7OENBQzNFLDhEQUFDSSxRQUFNO29DQUFDSixLQUFLLEVBQUMsRUFBRTs4Q0FBQyx5R0FBa0I7Ozs7O3lDQUEwQjs4Q0FDNUMsOERBQWhCSSxRQUFNO29DQUFDSixLQUFLLEVBQUMsYUFBYTs4Q0FBQyxhQUFXOzs7Ozt5Q0FBUzs4Q0FDaEQsOERBQUNJLFFBQU07b0NBQUNKLEtBQUssRUFBQyxTQUFTOzhDQUFDLFNBQU87Ozs7O3lDQUFTOzhDQUN4Qyw4REFBQ0ksUUFBTTtvQ0FBQ0osS0FBSyxFQUFDLHlDQUFXOzhDQUFPLHlDQUFTOzs7Ozt5Q0FBZTs4Q0FDNUMsOERBQVhJLFFBQU07b0NBQUNKLEtBQUssRUFBQyxjQUFjOzhDQUFDLGNBQVk7Ozs7O3lDQUFTOzhDQUNsRCw4REFBQ0ksUUFBTTtvQ0FBQ0osS0FBSyxFQUFDLGVBQWU7OENBQUMsZUFBYTs7Ozs7eUNBQVM7Ozs7OztpQ0FDL0M7c0NBRVQsOERBQUNLLE9BQUs7NEJBQUNDLElBQUksRUFBQyxNQUFNOzRCQUFDbEIsU0FBUyxFQUFDLG9CQUFvQjs7Ozs7aUNBQUU7c0NBRW5ELDhEQUFDbUIsUUFBTTs0QkFBQ0MsT0FBTyxFQUFFekIsaUJBQWlCO3NDQUFFLGtEQUFROzs7OztpQ0FBUzs7Ozs7O3lCQUNuRDs7Ozs7O2lCQUNKOzs7OzthQUNHLENBQ2Y7Q0FDTDtHQTVDS1AsU0FBUzs7UUFFRUQsa0RBQVM7OztBQUZwQkMsS0FBQUEsU0FBUzs7QUE4Q2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2NvdW50L3ZpZXcvW3RyYWNrSWRdLnRzeD9lYmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTWFpbkxheW91dFwiO1xyXG5pbXBvcnQgUGxhdGZvcm1MaW5rIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1BsYXRmb3JtTGlua1wiO1xyXG5pbXBvcnQgY29va2llcyBmcm9tIFwibmV4dC1jb29raWVzXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFRyYWNrVmlldyA9ICh7dHJhY2ssIGxpbmtzLCBqd3R9OiBhbnkpID0+IHtcclxuICAgIGxldCBbcGxhdGZvcm1DaG9vc2UsIHNldFBsYXRmb3JtQ2hvb3NlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgbmV3UGxhdGZvcm1CdXR0b24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFqd3QpIHJldHVybiByb3V0ZXIucHVzaCgnL2FjY291bnQvbG9naW4nKVxyXG5cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIHVybDogJy9saW5rcycsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdcIj5cclxuICAgICAgICAgICAgICAgIDxoMT57dHJhY2submFtZX0gKHt0cmFjay5hdXRob3J9KTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgyPtCf0LvQsNGC0YTQvtGA0LzRizogPC9oMj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rcy5tYXAoZWwgPT4gPFBsYXRmb3JtTGluayBwbGF0Zm9ybT17ZWwucGxhdGZvcm19IGxpbms9e2VsLnRyYWNrUmVmfS8+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD7QlNC+0LHQsNCy0LjRgtGMINC/0LvQsNGC0YTQvtGA0LzRgzogPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LXBsYXRmb3JtLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtwbGF0Zm9ybUNob29zZX0gb25DaGFuZ2U9e2UgPT4gc2V0UGxhdGZvcm1DaG9vc2UoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCS0YvQsdC10YDQuNGC0LUg0L/Qu9Cw0YLRhNC+0YDQvNGDPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcHBsZSBNdXNpY1wiPkFwcGxlIE11c2ljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTcG90aWZ5XCI+U3BvdGlmeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVksg0JzRg9C30YvQutCwXCI+Vksg0JzRg9C30YvQutCwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZYW5kZXggTXVzaWNcIj5ZYW5kZXggTXVzaWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIllvdVR1YmUgTXVzaWNcIj5Zb3VUdWJlIE11c2ljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT0nbmV3LXBsYXRmb3JtLWlucHV0Jy8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bmV3UGxhdGZvcm1CdXR0b259PtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01haW5MYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhY2tWaWV3O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcclxuICAgIGNvbnN0IHtqd3R9ID0gY29va2llcyhjb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCB7dHJhY2tJZH0gPSBjb250ZXh0LnF1ZXJ5XHJcblxyXG4gICAgbGV0IHRyYWNrID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIHVybDogJy90cmFja3MvaWQvJyArIHRyYWNrSWRcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcclxuXHJcbiAgICBsZXQgbGlua3MgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgdXJsOiAnL2xpbmtzL2lkLycgKyB0cmFja0lkXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXHJcblxyXG4gICAgaWYgKCFsaW5rcykgbGlua3MgPSBbXVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHt0cmFjaywgbGlua3MsIGp3dH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIk1haW5MYXlvdXQiLCJQbGF0Zm9ybUxpbmsiLCJ1c2VSb3V0ZXIiLCJUcmFja1ZpZXciLCJ0cmFjayIsImxpbmtzIiwiand0IiwicGxhdGZvcm1DaG9vc2UiLCJzZXRQbGF0Zm9ybUNob29zZSIsInJvdXRlciIsIm5ld1BsYXRmb3JtQnV0dG9uIiwicHVzaCIsInVybCIsIm1ldGhvZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibmFtZSIsImF1dGhvciIsImgyIiwibWFwIiwiZWwiLCJwbGF0Zm9ybSIsImxpbmsiLCJ0cmFja1JlZiIsInAiLCJzZWxlY3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/account/view/[trackId].tsx\n");

/***/ })

});