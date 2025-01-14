import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { ErrorCode } from './error/error-codes';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Access Token 만료 체크
    if (this.tokenService.needRefresh()) {
      return this.handleTokenRefresh(req, next);
    }

    // Access Token이 유효한 경우 요청에 추가
    const accessToken = this.tokenService.getAuthToken();
    const modifiedReq = accessToken ? this.addToken(req, accessToken) : req;
    return next.handle(modifiedReq).pipe(
      catchError((err: HttpErrorResponse) => {
        const body = err.error;
        if (body.code === ErrorCode.TOKEN_EXPIRED) {
          return this.handleTokenRefresh(req, next);
        }
        return throwError(() => err);
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handleTokenRefresh(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      return this.authService.refreshTokenFromServer().pipe(
        switchMap(() => {
          this.isRefreshing = false;
          return next.handle(req);
        }),
        catchError((error) => {
          this.isRefreshing = false;
          this.authService.logout();
          return throwError(() => error);
        })
      );
    } else {
      return next.handle(req); // 이미 Refresh 중인 경우 대기
    }
  }
}

export const authInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useFactory: (injector: Injector) => {
    const authService = injector.get(AuthService);
    const tokenService = injector.get(TokenService);
    return new AuthInterceptor(authService, tokenService);
  },
  deps: [Injector],
  multi: true,
};
