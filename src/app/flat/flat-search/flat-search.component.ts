import { Component, DoCheck, ElementRef, ViewChild } from '@angular/core';
import { SearchService } from '../../shared/search.service';
import { FlatService } from 'src/app/flat/shared/flat.service';
import { Flat } from 'src/app/flat/shared/flat.model';
import { Subject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-flat-search',
  templateUrl: './flat-search.component.html',
  styleUrls: ['./flat-search.component.scss']
})
export class FlatSearchComponent implements DoCheck {

  @ViewChild('search',  {static: false}) searchRef: ElementRef;
  flats: Flat[] = [];
  errors: any[] = [];
  searchOpen: boolean;
  searchcity: any;
  searchFlats$ = new Subject<string>();

  constructor(private searchService: SearchService,
              private flatService: FlatService,
              private router: Router) {
    this.searchStatus();
    this.flatService.search(this.searchFlats$).subscribe(
      ({flats, errors}) => {
        this.searchcity = flats ? flats[0].city : '';
        this.flats = flats || [];
        this.errors = errors || [];
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeSearch();
      }
    });
  }

  ngDoCheck() {
    this.searchStatus();
  }

  closeSearch() {
    this.searchRef.nativeElement.value = '';
    this.searchService.closeSearch();
  }

  searchStatus() {
    this.searchOpen = this.searchService.getSearchStatus();
  }

}
