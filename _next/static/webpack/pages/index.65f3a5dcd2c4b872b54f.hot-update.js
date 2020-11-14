webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/StartMenu.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/StartMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/System/Taskbar/StartMenu.module.scss */ \"./styles/System/Taskbar/StartMenu.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/System/FileManager/FileManager */ \"./components/System/FileManager/FileManager.tsx\");\n/* harmony import */ var _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/System/FileManager/MenuView */ \"./components/System/FileManager/MenuView.tsx\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/StartMenu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar defaultView = 'All apps';\n\nvar StartMenu = function StartMenu() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_8__[\"ProcessContext\"]),\n      open = _useContext.open;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_9__[\"SessionContext\"]),\n      foreground = _useContext2.foreground;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])(false),\n      showMenu = _useState[0],\n      setShowMenu = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])(defaultView),\n      view = _useState2[0],\n      setView = _useState2[1];\n\n  var startButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useRef\"])(null);\n  var buttonsRef = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useRef\"])(null);\n  var buttons = [{\n    title: 'START',\n    alt: 'Expand',\n    icon: \"\\uE700\",\n    isBold: true\n  }, {\n    title: 'All apps',\n    icon: \"\\uE179\",\n    isView: true\n  }, {\n    title: 'Documents',\n    icon: \"\\uE160\",\n    onClick: function () {\n      var _onClick = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(clickEvent) {\n        var processId;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return open({\n                  icon: '/icons/programs/explorer.png',\n                  name: 'Documents',\n                  url: '/docs'\n                }, {}, clickEvent.target);\n\n              case 2:\n                processId = _context.sent;\n                foreground(processId);\n                setShowMenu(false);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function onClick(_x) {\n        return _onClick.apply(this, arguments);\n      }\n\n      return onClick;\n    }()\n  }, {\n    title: 'Power',\n    icon: \"\\uE7E8\"\n  }];\n  return  true && /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_11__[\"createPortal\"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"nav\", {\n    children: [showMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menu,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ol\", {\n        className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttons,\n        ref: buttonsRef,\n        tabIndex: -1,\n        onMouseLeave: function onMouseLeave() {\n          var _startButtonRef$curre;\n\n          return (_startButtonRef$curre = startButtonRef.current) === null || _startButtonRef$curre === void 0 ? void 0 : _startButtonRef$curre.focus();\n        },\n        children: buttons.map(function (_ref) {\n          var alt = _ref.alt,\n              icon = _ref.icon,\n              isBold = _ref.isBold,\n              isView = _ref.isView,\n              title = _ref.title,\n              onClick = _ref.onClick;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figure\", {\n              className: view === title ? _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttonSelected : '',\n              onClick: isView ? function () {\n                return setView(view);\n              } : onClick,\n              tabIndex: -1,\n              title: alt || title,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                \"data-icon\": icon\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figcaption\", {\n                children: isBold ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"strong\", {\n                  children: title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 79,\n                  columnNumber: 31\n                }, _this) : title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 17\n            }, _this)\n          }, title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        path: \"/start\",\n        render: _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        onChange: function onChange(cwd) {\n          return !cwd && setShowMenu(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n      ref: startButtonRef,\n      className: \"\".concat(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.start, \" \").concat(showMenu && _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menuOpen),\n      type: \"button\",\n      title: \"Start\",\n      onClick: function onClick() {\n        return setShowMenu(!showMenu);\n      },\n      onBlur: function onBlur(_ref2) {\n        var _buttonsRef$current;\n\n        var relatedTarget = _ref2.relatedTarget;\n\n        if (!relatedTarget) {\n          var _startButtonRef$curre2;\n\n          startButtonRef === null || startButtonRef === void 0 ? void 0 : (_startButtonRef$curre2 = startButtonRef.current) === null || _startButtonRef$curre2 === void 0 ? void 0 : _startButtonRef$curre2.focus();\n        } else if (!((_buttonsRef$current = buttonsRef.current) === null || _buttonsRef$current === void 0 ? void 0 : _buttonsRef$current.contains(relatedTarget))) {\n          setShowMenu(false);\n        }\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faWindows\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, _this), document.body);\n};\n\n_s(StartMenu, \"oXX7vWdTp9W+iLYNiJtoGDenwzA=\");\n\n_c = StartMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"StartMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUudHN4PzQ0MDAiXSwibmFtZXMiOlsiZGVmYXVsdFZpZXciLCJTdGFydE1lbnUiLCJ1c2VDb250ZXh0IiwiUHJvY2Vzc0NvbnRleHQiLCJvcGVuIiwiU2Vzc2lvbkNvbnRleHQiLCJmb3JlZ3JvdW5kIiwidXNlU3RhdGUiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwidmlldyIsInNldFZpZXciLCJzdGFydEJ1dHRvblJlZiIsInVzZVJlZiIsImJ1dHRvbnNSZWYiLCJidXR0b25zIiwidGl0bGUiLCJhbHQiLCJpY29uIiwiaXNCb2xkIiwiaXNWaWV3Iiwib25DbGljayIsImNsaWNrRXZlbnQiLCJuYW1lIiwidXJsIiwidGFyZ2V0IiwicHJvY2Vzc0lkIiwiY3JlYXRlUG9ydGFsIiwic3R5bGVzIiwibWVudSIsImN1cnJlbnQiLCJmb2N1cyIsIm1hcCIsImJ1dHRvblNlbGVjdGVkIiwiTWVudVZpZXciLCJjd2QiLCJzdGFydCIsIm1lbnVPcGVuIiwicmVsYXRlZFRhcmdldCIsImNvbnRhaW5zIiwiZmFXaW5kb3dzIiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxVQUFwQjs7QUFFQSxJQUFNQyxTQUFtQixHQUFHLFNBQXRCQSxTQUFzQixHQUFNO0FBQUE7O0FBQUEsb0JBQ2ZDLHlEQUFVLENBQUNDLHVFQUFELENBREs7QUFBQSxNQUN4QkMsSUFEd0IsZUFDeEJBLElBRHdCOztBQUFBLHFCQUVURix5REFBVSxDQUFDRyx1RUFBRCxDQUZEO0FBQUEsTUFFeEJDLFVBRndCLGdCQUV4QkEsVUFGd0I7O0FBQUEsa0JBR0FDLHVEQUFRLENBQUMsS0FBRCxDQUhSO0FBQUEsTUFHekJDLFFBSHlCO0FB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Q0FBcEQ7QUFtREQsQ0FoR0Q7O0dBQU16QyxTOztLQUFBQSxTO0FBa0dTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1Rhc2tiYXIvU3RhcnRNZW51LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvU3RhcnRNZW51Lm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IEZpbGVNYW5hZ2VyIGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvRmlsZU1hbmFnZXInO1xuaW1wb3J0IE1lbnVWaWV3IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvTWVudVZpZXcnO1xuaW1wb3J0IHsgZmFXaW5kb3dzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgUHJvY2Vzc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Byb2Nlc3NNYW5hZ2VyJztcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9TZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3QgZGVmYXVsdFZpZXcgPSAnQWxsIGFwcHMnO1xuXG5jb25zdCBTdGFydE1lbnU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IG9wZW4gfSA9IHVzZUNvbnRleHQoUHJvY2Vzc0NvbnRleHQpO1xuICBjb25zdCB7IGZvcmVncm91bmQgfSA9IHVzZUNvbnRleHQoU2Vzc2lvbkNvbnRleHQpO1xuICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoZGVmYXVsdFZpZXcpO1xuICBjb25zdCBzdGFydEJ1dHRvblJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGJ1dHRvbnNSZWYgPSB1c2VSZWY8SFRNTE9MaXN0RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ1NUQVJUJyxcbiAgICAgIGFsdDogJ0V4cGFuZCcsXG4gICAgICBpY29uOiAnXFx1ZTcwMCcsXG4gICAgICBpc0JvbGQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQWxsIGFwcHMnLFxuICAgICAgaWNvbjogJ1xcdWUxNzknLFxuICAgICAgaXNWaWV3OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0RvY3VtZW50cycsXG4gICAgICBpY29uOiAnXFx1ZTE2MCcsXG4gICAgICBvbkNsaWNrOiBhc3luYyAoXG4gICAgICAgIGNsaWNrRXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICAgICApID0+IHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0lkID0gYXdhaXQgb3BlbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZycsXG4gICAgICAgICAgICBuYW1lOiAnRG9jdW1lbnRzJyxcbiAgICAgICAgICAgIHVybDogJy9kb2NzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge30sXG4gICAgICAgICAgY2xpY2tFdmVudC50YXJnZXRcbiAgICAgICAgKTtcbiAgICAgICAgZm9yZWdyb3VuZChwcm9jZXNzSWQpO1xuICAgICAgICBzZXRTaG93TWVudShmYWxzZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1Bvd2VyJyxcbiAgICAgIGljb246ICdcXHVlN2U4J1xuICAgIH1cbiAgXTtcblxuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgY3JlYXRlUG9ydGFsKFxuICAgIDxuYXY+XG4gICAgICB7c2hvd01lbnUgJiYgKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxuICAgICAgICAgIDxvbFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc31cbiAgICAgICAgICAgIHJlZj17YnV0dG9uc1JlZn1cbiAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc3RhcnRCdXR0b25SZWYuY3VycmVudD8uZm9jdXMoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YnV0dG9ucy5tYXAoKHsgYWx0LCBpY29uLCBpc0JvbGQsIGlzVmlldywgdGl0bGUsIG9uQ2xpY2sgfSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXt0aXRsZX0+XG4gICAgICAgICAgICAgICAgPGZpZ3VyZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt2aWV3ID09PSB0aXRsZSA/IHN0eWxlcy5idXR0b25TZWxlY3RlZCA6ICcnfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aXNWaWV3ID8gKCkgPT4gc2V0Vmlldyh2aWV3KSA6IG9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17YWx0IHx8IHRpdGxlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtaWNvbj17aWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7aXNCb2xkID8gPHN0cm9uZz57dGl0bGV9PC9zdHJvbmc+IDogdGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L29sPlxuICAgICAgICAgIDxGaWxlTWFuYWdlclxuICAgICAgICAgICAgcGF0aD1cIi9zdGFydFwiXG4gICAgICAgICAgICByZW5kZXI9e01lbnVWaWV3fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhjd2QpID0+ICFjd2QgJiYgc2V0U2hvd01lbnUoZmFsc2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbmF2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b25cbiAgICAgICAgcmVmPXtzdGFydEJ1dHRvblJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3RhcnR9ICR7c2hvd01lbnUgJiYgc3R5bGVzLm1lbnVPcGVufWB9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICB0aXRsZT1cIlN0YXJ0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01lbnUoIXNob3dNZW51KX1cbiAgICAgICAgb25CbHVyPXsoeyByZWxhdGVkVGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIXJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uUmVmPy5jdXJyZW50Py5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWJ1dHRvbnNSZWYuY3VycmVudD8uY29udGFpbnMocmVsYXRlZFRhcmdldCBhcyBOb2RlKSkge1xuICAgICAgICAgICAgc2V0U2hvd01lbnUoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdpbmRvd3N9IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25hdj5cbiAgLCBkb2N1bWVudC5ib2R5KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0TWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Taskbar/StartMenu.tsx\n");

/***/ })

})