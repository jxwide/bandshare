"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[artist]/[tsn]",{

/***/ "./pages/[artist]/[tsn].tsx":
/*!**********************************!*\
  !*** ./pages/[artist]/[tsn].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar TSN = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var _query = router.query, artist = _query.artist, tsn = _query.tsn;\n    var style = {\n        backgroundImage: \"url('https://i.pinimg.com/originals/59/0a/d1/590ad16bd33cf2997d8696905cf50820.jpg')\",\n        backgroundRepeat: \"no-repeat\",\n        backgroundSize: \"cover\",\n        width: \"100%\",\n        height: \"929px\",\n        filter: \"blur(5px);\",\n        position: \"fixed\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cardBG\",\n                style: style\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\[artist]\\\\[tsn].tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: \"123\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\[artist]\\\\[tsn].tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\assault\\\\Desktop\\\\bandshare\\\\client\\\\pages\\\\[artist]\\\\[tsn].tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, _this);\n};\n_s(TSN, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = TSN;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TSN);\nvar _c;\n$RefreshReg$(_c, \"TSN\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bYXJ0aXN0XS9bdHNuXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDc0M7O0FBRXRDLElBQU1DLEdBQUcsR0FBYSxXQUFNOztJQUN4QixJQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFDMUIsSUFBd0JFLE1BQVksR0FBWkEsTUFBTSxDQUFDQyxLQUFLLEVBQTVCQyxNQUFNLEdBQVVGLE1BQVksQ0FBNUJFLE1BQU0sRUFBRUMsR0FBRyxHQUFLSCxNQUFZLENBQXBCRyxHQUFHO0lBRW5CLElBQUlDLEtBQUssR0FBRztRQUNSQyxlQUFlLEVBQUcscUZBQW1GO1FBQ3JHQyxnQkFBZ0IsRUFBRSxXQUFXO1FBQzdCQyxjQUFjLEVBQUUsT0FBTztRQUN2QkMsS0FBSyxFQUFFLE1BQU07UUFDYkMsTUFBTSxFQUFFLE9BQU87UUFDZkMsTUFBTSxFQUFFLFlBQVk7UUFDcEJDLFFBQVEsRUFBRSxPQUFPO0tBQ3BCO0lBRUQscUJBQ0ksOERBQUNDLE1BQUk7OzBCQUNELDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsUUFBUTtnQkFBQ1YsS0FBSyxFQUFFQSxLQUFLOzs7OztxQkFBUTswQkFDNUMsOERBQUNTLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxNQUFNOzBCQUFDLEtBRXRCOzs7OztxQkFBTTs7Ozs7O2FBQ0gsQ0FDVjtDQUNKO0dBdEJLZixHQUFHOztRQUNVRCxrREFBUzs7O0FBRHRCQyxLQUFBQSxHQUFHO0FBd0JULCtEQUFlQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1thcnRpc3RdL1t0c25dLnRzeD9mODg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBUU046IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgYXJ0aXN0LCB0c24gfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy81OS8wYS9kMS81OTBhZDE2YmQzM2NmMjk5N2Q4Njk2OTA1Y2Y1MDgyMC5qcGcnKWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICc5MjlweCcsXHJcbiAgICAgICAgZmlsdGVyOiAnYmx1cig1cHgpOycsXHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCdcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRCR1wiIHN0eWxlPXtzdHlsZX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4xMjNcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUU04iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiVFNOIiwicm91dGVyIiwicXVlcnkiLCJhcnRpc3QiLCJ0c24iLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsdGVyIiwicG9zaXRpb24iLCJib2R5IiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[artist]/[tsn].tsx\n");

/***/ })

});