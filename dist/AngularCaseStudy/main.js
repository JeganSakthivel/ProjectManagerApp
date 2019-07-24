(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Model/project.model.ts":
/*!****************************************!*\
  !*** ./src/app/Model/project.model.ts ***!
  \****************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/Model/task.model.ts":
/*!*************************************!*\
  !*** ./src/app/Model/task.model.ts ***!
  \*************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/Model/user.model.ts":
/*!*************************************!*\
  !*** ./src/app/Model/user.model.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-user/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"text-left\" [formGroup] = \"userForm\" (ngSubmit)=\"newUserFormHandler(userForm)\" >\n    <div class=\"form-group row\">\n      <label for=\"firstNameInput\" class=\"col-sm-2 col-form-label\">First Name :</label>\n      <div class=\"col-sm-4\">\n        <input type=\"text\" class=\"form-control\" id=\"firstNameInput\" placeholder=\"First Name\" required formControlName=\"firstName\"\n        name =\"firstName\"  >\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"lastNameInput\" class=\"col-sm-2 col-form-label\">Last Name</label>\n      <div class=\"col-sm-4\">\n        <input type=\"text\" class=\"form-control\" id=\"lastNameInput\" placeholder=\"Last Name\" required formControlName=\"lastName\"\n        name =\"lastName\" > \n      </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"employeeIdInput\" class=\"col-sm-2 col-form-label\">Employee Id</label>\n        <div class=\"col-sm-3\">\n          <input type=\"text\" class=\"form-control\" id=\"employeeIdInput\" required formControlName=\"employeId\"\n          name =\"employeId\" placeholder=\"Employee Id\" >\n        </div>\n   </div>\n    <div class=\"form-group row\">\n        <div class=\"col-sm-1\">\n          <button type=\"submit\" [disabled] = \"!userForm.valid\" class=\"btn btn-primary\">{{buttonText}}</button>          \n      </div>\n      <div class=\"col-sm-1\">\n          <button type=\"submit\" class=\"btn btn-primary\">Reset</button>          \n      </div>\n       \n\n      </div>\n    </form>\n   <!-- <div class=\"alert alert-success\" *ngIf=\"isSucess\">\n        New user saved sucessfully.\n    </div>\n    <div class=\"alert alert-success\" *ngIf=\"isUpdated\">\n        User updated sucessfully.\n    </div>\n    <div class=\"alert alert-success\" *ngIf=\"isDeleted\">\n        User Deleted sucessfully.\n    </div>\n    -->\n<hr/>\n\n<h1>user List</h1>\n<div class=\"row\">\n    <div class=\"col-12 col-sm-4\">\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search...\">\n    </div>\n    <div class=\"col-12 col-sm-8\">\n      <label>Sort by:</label>\n      <button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('firstName')\">First Name</button>\n      |<button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('lastName')\">Last Name</button>\n      |<button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('userId')\">User Id</button>\n    </div>\n  </div>\n<br />\n  <div *ngIf=\"userList && userList.length>0\">\n<div class=\"card col-sm-4\"  *ngFor=\"let user of userList | filter: searchText | orderby: field : order\">\n  <div class=\"card-body\">\n    <!--<h5 class=\"card-title\"><a routerLink=\"/contacts/{{ contact.id }}\">{{ contact.name }}</a></h5> -->\n    <div class=\"btn-group-vertical float-right \">\n        <a href=\"#\" class=\"btn btn-primary\" (click)=\"editUserHandler(user.userId)\">Edit</a> \n            \n        <p></p>\n        <a href=\"#\" class=\"btn btn-danger\" (click)=\"deleteUserHandler(user.userId)\">Delete</a> \n     </div>\n    <h5 class=\"card-text\">{{ user.firstName }}</h5>\n    <p class=\"card-text\">{{ user.lastName }}</p>  \n    <p class=\"card-text\">{{ user.employeId }}</p> \n  \n  </div>  \n</div>\n</div>"

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Model/user.model */ "./src/app/Model/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isDeleted = false;
        this.isSuccess = false;
        this.isUpdated = false;
        this.buttonText = "Add";
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.initialiseFormData();
        this.readAll();
        this.userObject = new src_app_Model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.order = 1;
    };
    AddUserComponent.prototype.initialiseFormData = function () {
        this.userObject = new src_app_Model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            employeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
    };
    AddUserComponent.prototype.readAll = function () {
        var _this = this;
        this.userService.readAll()
            .subscribe(function (response) {
            console.log(response);
            _this.userList = response;
        }, function (err) { return console.log('HTTP Error', err); }, function () { return console.log('HTTP request completed.'); });
    };
    AddUserComponent.prototype.resetForm = function () {
        this.searchText = "";
        this.field = "";
        this.order = 1;
        this.userForm.patchValue({
            firstName: "",
            lastName: "",
            employeId: ""
        });
        this.buttonText = "Add";
    };
    AddUserComponent.prototype.newUserFormHandler = function () {
        var _this = this;
        console.log(this.userForm.value);
        if (this.userForm.invalid) {
            return;
        }
        if (this.buttonText == "Update") {
            this.userService.update(this.userObject.userId, this.userForm.value)
                .subscribe(function (updatedUserDetail) {
                console.log(updatedUserDetail);
                if (updatedUserDetail && updatedUserDetail.userId) {
                    _this.isUpdated = true;
                    _this.readAll();
                    _this.resetForm();
                    setTimeout(function () {
                        //this.router.navigate(['contacts'])
                        _this.router.navigateByUrl('addProject');
                    }, 3000);
                }
                else {
                    _this.isUpdated = false;
                }
            });
        }
        else {
            this.userService.create(this.userForm.value)
                .subscribe(function (savedUserDetail) {
                console.log(savedUserDetail);
                if (savedUserDetail && savedUserDetail.userId) {
                    _this.isSuccess = true;
                    _this.readAll();
                    _this.resetForm();
                }
                else {
                    _this.isSuccess = false;
                }
            });
        }
    };
    /* populateForm(user: User) {
       this.userService.formData = Object.assign({}, user);
     } */
    AddUserComponent.prototype.editUserHandler = function (userId) {
        var _this = this;
        console.log("inside edit user handler " + userId);
        this.buttonText = "Update";
        this.userService.getUserById(userId).subscribe(function (response) {
            console.log("Edit get User Detail" + response);
            _this.userObject = response;
            _this.userForm.patchValue({
                firstName: _this.userObject.firstName,
                lastName: _this.userObject.lastName,
                employeId: _this.userObject.employeId,
                userId: _this.userObject.userId
            });
            _this.readAll();
            setTimeout(function () {
                //this.router.navigate(['contacts'])
                _this.router.navigateByUrl('addProject');
            }, 3000);
        }, function (err) { return console.log('HTTP Error', err); }, function () { return console.log('HTTP request completed.'); });
    };
    AddUserComponent.prototype.deleteUserHandler = function (id) {
        var _this = this;
        this.userService.delete(id)
            .subscribe(function (status) {
            console.log(status);
            _this.isDeleted = true;
            _this.readAll();
            setTimeout(function () {
                //this.router.navigate(['contacts'])
                _this.router.navigateByUrl('addProject');
            }, 3000);
        });
    };
    AddUserComponent.prototype.sortBy = function (field) {
        this.field = field;
        this.order = this.order * (-1);
        return false;
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\" style=\"padding-top: 60px\">\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularCaseStudy';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/Router */ "./node_modules/@angular/Router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _orderby_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orderby.pipe */ "./src/app/orderby.pipe.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./task/addtask/addtask.component */ "./src/app/task/addtask/addtask.component.ts");
/* harmony import */ var _task_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./task/viewtask/viewtask.component */ "./src/app/task/viewtask/viewtask.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var App_Routes = [
    { path: '', redirectTo: '/addProject', pathMatch: 'full' },
    //{ path : '', component : AddUserComponent },
    { path: 'addProject', component: _project_project_component__WEBPACK_IMPORTED_MODULE_12__["ProjectComponent"] },
    { path: 'AddTask', component: _task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_13__["AddtaskComponent"] },
    { path: 'AddUser', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__["AddUserComponent"] },
    { path: 'ViewTask', component: _task_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_14__["ViewtaskComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__["AddUserComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"],
                _orderby_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderbyPipe"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_12__["ProjectComponent"],
                _task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_13__["AddtaskComponent"],
                _task_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_14__["ViewtaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_Router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(App_Routes),
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText, properties) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        return items.filter(function (item) {
            for (var key in item) {
                if (!properties) {
                    if (("" + item[key]).toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                        return true;
                }
                else {
                    if (properties && properties.indexOf(key) >= 0) {
                        if (("" + item[key]).toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                            return true;
                    }
                }
            }
            return false;
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-dark {\r\n    background-color: #364034!important;\r\n  }\r\n\r\n.bg-light {\r\n    background-color: #dee2e6!important;\r\n  } \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0dBQ3JDOztBQUVIO0lBQ0ksb0NBQW9DO0dBQ3JDIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDAzNCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLmJnLWxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTYhaW1wb3J0YW50O1xyXG4gIH0gXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-light bg-dark\">\n        <span class=\"navbar-brand mb-0 h1\">Project Manager App</span>\n      </nav>\n    <nav class=\"navbar navbar-expand-md navbar-light  bg-light\">\n     \n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"navbar-collapse\" id=\"navbarCollapse\">\n            <app-nav></app-nav>\n        </div>\n      \n    </nav>\n  </header>\n  \n  "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.navItems = [
            "addProject",
            "addTask",
            "addUser",
            "viewTask"
        ];
        this.navObjects = [
            { name: 'addProject', link: '/addProject' },
            { name: 'AddTask', link: '/AddTask' },
            { name: 'AddUser', link: '/AddUser' },
            { name: 'ViewTask', link: '/ViewTask' }
        ];
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: "\n  <ul class=\"navbar-nav mr-auto\">\n  <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" *ngFor= \"let item of navObjects\">\n    <a class=\"nav-link\" routerLink=\"{{ item.link }}\">{{ item.name }} </a>\n  </li>\n</ul>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/orderby.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/orderby.pipe.ts ***!
  \*********************************/
/*! exports provided: OrderbyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbyPipe", function() { return OrderbyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderbyPipe = /** @class */ (function () {
    function OrderbyPipe() {
    }
    OrderbyPipe.prototype.transform = function (items, field, order) {
        if (!items || !field || !order)
            return items;
        return items.sort(function (a, b) {
            a = a[field];
            b = b[field];
            if (a < b) {
                return -1 * order;
            }
            else if (a > b) {
                return 1 * order;
            }
            else {
                return 0;
            }
            //return a > b ? order : order * (-1);
        });
    };
    OrderbyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orderby'
        })
    ], OrderbyPipe);
    return OrderbyPipe;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"text-left\" [formGroup] = \"projectForm\" (ngSubmit)=\"newprojectFormHandler(projectForm)\" >\n  <div class=\"form-group row\">\n    <label for=\"projectNameInput\" class=\"col-sm-2 col-form-label\">Project :</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" id=\"projectNameInput\" placeholder=\"Project\" required formControlName=\"projectName\"\n      name =\"projectName\"  >\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">Set Start Date</label>\n    <div class=\"col-12 col-sm-4\">\n      <input type=\"checkbox\" class=\"checkbox\" formControlName=\"DateRequired\" (change)=\"toggleDate()\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">Start Date</label>\n    <div class=\"col-12 col-sm-4\">\n      <input type=\"date\" class=\"form-control\" formControlName=\"startDate\">\n    </div>\n    <div *ngIf=\"submitted && startDateRequired\" class=\"col-12 col-sm-4 text-danger small\">\n      Start date is required\n    </div>\n    <div *ngIf=\"submitted && startDateGreater\" class=\"col-12 col-sm-4 text-danger small\">\n      Start date is greater than end date\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">End Date</label>\n    <div class=\"col-12 col-sm-4\">\n      <input type=\"date\" class=\"form-control\" formControlName=\"endDate\">\n    </div>\n    <div *ngIf=\"submitted && endDateRequired\" class=\"col-12 col-sm-4 text-danger small\">\n      End date is required\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">Priority</label>\n    <div class=\"col-12 col-sm-4\">\n      <input type=\"range\" min=\"0\" max=\"30\" step=\"1\" class=\"form-control\" formControlName=\"priority\" />\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">Manager</label>\n    <div class=\"col-12 col-sm-4 input-group\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"Manager\" readonly  />     \n    </div>\n    <button type=\"button\" class=\"col-sm-2 btn btn-info\" (click)=searchUserPopup()>Search</button>\n  </div>\n  <div class=\"form-group row\">\n      <div class=\"col-sm-1\">\n        <button type=\"submit\" [disabled] = \"!projectForm.valid\" class=\"btn btn-primary\">{{buttonText}}</button>          \n    </div>\n    <div class=\"col-sm-1\">\n        <button type=\"submit\" class=\"btn btn-primary\">Reset</button>          \n    </div>\n </div>\n</form>\n<div class=\"alert alert-success\" *ngIf=\"(isUpdate || isSaved || isSuspended) && !successMessage\">\n  {{ successMessage }}\n</div>\n\n<hr/>\n\n<h1>Project List</h1>\n\n<div class=\"list-group\" *ngFor=\"let proj of projectsList\">\n  <div class=\"list-group-item\">\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-6\">\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>Project: </label> {{ proj.projectName }}\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>Priority: </label> {{ proj.priority }}\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>Start Date: </label> {{ proj.startDate | date: \"dd-MM-yyyy\" }}\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>End Date: </label> {{ proj.endDate | date: \"dd-MM-yyyy\" }}\n            </div>\n          </div>\n        </div>\n     <!--   <div class=\"row\">\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>Task Count: </label> {{ proj.TaskCount }}\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>Completed Task Count: </label> {{ proj.CompletedTaskCount }}\n            </div>\n          </div>\n        </div>\n-->\n      </div>\n      <div class=\"col-12 col-sm-6\">\n        <button class=\"btn btn-sm btn-primary\" (click)=\"editProject(proj.projectId)\">Edit</button>\n        | <button class=\"btn btn-sm btn-danger\" (click)=\"suspendProject(proj.projectId)\">Suspend</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"showUsersModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Select User</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" *ngIf=\"userList\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Search...\">\n          </div>\n        </div>\n        <br />\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of userList | filter: searchText\">\n              <td>{{ user.firstName }}</td>\n              <td>{{ user.lastName }}</td>\n              <td>\n                <button type=\"button\" class=\"btn btn-link btn-sm\" (click)=\"selectUser(user)\">Select</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"alert alert-success\" *ngIf=\"isManagerSelected\">\n         Manager is selected, This dialog will auto close.\n      </div>\n      </div>\n     <!-- <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateContact()\" >UpdateContact</button>\n      </div>  -->\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _Model_project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/project.model */ "./src/app/Model/project.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(projectService, userService) {
        this.projectService = projectService;
        this.userService = userService;
        this.isManagerSelected = false;
        this.isUpdate = false;
        this.isSaved = false;
        this.isSuspended = false;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.initializeFormControl();
    };
    ProjectComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.readAll()
            .subscribe(function (response) {
            console.log(response);
            _this.projectsList = response;
        }, function (err) { return console.log('HTTP Error', err); }, function () { return console.log('getProjects completed.'); });
    };
    ProjectComponent.prototype.resetForm = function () {
        this.buttonText = "Save";
        this.project = new _Model_project_model__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        this.managerId = 0;
        this.startDateRequired = false;
        this.endDateRequired = false;
        this.startDateGreater = false;
        this.successMessage = '';
        this.isUpdate = false;
        this.isSaved = false;
        this.isSuspended = false;
        this.projectForm.patchValue({
            projectName: '',
            managerId: '',
            Manager: '',
            priority: 0,
            startDate: null,
            endDate: null,
            userObject: null
        });
    };
    ProjectComponent.prototype.initializeFormControl = function () {
        this.project = new _Model_project_model__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        // new object
        this.projectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)),
            DateRequired: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: null, disable: true }),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: null, disable: true })
        });
        this.toggleDate();
        this.buttonText = "Save";
    };
    ProjectComponent.prototype.toggleDate = function () {
        this.startDateRequired = false;
        this.endDateRequired = false;
        this.startDateGreater = false;
        var dateRequired = this.projectForm.controls['DateRequired'].value;
        if (dateRequired) {
            var today = new Date();
            var todayplus1 = new Date();
            todayplus1.setDate(today.getDate() + 1);
            this.projectForm.patchValue({
                startDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(today, 'yyyy-MM-dd', 'en-US'),
                endDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(todayplus1, 'yyyy-MM-dd', 'en-US')
            });
            this.projectForm.controls['startDate'].enable();
            this.projectForm.controls['endDate'].enable();
        }
        else {
            this.projectForm.patchValue({
                startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: null }),
                endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: null })
            });
            this.projectForm.controls['startDate'].disable();
            this.projectForm.controls['endDate'].disable();
        }
    };
    ProjectComponent.prototype.newprojectFormHandler = function () {
        var _this = this;
        this.startDateRequired = false;
        this.endDateRequired = false;
        if (this.projectForm.invalid) {
            return;
        }
        this.project.projectName = this.projectForm.get('projectName').value;
        this.project.managerId = this.managerId;
        this.project.priority = this.projectForm.get('priority').value;
        var dateRequired = this.projectForm.controls['DateRequired'].value;
        if (dateRequired) {
            var startDate = this.projectForm.get('startDate').value;
            var endDate = this.projectForm.get('endDate').value;
            if (startDate == null || startDate == undefined || startDate == "") {
                this.startDateRequired = true;
            }
            if (endDate == null || endDate == undefined || endDate == "") {
                this.endDateRequired = true;
            }
            if (this.startDateRequired || this.endDateRequired) {
                return;
            }
            if (startDate > endDate) {
                this.startDateGreater = true;
                return;
            }
            this.project.startDate = this.projectForm.get('startDate').value;
            this.project.endDate = this.projectForm.get('endDate').value;
        }
        else {
            this.project.startDate = null;
            this.project.endDate = null;
        }
        this.userService.getUserById(this.project.managerId).subscribe(function (response) {
            console.log("Get User Detail" + response);
            _this.project.userObject = response;
            _this.saveProject(_this.project);
            _this.isSaved = true;
        }, function (err) { return console.log('Error while geting user', err); }, function () {
            console.log('HTTP User request completed.');
        });
        return;
    };
    ProjectComponent.prototype.saveProject = function (project) {
        var _this = this;
        this.projectService.saveProject(project).subscribe(function (result) {
            console.log("save project result - ", result);
            // reload the table
            _this.getProjects();
            _this.resetForm();
        }, function (error) {
            _this.error = "Error while saving the project";
        }, function () {
            if (_this.isUpdate = true) {
                _this.successMessage = 'Project Updated Successfully';
            }
            else if (_this.isSaved = true) {
                _this.successMessage = 'Project Saved Successfully';
            }
            else if (_this.isSuspended = true) {
                _this.successMessage = 'Project suspended Successfully';
            }
        });
    };
    ProjectComponent.prototype.searchUserPopup = function () {
        var _this = this;
        $("#showUsersModal").modal('show');
        this.userService.readAll()
            .subscribe(function (response) {
            console.log(response);
            _this.userList = response;
        }, function (err) { return console.log('HTTP Error', err); }, function () { return console.log('HTTP request completed.'); });
    };
    ProjectComponent.prototype.selectUser = function (user) {
        if (user != null) {
            this.projectForm.patchValue({
                Manager: user.lastName + ", " + user.firstName
            });
            this.managerId = user.userId;
            this.isManagerSelected = true;
        }
        console.log("selected manager id ", this.managerId);
        setTimeout(function () {
            $("#showUsersModal").modal('hide');
        }, 3000);
    };
    ProjectComponent.prototype.editProject = function (id) {
        var _this = this;
        this.isUpdate = true;
        this.title = "Edit Project";
        this.buttonText = "Update";
        this.projectService.getProjectById(id).subscribe(function (result) {
            _this.project = result;
            _this.projectForm.patchValue({
                projectName: _this.project.projectName,
                Manager: _this.project.userObject.lastName + ", " + _this.project.userObject.firstName,
                priority: _this.project.priority,
                startDate: _this.project.startDate,
                endDate: _this.project.endDate,
                userObject: _this.project.userObject,
                managerId: _this.project.userObject.userId
            });
            _this.projectForm.patchValue({
                DateRequired: _this.project.startDate != null
            });
            _this.managerId = _this.project.userObject.userId;
            _this.toggleDate();
        });
    };
    ProjectComponent.prototype.suspendProject = function (id) {
        var _this = this;
        this.projectService.getProjectById(id).subscribe(function (result) {
            _this.project = result;
            _this.project.status = "completed";
            _this.isSuspended = true;
            // suspend the project on confirmation
            _this.saveProject(_this.project);
        });
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [_service_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"], _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/service/project.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.readAll = function () {
        return this.http.get("http://localhost:8080/api/projects/").
            //return this.http.get("https://jsonplaceholder.typicode.com/users").
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log('Handling error locally and rethrowing it...', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ProjectService.prototype.getProjectById = function (id) {
        return this.http.get("http://localhost:8080/api/projects/" + id).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log('Handling error locally and rethrowing it...', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ProjectService.prototype.saveProject = function (projectData) {
        console.log('project data..' + projectData);
        return this.http.post("http://localhost:8080/api/projects/add", projectData).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log('Handling error locally and rethrowing it...', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/service/task.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/task.service.ts ***!
  \*****************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getTaskById = function (id) {
        return this.http.get("http://localhost:8080/api/parentTasks/" + id).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log('Handling error locally and rethrowing it...', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    // save Task
    TaskService.prototype.saveTask = function (task) {
        return this.http.post("http://localhost:8080/api/parentTasks/add", task).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log('Handling error locally and rethrowing it...', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userObject = {};
    }
    UserService.prototype.create = function (userData) {
        console.log(userData);
        return this.http.post("http://localhost:8080/api/users/add", userData).
            //return this.http.post("https://jsonplaceholder.typicode.com/users", userData).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res.json();
        }));
    };
    UserService.prototype.readAll = function () {
        return this.http.get("http://localhost:8080/api/users/").
            //return this.http.get("https://jsonplaceholder.typicode.com/users").
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log('Handling error locally and rethrowing it...', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get("http://localhost:8080/api/users/" + id).
            //return this.http.get("https://jsonplaceholder.typicode.com/users").
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log('Handling error locally and rethrowing it...', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    UserService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Server error occured");
    };
    /* getUserById(id: number): Observable<User> {
       return this.http.get<User>("http://localhost:8080/api/users/" + id)
       .pipe(
         catchError(e => this.handleError(e)));
     }*/
    UserService.prototype.delete = function (id) {
        return this.http.delete("http://localhost:8080/api/users/delete/" + id).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res.json();
        }));
    };
    UserService.prototype.update = function (userId, userObj) {
        return this.http.put("http://localhost:8080/api/users/update/" + userId, userObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res.json();
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/task/addtask/addtask.component.css":
/*!****************************************************!*\
  !*** ./src/app/task/addtask/addtask.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svYWRkdGFzay9hZGR0YXNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/task/addtask/addtask.component.html":
/*!*****************************************************!*\
  !*** ./src/app/task/addtask/addtask.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"text-left\" [formGroup] = \"taskForm\" (ngSubmit)=\"newtaskFormHandler(taskForm)\" >\n  <div class=\"form-group row\">   \n    <label class=\"col-12 col-sm-2 control-label\">Project</label>\n    <div class=\"col-12 col-sm-4 input-group\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"Project\" readonly  />     \n    </div>\n    <button type=\"button\" class=\"col-sm-2 btn btn-info\" (click)=searchProjectPopup()>Search</button>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"taskNameInput\" class=\"col-sm-2 col-form-label\">Task :</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" id=\"taskNameInput\" placeholder=\"Task Name\" required formControlName=\"taskName\"\n      name =\"taskName\"  >\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">Is Parent Task</label>\n    <div class=\"col-12 col-sm-4\">\n      <input type=\"checkbox\" class=\"checkbox\" formControlName=\"IsParentTask\" (change)=\"onParentTaskChange()\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">Priority</label>\n    <div class=\"col-12 col-sm-4\">\n      <input type=\"range\" min=\"0\" max=\"30\" step=\"1\" class=\"form-control\" formControlName=\"priority\" />\n    </div>\n  </div>\n  <div class=\"form-group row\">   \n    <label class=\"col-12 col-sm-2 control-label\">Parent Task</label>\n    <div class=\"col-12 col-sm-4 input-group\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"ParentTask\" readonly  />     \n    </div>\n    <button type=\"button\" class=\"col-sm-2 btn btn-info\" [disabled] = \"IsParentTask\" (click)=searchParentTaskPopup()>Search</button>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">Start Date</label>\n    <div class=\"col-12 col-sm-4\">\n      <input type=\"date\" class=\"form-control\" formControlName=\"startDate\">\n    </div>\n    <div *ngIf=\"submitted && startDateRequired\" class=\"col-12 col-sm-4 text-danger small\">\n      Start date is required\n    </div>\n    <div *ngIf=\"submitted && startDateGreater\" class=\"col-12 col-sm-4 text-danger small\">\n      Start date is greater than end date\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">End Date</label>\n    <div class=\"col-12 col-sm-4\">\n      <input type=\"date\" class=\"form-control\" formControlName=\"endDate\">\n    </div>\n    <div *ngIf=\"submitted && endDateRequired\" class=\"col-12 col-sm-4 text-danger small\">\n      End date is required\n    </div>\n  </div>\n  \n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">User</label>\n    <div class=\"col-12 col-sm-4 input-group\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"User\" readonly  />     \n    </div>\n    <button type=\"button\" class=\"col-sm-2 btn btn-info\" (click)=searchUserPopup()>Search</button>\n  </div>\n  <div class=\"form-group row\">\n      <div class=\"col-sm-1\">\n        <button type=\"submit\" [disabled] = \"!taskForm.valid\" class=\"btn btn-primary\">{{buttonText}}</button>          \n    </div>\n    <div class=\"col-sm-1\">\n        <button type=\"submit\" class=\"btn btn-primary\">Reset</button>          \n    </div>\n </div>\n</form>\n<div class=\"alert alert-success\" *ngIf=\"(isUpdate || isSaved || isSuspended) && !successMessage\">\n  {{ successMessage }}\n</div>\n\n<hr/>\n\n\n<div class=\"modal fade\" id=\"showProjectModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Select Project</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" *ngIf=\"projectList\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Search...\">\n          </div>\n        </div>\n        <br />\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th>Project Name</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let project of projectList | filter: searchText\">\n              <td>{{ project.projectName }}</td>              \n              <td>\n                <button type=\"button\" class=\"btn btn-link btn-sm\" (click)=\"selectProject(project)\">Select</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"alert alert-success\" *ngIf=\"isProjectSelected\">\n         Project is selected, This dialog will auto close.\n      </div>\n      </div>\n     <!-- <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateContact()\" >UpdateContact</button>\n      </div>  -->\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"showUsersModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Select User</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" *ngIf=\"userList\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Search...\">\n          </div>\n        </div>\n        <br />\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of userList | filter: searchText\">\n              <td>{{ user.firstName }}</td>\n              <td>{{ user.lastName }}</td>\n              <td>\n                <button type=\"button\" class=\"btn btn-link btn-sm\" (click)=\"selectUser(user)\">Select</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"alert alert-success\" *ngIf=\"isManagerSelected\">\n         Manager is selected, This dialog will auto close.\n      </div>\n      </div>\n     <!-- <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateContact()\" >UpdateContact</button>\n      </div>  -->\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/task/addtask/addtask.component.ts":
/*!***************************************************!*\
  !*** ./src/app/task/addtask/addtask.component.ts ***!
  \***************************************************/
/*! exports provided: AddtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtaskComponent", function() { return AddtaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var src_app_Model_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Model/task.model */ "./src/app/Model/task.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app//service/project.service */ "./src/app/service/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddtaskComponent = /** @class */ (function () {
    function AddtaskComponent(taskService, activatedRoute, route, projectService) {
        this.taskService = taskService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.projectService = projectService;
        this.submitted = false;
        this.isProjectSelected = false;
    }
    AddtaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeFormControl();
        this.isEdit = false;
        // for edit
        this.activatedRoute.params.subscribe(function (params) {
            if (params != null) {
                var taskId = params['id'];
                if (taskId != null && taskId != undefined) {
                    _this.Task.taskId = taskId;
                    _this.editTask(_this.Task.taskId);
                }
            }
        });
    };
    AddtaskComponent.prototype.initializeFormControl = function () {
        this.Task = new src_app_Model_task_model__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        // new object
        this.taskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Project: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            taskName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            IsParentTask: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            ParentTask: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: null, disable: true }),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disable: true }),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: null, disable: true }),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: null, disable: true }),
            User: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: null, disable: true }),
        });
        this.addProject();
        this.onParentTaskChange();
    };
    AddtaskComponent.prototype.editTask = function (id) {
        var _this = this;
        this.title = "Edit Task";
        this.isEdit = true;
        this.buttonText = "Update";
        this.taskService.getTaskById(id).subscribe(function (result) {
            _this.Task = result;
            _this.taskForm.patchValue({
                Project: _this.Task.projectName,
                Task: _this.Task.taskName,
                IsParentTask: _this.Task.IsParentTask,
                ParentTask: _this.Task.parentTaskName,
                Priority: _this.Task.priority,
                StartDate: _this.Task.startDate,
                EndDate: _this.Task.endDate,
                User: _this.Task.UserName
            });
            _this.projectId = _this.Task.projectId;
            _this.parentTaskId = _this.Task.parentTaskId;
            _this.userId = _this.Task.userId;
            _this.onParentTaskChange();
            // on edit mode, not allow to change the parent flag
            var isParentTask = _this.taskForm.controls['IsParentTask'].value;
            if (isParentTask) {
                _this.taskForm.controls['IsParentTask'].disable();
            }
        });
    };
    AddtaskComponent.prototype.onParentTaskChange = function () {
        this.startDateRequired = false;
        this.endDateRequired = false;
        this.startDateGreater = false;
        var isParentTask = this.taskForm.controls['IsParentTask'].value;
        if (!isParentTask) {
            var today = new Date();
            var todayplus1 = new Date();
            todayplus1.setDate(today.getDate() + 1);
            this.taskForm.patchValue({
                StartDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(today, 'yyyy-MM-dd', 'en-US'),
                EndDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(todayplus1, 'yyyy-MM-dd', 'en-US')
            });
            this.taskForm.controls['startDate'].enable();
            this.taskForm.controls['endDate'].enable();
            this.taskForm.controls['priority'].enable();
            this.taskForm.controls['ParentTask'].enable();
            this.taskForm.controls['User'].enable();
        }
        else {
            this.taskForm.patchValue({
                StartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: null }),
                EndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: null }),
                ParentTask: '',
                Priority: 0,
                User: '',
            });
            this.userId = 0;
            this.parentTaskId = 0;
            this.taskForm.controls['startDate'].disable();
            this.taskForm.controls['endDate'].disable();
            this.taskForm.controls['priority'].disable();
            this.taskForm.controls['ParentTask'].enable();
            this.taskForm.controls['User'].disable();
        }
    };
    AddtaskComponent.prototype.resetForm = function () {
        this.Task = new src_app_Model_task_model__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        this.projectId = 0;
        this.parentTaskId = null;
        this.userId = 0;
        this.startDateRequired = false;
        this.endDateRequired = false;
        this.startDateGreater = false;
        this.userRequrired = false;
        this.taskForm.patchValue({
            Project: '',
            taskName: '',
            IsParentTask: false,
            ParentTask: '',
            priority: 0,
            startDate: null,
            endDate: null,
            User: ''
        });
    };
    AddtaskComponent.prototype.addProject = function () {
        this.resetForm();
        this.title = "Add Task";
        this.buttonText = "Add";
        this.onParentTaskChange();
    };
    AddtaskComponent.prototype.newtaskFormHandler = function () {
        var _this = this;
        this.submitted = true;
        this.startDateRequired = false;
        this.endDateRequired = false;
        this.priorityRequired = false;
        this.startDateGreater = false;
        this.userRequired = false;
        if (this.taskForm.invalid) {
            return;
        }
        var isParentTask = this.taskForm.controls['IsParentTask'].value;
        this.Task.projectName = this.taskForm.get('Project').value;
        this.Task.projectId = this.projectId;
        this.Task.taskName = this.taskForm.get('taskName').value;
        this.Task.IsParentTask = isParentTask;
        if (!isParentTask) {
            var startDate = this.taskForm.get('startDate').value;
            var endDate = this.taskForm.get('endDate').value;
            var priority = this.taskForm.get('priority').value;
            var user = this.taskForm.get('User').value;
            if (startDate == null || startDate == undefined || startDate == "") {
                this.startDateRequired = true;
            }
            if (endDate == null || endDate == undefined || endDate == "") {
                this.endDateRequired = true;
            }
            if (priority == null || priority == undefined || priority == "" || priority == 0) {
                this.priorityRequired = true;
            }
            if (user == null || user == undefined || user == "") {
                this.userRequired = true;
            }
            if (this.startDateRequired || this.endDateRequired
                || this.priorityRequired || this.userRequired) {
                return;
            }
            if (startDate > endDate) {
                this.startDateGreater = true;
                return;
            }
            this.Task.startDate = this.taskForm.get('startDate').value;
            this.Task.endDate = this.taskForm.get('endDate').value;
            this.Task.priority = this.taskForm.get('priority').value;
            this.Task.UserName = this.taskForm.get('user').value;
            ;
            this.Task.userId = this.userId;
            this.Task.parentTaskId = this.parentTaskId;
        }
        else {
            this.Task.startDate = null;
            this.Task.endDate = null;
            this.Task.priority = null;
            this.Task.parentTaskId = null;
            this.Task.userId = null;
        }
        this.taskService.saveTask(this.Task).subscribe(function (result) {
            if (result > 0) {
                _this.route.navigate(['/task']);
            }
            else {
                _this.error = "Error while saving the task";
            }
        }, function (error) {
            _this.error = "Error while saving the task";
        });
        return;
    };
    AddtaskComponent.prototype.searchProjectPopup = function () {
        var _this = this;
        $("#showProjectModal").modal('show');
        this.projectService.readAll()
            .subscribe(function (response) {
            console.log(response);
            _this.projectList = response;
        }, function (err) { return console.log('HTTP Error', err); }, function () { return console.log('HTTP request completed.'); });
    };
    AddtaskComponent.prototype.selectProject = function (project) {
        if (project != null) {
            this.taskForm.patchValue({
                Project: project.projectName
            });
            this.projectId = project.projectId;
            this.isProjectSelected = true;
        }
        console.log("selected project id ", this.projectId);
        setTimeout(function () {
            $("#showProjectModal").modal('hide');
        }, 3000);
    };
    AddtaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addtask',
            template: __webpack_require__(/*! ./addtask.component.html */ "./src/app/task/addtask/addtask.component.html"),
            styles: [__webpack_require__(/*! ./addtask.component.css */ "./src/app/task/addtask/addtask.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_service_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"]])
    ], AddtaskComponent);
    return AddtaskComponent;
}());



/***/ }),

/***/ "./src/app/task/viewtask/viewtask.component.css":
/*!******************************************************!*\
  !*** ./src/app/task/viewtask/viewtask.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdmlld3Rhc2svdmlld3Rhc2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/task/viewtask/viewtask.component.html":
/*!*******************************************************!*\
  !*** ./src/app/task/viewtask/viewtask.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  viewtask works!\n</p>\n"

/***/ }),

/***/ "./src/app/task/viewtask/viewtask.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/task/viewtask/viewtask.component.ts ***!
  \*****************************************************/
/*! exports provided: ViewtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskComponent", function() { return ViewtaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewtaskComponent = /** @class */ (function () {
    function ViewtaskComponent() {
    }
    ViewtaskComponent.prototype.ngOnInit = function () {
    };
    ViewtaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewtask',
            template: __webpack_require__(/*! ./viewtask.component.html */ "./src/app/task/viewtask/viewtask.component.html"),
            styles: [__webpack_require__(/*! ./viewtask.component.css */ "./src/app/task/viewtask/viewtask.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewtaskComponent);
    return ViewtaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularCaseStudy\AngularCaseStudy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map