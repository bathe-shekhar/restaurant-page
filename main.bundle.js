/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/DancingScript-Bold.ttf */ "./src/assets/DancingScript-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'DancingScriptBold';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('ttf');
    font-weight: 700;

}

:root {
    --tiffany_blue: #A0E7E5;
    --hot_pink: #FFAEBC;
    --mint: #B4F8C8;
    --yellow: #FBE7C6;
}

body {
    margin: 0;
    width: 100%;
}

nav {
    padding: 20px;
    background-color: var(--hot_pink);
    display: flex;
    justify-content: space-around;
}

.headerbar {
    background: var(--tiffany_blue);
    padding: 20px 0px;
    text-align: center;
    font-family: 'DancingScriptBold';
    font-weight: 900;
    font-size: 48px;
    color: white;
    font-style: italic;
}

.nav-btn {
    background-color: rgb(128, 0, 0, 0.5);
    /* opacity: 0.25; */
    padding: 15px 25px;
    /* color: var(--tiffany_blue); */
    color: white;
    border: 2px solid rgb(128, 0, 0, 0.2);
    border-radius: 30px;
    font-size: medium;
    font-weight: 600;
    font-size: 24px;
}


#content {
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: rgb(160, 231, 229, 0.5);
}

.banner {
    height: 100%;
}

.banner img {
    height: 100%;
    width: 100%;
    /* background-image: url('../src/assets/banner.jpg'); */
    object-fit: cover;
    /* background-repeat: repeat; */
}

.home-content {
    background-color: var(--tiffany_blue);
    color: white;
    font-family: 'DancingScriptBold';
    /* font-weight: 900; */
    font-size: 48px;
    font-style: italic;
    text-align: center;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: max-content;
    height: max-content;
    padding: 30px;
    align-content: center;
    opacity: 0.9;
    border-radius: 50px;
}

.menu {
    display: flex;
    justify-content: space-around;
    padding-top: 60px;
    flex-wrap: wrap;
}

