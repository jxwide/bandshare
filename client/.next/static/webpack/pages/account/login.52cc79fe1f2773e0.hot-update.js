"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account/login",{

/***/ "./pages/account/login.tsx":
/*!*********************************!*\
  !*** ./pages/account/login.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainLayout */ \"./components/MainLayout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar LoginPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), username = ref[0], setUserName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var nextButton = function() {\n        var _ref = _asyncToGenerator(C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var payload, token;\n            return C_Users_assault_Desktop_bandshare_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        payload = {\n                            username: username,\n                            password: password\n                        };\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default()({\n                            url: \"/users/login\",\n                            method: \"POST\",\n                            data: payload\n                        }).then(function(response) {\n                            return response.data;\n                        });\n                    case 3:\n                        token = _ctx.sent;\n                        setUserName(\"\");\n                        setPassword(\"\");\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function nextButton() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"mw\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\login.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"placeholder\",\n                    children: \"UserName\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\login.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: username,\n                    onChange: function(e) {\n                        return setUserName(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\login.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"placeholder\",\n                    children: \"Password\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\login.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    value: password,\n                    onChange: function(e) {\n                        return setPassword(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\login.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\login.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: nextButton,\n                    children: \"Next\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\login.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 22\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\login.tsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\account\\\\login.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, _this);\n};\n_s(LoginPage, \"BtFn5yfL2Ky7GnvFbGyYRNPtux8=\");\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50L2xvZ2luLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQ3RCO0FBQ0w7O0FBRTFCLElBQU1HLFNBQVMsR0FBYSxXQUFNOztJQUM5QixJQUE4QkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU45QyxRQU1pQixHQUFpQkEsR0FBWSxHQUE3QixFQU5qQixXQU04QixHQUFJQSxHQUFZLEdBQWhCO0lBQzFCLElBQThCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUDlDLFFBT2lCLEdBQWlCQSxJQUFZLEdBQTdCLEVBUGpCLFdBTzhCLEdBQUlBLElBQVksR0FBaEI7SUFFMUIsSUFBSU8sVUFBVTttQkFBRyx5TEFBWTtnQkFDckJDLE9BQU8sRUFLUEMsS0FBSzs7Ozt3QkFMTEQsT0FBTyxHQUFHOzRCQUNWTCxRQUFRLEVBQVJBLFFBQVE7NEJBQ1JFLFFBQVEsRUFBUkEsUUFBUTt5QkFDWDs7K0JBRWlCSiw0Q0FBSyxDQUFDOzRCQUNwQlMsR0FBRyxFQUFFLGNBQWM7NEJBQ25CQyxNQUFNLEVBQUUsTUFBTTs0QkFDZEMsSUFBSSxFQUFFSixPQUFPO3lCQUNoQixDQUFDLENBQ0dLLElBQUksQ0FBQ0MsU0FBQUEsUUFBUTttQ0FBSUEsUUFBUSxDQUFDRixJQUFJO3lCQUFBLENBQUM7O3dCQUxoQ0gsS0FBSyxZQUsyQjt3QkFFcENMLFdBQVcsQ0FBQyxFQUFFLENBQUM7d0JBQ2ZFLFdBQVcsQ0FBQyxFQUFFLENBQUM7Ozs7OztTQUNsQjt3QkFmR0MsVUFBVTs7O09BZWI7SUFFRCxxQkFDSSw4REFBQ1IsOERBQVU7a0JBQ1AsNEVBQUNnQixLQUFHO1lBQUNDLFNBQVMsRUFBQyxJQUFJOzs4QkFDZiw4REFBQ0MsSUFBRTs4QkFBQyxPQUFLOzs7Ozt5QkFBSzs4QkFDZCw4REFBQ0MsR0FBQztvQkFBQ0YsU0FBUyxFQUFDLGFBQWE7OEJBQUMsVUFBUTs7Ozs7eUJBQUk7OEJBQ3ZDLDhEQUFDRyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsTUFBTTtvQkFBQ0MsS0FBSyxFQUFFbEIsUUFBUTtvQkFBRW1CLFFBQVEsRUFBRUMsU0FBQUEsQ0FBQzsrQkFBSW5CLFdBQVcsQ0FBQ21CLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7cUJBQUE7Ozs7O3lCQUFHOzhCQUVqRiw4REFBQ0gsR0FBQztvQkFBQ0YsU0FBUyxFQUFDLGFBQWE7OEJBQUMsVUFBUTs7Ozs7eUJBQUk7OEJBQ3ZDLDhEQUFDRyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsVUFBVTtvQkFBQ0MsS0FBSyxFQUFFaEIsUUFBUTtvQkFBRWlCLFFBQVEsRUFBRUMsU0FBQUEsQ0FBQzsrQkFBSWpCLFdBQVcsQ0FBQ2lCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7cUJBQUE7Ozs7O3lCQUFHOzhCQUVyRiw4REFBQ0ksSUFBRTs7Ozt5QkFBRTs4QkFBQSw4REFBQ0MsUUFBTTtvQkFBQ0MsT0FBTyxFQUFFcEIsVUFBVTs4QkFBRSxNQUFJOzs7Ozt5QkFBUzs7Ozs7O2lCQUM3Qzs7Ozs7YUFDRyxDQUNoQjtDQUNKO0dBbkNLTCxTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUFxQ2YsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudC9sb2dpbi50c3g/YjYxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkxheW91dFwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgTG9naW5QYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICAgIGxldCBbdXNlcm5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgbGV0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgbGV0IG5leHRCdXR0b24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRva2VuID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICB1cmw6ICcvdXNlcnMvbG9naW4nLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBwYXlsb2FkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcclxuXHJcbiAgICAgICAgc2V0VXNlck5hbWUoJycpXHJcbiAgICAgICAgc2V0UGFzc3dvcmQoJycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtd1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncGxhY2Vob2xkZXInPlVzZXJOYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3BsYWNlaG9sZGVyJz5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDxici8+PGJ1dHRvbiBvbkNsaWNrPXtuZXh0QnV0dG9ufT5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlXHJcbiJdLCJuYW1lcyI6WyJNYWluTGF5b3V0IiwidXNlU3RhdGUiLCJheGlvcyIsIkxvZ2luUGFnZSIsInVzZXJuYW1lIiwic2V0VXNlck5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibmV4dEJ1dHRvbiIsInBheWxvYWQiLCJ0b2tlbiIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/account/login.tsx\n");

/***/ })

});