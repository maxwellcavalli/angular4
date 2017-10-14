var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItems } from '../../shared/menu-items/menu-items';
import 'rxjs/add/operator/filter';
import { TranslateService } from '@ngx-translate/core';
import * as Ps from 'perfect-scrollbar';
var SMALL_WIDTH_BREAKPOINT = 960;
var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(router, menuItems, translate, zone) {
        var _this = this;
        this.router = router;
        this.menuItems = menuItems;
        this.translate = translate;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.today = Date.now();
        this.showSettings = false;
        this.currentLang = 'en';
        this.dir = 'ltr';
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        this.mediaMatcher.addListener(function (mql) { return zone.run(function () {
            _this.mediaMatcher = mql;
        }); });
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemSidebar = document.querySelector('.app-inner > .sidebar-panel');
        var elemContent = document.querySelector('.app-inner > .mat-drawer-content');
        if (this.mediaMatcher.matches && !this.isMac() && !this.compactSidebar) {
            Ps.initialize(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
            Ps.initialize(elemContent, { wheelSpeed: 2, suppressScrollX: true });
        }
        this.url = this.router.url;
        this._router = this.router.events.filter(function (event) { return event instanceof NavigationEnd; }).subscribe(function (event) {
            document.querySelector('.app-inner .mat-drawer-content').scrollTop = 0;
            _this.url = event.url;
            _this.runOnRouteChange();
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        this._router.unsubscribe();
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (this.isOver()) {
            this.sidemenu.close();
        }
        if (this.mediaMatcher.matches && !this.isMac() && !this.compactSidebar) {
            var elemContent = document.querySelector('.app-inner > .mat-drawer-content');
            Ps.update(elemContent);
        }
    };
    AdminLayoutComponent.prototype.isOver = function () {
        if (this.url === '/apps/messages' ||
            this.url === '/apps/calendar' ||
            this.url === '/apps/media' ||
            this.url === '/maps/leaflet' ||
            this.url === '/taskboard') {
            return true;
        }
        else {
            return this.mediaMatcher.matches;
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.prototype.menuMouseOver = function () {
        if (this.mediaMatcher.matches && this.collapseSidebar) {
            this.sidemenu.mode = 'over';
        }
    };
    AdminLayoutComponent.prototype.menuMouseOut = function () {
        if (this.mediaMatcher.matches && this.collapseSidebar) {
            this.sidemenu.mode = 'side';
        }
    };
    AdminLayoutComponent.prototype.updatePS = function () {
        if (this.mediaMatcher.matches && !this.isMac() && !this.compactSidebar) {
            var elemSidebar_1 = document.querySelector('.app-inner > .sidebar-panel');
            setTimeout(function () { Ps.update(elemSidebar_1); }, 350);
        }
    };
    AdminLayoutComponent.prototype.addMenuItem = function () {
        this.menuItems.add({
            state: 'menu',
            name: 'MENU',
            type: 'sub',
            icon: 'trending_flat',
            children: [
                { state: 'menu', name: 'MENU' },
                { state: 'timeline', name: 'MENU' }
            ]
        });
    };
    return AdminLayoutComponent;
}());
__decorate([
    ViewChild('sidemenu'),
    __metadata("design:type", Object)
], AdminLayoutComponent.prototype, "sidemenu", void 0);
AdminLayoutComponent = __decorate([
    Component({
        selector: 'app-layout',
        templateUrl: './admin-layout.component.html'
    }),
    __metadata("design:paramtypes", [Router, MenuItems,
        TranslateService, NgZone])
], AdminLayoutComponent);
export { AdminLayoutComponent };
//# sourceMappingURL=admin-layout.component.js.map