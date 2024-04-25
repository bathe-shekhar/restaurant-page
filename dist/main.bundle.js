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
    height: 100dvh;
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

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;IAChC,0DAAyD;IACzD,gBAAgB;;AAEpB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,WAAW;AACf;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;IAC/B,iBAAiB;IACjB,kBAAkB;IAClB,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,mBAAmB;IACnB,kBAAkB;IAClB,gCAAgC;IAChC,YAAY;IACZ,qCAAqC;IACrC,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;AACnB;;;AAGA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uDAAuD;IACvD,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,qCAAqC;IACrC,YAAY;IACZ,gCAAgC;IAChC,sBAAsB;IACtB,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;AAEvB;;AAEA;IACI,iCAAiC;IACjC,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B;AACJ;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;IAChB,oBAAoB;IACpB,qCAAqC;AACzC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;IACnB,qCAAqC;IACrC,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,qCAAqC;IACrC,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,gCAAgC;IAChC,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,0BAA0B;;AAE9B","sourcesContent":["@font-face {\r\n    font-family: 'DancingScriptBold';\r\n    src: url('./assets/DancingScript-Bold.ttf') format('ttf');\r\n    font-weight: 700;\r\n\r\n}\r\n\r\n:root {\r\n    --tiffany_blue: #A0E7E5;\r\n    --hot_pink: #FFAEBC;\r\n    --mint: #B4F8C8;\r\n    --yellow: #FBE7C6;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\nnav {\r\n    padding: 20px;\r\n    background-color: var(--hot_pink);\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.headerbar {\r\n    background: var(--tiffany_blue);\r\n    padding: 20px 0px;\r\n    text-align: center;\r\n    font-family: 'DancingScriptBold';\r\n    font-weight: 900;\r\n    font-size: 48px;\r\n    color: white;\r\n    font-style: italic;\r\n}\r\n\r\n.nav-btn {\r\n    background-color: rgb(128, 0, 0, 0.5);\r\n    /* opacity: 0.25; */\r\n    padding: 15px 25px;\r\n    /* color: var(--tiffany_blue); */\r\n    color: white;\r\n    border: 2px solid rgb(128, 0, 0, 0.2);\r\n    border-radius: 30px;\r\n    font-size: medium;\r\n    font-weight: 600;\r\n    font-size: 24px;\r\n}\r\n\r\n\r\n#content {\r\n    width: 100%;\r\n    height: 100dvh;\r\n    position: relative;\r\n    background-color: rgb(160, 231, 229, 0.5);\r\n}\r\n\r\n.banner {\r\n    height: 100%;\r\n}\r\n\r\n.banner img {\r\n    height: 100%;\r\n    width: 100%;\r\n    /* background-image: url('../src/assets/banner.jpg'); */\r\n    object-fit: cover;\r\n    /* background-repeat: repeat; */\r\n}\r\n\r\n.home-content {\r\n    background-color: var(--tiffany_blue);\r\n    color: white;\r\n    font-family: 'DancingScriptBold';\r\n    /* font-weight: 900; */\r\n    font-size: 48px;\r\n    font-style: italic;\r\n    text-align: center;\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    width: max-content;\r\n    height: max-content;\r\n    padding: 30px;\r\n    align-content: center;\r\n    opacity: 0.9;\r\n    border-radius: 50px;\r\n}\r\n\r\n.menu {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding-top: 60px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.menu-item {\r\n    width: 20%;\r\n    height: 600px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.strawberry {\r\n    background-color: var(--hot_pink);\r\n    color: maroon;\r\n}\r\n\r\n.pineapple {\r\n    background-color: var(--yellow);\r\n    color: darkgoldenrod;\r\n}\r\n\r\n.kiwi {\r\n    background-color: var(--mint);\r\n    color: darkgreen\r\n}\r\n\r\n.menu-item-img img {\r\n    height: 200px;\r\n    width: 200px;\r\n    object-fit: fill;\r\n    /* border: 0px solid; */\r\n    /* z-index: 2; */\r\n    border-radius: 150px;\r\n    box-shadow: 5px 5px 3px 3px lightgray;\r\n}\r\n\r\n.item1 img {\r\n    border: 30px solid var(--hot_pink);\r\n}\r\n\r\n.item2 img {\r\n    border: 30px solid var(--yellow);\r\n}\r\n\r\n.item3 img {\r\n    border: 30px solid var(--mint);\r\n}\r\n\r\n.menu-item-description {\r\n    width: 100%;\r\n    /* min-height: 50%; */\r\n    margin-top: -30px;\r\n    border-radius: 50px;\r\n    box-shadow: 5px 5px 3px 3px lightgray;\r\n    /* color: white; */\r\n    padding: 30px 20px;\r\n}\r\n\r\n.menu-title {\r\n    font-family: 'DancingScriptBold';\r\n    font-size: 36px;\r\n    font-weight: 900;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n    font-style: italic;\r\n    text-decoration: underline;\r\n}\r\n\r\n.menu-item-benefits {\r\n    font-size: 24px;\r\n    /* font-weight: 700; */\r\n    text-align: left;\r\n    margin-top: 20px;\r\n    font-style: italic;\r\n}\r\n\r\n.about-title {\r\n    font-family: 'DancingScriptBold';\r\n    font-size: 36px;\r\n    font-weight: 900;\r\n    text-align: center;\r\n    padding: 20px;\r\n    font-style: italic;\r\n    /* text-decoration: underline;   */\r\n    color: white;\r\n}\r\n\r\n.about-description {\r\n    /* width: 100%; */\r\n    display: flex;\r\n    padding: 40px 100px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.about-image {\r\n    width: 35%;\r\n}\r\n\r\n.about-image img {\r\n    width: 100%;\r\n    object-fit: cover;\r\n    border: 10px solid white;\r\n}\r\n\r\n.about-section {\r\n    background-color: var(--tiffany_blue);\r\n    height: 100%;\r\n}\r\n\r\n.about-info {\r\n    width: 45%;\r\n    margin-left: 75px;\r\n    font-family: 'DancingScriptBold';\r\n    font-size: 30px;\r\n    font-weight: normal;\r\n    text-align: left;\r\n    /* padding: 20px; */\r\n    font-style: italic;\r\n    /* text-decoration: underline;   */\r\n    color: white;\r\n}\r\n\r\nh1 {\r\n    color: var(--tiffany_blue);\r\n\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _src_assets_strawberry_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/strawberry.jpeg */ "./src/assets/strawberry.jpeg");
/* harmony import */ var _src_assets_pineapple_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/assets/pineapple.jpeg */ "./src/assets/pineapple.jpeg");
/* harmony import */ var _src_assets_kiwi_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/assets/kiwi.jpeg */ "./src/assets/kiwi.jpeg");





