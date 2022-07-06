/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    appearance: none;\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    pointer-events: none;\r\n}\r\n\r\nhtml,\r\nbody,\r\nul,\r\nli {\r\n     margin: 0;\r\n     padding: 0;\r\n}\r\n\r\nul,\r\nli {\r\n     list-style-type: none;\r\n}\r\n\r\nheader {\r\n     background-color: red;\r\n     color: whitesmoke;\r\n     display: grid;\r\n     grid-template-columns: 50px auto 3rem;\r\n     gap: 0.3rem;\r\n     padding: 0 2rem;\r\n}\r\n\r\nheader > div:nth-child(3) {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.logo-container {\r\n    display: grid;\r\n    place-items: center;\r\n    padding: 0 0.3rem;\r\n}\r\n\r\n.logo-container > img {\r\n     display: grid;\r\n     place-items: center;\r\n     border-radius: 100%;\r\n}\r\n\r\n.logo-title {\r\n    font-size: clamp(1rem, 1vw, 3rem);\r\n}\r\n\r\n.content {\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    height: 100vh;\r\n}\r\n\r\n.sidebar {\r\n    background-color: #e2e8f0;\r\n    padding: 0.5rem 1rem;\r\n}\r\n\r\n.sidebar > ul {\r\n    display:flex;\r\n    flex-direction: column;\r\n    font-size: clamp(1.5rem, 1.5vw, 2rem);\r\n    gap: 0.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\nspan {\r\n    text-align: center;\r\n}\r\n\r\n.projects-container{\r\n    font-size: clamp(1.3rem, 1.3vw, 1.5rem);\r\n    padding-left: 0.5rem;\r\n    font-weight: 100;\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* justify-content: center; */\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.projects-container > li{\r\n    align-self: flex-end;\r\n}\r\n\r\n.project-button {\r\n    appearance: none;\r\n    border: none;\r\n    border-radius: 50%;\r\n    font-size: 2rem;\r\n    padding: 0 0.6rem;\r\n    width: 25%;\r\n    align-self: center;\r\n}\r\n\r\n.sidebar > ul > li {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    flex-basis: 100%;\r\n}\r\n\r\n.sidebar > ul > li:nth-child(3) {\r\n    flex-direction: column;\r\n}\r\n\r\n.sidebar > ul > li:nth-child(3) > div {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.sidebar img {\r\n    width: min(15%, 3rem);\r\n    height: min(15%, 3rem);\r\n    flex-shrink: 2;\r\n}\r\n\r\n.add-project-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    background-color: white;\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem;\r\n    position:absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 1rem;\r\n    box-shadow: 1px 5px 10px black;\r\n    width: min(30%,20rem);\r\n}\r\n\r\n.add-project-form > .input-container {\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n\r\n.add-project-form-buttons {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    justify-content: center;\r\n    pad: 0.5rem;\r\n}\r\n.add-project-form-buttons > button {\r\n    width: 50%;\r\n}\r\n\r\n.change-priority-container,\r\n.change-project-container {\r\n    position: absolute;\r\n    top: 15%;\r\n    left: 0;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 1;\r\n    /* border-radius: 1rem; */\r\n    /* box-shadow: 1px 5px 10px black; */\r\n    /* padding: 2rem; */\r\n    /* gap: 1rem; */\r\n}\r\n\r\n.change-project-container {\r\n    left: 30%;\r\n}\r\n\r\n.change-priority-container > select,\r\n.change-project-container > select {\r\n    overflow: hidden;\r\n    padding: 0.2rem;\r\n}\r\n\r\n.overflow-on {\r\n    overflow: auto;   \r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,oBAAoB;AACxB;;AAEA;;;;KAIK,SAAS;KACT,UAAU;AACf;;AAEA;;KAEK,qBAAqB;AAC1B;;AAEA;KACK,qBAAqB;KACrB,iBAAiB;KACjB,aAAa;KACb,qCAAqC;KACrC,WAAW;KACX,eAAe;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;KACK,aAAa;KACb,mBAAmB;KACnB,mBAAmB;AACxB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,qCAAqC;IACrC,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uCAAuC;IACvC,oBAAoB;IACpB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;IACvB,eAAe;IACf,qBAAqB;IACrB,iBAAiB;IACjB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,mBAAmB;IACnB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;GACG,aAAa;GACb,sBAAsB;AACzB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,WAAW;AACf;AACA;IACI,UAAU;AACd;;AAEA;;IAEI,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,gCAAgC;IAChC,UAAU;IACV,yBAAyB;IACzB,oCAAoC;IACpC,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,SAAS;AACb;;AAEA;;IAEI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    appearance: none;\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    pointer-events: none;\r\n}\r\n\r\nhtml,\r\nbody,\r\nul,\r\nli {\r\n     margin: 0;\r\n     padding: 0;\r\n}\r\n\r\nul,\r\nli {\r\n     list-style-type: none;\r\n}\r\n\r\nheader {\r\n     background-color: red;\r\n     color: whitesmoke;\r\n     display: grid;\r\n     grid-template-columns: 50px auto 3rem;\r\n     gap: 0.3rem;\r\n     padding: 0 2rem;\r\n}\r\n\r\nheader > div:nth-child(3) {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.logo-container {\r\n    display: grid;\r\n    place-items: center;\r\n    padding: 0 0.3rem;\r\n}\r\n\r\n.logo-container > img {\r\n     display: grid;\r\n     place-items: center;\r\n     border-radius: 100%;\r\n}\r\n\r\n.logo-title {\r\n    font-size: clamp(1rem, 1vw, 3rem);\r\n}\r\n\r\n.content {\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    height: 100vh;\r\n}\r\n\r\n.sidebar {\r\n    background-color: #e2e8f0;\r\n    padding: 0.5rem 1rem;\r\n}\r\n\r\n.sidebar > ul {\r\n    display:flex;\r\n    flex-direction: column;\r\n    font-size: clamp(1.5rem, 1.5vw, 2rem);\r\n    gap: 0.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\nspan {\r\n    text-align: center;\r\n}\r\n\r\n.projects-container{\r\n    font-size: clamp(1.3rem, 1.3vw, 1.5rem);\r\n    padding-left: 0.5rem;\r\n    font-weight: 100;\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* justify-content: center; */\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.projects-container > li{\r\n    align-self: flex-end;\r\n}\r\n\r\n.project-button {\r\n    appearance: none;\r\n    border: none;\r\n    border-radius: 50%;\r\n    font-size: 2rem;\r\n    padding: 0 0.6rem;\r\n    width: 25%;\r\n    align-self: center;\r\n}\r\n\r\n.sidebar > ul > li {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    flex-basis: 100%;\r\n}\r\n\r\n.sidebar > ul > li:nth-child(3) {\r\n    flex-direction: column;\r\n}\r\n\r\n.sidebar > ul > li:nth-child(3) > div {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.sidebar img {\r\n    width: min(15%, 3rem);\r\n    height: min(15%, 3rem);\r\n    flex-shrink: 2;\r\n}\r\n\r\n.add-project-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    background-color: white;\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem;\r\n    position:absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 1rem;\r\n    box-shadow: 1px 5px 10px black;\r\n    width: min(30%,20rem);\r\n}\r\n\r\n.add-project-form > .input-container {\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n\r\n.add-project-form-buttons {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    justify-content: center;\r\n    pad: 0.5rem;\r\n}\r\n.add-project-form-buttons > button {\r\n    width: 50%;\r\n}\r\n\r\n.change-priority-container,\r\n.change-project-container {\r\n    position: absolute;\r\n    top: 15%;\r\n    left: 0;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 1;\r\n    /* border-radius: 1rem; */\r\n    /* box-shadow: 1px 5px 10px black; */\r\n    /* padding: 2rem; */\r\n    /* gap: 1rem; */\r\n}\r\n\r\n.change-project-container {\r\n    left: 30%;\r\n}\r\n\r\n.change-priority-container > select,\r\n.change-project-container > select {\r\n    overflow: hidden;\r\n    padding: 0.2rem;\r\n}\r\n\r\n.overflow-on {\r\n    overflow: auto;   \r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/taskForm.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/taskForm.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "form * {\r\n    appearance: none;\r\n    width: 100%;\r\n}\r\n\r\n.create-task,\r\n.edit-task {\r\n    background-color: white;\r\n    display: grid;\r\n    position:absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 1rem;\r\n    box-shadow: 1px 5px 10px black;\r\n    padding: 2rem;\r\n    gap: 1rem;\r\n}\r\n\r\n.input-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.task-form-buttons {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 2rem;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles/taskForm.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;;IAEI,uBAAuB;IACvB,aAAa;IACb,iBAAiB;IACjB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,SAAS;AACb","sourcesContent":["form * {\r\n    appearance: none;\r\n    width: 100%;\r\n}\r\n\r\n.create-task,\r\n.edit-task {\r\n    background-color: white;\r\n    display: grid;\r\n    position:absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 1rem;\r\n    box-shadow: 1px 5px 10px black;\r\n    padding: 2rem;\r\n    gap: 1rem;\r\n}\r\n\r\n.input-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.task-form-buttons {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 2rem;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/tasks.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/tasks.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-content {\r\n    padding: 0.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.task-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.task-overview {\r\n    padding: 0.2rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 0.5fr;\r\n    gap: 20vw;\r\n    border-bottom: 1px solid rgb(219, 216, 216);\r\n\r\n}\r\n\r\n.task-name {\r\n    justify-self: flex-start;\r\n    font-size: 1.2rem;\r\n    pointer-events: none;\r\n}\r\n\r\n.task-buttons {\r\n    display: flex; \r\n    gap: 1rem; \r\n    justify-self: flex-end;\r\n    position: relative;\r\n}\r\n\r\n.task-button {\r\n    width: 1.8rem;\r\n}\r\n\r\n.task-description {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));\r\n    overflow-wrap: break-word;\r\n    gap: 1rem;\r\n}\r\n\r\n.task-description > div{\r\n    padding: 0.3rem;\r\n}\r\n.task-description > div > span:nth-child(1){\r\n    font-weight: bold;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/tasks.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,aAAa;IACb,gCAAgC;IAChC,SAAS;IACT,2CAA2C;;AAE/C;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB","sourcesContent":[".main-content {\r\n    padding: 0.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.task-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.task-overview {\r\n    padding: 0.2rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 0.5fr;\r\n    gap: 20vw;\r\n    border-bottom: 1px solid rgb(219, 216, 216);\r\n\r\n}\r\n\r\n.task-name {\r\n    justify-self: flex-start;\r\n    font-size: 1.2rem;\r\n    pointer-events: none;\r\n}\r\n\r\n.task-buttons {\r\n    display: flex; \r\n    gap: 1rem; \r\n    justify-self: flex-end;\r\n    position: relative;\r\n}\r\n\r\n.task-button {\r\n    width: 1.8rem;\r\n}\r\n\r\n.task-description {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));\r\n    overflow-wrap: break-word;\r\n    gap: 1rem;\r\n}\r\n\r\n.task-description > div{\r\n    padding: 0.3rem;\r\n}\r\n.task-description > div > span:nth-child(1){\r\n    font-weight: bold;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/taskForm.css":
/*!*********************************!*\
  !*** ./src/styles/taskForm.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskForm_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./taskForm.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/taskForm.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskForm_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskForm_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskForm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskForm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/tasks.css":
/*!******************************!*\
  !*** ./src/styles/tasks.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tasks.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/tasks.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Tasks.js":
/*!**********************!*\
  !*** ./src/Tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    static lastId = 0;
    constructor(title, dueDate, description, priority, project){
        this.id = Task.lastId++;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
    
    static descriptions = ["Low", "Medium", "High"];
    static buttonImages = new Map([
        ["edit", "./img/edit.png"],
        ["priority", "./img/priority.png"],
        ["move", "./img/move.png"],
        ["delete", "./img/delete.png"],
    ])
    static descriptionFields = ["Title: ", "Due Date: ", "Description: ", "Priority: "]

    getTitle(){
        return this.title;
    }
    
    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    getProject() {
        return this.project;
    }

    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    setPriority(priority){
        this.priority = priority;
    }

    setProject(project){
        this.project = project;
    }

    getTaskId(){
        return this.id;
    }
    
}

/***/ }),

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeEditTaskButton": () => (/* binding */ closeEditTaskButton),
/* harmony export */   "closeTaskButton": () => (/* binding */ closeTaskButton),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createElementWithoutClass": () => (/* binding */ createElementWithoutClass),
/* harmony export */   "createProjectForm": () => (/* binding */ createProjectForm),
/* harmony export */   "editTaskForm": () => (/* binding */ editTaskForm),
/* harmony export */   "editTaskFormDescription": () => (/* binding */ editTaskFormDescription),
/* harmony export */   "editTaskFormPriority": () => (/* binding */ editTaskFormPriority),
/* harmony export */   "editTaskFormProject": () => (/* binding */ editTaskFormProject),
/* harmony export */   "editTaskFormTitle": () => (/* binding */ editTaskFormTitle),
/* harmony export */   "edtiTaskFormDueDate": () => (/* binding */ edtiTaskFormDueDate),
/* harmony export */   "mainContent": () => (/* binding */ mainContent),
/* harmony export */   "okTaskButton": () => (/* binding */ okTaskButton),
/* harmony export */   "projectNameField": () => (/* binding */ projectNameField),
/* harmony export */   "projectSelectList": () => (/* binding */ projectSelectList),
/* harmony export */   "taskFormDescription": () => (/* binding */ taskFormDescription),
/* harmony export */   "taskFormDueDate": () => (/* binding */ taskFormDueDate),
/* harmony export */   "taskFormPriority": () => (/* binding */ taskFormPriority),
/* harmony export */   "taskFormTitle": () => (/* binding */ taskFormTitle),
/* harmony export */   "updateEditTaskButton": () => (/* binding */ updateEditTaskButton)
/* harmony export */ });

