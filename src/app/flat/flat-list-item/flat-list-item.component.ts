import { Component, OnInit, Input } from '@angular/core';
import { Flat } from '../shared/flat.model';

@Component({
  selector: 'app-flat-list-item',
  templateUrl: './flat-list-item.component.html',
  styleUrls: ['./flat-list-item.component.scss']
})
export class FlatListItemComponent implements OnInit {

  @Input() flat: Flat[];

  constructor() { }

  ngOnInit() {
  }

}
