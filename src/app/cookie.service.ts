import { InjectionToken } from "@angular/core";

export interface CookieService {
  check(name: string): boolean;
  get(name: string): string;
  set(
    name: string,
    value: string,
    options?: {
      expires?: number | Date
      path?: string
      secure?: boolean
    }
  ): void;
  delete(name: string): void;
}

export const COOKIE = new InjectionToken<CookieService>('cookieService');