// Project elements
const createProjectForm = document.querySelector(".add-project-form");
const projectNameField = document.querySelector("#project-name");

// Task Form elements
const okTaskButton = document.querySelector(".task-ok-button");
const closeTaskButton = document.querySelector(".task-cancel-button");
const taskFormTitle = document.querySelector("#title");
const taskFormDueDate = document.querySelector("#due-date");
const taskFormDescription = document.querySelector("#description");
const taskFormPriority = document.querySelector("#priority");
const projectSelectList = document.querySelector("#select-project");

// Task Edit Form Elements
const editTaskForm = document.querySelector(".edit-task");
const closeEditTaskButton = document.querySelector(".edit-task-cancel-button");
const updateEditTaskButton = document.querySelector(".task-update-button");
const editTaskFormTitle = document.querySelector("#edit-title");
const edtiTaskFormDueDate = document.querySelector("#edit-due-date");
const editTaskFormDescription = document.querySelector("#edit-description");
const editTaskFormPriority = document.querySelector("#edit-priority");
const editTaskFormProject = document.querySelector("#edit-select-project");

//Task elements
const mainContent = document.querySelector(".main-content");
//export const taskOverview = document.querySelectorAll(".taskOverview")


function createElement(elemType, elemClass, parentName){
    const element = document.createElement(elemType);
    element.classList.add(elemClass);
    parentName.appendChild(element);
    return element;
}

function createElementWithoutClass(elemType, parentName){
    const element = document.createElement(elemType);
    parentName.appendChild(element);
    return element;
}


/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProject": () => (/* binding */ AddProject),
/* harmony export */   "AddTask": () => (/* binding */ AddTask),
/* harmony export */   "BodyEvents": () => (/* binding */ BodyEvents),
/* harmony export */   "CloseAddProjectForm": () => (/* binding */ CloseAddProjectForm),
/* harmony export */   "CloseAddTaskForm": () => (/* binding */ CloseAddTaskForm),
/* harmony export */   "CloseEditTaskForm": () => (/* binding */ CloseEditTaskForm),
/* harmony export */   "OpenAddProjectForm": () => (/* binding */ OpenAddProjectForm),
/* harmony export */   "OpenAddTaskForm": () => (/* binding */ OpenAddTaskForm),
/* harmony export */   "OpenEditTaskForm": () => (/* binding */ OpenEditTaskForm),
/* harmony export */   "PrioritySelect": () => (/* binding */ PrioritySelect),
/* harmony export */   "ProjectSelect": () => (/* binding */ ProjectSelect),
/* harmony export */   "RemoveTask": () => (/* binding */ RemoveTask),
/* harmony export */   "ShowChangeForm": () => (/* binding */ ShowChangeForm),
/* harmony export */   "Test": () => (/* binding */ Test),
/* harmony export */   "UpdateTask": () => (/* binding */ UpdateTask),
/* harmony export */   "showDescription": () => (/* binding */ showDescription)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _renders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renders */ "./src/renders.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domElements */ "./src/domElements.js");
/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tasks */ "./src/Tasks.js");









// Task events
function OpenAddTaskForm() {
    const addTaskButton = document.querySelector(".add-task-button");
    const createTaskform = document.querySelector(".create-task");
    addTaskButton.addEventListener("click", () => {
        createTaskform.classList.toggle("hidden");
    })
}

function CloseAddTaskForm() {
    const createTaskform = document.querySelector(".create-task");
    _domElements__WEBPACK_IMPORTED_MODULE_3__.closeTaskButton.addEventListener("click", () => {
        createTaskform.classList.toggle("hidden");
    })
}

function AddTask() {
    _domElements__WEBPACK_IMPORTED_MODULE_3__.okTaskButton.addEventListener("click", () => {
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createTask)(_domElements__WEBPACK_IMPORTED_MODULE_3__.taskFormTitle, _domElements__WEBPACK_IMPORTED_MODULE_3__.taskFormDueDate,
            _domElements__WEBPACK_IMPORTED_MODULE_3__.taskFormDescription, _domElements__WEBPACK_IMPORTED_MODULE_3__.taskFormPriority, _domElements__WEBPACK_IMPORTED_MODULE_3__.projectSelectList);
        (0,_renders__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();
        showDescription();
        //console.log(Project.projects[0])
        

    })
}

function OpenEditTaskForm(button) {
    button.addEventListener("click", (e) => {
        //console.log(e.target.getAttribute("id"));
        _domElements__WEBPACK_IMPORTED_MODULE_3__.editTaskForm.classList.toggle("hidden");
        _domElements__WEBPACK_IMPORTED_MODULE_3__.editTaskForm.setAttribute("id", e.target.getAttribute("id"));
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.populateEditForm)(e.target.getAttribute("id"));
    }, true) 
}

function CloseEditTaskForm() {
    _domElements__WEBPACK_IMPORTED_MODULE_3__.closeEditTaskButton.addEventListener("click", () => {
        _domElements__WEBPACK_IMPORTED_MODULE_3__.editTaskForm.classList.toggle("hidden");
    })
}

function UpdateTask() {
    _domElements__WEBPACK_IMPORTED_MODULE_3__.updateEditTaskButton.addEventListener("click", () => {
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.updateValues)();
        (0,_renders__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();
        showDescription();
        
    })

}

function ShowChangeForm(button, form) {
    button.addEventListener("click", () => {
        form.classList.remove("hidden");
        //console.log("unhid");
    })
}

function PrioritySelect(select) {
    select.addEventListener("click", (e) => {
        console.log(e.target);
        console.log(select.value);
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getCurrentTask)(parseInt(select.getAttribute("id"))).setPriority(select.value);
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.changeDescriptionField)(parseInt(select.getAttribute("id")), select.value);
    })

}

function ProjectSelect(select){
    select.classList.add("overflow-on");
    select.addEventListener("click", (e) => {
        console.log(e.target);
        console.log(select.value);
        const task = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getCurrentTask)(parseInt(select.getAttribute("id")));
        console.log(task);
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.moveTask)(task, task.getProject(), select.value);
        task.setProject(select.value);
    })
}

function RemoveTask(button) {
    button.addEventListener("click", (e) => {
        const targetTask = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getCurrentTask)(parseInt(e.target.getAttribute("id")));
        const projectIndex = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getProjectIndex)(targetTask.getProject());
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.deleteTaskFromProject)(targetTask, projectIndex);
        (0,_renders__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();
        showDescription();

        
    })
}

// Project events
function OpenAddProjectForm() {
    const addProjectButton = document.querySelector(".project-button");
    addProjectButton.addEventListener("click", () => {
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toggleProjectForm)()
        _domElements__WEBPACK_IMPORTED_MODULE_3__.projectNameField.value = "New Project";
})
}

function CloseAddProjectForm() {
    const closeProjectButton = document.querySelector("#project-cancel-button");
    closeProjectButton.addEventListener("click", () => {
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toggleProjectForm)();
    })

}


