import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from './auth/shared/auth.service';
import { SearchService } from './shared/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      this.auth.logout();
    }
  }
}
