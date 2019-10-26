function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" class='header' fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\n    <div class='dummy'></div>\n    <span class='title'>Trinance</span>\n    <button mat-icon-button aria-label=\"examplebutton\" class='backbutton'>\n        <!-- !!!Can do custom icon here -->\n        <mat-icon>home</mat-icon>\n    </button>\n</mat-toolbar>\n\n<div class='outlet'>\n    <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirmation.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirmation.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsConfirmationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n    <span>Your order has been confirmed!</span><br>\n    <span>Order ID: {{ orderInfo.orderID }}</span>\n</mat-card>\n\n<div class='paylah' *ngIf=\"orderInfo.orderType === 'sell'\">\n    <mat-card>\n        <span>Paylah code URL: </span>\n        <span>{{ orderInfo.paylahCode }}</span>\n        <br><br>\n    \n        <span>Please send your BTC to this address: </span>\n        <span>{{ custodianBTCaddress }}</span>\n        <br><br>\n\n        <span>Note: Once the BTC are wired across we will send you \n            the SGD funds to your Paynow/Paylah bank account</span>\n        <br><br>\n\n        <span>Total amount of BTC sold: {{ totalAmount[1] }} SGD</span> \n    </mat-card>\n</div>\n\n<div class='btcAddress' *ngIf=\"orderInfo.orderType === 'buy'\">\n    <mat-card>\n        <span>Your BTC address: </span><br>\n        <span>{{ orderInfo.btcAddress }}</span>\n        <br><br>\n\n        <span>Please send your fiat to the following address: </span><br>\n        <img src='https://www.patrick-wied.at/static/qrgen/qrgen.php?r=14&a=0&content=buy%20bitcoin'\n        width='100' height='100'>\n        <br>\n\n        <span>Note: Once the BTC are wired across we will send you \n            the bitcoin to your wallet address</span>\n        <br><br>\n\n        <span>Total amount of BTC bought: {{ totalAmount[0] }} SGD</span>\n    </mat-card>\n</div>\n\n<mat-card>\n    <span>Name: {{ orderInfo.name }}</span>\n</mat-card>\n\n<mat-card>\n    <span>Contact number: {{ orderInfo.contactNumber }}</span>\n</mat-card>\n\n<mat-card>\n    <span>Date of birth: {{ orderInfo.dateOfBirth.format('MMMM Do YYYY') }}</span>\n</mat-card>\n\n<mat-card>\n    <span>Order date: {{ orderInfo.dateOfOrder.format('MMMM Do YYYY') }}</span>\n</mat-card>\n\n<mat-card>\n    <span>Request processed: {{ dateOfOrderRecv }} {{ timeOfOrderRecv }}</span>\n</mat-card>\n\n<mat-card>\n    <span>Gender: {{ orderInfo.gender }}</span>\n</mat-card>\n\n<mat-card>\n    <span>Buy/Sell: {{ orderInfo.orderType }}</span>\n</mat-card>\n\n<mat-card>\n    <span>Number of BTC bought/sold: {{ orderInfo.orderUnit }} BTC</span>\n</mat-card>\n\n<div class='backButton' fxLayout=\"row\"  fxLayoutAlign=\"start center\">\n    <button mat-icon-button aria-label=\"backButton\" (click)=\"back()\">\n        <mat-icon>arrow_back_ios</mat-icon>\n        <span>Back to order form</span>\n    </button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='orderList' *ngFor=\"let record of orderList; let i = index;\">\n    <mat-card [routerLink]=\"[record.orderID]\" class='singleCard'>\n        <mat-card-header fxLayout=\"row\" fxLayoutAlign=\"center center\" \n        class='orderID'>\n            Order ID: {{ record.orderID }}\n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n            <div class='name'>\n                Name: {{ record.name }}\n            </div>\n            <div>\n                Order type: {{ record.orderType }}\n            </div>\n            <div>\n                <span *ngIf=\"record.orderType === 'buy'\">Bought</span>\n                <span *ngIf=\"record.orderType === 'sell'\">Sold</span>\n                : {{ record.orderUnit }} BTC\n            </div>\n        </mat-card-content>\n    </mat-card>\n</div>\n\n<div class='backButton' fxLayout=\"row\"  fxLayoutAlign=\"start center\">\n    <button mat-icon-button aria-label=\"backButton\" (click)=\"back()\">\n        <mat-icon>arrow_back_ios</mat-icon>\n        <span>Back to order form</span>\n    </button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a mat-raised-button [routerLink]=\"['/list']\">View order list</a>\n\n<h3>Buy/Sell Order Form</h3>\n\n<form #form=\"ngForm\" (ngSubmit)=\"submitForm(form)\">\n\n    <!-- Regular expression only for Singapore mobile phone numbers: (+65)8123-1234 or 81233456 or 9123-4567 -->\n    <label for='contactNumber'>Contact number: </label>\n    <mat-form-field class=\"contactNumber\">\n        <input matInput name='contactNumber' #contactNumber=\"ngModel\" \n        ngModel required\n        pattern=\"(\\(\\+([0-9]{2})\\))?([8-9])([0-9]{3})(-)?([0-9]{4})\">\n        <mat-error *ngIf=\"contactNumber.invalid && (contactNumber.dirty || contactNumber.touched)\">\n            <div class=\"errMsg\" *ngIf=\"contactNumber.errors['required']\">\n                <span>Please fill in your contact number!</span>\n            </div>\n            <div class=\"errMsg\" *ngIf=\"contactNumber.errors['pattern']\">\n                <span>Please fill in your number in the following format:\n                    (+65)9123-4567 or (+65)91234567 or 91234567 or 9123-4567\n                </span>\n            </div>\n        </mat-error>\n    </mat-form-field>\n    <br><br>\n\n    <!-- Accepts only alphabets with spaces. Does not accept inputs with only spaces or periods -->\n    <label for='name'>Name: </label>\n    <mat-form-field class=\"name\">\n        <input matInput name='name' #name=\"ngModel\" \n        ngModel required\n        pattern=\"(?![\\s.]+$)[a-zA-z\\s]*\">\n        <mat-error *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n            <div class=\"errMsg\" *ngIf=\"name.errors['required']\">\n                <span>Please fill in your name!</span>\n            </div>\n            <div class=\"errMsg\" *ngIf=\"name.errors['pattern']\">\n                <span>Please fill in a valid name!</span>\n            </div>\n        </mat-error>\n    </mat-form-field>\n    <br><br>\n\n    <label for='gender'>Gender: </label>\n    <mat-radio-group ngModel name=\"gender\">\n        <mat-radio-button value='Male'> Male</mat-radio-button>\n        <mat-radio-button value='Female'> Female</mat-radio-button>\n    </mat-radio-group>\n    <br><br>\n\n    <label for='dateOfBirth'>Date of birth: </label>\n    <mat-form-field class=\"dateOfBirth\">\n        <input matInput [max]='maxDate'\n        [matDatepicker]=\"picker1\" placeholder=\"Choose a date\"\n        name='dateOfBirth' ngModel required #dateOfBirth=\"ngModel\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n        <mat-error *ngIf=\"dateOfBirth.invalid && (dateOfBirth.dirty || dateOfBirth.touched)\">\n            <div class=\"errMsg\" *ngIf=\"dateOfBirth.errors['maxDate']\">\n                <span>You must be more than 21 years old!</span>\n            </div>\n        </mat-error>\n    </mat-form-field>\n    <br><br>\n\n    <label for='dateOfOrder'>Order date: </label>\n    <mat-form-field class=\"dateOfOrder\">\n        <input matInput [min]='minDate'\n        [matDatepicker]=\"picker2\" placeholder=\"Choose a date\"\n        name='dateOfOrder' ngModel required #dateOfOrder=\"ngModel\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2></mat-datepicker>\n    </mat-form-field>\n    <br><br>\n\n    <label for='orderType'>Order type: </label>\n    <mat-radio-group [(ngModel)]='buysell' name=\"orderType\"\n    required>\n        <mat-radio-button value='buy'> Buy</mat-radio-button>\n        <mat-radio-button value='sell'> Sell</mat-radio-button>\n    </mat-radio-group>\n    <br><br>\n    \n    <!-- USEFUL!!! One way binding + field validation -->\n    <!-- Registers both click and keypress events to trigger the calculation -->\n    <!-- regexp here: allows numbers or numbers with decimal points. However, number cannot be .X -->\n    <label for='orderUnit'>Order unit: </label>\n    <mat-form-field class=\"orderUnit\">\n        <input matInput name='orderUnit' #orderUnit=\"ngModel\"\n        (keyup)=\"calculatePrice(orderUnit)\"\n        (click)=\"calculatePrice(orderUnit)\"\n        type='text' required ngModel\n        pattern=\"[0-9]+\\.?[0-9]*\">\n        <mat-error *ngIf=\"orderUnit.invalid && (orderUnit.dirty || orderUnit.touched)\">\n            <div class=\"errMsg\" *ngIf=\"orderUnit.errors['pattern']\">\n                <span>Please input a number!</span>\n            </div>\n        </mat-error>\n        <mat-error *ngIf=\"orderUnit.invalid && (orderUnit.dirty || orderUnit.touched)\">\n            <div class=\"errMsg\" *ngIf=\"orderUnit.errors['required']\">\n                <span>Please input a number!</span>\n            </div>\n        </mat-error>\n    </mat-form-field>\n    <br>\n\n    <span class='cryptoPair'>Cryptocurrency pair: {{ cryptoPair }}</span>\n    <br><br>\n\n    <span class='cryptoUnitPrice'>Cryptocurrency price (SGD)</span>\n    <br>\n    <span>Ask: {{ askbidValue[0] }}</span>\n    <br>\n    <span>Bid: {{ askbidValue[1] }}</span>\n    <br>\n\n    <div class='paylah' *ngIf=\"buysell === 'sell'\">\n        <label for='paylahCode'>Paylah code URL: </label>\n        <mat-form-field class=\"paylahCode\">\n            <input matInput name='paylahCode' #paylahCode=\"ngModel\"\n            ngModel required>\n            <mat-error *ngIf=\"paylahCode.invalid && (paylahCode.dirty || paylahCode.touched)\">\n                <div class=\"errMsg\" *ngIf=\"paylahCode.errors['required']\">\n                    <span>Please fill in your Paylah code URL!</span>\n                </div>\n            </mat-error>\n        </mat-form-field>\n    </div>\n\n    <div class='btcadd' *ngIf=\"buysell == 'buy'\">\n        <label for='btcAddress'>Bitcoin address: </label>\n        <mat-form-field class=\"btcAddress\">\n            <input matInput name='btcAddress' #btcAddress=\"ngModel\"\n            ngModel required>\n            <mat-error *ngIf=\"btcAddress.invalid && (btcAddress.dirty || btcAddress.touched)\">\n                <div class=\"errMsg\" *ngIf=\"btcAddress.errors['required']\">\n                    <span>Please fill in your bitcoin address!</span>\n                </div>\n            </mat-error>\n        </mat-form-field>\n    </div>\n\n    <br>\n    <div class='askAmount' *ngIf=\"buysell === 'buy'\">\n        <span>Total amount (Ask): {{ totalAsk }} SGD</span>\n    </div>\n    <div class='bidAmount' *ngIf=\"buysell === 'sell'\">\n        <span>Total amount (Bid): {{ totalBid }} SGD</span>\n    </div>\n\n    <div class=\"forbuttons\">\n        <button type=\"submit\" [disabled]=\"form.invalid\"\n        mat-raised-button color=\"primary\">Order</button>\n        <button type=\"reset\"\n        mat-raised-button color=\"basic\">Reset</button>\n    </div>\n    <br>\n</form> \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/orderdetail.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/orderdetail.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsOrderdetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>List details of order here</h3>\n\n<form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n\n    <label for='contactNumber'>Contact number: </label>\n    <mat-form-field class=\"contactNumber\">\n        <input matInput id='contactNumber' \n        [formControlName]=\"'contactNumber'\">\n    </mat-form-field>\n    <br><br>\n\n    <!-- Contact number error messages [not working properly]\n    <mat-error *ngIf=\"editForm.get('contactNumber').invalid && (editForm.get('contactNumber').dirty || editForm.get('contactNumber').touched)\">\n        <div class=\"errMsg\" *ngIf=\"!editForm.get('contactNumber').errors['required']\">\n            <span>Please fill in your contact number!</span>\n        </div>\n        <div class=\"errMsg\" *ngIf=\"!editForm.get('contactNumber').errors['pattern']\">\n            <span>Please fill in your number in the following format:\n                (+65)9123-4567 or (+65)91234567 or 91234567 or 9123-4567\n            </span>\n        </div>\n    </mat-error> -->\n\n    <!-- Semi proper validation below: but doesnt work -->\n    <!-- <mat-error *ngIf=\"!editForm.get('username').valid && editForm.get('username').touched\">\n        <span>Please fill in your name!</span>\n    </mat-error> -->\n    <label for='name'>Name: </label>\n    <mat-form-field class=\"name\">\n        <input matInput class='name'\n        [formControlName]=\"'name'\">\n    </mat-form-field>\n    <br><br>\n\n    <label for='gender'>Gender: </label>\n    <mat-radio-group [formControlName]=\"'gender'\">\n        <mat-radio-button value='Male'> Male</mat-radio-button>\n        <mat-radio-button value='Female'> Female</mat-radio-button>\n    </mat-radio-group>\n    <br><br>\n\n    <label for='dateOfBirth'>Date of birth: </label>\n    <mat-form-field class=\"dateOfBirth\">\n        <input matInput\n        [matDatepicker]=\"picker1\" placeholder=\"Choose a date\"\n        [formControlName]=\"'dateOfBirth'\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n    </mat-form-field>\n    <br><br>\n\n    <label for='dateOfOrder'>Order date: </label>\n    <mat-form-field class=\"dateOfOrder\">\n        <input matInput\n        [matDatepicker]=\"picker2\" placeholder=\"Choose a date\"\n        [formControlName]=\"'dateOfOrder'\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2></mat-datepicker>\n    </mat-form-field>\n    <br><br>\n\n    <label for='orderType'>Order type: </label>\n    <mat-radio-group [formControlName]=\"'orderType'\">\n        <mat-radio-button value='buy'> Buy</mat-radio-button>\n        <mat-radio-button value='sell'> Sell</mat-radio-button>\n    </mat-radio-group>\n    <br><br>\n    \n    <label for='orderUnit'>Order unit: </label>\n    <mat-form-field class=\"orderUnit\">\n        <input matInput type='text'\n        [formControlName]=\"'orderUnit'\">\n    </mat-form-field>\n    <br>\n\n    <div class='paylah' *ngIf=\"editForm.get('orderType').value === 'sell'\">\n        <label for='paylahCode'>Paylah code URL: </label>\n        <mat-form-field class=\"paylahCode\">\n            <input matInput [formControlName]=\"'paylahCode'\">\n        </mat-form-field>\n    </div>\n\n    <div class='btcadd' *ngIf=\"editForm.get('orderType').value == 'buy'\">\n        <label for='btcAddress'>Bitcoin address: </label>\n        <mat-form-field class=\"btcAddress\">\n            <input matInput [formControlName]=\"'btcAddress'\">\n        </mat-form-field>\n    </div>\n    <button mat-flat-button color=\"primary\" type=\"submit\" [disabled]=\"!editForm.valid\">Update</button>\n</form>\n\n<div class='backButton' fxLayout=\"row\"  fxLayoutAlign=\"start center\">\n    <button mat-icon-button aria-label=\"backButton\" (click)=\"back()\">\n        <mat-icon>arrow_back_ios</mat-icon>\n        <span>Back to order form</span>\n    </button>\n</div>\n    \n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/order.component */
    "./src/app/components/order.component.ts");
    /* harmony import */


    var _components_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/confirmation.component */
    "./src/app/components/confirmation.component.ts");
    /* harmony import */


    var _components_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/list.component */
    "./src/app/components/list.component.ts");
    /* harmony import */


    var _components_orderdetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/orderdetail.component */
    "./src/app/components/orderdetail.component.ts");

    var routes = [{
      path: '',
      component: _components_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"]
    }, {
      path: 'success',
      component: _components_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationComponent"]
    }, {
      path: 'list',
      component: _components_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]
    }, {
      path: 'list/:id',
      component: _components_orderdetail_component__WEBPACK_IMPORTED_MODULE_6__["OrderdetailComponent"]
    }, {
      path: '**',
      redirectTo: '/',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'day09a';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _components_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/order.component */
    "./src/app/components/order.component.ts");
    /* harmony import */


    var _components_confirmation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/confirmation.component */
    "./src/app/components/confirmation.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_btcsvc_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/btcsvc.service */
    "./src/app/services/btcsvc.service.ts");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/esm2015/material-moment-adapter.js");
    /* harmony import */


    var _components_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/list.component */
    "./src/app/components/list.component.ts");
    /* harmony import */


    var _components_orderdetail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/orderdetail.component */
    "./src/app/components/orderdetail.component.ts"); // Manually added
    // import { RouterModule } from '@angular/router';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"], _components_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationComponent"], _components_list_component__WEBPACK_IMPORTED_MODULE_16__["ListComponent"], _components_orderdetail_component__WEBPACK_IMPORTED_MODULE_17__["OrderdetailComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__["MatMomentDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]],
      providers: [_services_btcsvc_service__WEBPACK_IMPORTED_MODULE_14__["BtcsvcService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/confirmation.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/components/confirmation.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsConfirmationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/confirmation.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/confirmation.component.ts ***!
    \******************************************************/

  /*! exports provided: ConfirmationComponent */

  /***/
  function srcAppComponentsConfirmationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function () {
      return ConfirmationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_btcsvc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/btcsvc.service */
    "./src/app/services/btcsvc.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    var ConfirmationComponent =
    /*#__PURE__*/
    function () {
      function ConfirmationComponent(btcsvc, router) {
        _classCallCheck(this, ConfirmationComponent);

        this.btcsvc = btcsvc;
        this.router = router;
        this.orderInfo = {
          // orderInfo: any = {
          btcAddress: '1',
          contactNumber: '1',
          dateOfBirth: moment__WEBPACK_IMPORTED_MODULE_4__(),
          dateOfOrder: moment__WEBPACK_IMPORTED_MODULE_4__(),
          gender: 'male',
          name: '1',
          orderType: 'buy',
          orderUnit: 0,
          paylahCode: '1'
        };
        this.custodianBTCaddress = '34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo'; // Able to pass the ID to confirmation page so that we can use the ID to retrieve data from server
        // https://stackoverflow.com/questions/44864303/send-data-through-routing-paths-in-angular

        this.routedID = this.router.getCurrentNavigation().extras.state.id;
      }

      _createClass(ConfirmationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.btcsvc.getOrderDetail(this.routedID).then(function (result) {
            _this.orderInfo = result;
          }); // console.info('This is orderInfo', this.orderInfo);

          this.totalAmount = this.btcsvc.getTotalAmount(); // Date and time of order submitted by customer (not date/time of order executed!)

          this.timeOfOrderRecv = moment__WEBPACK_IMPORTED_MODULE_4__().format('h:mm:ss a');
          this.dateOfOrderRecv = moment__WEBPACK_IMPORTED_MODULE_4__().format('MMMM Do YYYY');
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/']);
        }
      }]);

      return ConfirmationComponent;
    }();

    ConfirmationComponent.ctorParameters = function () {
      return [{
        type: _services_btcsvc_service__WEBPACK_IMPORTED_MODULE_2__["BtcsvcService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirmation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirmation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmation.component.css */
      "./src/app/components/confirmation.component.css")).default]
    })], ConfirmationComponent);
    /***/
  },

  /***/
  "./src/app/components/list.component.css":
  /*!***********************************************!*\
    !*** ./src/app/components/list.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".orderList {\r\n    display: inline-block;\r\n    width: 50vw;\r\n    height: auto;\r\n}\r\n\r\n.orderID {\r\n    font-weight: bold;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n.name {\r\n    word-wrap: break-word;\r\n}\r\n\r\n.singleCard {\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.singleCard:hover {\r\n    background-color: lightgray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlckxpc3Qge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5vcmRlcklEIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLnNpbmdsZUNhcmQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuLnNpbmdsZUNhcmQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/list.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/components/list.component.ts ***!
    \**********************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppComponentsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_btcsvc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/btcsvc.service */
    "./src/app/services/btcsvc.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent(btcsvc, router) {
        _classCallCheck(this, ListComponent);

        this.btcsvc = btcsvc;
        this.router = router;
        this.orderList = [];
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.btcsvc.getListOfOrders().then(function (result) {
            _this2.orderList = result;
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/']);
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _services_btcsvc_service__WEBPACK_IMPORTED_MODULE_2__["BtcsvcService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.css */
      "./src/app/components/list.component.css")).default]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/components/order.component.css":
  /*!************************************************!*\
    !*** ./src/app/components/order.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsOrderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/order.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/components/order.component.ts ***!
    \***********************************************/

  /*! exports provided: OrderComponent */

  /***/
  function srcAppComponentsOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
      return OrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_btcsvc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/btcsvc.service */
    "./src/app/services/btcsvc.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    var OrderComponent =
    /*#__PURE__*/
    function () {
      // QR code link
      // https://www.patrick-wied.at/static/qrgen/qrgen.php?r=14&a=0&content=buy%20bitcoin
      function OrderComponent(btcsvc, router) {
        _classCallCheck(this, OrderComponent);

        this.btcsvc = btcsvc;
        this.router = router; // Labels in the form

        this.cryptoPair = 'SGD/BTC'; // First value is ask, second value is bid (backup values)

        this.askbidValue = [11475.32, 11465.36]; // Initiate total ask and bid prices variables

        this.totalBid = 0;
        this.totalAsk = 0; // Other variables required for showing in form

        this.orderUnit = +0;
        this.totalPrice = 0; // For the requirement that users must be at least 21 years old
        // maxDate is the latest date that the user can enter

        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_4__().subtract(21, 'years'); // For the requirement that the order placed must be from today onwards

        this.minDate = moment__WEBPACK_IMPORTED_MODULE_4__();
      }

      _createClass(OrderComponent, [{
        key: "calculatePrice",
        value: function calculatePrice(z) {
          // Calculates the total ask/bid price to 2 decimal places
          this.totalAsk = parseFloat((+z.value * this.askbidValue[0]).toFixed(2));
          this.totalBid = parseFloat((+z.value * this.askbidValue[1]).toFixed(2));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          // Get btc prices from API
          this.btcsvc.getPrice().then(function (i) {
            _this3.askbidValue = i;
          });
          this.askbidValue.forEach(function (element) {
            return Number(element.toFixed(2));
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(event) {
          // Assigns the ORDER object from submission of the form
          var temp = event.value; // Assigns to the ORDER object a randomly generated orderID

          temp.orderID = Math.floor(Math.random() * 1000000) + 3000000; // Sends order data via http post

          this.btcsvc.setOrder(temp); // Sends total amount to btcsvc service for storage

          this.btcsvc.setTotalAmount([this.totalAsk, this.totalBid]); // Sends the orderID over to the confirmation page

          this.router.navigate(['/success'], {
            state: {
              id: temp.orderID
            }
          });
        }
      }]);

      return OrderComponent;
    }();

    OrderComponent.ctorParameters = function () {
      return [{
        type: _services_btcsvc_service__WEBPACK_IMPORTED_MODULE_2__["BtcsvcService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order.component.css */
      "./src/app/components/order.component.css")).default]
    })], OrderComponent);
    /***/
  },

  /***/
  "./src/app/components/orderdetail.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/orderdetail.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsOrderdetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXJkZXRhaWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/orderdetail.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/orderdetail.component.ts ***!
    \*****************************************************/

  /*! exports provided: OrderdetailComponent */

  /***/
  function srcAppComponentsOrderdetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderdetailComponent", function () {
      return OrderdetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_btcsvc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/btcsvc.service */
    "./src/app/services/btcsvc.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var OrderdetailComponent =
    /*#__PURE__*/
    function () {
      function OrderdetailComponent(btcsvc, router, activatedRoute) {
        _classCallCheck(this, OrderdetailComponent);

        this.btcsvc = btcsvc;
        this.router = router;
        this.activatedRoute = activatedRoute;
      }

      _createClass(OrderdetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.orderID = this.activatedRoute.snapshot.params.id;
          this.btcsvc.getOrderDetail(this.orderID).then(function (result) {
            _this4.orderSingleData = result; // For reactive form, populate the values using patchValue

            _this4.editForm.patchValue({
              'btcAddress': _this4.orderSingleData.btcAddress,
              'contactNumber': _this4.orderSingleData.contactNumber,
              'dateOfBirth': _this4.orderSingleData.dateOfBirth,
              'dateOfOrder': _this4.orderSingleData.dateOfOrder,
              'gender': _this4.orderSingleData.gender,
              'name': _this4.orderSingleData.name,
              'orderType': _this4.orderSingleData.orderType,
              'orderUnit': _this4.orderSingleData.orderUnit,
              'paylahCode': _this4.orderSingleData.paylahCode,
              'orderID': _this4.orderSingleData.orderID
            }); // If it is buy, btcAddress is a required field. If it is sell, paylahCode is a required field
            // if (this.editForm.get('orderType').value === 'buy') {
            //   this.editForm.get('btcAddress').setValidators(Validators.required);
            // } else {
            //   this.editForm.get('paylahCode').setValidators(Validators.required);
            // }

          }); // For reactive form

          this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'btcAddress': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'contactNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('(?=.*[0-9])[- +()0-9]+')]),
            'dateOfBirth': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'dateOfOrder': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'orderType': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'orderUnit': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'paylahCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'orderID': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
        } // Adds/removes validators of paylahCode and btcAddress depending on whether buy or sell is pressed
        // orderTypeToggler() {
        //   if (this.editForm.get('orderType').value === 'buy') {
        //     // btcAddress required paylahCode remove
        //     if (!this.editForm.get('btcAddress').validator) {this.editForm.get('btcAddress').setValidators(Validators.required)}
        //     if (this.editForm.get('paylahCode').validator) {this.editForm.get('paylahCode').clearValidators()}
        //   } else {
        //     // btcAddress remove paylahCode required
        //     if (this.editForm.get('btcAddress').validator) {this.editForm.get('btcAddress').clearValidators()}
        //     if (!this.editForm.get('paylahCode').validator) {this.editForm.get('paylahCode').setValidators(Validators.required)}
        //   }
        // }
        // Reactive form validator functions
        // forbiddenNumbers(control: FormControl): {[s: string]: Boolean} {
        //   if () {
        //     return;
        //   }
        //   return null;
        // }
        // For reactive form

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var updatedData = this.editForm.value;
          this.btcsvc.updateOrder(updatedData);
          this.router.navigate(['/success'], {
            state: {
              id: updatedData.orderID
            }
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/']);
        }
      }]);

      return OrderdetailComponent;
    }();

    OrderdetailComponent.ctorParameters = function () {
      return [{
        type: _services_btcsvc_service__WEBPACK_IMPORTED_MODULE_2__["BtcsvcService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    OrderdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orderdetail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orderdetail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/orderdetail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orderdetail.component.css */
      "./src/app/components/orderdetail.component.css")).default]
    })], OrderdetailComponent);
    /***/
  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/esm2015/material-moment-adapter.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      exports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MatMomentDateModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/services/btcsvc.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/btcsvc.service.ts ***!
    \********************************************/

  /*! exports provided: BtcsvcService */

  /***/
  function srcAppServicesBtcsvcServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BtcsvcService", function () {
      return BtcsvcService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var BtcsvcService =
    /*#__PURE__*/
    function () {
      function BtcsvcService(http) {
        _classCallCheck(this, BtcsvcService);

        this.http = http; // GET parameters

        this.coin = 'BTC';
        this.currencyPair = 'SGD'; // Hardcoded URLs

        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url || 'http://localhost:3001';
        this.addURL = "".concat(this.baseURL, "/setinfo");
        this.getURL = "".concat(this.baseURL, "/getallinfo");
        this.getSingleURL = "".concat(this.baseURL, "/getsingleinfo");
        this.updateSingleURL = "".concat(this.baseURL, "/updatesingleinfo");
        this.getPriceURL = "".concat(this.baseURL, "/price"); // Function takes in a moment.Moment object and returns a number (epoch time)

        this.convertMomentToEpoch = function (momIn) {
          return momIn.unix();
        }; // Function takes in a number (epoch time) and returns a moment.Moment object


        this.converEpochToMoment = function (epochIn) {
          return moment__WEBPACK_IMPORTED_MODULE_4__["unix"](epochIn);
        };
      }

      _createClass(BtcsvcService, [{
        key: "setOrder",
        value: function setOrder(input) {
          // Intercepting dates and changing them to epoch time (type number)
          input.dateOfBirth = this.convertMomentToEpoch(input.dateOfBirth);
          input.dateOfOrder = this.convertMomentToEpoch(input.dateOfOrder); // http post method

          var formData = new FormData(); // Append all values in input/order

          Object.entries(input).forEach(function (value) {
            formData.append(value[0], value[1].toString());
          });
          this.http.post(this.addURL, formData).subscribe(function (res) {
            return console.log('Data has been sent from Angular end');
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "getListOfOrders",
        value: function getListOfOrders() {
          var _this5 = this;

          // http get method --> get data from server
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'app-json');
          return this.http.get(this.getURL, {
            headers: headers
          }).toPromise().then(function (result) {
            _this5.orderInfoSSAll = JSON.parse(result);
            return _this5.orderInfoSSAll;
          });
        }
      }, {
        key: "getOrderDetail",
        value: function getOrderDetail(servedID) {
          var _this6 = this;

          // http get method --> get data from server
          var paramsToServer = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', servedID);
          var headersToServer = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'app-json');
          return this.http.get(this.getSingleURL, {
            params: paramsToServer,
            headers: headersToServer
          }).toPromise().then(function (result) {
            _this6.orderInfoSS = JSON.parse(result); // Converting epoch time to moment

            _this6.orderInfoSS.dateOfBirth = _this6.converEpochToMoment(_this6.orderInfoSS.dateOfBirth);
            _this6.orderInfoSS.dateOfOrder = _this6.converEpochToMoment(_this6.orderInfoSS.dateOfOrder); // const orderMatched = this.orderInfoSS.find((value) => value.orderID === servedID)
            // console.info('This is type of orderInfoSS: ', typeof this.orderInfoSS);
            // console.info('This is length of orderInfoSS: ', this.orderInfoSS.length);

            return _this6.orderInfoSS;
          });
        }
      }, {
        key: "updateOrder",
        value: function updateOrder(input) {
          // Converts the moment date to epoch time
          input.dateOfBirth = this.convertMomentToEpoch(input.dateOfBirth);
          input.dateOfOrder = this.convertMomentToEpoch(input.dateOfOrder);
          var paramsToServer = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', input.orderID); // http put method

          var formData = new FormData(); // Append all values in input/order

          Object.entries(input).forEach(function (value) {
            // Catches any undefined values, since toString method won't work
            if (value[1] === undefined) {
              formData.append(value[0], '');
            } else {
              formData.append(value[0], value[1].toString());
            }
          });
          this.http.put(this.updateSingleURL, formData, {
            params: paramsToServer
          }).toPromise();
        }
      }, {
        key: "getPrice",
        value: function getPrice() {
          var _this7 = this;

          return this.http.get("".concat(this.getPriceURL, "?crypto=").concat(this.coin, "&fiat=").concat(this.currencyPair)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (v) {
            return [v["".concat(_this7.coin).concat(_this7.currencyPair)].ask, v["".concat(_this7.coin).concat(_this7.currencyPair)].bid];
          })).toPromise();
        }
      }, {
        key: "setTotalAmount",
        value: function setTotalAmount(value) {
          this.totalAmount = value;
        } // Get bitcoin price from backend 

      }, {
        key: "getTotalAmount",
        value: function getTotalAmount() {
          return this.totalAmount;
        }
      }]);

      return BtcsvcService;
    }();

    BtcsvcService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BtcsvcService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BtcsvcService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      api_url: 'http://localhost:3001'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\work\Desktop\day14btc\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map