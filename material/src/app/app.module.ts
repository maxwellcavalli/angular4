import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { TemplateComponent } from './layout/template/template.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

const routes: Routes = [
	{
		path: '',
		redirectTo: '/app/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'app',
		component: TemplateComponent,
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent,
			},
			{
				path: 'modules',
				loadChildren: './modules/modules.module#ModulesModule'
			}
		]
	},

	{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
	declarations: [
		AppComponent,
		TemplateComponent,
		PageNotFoundComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule,

		RouterModule.forRoot(
			routes,
			{ enableTracing: true} // <-- debugging purposes only
		),

		HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
