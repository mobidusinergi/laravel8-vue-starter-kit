(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/partials/Header.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/partials/Header.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['title']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/pos/Detail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/apoteker/pos/Detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_partials_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/partials/Header */ "./resources/js/layouts/partials/Header.vue");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-barcode */ "./node_modules/vue-barcode/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_barcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qrcode_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode.vue */ "./node_modules/qrcode.vue/dist/qrcode.vue.esm.js");
/* harmony import */ var _lib_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/date */ "./resources/js/lib/date.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Header: _layouts_partials_Header__WEBPACK_IMPORTED_MODULE_0__["default"],
    'barcode': vue_barcode__WEBPACK_IMPORTED_MODULE_1___default.a,
    QrcodeVue: qrcode_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  filters: {
    indoDate: function indoDate(my_date) {
      return Object(_lib_date__WEBPACK_IMPORTED_MODULE_3__["default"])(my_date);
    },
    formatRupiah: function formatRupiah(x) {
      return "Rp. " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  data: function data() {
    return {
      no_faktur: '',
      pos: {
        pasien: {
          nama: ''
        },
        petuga: {
          nama: ''
        },
        peracik: {
          nama: ''
        },
        detail: []
      }
    };
  },
  mounted: function mounted() {
    this.no_faktur = this.$route.params.no_faktur;
    this.initData();
  },
  methods: {
    initData: function initData() {
      var _this = this;

      axios.get('/api/apoteker/pos/' + this.no_faktur).then(function (res) {
        if (res.data.status == 1) {
          _this.pos = res.data.data;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/pos/Detail.vue?vue&type=style&index=0&id=63649f9b&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/apoteker/pos/Detail.vue?vue&type=style&index=0&id=63649f9b&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.font-big[data-v-63649f9b] {\n    font-size: 20px; \n    font-weight: strong;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/pos/Detail.vue?vue&type=style&index=0&id=63649f9b&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/apoteker/pos/Detail.vue?vue&type=style&index=0&id=63649f9b&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=63649f9b&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/pos/Detail.vue?vue&type=style&index=0&id=63649f9b&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/partials/Header.vue?vue&type=template&id=6181a4b6&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/partials/Header.vue?vue&type=template&id=6181a4b6& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "block-header" }, [
    _c("div", { staticClass: "row clearfix" }, [
      _c("div", { staticClass: "col-md-7 col-sm-12" }, [
        _c("h1", { domProps: { innerHTML: _vm._s(_vm.title) } }),
        _vm._v(" "),
        _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
          _c(
            "ol",
            { staticClass: "breadcrumb" },
            [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c("router-link", { attrs: { to: { name: "home" } } }, [
                    _c("i", { staticClass: "fa fa-home" }),
                    _vm._v(" Beranda")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm._t("breadcrumb")
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-5 col-sm-12 text-right hidden-xs" },
        [_vm._t("button")],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/pos/Detail.vue?vue&type=template&id=63649f9b&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/apoteker/pos/Detail.vue?vue&type=template&id=63649f9b&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Header", {
        attrs: { title: "Detail Transasksi " + _vm.no_faktur },
        scopedSlots: _vm._u([
          {
            key: "breadcrumb",
            fn: function() {
              return [
                _c("li", { staticClass: "breadcrumb-item" }, [
                  _vm._v("Point Of Sales")
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item active" }, [
                  _vm._v("Detail")
                ])
              ]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "header" },
              [
                _c("center", [
                  _c("img", {
                    staticClass: "img-fluid",
                    staticStyle: { "margin-top": "50px" },
                    attrs: { src: "/assets/images/logo.png", alt: "" }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("span", { staticStyle: { "margin-top": "10px" } }, [
                    _vm._v(
                      "\n                            Jl. Wanaraja No. 121"
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                            Telephone (0262) 121-441\n                        "
                    )
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "body" }, [
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row clearfix" }, [
                _c(
                  "div",
                  { staticClass: "col-md-1 col-sm-1" },
                  [
                    _c("qrcode-vue", {
                      staticStyle: { "margin-right": "20px" },
                      attrs: { value: _vm.pos.no_faktur, size: 100, level: "H" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-7 col-sm-7" }, [
                  _c("table", [
                    _c("tr", [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("td", { staticStyle: { width: "15px" } }, [
                        _vm._v(":")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [
                          _vm._v(_vm._s(_vm._f("indoDate")(_vm.pos.created_at)))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("td", [_vm._v(":")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [_vm._v(_vm._s(_vm.pos.no_faktur))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("td", [_vm._v(":")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [_vm._v(_vm._s(_vm.pos.petugas.nama))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("td", [_vm._v(":")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [
                          _vm._v(
                            _vm._s(_vm.pos.peracik ? _vm.pos.peracik.nama : "-")
                          )
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 col-sm-4" }, [
                  _c("table", [
                    _c("tr", [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("td", { staticStyle: { width: "15px" } }, [
                        _vm._v(":")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              _vm.pos.pasien ? _vm.pos.pasien.nama : "Umum"
                            )
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _vm._m(5),
                      _vm._v(" "),
                      _c("td", { staticStyle: { width: "15px" } }, [
                        _vm._v(":")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [
                          _vm._v(
                            _vm._s(_vm.pos.pasien ? _vm.pos.pasien.no_hp : "-")
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _vm._m(6),
                      _vm._v(" "),
                      _c("td", { staticStyle: { width: "15px" } }, [
                        _vm._v(":")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [
                          _vm._v(
                            _vm._s(_vm.pos.pasien ? _vm.pos.pasien.alamat : "-")
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row clearfix" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-hover table-custom spacing5 mb-5"
                      },
                      [
                        _vm._m(7),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.pos.detail, function(barang) {
                            return _c("tr", { key: barang.id }, [
                              _c(
                                "td",
                                [
                                  _c("barcode", {
                                    attrs: {
                                      value: barang.barang.kode_obat,
                                      width: "1",
                                      height: "50",
                                      fontSize: "12"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "span",
                                  { staticStyle: { "font-size": "20px" } },
                                  [_vm._v(_vm._s(barang.nama))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "hidden-sm-down mb-0 text-muted"
                                  },
                                  [
                                    _vm._v(
                                      " Satuan : / " + _vm._s(barang.satuan)
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", { staticClass: "font-big" }, [
                                  _vm._v(
                                    _vm._s(barang.qty) +
                                      " " +
                                      _vm._s(barang.satuan)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "hidden-sm-down" }, [
                                _c(
                                  "span",
                                  { staticStyle: { "font-size": "20px" } },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatRupiah")(barang.harga)
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _c("span", { staticClass: "font-big" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatRupiah")(barang.sub_total)
                                    )
                                  )
                                ])
                              ])
                            ])
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("tfoot", [
                          _c("tr", [
                            _c("td", { attrs: { colspan: "4" } }, [
                              _vm._v(
                                "PPN " +
                                  _vm._s(_vm.pos.pajak ? _vm.pos.pajak : 0) +
                                  "%"
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _c("span", { staticClass: "font-big" }, [
                                _vm._v("- " + _vm._s(_vm._f("formatRupiah")(0)))
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { attrs: { colspan: "4" } }, [
                              _vm._v(
                                "Diskon " +
                                  _vm._s(_vm.pos.diskon ? _vm.pos.diskon : 0) +
                                  "%"
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _c("span", { staticClass: "font-big" }, [
                                _vm._v("- " + _vm._s(_vm._f("formatRupiah")(0)))
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "bg-secondary text-white" }, [
                            _vm._m(8),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _c("span", { staticClass: "font-big" }, [
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatRupiah")(
                                        parseInt(_vm.pos.grandtotal)
                                      )
                                    )
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(9)
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "200px" } }, [
      _c("strong", [_vm._v("Tanggal Transaksi")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Nomor Faktur")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Petugas")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Peracik")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "200px" } }, [
      _c("strong", [_vm._v("Pelanggan")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("No. HP")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Alamat")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "140px" } }),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "120px" } }, [_vm._v("Qty")]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "hidden-sm-down", staticStyle: { width: "80px" } },
          [_vm._v("Harga")]
        ),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "80px", "text-align": "right" } }, [
          _vm._v("Sub Total")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "4" } }, [
      _c("span", { staticClass: "font-big" }, [_vm._v("Grand Total")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row clearfix" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("span", [
          _c("strong", [_vm._v("Note:")]),
          _vm._v(
            " Ipsum is simply dummy text of the printing and typesetting industry."
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 text-right" }, [
        _c("button", { staticClass: "btn btn-info" }, [
          _c("i", { staticClass: "icon-printer" }),
          _vm._v(" Print")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/layouts/partials/Header.vue":
/*!**************************************************!*\
  !*** ./resources/js/layouts/partials/Header.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_6181a4b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=6181a4b6& */ "./resources/js/layouts/partials/Header.vue?vue&type=template&id=6181a4b6&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/layouts/partials/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_6181a4b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_6181a4b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/partials/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/partials/Header.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/partials/Header.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/partials/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/partials/Header.vue?vue&type=template&id=6181a4b6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/layouts/partials/Header.vue?vue&type=template&id=6181a4b6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_6181a4b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=6181a4b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/partials/Header.vue?vue&type=template&id=6181a4b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_6181a4b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_6181a4b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/lib/date.js":
/*!**********************************!*\
  !*** ./resources/js/lib/date.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function indonesianDate(my_date) {
  // return my_date
  // return my_date[2] + my_date[1] + my_date[0];
  if (!my_date) {
    return false;
  }

  var str = my_date;
  var date = moment(str);
  return date.format('lll');
}

/* harmony default export */ __webpack_exports__["default"] = (indonesianDate);

/***/ }),

/***/ "./resources/js/pages/apoteker/pos/Detail.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/apoteker/pos/Detail.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_vue_vue_type_template_id_63649f9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=63649f9b&scoped=true& */ "./resources/js/pages/apoteker/pos/Detail.vue?vue&type=template&id=63649f9b&scoped=true&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/js/pages/apoteker/pos/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Detail_vue_vue_type_style_index_0_id_63649f9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detail.vue?vue&type=style&index=0&id=63649f9b&scoped=true&lang=css& */ "./resources/js/pages/apoteker/pos/Detail.vue?vue&type=style&index=0&id=63649f9b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_63649f9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_vue_vue_type_template_id_63649f9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63649f9b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/apoteker/pos/Detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/apoteker/pos/Detail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/apoteker/pos/Detail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/pos/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/apoteker/pos/Detail.vue?vue&type=style&index=0&id=63649f9b&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/pages/apoteker/pos/Detail.vue?vue&type=style&index=0&id=63649f9b&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_63649f9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=63649f9b&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/pos/Detail.vue?vue&type=style&index=0&id=63649f9b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_63649f9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_63649f9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_63649f9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_63649f9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/apoteker/pos/Detail.vue?vue&type=template&id=63649f9b&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/apoteker/pos/Detail.vue?vue&type=template&id=63649f9b&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_63649f9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=template&id=63649f9b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/pos/Detail.vue?vue&type=template&id=63649f9b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_63649f9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_63649f9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);