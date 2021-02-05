(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/obat/Add.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/apoteker/obat/Add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_partials_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/partials/Header */ "./resources/js/layouts/partials/Header.vue");
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
    Header: _layouts_partials_Header__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {
        kode_barang: '',
        nama: '',
        stok: '',
        harga_beli: '',
        satuan_id: '',
        kategori_id: '',
        harga_jual: [{
          satuan_id: '',
          kategori_id: '',
          harga_jual: ''
        }]
      },
      satuan: [],
      kategori: []
    };
  },
  mounted: function mounted() {
    this.generateBarcode();
    this.initSatuan();
    this.initKategori();
  },
  methods: {
    initSatuan: function initSatuan() {
      var _this = this;

      axios.get('/api/apoteker/attr_obat/satuan').then(function (res) {
        if (res.data.status == 1) {
          _this.satuan = res.data.data;
        }
      });
    },
    initKategori: function initKategori() {
      var _this2 = this;

      axios.get('/api/apoteker/attr_obat/kategori').then(function (res) {
        if (res.data.status == 1) {
          _this2.kategori = res.data.data;
        }
      });
    },
    theAction: function theAction(event) {},
    addHargaJual: function addHargaJual() {
      this.form.harga_jual.push({
        satuan_id: '',
        kategori_id: '',
        harga_jual: ''
      });
    },
    randNumber: function randNumber() {
      return parseInt(Math.random().toString().substr(3));
    },
    generateBarcode: function generateBarcode() {
      this.form.kode_barang = this.randNumber();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/obat/Add.vue?vue&type=style&index=0&id=4dbdab07&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/apoteker/obat/Add.vue?vue&type=style&index=0&id=4dbdab07&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.borderless td[data-v-4dbdab07], .borderless th[data-v-4dbdab07] {\n    border: none;\n}\n.form-small[data-v-4dbdab07] {\n    width: 120px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/obat/Add.vue?vue&type=style&index=0&id=4dbdab07&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/apoteker/obat/Add.vue?vue&type=style&index=0&id=4dbdab07&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=4dbdab07&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/obat/Add.vue?vue&type=style&index=0&id=4dbdab07&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/obat/Add.vue?vue&type=template&id=4dbdab07&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/apoteker/obat/Add.vue?vue&type=template&id=4dbdab07&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "Tambah Data Obat" },
        scopedSlots: _vm._u([
          {
            key: "breadcrumb",
            fn: function() {
              return [
                _c("li", { staticClass: "breadcrumb-item" }, [
                  _vm._v("Master Data")
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item" }, [_vm._v("Obat")]),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item active" }, [
                  _vm._v("Tambah")
                ])
              ]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-9" }, [
          _c("div", { staticClass: "card-deck" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.kode_barang,
                          expression: "form.kode_barang"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", disabled: "" },
                      domProps: { value: _vm.form.kode_barang },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "kode_barang", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-prepend" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: { click: _vm.generateBarcode }
                        },
                        [_vm._v("Generate")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.nama,
                        expression: "form.nama"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.nama },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "nama", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.stok,
                        expression: "form.stok"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.stok },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "stok", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "satuan" } }, [
                        _vm._v("Kategori")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.satuan_id,
                              expression: "form.satuan_id"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "satuan_id" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "satuan_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.satuan, function(s) {
                          return _c(
                            "option",
                            { key: s.id, domProps: { value: s.id } },
                            [_vm._v(_vm._s(s.nama))]
                          )
                        }),
                        0
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "satuan" } }, [
                        _vm._v("Satuan")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.kategori_id,
                              expression: "form.kategori_id"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "satuan_id" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "kategori_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.kategori, function(k) {
                          return _c(
                            "option",
                            { key: k.id, domProps: { value: k.id } },
                            [_vm._v(_vm._s(k.nama))]
                          )
                        }),
                        0
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.harga_beli,
                          expression: "form.harga_beli"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.form.harga_beli },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "harga_beli", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header container-fluid" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-8" }, [
                    _vm._v(
                      "\n                                Harga Jual\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-4 float-right pull-right" },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm pull-right",
                          on: { click: _vm.addHargaJual }
                        },
                        [
                          _c("i", { staticClass: "fa fa-plus" }),
                          _vm._v(" Tambah")
                        ]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table borderless" }, [
                    _c(
                      "tbody",
                      _vm._l(_vm.form.harga_jual, function(harga_jual, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [
                            _c("div", { staticClass: "input-group" }, [
                              _vm._m(5, true),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: harga_jual.harga_jual,
                                    expression: "harga_jual.harga_jual"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { placeholder: "Harga" },
                                domProps: { value: harga_jual.harga_jual },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      harga_jual,
                                      "harga_jual",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: harga_jual.kategori_id,
                                    expression: "harga_jual.kategori_id"
                                  }
                                ],
                                staticClass: "form-control form-small",
                                attrs: { name: "satuan_id", id: "satuan_id" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      harga_jual,
                                      "kategori_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.kategori, function(k) {
                                return _c(
                                  "option",
                                  { key: k.id, domProps: { value: k.id } },
                                  [_vm._v(_vm._s(k.nama))]
                                )
                              }),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: harga_jual.satuan_id,
                                    expression: "harga_jual.satuan_id"
                                  }
                                ],
                                staticClass: "form-control form-small",
                                attrs: { name: "satuan_id", id: "satuan_id" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      harga_jual,
                                      "satuan_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.satuan, function(s) {
                                return _c(
                                  "option",
                                  { key: s.id, domProps: { value: s.id } },
                                  [_vm._v(_vm._s(s.nama))]
                                )
                              }),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(6, true)
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(7)
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
    return _c("label", { attrs: { for: "kode_barang" } }, [
      _vm._v("Kode Barang "),
      _c("span", { staticStyle: { color: "red", "font-weight": "bold" } }, [
        _vm._v("*)")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "nama" } }, [
      _vm._v("Nama Barang "),
      _c("span", { staticStyle: { color: "red", "font-weight": "bold" } }, [
        _vm._v("*)")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "stok" } }, [
      _vm._v("Stok Asal "),
      _c("span", { staticStyle: { color: "red", "font-weight": "bold" } }, [
        _vm._v("*)")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "harga_beli" } }, [
      _vm._v("Harga Beli "),
      _c("span", { staticStyle: { color: "red", "font-weight": "bold" } }, [
        _vm._v("*)")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        {
          staticClass: "input-group-text",
          attrs: { id: "inputGroup-sizing-lg" }
        },
        [_vm._v("Rp. ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        {
          staticClass: "input-group-text",
          attrs: { id: "inputGroup-sizing-lg" }
        },
        [_vm._v("Rp. ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("button", { staticClass: "btn btn-danger" }, [
        _c("i", {
          staticClass: "fa fa-trash",
          attrs: { "aria-hidden": "true" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticClass: "alert alert-warning" }, [
        _c("h5", [
          _c("i", { staticClass: "fa fa-exclamation-triangle" }),
          _vm._v(" Perhatian")
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("ul", { staticStyle: { "margin-left": "-20px" } }, [
          _c("li", [_vm._v("Isi Data Dengan Baik dan Benar")]),
          _vm._v(" "),
          _c("li", [
            _vm._v("Form dengan Tanda "),
            _c(
              "span",
              { staticStyle: { color: "red", "font-weight": "bold" } },
              [_vm._v("*)")]
            ),
            _vm._v(" harus diisi")
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("Tekan Tombol "),
            _c("i", [_c("strong", [_vm._v('"Simpan Data Barang"')])]),
            _vm._v(" Jika Sudah")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-block btn-primary" }, [
        _vm._v("Simpan Data Barang")
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

/***/ "./resources/js/pages/apoteker/obat/Add.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/apoteker/obat/Add.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_4dbdab07_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=4dbdab07&scoped=true& */ "./resources/js/pages/apoteker/obat/Add.vue?vue&type=template&id=4dbdab07&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/pages/apoteker/obat/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_id_4dbdab07_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=4dbdab07&scoped=true&lang=css& */ "./resources/js/pages/apoteker/obat/Add.vue?vue&type=style&index=0&id=4dbdab07&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_4dbdab07_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_4dbdab07_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4dbdab07",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/apoteker/obat/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/apoteker/obat/Add.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/apoteker/obat/Add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/obat/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/apoteker/obat/Add.vue?vue&type=style&index=0&id=4dbdab07&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/pages/apoteker/obat/Add.vue?vue&type=style&index=0&id=4dbdab07&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_4dbdab07_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=4dbdab07&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/obat/Add.vue?vue&type=style&index=0&id=4dbdab07&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_4dbdab07_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_4dbdab07_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_4dbdab07_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_4dbdab07_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/apoteker/obat/Add.vue?vue&type=template&id=4dbdab07&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/apoteker/obat/Add.vue?vue&type=template&id=4dbdab07&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_4dbdab07_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=4dbdab07&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/apoteker/obat/Add.vue?vue&type=template&id=4dbdab07&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_4dbdab07_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_4dbdab07_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);