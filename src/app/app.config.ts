import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { authInterceptorProvider } from './auth.interceptor';
import { COOKIE } from './cookie.service';
import { BrowserCookieService } from './browser-cookie.service';
import { clause_routes } from './clause/clause.routes';
import { board_routes } from './board/board.routes';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const APP_ROUTES: Routes = [
  ...routes,
  ...clause_routes,
  ...board_routes,
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTES),
    provideAnimationsAsync('noop'),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    authInterceptorProvider,
    importProvidersFrom(
      SweetAlert2Module.forRoot(),
      CKEditorModule,
    ),
    {
      provide: COOKIE,
      useClass: BrowserCookieService,
    },
  ]

};



