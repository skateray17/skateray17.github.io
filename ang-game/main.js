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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-greed></app-greed>\n<app-footer></app-footer>"

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
        this.title = 'app';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_greed_greed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/greed/greed.component */ "./src/app/components/greed/greed.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_greed_greed_component__WEBPACK_IMPORTED_MODULE_3__["GreedComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  How to play: ...\n</p>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/greed/greed.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/greed/greed.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-greed {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n  align-content: space-around;\r\n  position: relative;\r\n  padding: 15px;\r\n  cursor: default;\r\n  background: #bbaaa0;\r\n  border-radius: 6px;\r\n  width: 400px;\r\n  height: 400px;\r\n  margin: auto;\r\n  \r\n}\r\n\r\n.greed-container {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n  align-content: space-around;\r\n  height: 100%;\r\n}\r\n\r\n.game-greed-tile-container {\r\n  height: 81.25px;\r\n  width: 81.25px;\r\n  position: relative;\r\n  background: rgba(238,228,218,.35);\r\n}\r\n\r\n.game-greed-tile-container::after {\r\n  display: table-cell;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  font-size: 25px;\r\n  line-height: 81.25px;\r\n  text-align: center;\r\n  color: #ffffff;\r\n}\r\n\r\n.num2::after {\r\n  background: #EEE4DA;\r\n  content: \"2\";\r\n}\r\n\r\n.num4::after {\r\n  background: #EAE0C8;\r\n  content: \"4\";\r\n}\r\n\r\n.num8::after {\r\n  background: #F59563;\r\n  content: \"8\";\r\n}\r\n\r\n.num16::after {\r\n  background: #39f;\r\n  content: \"16\";\r\n}\r\n\r\n.num32::after {\r\n  background: #ffa333;\r\n  content: \"32\";\r\n}\r\n\r\n.num64::after {\r\n  background: #cef030;\r\n  content: \"64\";\r\n}\r\n\r\n.num128::after {\r\n  background: #E8D8CE;\r\n  content: \"128\";\r\n}\r\n\r\n.num256::after {\r\n  background: #990303;\r\n  content: \"256\";\r\n}\r\n\r\n.num512::after {\r\n  background: #6BA5DE;\r\n  content: \"512\";\r\n}\r\n\r\n.num1024::after {\r\n  background: #DCAD60;\r\n  content: \"1024\";\r\n}\r\n\r\n.num2048::after {\r\n  background: #B60022;\r\n  content: \"2048\";\r\n}"

/***/ }),

/***/ "./src/app/components/greed/greed.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/greed/greed.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"game-{{ ngModel.gameSize }}\">\n    <div class=\"grid-container\">\n      <div class=\"grid-cell\" ng-repeat=\"cell in ngModel.grid track by $index\"></div>\n    </div>\n  \n    <div class=\"tile-container\">\n      <div tile \n            ng-model='tile'\n            ng-repeat='tile in ngModel.tiles track by $id(tile.id || $index)'></div>\n    </div>\n  </div> -->\n<div class=\"game-greed\" (keyup)=\"onKeyPress($event)\">\n  <div class=\"greed-container\">\n    <div class=\"game-greed-tile-container num{{greed[0][0]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[0][1]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[0][2]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[0][3]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[1][0]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[1][1]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[1][2]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[1][3]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[2][0]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[2][1]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[2][2]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[2][3]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[3][0]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[3][1]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[3][2]}}\"></div>\n    <div class=\"game-greed-tile-container num{{greed[3][3]}}\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/greed/greed.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/greed/greed.component.ts ***!
  \*****************************************************/
