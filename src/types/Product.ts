export interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  tags: string[];
  slug: string;
  dicountPercentage: number;
  discountedPrice: number;
  isNew: boolean;
  description: string;
  category: string;
  dimensions?: string;
  rating?: number;
  stock?: boolean;
}
