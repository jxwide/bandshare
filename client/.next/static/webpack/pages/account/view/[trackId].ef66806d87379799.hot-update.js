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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/MainLayout */ \"./components/MainLayout.tsx\");\n/* harmony import */ var _components_PlatformLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/PlatformLink */ \"./components/PlatformLink.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TrackView = function(param) {\n    var track = param.track, links = param.links, jwt = param.jwt, username = param.username;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), platformChoose = ref[0], setPlatformChoose = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), trackRef = ref1[0], setTrackRef = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var newPlatformButton = function() {\n        var _ref = _asyncToGenerator(C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var payload, result;\n            return C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (jwt) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", router.push(\"/account/login\"));\n                    case 2:\n                        if (!(platformChoose == \"\")) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", 1);\n                    case 4:\n                        payload = {\n                            platform: platformChoose,\n                            trackRef: trackRef,\n                            trackId: track.id\n                        };\n                        result = axios__WEBPACK_IMPORTED_MODULE_3___default()({\n                            url: \"/links\",\n                            method: \"POST\",\n                            data: payload,\n                            headers: {\n                                \"Authorization\": \"Bearer \" + jwt\n                            }\n                        }).then(function(response) {\n                            router.reload();\n                            return response.data;\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function newPlatformButton() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"tw\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: [\n                        track.name,\n                        \" (\",\n                        track.author,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                    href: \"/\" + username + \"/\" + track.id,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        children: \"Get share link\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: \"\\u041F\\u043B\\u0430\\u0442\\u0444\\u043E\\u0440\\u043C\\u044B: \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, _this),\n                links.map(function(el) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_PlatformLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        platform: el.platform,\n                        link: el.trackRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                        lineNumber: 50,\n                        columnNumber: 37\n                    }, _this1);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u043F\\u043B\\u0430\\u0442\\u0444\\u043E\\u0440\\u043C\\u0443: \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"new-platform-line\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                            value: platformChoose,\n                            onChange: function(e) {\n                                return setPlatformChoose(e.target.value);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    children: \"\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u043F\\u043B\\u0430\\u0442\\u0444\\u043E\\u0440\\u043C\\u0443\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                    value: \"Apple Music\",\n                                    children: \"Apple Music\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                    value: \"Spotify\",\n                                    children: \"Spotify\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                    value: \"VK \\u041C\\u0443\\u0437\\u044B\\u043A\\u0430\",\n                                    children: \"VK \\u041C\\u0443\\u0437\\u044B\\u043A\\u0430\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                    value: \"Yandex Music\",\n                                    children: \"Yandex Music\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                    value: \"YouTube Music\",\n                                    children: \"YouTube Music\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"new-platform-input\",\n                            value: trackRef,\n                            onChange: function(e) {\n                                return setTrackRef(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: newPlatformButton,\n                            children: \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\view\\\\[trackId].tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, _this);\n};\n_s(TrackView, \"keIcopZUMvmEQNgz2FG1jphesYY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = TrackView;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrackView);\nvar _c;\n$RefreshReg$(_c, \"TrackView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50L3ZpZXcvW3RyYWNrSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDWjtBQUM4QjtBQUNJO0FBRXRCO0FBQ1Q7O0FBRzdCLElBQU1PLFNBQVMsR0FBRyxnQkFBd0M7UUFBdENDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7O0lBQzNDLElBQTBDVixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBVjFELGNBVXVCLEdBQXVCQSxHQUFZLEdBQW5DLEVBVnZCLGlCQVUwQyxHQUFJQSxHQUFZLEdBQWhCO0lBQ3RDLElBQThCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBWDlDLFFBV2lCLEdBQWlCQSxJQUFZLEdBQTdCLEVBWGpCLFdBVzhCLEdBQUlBLElBQVksR0FBaEI7SUFDMUIsSUFBSWUsTUFBTSxHQUFHWCxzREFBUyxFQUFFO0lBRXhCLElBQU1ZLGlCQUFpQjttQkFBRyx5TEFBWTtnQkFJOUJDLE9BQU8sRUFNUEMsTUFBTTs7Ozs0QkFUTFQsR0FBRzs7OztxREFBU00sTUFBTSxDQUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7OzRCQUMxQ1IsQ0FBQUEsQ0FBQUEsY0FBYyxJQUFJLEVBQUU7Ozs7cURBQVMsQ0FBQzs7d0JBRTlCTSxPQUFPLEdBQUc7NEJBQ1ZHLFFBQVEsRUFBRVQsY0FBYzs0QkFDeEJFLFFBQVEsRUFBUkEsUUFBUTs0QkFDUlEsT0FBTyxFQUFFZCxLQUFLLENBQUNlLEVBQUU7eUJBQ3BCO3dCQUVHSixNQUFNLEdBQUdqQiw0Q0FBSyxDQUFDOzRCQUNmc0IsR0FBRyxFQUFFLFFBQVE7NEJBQ2JDLE1BQU0sRUFBRSxNQUFNOzRCQUNkQyxJQUFJLEVBQUVSLE9BQU87NEJBQ2JTLE9BQU8sRUFBRTtnQ0FDTCxlQUFlLEVBQUUsU0FBUyxHQUFHakIsR0FBRzs2QkFDbkM7eUJBQ0osQ0FBQyxDQUNHa0IsSUFBSSxDQUFDLFNBQUNDLFFBQVEsRUFBSzs0QkFDaEJiLE1BQU0sQ0FBQ2MsTUFBTSxFQUFFOzRCQUNmLE9BQU9ELFFBQVEsQ0FBQ0gsSUFBSTt5QkFDdkIsQ0FBQzs7Ozs7O1NBQ1Q7d0JBdEJLVCxpQkFBaUI7OztPQXNCdEI7SUFFRCxxQkFDSSw4REFBQ2QsOERBQVU7a0JBQ1AsNEVBQUM0QixLQUFHO1lBQUNDLFNBQVMsRUFBQyxJQUFJOzs4QkFDZiw4REFBQ0MsSUFBRTs7d0JBQUV6QixLQUFLLENBQUMwQixJQUFJO3dCQUFDLElBQUU7d0JBQUMxQixLQUFLLENBQUMyQixNQUFNO3dCQUFDLEdBQUM7Ozs7Ozt5QkFBSzs4QkFFdEMsOERBQUM3QixrREFBSTtvQkFBQzhCLElBQUksRUFBRSxHQUFHLEdBQUd6QixRQUFRLEdBQUcsR0FBRyxHQUFHSCxLQUFLLENBQUNlLEVBQUU7OEJBQ3ZDLDRFQUFDYyxRQUFNO2tDQUFDLGdCQUFjOzs7Ozs2QkFBUzs7Ozs7eUJBQzVCOzhCQUVQLDhEQUFDQyxJQUFFOzhCQUFDLDBEQUFXOzs7Ozt5QkFBYztnQkFFaEI3QixLQUFKLENBQUM4QixHQUFHLENBQUNDLFNBQUFBLEVBQUU7eUNBQUksOERBQUNwQyxnRUFBWTt3QkFBQ2lCLFFBQVEsRUFBRW1CLEVBQUUsQ0FBQ25CLFFBQVE7d0JBQUVvQixJQUFJLEVBQUVELEVBQUUsQ0FBQzFCLFFBQVE7Ozs7OzhCQUFHO2lCQUFBLENBQUM7OEJBSTlFLDhEQUFDNEIsR0FBQzs4QkFBQywyR0FBb0I7Ozs7O3lCQUFxQjs4QkFFM0IsOERBQWhCWCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsbUJBQW1COztzQ0FDOUIsOERBQUNXLFFBQU07NEJBQUNDLEtBQUssRUFBRWhDLGNBQWM7NEJBQUVpQyxRQUFRLEVBQUVDLFNBQUFBLENBQUM7dUNBQUlqQyxpQkFBaUIsQ0FBQ2lDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7NkJBQUE7OzhDQUMzRSw4REFBQ0ksUUFBTTtvQ0FBQ0osS0FBSyxFQUFDLEVBQUU7OENBQUMseUdBQWtCOzs7Ozt5Q0FBMEI7OENBQzVDLDhEQUFoQkksUUFBTTtvQ0FBQ0osS0FBSyxFQUFDLGFBQWE7OENBQUMsYUFBVzs7Ozs7eUNBQVM7OENBQ2hELDhEQUFDSSxRQUFNO29DQUFDSixLQUFLLEVBQUMsU0FBUzs4Q0FBQyxTQUFPOzs7Ozt5Q0FBUzs4Q0FDeEMsOERBQUNJLFFBQU07b0NBQUNKLEtBQUssRUFBQyx5Q0FBVzs4Q0FBTyx5Q0FBUzs7Ozs7eUNBQWU7OENBQzVDLDhEQUFYSSxRQUFNO29DQUFDSixLQUFLLEVBQUMsY0FBYzs4Q0FBQyxjQUFZOzs7Ozt5Q0FBUzs4Q0FDbEQsOERBQUNJLFFBQU07b0NBQUNKLEtBQUssRUFBQyxlQUFlOzhDQUFDLGVBQWE7Ozs7O3lDQUFTOzs7Ozs7aUNBQy9DO3NDQUVULDhEQUFDSyxPQUFLOzRCQUFDQyxJQUFJLEVBQUMsTUFBTTs0QkFBQ2xCLFNBQVMsRUFBQyxvQkFBb0I7NEJBQUNZLEtBQUssRUFBRTlCLFFBQVE7NEJBQUUrQixRQUFRLEVBQUVDLFNBQUFBLENBQUM7dUNBQUkvQixXQUFXLENBQUMrQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDOzZCQUFBOzs7OztpQ0FBRztzQ0FFaEgsOERBQUNQLFFBQU07NEJBQUNjLE9BQU8sRUFBRWxDLGlCQUFpQjtzQ0FBRSxrREFBUTs7Ozs7aUNBQVM7Ozs7Ozt5QkFDbkQ7Ozs7OztpQkFDSjs7Ozs7YUFDRyxDQUNmO0NBQ0w7R0EvREtWLFNBQVM7O1FBR0VGLGtEQUFTOzs7QUFIcEJFLEtBQUFBLFNBQVM7O0FBaUVmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudC92aWV3L1t0cmFja0lkXS50c3g/ZWJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL01haW5MYXlvdXRcIjtcclxuaW1wb3J0IFBsYXRmb3JtTGluayBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9QbGF0Zm9ybUxpbmtcIjtcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSBcIm5leHQtY29va2llc1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcblxyXG5jb25zdCBUcmFja1ZpZXcgPSAoe3RyYWNrLCBsaW5rcywgand0LCB1c2VybmFtZX06IGFueSkgPT4ge1xyXG4gICAgbGV0IFtwbGF0Zm9ybUNob29zZSwgc2V0UGxhdGZvcm1DaG9vc2VdID0gdXNlU3RhdGUoJycpXHJcbiAgICBsZXQgW3RyYWNrUmVmLCBzZXRUcmFja1JlZl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IG5ld1BsYXRmb3JtQnV0dG9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghand0KSByZXR1cm4gcm91dGVyLnB1c2goJy9hY2NvdW50L2xvZ2luJylcclxuICAgICAgICBpZiAocGxhdGZvcm1DaG9vc2UgPT0gJycpIHJldHVybiAxO1xyXG5cclxuICAgICAgICBsZXQgcGF5bG9hZCA9IHtcclxuICAgICAgICAgICAgcGxhdGZvcm06IHBsYXRmb3JtQ2hvb3NlLFxyXG4gICAgICAgICAgICB0cmFja1JlZixcclxuICAgICAgICAgICAgdHJhY2tJZDogdHJhY2suaWRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBheGlvcyh7XHJcbiAgICAgICAgICAgIHVybDogJy9saW5rcycsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGp3dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucmVsb2FkKClcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt0cmFjay5uYW1lfSAoe3RyYWNrLmF1dGhvcn0pPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLycgKyB1c2VybmFtZSArICcvJyArIHRyYWNrLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkdldCBzaGFyZSBsaW5rPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgyPtCf0LvQsNGC0YTQvtGA0LzRizogPC9oMj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rcy5tYXAoZWwgPT4gPFBsYXRmb3JtTGluayBwbGF0Zm9ybT17ZWwucGxhdGZvcm19IGxpbms9e2VsLnRyYWNrUmVmfS8+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD7QlNC+0LHQsNCy0LjRgtGMINC/0LvQsNGC0YTQvtGA0LzRgzogPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LXBsYXRmb3JtLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtwbGF0Zm9ybUNob29zZX0gb25DaGFuZ2U9e2UgPT4gc2V0UGxhdGZvcm1DaG9vc2UoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCS0YvQsdC10YDQuNGC0LUg0L/Qu9Cw0YLRhNC+0YDQvNGDPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcHBsZSBNdXNpY1wiPkFwcGxlIE11c2ljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTcG90aWZ5XCI+U3BvdGlmeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVksg0JzRg9C30YvQutCwXCI+Vksg0JzRg9C30YvQutCwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZYW5kZXggTXVzaWNcIj5ZYW5kZXggTXVzaWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIllvdVR1YmUgTXVzaWNcIj5Zb3VUdWJlIE11c2ljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT0nbmV3LXBsYXRmb3JtLWlucHV0JyB2YWx1ZT17dHJhY2tSZWZ9IG9uQ2hhbmdlPXtlID0+IHNldFRyYWNrUmVmKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25ld1BsYXRmb3JtQnV0dG9ufT7QlNC+0LHQsNCy0LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYWNrVmlldztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogYW55KSB7XHJcbiAgICBjb25zdCB7and0fSA9IGNvb2tpZXMoY29udGV4dCk7XHJcbiAgICBjb25zdCBkZWNvZGVkID0gand0X2RlY29kZShqd3QpXHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGRlY29kZWQudXNlcm5hbWVcclxuXHJcbiAgICBjb25zdCB7dHJhY2tJZH0gPSBjb250ZXh0LnF1ZXJ5XHJcblxyXG4gICAgbGV0IHRyYWNrID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIHVybDogJy90cmFja3MvaWQvJyArIHRyYWNrSWRcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcclxuXHJcbiAgICBsZXQgbGlua3MgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgdXJsOiAnL2xpbmtzL2lkLycgKyB0cmFja0lkXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXHJcblxyXG4gICAgaWYgKCFsaW5rcykgbGlua3MgPSBbXVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHt0cmFjaywgbGlua3MsIGp3dCwgdXNlcm5hbWV9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJNYWluTGF5b3V0IiwiUGxhdGZvcm1MaW5rIiwidXNlUm91dGVyIiwiTGluayIsIlRyYWNrVmlldyIsInRyYWNrIiwibGlua3MiLCJqd3QiLCJ1c2VybmFtZSIsInBsYXRmb3JtQ2hvb3NlIiwic2V0UGxhdGZvcm1DaG9vc2UiLCJ0cmFja1JlZiIsInNldFRyYWNrUmVmIiwicm91dGVyIiwibmV3UGxhdGZvcm1CdXR0b24iLCJwYXlsb2FkIiwicmVzdWx0IiwicHVzaCIsInBsYXRmb3JtIiwidHJhY2tJZCIsImlkIiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm5hbWUiLCJhdXRob3IiLCJocmVmIiwiYnV0dG9uIiwiaDIiLCJtYXAiLCJlbCIsImxpbmsiLCJwIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvcHRpb24iLCJpbnB1dCIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/account/view/[trackId].tsx\n");

/***/ })

});