/*! exports provided: GreedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreedComponent", function() { return GreedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GreedComponent = /** @class */ (function () {
    function GreedComponent() {
        this.init();
        window.addEventListener('keydown', this.onKeyPress.bind(this));
    }
    GreedComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elem = document.querySelector('app-greed');
        var manager = new hammerjs__WEBPACK_IMPORTED_MODULE_1___default.a.Manager(elem);
        var swipe = new hammerjs__WEBPACK_IMPORTED_MODULE_1___default.a.Swipe();
        manager.add(swipe);
        manager.on('swipe', function (e) {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                if (e.deltaX > 0) {
                    _this.onKeyPress({ keyCode: 68 });
                    // this.rightMove();
                }
                else {
                    // this.leftMove();
                    _this.onKeyPress({ keyCode: 65 });
                }
            }
            else {
                if (e.deltaY > 0) {
                    // this.downMove();
                    _this.onKeyPress({ keyCode: 83 });
                }
                else {
                    // this.upMove();
                    _this.onKeyPress({ keyCode: 87 });
                }
            }
        });
    };
    GreedComponent.prototype.init = function () {
        this.greed = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        this.placeNumber();
        this.placeNumber();
        console.log(3);
    };
    GreedComponent.prototype.placeNumber = function () {
        var places = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (!this.greed[i][j]) {
                    places.push([i, j]);
                }
            }
        }
        var rand = Math.floor(Math.random() * places.length);
        var num = Math.random();
        this.greed[places[rand][0]][places[rand][1]] = num < 0.2 ? 4 : 2;
        this.checkField();
    };
    GreedComponent.prototype.gameOver = function () {
        console.log(2);
        setTimeout(this.init.bind(this), 1000);
    };
    GreedComponent.prototype.leftMove = function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                for (var k = j + 1; k < 4; k++) {
                    if (!this.greed[i][k]) {
                        continue;
                    }
                    if (this.greed[i][k] === this.greed[i][j]) {
                        this.greed[i][j] *= 2;
                        this.greed[i][k] = 0;
                    }
                    break;
                }
            }
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 1; j < 4; j++) {
                if (this.greed[i][j - 1] === 0) {
                    for (var k = j - 1; k >= 0 && !this.greed[i][k]; k--) {
                        this.greed[i][k] = this.greed[i][k + 1];
                        this.greed[i][k + 1] = 0;
                    }
                }
            }
        }
    };
    GreedComponent.prototype.rightMove = function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 3; j > 0; j--) {
                for (var k = j - 1; k >= 0; k--) {
                    if (!this.greed[i][k]) {
                        continue;
                    }
                    if (this.greed[i][k] === this.greed[i][j]) {
                        this.greed[i][j] *= 2;
                        this.greed[i][k] = 0;
                    }
                    break;
                }
            }
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 2; j >= 0; j--) {
                if (this.greed[i][j + 1] === 0) {
                    for (var k = j + 1; k < 4 && !this.greed[i][k]; k++) {
                        this.greed[i][k] = this.greed[i][k - 1];
                        this.greed[i][k - 1] = 0;
                    }
                }
            }
        }
    };
    GreedComponent.prototype.upMove = function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                for (var k = j + 1; k < 4; k++) {
                    if (!this.greed[k][i]) {
                        continue;
                    }
                    if (this.greed[k][i] === this.greed[j][i]) {
                        this.greed[j][i] *= 2;
                        this.greed[k][i] = 0;
                    }
                    break;
                }
            }
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 1; j < 4; j++) {
                if (this.greed[j - 1][i] === 0) {
                    for (var k = j - 1; k >= 0 && !this.greed[k][i]; k--) {
                        this.greed[k][i] = this.greed[k + 1][i];
                        this.greed[k + 1][i] = 0;
                    }
                }
            }
        }
    };
    GreedComponent.prototype.downMove = function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 3; j > 0; j--) {
                for (var k = j - 1; k >= 0; k--) {
                    if (!this.greed[k][i]) {
                        continue;
                    }
                    if (this.greed[k][i] === this.greed[j][i]) {
                        this.greed[j][i] *= 2;
                        this.greed[k][i] = 0;
                    }
                    break;
                }
            }
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 2; j >= 0; j--) {
                if (this.greed[j + 1][i] === 0) {
                    for (var k = j + 1; k < 4 && !this.greed[k][i]; k++) {
                        this.greed[k][i] = this.greed[k - 1][i];
                        this.greed[k - 1][i] = 0;
                    }
                }
            }
        }
    };
    GreedComponent.prototype.checkMoveRight = function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.greed[i][j] && (!this.greed[i][j + 1] || (this.greed[i][j] === this.greed[i][j + 1]))) {
                    return true;
                }
            }
        }
    };
    GreedComponent.prototype.checkMoveLeft = function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 1; j < 4; j++) {
                if (this.greed[i][j] && (!this.greed[i][j - 1] || (this.greed[i][j] === this.greed[i][j - 1]))) {
                    return true;
                }
            }
        }
        return false;
    };
    GreedComponent.prototype.checkMoveUp = function () {
        for (var i = 1; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.greed[i][j] && (!this.greed[i - 1][j] || (this.greed[i][j] === this.greed[i - 1][j]))) {
                    return true;
                }
            }
        }
        return false;
    };
    GreedComponent.prototype.checkMoveDown = function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.greed[i][j] && (!this.greed[i + 1][j] || (this.greed[i][j] === this.greed[i + 1][j]))) {
                    return true;
                }
            }
        }
    };
    GreedComponent.prototype.checkField = function () {
        if (!(this.checkMoveDown() || this.checkMoveLeft() || this.checkMoveRight() || this.checkMoveUp())) {
            console.log(1);
            return this.gameOver();
        }
    };
    GreedComponent.prototype.checkWin = function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.greed[i][j] === 2048) {
                    this.gameOver(); // TODO win
                }
            }
        }
    };
    GreedComponent.prototype.onKeyPress = function (event) {
        switch (event.keyCode) {
            case 65:
                if (this.checkMoveLeft()) {
                    this.leftMove();
                    this.checkWin();
                    return this.placeNumber();
                }
                break;
            case 83:
                if (this.checkMoveDown()) {
                    this.downMove();
                    this.checkWin();
                    return this.placeNumber();
                }
                break;
            case 68:
                if (this.checkMoveRight()) {
                    this.rightMove();
                    this.checkWin();
                    return this.placeNumber();
                }
                break;
            case 87:
                if (this.checkMoveUp()) {
                    this.upMove();
                    this.checkWin();
                    return this.placeNumber();
                }
                break;
        }
    };
    GreedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-greed',
            template: __webpack_require__(/*! ./greed.component.html */ "./src/app/components/greed/greed.component.html"),
            styles: [__webpack_require__(/*! ./greed.component.css */ "./src/app/components/greed/greed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GreedComponent);
    return GreedComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  margin-top: 100px;\r\n  display: flex;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n.title {\r\n  font-size: 80px;\r\n  margin: 0;\r\n}\r\n\r\n.label {\r\n  font-size: 20px;\r\n  align-self: flex-end;\r\n  -webkit-column-break-after: auto;\r\n          break-after: auto;\r\n}\r\n\r\n.scores-container {\r\n  display: flex;\r\n  width: 250px;\r\n  min-height: 60px;\r\n  text-align: right;\r\n  float: right;\r\n  margin: 0 0 0 auto;\r\n}\r\n\r\n.score-container::after {\r\n  content: \"SCORE\";\r\n}\r\n\r\n.best-container::after {\r\n  content: \"BEST\";\r\n}\r\n\r\n.best-container,\r\n.score-container {\r\n  max-height: 60px;\r\n  width: 50%;\r\n  position: relative;\r\n  display: inline-block;\r\n  background: #bbada0;\r\n  font-size: 25px;\r\n  padding-top: 20px;\r\n  padding-bottom: 15px;\r\n  height: 25px;\r\n  line-height: 47px;\r\n  font-weight: 700;\r\n  border-radius: 3px;\r\n  color: #fff;\r\n  margin-top: 8px;\r\n  text-align: center;\r\n}\r\n\r\n.best-container::after, \r\n.score-container::after {\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 10px;\r\n  left: 0;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  line-height: 13px;\r\n  text-align: center;\r\n  color: #eee4da;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.best-container {\r\n  margin-left: 5px;\r\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <h1 class=\"title\">\n    2048\n  </h1>\n  <p class=\"label\">\n    &nbsp;by skat\n  </p>\n  <div class=\"scores-container\">\n    <div class=\"score-container\">\n      {{currentScore}}\n    </div>\n    <div class=\"best-container\">\n      {{bestScore}}\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
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
        this.currentScore = 0;
        this.bestScore = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alkavalchuk\projs\ang-game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map