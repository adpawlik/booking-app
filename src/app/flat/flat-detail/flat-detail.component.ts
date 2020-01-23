import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlatService } from '../shared/flat.service';
import { Flat } from '../shared/flat.model';

@Component({
  selector: 'app-flat-detail',
  templateUrl: './flat-detail.component.html',
  styleUrls: ['./flat-detail.component.scss']
})
export class FlatDetailComponent implements OnInit {

  flat: Flat;
  loader = true;

  constructor(private route: ActivatedRoute,
              private flatService: FlatService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.getFlat(params.flatId);
      });
  }

  getFlat(flatId: string) {
    this.flatService.getFlatById(flatId).subscribe(
      (flat: Flat) => {
        this.flat = flat;
        this.loader = false;
      });
  }
}