function AddProject() {
    const okProjectButton = document.querySelector("#project-ok-button");
    okProjectButton.addEventListener("click", () => {
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createProject)(_domElements__WEBPACK_IMPORTED_MODULE_3__.projectNameField.value);
        (0,_renders__WEBPACK_IMPORTED_MODULE_2__.renderProject)();
        (0,_renders__WEBPACK_IMPORTED_MODULE_2__.renderProjectOptions)(_domElements__WEBPACK_IMPORTED_MODULE_3__.projectSelectList);
        (0,_renders__WEBPACK_IMPORTED_MODULE_2__.renderProjectOptions)(_domElements__WEBPACK_IMPORTED_MODULE_3__.editTaskFormProject);
        const selectProject = Array.from(document.querySelectorAll(".select-project"));
        selectProject.forEach((project) => {
            (0,_renders__WEBPACK_IMPORTED_MODULE_2__.renderProjectOptions)(project);
        }) 
        ;(0,_functions__WEBPACK_IMPORTED_MODULE_1__.toggleProjectForm)();
    })
}

function showDescription() {
    const taskOverview = Array.from(document.querySelectorAll(".task-overview"));
    //console.log(taskOverview);
    const taskDescription = document.querySelector(".task-description");
    taskOverview.forEach(task => task.addEventListener("click", (e) => {
        //console.log("click")
        if(e.target === e.currentTarget){
            
        e.target.nextElementSibling.classList.toggle("hidden")
        }
    }), true)
}

// export function editTask(button) {
//     button.addEventListener("click", (e) => {
//         console.log(e.target.getAttribute("id"));

//     }, true) 
// }

function Test() {
    document.querySelector(".logo-title").addEventListener("click", () => {
        console.log(_projects__WEBPACK_IMPORTED_MODULE_0__.Project.projects)
        //let currentTask = Project.projects.map((project) => project.getTasks().filter((task) => task.getTaskId() === 0))
        //console.log(currentTask);
        //let projectIndex = Project.projects.map(project => project.getName());
        //console.log(projectIndex.indexOf("My project"));
        //console.log(Project.projects[0].getName());
    })
}

function BodyEvents() {
    document.addEventListener("click", (e) => {
        //console.log("click");
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.popUpActivator)(e, ".change-priority-container");
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.popUpActivator)(e, ".change-project-container");
        // const isCLosest = e.target.closest(".change-priority-container");
        // const changePriorityForms = Array.from(document.querySelectorAll(".change-priority-container"));
        // if(!isCLosest){
        //     //console.log("hid")
        //     changePriorityForms.forEach((form) => {
        //         form.classList.add("hidden");
        //     })
        // }
        
    }, true) 
}


/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeDescriptionField": () => (/* binding */ changeDescriptionField),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "deleteTaskFromProject": () => (/* binding */ deleteTaskFromProject),
/* harmony export */   "getCurrentTask": () => (/* binding */ getCurrentTask),
/* harmony export */   "getProjectIndex": () => (/* binding */ getProjectIndex),
/* harmony export */   "moveTask": () => (/* binding */ moveTask),
/* harmony export */   "popUpActivator": () => (/* binding */ popUpActivator),
/* harmony export */   "populateEditForm": () => (/* binding */ populateEditForm),
/* harmony export */   "toggleProjectForm": () => (/* binding */ toggleProjectForm),
/* harmony export */   "updateValues": () => (/* binding */ updateValues)
/* harmony export */ });
/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks */ "./src/Tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements */ "./src/domElements.js");




function createProject(name){
    const project = new _projects__WEBPACK_IMPORTED_MODULE_1__.Project(name);
    _projects__WEBPACK_IMPORTED_MODULE_1__.Project.projects.push(project);
}

function toggleProjectForm() {
    _domElements__WEBPACK_IMPORTED_MODULE_2__.createProjectForm.classList.toggle("hidden");
}

function addTaskToProject(task){
    for( const project of _projects__WEBPACK_IMPORTED_MODULE_1__.Project.projects){
        if(project.getName() === task.getProject()){
            project.addTask(task);
            break;
        }
    }
}

function createTask(title, dueDate, description, priority, project){
    const task  = new _Tasks__WEBPACK_IMPORTED_MODULE_0__.Task(title.value, dueDate.value, description.value, priority.value, project.value);
    addTaskToProject(task);   
    //console.log(task.getTaskId());
    //console.log(getCurrentTask(0));
}

function populateEditForm(id){
    const currentTask = getCurrentTask(parseInt(id));
    //console.log(currentTask);
    _domElements__WEBPACK_IMPORTED_MODULE_2__.editTaskFormTitle.value = currentTask.getTitle();
    _domElements__WEBPACK_IMPORTED_MODULE_2__.edtiTaskFormDueDate.value = currentTask.getDueDate();
    _domElements__WEBPACK_IMPORTED_MODULE_2__.editTaskFormDescription.value = currentTask.getDescription();
    _domElements__WEBPACK_IMPORTED_MODULE_2__.editTaskFormPriority.value = currentTask.getPriority();
    _domElements__WEBPACK_IMPORTED_MODULE_2__.editTaskFormProject.value = currentTask.getProject();


}

function getCurrentTask(id) {
    let currentTask = ""
    //Возвращает array в которм находится определенная Task
    // currentTask = Project.projects.map((project) => project.getTasks().filter((task) => task.getTaskId() === id))

    // Возвращает определенную Task.
    for (let project of _projects__WEBPACK_IMPORTED_MODULE_1__.Project.projects) {
        currentTask = project.getTasks().filter((task) => task.getTaskId() === id);
        if(typeof currentTask[0] === "object") {
            break;
    }
    }
    //console.log(currentTask);
    return currentTask[0];
}

function getProjectIndex(projectName) {
    const projectIndex = _projects__WEBPACK_IMPORTED_MODULE_1__.Project.projects.map(project => project.getName()).indexOf(projectName);
    return projectIndex;
}

function deleteTaskFromProject(currentTask, projectIndex) {
    console.log(`delete ${currentTask.getTitle()} from ${_projects__WEBPACK_IMPORTED_MODULE_1__.Project.projects[projectIndex].getName()}`);
    const taskIndex = _projects__WEBPACK_IMPORTED_MODULE_1__.Project.projects[projectIndex].getTasks().map(task => task.getTaskId()).indexOf(currentTask.getTaskId());
    //console.log(taskIndex);
    _projects__WEBPACK_IMPORTED_MODULE_1__.Project.projects[projectIndex].deleteTask(taskIndex);


}

function moveTask(task, fromProject, toProject){
    const fromProjectIndex = getProjectIndex(fromProject)//Project.projects.map(project => project.getName()).indexOf(fromProject);
    const toProjectIndex = getProjectIndex(toProject)//.projects.map(project => project.getName()).indexOf(toProject);
    _projects__WEBPACK_IMPORTED_MODULE_1__.Project.projects[toProjectIndex].addTask(task);
    deleteTaskFromProject(task, fromProjectIndex);

}

function updateValues(){
   const task = getCurrentTask(parseInt(_domElements__WEBPACK_IMPORTED_MODULE_2__.editTaskForm.getAttribute("id")));
   task.setTitle(_domElements__WEBPACK_IMPORTED_MODULE_2__.editTaskFormTitle.value);
   task.setDueDate(_domElements__WEBPACK_IMPORTED_MODULE_2__.edtiTaskFormDueDate.value);
   task.setDescription(_domElements__WEBPACK_IMPORTED_MODULE_2__.editTaskFormDescription.value);
   task.setPriority(_domElements__WEBPACK_IMPORTED_MODULE_2__.editTaskFormPriority.value);
   if (task.getProject() !== _domElements__WEBPACK_IMPORTED_MODULE_2__.editTaskFormProject.value) {
        const fromProject = task.getProject();
        const toProject = _domElements__WEBPACK_IMPORTED_MODULE_2__.editTaskFormProject.value;
        task.setProject(_domElements__WEBPACK_IMPORTED_MODULE_2__.editTaskFormProject.value);
        moveTask(task, fromProject, toProject);
   }
   
   //console.log(task);
   
}

function changeDescriptionField(taskId, priority){
    const descriptionField = document.querySelector(`span[priority-id="${taskId}"]`);
    descriptionField.innerHTML = priority;
}

function popUpActivator(e, activator){
    const isCLosest = e.target.closest(activator);
        const changePriorityForms = Array.from(document.querySelectorAll(activator));
        if(!isCLosest){
            //console.log("hid")
            changePriorityForms.forEach((form) => {
                form.classList.add("hidden");
            })
        }
}

// export function addProjectOption(name) {
//     const projectOption = document.createElement("option");
//     projectOption.value = name.toLowerCase();
//     projectOption.innerHTML = name;
//     domElements.projectSelectList.appendChild(projectOption);
// }

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name){
        this.name = name;
        this.container = [];
    }

    static projects = [];

    getName() {
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    addTask(task){
        this.container.push(task);
    }

    deleteTask(taskIndex) {
        this.container.splice(taskIndex, 1);
    }

    getTasks(){
        return this.container;
    }
}

/***/ }),

/***/ "./src/renders.js":
/*!************************!*\
  !*** ./src/renders.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProject": () => (/* binding */ renderProject),
/* harmony export */   "renderProjectOptions": () => (/* binding */ renderProjectOptions),
/* harmony export */   "renderTaskPriorities": () => (/* binding */ renderTaskPriorities),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks */ "./src/Tasks.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements */ "./src/domElements.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.js");





function renderProject(){
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = "";
    _projects__WEBPACK_IMPORTED_MODULE_0__.Project.projects.forEach((project)=> {
        const projectContainer = document.createElement("li")
        projectContainer.innerHTML = project.getName();
        projectsContainer.appendChild(projectContainer);
    })   
}

function renderProjectOptions(selectElement){
    selectElement.innerHTML = "";
    _projects__WEBPACK_IMPORTED_MODULE_0__.Project.projects.forEach((project) => {
        const projectOption = document.createElement("option");
        projectOption.value = project.getName();
        // console.log(project.getName());
        projectOption.innerHTML = project.getName();
        selectElement.appendChild(projectOption);
        //domElements.editTaskFormProject.appendChild(projectOption);
    })
}

function renderTaskPriorities(selectElement){
    selectElement.innerHTML = "";
    _Tasks__WEBPACK_IMPORTED_MODULE_1__.Task.descriptions.forEach((description) => {
        const descriptionOption = document.createElement("option");
        descriptionOption.value = description;
        descriptionOption.innerHTML = description;
        selectElement.appendChild(descriptionOption);
    })
}

