"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account/tracks",{

/***/ "./pages/account/tracks.tsx":
/*!**********************************!*\
  !*** ./pages/account/tracks.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MainLayout */ \"./components/MainLayout.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_TrackList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TrackList */ \"./components/TrackList.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TracksPage = function(param) {\n    var tracks = param.tracks, username = param.username, jwt = param.jwt;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), trackName = ref[0], setTrackName = ref[1];\n    var newTrack = function() {\n        if (!jwt) return router.push(\"/account/login\");\n        var payload = {\n            name: trackName\n        };\n        var result = axios__WEBPACK_IMPORTED_MODULE_2___default()({\n            url: \"/tracks\",\n            method: \"POST\",\n            data: payload,\n            headers: {\n                \"Authorization\": \"Bearer \" + jwt\n            }\n        }).then(function(response) {\n            router.reload();\n            return response.data;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"tw\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: username\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\tracks.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"tracks\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"\\u041C\\u043E\\u0438 \\u0442\\u0440\\u0435\\u043A\\u0438: \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\tracks.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TrackList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            tracks: tracks\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\tracks.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"new-track\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"\\u041D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435\",\n                                    value: trackName,\n                                    onChange: function(e) {\n                                        return setTrackName(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\tracks.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: newTrack,\n                                    children: \"\\u041D\\u043E\\u0432\\u044B\\u0439 \\u0442\\u0440\\u0435\\u043A\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\tracks.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\tracks.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\tracks.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\tracks.tsx\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\tracks.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, _this);\n};\n_s(TracksPage, \"uJPLcm3gYsqI0r3pmlCeIIqzDZ0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = TracksPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TracksPage);\nvar _c;\n$RefreshReg$(_c, \"TracksPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50L3RyYWNrcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDcUQ7QUFHM0I7QUFDeUI7QUFDYjtBQUNQOztBQUUvQixJQUFNSyxVQUFVLEdBQWEsZ0JBQWtDO1FBQWhDQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEdBQUcsU0FBSEEsR0FBRzs7SUFDaEQsSUFBSUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQ3hCLElBQWdDQyxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBWGhELFNBV2tCLEdBQWtCQSxHQUFZLEdBQTlCLEVBWGxCLFlBV2dDLEdBQUlBLEdBQVksR0FBaEI7SUFFNUIsSUFBTVEsUUFBUSxHQUFHLFdBQU07UUFDbkIsSUFBSSxDQUFDSixHQUFHLEVBQUUsT0FBT0MsTUFBTSxDQUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFOUMsSUFBSUMsT0FBTyxHQUFHO1lBQ1ZDLElBQUksRUFBRUwsU0FBUztTQUNsQjtRQUVELElBQUlNLE1BQU0sR0FBR2YsNENBQUssQ0FBQztZQUNmZ0IsR0FBRyxFQUFFLFNBQVM7WUFDZEMsTUFBTSxFQUFFLE1BQU07WUFDZEMsSUFBSSxFQUFFTCxPQUFPO1lBQ2JNLE9BQU8sRUFBRTtnQkFDTCxlQUFlLEVBQUUsU0FBUyxHQUFHWixHQUFHO2FBQ25DO1NBQ0osQ0FBQyxDQUNHYSxJQUFJLENBQUMsU0FBQ0MsUUFBUSxFQUFLO1lBQ2hCYixNQUFNLENBQUNjLE1BQU0sRUFBRTtZQUNmLE9BQU9ELFFBQVEsQ0FBQ0gsSUFBSTtTQUN2QixDQUFDO0tBQ1Q7SUFFRCxxQkFDSSw4REFBQ25CLDhEQUFVO2tCQUNQLDRFQUFDd0IsS0FBRztZQUFDQyxTQUFTLEVBQUMsSUFBSTs7OEJBQ2YsOERBQUNDLElBQUU7OEJBQUVuQixRQUFROzs7Ozt5QkFBTTs4QkFDbkIsOERBQUNpQixLQUFHO29CQUFDQyxTQUFTLEVBQUMsUUFBUTs7c0NBQ25CLDhEQUFDQyxJQUFFO3NDQUFDLHFEQUFXOzs7OztpQ0FBYTtzQ0FFaEIsOERBQVB4Qiw2REFBUzs0QkFBQ0ksTUFBTSxFQUFFQSxNQUFNOzs7OztpQ0FBRztzQ0FHaEMsOERBQUNrQixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsV0FBVzs7OENBQ3RCLDhEQUFDRSxPQUFLO29DQUFDQyxJQUFJLEVBQUMsTUFBTTtvQ0FBQ0MsV0FBVyxFQUFDLGtEQUFVO29DQUFTQyxLQUFLLEVBQUVwQixTQUFTO29DQUFFcUIsUUFBUSxFQUFFQyxTQUFBQSxDQUFDOytDQUFJckIsWUFBWSxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQztxQ0FBQTs7Ozs7eUNBQUc7OENBQzFHLDhEQUFQSSxRQUFNO29DQUFDQyxPQUFPLEVBQUV2QixRQUFROzhDQUFFLHlEQUFVOzs7Ozt5Q0FBUzs7Ozs7O2lDQUM1Qzs7Ozs7O3lCQUVKOzs7Ozs7aUJBQ0o7Ozs7O2FBQ0csQ0FDaEI7Q0FDSjtHQTVDS1AsVUFBVTs7UUFDQ0Ysa0RBQVM7OztBQURwQkUsS0FBQUEsVUFBVTs7QUE4Q2hCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FjY291bnQvdHJhY2tzLnRzeD9mMGNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcbmltcG9ydCBjb29raWVzIGZyb20gXCJuZXh0LWNvb2tpZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgVHJhY2tMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RyYWNrTGlzdFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVHJhY2tzUGFnZTogTmV4dFBhZ2UgPSAoe3RyYWNrcywgdXNlcm5hbWUsIGp3dH06IGFueSkgPT4ge1xyXG4gICAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBsZXQgW3RyYWNrTmFtZSwgc2V0VHJhY2tOYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IG5ld1RyYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghand0KSByZXR1cm4gcm91dGVyLnB1c2goJy9hY2NvdW50L2xvZ2luJylcclxuXHJcbiAgICAgICAgbGV0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRyYWNrTmFtZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF4aW9zKHtcclxuICAgICAgICAgICAgdXJsOiAnL3RyYWNrcycsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGp3dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucmVsb2FkKClcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt1c2VybmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+0JzQvtC4INGC0YDQtdC60Lg6IDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhY2tMaXN0IHRyYWNrcz17dHJhY2tzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy10cmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0n0J3QsNC30LLQsNC90LjQtScgdmFsdWU9e3RyYWNrTmFtZX0gb25DaGFuZ2U9e2UgPT4gc2V0VHJhY2tOYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25ld1RyYWNrfT7QndC+0LLRi9C5INGC0YDQtdC6PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhY2tzUGFnZVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcclxuICAgIGNvbnN0IHtqd3R9ID0gY29va2llcyhjb250ZXh0KTtcclxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3RfZGVjb2RlKGp3dClcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZGVjb2RlZC51c2VybmFtZVxyXG5cclxuICAgIGxldCB0cmFja3MgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgdXJsOiAnL3RyYWNrcy9hdXRob3IvJyArIHVzZXJuYW1lXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXHJcblxyXG4gICAgaWYgKCF0cmFja3MpIHRyYWNrcyA9IFtdXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge3RyYWNrcywgdXNlcm5hbWUsIGp3dH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIk1haW5MYXlvdXQiLCJheGlvcyIsIlRyYWNrTGlzdCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiVHJhY2tzUGFnZSIsInRyYWNrcyIsInVzZXJuYW1lIiwiand0Iiwicm91dGVyIiwidHJhY2tOYW1lIiwic2V0VHJhY2tOYW1lIiwibmV3VHJhY2siLCJwdXNoIiwicGF5bG9hZCIsIm5hbWUiLCJyZXN1bHQiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsInJlbG9hZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/account/tracks.tsx\n");

/***/ })

});