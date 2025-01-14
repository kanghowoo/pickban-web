import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { SimpleUser, User } from './user.model';
import { LoginRequest } from './login/schema/login-request.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly AUTH_TOKEN_HEADER_NAME = 'Authorization';
  private static readonly REFRESH_TOKEN_HEADER_NAME = 'refreshToken';
  
  private apiUrl = environment.apiUrl;

  private userSubject = new BehaviorSubject<User | null>(null);
  userSubject$ = this.userSubject.asObservable();

  private loggedIn = false;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {}

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUser(): Observable<User | null> {
    const token = this.tokenService.getAuthToken();
    const userInfoUrl = this.apiUrl + "/users/me"
    if (token) {
      this.http.get<User>(userInfoUrl).subscribe(user => {
        this.userSubject.next(user);
      })
    } else {
      this.userSubject.next(null);
    }

    return this.userSubject$;
    
  }

  login(data: LoginRequest): Observable<HttpResponse<User>> {
    const loginUrl = this.apiUrl + "/auth/login";
    return this.http.post<User>(loginUrl, data, {
      observe: 'response',
    })
      .pipe(
        tap((res) => {
          this.saveTokens(res);
          const user = res.body;
          this.setUser(user);
        })
      )
  }

  logout(): void {
    this.tokenService.removeTokens();
    this.loggedIn = false;
    this.setUser(null);
  }

  signup(formData: any): Observable<any> {
    const signupUrl = this.apiUrl + "/users";
    return this.http.post(signupUrl, formData);
  }

  setUser(user: User | null) {
    this.loggedIn = user !== null;
    this.userSubject.next(user);
  }

  refreshTokenFromServer(): Observable<boolean> {
    const token = this.tokenService.getAuthToken()
    const refreshToken = this.tokenService.getRefreshToken()

    if (token === null || refreshToken === null) {
      return throwError(new Error('no token in storage'))
    }

    return this.http.post<HttpResponse<object>>(
      this.apiUrl + '/auth/token',
      { token, refreshToken },
      { withCredentials: true}
    ).pipe(tap(this.renewToken.bind(this)), map(() => true))    
  }

  private renewToken(res: HttpResponse<object>): void {
    const authTokenWithType = res.headers.get('Authorization')
    if (authTokenWithType) {
      const authToken = this.tokenService.removeTypePrefix(authTokenWithType)
      this.tokenService.setAuthToken(authToken)
    }    
  }

  private saveTokens(res: HttpResponse<object>): void {
    const authTokenWithType = res.headers.get(AuthService.AUTH_TOKEN_HEADER_NAME)
    const refreshToken = res.headers.get(AuthService.REFRESH_TOKEN_HEADER_NAME)

    if (authTokenWithType && refreshToken) {
      const authToken = this.tokenService.removeTypePrefix(authTokenWithType);
      this.tokenService.setAuthToken(authToken);
      this.tokenService.setRefreshToken(refreshToken);
    }
  }    

}