function renderTasks(){
    _domElements__WEBPACK_IMPORTED_MODULE_2__.mainContent.innerHTML = "";
    _projects__WEBPACK_IMPORTED_MODULE_0__.Project.projects.forEach((project) => {
        for (let task of project.getTasks()) {
            // console.log(task.keys);
            const taskContainer = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElement("div", "task-container", _domElements__WEBPACK_IMPORTED_MODULE_2__.mainContent);
            const taskOverview = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElement("div", "task-overview", taskContainer);
            const taskDescription = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElement("div", "task-description", taskContainer);
            taskDescription.classList.add("hidden");
            const taskName = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElement("div", "task-name", taskOverview);
            taskName.innerHTML = task.getTitle();
            const taskButtons = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElement("div", "task-buttons", taskOverview);

            const changePriorityContainer = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElement("form", "change-priority-container", taskButtons);
            const selectPriority = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElement("select", "select-priority", changePriorityContainer);
            changePriorityContainer.classList.add("hidden");
            selectPriority.size = 3;
            selectPriority.setAttribute("id", task.getTaskId());
            renderTaskPriorities(selectPriority);
            _eventListeners__WEBPACK_IMPORTED_MODULE_3__.PrioritySelect(selectPriority);

            const changeProjectContainer = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElement("form", "change-project-container", taskButtons);
            const selectProject = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElement("select", "select-project", changeProjectContainer);
            changeProjectContainer.classList.add("hidden");
            selectProject.size = 3;
            selectProject.setAttribute("id", task.getTaskId());
            renderProjectOptions(selectProject);
            _eventListeners__WEBPACK_IMPORTED_MODULE_3__.ProjectSelect(selectProject);

            for (let [key, value] of _Tasks__WEBPACK_IMPORTED_MODULE_1__.Task.buttonImages) {
                const taskButton = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElement("button", "task-button", taskButtons);
                taskButton.setAttribute("id", task.getTaskId());
                const buttonImage = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElementWithoutClass("img", taskButton);
                //const buttonImage = new Image();
                buttonImage.src = value;
                buttonImage.alt = key;
                switch(key) {
                    case Array.from(_Tasks__WEBPACK_IMPORTED_MODULE_1__.Task.buttonImages.keys())[0]:
                        _eventListeners__WEBPACK_IMPORTED_MODULE_3__.OpenEditTaskForm(taskButton);
                        break;
                    case Array.from(_Tasks__WEBPACK_IMPORTED_MODULE_1__.Task.buttonImages.keys())[1]:
                        _eventListeners__WEBPACK_IMPORTED_MODULE_3__.ShowChangeForm(taskButton, changePriorityContainer);
                        break;
                    case Array.from(_Tasks__WEBPACK_IMPORTED_MODULE_1__.Task.buttonImages.keys())[2]:
                        _eventListeners__WEBPACK_IMPORTED_MODULE_3__.ShowChangeForm(taskButton, changeProjectContainer);
                        break;
                    case Array.from(_Tasks__WEBPACK_IMPORTED_MODULE_1__.Task.buttonImages.keys())[3]:
                        _eventListeners__WEBPACK_IMPORTED_MODULE_3__.RemoveTask(taskButton);
                        break;
                    default: break;
                }
                // console.log(Array.from(Task.buttonImages.keys())[2])
                //taskButton.appendChild(buttonImage);
            }

            for (let field of _Tasks__WEBPACK_IMPORTED_MODULE_1__.Task.descriptionFields) {
                const spanContainer = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElementWithoutClass("div", taskDescription);
                const fieldName = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElementWithoutClass("span",spanContainer);
                fieldName.innerHTML = field;
                const fieldValue = _domElements__WEBPACK_IMPORTED_MODULE_2__.createElementWithoutClass("span", spanContainer);
                switch(field) {
                    case _Tasks__WEBPACK_IMPORTED_MODULE_1__.Task.descriptionFields[0]:
                        fieldValue.innerHTML = task.getTitle();
                        break;
                    case _Tasks__WEBPACK_IMPORTED_MODULE_1__.Task.descriptionFields[1]:
                        fieldValue.innerHTML = task.getDueDate();
                        break;
                    case _Tasks__WEBPACK_IMPORTED_MODULE_1__.Task.descriptionFields[2]:
                        fieldValue.innerHTML = task.getDescription();
                        break;
                    case _Tasks__WEBPACK_IMPORTED_MODULE_1__.Task.descriptionFields[3]:
                        fieldValue.innerHTML = task.getPriority();
                        fieldValue.setAttribute("priority-id", task.getTaskId())
                        break;
                    default: break;
                }
                

            }





        }
        //console.log(project);
    })
}

/***/ }),

/***/ "./src/img/delete.png":
/*!****************************!*\
  !*** ./src/img/delete.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/delete.png";

/***/ }),

/***/ "./src/img/edit.png":
/*!**************************!*\
  !*** ./src/img/edit.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/edit.png";

/***/ }),

/***/ "./src/img/home.png":
/*!**************************!*\
  !*** ./src/img/home.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/home.png";

/***/ }),

/***/ "./src/img/inbox.png":
/*!***************************!*\
  !*** ./src/img/inbox.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/inbox.png";

/***/ }),

/***/ "./src/img/logo.jpg":
/*!**************************!*\
  !*** ./src/img/logo.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/logo.jpg";

/***/ }),

/***/ "./src/img/menu.png":
/*!**************************!*\
  !*** ./src/img/menu.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/menu.png";

/***/ }),

/***/ "./src/img/move.png":
/*!**************************!*\
  !*** ./src/img/move.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/move.png";

/***/ }),

/***/ "./src/img/priority.png":
/*!******************************!*\
  !*** ./src/img/priority.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/priority.png";

/***/ }),

/***/ "./src/img/projects.png":
/*!******************************!*\
  !*** ./src/img/projects.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/projects.png";

/***/ }),

/***/ "./src/img/today.png":
/*!***************************!*\
  !*** ./src/img/today.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/today.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_taskForm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/taskForm.css */ "./src/styles/taskForm.css");
/* harmony import */ var _styles_tasks_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/tasks.css */ "./src/styles/tasks.css");
/* harmony import */ var _img_logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/logo.jpg */ "./src/img/logo.jpg");
/* harmony import */ var _img_edit_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/edit.png */ "./src/img/edit.png");
/* harmony import */ var _img_projects_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/projects.png */ "./src/img/projects.png");
/* harmony import */ var _img_today_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/today.png */ "./src/img/today.png");
/* harmony import */ var _img_inbox_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/inbox.png */ "./src/img/inbox.png");
/* harmony import */ var _img_home_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/home.png */ "./src/img/home.png");
/* harmony import */ var _img_menu_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/menu.png */ "./src/img/menu.png");
/* harmony import */ var _img_priority_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/priority.png */ "./src/img/priority.png");
/* harmony import */ var _img_move_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/move.png */ "./src/img/move.png");
/* harmony import */ var _img_delete_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/delete.png */ "./src/img/delete.png");
/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Tasks */ "./src/Tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _renders__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./renders */ "./src/renders.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./domElements */ "./src/domElements.js");























// const task1 = new Task("Task","some task", " 12.12.2022", "Low", "Default");
// console.log(task1.getTitle());

// const project1 = new Project("New Project");
// console.log(project1.getName());

