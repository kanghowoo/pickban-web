import { Inject, Injectable } from '@angular/core';
import { COOKIE, CookieService } from './cookie.service';
import { Base64Service } from './base64.service';
import { addSeconds, isAfter, fromUnixTime } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private static readonly AUTH_TOKEN_KEY = 'Authorization';
  private static readonly REFRESH_TOKEN_KEY = 'refreshToken';
  private static readonly TOKEN_TYPE = 'Bearer';
  private authToken: string | null = null;
  private refreshToken: string | null = null;

  constructor(
    @Inject(COOKIE) private cookieService: CookieService,
    private base64Service: Base64Service
  ) { }

  getAuthToken(): string | null {
    if (this.authToken == null) {
      const token = this.cookieService.get(TokenService.AUTH_TOKEN_KEY)
      if (token.length > 0) {
        this.authToken = token
      }
    }

    return this.authToken
  }

  setAuthToken(token: string): void {
    this.authToken = token
    this.cookieService.set(TokenService.AUTH_TOKEN_KEY, token, {
      expires: 180,
      secure: false,
      path: '/'
    })
  }

  getRefreshToken(): string | null {
    if (this.refreshToken == null) {
      const token = this.cookieService.get(TokenService.REFRESH_TOKEN_KEY)
      if (token.length > 0) {
        this.refreshToken = token
      }
    }

    return this.refreshToken
  }

  setRefreshToken(token: string): void {
    this.refreshToken = token
    this.cookieService.set(TokenService.REFRESH_TOKEN_KEY, token, {
      expires: 365,
      secure: false,
      path: '/'
    })
  }

  removeTokens(): void {
    this.cookieService.delete(TokenService.AUTH_TOKEN_KEY)
    this.cookieService.delete(TokenService.REFRESH_TOKEN_KEY)
    this.authToken = null
    this.refreshToken = null
  }

  removeTypePrefix(token: string): string {
    const tokenType = TokenService.TOKEN_TYPE

    if (token.startsWith(tokenType)) {
      return token.substr(tokenType.length).trim()
    }

    return token
  }

  prependTypePrefix(token: string): string {
    const tokenType = TokenService.TOKEN_TYPE

    if (!token.startsWith(tokenType)) {
      return `${tokenType} ${token}`
    }

    return token
  }

  needRefresh(): boolean {
    const authToken = this.getAuthToken()
    if (authToken === null) {
      return false
    }

    let refreshable = true
    try {
      const exp = this.obtainExpiredFromToken(authToken)
      refreshable = isAfter(addSeconds(new Date(), 3), fromUnixTime(exp));
    } catch (err) {
      console.error(err)
      return true
    }

    return refreshable
  }

  private obtainExpiredFromToken(jwt: string): number {
    let payload: any = jwt.split('.')[1]
    payload = JSON.parse(this.base64Service.decode(payload))
    return payload.exp
  }  
}
