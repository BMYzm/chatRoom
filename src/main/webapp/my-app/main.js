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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Routes = [ //路由匹配采用优先策略，注意顺序
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule(route) {
        this.route = route;
    }
    AppRoutingModule.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.route.params);
        this.route.params.subscribe(function (data) { return _this.id = data.id; });
    };
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(Routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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

module.exports = "<app-chat></app-chat>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '英雄指南';
        this.msg = "父组件的值";
    }
    AppComponent.prototype.run1 = function () {
        this.header.getData1();
    };
    AppComponent.prototype.run = function (msginfo) {
        alert(msginfo);
    };
    AppComponent.prototype.getData = function (e) {
        alert(e);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('test'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "header", void 0);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["JsonpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_11__["ChatComponent"],
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["en_US"] }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".talk_con{\r\n    width:600px;\r\n    height:500px;\r\n    border:1px solid #666;\r\n    margin:50px auto 0;\r\n    background:#f9f9f9;\r\n}\r\n.talk_show{\r\n    width:580px;\r\n    height:420px;\r\n    border:1px solid #666;\r\n    background:#fff;\r\n    margin:10px auto 0;\r\n    overflow:auto;\r\n}\r\n.talk_input{\r\n    width:580px;\r\n    margin:10px auto 0;\r\n}\r\n.whotalk{\r\n    width:80px;\r\n    height:30px;\r\n    float:left;\r\n    outline:none;\r\n}\r\n.talk_word{\r\n    width:420px;\r\n    height:26px;\r\n    padding:0px;\r\n    float:left;\r\n    margin-left:10px;\r\n    outline:none;\r\n    text-indent:10px;\r\n}\r\n.talk_sub{\r\n    width:56px;\r\n    height:30px;\r\n    float:left;\r\n    margin-left:10px;\r\n}\r\n.atalk{\r\n   margin:10px; \r\n}\r\n.atalk span{\r\n    display:inline-block;\r\n    background:#0181cc;\r\n    border-radius:10px;\r\n    color:#fff;\r\n    padding:5px 10px;\r\n}\r\n.btalk{\r\n    margin:10px;\r\n    text-align:right;\r\n}\r\n.btalk span{\r\n    display:inline-block;\r\n    background:#ef8201;\r\n    border-radius:10px;\r\n    color:#fff;\r\n    padding:5px 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0NBQ3BCO0FBQ0Q7R0FDRyxZQUFZO0NBQ2Q7QUFDRDtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLFlBQVk7SUFDWixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWxrX2NvbntcclxuICAgIHdpZHRoOjYwMHB4O1xyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjNjY2O1xyXG4gICAgbWFyZ2luOjUwcHggYXV0byAwO1xyXG4gICAgYmFja2dyb3VuZDojZjlmOWY5O1xyXG59XHJcbi50YWxrX3Nob3d7XHJcbiAgICB3aWR0aDo1ODBweDtcclxuICAgIGhlaWdodDo0MjBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzY2NjtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIG1hcmdpbjoxMHB4IGF1dG8gMDtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbn1cclxuLnRhbGtfaW5wdXR7XHJcbiAgICB3aWR0aDo1ODBweDtcclxuICAgIG1hcmdpbjoxMHB4IGF1dG8gMDtcclxufVxyXG4ud2hvdGFsa3tcclxuICAgIHdpZHRoOjgwcHg7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuLnRhbGtfd29yZHtcclxuICAgIHdpZHRoOjQyMHB4O1xyXG4gICAgaGVpZ2h0OjI2cHg7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgdGV4dC1pbmRlbnQ6MTBweDtcclxufSAgICAgICAgXHJcbi50YWxrX3N1YntcclxuICAgIHdpZHRoOjU2cHg7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG59XHJcbi5hdGFsa3tcclxuICAgbWFyZ2luOjEwcHg7IFxyXG59XHJcbi5hdGFsayBzcGFue1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiMwMTgxY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgcGFkZGluZzo1cHggMTBweDtcclxufVxyXG4uYnRhbGt7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuLmJ0YWxrIHNwYW57XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6I2VmODIwMTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBwYWRkaW5nOjVweCAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"talk_con\">\n    <div class=\"talk_show\" id=\"scrollBody\">\n        <div *ngFor=\"let item of msgs; let i = index\">\n            <div *ngIf=\"item.id!=id\" class=\"atalk\"><span id=\"asay\">{{item.message}}</span></div>\n            <div *ngIf=\"item.id==id\" class=\"btalk\"><span id=\"bsay\">{{item.message}}</span></div>\n        </div>\n        <div id=\"bottom\" style=\"height:0px; overflow:hidden; margin-top:45px;\"></div>\n    </div>\n   \n    <div class=\"talk_input\">\n        <input type=\"text\" (keyup.enter)=\"send()\" [(ngModel)]=\"message\" class=\"talk_word\" id=\"talkwords\">\n        <input type=\"button\"  (click)=\"send()\" value=\"发送\" class=\"talk_sub\" id=\"talksub\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent, Msg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Msg", function() { return Msg; });
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

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.msgs = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.id = this.guid();
        console.log(this.id);
        this.socket = new WebSocket("ws://1.1.10.135:8080/chatRoom/websocket?id=" + this.id);
        this.openWebSocket();
    };
    ChatComponent.prototype.openWebSocket = function () {
        var _this = this;
        try {
            this.socket.onopen = function () {
                _this.doSocketOpen(_this.socket.readyState);
            };
            this.socket.onmessage = function (msg) {
                _this.doSocketMessage(msg);
            };
            this.socket.onclose = function (event) {
                _this.doSocketClose(event);
            };
        }
        catch (ex) {
            console.log(ex);
        }
    };
    ChatComponent.prototype.doSocketOpen = function (readyState) {
        if (readyState != 1)
            return;
        this.socket.send('websocket');
    };
    ChatComponent.prototype.doSocketMessage = function (message) {
        console.log(message);
        var msg = JSON.parse(message.data);
        console.log(msg);
        this.msgs.push(msg);
        this.bottom();
    };
    ChatComponent.prototype.doSocketClose = function (event) {
        console.log("WebSocket连线中断！");
    };
    ChatComponent.prototype.send = function () {
        if (this.message == '') {
            return;
        }
        this.socket.send(this.message);
        this.message = '';
    };
    ChatComponent.prototype.S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    ChatComponent.prototype.guid = function () {
        return (this.S4() + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4());
    };
    ChatComponent.prototype.bottom = function () {
        // console.log(document.getElementById('bottom').offsetTop);
        // let top = document.getElementById('scrollBody').scrollTop = document.getElementById('bottom').offsetTop+50;
        // console.log(top);
        document.getElementById('bottom').scrollIntoView();
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());

var Msg = /** @class */ (function () {
    function Msg() {
    }
    return Msg;
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
    production: true
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map