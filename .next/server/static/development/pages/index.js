module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: baseURl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURl", function() { return baseURl; });
const baseURl = 'http://localhost:3000/api';

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superagent */ "superagent");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static async getInitialProps({
    req
  }) {
    // const hostname = req ? `${req.protocol}://${req.get('Host')}` : '';
    // const baseUrl = `${hostname}/api/`;
    if (req) {
      const {
        db
      } = req;
      const list = await db.collection('Registrations').find().sort({
        createdAt: -1
      }).toArray();
      return {
        list
      };
    }

    const {
      list
    } = await superagent__WEBPACK_IMPORTED_MODULE_2__["get"](_config__WEBPACK_IMPORTED_MODULE_3__["baseURl"]).then(res => res.body);
    return {
      list
    };
  }

  constructor() {
    super();
    this.state = {
      formData: {
        email: '',
        name: '',
        phone: '',
        type: '',
        count: 0
      }
    };
  }

  setForm(prop) {
    return ev => {
      const state = this.state || {};
      const formData = state.formData || {};
      this.setState(Object.assign({}, state, {
        formData: Object.assign({}, formData, {
          [prop]: ev.target.value
        })
      }));
    };
  }

  isFormInvalid() {
    const state = this.state || {};
    const formData = state.formData || {};
    return !formData.email || !formData.name || !formData.phone || !formData.type || !formData.count;
  }

  remove(_id) {
    return ev => {
      superagent__WEBPACK_IMPORTED_MODULE_2__["del"](`${_config__WEBPACK_IMPORTED_MODULE_3__["baseURl"]}/${_id}`).then(() => {
        const state = this.state || {};
        const list = this.state.list || this.props.list || [];
        this.setState(Object.assign({}, state, {
          list: list.filter(registration => registration._id !== _id)
        }));
      }).catch(error => console.error(error.stack));
    };
  }

  add() {
    return ev => {
      ev.preventDefault();
      const state = this.state || {};
      const formData = state.formData || {};
      this.setState(Object.assign({}, this.state, {
        formData: {
          email: '',
          name: '',
          phone: '',
          type: '',
          count: 0
        }
      }));
      superagent__WEBPACK_IMPORTED_MODULE_2__["post"](_config__WEBPACK_IMPORTED_MODULE_3__["baseURl"], formData).then(res => {
        const state = this.state || {};
        const list = this.state.list || this.props.list || [];
        debugger;
        this.setState(Object.assign({}, state, {
          list: [res.body.registration].concat(list)
        }));
      }).catch(error => console.error(error.stack));
    };
  }

  render() {
    const list = this.state.list || this.props.list;
    const {
      formData
    } = this.state;
    console.log(this.props.query);
    return __jsx("div", {
      id: "container",
      className: "jsx-2512804896"
    }, __jsx("h1", {
      className: "jsx-2512804896"
    }, "New Book"), __jsx("div", {
      id: "input-registration",
      className: "jsx-2512804896"
    }, __jsx("form", {
      onSubmit: this.add(),
      className: "jsx-2512804896"
    }, __jsx("input", {
      type: "text",
      onChange: this.setForm('name'),
      value: formData.name,
      placeholder: "Name",
      className: "jsx-2512804896"
    }), __jsx("input", {
      type: "text",
      onChange: this.setForm('email'),
      value: formData.email,
      placeholder: "Email",
      className: "jsx-2512804896"
    }), __jsx("input", {
      type: "text",
      onChange: this.setForm('phone'),
      value: formData.phone,
      placeholder: "Phone",
      className: "jsx-2512804896"
    }), __jsx("input", {
      type: "text",
      onChange: this.setForm('type'),
      value: formData.type,
      placeholder: "Ticket Type",
      className: "jsx-2512804896"
    }), __jsx("input", {
      type: "text",
      onChange: this.setForm('count'),
      value: formData.count,
      placeholder: "Count",
      className: "jsx-2512804896"
    }), __jsx("button", {
      disabled: this.isFormInvalid(),
      className: "jsx-2512804896"
    }, "Add"))), __jsx("h1", {
      className: "jsx-2512804896"
    }, "Registrations"), __jsx("div", {
      id: "registrations",
      className: "jsx-2512804896"
    }, list.length > 0 && __jsx("ul", {
      className: "jsx-2512804896"
    }, list.map(registration => __jsx("div", {
      key: registration._id,
      className: "jsx-2512804896"
    }, __jsx("span", {
      onClick: this.remove(registration._id),
      className: "jsx-2512804896" + " " + "remove"
    }, "\xD7"), "\xA0", __jsx("span", {
      className: "jsx-2512804896" + " " + "description"
    }, __jsx("i", {
      className: "jsx-2512804896"
    }, registration.name), " by ", registration.email), __jsx("span", {
      className: "jsx-2512804896" + " " + "phone"
    }, registration.phone), __jsx("span", {
      className: "jsx-2512804896" + " " + "type"
    }, registration.type), __jsx("span", {
      className: "jsx-2512804896" + " " + "count"
    }, registration.count))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2512804896"
    }, "div.jsx-2512804896{font-family:'Helvetica','sans-serif';}#container.jsx-2512804896{width:800px;margin-left:auto;margin-right:auto;}h1.jsx-2512804896{color:#ccbc1d;}button.jsx-2512804896{background-color:#ff257b;color:#ffffff;font-weight:bold;border:0px;border-radius:2px;padding:5px;padding-left:8px;padding-right:8px;margin:5px;}input.jsx-2512804896{padding:5px;border:0px;background-color:#f0f0f0;margin:5px;}.description.jsx-2512804896{position:relative;top:-0.2em;}.remove.jsx-2512804896{cursor:pointer;color:#ff257b;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVmYW5mcmFuY2lzL1BlcnNvbmFsL3dvcmsvcGFreW8tYmFja2VuZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SW9CLEFBR21ELEFBRzFCLEFBS0UsQUFHVyxBQVdiLEFBTU0sQUFJSCxZQTVCRSxBQW1CTixFQWRiLENBd0JnQixHQUpILEtBTGMsRUFaWCxJQVBJLEFBeUJwQixBQUlrQixRQWpDbEIsRUFZbUIsTUFzQm5CLEVBN0JBLENBbUJhLFFBWEEsR0FZYixRQVhvQixrQkFDTixZQUNLLGlCQUNDLGtCQUNQLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3N0ZWZhbmZyYW5jaXMvUGVyc29uYWwvd29yay9wYWt5by1iYWNrZW5kL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgc3VwZXJhZ2VudCBmcm9tICdzdXBlcmFnZW50J1xuaW1wb3J0IHsgYmFzZVVSbCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyByZXEgfSkge1xuICAgIC8vIGNvbnN0IGhvc3RuYW1lID0gcmVxID8gYCR7cmVxLnByb3RvY29sfTovLyR7cmVxLmdldCgnSG9zdCcpfWAgOiAnJztcbiAgICAvLyBjb25zdCBiYXNlVXJsID0gYCR7aG9zdG5hbWV9L2FwaS9gO1xuICAgIGlmIChyZXEpIHtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcVxuICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ1JlZ2lzdHJhdGlvbnMnKS5maW5kKCkuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSlcbiAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgcmV0dXJuIHsgbGlzdCB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBsaXN0IH0gPSBhd2FpdCBzdXBlcmFnZW50LmdldChiYXNlVVJsKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5ib2R5KVxuICAgIHJldHVybiB7IGxpc3QgfVxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0geyBmb3JtRGF0YTogeyBlbWFpbDogJycsIG5hbWU6ICcnLCBwaG9uZTogJycsIHR5cGU6ICcnLCBjb3VudDogMCB9IH1cbiAgfVxuXG4gIHNldEZvcm0gKHByb3ApIHtcbiAgICByZXR1cm4gZXYgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlIHx8IHt9XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IHN0YXRlLmZvcm1EYXRhIHx8IHt9XG4gICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGZvcm1EYXRhOiBPYmplY3QuYXNzaWduKHt9LCBmb3JtRGF0YSwge1xuICAgICAgICAgIFtwcm9wXTogZXYudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb3JtSW52YWxpZCAoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlIHx8IHt9XG4gICAgY29uc3QgZm9ybURhdGEgPSBzdGF0ZS5mb3JtRGF0YSB8fCB7fVxuICAgIHJldHVybiAhZm9ybURhdGEuZW1haWwgfHwgIWZvcm1EYXRhLm5hbWUgfHwgIWZvcm1EYXRhLnBob25lIHx8ICFmb3JtRGF0YS50eXBlIHx8ICFmb3JtRGF0YS5jb3VudFxuICB9XG5cbiAgcmVtb3ZlIChfaWQpIHtcbiAgICByZXR1cm4gZXYgPT4ge1xuICAgICAgc3VwZXJhZ2VudC5kZWwoYCR7YmFzZVVSbH0vJHtfaWR9YClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZSB8fCB7fVxuICAgICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLnN0YXRlLmxpc3QgfHwgdGhpcy5wcm9wcy5saXN0IHx8IFtdXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgbGlzdDogbGlzdC5maWx0ZXIocmVnaXN0cmF0aW9uID0+IHJlZ2lzdHJhdGlvbi5faWQgIT09IF9pZClcbiAgICAgICAgICB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3Iuc3RhY2spKVxuICAgIH1cbiAgfVxuXG4gIGFkZCAoKSB7XG4gICAgcmV0dXJuIGV2ID0+IHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZSB8fCB7fVxuICAgICAgY29uc3QgZm9ybURhdGEgPSBzdGF0ZS5mb3JtRGF0YSB8fCB7fVxuICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XG4gICAgICAgIGZvcm1EYXRhOiB7IGVtYWlsOiAnJywgbmFtZTogJycsIHBob25lOiAnJywgdHlwZTogJycsIGNvdW50OiAwIH1cbiAgICAgIH0pKVxuXG4gICAgICBzdXBlcmFnZW50LnBvc3QoYmFzZVVSbCwgZm9ybURhdGEpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlIHx8IHt9XG4gICAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuc3RhdGUubGlzdCB8fCB0aGlzLnByb3BzLmxpc3QgfHwgW11cbiAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBsaXN0OiBbcmVzLmJvZHkucmVnaXN0cmF0aW9uXS5jb25jYXQobGlzdClcbiAgICAgICAgICB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3Iuc3RhY2spKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuc3RhdGUubGlzdCB8fCB0aGlzLnByb3BzLmxpc3RcbiAgICBjb25zdCB7IGZvcm1EYXRhIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5xdWVyeSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxPlxuICAgICAgICBOZXcgQm9va1xuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgaWQ9XCJpbnB1dC1yZWdpc3RyYXRpb25cIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuYWRkKCl9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0Rm9ybSgnbmFtZScpfVxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0Rm9ybSgnZW1haWwnKX1cbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0Rm9ybSgncGhvbmUnKX1cbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIiAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0Rm9ybSgndHlwZScpfVxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnR5cGV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpY2tldCBUeXBlXCIgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNldEZvcm0oJ2NvdW50Jyl9XG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY291bnR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvdW50XCIgLz5cbiAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLmlzRm9ybUludmFsaWQoKX0+QWRkPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgUmVnaXN0cmF0aW9uc1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGlkPVwicmVnaXN0cmF0aW9uc1wiPlxuICAgICAgICAgIHtsaXN0Lmxlbmd0aCA+IDAgXG4gICAgICAgICAgJiYgPHVsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaXN0Lm1hcChyZWdpc3RyYXRpb24gPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyZWdpc3RyYXRpb24uX2lkfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbW92ZVwiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlKHJlZ2lzdHJhdGlvbi5faWQpfT5cbiAgICAgICAgICAgICAgICAgICAgJnRpbWVzO1xuICAgICAgICAgICAgICAgICAgPC9zcGFuPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGk+e3JlZ2lzdHJhdGlvbi5uYW1lfTwvaT4gYnkge3JlZ2lzdHJhdGlvbi5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBob25lXCI+e3JlZ2lzdHJhdGlvbi5waG9uZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eXBlXCI+e3JlZ2lzdHJhdGlvbi50eXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+e3JlZ2lzdHJhdGlvbi5jb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJywgJ3NhbnMtc2VyaWYnO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogI2NjYmMxZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjI1N2I7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTAuMmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVtb3ZlIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmYyNTdiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/stefanfrancis/Personal/work/pakyo-backend/pages/index.js */"));
  }

});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stefanfrancis/Personal/work/pakyo-backend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map