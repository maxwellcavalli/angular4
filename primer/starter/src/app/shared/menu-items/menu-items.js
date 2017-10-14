var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var MENUITEMS = [
    {
        state: '/',
        name: 'HOME',
        type: 'link',
        icon: 'explore'
    },
    {
        state: 'http://primer.nyasha.me/docs',
        name: 'DOCS',
        type: 'extTabLink',
        icon: 'local_library'
    }
];
var MenuItems = (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItems.prototype.add = function (menu) {
        MENUITEMS.push(menu);
    };
    return MenuItems;
}());
MenuItems = __decorate([
    Injectable()
], MenuItems);
export { MenuItems };
//# sourceMappingURL=menu-items.js.map