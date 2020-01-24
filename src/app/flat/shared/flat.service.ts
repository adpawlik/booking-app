import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flat } from './flat.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlatService {

  constructor(private http: HttpClient) {}

  public getFlatById(flatId: string): Observable<Flat> {
    return this.http.get('/api/v1/flats/' + flatId) as Observable<Flat>;
  }

  public getFlatsInCity(page: number, perpage: number, city: string): Observable<Flat[]> {
    return this.http.get('/api/v1/flats?perpage=' + perpage + 'page=' + page + 'city=' + city) as Observable<Flat[]>;
  }

  public getFlats(): Observable<any> {
    return this.http.get('/api/v1/flats');
  }

  public getSomeFlats(page: number, perpage: number): Observable<any> {
    return this.http.get('/api/v1/flats?perpage=' + perpage + '&page=' + page);
  }

}
