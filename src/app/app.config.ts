import { ApplicationConfig, importProvidersFrom, Injector } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { authInterceptorProvider } from './auth.interceptor';
import { COOKIE } from './cookie.service';
import { BrowserCookieService } from './browser-cookie.service';
import { clause_routes } from './clause/clause.routes';

const APP_ROUTES: Routes = [
  ...routes,
  ...clause_routes,
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTES),
    provideAnimationsAsync('noop'),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([])),
    authInterceptorProvider,
    importProvidersFrom(SweetAlert2Module.forRoot()),
    {
      provide: COOKIE,
      useClass: BrowserCookieService,
    },
  ]

};



