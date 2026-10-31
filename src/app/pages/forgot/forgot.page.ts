import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonText } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: 'forgot.page.html',
  imports: [FormsModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonText],
})
export class ForgotPage {
  private auth = inject(AuthService);
  email = '';
  password = '';
  msg = '';
  error = '';

  submit() {
    this.msg = this.error = '';
    this.auth.forgot(this.email, this.password).subscribe({
      next: (r) => (this.msg = r.message),
      error: (e) => (this.error = e.error?.message ?? 'Error de conexión'),
    });
  }
}