.menu-item {
    width: 20%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.strawberry {
    background-color: var(--hot_pink);
    color: maroon;
}

.pineapple {
    background-color: var(--yellow);
    color: darkgoldenrod;
}

.kiwi {
    background-color: var(--mint);
    color: darkgreen
}

.menu-item-img img {
    height: 200px;
    width: 200px;
    object-fit: fill;
    /* border: 0px solid; */
    /* z-index: 2; */
    border-radius: 150px;
    box-shadow: 5px 5px 3px 3px lightgray;
}

.item1 img {
    border: 30px solid var(--hot_pink);
}

.item2 img {
    border: 30px solid var(--yellow);
}

.item3 img {
    border: 30px solid var(--mint);
}

.menu-item-description {
    width: 100%;
    /* min-height: 50%; */
    margin-top: -30px;
    border-radius: 50px;
    box-shadow: 5px 5px 3px 3px lightgray;
    /* color: white; */
    padding: 30px 20px;
}

.menu-title {
    font-family: 'DancingScriptBold';
    font-size: 36px;
    font-weight: 900;
    text-align: center;
    margin-top: 20px;
    font-style: italic;
    text-decoration: underline;
}

.menu-item-benefits {
    font-size: 24px;
    /* font-weight: 700; */
    text-align: left;
    margin-top: 20px;
    font-style: italic;
}

.about-title {
    font-family: 'DancingScriptBold';
    font-size: 36px;
    font-weight: 900;
    text-align: center;
    padding: 20px;
    font-style: italic;
    /* text-decoration: underline;   */
    color: white;
}

.about-description {
    /* width: 100%; */
    display: flex;
    padding: 40px 100px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.about-image {
    width: 35%;
}

.about-image img {
    width: 100%;
    object-fit: cover;
    border: 10px solid white;
}

.about-section {
    background-color: var(--tiffany_blue);
    height: 100%;
}

.about-info {
    width: 45%;
    margin-left: 75px;
    font-family: 'DancingScriptBold';
    font-size: 30px;
    font-weight: normal;
    text-align: left;
    /* padding: 20px; */
    font-style: italic;
    /* text-decoration: underline;   */
    color: white;
}

h1 {
    color: var(--tiffany_blue);

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;IAChC,0DAAyD;IACzD,gBAAgB;;AAEpB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,WAAW;AACf;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;IAC/B,iBAAiB;IACjB,kBAAkB;IAClB,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,mBAAmB;IACnB,kBAAkB;IAClB,gCAAgC;IAChC,YAAY;IACZ,qCAAqC;IACrC,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;AACnB;;;AAGA;IACI,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uDAAuD;IACvD,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,qCAAqC;IACrC,YAAY;IACZ,gCAAgC;IAChC,sBAAsB;IACtB,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;AAEvB;;AAEA;IACI,iCAAiC;IACjC,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B;AACJ;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;IAChB,oBAAoB;IACpB,qCAAqC;AACzC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;IACnB,qCAAqC;IACrC,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,qCAAqC;IACrC,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,gCAAgC;IAChC,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,0BAA0B;;AAE9B","sourcesContent":["@font-face {\r\n    font-family: 'DancingScriptBold';\r\n    src: url('./assets/DancingScript-Bold.ttf') format('ttf');\r\n    font-weight: 700;\r\n\r\n}\r\n\r\n:root {\r\n    --tiffany_blue: #A0E7E5;\r\n    --hot_pink: #FFAEBC;\r\n    --mint: #B4F8C8;\r\n    --yellow: #FBE7C6;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\nnav {\r\n    padding: 20px;\r\n    background-color: var(--hot_pink);\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.headerbar {\r\n    background: var(--tiffany_blue);\r\n    padding: 20px 0px;\r\n    text-align: center;\r\n    font-family: 'DancingScriptBold';\r\n    font-weight: 900;\r\n    font-size: 48px;\r\n    color: white;\r\n    font-style: italic;\r\n}\r\n\r\n.nav-btn {\r\n    background-color: rgb(128, 0, 0, 0.5);\r\n    /* opacity: 0.25; */\r\n    padding: 15px 25px;\r\n    /* color: var(--tiffany_blue); */\r\n    color: white;\r\n    border: 2px solid rgb(128, 0, 0, 0.2);\r\n    border-radius: 30px;\r\n    font-size: medium;\r\n    font-weight: 600;\r\n    font-size: 24px;\r\n}\r\n\r\n\r\n#content {\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: relative;\r\n    background-color: rgb(160, 231, 229, 0.5);\r\n}\r\n\r\n.banner {\r\n    height: 100%;\r\n}\r\n\r\n.banner img {\r\n    height: 100%;\r\n    width: 100%;\r\n    /* background-image: url('../src/assets/banner.jpg'); */\r\n    object-fit: cover;\r\n    /* background-repeat: repeat; */\r\n}\r\n\r\n.home-content {\r\n    background-color: var(--tiffany_blue);\r\n    color: white;\r\n    font-family: 'DancingScriptBold';\r\n    /* font-weight: 900; */\r\n    font-size: 48px;\r\n    font-style: italic;\r\n    text-align: center;\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    width: max-content;\r\n    height: max-content;\r\n    padding: 30px;\r\n    align-content: center;\r\n    opacity: 0.9;\r\n    border-radius: 50px;\r\n}\r\n\r\n.menu {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding-top: 60px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.menu-item {\r\n    width: 20%;\r\n    height: 600px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.strawberry {\r\n    background-color: var(--hot_pink);\r\n    color: maroon;\r\n}\r\n\r\n.pineapple {\r\n    background-color: var(--yellow);\r\n    color: darkgoldenrod;\r\n}\r\n\r\n.kiwi {\r\n    background-color: var(--mint);\r\n    color: darkgreen\r\n}\r\n\r\n.menu-item-img img {\r\n    height: 200px;\r\n    width: 200px;\r\n    object-fit: fill;\r\n    /* border: 0px solid; */\r\n    /* z-index: 2; */\r\n    border-radius: 150px;\r\n    box-shadow: 5px 5px 3px 3px lightgray;\r\n}\r\n\r\n.item1 img {\r\n    border: 30px solid var(--hot_pink);\r\n}\r\n\r\n.item2 img {\r\n    border: 30px solid var(--yellow);\r\n}\r\n\r\n.item3 img {\r\n    border: 30px solid var(--mint);\r\n}\r\n\r\n.menu-item-description {\r\n    width: 100%;\r\n    /* min-height: 50%; */\r\n    margin-top: -30px;\r\n    border-radius: 50px;\r\n    box-shadow: 5px 5px 3px 3px lightgray;\r\n    /* color: white; */\r\n    padding: 30px 20px;\r\n}\r\n\r\n.menu-title {\r\n    font-family: 'DancingScriptBold';\r\n    font-size: 36px;\r\n    font-weight: 900;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n    font-style: italic;\r\n    text-decoration: underline;\r\n}\r\n\r\n.menu-item-benefits {\r\n    font-size: 24px;\r\n    /* font-weight: 700; */\r\n    text-align: left;\r\n    margin-top: 20px;\r\n    font-style: italic;\r\n}\r\n\r\n.about-title {\r\n    font-family: 'DancingScriptBold';\r\n    font-size: 36px;\r\n    font-weight: 900;\r\n    text-align: center;\r\n    padding: 20px;\r\n    font-style: italic;\r\n    /* text-decoration: underline;   */\r\n    color: white;\r\n}\r\n\r\n.about-description {\r\n    /* width: 100%; */\r\n    display: flex;\r\n    padding: 40px 100px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.about-image {\r\n    width: 35%;\r\n}\r\n\r\n.about-image img {\r\n    width: 100%;\r\n    object-fit: cover;\r\n    border: 10px solid white;\r\n}\r\n\r\n.about-section {\r\n    background-color: var(--tiffany_blue);\r\n    height: 100%;\r\n}\r\n\r\n.about-info {\r\n    width: 45%;\r\n    margin-left: 75px;\r\n    font-family: 'DancingScriptBold';\r\n    font-size: 30px;\r\n    font-weight: normal;\r\n    text-align: left;\r\n    /* padding: 20px; */\r\n    font-style: italic;\r\n    /* text-decoration: underline;   */\r\n    color: white;\r\n}\r\n\r\nh1 {\r\n    color: var(--tiffany_blue);\r\n\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_banner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/banner.jpg */ "./src/assets/banner.jpg");


function showAboutContent() {

    const aboutSection = document.createElement('div');
    aboutSection.className = "about-section";

    const aboutTitle = document.createElement('div');
    aboutTitle.className = "about-title";
    aboutTitle.innerText = "About Us"

    aboutSection.appendChild(aboutTitle);

    const aboutDesc = document.createElement('div');
    aboutDesc.className = "about-description";

    const aboutImage = document.createElement('div');
    aboutImage.className = "about-image";

    const bannerImage = new Image();
    bannerImage.src = _assets_banner_jpg__WEBPACK_IMPORTED_MODULE_0__;

    aboutImage.appendChild(bannerImage);

    const aboutInfo = document.createElement('div');
    aboutInfo.className = "about-info";
    aboutInfo.innerHTML = "Revitalize your senses, one sip at a time. Discover a smoothie sensation like no other. Bliss in every sip.<br>A smoothie is a beverage made by puréeing ingredients in a blender. A smoothie commonly has a liquid base, such as fruit juice or milk, yogurt or ice cream. Other ingredients may be added, including fruits, vegetables, non-dairy milk, crushed ice, whey powder or nutritional supplements.<br>Smoothies can help you lose excess body weight without skipping any meals. The fruits and berries that are used to prepare these drinks serve as excellent companions for keeping you healthy and feeling cooler on a hot summer morning.";

    aboutDesc.appendChild(aboutImage);
    aboutDesc.appendChild(aboutInfo);

    aboutSection.appendChild(aboutDesc);

    content.appendChild(aboutSection);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAboutContent);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_banner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/banner.jpg */ "./src/assets/banner.jpg");


function showHomeContents() {

    // const content = document.querySelector('#content');
    const banner = document.createElement('div');
    banner.className = 'banner';
    const bannerImage = new Image();
    bannerImage.src = _assets_banner_jpg__WEBPACK_IMPORTED_MODULE_0__;

    const homeContent = document.createElement('div');
    homeContent.className = 'home-content';
    homeContent.innerHTML = " Revitalize your senses, one sip at a time.<br> Discover a smoothie sensation like no other.<br> Bliss in every sip."

    banner.appendChild(bannerImage);
    content.appendChild(banner);
    content.appendChild(homeContent);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showHomeContents);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_assets_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/data.json */ "./src/assets/data.json");
/* harmony import */ var _assets_strawberry_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/strawberry.jpeg */ "./src/assets/strawberry.jpeg");
/* harmony import */ var _assets_pineapple_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pineapple.jpeg */ "./src/assets/pineapple.jpeg");
/* harmony import */ var _assets_kiwi_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/kiwi.jpeg */ "./src/assets/kiwi.jpeg");





