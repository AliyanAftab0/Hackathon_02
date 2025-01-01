export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  width: number;
  height: number;
  description?: string;
  rating?: number;
  reviews?: number;
  tags?: string[];
};

export type SortOption = 'newest' | 'price-asc' | 'price-desc';
export type FilterOptions = {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: SortOption;
};