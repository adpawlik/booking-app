import { Component, OnInit } from '@angular/core';
import { FlatService } from '../shared/flat.service';
import { Flat } from '../shared/flat.model';

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.scss']
})
export class FlatListComponent implements OnInit {

  flats: Flat[] = [];
  flatsTotal: number;
  page = 0;
  perpage = 6;
  pageTotal: number;
  loader: boolean;
  noMoreFlats = true;

  constructor(private flatService: FlatService) {}

  ngOnInit() {
    this.getSomeFlat();
  }

  getSomeFlat() {
    this.loader = true;
    this.flatService
    .getSomeFlats(this.page, this.perpage)
    .subscribe(
    ({page, pageTotal, flatsTotal, flats}) => {
      this.page = page;
      this.pageTotal = pageTotal;
      this.flatsTotal = flatsTotal;
      this.flats.push(...flats);
      this.loader = false;
      this.page++;
      this.noMoreFlats = (this.page < this.pageTotal) ? true : false;
    });
  }

  moreFlats() {
    if (this.noMoreFlats) {
      this.getSomeFlat();
    }
  }

}