function showMenuContent() {


    console.log("data: ", _src_assets_data_json__WEBPACK_IMPORTED_MODULE_0__);

    let count = 1;
    const menu = document.createElement('div');
    menu.className = 'menu';

    const strawberryImage = new Image();
    strawberryImage.src = _src_assets_strawberry_jpeg__WEBPACK_IMPORTED_MODULE_1__;

    const pineappleImage = new Image();
    pineappleImage.src = _src_assets_pineapple_jpeg__WEBPACK_IMPORTED_MODULE_2__;

    const kiwiImage = new Image();
    kiwiImage.src = _src_assets_kiwi_jpeg__WEBPACK_IMPORTED_MODULE_3__;

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
            menuImg.src = strawberryImage;
        }
        if (count == 2) {
            menuDescription.className = "menu-item-description pineapple";
            menuImg.src = pineappleImage;
        }
        if (count == 3) {
            menuDescription.className = "menu-item-description kiwi";
            menuImg.src = kiwiImage;
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

        menuItemImage.appendChild(menuImg);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2lCO0FBQ0Q7QUFDRTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQWdCO0FBQ3BCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFlO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFnQjtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFnQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9EYW5jaW5nU2NyaXB0LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZ1NjcmlwdEJvbGQnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0dGYnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLXRpZmZhbnlfYmx1ZTogI0EwRTdFNTtcclxuICAgIC0taG90X3Bpbms6ICNGRkFFQkM7XHJcbiAgICAtLW1pbnQ6ICNCNEY4Qzg7XHJcbiAgICAtLXllbGxvdzogI0ZCRTdDNjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubmF2IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3RfcGluayk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5oZWFkZXJiYXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGlmZmFueV9ibHVlKTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nU2NyaXB0Qm9sZCc7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4ubmF2LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAwLCAwLCAwLjUpO1xyXG4gICAgLyogb3BhY2l0eTogMC4yNTsgKi9cclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgIC8qIGNvbG9yOiB2YXIoLS10aWZmYW55X2JsdWUpOyAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyOCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcblxyXG4jY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwZHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMjMxLCAyMjksIDAuNSk7XHJcbn1cclxuXHJcbi5iYW5uZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYmFubmVyIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL2Fzc2V0cy9iYW5uZXIuanBnJyk7ICovXHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIC8qIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7ICovXHJcbn1cclxuXHJcbi5ob21lLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueV9ibHVlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZ1NjcmlwdEJvbGQnO1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IDkwMDsgKi9cclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLm1lbnUtaXRlbSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5zdHJhd2JlcnJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdF9waW5rKTtcclxuICAgIGNvbG9yOiBtYXJvb247XHJcbn1cclxuXHJcbi5waW5lYXBwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcclxuICAgIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xyXG59XHJcblxyXG4ua2l3aSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taW50KTtcclxuICAgIGNvbG9yOiBkYXJrZ3JlZW5cclxufVxyXG5cclxuLm1lbnUtaXRlbS1pbWcgaW1nIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgLyogYm9yZGVyOiAwcHggc29saWQ7ICovXHJcbiAgICAvKiB6LWluZGV4OiAyOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDNweCAzcHggbGlnaHRncmF5O1xyXG59XHJcblxyXG4uaXRlbTEgaW1nIHtcclxuICAgIGJvcmRlcjogMzBweCBzb2xpZCB2YXIoLS1ob3RfcGluayk7XHJcbn1cclxuXHJcbi5pdGVtMiBpbWcge1xyXG4gICAgYm9yZGVyOiAzMHB4IHNvbGlkIHZhcigtLXllbGxvdyk7XHJcbn1cclxuXHJcbi5pdGVtMyBpbWcge1xyXG4gICAgYm9yZGVyOiAzMHB4IHNvbGlkIHZhcigtLW1pbnQpO1xyXG59XHJcblxyXG4ubWVudS1pdGVtLWRlc2NyaXB0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogbWluLWhlaWdodDogNTAlOyAqL1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggM3B4IGxpZ2h0Z3JheTtcclxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxufVxyXG5cclxuLm1lbnUtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nU2NyaXB0Qm9sZCc7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubWVudS1pdGVtLWJlbmVmaXRzIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiA3MDA7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmFib3V0LXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZ1NjcmlwdEJvbGQnO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgICAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWJvdXQtZGVzY3JpcHRpb24ge1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogNDBweCAxMDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmFib3V0LWltYWdlIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbn1cclxuXHJcbi5hYm91dC1pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmFib3V0LXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueV9ibHVlKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFib3V0LWluZm8ge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nU2NyaXB0Qm9sZCc7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgICAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGlmZmFueV9ibHVlKTtcclxuXHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsMERBQXlEO0lBQ3pELGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdURBQXVEO0lBQ3ZELGlCQUFpQjtJQUNqQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjs7QUFFOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZ1NjcmlwdEJvbGQnO1xcclxcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvRGFuY2luZ1NjcmlwdC1Cb2xkLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS10aWZmYW55X2JsdWU6ICNBMEU3RTU7XFxyXFxuICAgIC0taG90X3Bpbms6ICNGRkFFQkM7XFxyXFxuICAgIC0tbWludDogI0I0RjhDODtcXHJcXG4gICAgLS15ZWxsb3c6ICNGQkU3QzY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3RfcGluayk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGlmZmFueV9ibHVlKTtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nU2NyaXB0Qm9sZCc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMCwgMCwgMC41KTtcXHJcXG4gICAgLyogb3BhY2l0eTogMC4yNTsgKi9cXHJcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcclxcbiAgICAvKiBjb2xvcjogdmFyKC0tdGlmZmFueV9ibHVlKTsgKi9cXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI4LCAwLCAwLCAwLjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAyMzEsIDIyOSwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lciBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9hc3NldHMvYmFubmVyLmpwZycpOyAqL1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpZmZhbnlfYmx1ZSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nU2NyaXB0Qm9sZCc7XFxyXFxuICAgIC8qIGZvbnQtd2VpZ2h0OiA5MDA7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnN0cmF3YmVycnkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3RfcGluayk7XFxyXFxuICAgIGNvbG9yOiBtYXJvb247XFxyXFxufVxcclxcblxcclxcbi5waW5lYXBwbGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgICBjb2xvcjogZGFya2dvbGRlbnJvZDtcXHJcXG59XFxyXFxuXFxyXFxuLmtpd2kge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taW50KTtcXHJcXG4gICAgY29sb3I6IGRhcmtncmVlblxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLWltZyBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIG9iamVjdC1maXQ6IGZpbGw7XFxyXFxuICAgIC8qIGJvcmRlcjogMHB4IHNvbGlkOyAqL1xcclxcbiAgICAvKiB6LWluZGV4OiAyOyAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggM3B4IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0xIGltZyB7XFxyXFxuICAgIGJvcmRlcjogMzBweCBzb2xpZCB2YXIoLS1ob3RfcGluayk7XFxyXFxufVxcclxcblxcclxcbi5pdGVtMiBpbWcge1xcclxcbiAgICBib3JkZXI6IDMwcHggc29saWQgdmFyKC0teWVsbG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0zIGltZyB7XFxyXFxuICAgIGJvcmRlcjogMzBweCBzb2xpZCB2YXIoLS1taW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiBtaW4taGVpZ2h0OiA1MCU7ICovXFxyXFxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDNweCAzcHggbGlnaHRncmF5O1xcclxcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXFxyXFxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmdTY3JpcHRCb2xkJztcXHJcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tYmVuZWZpdHMge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIC8qIGZvbnQtd2VpZ2h0OiA3MDA7ICovXFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nU2NyaXB0Qm9sZCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAgICovXFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHggMTAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWFnZSBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXNlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55X2JsdWUpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbmZvIHtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZ1NjcmlwdEJvbGQnO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICAgKi9cXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aWZmYW55X2JsdWUpO1xcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQmFubmVyIGZyb20gXCIuL2Fzc2V0cy9iYW5uZXIuanBnXCI7XHJcblxyXG5mdW5jdGlvbiBzaG93QWJvdXRDb250ZW50KCkge1xyXG5cclxuICAgIGNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXRTZWN0aW9uLmNsYXNzTmFtZSA9IFwiYWJvdXQtc2VjdGlvblwiO1xyXG5cclxuICAgIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0VGl0bGUuY2xhc3NOYW1lID0gXCJhYm91dC10aXRsZVwiO1xyXG4gICAgYWJvdXRUaXRsZS5pbm5lclRleHQgPSBcIkFib3V0IFVzXCJcclxuXHJcbiAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgYWJvdXREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dERlc2MuY2xhc3NOYW1lID0gXCJhYm91dC1kZXNjcmlwdGlvblwiO1xyXG5cclxuICAgIGNvbnN0IGFib3V0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0SW1hZ2UuY2xhc3NOYW1lID0gXCJhYm91dC1pbWFnZVwiO1xyXG5cclxuICAgIGNvbnN0IGJhbm5lckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBiYW5uZXJJbWFnZS5zcmMgPSBCYW5uZXI7XHJcblxyXG4gICAgYWJvdXRJbWFnZS5hcHBlbmRDaGlsZChiYW5uZXJJbWFnZSk7XHJcblxyXG4gICAgY29uc3QgYWJvdXRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dEluZm8uY2xhc3NOYW1lID0gXCJhYm91dC1pbmZvXCI7XHJcbiAgICBhYm91dEluZm8uaW5uZXJIVE1MID0gXCJSZXZpdGFsaXplIHlvdXIgc2Vuc2VzLCBvbmUgc2lwIGF0IGEgdGltZS4gRGlzY292ZXIgYSBzbW9vdGhpZSBzZW5zYXRpb24gbGlrZSBubyBvdGhlci4gQmxpc3MgaW4gZXZlcnkgc2lwLjxicj5BIHNtb290aGllIGlzIGEgYmV2ZXJhZ2UgbWFkZSBieSBwdXLDqWVpbmcgaW5ncmVkaWVudHMgaW4gYSBibGVuZGVyLiBBIHNtb290aGllIGNvbW1vbmx5IGhhcyBhIGxpcXVpZCBiYXNlLCBzdWNoIGFzIGZydWl0IGp1aWNlIG9yIG1pbGssIHlvZ3VydCBvciBpY2UgY3JlYW0uIE90aGVyIGluZ3JlZGllbnRzIG1heSBiZSBhZGRlZCwgaW5jbHVkaW5nIGZydWl0cywgdmVnZXRhYmxlcywgbm9uLWRhaXJ5IG1pbGssIGNydXNoZWQgaWNlLCB3aGV5IHBvd2RlciBvciBudXRyaXRpb25hbCBzdXBwbGVtZW50cy48YnI+U21vb3RoaWVzIGNhbiBoZWxwIHlvdSBsb3NlIGV4Y2VzcyBib2R5IHdlaWdodCB3aXRob3V0IHNraXBwaW5nIGFueSBtZWFscy4gVGhlIGZydWl0cyBhbmQgYmVycmllcyB0aGF0IGFyZSB1c2VkIHRvIHByZXBhcmUgdGhlc2UgZHJpbmtzIHNlcnZlIGFzIGV4Y2VsbGVudCBjb21wYW5pb25zIGZvciBrZWVwaW5nIHlvdSBoZWFsdGh5IGFuZCBmZWVsaW5nIGNvb2xlciBvbiBhIGhvdCBzdW1tZXIgbW9ybmluZy5cIjtcclxuXHJcbiAgICBhYm91dERlc2MuYXBwZW5kQ2hpbGQoYWJvdXRJbWFnZSk7XHJcbiAgICBhYm91dERlc2MuYXBwZW5kQ2hpbGQoYWJvdXRJbmZvKTtcclxuXHJcbiAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXREZXNjKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbik7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93QWJvdXRDb250ZW50OyIsImltcG9ydCBCYW5uZXIgZnJvbSAnLi9hc3NldHMvYmFubmVyLmpwZyc7XHJcblxyXG5mdW5jdGlvbiBzaG93SG9tZUNvbnRlbnRzKCkge1xyXG5cclxuICAgIC8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiYW5uZXIuY2xhc3NOYW1lID0gJ2Jhbm5lcic7XHJcbiAgICBjb25zdCBiYW5uZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgYmFubmVySW1hZ2Uuc3JjID0gQmFubmVyO1xyXG5cclxuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lQ29udGVudC5jbGFzc05hbWUgPSAnaG9tZS1jb250ZW50JztcclxuICAgIGhvbWVDb250ZW50LmlubmVySFRNTCA9IFwiIFJldml0YWxpemUgeW91ciBzZW5zZXMsIG9uZSBzaXAgYXQgYSB0aW1lLjxicj4gRGlzY292ZXIgYSBzbW9vdGhpZSBzZW5zYXRpb24gbGlrZSBubyBvdGhlci48YnI+IEJsaXNzIGluIGV2ZXJ5IHNpcC5cIlxyXG5cclxuICAgIGJhbm5lci5hcHBlbmRDaGlsZChiYW5uZXJJbWFnZSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhbm5lcik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250ZW50KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dIb21lQ29udGVudHM7IiwiaW1wb3J0IGRhdGEgZnJvbSAnLi4vc3JjL2Fzc2V0cy9kYXRhLmpzb24nO1xyXG5pbXBvcnQgU3RyYXdiZXJyeSBmcm9tICcuLi9zcmMvYXNzZXRzL3N0cmF3YmVycnkuanBlZyc7XHJcbmltcG9ydCBQaW5lYXBwbGUgZnJvbSAnLi4vc3JjL2Fzc2V0cy9waW5lYXBwbGUuanBlZyc7XHJcbmltcG9ydCBLaXdpIGZyb20gJy4uL3NyYy9hc3NldHMva2l3aS5qcGVnJztcclxuXHJcbmZ1bmN0aW9uIHNob3dNZW51Q29udGVudCgpIHtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiwgZGF0YSk7XHJcblxyXG4gICAgbGV0IGNvdW50ID0gMTtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnUuY2xhc3NOYW1lID0gJ21lbnUnO1xyXG5cclxuICAgIGNvbnN0IHN0cmF3YmVycnlJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgc3RyYXdiZXJyeUltYWdlLnNyYyA9IFN0cmF3YmVycnk7XHJcblxyXG4gICAgY29uc3QgcGluZWFwcGxlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHBpbmVhcHBsZUltYWdlLnNyYyA9IFBpbmVhcHBsZTtcclxuXHJcbiAgICBjb25zdCBraXdpSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGtpd2lJbWFnZS5zcmMgPSBLaXdpO1xyXG5cclxuICAgIGRhdGEuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRpdGxlOiBcIiwgaXRlbS50aXRsZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkZXNjOiBcIiwgaXRlbS5kZXNjcmlwdGlvbik7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lbnVJdGVtLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgY2xhc3NsaXN0ID0gYG1lbnUtaXRlbS1pbWcgaXRlbSR7Y291bnR9YFxyXG4gICAgICAgIG1lbnVJdGVtSW1hZ2UuY2xhc3NMaXN0ID0gY2xhc3NsaXN0O1xyXG5cclxuICAgICAgICBjb25zdCBtZW51SW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgLy8gbWVudUltZy5zcmMgPSBpdGVtLmltYWdlO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ID09IDEpIHtcclxuICAgICAgICAgICAgbWVudURlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtLWRlc2NyaXB0aW9uIHN0cmF3YmVycnlcIjtcclxuICAgICAgICAgICAgbWVudUltZy5zcmMgPSBzdHJhd2JlcnJ5SW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb3VudCA9PSAyKSB7XHJcbiAgICAgICAgICAgIG1lbnVEZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbS1kZXNjcmlwdGlvbiBwaW5lYXBwbGVcIjtcclxuICAgICAgICAgICAgbWVudUltZy5zcmMgPSBwaW5lYXBwbGVJbWFnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvdW50ID09IDMpIHtcclxuICAgICAgICAgICAgbWVudURlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtLWRlc2NyaXB0aW9uIGtpd2lcIjtcclxuICAgICAgICAgICAgbWVudUltZy5zcmMgPSBraXdpSW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZW51SXRlbVRpdGxlLmNsYXNzTmFtZSA9IFwibWVudS10aXRsZVwiO1xyXG4gICAgICAgIG1lbnVJdGVtVGl0bGUuaW5uZXJIVE1MID0gaXRlbS50aXRsZTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW1CZW5lZml0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgbWVudUl0ZW1CZW5lZml0cy5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbS1iZW5lZml0c1wiO1xyXG5cclxuICAgICAgICBjb25zdCBiZW5lZml0cyA9IGl0ZW0uZGVzY3JpcHRpb24uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJlbmVmaXRzKTtcclxuXHJcbiAgICAgICAgYmVuZWZpdHMuZm9yRWFjaChiZW5lZml0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGlJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGlJdGVtLmlubmVySFRNTCA9IGJlbmVmaXQ7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtQmVuZWZpdHMuYXBwZW5kQ2hpbGQobGlJdGVtKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBtZW51RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQobWVudUl0ZW1UaXRsZSk7XHJcbiAgICAgICAgbWVudURlc2NyaXB0aW9uLmFwcGVuZENoaWxkKG1lbnVJdGVtQmVuZWZpdHMpO1xyXG5cclxuICAgICAgICBtZW51SXRlbUltYWdlLmFwcGVuZENoaWxkKG1lbnVJbWcpO1xyXG5cclxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbUltYWdlKTtcclxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51RGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd01lbnVDb250ZW50O1xyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHNob3dIb21lQ29udGVudHMgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IHNob3dNZW51Q29udGVudCBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgc2hvd0Fib3V0Q29udGVudCBmcm9tICcuL2Fib3V0JztcclxuXHJcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XHJcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XHJcbmNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFwiKTtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuXHJcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgc2hvd0hvbWVDb250ZW50cygpO1xyXG59KTtcclxuXHJcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgc2hvd01lbnVDb250ZW50KCk7XHJcbn0pO1xyXG5cclxuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgc2hvd0Fib3V0Q29udGVudCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5cclxuc2hvd0hvbWVDb250ZW50cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==