webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/StartMenu.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/StartMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/System/Taskbar/StartMenu.module.scss */ \"./styles/System/Taskbar/StartMenu.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/System/FileManager/FileManager */ \"./components/System/FileManager/FileManager.tsx\");\n/* harmony import */ var _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/System/FileManager/MenuView */ \"./components/System/FileManager/MenuView.tsx\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/StartMenu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar defaultView = 'All apps';\n\nvar StartMenu = function StartMenu() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_10__[\"ProcessContext\"]),\n      open = _useContext.open;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_11__[\"SessionContext\"]),\n      foreground = _useContext2.foreground;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])(false),\n      showMenu = _useState[0],\n      setShowMenu = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])(defaultView),\n      view = _useState2[0],\n      setView = _useState2[1];\n\n  var startButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useRef\"])(null);\n  var buttonsRef = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useRef\"])(null);\n  var nextRef = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useRef\"])(null);\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])(false),\n      mounted = _useState3[0],\n      setMounted = _useState3[1];\n\n  var buttons = [{\n    title: 'START',\n    alt: 'Expand',\n    icon: \"\\uE700\",\n    isBold: true\n  }, {\n    title: 'All apps',\n    icon: \"\\uE179\",\n    isView: true\n  }, {\n    title: 'Documents',\n    icon: \"\\uE160\",\n    onClick: function () {\n      var _onClick = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(clickEvent) {\n        var processId;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return open({\n                  icon: '/icons/programs/explorer.png',\n                  name: 'Documents',\n                  url: '/docs'\n                }, {}, clickEvent.target);\n\n              case 2:\n                processId = _context.sent;\n                foreground(processId);\n                setShowMenu(false);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function onClick(_x) {\n        return _onClick.apply(this, arguments);\n      }\n\n      return onClick;\n    }()\n  }, {\n    title: 'Power',\n    icon: \"\\uE7E8\"\n  }];\n  Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useEffect\"])(function () {\n    nextRef.current = document.getElementById(_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"NEXT_ID\"]);\n    setMounted(true);\n  }, []);\n  return mounted ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_6__[\"createPortal\"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"nav\", {\n    children: [showMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menu,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ol\", {\n        className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttons,\n        ref: buttonsRef,\n        tabIndex: -1,\n        onMouseLeave: function onMouseLeave() {\n          var _startButtonRef$curre;\n\n          return (_startButtonRef$curre = startButtonRef.current) === null || _startButtonRef$curre === void 0 ? void 0 : _startButtonRef$curre.focus();\n        },\n        children: buttons.map(function (_ref) {\n          var alt = _ref.alt,\n              icon = _ref.icon,\n              isBold = _ref.isBold,\n              isView = _ref.isView,\n              title = _ref.title,\n              onClick = _ref.onClick;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figure\", {\n              className: view === title ? _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttonSelected : '',\n              onClick: isView ? function () {\n                return setView(view);\n              } : onClick,\n              tabIndex: -1,\n              title: alt || title,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                \"data-icon\": icon\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figcaption\", {\n                children: isBold ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"strong\", {\n                  children: title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 89,\n                  columnNumber: 37\n                }, _this) : title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 25\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 23\n            }, _this)\n          }, title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 21\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 15\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        path: \"/start\",\n        render: _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        onChange: function onChange(cwd) {\n          return !cwd && setShowMenu(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 15\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n      ref: startButtonRef,\n      className: \"\".concat(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.start, \" \").concat(showMenu && _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menuOpen),\n      type: \"button\",\n      title: \"Start\",\n      onClick: function onClick() {\n        return setShowMenu(!showMenu);\n      },\n      onBlur: function onBlur(_ref2) {\n        var _buttonsRef$current;\n\n        var relatedTarget = _ref2.relatedTarget;\n\n        if (!relatedTarget) {\n          var _startButtonRef$curre2;\n\n          startButtonRef === null || startButtonRef === void 0 ? void 0 : (_startButtonRef$curre2 = startButtonRef.current) === null || _startButtonRef$curre2 === void 0 ? void 0 : _startButtonRef$curre2.focus();\n        } else if (!((_buttonsRef$current = buttonsRef.current) === null || _buttonsRef$current === void 0 ? void 0 : _buttonsRef$current.contains(relatedTarget))) {\n          setShowMenu(false);\n        }\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faWindows\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 9\n  }, _this), nextRef.current) : null;\n};\n\n_s(StartMenu, \"os3qsuEJ79cDxUADjU4SS6XyGB8=\");\n\n_c = StartMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"StartMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUudHN4PzQ0MDAiXSwibmFtZXMiOlsiZGVmYXVsdFZpZXciLCJTdGFydE1lbnUiLCJ1c2VDb250ZXh0IiwiUHJvY2Vzc0NvbnRleHQiLCJvcGVuIiwiU2Vzc2lvbkNvbnRleHQiLCJmb3JlZ3JvdW5kIiwidXNlU3RhdGUiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwidmlldyIsInNldFZpZXciLCJzdGFydEJ1dHRvblJlZiIsInVzZVJlZiIsImJ1dHRvbnNSZWYiLCJuZXh0UmVmIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJidXR0b25zIiwidGl0bGUiLCJhbHQiLCJpY29uIiwiaXNCb2xkIiwiaXNWaWV3Iiwib25DbGljayIsImNsaWNrRXZlbnQiLCJuYW1lIiwidXJsIiwidGFyZ2V0IiwicHJvY2Vzc0lkIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJORVhUX0lEIiwiY3JlYXRlUG9ydGFsIiwic3R5bGVzIiwibWVudSIsImZvY3VzIiwibWFwIiwiYnV0dG9uU2VsZWN0ZWQiLCJNZW51VmlldyIsImN3ZCIsInN0YXJ0IiwibWVudU9wZW4iLCJyZWxhdGVkVGFyZ2V0IiwiY29udGFpbnMiLCJmYVdpbmRvd3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLFVBQXBCOztBQUVBLElBQU1DLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLEdBQU07QUFBQTs7QUFBQSxvQkFDZkMseURBQVUsQ0FBQ0Msd0VBQUQsQ0FESztBQUFBLE1BQ3hCQyxJQUR3QixlQUN4QkEsSUFEd0I7O0FBQUEscUJBRVRGLHlEQUFVLENBQUNHLHdFQUFELENBRkQ7QUFBQSxNQUV4QkMsVUFG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LHNDQUFBQSxjQUFjLENBQUVtQixPQUFoQixrRkFBeUJPLEtBQXpCO0FBQ0QsU0FGRCxNQUVPLElBQUkseUJBQUN4QixVQUFVLENBQUNpQixPQUFaLHdEQUFDLG9CQUFvQmUsUUFBcEIsQ0FBNkJELGFBQTdCLENBQUQsQ0FBSixFQUEwRDtBQUMvRHBDLHFCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0Q7QUFDRixPQVpIO0FBQUEsNkJBY0UscUVBQUMsOEVBQUQ7QUFBaUIsWUFBSSxFQUFFc0MsNEVBQVNBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURVLEVBb0RWaEMsT0FBTyxDQUFDZ0IsT0FwREUsQ0FERixHQXVEVixJQXZESjtBQXdERCxDQTVHRDs7R0FBTTlCLFM7O0tBQUFBLFM7QUE4R1NBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgRmlsZU1hbmFnZXIgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9GaWxlTWFuYWdlci9GaWxlTWFuYWdlcic7XG5pbXBvcnQgTWVudVZpZXcgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9GaWxlTWFuYWdlci9NZW51Vmlldyc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgZmFXaW5kb3dzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgTkVYVF9JRCB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IFByb2Nlc3NDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9Qcm9jZXNzTWFuYWdlcic7XG5pbXBvcnQgeyBTZXNzaW9uQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvU2Vzc2lvbk1hbmFnZXInO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBkZWZhdWx0VmlldyA9ICdBbGwgYXBwcyc7XG5cbmNvbnN0IFN0YXJ0TWVudTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgb3BlbiB9ID0gdXNlQ29udGV4dChQcm9jZXNzQ29udGV4dCk7XG4gIGNvbnN0IHsgZm9yZWdyb3VuZCB9ID0gdXNlQ29udGV4dChTZXNzaW9uQ29udGV4dCk7XG4gIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShkZWZhdWx0Vmlldyk7XG4gIGNvbnN0IHN0YXJ0QnV0dG9uUmVmID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PihudWxsKTtcbiAgY29uc3QgYnV0dG9uc1JlZiA9IHVzZVJlZjxIVE1MT0xpc3RFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbmV4dFJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ1NUQVJUJyxcbiAgICAgIGFsdDogJ0V4cGFuZCcsXG4gICAgICBpY29uOiAnXFx1ZTcwMCcsXG4gICAgICBpc0JvbGQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQWxsIGFwcHMnLFxuICAgICAgaWNvbjogJ1xcdWUxNzknLFxuICAgICAgaXNWaWV3OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0RvY3VtZW50cycsXG4gICAgICBpY29uOiAnXFx1ZTE2MCcsXG4gICAgICBvbkNsaWNrOiBhc3luYyAoXG4gICAgICAgIGNsaWNrRXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICAgICApID0+IHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0lkID0gYXdhaXQgb3BlbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZycsXG4gICAgICAgICAgICBuYW1lOiAnRG9jdW1lbnRzJyxcbiAgICAgICAgICAgIHVybDogJy9kb2NzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge30sXG4gICAgICAgICAgY2xpY2tFdmVudC50YXJnZXRcbiAgICAgICAgKTtcbiAgICAgICAgZm9yZWdyb3VuZChwcm9jZXNzSWQpO1xuICAgICAgICBzZXRTaG93TWVudShmYWxzZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1Bvd2VyJyxcbiAgICAgIGljb246ICdcXHVlN2U4J1xuICAgIH1cbiAgXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5leHRSZWYuY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE5FWFRfSUQpO1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbW91bnRlZFxuICAgID8gY3JlYXRlUG9ydGFsKFxuICAgICAgICA8bmF2PlxuICAgICAgICAgIHtzaG93TWVudSAmJiAoXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxuICAgICAgICAgICAgICA8b2xcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfVxuICAgICAgICAgICAgICAgIHJlZj17YnV0dG9uc1JlZn1cbiAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzdGFydEJ1dHRvblJlZi5jdXJyZW50Py5mb2N1cygpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2J1dHRvbnMubWFwKFxuICAgICAgICAgICAgICAgICAgKHsgYWx0LCBpY29uLCBpc0JvbGQsIGlzVmlldywgdGl0bGUsIG9uQ2xpY2sgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt0aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt2aWV3ID09PSB0aXRsZSA/IHN0eWxlcy5idXR0b25TZWxlY3RlZCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aXNWaWV3ID8gKCkgPT4gc2V0Vmlldyh2aWV3KSA6IG9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YWx0IHx8IHRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtaWNvbj17aWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNCb2xkID8gPHN0cm9uZz57dGl0bGV9PC9zdHJvbmc+IDogdGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgPEZpbGVNYW5hZ2VyXG4gICAgICAgICAgICAgICAgcGF0aD1cIi9zdGFydFwiXG4gICAgICAgICAgICAgICAgcmVuZGVyPXtNZW51Vmlld31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGN3ZCkgPT4gIWN3ZCAmJiBzZXRTaG93TWVudShmYWxzZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHJlZj17c3RhcnRCdXR0b25SZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zdGFydH0gJHtzaG93TWVudSAmJiBzdHlsZXMubWVudU9wZW59YH1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdGl0bGU9XCJTdGFydFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVudSghc2hvd01lbnUpfVxuICAgICAgICAgICAgb25CbHVyPXsoeyByZWxhdGVkVGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgc3RhcnRCdXR0b25SZWY/LmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWJ1dHRvbnNSZWYuY3VycmVudD8uY29udGFpbnMocmVsYXRlZFRhcmdldCBhcyBOb2RlKSkge1xuICAgICAgICAgICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhV2luZG93c30gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uYXY+LFxuICAgICAgICBuZXh0UmVmLmN1cnJlbnQgYXMgSFRNTEVsZW1lbnRcbiAgICAgIClcbiAgICA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydE1lbnU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Taskbar/StartMenu.tsx\n");

/***/ })

})