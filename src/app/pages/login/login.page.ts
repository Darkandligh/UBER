import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonText } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  imports: [FormsModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonText],
})
export class LoginPage {
  private auth = inject(AuthService);
  private router = inject(Router);
  login = '';
  password = '';
  error = '';

  submit() {
    this.error = '';
    this.auth.login(this.login, this.password).subscribe({
      next: () => this.router.navigateByUrl('/home'),
      error: (e) => (this.error = e.error?.message ?? 'Error de conexión'),
    });
  }
}
