(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Task.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Task.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    id: String,
    task: Object
  },
  data: function data() {
    return {
      response: {
        status: 0,
        error: '',
        success: false
      },
      errors: {},
      task_: {},
      isUpdateModalActive: false,
      isDeleteModalActive: false
    };
  },
  created: function created() {
    if (!this.task) {
      this.fetchTask(this.id);
    } else {
      this.task_ = this.task;
      this.response.success = true;
    }
  },
  methods: {
    fetchTask: function fetchTask(task) {
      var _this = this;

      this.response.success = false;
      this.response.error = '';
      axios.get("/api/tasks/".concat(task)).then(function (res) {
        if (res.status === 200) {
          _this.task_ = res.data;
          _this.response.success = true;
        }
      }).catch(function (err) {
        if (err.response) {
          _this.response.status = err.response.status;
          _this.response.error = err.response.data.error;
        } else if (err.request) {
          _this.request.status = err.request.status;
          _this.response.error = err.request.data.error;
        } else {
          console.error(err.message);
        }
      });
    },
    showUpdateModal: function showUpdateModal() {
      this.isUpdateModalActive = true;
    },
    closeUpdateModal: function closeUpdateModal() {
      this.isUpdateModalActive = false;
    },
    showDeleteModal: function showDeleteModal() {
      this.isDeleteModalActive = true;
    },
    closeDeleteModal: function closeDeleteModal() {
      this.isDeleteModalActive = false;
    },
    destroy: function destroy() {
      var _this2 = this;

      this.response.success = false;
      this.errors = {};
      axios.delete("/api/tasks/".concat(this.task_.id, "/remove")).then(function (res) {
        if (res.status === 204) {
          _this2.response.message = res.statusText;
        }
      }).catch(function (err) {
        if (err.response) {
          _this2.errors = err.response.data.errors;
        } else if (err.request) {
          _this2.errors = err.request.data.errors;
        }
      }).then(function () {
        _this2.isDeleteModalActive = false;
      });
    },
    submit: function submit() {
      var _this3 = this;

      /*
       * fix datetime to sql format
       */
      var deadlinefixed = this.task_.deadline.replace('T', ' ').concat(':00');
      this.task_.deadline = deadlinefixed;
      /*
       * format date for use in 'updated_at' column
       */

      var date = new Date();
      var datef = "".concat(date.getFullYear(), "-").concat(date.getMonth(), "-").concat(date.getDay(), " ").concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds());
      this.task_.user_id = 1; // for test only

      this.task_.updated_at = datef;
      this.response.success = false;
      this.errors = {};
      axios.put("/api/tasks/".concat(this.task_.id, "/edit"), this.task_).then(function (res) {
        if (res.status === 200) {
          _this3.response.success = true;
          _this3.response.message = res.statusText;
        }
      }).catch(function (err) {
        if (err.response) {
          _this3.errors = err.response.data.errors;
        } else if (err.request) {
          _this3.errors = err.request.data.errors;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Task.vue?vue&type=style&index=0&id=5abc6ab8&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Task.vue?vue&type=style&index=0&id=5abc6ab8&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.task-action > button[data-v-5abc6ab8] {\n    margin-left: 4px;\n    margin-right: 4px;\n    min-width: 120px;\n}\n.section-comment[data-v-5abc6ab8] {\n    background-color: #eee;\n    border-radius: 8px;\n    padding: 18px;\n    margin-bottom: 8px;\n}\n.modal-mask[data-v-5abc6ab8] {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    display: table;\n    transition: opacity .3s ease;\n}\n.modal-wrapper[data-v-5abc6ab8] {\n    display: table-cell;\n    vertical-align: middle;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Task.vue?vue&type=style&index=0&id=5abc6ab8&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Task.vue?vue&type=style&index=0&id=5abc6ab8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=style&index=0&id=5abc6ab8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Task.vue?vue&type=style&index=0&id=5abc6ab8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Task.vue?vue&type=template&id=5abc6ab8&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Task.vue?vue&type=template&id=5abc6ab8&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-lg-8 mb-3" }, [
        _vm.response.success
          ? _c("div", { staticClass: "card shadow" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.task_.name) +
                    "\n                    "
                ),
                _vm.task_.finished == "1"
                  ? _c(
                      "span",
                      { staticClass: "badge badge-success float-right" },
                      [_vm._v("CONCLUíDA")]
                    )
                  : _c(
                      "span",
                      { staticClass: "badge badge-secondary float-right" },
                      [_vm._v("NãO CONCLUíDA")]
                    )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c("p", { staticClass: "h6" }, [_vm._v("Descrição")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "section-comment" }, [
                      _c("p", { staticClass: "text-justify" }, [
                        _vm._v(_vm._s(_vm.task_.description))
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6" }, [
                    _c("p", [
                      _vm._v("Data limite"),
                      _c(
                        "span",
                        { staticClass: "font-weight-bold float-right" },
                        [_vm._v(_vm._s(_vm.task_.deadline))]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("p", [
                      _vm._v("Prioridade"),
                      _c(
                        "span",
                        { staticClass: "font-weight-bold float-right" },
                        [_vm._v(_vm._s(_vm.task_.priority))]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6" }, [
                    _c("p", [
                      _vm._v("Cadastrada em"),
                      _c(
                        "span",
                        { staticClass: "font-weight-bold float-right" },
                        [_vm._v(_vm._s(_vm.task_.created_at))]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("p", [
                      _vm._v("Atualizada em"),
                      _c(
                        "span",
                        { staticClass: "font-weight-bold float-right" },
                        [_vm._v(_vm._s(_vm.task_.created_at))]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row justify-content-center task-action" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.showUpdateModal }
                      },
                      [_vm._v("Editar")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-danger",
                        attrs: { type: "button" },
                        on: { click: _vm.showDeleteModal }
                      },
                      [_vm._v("Apagar")]
                    )
                  ]
                )
              ])
            ])
          : _vm.response.message
            ? _c("div", { staticClass: "card shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "alert alert-success" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.response.message) +
                        "\n                    "
                    )
                  ])
                ])
              ])
            : _c("div", { staticClass: "card shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v(_vm._s(_vm.response.error))
                ])
              ])
      ])
    ]),
    _vm._v(" "),
    _vm.isDeleteModalActive
      ? _c(
          "div",
          [
            _c("transition", { attrs: { name: "modal" } }, [
              _c("div", { staticClass: "modal-mask" }, [
                _c("div", { staticClass: "modal-wrapper" }, [
                  _c(
                    "div",
                    {
                      staticClass: "modal-dialog modal-dialog-centered",
                      attrs: { role: "document" }
                    },
                    [
                      _c("div", { staticClass: "modal-content" }, [
                        _c(
                          "form",
                          {
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.destroy($event)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "modal-body" }, [
                              _c("p", [
                                _vm._v(
                                  "Tem certeza que quer fazer isso? (Isso não pode ser desfeito)"
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "modal-footer" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger w-50",
                                  attrs: { type: "submit" }
                                },
                                [_vm._v("Sim")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-secondary w-50",
                                  attrs: { type: "button" },
                                  on: { click: _vm.closeDeleteModal }
                                },
                                [_vm._v("Não")]
                              )
                            ])
                          ]
                        )
                      ])
                    ]
                  )
                ])
              ])
            ])
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.isUpdateModalActive
      ? _c(
          "div",
          [
            _c("transition", { attrs: { name: "modal" } }, [
              _c("div", { staticClass: "modal-mask" }, [
                _c("div", { staticClass: "modal-wrapper" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "modal-dialog modal-dialog-centered modal-lg",
                      attrs: { role: "document" }
                    },
                    [
                      _c("div", { staticClass: "modal-content" }, [
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
                            _c("div", { staticClass: "modal-body" }, [
                              _c("div", { staticClass: "row" }, [
                                _vm.response.message
                                  ? _c("div", { staticClass: "col-12" }, [
                                      _c(
                                        "div",
                                        { staticClass: "alert alert-success" },
                                        [_vm._v(_vm._s(_vm.response.message))]
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.errors
                                  ? _c(
                                      "div",
                                      { staticClass: "col-12" },
                                      _vm._l(_vm.errors, function(error, idx) {
                                        return _c(
                                          "div",
                                          {
                                            key: idx,
                                            staticClass: "alert alert-danger"
                                          },
                                          _vm._l(error, function(err, idx) {
                                            return _c("span", { key: idx }, [
                                              _vm._v(_vm._s(err))
                                            ])
                                          }),
                                          0
                                        )
                                      }),
                                      0
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-sm-8 col-lg-9" },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "name" } }, [
                                        _vm._v("Name")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-prepend"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "input-group-text"
                                                },
                                                [
                                                  _c("span", {
                                                    staticClass:
                                                      "fas fa-file-alt"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.task_.name,
                                                expression: "task_.name"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            class: {
                                              "is-invalid": _vm.errors.name
                                            },
                                            attrs: {
                                              type: "text",
                                              name: "name",
                                              id: "name",
                                              required: ""
                                            },
                                            domProps: { value: _vm.task_.name },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.task_,
                                                  "name",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-sm-4 col-lg-3" },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "f-yes" } }, [
                                        _vm._v("Finished")
                                      ]),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.task_.finished,
                                                  expression: "task_.finished"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "radio",
                                                name: "finished",
                                                id: "f-yes",
                                                value: "1"
                                              },
                                              domProps: {
                                                checked: _vm._q(
                                                  _vm.task_.finished,
                                                  "1"
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  _vm.$set(
                                                    _vm.task_,
                                                    "finished",
                                                    "1"
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: { for: "f-yes" }
                                              },
                                              [_vm._v("Yes")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.task_.finished,
                                                  expression: "task_.finished"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "radio",
                                                name: "finished",
                                                id: "f-no",
                                                value: "0"
                                              },
                                              domProps: {
                                                checked: _vm._q(
                                                  _vm.task_.finished,
                                                  "0"
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  _vm.$set(
                                                    _vm.task_,
                                                    "finished",
                                                    "0"
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: { for: "f-no" }
                                              },
                                              [_vm._v("No")]
                                            )
                                          ]
                                        )
                                      ])
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      { attrs: { for: "description" } },
                                      [_vm._v("Description")]
                                    ),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.task_.description,
                                          expression: "task_.description"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.errors.description
                                      },
                                      attrs: {
                                        name: "description",
                                        id: "description",
                                        rows: "4",
                                        required: ""
                                      },
                                      domProps: {
                                        value: _vm.task_.description
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.task_,
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
                                    _c(
                                      "label",
                                      { attrs: { for: "deadline" } },
                                      [_vm._v("Deadline")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "input-group" }, [
                                      _c(
                                        "div",
                                        { staticClass: "input-group-prepend" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "input-group-text" },
                                            [
                                              _c("span", {
                                                staticClass:
                                                  "fas fa-calendar-alt"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.task_.deadline,
                                            expression: "task_.deadline"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.errors.deadline
                                        },
                                        attrs: {
                                          type: "datetime-local",
                                          name: "deadline",
                                          id: "deadline",
                                          required: ""
                                        },
                                        domProps: { value: _vm.task_.deadline },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.task_,
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
                                    _c(
                                      "label",
                                      { attrs: { for: "priority" } },
                                      [_vm._v("Priority")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "input-group" }, [
                                      _c(
                                        "div",
                                        { staticClass: "input-group-prepend" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "input-group-text" },
                                            [
                                              _c("span", {
                                                staticClass:
                                                  "fas fa-exclamation-triangle"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.task_.priority,
                                              expression: "task_.priority"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.errors.priority
                                          },
                                          attrs: {
                                            name: "priority",
                                            id: "priority",
                                            required: ""
                                          },
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.task_,
                                                "priority",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "low" } },
                                            [_vm._v("Low")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "medium" } },
                                            [_vm._v("Medium")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "high" } },
                                            [_vm._v("High")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "very_high" } },
                                            [_vm._v("Very High")]
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "modal-footer" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary w-50",
                                  attrs: { type: "submit" }
                                },
                                [_vm._v("Save")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-secondary w-50",
                                  attrs: { type: "button" },
                                  on: { click: _vm.closeUpdateModal }
                                },
                                [_vm._v("Close")]
                              )
                            ])
                          ]
                        )
                      ])
                    ]
                  )
                ])
              ])
            ])
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Task.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Task.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task_vue_vue_type_template_id_5abc6ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.vue?vue&type=template&id=5abc6ab8&scoped=true& */ "./resources/js/views/Task.vue?vue&type=template&id=5abc6ab8&scoped=true&");
/* harmony import */ var _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.vue?vue&type=script&lang=js& */ "./resources/js/views/Task.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Task_vue_vue_type_style_index_0_id_5abc6ab8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task.vue?vue&type=style&index=0&id=5abc6ab8&scoped=true&lang=css& */ "./resources/js/views/Task.vue?vue&type=style&index=0&id=5abc6ab8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Task_vue_vue_type_template_id_5abc6ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Task_vue_vue_type_template_id_5abc6ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5abc6ab8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Task.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Task.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Task.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Task.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Task.vue?vue&type=style&index=0&id=5abc6ab8&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Task.vue?vue&type=style&index=0&id=5abc6ab8&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_id_5abc6ab8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=style&index=0&id=5abc6ab8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Task.vue?vue&type=style&index=0&id=5abc6ab8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_id_5abc6ab8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_id_5abc6ab8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_id_5abc6ab8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_id_5abc6ab8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_id_5abc6ab8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Task.vue?vue&type=template&id=5abc6ab8&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Task.vue?vue&type=template&id=5abc6ab8&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_5abc6ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=template&id=5abc6ab8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Task.vue?vue&type=template&id=5abc6ab8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_5abc6ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_5abc6ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);