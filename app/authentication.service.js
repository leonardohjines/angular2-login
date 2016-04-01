System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var User, users, AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            User = (function () {
                function User(email, password) {
                    this.email = email;
                    this.password = password;
                }
                return User;
            }());
            exports_1("User", User);
            users = [
                new User('admin@admin.com', 'adm9'),
                new User('user1@gmail.com', 'a23')
            ];
            AuthenticationService = (function () {
                function AuthenticationService(_router) {
                    this._router = _router;
                }
                AuthenticationService.prototype.logout = function () {
                    localStorage.removeItem("user");
                    this._router.navigate(['Login']);
                };
                AuthenticationService.prototype.login = function (user) {
                    var authenticatedUser = users.find(function (u) { return u.email === user.email; });
                    if (authenticatedUser) {
                        localStorage.setItem("user", authenticatedUser);
                        this._router.navigate(['Home']);
                        return true;
                    }
                    return false;
                };
                AuthenticationService.prototype.checkCredentials = function () {
                    if (localStorage.getItem("user") === null) {
                        this._router.navigate(['Login']);
                    }
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});
//# sourceMappingURL=authentication.service.js.map