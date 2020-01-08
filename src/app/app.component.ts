import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'booking-app';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    if (!this.auth.isAuthenticated()) this.auth.logout();
  }

}