function showMenuContent() {


    console.log("data: ", _src_assets_data_json__WEBPACK_IMPORTED_MODULE_0__);

    let count = 1;
    const menu = document.createElement('div');
    menu.className = 'menu';

    const strawberryImage = new Image();
    strawberryImage.src = _assets_strawberry_jpeg__WEBPACK_IMPORTED_MODULE_1__;

    const pineappleImage = new Image();
    pineappleImage.src = _assets_pineapple_jpeg__WEBPACK_IMPORTED_MODULE_2__;

    const kiwiImage = new Image();
    kiwiImage.src = _assets_kiwi_jpeg__WEBPACK_IMPORTED_MODULE_3__;

    _src_assets_data_json__WEBPACK_IMPORTED_MODULE_0__.items.forEach(item => {
        console.log("title: ", item.title);
        console.log("desc: ", item.description);


        const menuItem = document.createElement('div');
        menuItem.className = "menu-item";

        const menuItemImage = document.createElement('div');
        let classlist = `menu-item-img item${count}`
        menuItemImage.classList = classlist;

        const menuImg = new Image();
        // menuImg.src = item.image;

        const menuDescription = document.createElement('div');

        if (count == 1) {
            menuDescription.className = "menu-item-description strawberry";
            menuItemImage.appendChild(strawberryImage);
        }
        if (count == 2) {
            menuDescription.className = "menu-item-description pineapple";
            menuItemImage.appendChild(pineappleImage);
        }
        if (count == 3) {
            menuDescription.className = "menu-item-description kiwi";
            menuItemImage.appendChild(kiwiImage);
        }
        const menuItemTitle = document.createElement('div');
        menuItemTitle.className = "menu-title";
        menuItemTitle.innerHTML = item.title;

        const menuItemBenefits = document.createElement('ul');
        menuItemBenefits.className = "menu-item-benefits";

        const benefits = item.description.split(",");
        console.log(benefits);

        benefits.forEach(benefit => {
            const liItem = document.createElement('li');
            liItem.innerHTML = benefit;
            menuItemBenefits.appendChild(liItem);
        })

        menuDescription.appendChild(menuItemTitle);
        menuDescription.appendChild(menuItemBenefits);



        menuItem.appendChild(menuItemImage);
        menuItem.appendChild(menuDescription);

        menu.appendChild(menuItem);
        count++;
    });





    content.appendChild(menu)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenuContent);




