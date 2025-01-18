export interface Product {
  _id: number;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  image: any[];
  category: string;
  available: boolean;
  quantity: number;
  tags: string[];
}
