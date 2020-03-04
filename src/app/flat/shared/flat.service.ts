import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flat } from './flat.model';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap, filter, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlatService {

  constructor(private http: HttpClient) {}

  public search(terms: Observable<string>): Observable<any> {
    return terms.pipe(
           debounceTime(800),
           filter(term => term.length > 0),
           distinctUntilChanged(),
           switchMap(term => this.getFlatsByCity(term).pipe(
             catchError(errors => {
                return [errors.error];
             })
           ))
    );
  }

  public getFlatById(flatId: string): Observable<Flat> {
    return this.http.get(`/api/v1/flats/${flatId}`) as Observable<Flat>;
  }

  private getFlatsByCity(term: string): Observable<any> {
    return this.http.get(`/api/v1/flats?city=${term}`);
  }

  public getFlats(): Observable<any> {
    return this.http.get('/api/v1/flats');
  }

  public getSomeFlats(page: number, perpage: number): Observable<any> {
    return this.http.get(`/api/v1/flats?perpage=${perpage}&page=${page}`);
  }

  public createFlat(flat: Flat): Observable<Flat> {
    return this.http.post('api/v1/flats', flat) as Observable<Flat>;
  }

}
