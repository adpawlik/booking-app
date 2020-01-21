import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Flat } from './flat.model';

@Injectable({
  providedIn: 'root'
})
export class FlatService {

  private flats: Flat[] = [{
    id: "1",
    title: "New flats",
    city: "Warsaw",
    street: "11 Listopada",
    category: "Studio",
    images: "http://via.placeholder.com/700x500",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at urna elit. Cras sit amet elit quis ligula rutrum aliquet. Proin lacus erat, porttitor ac mi sit amet, semper convallis mi. Vestibulum id odio at quam gravida scelerisque. Duis sit amet ligula ornare, finibus ligula a, congue felis. Etiam et semper erat. Nullam in nisi vitae lectus hendrerit lacinia. Etiam scelerisque consectetur tincidunt. Praesent vulputate nunc id ante tempor, consectetur elementum felis viverra. Nullam sollicitudin purus a orci blandit sagittis. In eu leo tincidunt, iaculis nisi sollicitudin, mattis nunc. Quisque fringilla efficitur sapien. Curabitur nec sagittis justo, a semper elit. In ac purus in sem aliquet luctus a et lacus. In hac habitasse platea dictumst.",
    bedrooms: 3,
    rooms: 2,
    dailyRate: 40,
    createdAt: "24/12/2019"
  },
  {
    id: "2",
    title: "New flats 2",
    city: "Wroclaw",
    street: "Drukarska",
    category: "Apartment",
    images: "http://via.placeholder.com/700x500",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at urna elit. Cras sit amet elit quis ligula rutrum aliquet. Proin lacus erat, porttitor ac mi sit amet, semper convallis mi. Vestibulum id odio at quam gravida scelerisque. Duis sit amet ligula ornare, finibus ligula a, congue felis. Etiam et semper erat. Nullam in nisi vitae lectus hendrerit lacinia. Etiam scelerisque consectetur tincidunt. Praesent vulputate nunc id ante tempor, consectetur elementum felis viverra. Nullam sollicitudin purus a orci blandit sagittis. In eu leo tincidunt, iaculis nisi sollicitudin, mattis nunc. Quisque fringilla efficitur sapien. Curabitur nec sagittis justo, a semper elit. In ac purus in sem aliquet luctus a et lacus. In hac habitasse platea dictumst.",
    bedrooms: 5,
    rooms: 4,
    dailyRate: 100,
    createdAt: "24/12/2019"
  },
  {
    id: "3",
    title: "New flats 3",
    city: "Warsaw",
    street: "Studio",
    category: "Studio",
    images: "http://via.placeholder.com/700x500",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at urna elit. Cras sit amet elit quis ligula rutrum aliquet. Proin lacus erat, porttitor ac mi sit amet, semper convallis mi. Vestibulum id odio at quam gravida scelerisque. Duis sit amet ligula ornare, finibus ligula a, congue felis. Etiam et semper erat. Nullam in nisi vitae lectus hendrerit lacinia. Etiam scelerisque consectetur tincidunt. Praesent vulputate nunc id ante tempor, consectetur elementum felis viverra. Nullam sollicitudin purus a orci blandit sagittis. In eu leo tincidunt, iaculis nisi sollicitudin, mattis nunc. Quisque fringilla efficitur sapien. Curabitur nec sagittis justo, a semper elit. In ac purus in sem aliquet luctus a et lacus. In hac habitasse platea dictumst.",
    bedrooms: 3,
    rooms: 2,
    dailyRate: 40,
    createdAt: "24/12/2019"
  },
  {
    id: "4",
    title: "New flats 4",
    city: "Warsaw",
    street: "Studio",
    category: "Flat",
    images: "http://via.placeholder.com/700x500",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at urna elit. Cras sit amet elit quis ligula rutrum aliquet. Proin lacus erat, porttitor ac mi sit amet, semper convallis mi. Vestibulum id odio at quam gravida scelerisque. Duis sit amet ligula ornare, finibus ligula a, congue felis. Etiam et semper erat. Nullam in nisi vitae lectus hendrerit lacinia. Etiam scelerisque consectetur tincidunt. Praesent vulputate nunc id ante tempor, consectetur elementum felis viverra. Nullam sollicitudin purus a orci blandit sagittis. In eu leo tincidunt, iaculis nisi sollicitudin, mattis nunc. Quisque fringilla efficitur sapien. Curabitur nec sagittis justo, a semper elit. In ac purus in sem aliquet luctus a et lacus. In hac habitasse platea dictumst.",
    bedrooms: 3,
    rooms: 2,
    dailyRate: 40,
    createdAt: "24/12/2019"
  }];

  public getFlatById(flatId: string): Observable<Flat> {
    return new Observable<Flat>((observer) => {
      setTimeout(() => {
        const foundFlat = this.flats.find((flat) => {
          return flat.id == flatId;
        });
        observer.next(foundFlat);
      }, 3000);
    });
  }

  public getFlats(): Observable<Flat[]> {
    return new Observable<Flat[]>((observer) => {
      setTimeout(() => {
        observer.next(this.flats);
      }, 3000);
    });
  }

}
