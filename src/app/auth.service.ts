import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.example.com/auth/signup';

  constructor(private http: HttpClient) {}

  login(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
