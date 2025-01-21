export interface Product {
  _id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  image: string;
  description: string;
  quantity: string;
  available: boolean;
}