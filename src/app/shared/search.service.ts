import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() {}

  private isSearchOpen = false;

  public closeSearch(): any {
    this.isSearchOpen = false;
  }

  public openSearch(): any {
    this.isSearchOpen = true;
  }

  public getSearchStatus(): boolean {
    return this.isSearchOpen;
  }

}
