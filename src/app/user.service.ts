import { Injectable } from '@angular/core';
import { UserPasswordResetSendRequest, UserVerifySendRequest } from './user.model';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private readonly basePath = this.apiUrl + '/users';
  
  constructor(
    private http: HttpClient,
  ) { }

  sendVerifyEmail(dto: UserVerifySendRequest): Observable<object> {
    return this.http.post(`${this.basePath}/verify/send`, dto);
  }

  sendPasswordResetEmail(dto: UserPasswordResetSendRequest): Observable<object> {
    return this.http.post(`${this.basePath}/password/reset/send`, dto);
  }

}
