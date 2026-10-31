import { Component, OnInit, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [JsonPipe, IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage implements OnInit {
  private auth = inject(AuthService);
  private router = inject(Router);
  user: any;

  ngOnInit() {
    this.auth.me().subscribe((r) => (this.user = r.user));
  }

  logout() {
    this.auth.logout().subscribe({ complete: () => this.router.navigateByUrl('/login') });
  }
}
