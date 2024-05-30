"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ jumbotron)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/jumbotron.js



const Jumbotron = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((style_default()), {
                id: "488922165b21ea9d",
                children: ".jumbotron.jsx-488922165b21ea9d{position:relative;\noverflow:hidden;\nbackground-image:url(/img/banner.png);\nbackground-size:cover}\n.jumbotron.jsx-488922165b21ea9d .container.jsx-488922165b21ea9d{position:relative;\nz-index:2;\nbackground:rgba(0, 0, 0, 0.2);\npadding:2rem;\nborder:1px solid rgba(0, 0, 0, 0.1);\nborder-radius:3px}"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                alt: "Photo by Benjamin Child on Unsplash - https://unsplash.com/photos/GWe0dlVD9e0",
                className: "jsx-488922165b21ea9d" + " " + "jumbotron jumbotron-fluid bg-dark mb-0",
                /*#__PURE__*/ children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-488922165b21ea9d" + " " + "container text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "jsx-488922165b21ea9d" + " " + "display-2 text-white d-none d-lg-block",
                            children: "Eleva tu estilo de trabajo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "jsx-488922165b21ea9d" + " " + "display-4 text-white text-center d-lg-none",
                            children: "Eleva tu estilo de trabajo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "jsx-488922165b21ea9d" + " " + "lead text-center",
                            children: "Transforme su forma de trabajar, conocer clientes y colaborar con una experiencia de oficina \xfanica e inspiradora."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                            className: "jsx-488922165b21ea9d" + " " + "my-4"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/locations",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                role: "button",
                                className: "jsx-488922165b21ea9d" + " " + "btn btn-primary btn-lg",
                                children: "Explora nuestras oficinas"
                            })
                        })
                    ]
                })
            })
        ]
    })
;
/* harmony default export */ const jumbotron = (Jumbotron);


/***/ }),

/***/ 678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(555);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(664);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88);
/* harmony import */ var _components_jumbotron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(199);
/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(928);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);
uuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







__webpack_require__(242);
const Index = ({ locationGroups  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_jumbotron__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "card bg-dark",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "card-body",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "card-title display-4 text-center",
                                children: "Ubicaciones Principales"
                            })
                        })
                    }),
                    locationGroups.map((group)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "card-group",
                            children: group.locations.map((location)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "card text-white bg-dark",
                                    children: getLocation(location)
                                }, location.id)
                            )
                        }, group.id)
                    )
                ]
            })
        ]
    })
;
const getLocation = (location)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card-body",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: "card-title text-center",
                children: location.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "card-text my-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_board__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    location: location
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "card-text",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                    className: "text-muted",
                    children: location.mailingAddress
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: "/locations/[id]",
                as: `/locations/${location.id}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "btn btn-secondary",
                    children: "Saber m\xe1s"
                })
            })
        ]
    })
;
const getStaticProps = async (context)=>{
    var items = [
        ..._data_json__WEBPACK_IMPORTED_MODULE_6__
    ].orderBy((l)=>l.lastRenovationDate
    ).reverse().take(4);
    return {
        props: {
            locationGroups: chunkArray(items, 2)
        }
    };
};
const chunkArray = (items, size)=>{
    var results = [];
    while(items.length){
        results.push({
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),
            locations: items.splice(0, 2)
        });
    }
    return results;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 242:
/***/ ((module) => {

module.exports = require("linqjs");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,122], () => (__webpack_exec__(678)));
module.exports = __webpack_exports__;

})();