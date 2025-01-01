import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1, 
    name: 'Fresh Lime', 
    price: 45.00, 
    category: 'Drinks', 
    image: '/about3 copy.png',
    images: ['/about3 copy.png', '/about3.1 copy.png', '/about3.2 copy.png', '/about3.3 copy.png'],
    width: 312,
    height: 267,
    rating: 4,
    reviews: 12,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam massa.',
    tags: ['New', 'Popular']
  },
  {
    id: 2, 
    name: 'Chocolate Muffin', 
    price: 12.00, 
    category: 'Desserts', 
    image: '/about3.1 copy.png',
    images: ['/about3.1 copy.png', '/about3.2 copy.png', '/about3.3 copy.png', '/about3.4 copy.png'],
    width: 312,
    height: 267,
    rating: 5,
    reviews: 8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['New']
  },
  // Add remaining products with similar structure...
];