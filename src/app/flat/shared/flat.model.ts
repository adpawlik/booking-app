export class Flat {

  static readonly CATEGORIES = ['flat', 'apartment', 'studio', 'room'];

  _id: string;
  title: string;
  city: string;
  street: string;
  category: string;
  images: string;
  description: string;
  guests: number;
  beds: number;
  bedrooms: number;
  bathrooms: number;
  dailyRate: number;
  createdAt: string;
}
