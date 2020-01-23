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
  allFlats: number;
  offsetFlats: number = 0;
  loadFlats: number = 3;
  loader = true;
  noMoreFlats: boolean = true;

  constructor(private flatService: FlatService) {}

  ngOnInit() {
    const flatsObservable = this.flatService.getFlats();
    flatsObservable.subscribe(
      (flats: Flat[]) => {
        this.allFlats = flats.length;
    });
    const moreFlat = this.flatService.getSomeFlats(this.offsetFlats, this.loadFlats);
    moreFlat.subscribe(
      (flats: Flat[]) => {
        this.flats.push(...flats);
        this.loader = false;
        this.offsetFlats += this.loadFlats;
        this.noMoreFlats = this.allFlats > this.offsetFlats;
    });
  }

  moreFlats() {
    if (this.noMoreFlats) {
      this.loader = true;
      const moreFlat = this.flatService.getSomeFlats(this.offsetFlats, this.loadFlats);
      moreFlat.subscribe(
      (flats: Flat[]) => {
        this.flats.push(...flats);
        this.loader = false;
        this.offsetFlats += this.loadFlats;
        this.noMoreFlats = this.allFlats > this.offsetFlats;
      });
    }
  }

}
