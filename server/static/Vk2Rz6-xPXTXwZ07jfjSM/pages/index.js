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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "superagent"
var external_superagent_ = __webpack_require__("iHmL");

// CONCATENATED MODULE: ./config/index.js
const baseURl = 'http://localhost:3000/api';
// CONCATENATED MODULE: ./pages/index.js

var __jsx = external_react_default.a.createElement;



/* harmony default export */ var pages = __webpack_exports__["default"] = (class extends external_react_default.a.Component {
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
    } = await external_superagent_["get"](baseURl).then(res => res.body);
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
      external_superagent_["del"](`${baseURl}/${_id}`).then(() => {
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
      external_superagent_["post"](baseURl, formData).then(res => {
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
    }, registration.count))))), __jsx(style_default.a, {
      id: "2512804896"
    }, ["div.jsx-2512804896{font-family:'Helvetica','sans-serif';}", "#container.jsx-2512804896{width:800px;margin-left:auto;margin-right:auto;}", "h1.jsx-2512804896{color:#ccbc1d;}", "button.jsx-2512804896{background-color:#ff257b;color:#ffffff;font-weight:bold;border:0px;border-radius:2px;padding:5px;padding-left:8px;padding-right:8px;margin:5px;}", "input.jsx-2512804896{padding:5px;border:0px;background-color:#f0f0f0;margin:5px;}", ".description.jsx-2512804896{position:relative;top:-0.2em;}", ".remove.jsx-2512804896{cursor:pointer;color:#ff257b;font-size:1.5em;}"]));
  }

});

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "iHmL":
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ })

/******/ });