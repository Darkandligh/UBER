import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  imports: [
    FormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonText,
    IonSelect,
    IonSelectOption,
  ],
})
export class RegisterPage {
  private auth = inject(AuthService);
  private router = inject(Router);
  error = '';
  form: any = {
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'client',
    license_number: '',
    plate: '',
    brand: '',
    model: '',
    year: null,
    capacity: 4,
    color: '',
  };

  submit() {
    this.error = '';
    const { name, email, phone, password, role } = this.form;
    const data = role === 'driver' ? this.form : { name, email, phone, password, role };
    this.auth.register(data).subscribe({
      next: () => this.router.navigateByUrl('/home'),
      error: (e) => (this.error = e.error?.message ?? 'Error de conexión'),
    });
  }
}
