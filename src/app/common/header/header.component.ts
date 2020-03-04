import { Component } from '@angular/core';
import { AuthService } from '../../auth/shared/auth.service';
import { Router } from '@angular/router';
import { SearchService } from '../../shared/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public auth: AuthService,
              private router: Router,
              private searchService: SearchService) { }

  openSearch() {
    this.searchService.openSearch();
  }

   logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
