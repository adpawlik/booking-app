import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() location: string;
  url: string;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.url = `https://maps.google.com/maps?q=${this.location}&output=embed`;
    console.log(this.location);
  }

  secureUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
