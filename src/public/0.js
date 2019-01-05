(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tasks.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tasks.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      noTasks: false,
      tasks: [],
      task: {
        id: '',
        user_id: '',
        name: '',
        description: '',
        deadline: '',
        priority: '',
        finished: '',
        created_at: '',
        updated_at: ''
      },
      pagination: {}
    };
  },
  created: function created() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks: function fetchTasks(page) {
      var _this = this;

      var vm = this;
      page = page || '/api/tasks';

      _api.call('get', page).then(function (res) {
        _this.tasks = res.data.data;
        var meta = {
          current_page: res.data.current_page,
          last_page: res.data.last_page
        };
        var links = {
          next_page: res.data.next_page_url,
          prev_page: res.data.prev_page_url
        };
        _this.noTasks = res.data.total === 0;
        vm.makePagination(meta, links);
      }).catch(function (err) {
        return console.log(err);
      });
    },
    makePagination: function makePagination(meta, links) {
      var next;
      var prev;

      if (links.next_page !== null || undefined) {
        var page = links.next_page.substring(links.next_page.indexOf('=') + 1, links.next_page.length);
        next = "/api/tasks?page=".concat(page);
      }

      if (links.prev_page !== null || undefined) {
        var _page = links.prev_page.substring(links.prev_page.indexOf('=') + 1, links.prev_page.length);

        prev = "/api/tasks?page=".concat(_page);
      }

      var pagination = {
        current_page: meta.current_page,
        last_page: meta.last_page,
        next_page: next || null,
        prev_page: prev || null
      };
      this.pagination = pagination;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02& ***!
  \***************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "container-fluid mb-3" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "div",
            { staticClass: "row justify-content-center" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary btn-sm mr-2 shadow",
                  attrs: { to: { name: "tasks.create" } }
                },
                [_vm._v("Nova tarefa")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "btn-toolbar" }, [
                _c("div", { staticClass: "btn-group shadow" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-sm",
                      attrs: {
                        type: "button",
                        disabled: !_vm.pagination.prev_page
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.fetchTasks(_vm.pagination.prev_page)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fas fa-angle-left" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-sm",
                      attrs: { type: "button", disabled: "" }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.pagination.current_page) +
                          " de " +
                          _vm._s(_vm.pagination.last_page)
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-sm",
                      attrs: {
                        type: "button",
                        disabled: !_vm.pagination.next_page
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.fetchTasks(_vm.pagination.next_page)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fas fa-angle-right" })]
                  )
                ])
              ])
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _vm.noTasks
          ? _c("div", { staticClass: "row justify-content-center" }, [
              _vm._m(1)
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.tasks, function(task) {
            return _c("div", { key: task.id, staticClass: "col-lg-4 mb-3" }, [
              _c("div", { staticClass: "card shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _vm._v(_vm._s(task.name))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-text" }, [
                    _vm._v("\n                                Cadastrada em"),
                    _c(
                      "span",
                      { staticClass: "font-weight-bold float-right" },
                      [_vm._v(_vm._s(task.created_at))]
                    ),
                    _c("br"),
                    _vm._v("\n                                Concluída"),
                    task.finished
                      ? _c(
                          "span",
                          { staticClass: "font-weight-bold float-right" },
                          [_vm._v("sim")]
                        )
                      : _c(
                          "span",
                          { staticClass: "font-weight-bold float-right" },
                          [_vm._v("não")]
                        )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-footer" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "btn btn-outline-primary btn-block shadow-sm",
                        attrs: {
                          to: {
                            name: "task.show",
                            params: { id: task.id.toString(), task: task }
                          }
                        }
                      },
                      [_vm._v("Detalhes")]
                    )
                  ],
                  1
                )
              ])
            ])
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "input-group input-group-sm col-sm-5 mr-2" },
      [
        _c("div", { staticClass: "input-group-prepend" }, [
          _c(
            "span",
            {
              staticClass: "input-group-text",
              attrs: { id: "search-prepend" }
            },
            [_c("span", { staticClass: "fas fa-search" })]
          )
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control shadow",
          attrs: { type: "text", "aria-describedby": "search-prepend" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 mb-3" }, [
      _c("div", { staticClass: "card shadow" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("p", { staticClass: "card-text" }, [_vm._v("Sem resultados.")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Tasks.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Tasks.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks.vue?vue&type=template&id=f579aa02& */ "./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02&");
/* harmony import */ var _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks.vue?vue&type=script&lang=js& */ "./resources/js/views/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tasks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tasks.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Tasks.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tasks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Tasks.vue?vue&type=template&id=f579aa02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);