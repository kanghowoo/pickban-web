import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  private apiUrl = environment.apiUrl + "/users/verify"

  constructor(private http: HttpClient) {}

  verifyEmailToken(email: string, token: string): Observable<any> {
    const payload = { email, token };
    return this.http.post(this.apiUrl, payload);
  }
}
