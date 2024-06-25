import 'zone.js';

import { NEW_PATH, ROUTE_PARAM_ID, ROUTE_PATH } from './constant';
import { RouterModule, Routes, provideRouter } from '@angular/router';

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const ROUTES: Routes = [
	{
		path: `${ROUTE_PATH.ORDER}/${NEW_PATH}`,
		loadComponent: () => import('./feature/order/pages/order-new-page/order-new-page.component').then((c) => c.OrderNewPageComponent),
	},
	{
		path: `${ROUTE_PATH.ORDER}/:${ROUTE_PARAM_ID.ORDER_ID}`,
		loadComponent: () => import('./feature/order/pages/order-detail-page/order-detail-page.component').then((c) => c.OrderDetailPageComponent),
	},
	{
		path: `${ROUTE_PATH.ORDER}`,
		loadComponent: () => import('./feature/order/pages/order-list-page/order-list-page.component').then((c) => c.OrderListPageComponent),
	},
	{
		path: '',
		redirectTo: `/${ROUTE_PATH.ORDER}`,
		pathMatch:'full'
	},
];

@Component({
	selector: 'app-root',
	standalone: true,
	template: `<router-outlet></router-outlet> `,
	imports:[RouterModule]
})
export class AppComponent {
	name = 'Angular';
}

bootstrapApplication(AppComponent, {
	providers: [provideAnimationsAsync(), provideRouter(ROUTES)],
});
