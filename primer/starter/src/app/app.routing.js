import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
export var AppRoutes = [{
        path: '',
        component: AdminLayoutComponent,
        children: [{
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }]
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [{
                path: '',
                loadChildren: './session/session.module#SessionModule'
            }]
    }, {
        path: '**',
        redirectTo: '404'
    }];
//# sourceMappingURL=app.routing.js.map