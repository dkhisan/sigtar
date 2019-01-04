(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TaskCreate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TaskCreate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      response: {
        success: false,
        message: ''
      },
      errors: {},
      task: {}
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      /*
       * fix datetime to sql format
       */
      var deadlinefixed = this.task.deadline.replace('T', ' ').concat(':00');
      this.task.deadline = deadlinefixed;
      var user = _auth.user;
      this.task.user_id = user.id;
      this.response.success = false;
      this.errors = {};

      _api.call('post', '/api/tasks/create', this.task).then(function (res) {
        if (res.status === 201) {
          _this.response.success = true;
          _this.response.message = res.statusText;
        }

        _this.task = {};
      }).catch(function (err) {
        if (err.response) {
          _this.errors = err.response.data.errors;
        } else if (err.request) {
          _this.errors = err.request.data.errors;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TaskCreate.vue?vue&type=template&id=570130c0&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TaskCreate.vue?vue&type=template&id=570130c0& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-lg-6" }, [
        _c("div", { staticClass: "card shadow mb-3" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v(
              "\n                    CRIANDO UMA NOVA TAREFA\n                "
            )
          ]),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-12" },
                    [
                      _vm.response.success
                        ? _c("div", { staticClass: "alert alert-success" }, [
                            _vm._v(_vm._s(_vm.response.message))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.errors, function(error, idx) {
                        return _c(
                          "div",
                          { key: idx, staticClass: "alert alert-danger" },
                          _vm._l(error, function(err, idx) {
                            return _c("span", { key: idx }, [
                              _vm._v(_vm._s(err))
                            ])
                          }),
                          0
                        )
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Nome")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.task.name,
                                expression: "task.name"
                              }
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors.name },
                            attrs: {
                              type: "text",
                              name: "name",
                              id: "name",
                              required: ""
                            },
                            domProps: { value: _vm.task.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.task, "name", $event.target.value)
                              }
                            }
                          })
                        ])
                      ])
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "description" } }, [
                        _vm._v("Descrição")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.task.description,
                            expression: "task.description"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.errors.description },
                        attrs: {
                          name: "description",
                          id: "description",
                          rows: "4",
                          maxlength: "500",
                          required: ""
                        },
                        domProps: { value: _vm.task.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.task,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "deadline" } }, [
                        _vm._v("Data limite")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.task.deadline,
                              expression: "task.deadline"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.deadline },
                          attrs: {
                            type: "datetime-local",
                            name: "deadline",
                            id: "deadline",
                            required: ""
                          },
                          domProps: { value: _vm.task.deadline },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.task,
                                "deadline",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "priority" } }, [
                        _vm._v("Prioridade")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group" }, [
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.task.priority,
                                expression: "task.priority"
                              }
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors.priority },
                            attrs: {
                              name: "priority",
                              id: "priority",
                              required: ""
                            },
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
                                  _vm.task,
                                  "priority",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "low" } }, [
                              _vm._v("Baixa")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "medium" } }, [
                              _vm._v("Média")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "high" } }, [
                              _vm._v("Alta")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "very_high" } }, [
                              _vm._v("Muito Alta")
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _vm._m(3)
              ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-file-alt" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-calendar-alt" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-exclamation-triangle" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          staticStyle: { "min-width": "100px" },
          attrs: { type: "submit" }
        },
        [_vm._v("Enviar")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/TaskCreate.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/TaskCreate.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskCreate_vue_vue_type_template_id_570130c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskCreate.vue?vue&type=template&id=570130c0& */ "./resources/js/views/TaskCreate.vue?vue&type=template&id=570130c0&");
/* harmony import */ var _TaskCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskCreate.vue?vue&type=script&lang=js& */ "./resources/js/views/TaskCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskCreate_vue_vue_type_template_id_570130c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskCreate_vue_vue_type_template_id_570130c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/TaskCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/TaskCreate.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/TaskCreate.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TaskCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/TaskCreate.vue?vue&type=template&id=570130c0&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/TaskCreate.vue?vue&type=template&id=570130c0& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCreate_vue_vue_type_template_id_570130c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskCreate.vue?vue&type=template&id=570130c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TaskCreate.vue?vue&type=template&id=570130c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCreate_vue_vue_type_template_id_570130c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCreate_vue_vue_type_template_id_570130c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);