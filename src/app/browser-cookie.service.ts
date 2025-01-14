import { Injectable } from '@angular/core';
import { CookieService as NgxCookieService } from 'ngx-cookie-service'
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class BrowserCookieService implements CookieService {
  constructor(private ngxCookieService: NgxCookieService) {}

  check(name: string): boolean {
    return this.ngxCookieService.check(name)
  }

  get(name: string): string {
    return this.ngxCookieService.get(name)
  }

  set(
    name: string,
    value: string,
    options?: {
      expires?: number | Date | undefined
      path?: string | undefined
      secure?: boolean | undefined
    }
  ): void {
    this.ngxCookieService.set(name, value, options)
  }

  delete(name: string): void {
    this.ngxCookieService.delete(name, '/')
  }
}