// console.log(format(new Date(2014, 1,11), "yyyy-MM-dd"));
(0,_functions__WEBPACK_IMPORTED_MODULE_16__.createProject)("My project");
// createProject("My project2");
// createProject("My project3");
_eventListeners__WEBPACK_IMPORTED_MODULE_15__.BodyEvents();
 _eventListeners__WEBPACK_IMPORTED_MODULE_15__.OpenAddTaskForm();
 _eventListeners__WEBPACK_IMPORTED_MODULE_15__.CloseAddTaskForm();
 _eventListeners__WEBPACK_IMPORTED_MODULE_15__.OpenAddProjectForm();
 _eventListeners__WEBPACK_IMPORTED_MODULE_15__.CloseAddProjectForm();
 _eventListeners__WEBPACK_IMPORTED_MODULE_15__.AddProject();
 _eventListeners__WEBPACK_IMPORTED_MODULE_15__.AddTask();
 _eventListeners__WEBPACK_IMPORTED_MODULE_15__.showDescription();
 _eventListeners__WEBPACK_IMPORTED_MODULE_15__.CloseEditTaskForm();
 _eventListeners__WEBPACK_IMPORTED_MODULE_15__.UpdateTask();
 (0,_renders__WEBPACK_IMPORTED_MODULE_17__.renderProject)();
 (0,_renders__WEBPACK_IMPORTED_MODULE_17__.renderProjectOptions)(_domElements__WEBPACK_IMPORTED_MODULE_18__.projectSelectList);
 (0,_renders__WEBPACK_IMPORTED_MODULE_17__.renderProjectOptions)(_domElements__WEBPACK_IMPORTED_MODULE_18__.editTaskFormProject);
 (0,_renders__WEBPACK_IMPORTED_MODULE_17__.renderTaskPriorities)(_domElements__WEBPACK_IMPORTED_MODULE_18__.taskFormPriority);
 (0,_renders__WEBPACK_IMPORTED_MODULE_17__.renderTaskPriorities)(_domElements__WEBPACK_IMPORTED_MODULE_18__.editTaskFormPriority);

 _eventListeners__WEBPACK_IMPORTED_MODULE_15__.Test();
 
 











})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENxQztBQUNPO0FBQ0k7QUFDbUk7QUFDckg7QUFDcEI7QUFDRztB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QUFDQztBQUMwQztBQUN6QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBYTtBQUNiO0FBQ0E7QUFDQSx3REFBaUI7QUFDakIsQ0FBQyw2REFBc0I7QUFDdkIsQ0FBQyw4REFBdUI7QUFDeEIsQ0FBQyxnRUFBeUI7QUFDMUIsQ0FBQyxpRUFBMEI7QUFDM0IsQ0FBQyx3REFBaUI7QUFDbEIsQ0FBQyxxREFBYztBQUNmLENBQUMsNkRBQXNCO0FBQ3ZCLENBQUMsK0RBQXdCO0FBQ3pCLENBQUMsd0RBQWlCO0FBQ2xCLENBQUMsd0RBQWE7QUFDZCxDQUFDLCtEQUFvQixDQUFDLDREQUE2QjtBQUNuRCxDQUFDLCtEQUFvQixDQUFDLDhEQUErQjtBQUNyRCxDQUFDLCtEQUFvQixDQUFDLDJEQUE0QjtBQUNsRCxDQUFDLCtEQUFvQixDQUFDLCtEQUFnQztBQUN0RDtBQUNBLENBQUMsa0RBQVc7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvdGFza0Zvcm0uY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL3Rhc2tzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvdGFza0Zvcm0uY3NzP2RkOTEiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvdGFza3MuY3NzPzRkMzIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1Rhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVuZGVycy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5LFxcclxcbnVsLFxcclxcbmxpIHtcXHJcXG4gICAgIG1hcmdpbjogMDtcXHJcXG4gICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbnVsLFxcclxcbmxpIHtcXHJcXG4gICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCBhdXRvIDNyZW07XFxyXFxuICAgICBnYXA6IDAuM3JlbTtcXHJcXG4gICAgIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tY29udGFpbmVyID4gaW1nIHtcXHJcXG4gICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgM3JlbSk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyID4gdWwge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAxLjV2dywgMnJlbSk7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lcntcXHJcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjNyZW0sIDEuM3Z3LCAxLjVyZW0pO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyID4gbGl7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24ge1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDAuNnJlbTtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciA+IHVsID4gbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgPiB1bCA+IGxpOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyID4gdWwgPiBsaTpudGgtY2hpbGQoMykgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IG1pbigxNSUsIDNyZW0pO1xcclxcbiAgICBoZWlnaHQ6IG1pbigxNSUsIDNyZW0pO1xcclxcbiAgICBmbGV4LXNocmluazogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggNXB4IDEwcHggYmxhY2s7XFxyXFxuICAgIHdpZHRoOiBtaW4oMzAlLDIwcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWZvcm0gPiAuaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1mb3JtLWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZDogMC41cmVtO1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3QtZm9ybS1idXR0b25zID4gYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS1wcmlvcml0eS1jb250YWluZXIsXFxyXFxuLmNoYW5nZS1wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxNSU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxcmVtOyAqL1xcclxcbiAgICAvKiBib3gtc2hhZG93OiAxcHggNXB4IDEwcHggYmxhY2s7ICovXFxyXFxuICAgIC8qIHBhZGRpbmc6IDJyZW07ICovXFxyXFxuICAgIC8qIGdhcDogMXJlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS1wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGxlZnQ6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS1wcmlvcml0eS1jb250YWluZXIgPiBzZWxlY3QsXFxyXFxuLmNoYW5nZS1wcm9qZWN0LWNvbnRhaW5lciA+IHNlbGVjdCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJmbG93LW9uIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87ICAgXFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBOzs7O0tBSUssU0FBUztLQUNULFVBQVU7QUFDZjs7QUFFQTs7S0FFSyxxQkFBcUI7QUFDMUI7O0FBRUE7S0FDSyxxQkFBcUI7S0FDckIsaUJBQWlCO0tBQ2pCLGFBQWE7S0FDYixxQ0FBcUM7S0FDckMsV0FBVztLQUNYLGVBQWU7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0tBQ0ssYUFBYTtLQUNiLG1CQUFtQjtLQUNuQixtQkFBbUI7QUFDeEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFDckMsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7O0FBRUE7R0FDRyxhQUFhO0dBQ2Isc0JBQXNCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHksXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IGF1dG8gM3JlbTtcXHJcXG4gICAgIGdhcDogMC4zcmVtO1xcclxcbiAgICAgcGFkZGluZzogMCAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgPiBkaXY6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIgPiBpbWcge1xcclxcbiAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAzcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgPiB1bCB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDEuNXZ3LCAycmVtKTtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVye1xcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDEuM3JlbSwgMS4zdncsIDEuNXJlbSk7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIgPiBsaXtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMC42cmVtO1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyID4gdWwgPiBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciA+IHVsID4gbGk6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgPiB1bCA+IGxpOm50aC1jaGlsZCgzKSA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBpbWcge1xcclxcbiAgICB3aWR0aDogbWluKDE1JSwgM3JlbSk7XFxyXFxuICAgIGhlaWdodDogbWluKDE1JSwgM3JlbSk7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCA1cHggMTBweCBibGFjaztcXHJcXG4gICAgd2lkdGg6IG1pbigzMCUsMjByZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtZm9ybSA+IC5pbnB1dC1jb250YWluZXIge1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWZvcm0tYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkOiAwLjVyZW07XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdC1mb3JtLWJ1dHRvbnMgPiBidXR0b24ge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbmdlLXByaW9yaXR5LWNvbnRhaW5lcixcXHJcXG4uY2hhbmdlLXByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDE1JTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDFyZW07ICovXFxyXFxuICAgIC8qIGJveC1zaGFkb3c6IDFweCA1cHggMTBweCBibGFjazsgKi9cXHJcXG4gICAgLyogcGFkZGluZzogMnJlbTsgKi9cXHJcXG4gICAgLyogZ2FwOiAxcmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbmdlLXByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gICAgbGVmdDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbmdlLXByaW9yaXR5LWNvbnRhaW5lciA+IHNlbGVjdCxcXHJcXG4uY2hhbmdlLXByb2plY3QtY29udGFpbmVyID4gc2VsZWN0IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmZsb3ctb24ge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bzsgICBcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZm9ybSAqIHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtdGFzayxcXHJcXG4uZWRpdC10YXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDVweCAxMHB4IGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1mb3JtLWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGFza0Zvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImZvcm0gKiB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLXRhc2ssXFxyXFxuLmVkaXQtdGFzayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCA1cHggMTBweCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZm9ybS1idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbi1jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLW92ZXJ2aWV3IHtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjVmcjtcXHJcXG4gICAgZ2FwOiAyMHZ3O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxOSwgMjE2LCAyMTYpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGFzay1uYW1lIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAgZ2FwOiAxcmVtOyBcXHJcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTByZW0sIDFmcikpO1xcclxcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uID4gZGl2e1xcclxcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxyXFxufVxcclxcbi50YXNrLWRlc2NyaXB0aW9uID4gZGl2ID4gc3BhbjpudGgtY2hpbGQoMSl7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90YXNrcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLFNBQVM7SUFDVCwyQ0FBMkM7O0FBRS9DOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCx5QkFBeUI7SUFDekIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbi1jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLW92ZXJ2aWV3IHtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjVmcjtcXHJcXG4gICAgZ2FwOiAyMHZ3O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxOSwgMjE2LCAyMTYpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGFzay1uYW1lIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAgZ2FwOiAxcmVtOyBcXHJcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTByZW0sIDFmcikpO1xcclxcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uID4gZGl2e1xcclxcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxyXFxufVxcclxcbi50YXNrLWRlc2NyaXB0aW9uID4gZGl2ID4gc3BhbjpudGgtY2hpbGQoMSl7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrRm9ybS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tGb3JtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgICBzdGF0aWMgbGFzdElkID0gMDtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3Qpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBUYXNrLmxhc3RJZCsrO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGRlc2NyaXB0aW9ucyA9IFtcIkxvd1wiLCBcIk1lZGl1bVwiLCBcIkhpZ2hcIl07XHJcbiAgICBzdGF0aWMgYnV0dG9uSW1hZ2VzID0gbmV3IE1hcChbXHJcbiAgICAgICAgW1wiZWRpdFwiLCBcIi4vaW1nL2VkaXQucG5nXCJdLFxyXG4gICAgICAgIFtcInByaW9yaXR5XCIsIFwiLi9pbWcvcHJpb3JpdHkucG5nXCJdLFxyXG4gICAgICAgIFtcIm1vdmVcIiwgXCIuL2ltZy9tb3ZlLnBuZ1wiXSxcclxuICAgICAgICBbXCJkZWxldGVcIiwgXCIuL2ltZy9kZWxldGUucG5nXCJdLFxyXG4gICAgXSlcclxuICAgIHN0YXRpYyBkZXNjcmlwdGlvbkZpZWxkcyA9IFtcIlRpdGxlOiBcIiwgXCJEdWUgRGF0ZTogXCIsIFwiRGVzY3JpcHRpb246IFwiLCBcIlByaW9yaXR5OiBcIl1cclxuXHJcbiAgICBnZXRUaXRsZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXREdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpe1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9qZWN0KHByb2plY3Qpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza0lkKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbiAgICBcclxufSIsIlxyXG4vLyBQcm9qZWN0IGVsZW1lbnRzXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtZm9ybVwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2plY3ROYW1lRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcclxuXHJcbi8vIFRhc2sgRm9ybSBlbGVtZW50c1xyXG5leHBvcnQgY29uc3Qgb2tUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLW9rLWJ1dHRvblwiKTtcclxuZXhwb3J0IGNvbnN0IGNsb3NlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jYW5jZWwtYnV0dG9uXCIpO1xyXG5leHBvcnQgY29uc3QgdGFza0Zvcm1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XHJcbmV4cG9ydCBjb25zdCB0YXNrRm9ybUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpO1xyXG5leHBvcnQgY29uc3QgdGFza0Zvcm1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XHJcbmV4cG9ydCBjb25zdCB0YXNrRm9ybVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2plY3RTZWxlY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QtcHJvamVjdFwiKTtcclxuXHJcbi8vIFRhc2sgRWRpdCBGb3JtIEVsZW1lbnRzXHJcbmV4cG9ydCBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFza1wiKTtcclxuZXhwb3J0IGNvbnN0IGNsb3NlRWRpdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay1jYW5jZWwtYnV0dG9uXCIpO1xyXG5leHBvcnQgY29uc3QgdXBkYXRlRWRpdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdXBkYXRlLWJ1dHRvblwiKTtcclxuZXhwb3J0IGNvbnN0IGVkaXRUYXNrRm9ybVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRpdGxlXCIpO1xyXG5leHBvcnQgY29uc3QgZWR0aVRhc2tGb3JtRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1kdWUtZGF0ZVwiKTtcclxuZXhwb3J0IGNvbnN0IGVkaXRUYXNrRm9ybURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LWRlc2NyaXB0aW9uXCIpO1xyXG5leHBvcnQgY29uc3QgZWRpdFRhc2tGb3JtUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJpb3JpdHlcIik7XHJcbmV4cG9ydCBjb25zdCBlZGl0VGFza0Zvcm1Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXNlbGVjdC1wcm9qZWN0XCIpO1xyXG5cclxuLy9UYXNrIGVsZW1lbnRzXHJcbmV4cG9ydCBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG4vL2V4cG9ydCBjb25zdCB0YXNrT3ZlcnZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tPdmVydmlld1wiKVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1UeXBlLCBlbGVtQ2xhc3MsIHBhcmVudE5hbWUpe1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbVR5cGUpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1DbGFzcyk7XHJcbiAgICBwYXJlbnROYW1lLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aG91dENsYXNzKGVsZW1UeXBlLCBwYXJlbnROYW1lKXtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1UeXBlKTtcclxuICAgIHBhcmVudE5hbWUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyB0b2dnbGVQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrLCBwb3B1bGF0ZUVkaXRGb3JtLCB1cGRhdGVWYWx1ZXMsIGdldEN1cnJlbnRUYXNrLCBnZXRQcm9qZWN0SW5kZXgsIGRlbGV0ZVRhc2tGcm9tUHJvamVjdCwgY2hhbmdlRGVzY3JpcHRpb25GaWVsZCwgcG9wVXBBY3RpdmF0b3IsIG1vdmVUYXNrIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2plY3RPcHRpb25zLCByZW5kZXJUYXNrcyB9IGZyb20gXCIuL3JlbmRlcnNcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvamVjdCB9IGZyb20gXCIuL3JlbmRlcnNcIjtcclxuaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL1Rhc2tzXCI7XHJcblxyXG4vLyBUYXNrIGV2ZW50c1xyXG5leHBvcnQgZnVuY3Rpb24gT3BlbkFkZFRhc2tGb3JtKCkge1xyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgY3JlYXRlVGFza2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS10YXNrXCIpO1xyXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZVRhc2tmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2xvc2VBZGRUYXNrRm9ybSgpIHtcclxuICAgIGNvbnN0IGNyZWF0ZVRhc2tmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFza1wiKTtcclxuICAgIGRvbUVsZW1lbnRzLmNsb3NlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZVRhc2tmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQWRkVGFzaygpIHtcclxuICAgIGRvbUVsZW1lbnRzLm9rVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZVRhc2soZG9tRWxlbWVudHMudGFza0Zvcm1UaXRsZSwgZG9tRWxlbWVudHMudGFza0Zvcm1EdWVEYXRlLFxyXG4gICAgICAgICAgICBkb21FbGVtZW50cy50YXNrRm9ybURlc2NyaXB0aW9uLCBkb21FbGVtZW50cy50YXNrRm9ybVByaW9yaXR5LCBkb21FbGVtZW50cy5wcm9qZWN0U2VsZWN0TGlzdCk7XHJcbiAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuICAgICAgICBzaG93RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFByb2plY3QucHJvamVjdHNbMF0pXHJcbiAgICAgICAgXHJcblxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE9wZW5FZGl0VGFza0Zvcm0oYnV0dG9uKSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk7XHJcbiAgICAgICAgZG9tRWxlbWVudHMuZWRpdFRhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgZG9tRWxlbWVudHMuZWRpdFRhc2tGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpKTtcclxuICAgICAgICBwb3B1bGF0ZUVkaXRGb3JtKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpKTtcclxuICAgIH0sIHRydWUpIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2xvc2VFZGl0VGFza0Zvcm0oKSB7XHJcbiAgICBkb21FbGVtZW50cy5jbG9zZUVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZG9tRWxlbWVudHMuZWRpdFRhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXBkYXRlVGFzaygpIHtcclxuICAgIGRvbUVsZW1lbnRzLnVwZGF0ZUVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVzKCk7XHJcbiAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuICAgICAgICBzaG93RGVzY3JpcHRpb24oKTtcclxuICAgICAgICBcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2hvd0NoYW5nZUZvcm0oYnV0dG9uLCBmb3JtKSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInVuaGlkXCIpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByaW9yaXR5U2VsZWN0KHNlbGVjdCkge1xyXG4gICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3QudmFsdWUpO1xyXG4gICAgICAgIGdldEN1cnJlbnRUYXNrKHBhcnNlSW50KHNlbGVjdC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkpLnNldFByaW9yaXR5KHNlbGVjdC52YWx1ZSk7XHJcbiAgICAgICAgY2hhbmdlRGVzY3JpcHRpb25GaWVsZChwYXJzZUludChzZWxlY3QuZ2V0QXR0cmlidXRlKFwiaWRcIikpLCBzZWxlY3QudmFsdWUpO1xyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0U2VsZWN0KHNlbGVjdCl7XHJcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LW9uXCIpO1xyXG4gICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3QudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBnZXRDdXJyZW50VGFzayhwYXJzZUludChzZWxlY3QuZ2V0QXR0cmlidXRlKFwiaWRcIikpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcclxuICAgICAgICBtb3ZlVGFzayh0YXNrLCB0YXNrLmdldFByb2plY3QoKSwgc2VsZWN0LnZhbHVlKTtcclxuICAgICAgICB0YXNrLnNldFByb2plY3Qoc2VsZWN0LnZhbHVlKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZW1vdmVUYXNrKGJ1dHRvbikge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFRhc2sgPSBnZXRDdXJyZW50VGFzayhwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGdldFByb2plY3RJbmRleCh0YXJnZXRUYXNrLmdldFByb2plY3QoKSk7XHJcbiAgICAgICAgZGVsZXRlVGFza0Zyb21Qcm9qZWN0KHRhcmdldFRhc2ssIHByb2plY3RJbmRleCk7XHJcbiAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuICAgICAgICBzaG93RGVzY3JpcHRpb24oKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyBQcm9qZWN0IGV2ZW50c1xyXG5leHBvcnQgZnVuY3Rpb24gT3BlbkFkZFByb2plY3RGb3JtKCkge1xyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1idXR0b25cIik7XHJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlUHJvamVjdEZvcm0oKVxyXG4gICAgICAgIGRvbUVsZW1lbnRzLnByb2plY3ROYW1lRmllbGQudmFsdWUgPSBcIk5ldyBQcm9qZWN0XCI7XHJcbn0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDbG9zZUFkZFByb2plY3RGb3JtKCkge1xyXG4gICAgY29uc3QgY2xvc2VQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNhbmNlbC1idXR0b25cIik7XHJcbiAgICBjbG9zZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0b2dnbGVQcm9qZWN0Rm9ybSgpO1xyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQWRkUHJvamVjdCgpIHtcclxuICAgIGNvbnN0IG9rUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1vay1idXR0b25cIik7XHJcbiAgICBva1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0KGRvbUVsZW1lbnRzLnByb2plY3ROYW1lRmllbGQudmFsdWUpO1xyXG4gICAgICAgIHJlbmRlclByb2plY3QoKTtcclxuICAgICAgICByZW5kZXJQcm9qZWN0T3B0aW9ucyhkb21FbGVtZW50cy5wcm9qZWN0U2VsZWN0TGlzdCk7XHJcbiAgICAgICAgcmVuZGVyUHJvamVjdE9wdGlvbnMoZG9tRWxlbWVudHMuZWRpdFRhc2tGb3JtUHJvamVjdCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3QtcHJvamVjdFwiKSk7XHJcbiAgICAgICAgc2VsZWN0UHJvamVjdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RPcHRpb25zKHByb2plY3QpO1xyXG4gICAgICAgIH0pIFxyXG4gICAgICAgIHRvZ2dsZVByb2plY3RGb3JtKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Rlc2NyaXB0aW9uKCkge1xyXG4gICAgY29uc3QgdGFza092ZXJ2aWV3ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stb3ZlcnZpZXdcIikpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0YXNrT3ZlcnZpZXcpO1xyXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgdGFza092ZXJ2aWV3LmZvckVhY2godGFzayA9PiB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjbGlja1wiKVxyXG4gICAgICAgIGlmKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxyXG4gICAgICAgIH1cclxuICAgIH0pLCB0cnVlKVxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZWRpdFRhc2soYnV0dG9uKSB7XHJcbi8vICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikpO1xyXG5cclxuLy8gICAgIH0sIHRydWUpIFxyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGVzdCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nby10aXRsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFByb2plY3QucHJvamVjdHMpXHJcbiAgICAgICAgLy9sZXQgY3VycmVudFRhc2sgPSBQcm9qZWN0LnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUYXNrcygpLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRUYXNrSWQoKSA9PT0gMCkpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjdXJyZW50VGFzayk7XHJcbiAgICAgICAgLy9sZXQgcHJvamVjdEluZGV4ID0gUHJvamVjdC5wcm9qZWN0cy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LmdldE5hbWUoKSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0SW5kZXguaW5kZXhPZihcIk15IHByb2plY3RcIikpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coUHJvamVjdC5wcm9qZWN0c1swXS5nZXROYW1lKCkpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJvZHlFdmVudHMoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICAgICAgcG9wVXBBY3RpdmF0b3IoZSwgXCIuY2hhbmdlLXByaW9yaXR5LWNvbnRhaW5lclwiKTtcclxuICAgICAgICBwb3BVcEFjdGl2YXRvcihlLCBcIi5jaGFuZ2UtcHJvamVjdC1jb250YWluZXJcIik7XHJcbiAgICAgICAgLy8gY29uc3QgaXNDTG9zZXN0ID0gZS50YXJnZXQuY2xvc2VzdChcIi5jaGFuZ2UtcHJpb3JpdHktY29udGFpbmVyXCIpO1xyXG4gICAgICAgIC8vIGNvbnN0IGNoYW5nZVByaW9yaXR5Rm9ybXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhbmdlLXByaW9yaXR5LWNvbnRhaW5lclwiKSk7XHJcbiAgICAgICAgLy8gaWYoIWlzQ0xvc2VzdCl7XHJcbiAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2coXCJoaWRcIilcclxuICAgICAgICAvLyAgICAgY2hhbmdlUHJpb3JpdHlGb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgfSwgdHJ1ZSkgXHJcbn1cclxuIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL1Rhc2tzXCI7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBkb21FbGVtZW50cyBmcm9tIFwiLi9kb21FbGVtZW50c1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSl7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XHJcbiAgICBQcm9qZWN0LnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGRvbUVsZW1lbnRzLmNyZWF0ZVByb2plY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QodGFzayl7XHJcbiAgICBmb3IoIGNvbnN0IHByb2plY3Qgb2YgUHJvamVjdC5wcm9qZWN0cyl7XHJcbiAgICAgICAgaWYocHJvamVjdC5nZXROYW1lKCkgPT09IHRhc2suZ2V0UHJvamVjdCgpKXtcclxuICAgICAgICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3Qpe1xyXG4gICAgY29uc3QgdGFzayAgPSBuZXcgVGFzayh0aXRsZS52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIHByaW9yaXR5LnZhbHVlLCBwcm9qZWN0LnZhbHVlKTtcclxuICAgIGFkZFRhc2tUb1Byb2plY3QodGFzayk7ICAgXHJcbiAgICAvL2NvbnNvbGUubG9nKHRhc2suZ2V0VGFza0lkKCkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhnZXRDdXJyZW50VGFzaygwKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUVkaXRGb3JtKGlkKXtcclxuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gZ2V0Q3VycmVudFRhc2socGFyc2VJbnQoaWQpKTtcclxuICAgIC8vY29uc29sZS5sb2coY3VycmVudFRhc2spO1xyXG4gICAgZG9tRWxlbWVudHMuZWRpdFRhc2tGb3JtVGl0bGUudmFsdWUgPSBjdXJyZW50VGFzay5nZXRUaXRsZSgpO1xyXG4gICAgZG9tRWxlbWVudHMuZWR0aVRhc2tGb3JtRHVlRGF0ZS52YWx1ZSA9IGN1cnJlbnRUYXNrLmdldER1ZURhdGUoKTtcclxuICAgIGRvbUVsZW1lbnRzLmVkaXRUYXNrRm9ybURlc2NyaXB0aW9uLnZhbHVlID0gY3VycmVudFRhc2suZ2V0RGVzY3JpcHRpb24oKTtcclxuICAgIGRvbUVsZW1lbnRzLmVkaXRUYXNrRm9ybVByaW9yaXR5LnZhbHVlID0gY3VycmVudFRhc2suZ2V0UHJpb3JpdHkoKTtcclxuICAgIGRvbUVsZW1lbnRzLmVkaXRUYXNrRm9ybVByb2plY3QudmFsdWUgPSBjdXJyZW50VGFzay5nZXRQcm9qZWN0KCk7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRUYXNrKGlkKSB7XHJcbiAgICBsZXQgY3VycmVudFRhc2sgPSBcIlwiXHJcbiAgICAvL9CS0L7Qt9Cy0YDQsNGJ0LDQtdGCIGFycmF5INCyINC60L7RgtC+0YDQvCDQvdCw0YXQvtC00LjRgtGB0Y8g0L7Qv9GA0LXQtNC10LvQtdC90L3QsNGPIFRhc2tcclxuICAgIC8vIGN1cnJlbnRUYXNrID0gUHJvamVjdC5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGFza3MoKS5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0VGFza0lkKCkgPT09IGlkKSlcclxuXHJcbiAgICAvLyDQktC+0LfQstGA0LDRidCw0LXRgiDQvtC/0YDQtdC00LXQu9C10L3QvdGD0Y4gVGFzay5cclxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgUHJvamVjdC5wcm9qZWN0cykge1xyXG4gICAgICAgIGN1cnJlbnRUYXNrID0gcHJvamVjdC5nZXRUYXNrcygpLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRUYXNrSWQoKSA9PT0gaWQpO1xyXG4gICAgICAgIGlmKHR5cGVvZiBjdXJyZW50VGFza1swXSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coY3VycmVudFRhc2spO1xyXG4gICAgcmV0dXJuIGN1cnJlbnRUYXNrWzBdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdEluZGV4KHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBQcm9qZWN0LnByb2plY3RzLm1hcChwcm9qZWN0ID0+IHByb2plY3QuZ2V0TmFtZSgpKS5pbmRleE9mKHByb2plY3ROYW1lKTtcclxuICAgIHJldHVybiBwcm9qZWN0SW5kZXg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrRnJvbVByb2plY3QoY3VycmVudFRhc2ssIHByb2plY3RJbmRleCkge1xyXG4gICAgY29uc29sZS5sb2coYGRlbGV0ZSAke2N1cnJlbnRUYXNrLmdldFRpdGxlKCl9IGZyb20gJHtQcm9qZWN0LnByb2plY3RzW3Byb2plY3RJbmRleF0uZ2V0TmFtZSgpfWApO1xyXG4gICAgY29uc3QgdGFza0luZGV4ID0gUHJvamVjdC5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLmdldFRhc2tzKCkubWFwKHRhc2sgPT4gdGFzay5nZXRUYXNrSWQoKSkuaW5kZXhPZihjdXJyZW50VGFzay5nZXRUYXNrSWQoKSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRhc2tJbmRleCk7XHJcbiAgICBQcm9qZWN0LnByb2plY3RzW3Byb2plY3RJbmRleF0uZGVsZXRlVGFzayh0YXNrSW5kZXgpO1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlVGFzayh0YXNrLCBmcm9tUHJvamVjdCwgdG9Qcm9qZWN0KXtcclxuICAgIGNvbnN0IGZyb21Qcm9qZWN0SW5kZXggPSBnZXRQcm9qZWN0SW5kZXgoZnJvbVByb2plY3QpLy9Qcm9qZWN0LnByb2plY3RzLm1hcChwcm9qZWN0ID0+IHByb2plY3QuZ2V0TmFtZSgpKS5pbmRleE9mKGZyb21Qcm9qZWN0KTtcclxuICAgIGNvbnN0IHRvUHJvamVjdEluZGV4ID0gZ2V0UHJvamVjdEluZGV4KHRvUHJvamVjdCkvLy5wcm9qZWN0cy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LmdldE5hbWUoKSkuaW5kZXhPZih0b1Byb2plY3QpO1xyXG4gICAgUHJvamVjdC5wcm9qZWN0c1t0b1Byb2plY3RJbmRleF0uYWRkVGFzayh0YXNrKTtcclxuICAgIGRlbGV0ZVRhc2tGcm9tUHJvamVjdCh0YXNrLCBmcm9tUHJvamVjdEluZGV4KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWYWx1ZXMoKXtcclxuICAgY29uc3QgdGFzayA9IGdldEN1cnJlbnRUYXNrKHBhcnNlSW50KGRvbUVsZW1lbnRzLmVkaXRUYXNrRm9ybS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkpO1xyXG4gICB0YXNrLnNldFRpdGxlKGRvbUVsZW1lbnRzLmVkaXRUYXNrRm9ybVRpdGxlLnZhbHVlKTtcclxuICAgdGFzay5zZXREdWVEYXRlKGRvbUVsZW1lbnRzLmVkdGlUYXNrRm9ybUR1ZURhdGUudmFsdWUpO1xyXG4gICB0YXNrLnNldERlc2NyaXB0aW9uKGRvbUVsZW1lbnRzLmVkaXRUYXNrRm9ybURlc2NyaXB0aW9uLnZhbHVlKTtcclxuICAgdGFzay5zZXRQcmlvcml0eShkb21FbGVtZW50cy5lZGl0VGFza0Zvcm1Qcmlvcml0eS52YWx1ZSk7XHJcbiAgIGlmICh0YXNrLmdldFByb2plY3QoKSAhPT0gZG9tRWxlbWVudHMuZWRpdFRhc2tGb3JtUHJvamVjdC52YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGZyb21Qcm9qZWN0ID0gdGFzay5nZXRQcm9qZWN0KCk7XHJcbiAgICAgICAgY29uc3QgdG9Qcm9qZWN0ID0gZG9tRWxlbWVudHMuZWRpdFRhc2tGb3JtUHJvamVjdC52YWx1ZTtcclxuICAgICAgICB0YXNrLnNldFByb2plY3QoZG9tRWxlbWVudHMuZWRpdFRhc2tGb3JtUHJvamVjdC52YWx1ZSk7XHJcbiAgICAgICAgbW92ZVRhc2sodGFzaywgZnJvbVByb2plY3QsIHRvUHJvamVjdCk7XHJcbiAgIH1cclxuICAgXHJcbiAgIC8vY29uc29sZS5sb2codGFzayk7XHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRGVzY3JpcHRpb25GaWVsZCh0YXNrSWQsIHByaW9yaXR5KXtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzcGFuW3ByaW9yaXR5LWlkPVwiJHt0YXNrSWR9XCJdYCk7XHJcbiAgICBkZXNjcmlwdGlvbkZpZWxkLmlubmVySFRNTCA9IHByaW9yaXR5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBBY3RpdmF0b3IoZSwgYWN0aXZhdG9yKXtcclxuICAgIGNvbnN0IGlzQ0xvc2VzdCA9IGUudGFyZ2V0LmNsb3Nlc3QoYWN0aXZhdG9yKTtcclxuICAgICAgICBjb25zdCBjaGFuZ2VQcmlvcml0eUZvcm1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGFjdGl2YXRvcikpO1xyXG4gICAgICAgIGlmKCFpc0NMb3Nlc3Qpe1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaGlkXCIpXHJcbiAgICAgICAgICAgIGNoYW5nZVByaW9yaXR5Rm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RPcHRpb24obmFtZSkge1xyXG4vLyAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbi8vICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4vLyAgICAgcHJvamVjdE9wdGlvbi5pbm5lckhUTUwgPSBuYW1lO1xyXG4vLyAgICAgZG9tRWxlbWVudHMucHJvamVjdFNlbGVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XHJcbi8vIH0iLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHByb2plY3RzID0gW107XHJcblxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5hbWUobmFtZSl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2spe1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnB1c2godGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFzayh0YXNrSW5kZXgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zcGxpY2UodGFza0luZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vVGFza3NcIjtcclxuaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcclxuaW1wb3J0ICogYXMgZXZlbnRzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdCgpe1xyXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcclxuICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBQcm9qZWN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IHByb2plY3QuZ2V0TmFtZSgpO1xyXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xyXG4gICAgfSkgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RPcHRpb25zKHNlbGVjdEVsZW1lbnQpe1xyXG4gICAgc2VsZWN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IHByb2plY3QuZ2V0TmFtZSgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0TmFtZSgpKTtcclxuICAgICAgICBwcm9qZWN0T3B0aW9uLmlubmVySFRNTCA9IHByb2plY3QuZ2V0TmFtZSgpO1xyXG4gICAgICAgIHNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XHJcbiAgICAgICAgLy9kb21FbGVtZW50cy5lZGl0VGFza0Zvcm1Qcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2tQcmlvcml0aWVzKHNlbGVjdEVsZW1lbnQpe1xyXG4gICAgc2VsZWN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgVGFzay5kZXNjcmlwdGlvbnMuZm9yRWFjaCgoZGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgZGVzY3JpcHRpb25PcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICBkZXNjcmlwdGlvbk9wdGlvbi5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICBzZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uT3B0aW9uKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUYXNrcygpe1xyXG4gICAgZG9tRWxlbWVudHMubWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIFByb2plY3QucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC5nZXRUYXNrcygpKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2sua2V5cyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb21FbGVtZW50cy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGFzay1jb250YWluZXJcIiwgZG9tRWxlbWVudHMubWFpbkNvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrT3ZlcnZpZXcgPSBkb21FbGVtZW50cy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGFzay1vdmVydmlld1wiLCB0YXNrQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9tRWxlbWVudHMuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2stZGVzY3JpcHRpb25cIiwgdGFza0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvbUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLW5hbWVcIiwgdGFza092ZXJ2aWV3KTtcclxuICAgICAgICAgICAgdGFza05hbWUuaW5uZXJIVE1MID0gdGFzay5nZXRUaXRsZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrQnV0dG9ucyA9IGRvbUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLWJ1dHRvbnNcIiwgdGFza092ZXJ2aWV3KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5Q29udGFpbmVyID0gZG9tRWxlbWVudHMuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgXCJjaGFuZ2UtcHJpb3JpdHktY29udGFpbmVyXCIsIHRhc2tCdXR0b25zKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb21FbGVtZW50cy5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIFwic2VsZWN0LXByaW9yaXR5XCIsIGNoYW5nZVByaW9yaXR5Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgY2hhbmdlUHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgc2VsZWN0UHJpb3JpdHkuc2l6ZSA9IDM7XHJcbiAgICAgICAgICAgIHNlbGVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suZ2V0VGFza0lkKCkpO1xyXG4gICAgICAgICAgICByZW5kZXJUYXNrUHJpb3JpdGllcyhzZWxlY3RQcmlvcml0eSk7XHJcbiAgICAgICAgICAgIGV2ZW50cy5Qcmlvcml0eVNlbGVjdChzZWxlY3RQcmlvcml0eSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VQcm9qZWN0Q29udGFpbmVyID0gZG9tRWxlbWVudHMuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgXCJjaGFuZ2UtcHJvamVjdC1jb250YWluZXJcIiwgdGFza0J1dHRvbnMpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9tRWxlbWVudHMuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCBcInNlbGVjdC1wcm9qZWN0XCIsIGNoYW5nZVByb2plY3RDb250YWluZXIpO1xyXG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIHNlbGVjdFByb2plY3Quc2l6ZSA9IDM7XHJcbiAgICAgICAgICAgIHNlbGVjdFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay5nZXRUYXNrSWQoKSk7XHJcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RPcHRpb25zKHNlbGVjdFByb2plY3QpO1xyXG4gICAgICAgICAgICBldmVudHMuUHJvamVjdFNlbGVjdChzZWxlY3RQcm9qZWN0KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBUYXNrLmJ1dHRvbkltYWdlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0J1dHRvbiA9IGRvbUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJ0YXNrLWJ1dHRvblwiLCB0YXNrQnV0dG9ucyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suZ2V0VGFza0lkKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uSW1hZ2UgPSBkb21FbGVtZW50cy5jcmVhdGVFbGVtZW50V2l0aG91dENsYXNzKFwiaW1nXCIsIHRhc2tCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zdCBidXR0b25JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uSW1hZ2Uuc3JjID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBidXR0b25JbWFnZS5hbHQgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBcnJheS5mcm9tKFRhc2suYnV0dG9uSW1hZ2VzLmtleXMoKSlbMF06XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cy5PcGVuRWRpdFRhc2tGb3JtKHRhc2tCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEFycmF5LmZyb20oVGFzay5idXR0b25JbWFnZXMua2V5cygpKVsxXTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLlNob3dDaGFuZ2VGb3JtKHRhc2tCdXR0b24sIGNoYW5nZVByaW9yaXR5Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBcnJheS5mcm9tKFRhc2suYnV0dG9uSW1hZ2VzLmtleXMoKSlbMl06XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cy5TaG93Q2hhbmdlRm9ybSh0YXNrQnV0dG9uLCBjaGFuZ2VQcm9qZWN0Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBcnJheS5mcm9tKFRhc2suYnV0dG9uSW1hZ2VzLmtleXMoKSlbM106XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cy5SZW1vdmVUYXNrKHRhc2tCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEFycmF5LmZyb20oVGFzay5idXR0b25JbWFnZXMua2V5cygpKVsyXSlcclxuICAgICAgICAgICAgICAgIC8vdGFza0J1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JbWFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGZpZWxkIG9mIFRhc2suZGVzY3JpcHRpb25GaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwYW5Db250YWluZXIgPSBkb21FbGVtZW50cy5jcmVhdGVFbGVtZW50V2l0aG91dENsYXNzKFwiZGl2XCIsIHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBkb21FbGVtZW50cy5jcmVhdGVFbGVtZW50V2l0aG91dENsYXNzKFwic3BhblwiLHNwYW5Db250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgZmllbGROYW1lLmlubmVySFRNTCA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IGRvbUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnRXaXRob3V0Q2xhc3MoXCJzcGFuXCIsIHNwYW5Db250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUYXNrLmRlc2NyaXB0aW9uRmllbGRzWzBdOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlLmlubmVySFRNTCA9IHRhc2suZ2V0VGl0bGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUYXNrLmRlc2NyaXB0aW9uRmllbGRzWzFdOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlLmlubmVySFRNTCA9IHRhc2suZ2V0RHVlRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFRhc2suZGVzY3JpcHRpb25GaWVsZHNbMl06XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUuaW5uZXJIVE1MID0gdGFzay5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFRhc2suZGVzY3JpcHRpb25GaWVsZHNbM106XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUuaW5uZXJIVE1MID0gdGFzay5nZXRQcmlvcml0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlLnNldEF0dHJpYnV0ZShcInByaW9yaXR5LWlkXCIsIHRhc2suZ2V0VGFza0lkKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgIH0pXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL3Rhc2tGb3JtLmNzc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy90YXNrcy5jc3NcIjtcclxuaW1wb3J0IFwiLi9pbWcvbG9nby5qcGdcIjtcclxuaW1wb3J0IFwiLi9pbWcvZWRpdC5wbmdcIjtcclxuaW1wb3J0IFwiLi9pbWcvcHJvamVjdHMucG5nXCI7XHJcbmltcG9ydCBcIi4vaW1nL3RvZGF5LnBuZ1wiO1xyXG5pbXBvcnQgXCIuL2ltZy9pbmJveC5wbmdcIjtcclxuaW1wb3J0IFwiLi9pbWcvaG9tZS5wbmdcIjtcclxuaW1wb3J0IFwiLi9pbWcvbWVudS5wbmdcIjtcclxuaW1wb3J0IFwiLi9pbWcvcHJpb3JpdHkucG5nXCI7XHJcbmltcG9ydCBcIi4vaW1nL21vdmUucG5nXCI7XHJcbmltcG9ydCBcIi4vaW1nL2RlbGV0ZS5wbmdcIjtcclxuXHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9UYXNrc1wiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2plY3QsIHJlbmRlclByb2plY3RPcHRpb25zLCByZW5kZXJUYXNrUHJpb3JpdGllcyB9IGZyb20gXCIuL3JlbmRlcnNcIjtcclxuaW1wb3J0ICogYXMgZG9tRWxlbWVudHMgZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcclxuXHJcblxyXG4vLyBjb25zdCB0YXNrMSA9IG5ldyBUYXNrKFwiVGFza1wiLFwic29tZSB0YXNrXCIsIFwiIDEyLjEyLjIwMjJcIiwgXCJMb3dcIiwgXCJEZWZhdWx0XCIpO1xyXG4vLyBjb25zb2xlLmxvZyh0YXNrMS5nZXRUaXRsZSgpKTtcclxuXHJcbi8vIGNvbnN0IHByb2plY3QxID0gbmV3IFByb2plY3QoXCJOZXcgUHJvamVjdFwiKTtcclxuLy8gY29uc29sZS5sb2cocHJvamVjdDEuZ2V0TmFtZSgpKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLDExKSwgXCJ5eXl5LU1NLWRkXCIpKTtcclxuY3JlYXRlUHJvamVjdChcIk15IHByb2plY3RcIik7XHJcbi8vIGNyZWF0ZVByb2plY3QoXCJNeSBwcm9qZWN0MlwiKTtcclxuLy8gY3JlYXRlUHJvamVjdChcIk15IHByb2plY3QzXCIpO1xyXG5ldmVudHMuQm9keUV2ZW50cygpO1xyXG4gZXZlbnRzLk9wZW5BZGRUYXNrRm9ybSgpO1xyXG4gZXZlbnRzLkNsb3NlQWRkVGFza0Zvcm0oKTtcclxuIGV2ZW50cy5PcGVuQWRkUHJvamVjdEZvcm0oKTtcclxuIGV2ZW50cy5DbG9zZUFkZFByb2plY3RGb3JtKCk7XHJcbiBldmVudHMuQWRkUHJvamVjdCgpO1xyXG4gZXZlbnRzLkFkZFRhc2soKTtcclxuIGV2ZW50cy5zaG93RGVzY3JpcHRpb24oKTtcclxuIGV2ZW50cy5DbG9zZUVkaXRUYXNrRm9ybSgpO1xyXG4gZXZlbnRzLlVwZGF0ZVRhc2soKTtcclxuIHJlbmRlclByb2plY3QoKTtcclxuIHJlbmRlclByb2plY3RPcHRpb25zKGRvbUVsZW1lbnRzLnByb2plY3RTZWxlY3RMaXN0KTtcclxuIHJlbmRlclByb2plY3RPcHRpb25zKGRvbUVsZW1lbnRzLmVkaXRUYXNrRm9ybVByb2plY3QpO1xyXG4gcmVuZGVyVGFza1ByaW9yaXRpZXMoZG9tRWxlbWVudHMudGFza0Zvcm1Qcmlvcml0eSk7XHJcbiByZW5kZXJUYXNrUHJpb3JpdGllcyhkb21FbGVtZW50cy5lZGl0VGFza0Zvcm1Qcmlvcml0eSk7XHJcblxyXG4gZXZlbnRzLlRlc3QoKTtcclxuIFxyXG4gXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=