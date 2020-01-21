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
  loader = true;

  constructor(private flatService: FlatService) { }

  ngOnInit() {
    const flatsObservable = this.flatService.getFlats();
    flatsObservable.subscribe(
      (flats: Flat[]) => {
        this.flats = flats;
        this.loader = false;
      },
      () => {

      },
      () => {

      });
  }

}