/***/ }),

/***/ "./src/assets/DancingScript-Bold.ttf":
/*!*******************************************!*\
  !*** ./src/assets/DancingScript-Bold.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57bdbb733ef4ac8e2df3.ttf";

/***/ }),

/***/ "./src/assets/banner.jpg":
/*!*******************************!*\
  !*** ./src/assets/banner.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc6908db9410939488da.jpg";

/***/ }),

/***/ "./src/assets/kiwi.jpeg":
/*!******************************!*\
  !*** ./src/assets/kiwi.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "327ed14f23cc7db303f3.jpeg";

/***/ }),

/***/ "./src/assets/pineapple.jpeg":
/*!***********************************!*\
  !*** ./src/assets/pineapple.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b279fd57ea0c7e66e894.jpeg";

/***/ }),

/***/ "./src/assets/strawberry.jpeg":
/*!************************************!*\
  !*** ./src/assets/strawberry.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7c5a9acd5942c8016c1.jpeg";

/***/ }),

/***/ "./src/assets/data.json":
/*!******************************!*\
  !*** ./src/assets/data.json ***!
  \******************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"items":[{"title":"Strawberry Smoothie","image":"../src/assets/strawberry.jpeg","description":"Low Calorie,Cholesterol Champion,Hydration Boost,Diabetic Delights,Good for the Gut,“C” is for Vitamin C,Eye Spy,Fewer Wrinkles in Time."},{"title":"Pineapple Smoothie","image":"../src/assets/pineapple.jpeg","description":"Highly nutritious,Contains antioxidants,Aid digestion,Reduce your risk of cancer,Boost immunity, Suppress inflammation,Ease symptoms of arthritis,Speed recovery after surgery, Easy to add to your diet"},{"title":"Kiwi Smoothie","image":"../src/assets/kiwi.jpeg","description":"Fired Digestion, Glowing Skin, Happier Heart, Immunity Pump, Clearer Vision, Smoother Respiration, Boosted Metabolism, Peaceful Sleep"}]}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");





const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

const content = document.querySelector('#content');


homeButton.addEventListener("click", () => {
    clearContent();
    (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

menuButton.addEventListener("click", () => {
    clearContent();
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

aboutButton.addEventListener("click", () => {
    clearContent();
    (0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

function clearContent() {
    content.innerHTML = "";
}

(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2lCO0FBQ0Q7QUFDRTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQWdCO0FBQ3BCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFlO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFnQjtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFnQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9EYW5jaW5nU2NyaXB0LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZ1NjcmlwdEJvbGQnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0dGYnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLXRpZmZhbnlfYmx1ZTogI0EwRTdFNTtcclxuICAgIC0taG90X3Bpbms6ICNGRkFFQkM7XHJcbiAgICAtLW1pbnQ6ICNCNEY4Qzg7XHJcbiAgICAtLXllbGxvdzogI0ZCRTdDNjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubmF2IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3RfcGluayk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5oZWFkZXJiYXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGlmZmFueV9ibHVlKTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nU2NyaXB0Qm9sZCc7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4ubmF2LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAwLCAwLCAwLjUpO1xyXG4gICAgLyogb3BhY2l0eTogMC4yNTsgKi9cclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgIC8qIGNvbG9yOiB2YXIoLS10aWZmYW55X2JsdWUpOyAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyOCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcblxyXG4jY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAyMzEsIDIyOSwgMC41KTtcclxufVxyXG5cclxuLmJhbm5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5iYW5uZXIgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zcmMvYXNzZXRzL2Jhbm5lci5qcGcnKTsgKi9cclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgLyogYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDsgKi9cclxufVxyXG5cclxuLmhvbWUtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55X2JsdWUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nU2NyaXB0Qm9sZCc7XHJcbiAgICAvKiBmb250LXdlaWdodDogOTAwOyAqL1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ubWVudS1pdGVtIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnN0cmF3YmVycnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG90X3BpbmspO1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxufVxyXG5cclxuLnBpbmVhcHBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xyXG4gICAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbn1cclxuXHJcbi5raXdpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pbnQpO1xyXG4gICAgY29sb3I6IGRhcmtncmVlblxyXG59XHJcblxyXG4ubWVudS1pdGVtLWltZyBpbWcge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgICAvKiBib3JkZXI6IDBweCBzb2xpZDsgKi9cclxuICAgIC8qIHotaW5kZXg6IDI7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggM3B4IDNweCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5pdGVtMSBpbWcge1xyXG4gICAgYm9yZGVyOiAzMHB4IHNvbGlkIHZhcigtLWhvdF9waW5rKTtcclxufVxyXG5cclxuLml0ZW0yIGltZyB7XHJcbiAgICBib3JkZXI6IDMwcHggc29saWQgdmFyKC0teWVsbG93KTtcclxufVxyXG5cclxuLml0ZW0zIGltZyB7XHJcbiAgICBib3JkZXI6IDMwcHggc29saWQgdmFyKC0tbWludCk7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0tZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBtaW4taGVpZ2h0OiA1MCU7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDNweCAzcHggbGlnaHRncmF5O1xyXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG59XHJcblxyXG4ubWVudS10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmdTY3JpcHRCb2xkJztcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0tYmVuZWZpdHMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IDcwMDsgKi9cclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uYWJvdXQtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nU2NyaXB0Qm9sZCc7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAgICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hYm91dC1kZXNjcmlwdGlvbiB7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDEwMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uYWJvdXQtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDM1JTtcclxufVxyXG5cclxuLmFib3V0LWltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uYWJvdXQtc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55X2JsdWUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYWJvdXQtaW5mbyB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmdTY3JpcHRCb2xkJztcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAgICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGNvbG9yOiB2YXIoLS10aWZmYW55X2JsdWUpO1xyXG5cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdDQUFnQztJQUNoQywwREFBeUQ7SUFDekQsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1REFBdUQ7SUFDdkQsaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCOztBQUU5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nU2NyaXB0Qm9sZCc7XFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9EYW5jaW5nU2NyaXB0LUJvbGQudHRmJykgZm9ybWF0KCd0dGYnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLXRpZmZhbnlfYmx1ZTogI0EwRTdFNTtcXHJcXG4gICAgLS1ob3RfcGluazogI0ZGQUVCQztcXHJcXG4gICAgLS1taW50OiAjQjRGOEM4O1xcclxcbiAgICAtLXllbGxvdzogI0ZCRTdDNjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdF9waW5rKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJiYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aWZmYW55X2JsdWUpO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmdTY3JpcHRCb2xkJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAwLCAwLCAwLjUpO1xcclxcbiAgICAvKiBvcGFjaXR5OiAwLjI1OyAqL1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxyXFxuICAgIC8qIGNvbG9yOiB2YXIoLS10aWZmYW55X2JsdWUpOyAqL1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMjgsIDAsIDAsIDAuMik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMjMxLCAyMjksIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXIgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zcmMvYXNzZXRzL2Jhbm5lci5qcGcnKTsgKi9cXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7ICovXFxyXFxufVxcclxcblxcclxcbi5ob21lLWNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55X2JsdWUpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZ1NjcmlwdEJvbGQnO1xcclxcbiAgICAvKiBmb250LXdlaWdodDogOTAwOyAqL1xcclxcbiAgICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGhlaWdodDogNjAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zdHJhd2JlcnJ5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG90X3BpbmspO1xcclxcbiAgICBjb2xvcjogbWFyb29uO1xcclxcbn1cXHJcXG5cXHJcXG4ucGluZWFwcGxlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG4gICAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XFxyXFxufVxcclxcblxcclxcbi5raXdpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWludCk7XFxyXFxuICAgIGNvbG9yOiBkYXJrZ3JlZW5cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1pbWcgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBvYmplY3QtZml0OiBmaWxsO1xcclxcbiAgICAvKiBib3JkZXI6IDBweCBzb2xpZDsgKi9cXHJcXG4gICAgLyogei1pbmRleDogMjsgKi9cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggM3B4IDNweCBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5pdGVtMSBpbWcge1xcclxcbiAgICBib3JkZXI6IDMwcHggc29saWQgdmFyKC0taG90X3BpbmspO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbTIgaW1nIHtcXHJcXG4gICAgYm9yZGVyOiAzMHB4IHNvbGlkIHZhcigtLXllbGxvdyk7XFxyXFxufVxcclxcblxcclxcbi5pdGVtMyBpbWcge1xcclxcbiAgICBib3JkZXI6IDMwcHggc29saWQgdmFyKC0tbWludCk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogbWluLWhlaWdodDogNTAlOyAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggM3B4IGxpZ2h0Z3JheTtcXHJcXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xcclxcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nU2NyaXB0Qm9sZCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLWJlbmVmaXRzIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAvKiBmb250LXdlaWdodDogNzAwOyAqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZ1NjcmlwdEJvbGQnO1xcclxcbiAgICBmb250LXNpemU6IDM2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgICAqL1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDEwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaW1hZ2Uge1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaW1hZ2UgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICBib3JkZXI6IDEwcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1zZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueV9ibHVlKTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaW5mbyB7XFxyXFxuICAgIHdpZHRoOiA0NSU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmdTY3JpcHRCb2xkJztcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAgICovXFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGlmZmFueV9ibHVlKTtcXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9hc3NldHMvYmFubmVyLmpwZ1wiO1xyXG5cclxuZnVuY3Rpb24gc2hvd0Fib3V0Q29udGVudCgpIHtcclxuXHJcbiAgICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0U2VjdGlvbi5jbGFzc05hbWUgPSBcImFib3V0LXNlY3Rpb25cIjtcclxuXHJcbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dFRpdGxlLmNsYXNzTmFtZSA9IFwiYWJvdXQtdGl0bGVcIjtcclxuICAgIGFib3V0VGl0bGUuaW5uZXJUZXh0ID0gXCJBYm91dCBVc1wiXHJcblxyXG4gICAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGFib3V0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXREZXNjLmNsYXNzTmFtZSA9IFwiYWJvdXQtZGVzY3JpcHRpb25cIjtcclxuXHJcbiAgICBjb25zdCBhYm91dEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dEltYWdlLmNsYXNzTmFtZSA9IFwiYWJvdXQtaW1hZ2VcIjtcclxuXHJcbiAgICBjb25zdCBiYW5uZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgYmFubmVySW1hZ2Uuc3JjID0gQmFubmVyO1xyXG5cclxuICAgIGFib3V0SW1hZ2UuYXBwZW5kQ2hpbGQoYmFubmVySW1hZ2UpO1xyXG5cclxuICAgIGNvbnN0IGFib3V0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXRJbmZvLmNsYXNzTmFtZSA9IFwiYWJvdXQtaW5mb1wiO1xyXG4gICAgYWJvdXRJbmZvLmlubmVySFRNTCA9IFwiUmV2aXRhbGl6ZSB5b3VyIHNlbnNlcywgb25lIHNpcCBhdCBhIHRpbWUuIERpc2NvdmVyIGEgc21vb3RoaWUgc2Vuc2F0aW9uIGxpa2Ugbm8gb3RoZXIuIEJsaXNzIGluIGV2ZXJ5IHNpcC48YnI+QSBzbW9vdGhpZSBpcyBhIGJldmVyYWdlIG1hZGUgYnkgcHVyw6llaW5nIGluZ3JlZGllbnRzIGluIGEgYmxlbmRlci4gQSBzbW9vdGhpZSBjb21tb25seSBoYXMgYSBsaXF1aWQgYmFzZSwgc3VjaCBhcyBmcnVpdCBqdWljZSBvciBtaWxrLCB5b2d1cnQgb3IgaWNlIGNyZWFtLiBPdGhlciBpbmdyZWRpZW50cyBtYXkgYmUgYWRkZWQsIGluY2x1ZGluZyBmcnVpdHMsIHZlZ2V0YWJsZXMsIG5vbi1kYWlyeSBtaWxrLCBjcnVzaGVkIGljZSwgd2hleSBwb3dkZXIgb3IgbnV0cml0aW9uYWwgc3VwcGxlbWVudHMuPGJyPlNtb290aGllcyBjYW4gaGVscCB5b3UgbG9zZSBleGNlc3MgYm9keSB3ZWlnaHQgd2l0aG91dCBza2lwcGluZyBhbnkgbWVhbHMuIFRoZSBmcnVpdHMgYW5kIGJlcnJpZXMgdGhhdCBhcmUgdXNlZCB0byBwcmVwYXJlIHRoZXNlIGRyaW5rcyBzZXJ2ZSBhcyBleGNlbGxlbnQgY29tcGFuaW9ucyBmb3Iga2VlcGluZyB5b3UgaGVhbHRoeSBhbmQgZmVlbGluZyBjb29sZXIgb24gYSBob3Qgc3VtbWVyIG1vcm5pbmcuXCI7XHJcblxyXG4gICAgYWJvdXREZXNjLmFwcGVuZENoaWxkKGFib3V0SW1hZ2UpO1xyXG4gICAgYWJvdXREZXNjLmFwcGVuZENoaWxkKGFib3V0SW5mbyk7XHJcblxyXG4gICAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0RGVzYyk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0Fib3V0Q29udGVudDsiLCJpbXBvcnQgQmFubmVyIGZyb20gJy4vYXNzZXRzL2Jhbm5lci5qcGcnO1xyXG5cclxuZnVuY3Rpb24gc2hvd0hvbWVDb250ZW50cygpIHtcclxuXHJcbiAgICAvLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmFubmVyLmNsYXNzTmFtZSA9ICdiYW5uZXInO1xyXG4gICAgY29uc3QgYmFubmVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGJhbm5lckltYWdlLnNyYyA9IEJhbm5lcjtcclxuXHJcbiAgICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG9tZUNvbnRlbnQuY2xhc3NOYW1lID0gJ2hvbWUtY29udGVudCc7XHJcbiAgICBob21lQ29udGVudC5pbm5lckhUTUwgPSBcIiBSZXZpdGFsaXplIHlvdXIgc2Vuc2VzLCBvbmUgc2lwIGF0IGEgdGltZS48YnI+IERpc2NvdmVyIGEgc21vb3RoaWUgc2Vuc2F0aW9uIGxpa2Ugbm8gb3RoZXIuPGJyPiBCbGlzcyBpbiBldmVyeSBzaXAuXCJcclxuXHJcbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQoYmFubmVySW1hZ2UpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiYW5uZXIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lQ29udGVudCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93SG9tZUNvbnRlbnRzOyIsImltcG9ydCBkYXRhIGZyb20gJy4uL3NyYy9hc3NldHMvZGF0YS5qc29uJztcclxuaW1wb3J0IFN0cmF3YmVycnkgZnJvbSAnLi9hc3NldHMvc3RyYXdiZXJyeS5qcGVnJztcclxuaW1wb3J0IFBpbmVhcHBsZSBmcm9tICcuL2Fzc2V0cy9waW5lYXBwbGUuanBlZyc7XHJcbmltcG9ydCBLaXdpIGZyb20gJy4vYXNzZXRzL2tpd2kuanBlZyc7XHJcblxyXG5mdW5jdGlvbiBzaG93TWVudUNvbnRlbnQoKSB7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YTogXCIsIGRhdGEpO1xyXG5cclxuICAgIGxldCBjb3VudCA9IDE7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51LmNsYXNzTmFtZSA9ICdtZW51JztcclxuXHJcbiAgICBjb25zdCBzdHJhd2JlcnJ5SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHN0cmF3YmVycnlJbWFnZS5zcmMgPSBTdHJhd2JlcnJ5O1xyXG5cclxuICAgIGNvbnN0IHBpbmVhcHBsZUltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBwaW5lYXBwbGVJbWFnZS5zcmMgPSBQaW5lYXBwbGU7XHJcblxyXG4gICAgY29uc3Qga2l3aUltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBraXdpSW1hZ2Uuc3JjID0gS2l3aTtcclxuXHJcbiAgICBkYXRhLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aXRsZTogXCIsIGl0ZW0udGl0bGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVzYzogXCIsIGl0ZW0uZGVzY3JpcHRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZW51SXRlbS5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbVwiO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51SXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGNsYXNzbGlzdCA9IGBtZW51LWl0ZW0taW1nIGl0ZW0ke2NvdW50fWBcclxuICAgICAgICBtZW51SXRlbUltYWdlLmNsYXNzTGlzdCA9IGNsYXNzbGlzdDtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIC8vIG1lbnVJbWcuc3JjID0gaXRlbS5pbWFnZTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudCA9PSAxKSB7XHJcbiAgICAgICAgICAgIG1lbnVEZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbS1kZXNjcmlwdGlvbiBzdHJhd2JlcnJ5XCI7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtSW1hZ2UuYXBwZW5kQ2hpbGQoc3RyYXdiZXJyeUltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvdW50ID09IDIpIHtcclxuICAgICAgICAgICAgbWVudURlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtLWRlc2NyaXB0aW9uIHBpbmVhcHBsZVwiO1xyXG4gICAgICAgICAgICBtZW51SXRlbUltYWdlLmFwcGVuZENoaWxkKHBpbmVhcHBsZUltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvdW50ID09IDMpIHtcclxuICAgICAgICAgICAgbWVudURlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtLWRlc2NyaXB0aW9uIGtpd2lcIjtcclxuICAgICAgICAgICAgbWVudUl0ZW1JbWFnZS5hcHBlbmRDaGlsZChraXdpSW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtZW51SXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWVudUl0ZW1UaXRsZS5jbGFzc05hbWUgPSBcIm1lbnUtdGl0bGVcIjtcclxuICAgICAgICBtZW51SXRlbVRpdGxlLmlubmVySFRNTCA9IGl0ZW0udGl0bGU7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtQmVuZWZpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIG1lbnVJdGVtQmVuZWZpdHMuY2xhc3NOYW1lID0gXCJtZW51LWl0ZW0tYmVuZWZpdHNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYmVuZWZpdHMgPSBpdGVtLmRlc2NyaXB0aW9uLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhiZW5lZml0cyk7XHJcblxyXG4gICAgICAgIGJlbmVmaXRzLmZvckVhY2goYmVuZWZpdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpSXRlbS5pbm5lckhUTUwgPSBiZW5lZml0O1xyXG4gICAgICAgICAgICBtZW51SXRlbUJlbmVmaXRzLmFwcGVuZENoaWxkKGxpSXRlbSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbWVudURlc2NyaXB0aW9uLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUpO1xyXG4gICAgICAgIG1lbnVEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChtZW51SXRlbUJlbmVmaXRzKTtcclxuXHJcblxyXG5cclxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbUltYWdlKTtcclxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51RGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd01lbnVDb250ZW50O1xyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHNob3dIb21lQ29udGVudHMgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IHNob3dNZW51Q29udGVudCBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgc2hvd0Fib3V0Q29udGVudCBmcm9tICcuL2Fib3V0JztcclxuXHJcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XHJcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XHJcbmNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFwiKTtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuXHJcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgc2hvd0hvbWVDb250ZW50cygpO1xyXG59KTtcclxuXHJcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgc2hvd01lbnVDb250ZW50KCk7XHJcbn0pO1xyXG5cclxuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgc2hvd0Fib3V0Q29udGVudCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5cclxuc2hvd0hvbWVDb250ZW50cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==