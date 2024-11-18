import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { SimpleUser } from './user.model';
import { LoginRequest } from './login/schema/login-request.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly AUTH_TOKEN_HEADER_NAME = 'Authorization';
  private static readonly REFRESH_TOKEN_HEADER_NAME = 'refreshToken';
  
  private apiUrl = environment.apiUrl;

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private simpleUserSubject = new BehaviorSubject<SimpleUser | null>(null);

  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  simpleUserSubject$ = this.simpleUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {}

  login(formData: LoginRequest): Observable<any> {
    const loginUrl = this.apiUrl + "/auth/login";
    return this.http.post(loginUrl, formData)
      .pipe(
        tap((res) => {
          
        })
      )
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    this.setSimpleUser(null);
  }

  signup(formData: any): Observable<any> {
    const signupUrl = this.apiUrl + "/users";
    return this.http.post(signupUrl, formData);
  }

  passwordForget(formData: any): Observable<any> {
    const passwordForgetUrl = this.apiUrl + "/users/password/reset/send"
    return this.http.post(passwordForgetUrl, formData);
  }

  setSimpleUser(user: SimpleUser | null) {
    this.isLoggedInSubject.next(user !== null);
    this.simpleUserSubject.next(user);
  }

  private saveTokens(res: HttpResponse<object>): void {
    const authTokenWithType = res.headers.get(AuthService.AUTH_TOKEN_HEADER_NAME)
    const refreshToken = res.headers.get(AuthService.REFRESH_TOKEN_HEADER_NAME)

    if (authTokenWithType && refreshToken) {
      const authToken = this.tokenService.removeTypePrefix(authTokenWithType)
      this.tokenService.setAuthToken(authToken)
      this.tokenService.setRefreshToken(refreshToken)
    }
  }    

}
