(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserRegister.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserRegister.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      nameLength: 255,
      length: 20,
      user: {
        name: '',
        username: '',
        password: '',
        password_retype: '',
        email: ''
      },
      errors: {},
      response: {}
    };
  },
  methods: {
    validate: function validate() {
      this.errors = {};

      if (this.user) {
        if (this.user.name.length > this.nameLength) {
          this.errors.name = ["O nome n\xE3o pode ter mais que ".concat(this.nameLength, " caract\xE9res")];
        }

        if (this.user.username.length > this.length) {
          this.errors.username = ["O nome de usu\xE1rio n\xE3o pode ter mais que ".concat(this.nameLength, " caract\xE9res")];
        }

        if (this.user.password !== this.user.password_retype) {
          this.errors.password = ['As senhas não coincidem'];
        }

        if (this.user.password.length > this.length) {
          this.errors.password = ["A senha deve ter no m\xE1ximo ".concat(this.length, " caract\xE9res")];
        }

        if (this.user.email.length > this.nameLength) {
          this.errors.email = ["O nome de usu\xE1rio n\xE3o pode ter mais que ".concat(this.nameLength, " caract\xE9res")];
        }
      }

      if (_.isEmpty(this.errors)) {
        this.register();
      }
    },
    register: function register() {
      var _this = this;

      this.response.success = false;

      _api.call('post', '/api/register', this.user).then(function (res) {
        if (res.status === 201) {
          _this.response.success = true;
          _this.response.message = res.data.message;
        }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserRegister.vue?vue&type=template&id=778bf52d&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserRegister.vue?vue&type=template&id=778bf52d& ***!
  \**********************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-sm-6 col-lg-4" }, [
        _c("div", { staticClass: "card shadow" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.validate($event)
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
                          _vm._v("Nome completo")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.name,
                              expression: "user.name"
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
                          domProps: { value: _vm.user.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.user, "name", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "username" } }, [
                          _vm._v("Usuário")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.username,
                              expression: "user.username"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.username },
                          attrs: {
                            type: "text",
                            name: "username",
                            id: "username",
                            required: ""
                          },
                          domProps: { value: _vm.user.username },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "username",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "username" } }, [
                          _vm._v("E-mail")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.email,
                              expression: "user.email"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.username },
                          attrs: {
                            type: "text",
                            name: "email",
                            id: "email",
                            required: ""
                          },
                          domProps: { value: _vm.user.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.user, "email", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "password" } }, [
                          _vm._v("Senha")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.password,
                              expression: "user.password"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.password },
                          attrs: {
                            type: "password",
                            maxlength: "20",
                            name: "password",
                            id: "password",
                            required: ""
                          },
                          domProps: { value: _vm.user.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "password_retype" } }, [
                          _vm._v("Repetir senha")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.password_retype,
                              expression: "user.password_retype"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.password },
                          attrs: {
                            type: "password",
                            maxlength: "20",
                            name: "password_retype",
                            id: "password_retype",
                            required: ""
                          },
                          domProps: { value: _vm.user.password_retype },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "password_retype",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(0)
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
    return _c("div", { staticClass: "card-footer" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary btn-block", attrs: { type: "submit" } },
        [_vm._v("Cadastrar")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/UserRegister.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/UserRegister.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserRegister_vue_vue_type_template_id_778bf52d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserRegister.vue?vue&type=template&id=778bf52d& */ "./resources/js/views/UserRegister.vue?vue&type=template&id=778bf52d&");
/* harmony import */ var _UserRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserRegister.vue?vue&type=script&lang=js& */ "./resources/js/views/UserRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserRegister_vue_vue_type_template_id_778bf52d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserRegister_vue_vue_type_template_id_778bf52d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserRegister.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserRegister.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/UserRegister.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserRegister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/UserRegister.vue?vue&type=template&id=778bf52d&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/UserRegister.vue?vue&type=template&id=778bf52d& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRegister_vue_vue_type_template_id_778bf52d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserRegister.vue?vue&type=template&id=778bf52d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserRegister.vue?vue&type=template&id=778bf52d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRegister_vue_vue_type_template_id_778bf52d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRegister_vue_vue_type_template_id_778bf52d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);