var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AgmCoreModule } from '@agm/core';
import { MatSidenavModule, MatCardModule, MatMenuModule, MatCheckboxModule, MatIconModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatListModule, MatSlideToggleModule, MatSelectModule, MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BidiModule } from '@angular/cdk/bidi';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            AdminLayoutComponent,
            AuthLayoutComponent
        ],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            SharedModule,
            RouterModule.forRoot(AppRoutes),
            FormsModule,
            HttpClientModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [HttpClient]
                }
            }),
            MatSidenavModule,
            MatCardModule,
            MatMenuModule,
            MatCheckboxModule,
            MatIconModule,
            MatButtonModule,
            MatToolbarModule,
            MatTabsModule,
            MatListModule,
            MatSlideToggleModule,
            MatSelectModule,
            MatProgressBarModule,
            FlexLayoutModule,
            BidiModule,
            AgmCoreModule.forRoot({ apiKey: 'YOURAPIKEY' })
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map