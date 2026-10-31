import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private url = `${environment.api}/auth`;

  get token() {
    return localStorage.getItem('token');
  }

  login(login: string, password: string) {
    return this.http.post<any>(`${this.url}/login`, { login, password }).pipe(tap((r) => this.save(r)));
  }

  register(data: any) {
    return this.http.post<any>(`${this.url}/register`, data).pipe(tap((r) => this.save(r)));
  }

  forgot(email: string, new_password: string) {
    return this.http.post<any>(`${this.url}/forgot-password`, { email, new_password });
  }

  me() {
    return this.http.get<any>(`${this.url}/me`);
  }

  logout() {
    return this.http.post<any>(`${this.url}/logout`, {}).pipe(tap(() => localStorage.clear()));
  }

  private save(r: any) {
    localStorage.setItem('token', r.access_token);
    localStorage.setItem('role', r.user.role);
  }
}
