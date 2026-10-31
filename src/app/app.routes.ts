import type { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./pages/register/register.page').then((m) => m.RegisterPage) },
  { path: 'forgot', loadComponent: () => import('./pages/forgot/forgot.page').then((m) => m.ForgotPage) },
  { path: 'home', canActivate: [authGuard], loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
