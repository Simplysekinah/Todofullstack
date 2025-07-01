import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { forgetPassword, Login, UserInterface } from '../../Interface/auth';
import { api } from '../../Api/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  Signup(UserInterface: UserInterface): Observable<any> {
    return this.http.post(api.signup, UserInterface)
  }

  Signin(loginInterface: Login): Observable<any> {
    return this.http.post(api.signin, loginInterface).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  ForgetPassword(forgetPassword: forgetPassword): Observable<any> {
    return this.http.post(api.forgetpassword, forgetPassword)
  }
  ResetPassword(resetPassword: any): Observable<any> {
    return this.http.post(api.resetpassword, resetPassword)
  }
  VerifyPassword(verifyPassword: any): Observable<any> {
    return this.http.post(api.verifypassword, verifyPassword)
  }

  // Add Authorization Header
  getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  // Example: Fetch protected data
  getUserData(): Observable<any> {
    return this.http.get(api.homepage, { headers: this.getAuthHeaders() });
  }
}
