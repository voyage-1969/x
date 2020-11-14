webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/StartMenu.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/StartMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/System/Taskbar/StartMenu.module.scss */ \"./styles/System/Taskbar/StartMenu.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/System/FileManager/FileManager */ \"./components/System/FileManager/FileManager.tsx\");\n/* harmony import */ var _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/System/FileManager/MenuView */ \"./components/System/FileManager/MenuView.tsx\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/StartMenu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar defaultView = 'All apps';\n\nvar ButtonsBar = function ButtonsBar(_ref) {\n  _s();\n\n  var startButtonRef = _ref.startButtonRef,\n      buttonsRef = _ref.buttonsRef,\n      buttons = _ref.buttons,\n      mainRef = _ref.mainRef;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])(defaultView),\n      view = _useState[0],\n      setView = _useState[1];\n\n  return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_7__[\"createPortal\"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"ol\", {\n    className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttons,\n    ref: buttonsRef,\n    tabIndex: -1,\n    onMouseLeave: function onMouseLeave() {\n      var _startButtonRef$curre;\n\n      return (_startButtonRef$curre = startButtonRef.current) === null || _startButtonRef$curre === void 0 ? void 0 : _startButtonRef$curre.focus();\n    },\n    children: buttons.map(function (_ref2) {\n      var alt = _ref2.alt,\n          icon = _ref2.icon,\n          isBold = _ref2.isBold,\n          isView = _ref2.isView,\n          title = _ref2.title,\n          onClick = _ref2.onClick;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"figure\", {\n          className: view === title ? _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonSelected : '',\n          onClick: isView ? function () {\n            return setView(view);\n          } : onClick,\n          tabIndex: -1,\n          title: alt || title,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"span\", {\n            \"data-icon\": icon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"figcaption\", {\n            children: isBold ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"strong\", {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 27\n            }, _this) : title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, _this)\n      }, title, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this), mainRef.current);\n};\n\n_s(ButtonsBar, \"IyUB6GJ0sTToKegw7/kG1qhjB9Q=\");\n\n_c = ButtonsBar;\n\nvar StartMenu = function StartMenu() {\n  _s2();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_10__[\"ProcessContext\"]),\n      open = _useContext.open;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_11__[\"SessionContext\"]),\n      foreground = _useContext2.foreground;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])(false),\n      showMenu = _useState2[0],\n      setShowMenu = _useState2[1];\n\n  var startButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useRef\"])(null);\n  var buttonsRef = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useRef\"])(null);\n  var mainRef = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useRef\"])(null);\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])(false),\n      mounted = _useState3[0],\n      setMounted = _useState3[1];\n\n  var buttons = [{\n    title: 'START',\n    alt: 'Expand',\n    icon: \"\\uE700\",\n    isBold: true\n  }, {\n    title: 'All apps',\n    icon: \"\\uE179\",\n    isView: true\n  }, {\n    title: 'Documents',\n    icon: \"\\uE160\",\n    onClick: function () {\n      var _onClick = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(clickEvent) {\n        var processId;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return open({\n                  icon: '/icons/programs/explorer.png',\n                  name: 'Documents',\n                  url: '/docs'\n                }, {}, clickEvent.target);\n\n              case 2:\n                processId = _context.sent;\n                foreground(processId);\n                setShowMenu(false);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function onClick(_x) {\n        return _onClick.apply(this, arguments);\n      }\n\n      return onClick;\n    }()\n  }, {\n    title: 'Power',\n    icon: \"\\uE7E8\"\n  }];\n  Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useEffect\"])(function () {\n    var _document$getElements = document.getElementsByTagName('main'),\n        _document$getElements2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_document$getElements, 1),\n        mainElement = _document$getElements2[0];\n\n    mainRef.current = mainElement;\n    setMounted(true);\n  }, []);\n  return mounted ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_7__[\"createPortal\"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"nav\", {\n    children: [showMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menu,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(ButtonsBar, {\n        startButtonRef: startButtonRef,\n        buttonsRef: buttonsRef,\n        buttons: buttons,\n        mainRef: mainRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 15\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        path: \"/start\",\n        render: _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        onChange: function onChange(cwd) {\n          return !cwd && setShowMenu(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 15\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"button\", {\n      ref: startButtonRef,\n      className: \"\".concat(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.start, \" \").concat(showMenu && _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuOpen),\n      type: \"button\",\n      title: \"Start\",\n      onClick: function onClick() {\n        return setShowMenu(!showMenu);\n      },\n      onBlur: function onBlur(_ref3) {\n        var _buttonsRef$current;\n\n        var relatedTarget = _ref3.relatedTarget;\n\n        if (!relatedTarget) {\n          var _startButtonRef$curre2;\n\n          startButtonRef === null || startButtonRef === void 0 ? void 0 : (_startButtonRef$curre2 = startButtonRef.current) === null || _startButtonRef$curre2 === void 0 ? void 0 : _startButtonRef$curre2.focus();\n        } else if (!((_buttonsRef$current = buttonsRef.current) === null || _buttonsRef$current === void 0 ? void 0 : _buttonsRef$current.contains(relatedTarget))) {\n          setShowMenu(false);\n        }\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faWindows\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 11\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 9\n  }, _this), mainRef.current) : null;\n};\n\n_s2(StartMenu, \"oC5Zv/7q8osFNoq25BDKh3fsuV0=\");\n\n_c2 = StartMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartMenu);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ButtonsBar\");\n$RefreshReg$(_c2, \"StartMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUudHN4PzQ0MDAiXSwibmFtZXMiOlsiZGVmYXVsdFZpZXciLCJCdXR0b25zQmFyIiwic3RhcnRCdXR0b25SZWYiLCJidXR0b25zUmVmIiwiYnV0dG9ucyIsIm1haW5SZWYiLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3IiwiY3JlYXRlUG9ydGFsIiwic3R5bGVzIiwiY3VycmVudCIsImZvY3VzIiwibWFwIiwiYWx0IiwiaWNvbiIsImlzQm9sZCIsImlzVmlldyIsInRpdGxlIiwib25DbGljayIsImJ1dHRvblNlbGVjdGVkIiwiU3RhcnRNZW51IiwidXNlQ29udGV4dCIsIlByb2Nlc3NDb250ZXh0Iiwib3BlbiIsIlNlc3Npb25Db250ZXh0IiwiZm9yZWdyb3VuZCIsInNob3dNZW51Iiwic2V0U2hvd01lbnUiLCJ1c2VSZWYiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsImNsaWNrRXZlbnQiLCJuYW1lIiwidXJsIiwidGFyZ2V0IiwicHJvY2Vzc0lkIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm1haW5FbGVtZW50IiwibWVudSIsIk1lbnVWaWV3IiwiY3dkIiwic3RhcnQiLCJtZW51T3BlbiIsInJlbGF0ZWRUYXJnZXQiLCJjb250YWlucyIsImZhV2luZG93cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsVUFBcEI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FLYjtBQUFBOztBQUFBLE1BSkpDLGNBSUksUUFKSkEsY0FJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLE9BRUksUUFGSkEsT0FFSTtBQUFBLE1BREpDLE9BQ0ksUUFE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QyxLQUFELENBQTVCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFnQkU7QUFDRSxTQUFHLEVBQUUxQixjQURQO0FBRUUsZUFBUyxZQUFLUSxtRkFBTSxDQUFDa0MsS0FBWixjQUFxQmpCLFFBQVEsSUFBSWpCLG1GQUFNLENBQUNtQyxRQUF4QyxDQUZYO0FBR0UsVUFBSSxFQUFDLFFBSFA7QUFJRSxXQUFLLEVBQUMsT0FKUjtBQUtFLGFBQU8sRUFBRTtBQUFBLGVBQU1qQixXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLE9BTFg7QUFNRSxZQUFNLEVBQUUsdUJBQXVCO0FBQUE7O0FBQUEsWUFBcEJtQixhQUFvQixTQUFwQkEsYUFBb0I7O0FBQzdCLFlBQUksQ0FBQ0EsYUFBTCxFQUFvQjtBQUFBOztBQUNsQjVDLHdCQUFjLFNBQWQsSUFBQUEsY0FBYyxXQUFkLHNDQUFBQSxjQUFjLENBQUVTLE9BQWhCLGtGQUF5QkMsS0FBekI7QUFDRCxTQUZELE1BRU8sSUFBSSx5QkFBQ1QsVUFBVSxDQUFDUSxPQUFaLHdEQUFDLG9CQUFvQm9DLFFBQXBCLENBQTZCRCxhQUE3QixDQUFELENBQUosRUFBMEQ7QUFDL0RsQixxQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNEO0FBQ0YsT0FaSDtBQUFBLDZCQWNFLHFFQUFDLDhFQUFEO0FBQWlCLFlBQUksRUFBRW9CLDRFQUFTQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEVSxFQWtDVjNDLE9BQU8sQ0FBQ00sT0FsQ0UsQ0FERixHQXFDVixJQXJDSjtBQXNDRCxDQTVGRDs7SUFBTVUsUzs7TUFBQUEsUztBQThGU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCBGaWxlTWFuYWdlciBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0ZpbGVNYW5hZ2VyJztcbmltcG9ydCBNZW51VmlldyBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL01lbnVWaWV3JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBmYVdpbmRvd3MgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBQcm9jZXNzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvUHJvY2Vzc01hbmFnZXInO1xuaW1wb3J0IHsgU2Vzc2lvbkNvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Nlc3Npb25NYW5hZ2VyJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZGVmYXVsdFZpZXcgPSAnQWxsIGFwcHMnO1xuXG5jb25zdCBCdXR0b25zQmFyID0gKHtcbiAgc3RhcnRCdXR0b25SZWYsXG4gIGJ1dHRvbnNSZWYsXG4gIGJ1dHRvbnMsXG4gIG1haW5SZWZcbn0pID0+IHtcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoZGVmYXVsdFZpZXcpO1xuXG4gIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgPG9sXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfVxuICAgICAgcmVmPXtidXR0b25zUmVmfVxuICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzdGFydEJ1dHRvblJlZi5jdXJyZW50Py5mb2N1cygpfVxuICAgID5cbiAgICAgIHtidXR0b25zLm1hcChcbiAgICAgICAgKHsgYWx0LCBpY29uLCBpc0JvbGQsIGlzVmlldywgdGl0bGUsIG9uQ2xpY2sgfSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3RpdGxlfT5cbiAgICAgICAgICAgIDxmaWd1cmVcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXt2aWV3ID09PSB0aXRsZSA/IHN0eWxlcy5idXR0b25TZWxlY3RlZCA6ICcnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtpc1ZpZXcgPyAoKSA9PiBzZXRWaWV3KHZpZXcpIDogb25DbGlja31cbiAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgICB0aXRsZT17YWx0IHx8IHRpdGxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLWljb249e2ljb259IC8+XG4gICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgIHtpc0JvbGQgPyA8c3Ryb25nPnt0aXRsZX08L3N0cm9uZz4gOiB0aXRsZX1cbiAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKVxuICAgICAgKX1cbiAgICA8L29sPlxuICAsIG1haW5SZWYuY3VycmVudCBhcyBIVE1MRWxlbWVudCk7XG59XG5cbmNvbnN0IFN0YXJ0TWVudTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgb3BlbiB9ID0gdXNlQ29udGV4dChQcm9jZXNzQ29udGV4dCk7XG4gIGNvbnN0IHsgZm9yZWdyb3VuZCB9ID0gdXNlQ29udGV4dChTZXNzaW9uQ29udGV4dCk7XG4gIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgY29uc3Qgc3RhcnRCdXR0b25SZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBidXR0b25zUmVmID0gdXNlUmVmPEhUTUxPTGlzdEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBtYWluUmVmID0gdXNlUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBidXR0b25zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnU1RBUlQnLFxuICAgICAgYWx0OiAnRXhwYW5kJyxcbiAgICAgIGljb246ICdcXHVlNzAwJyxcbiAgICAgIGlzQm9sZDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdBbGwgYXBwcycsXG4gICAgICBpY29uOiAnXFx1ZTE3OScsXG4gICAgICBpc1ZpZXc6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRG9jdW1lbnRzJyxcbiAgICAgIGljb246ICdcXHVlMTYwJyxcbiAgICAgIG9uQ2xpY2s6IGFzeW5jIChcbiAgICAgICAgY2xpY2tFdmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD5cbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCBwcm9jZXNzSWQgPSBhd2FpdCBvcGVuKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICcvaWNvbnMvcHJvZ3JhbXMvZXhwbG9yZXIucG5nJyxcbiAgICAgICAgICAgIG5hbWU6ICdEb2N1bWVudHMnLFxuICAgICAgICAgICAgdXJsOiAnL2RvY3MnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBjbGlja0V2ZW50LnRhcmdldFxuICAgICAgICApO1xuICAgICAgICBmb3JlZ3JvdW5kKHByb2Nlc3NJZCk7XG4gICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnUG93ZXInLFxuICAgICAgaWNvbjogJ1xcdWU3ZTgnXG4gICAgfVxuICBdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgW21haW5FbGVtZW50XSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJyk7XG5cbiAgICBtYWluUmVmLmN1cnJlbnQgPSBtYWluRWxlbWVudDtcbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG1vdW50ZWRcbiAgICA/IGNyZWF0ZVBvcnRhbChcbiAgICAgICAgPG5hdj5cbiAgICAgICAgICB7c2hvd01lbnUgJiYgKFxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cbiAgICAgICAgICAgICAgPEJ1dHRvbnNCYXJcbiAgICAgICAgICAgICAgICBzdGFydEJ1dHRvblJlZj17c3RhcnRCdXR0b25SZWZ9XG4gICAgICAgICAgICAgICAgYnV0dG9uc1JlZj17YnV0dG9uc1JlZn1cbiAgICAgICAgICAgICAgICBidXR0b25zPXtidXR0b25zfVxuICAgICAgICAgICAgICAgIG1haW5SZWY9e21haW5SZWZ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxGaWxlTWFuYWdlclxuICAgICAgICAgICAgICAgIHBhdGg9XCIvc3RhcnRcIlxuICAgICAgICAgICAgICAgIHJlbmRlcj17TWVudVZpZXd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjd2QpID0+ICFjd2QgJiYgc2V0U2hvd01lbnUoZmFsc2UpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICByZWY9e3N0YXJ0QnV0dG9uUmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3RhcnR9ICR7c2hvd01lbnUgJiYgc3R5bGVzLm1lbnVPcGVufWB9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHRpdGxlPVwiU3RhcnRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01lbnUoIXNob3dNZW51KX1cbiAgICAgICAgICAgIG9uQmx1cj17KHsgcmVsYXRlZFRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghcmVsYXRlZFRhcmdldCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0QnV0dG9uUmVmPy5jdXJyZW50Py5mb2N1cygpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFidXR0b25zUmVmLmN1cnJlbnQ/LmNvbnRhaW5zKHJlbGF0ZWRUYXJnZXQgYXMgTm9kZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRTaG93TWVudShmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdpbmRvd3N9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmF2PixcbiAgICAgICAgbWFpblJlZi5jdXJyZW50IGFzIEhUTUxFbGVtZW50XG4gICAgICApXG4gICAgOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnRNZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Taskbar/StartMenu.tsx\n");

/***/ })

})