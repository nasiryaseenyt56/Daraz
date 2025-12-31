
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isFlashSale?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subCategories?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  name: string;
  isLoggedIn: boolean;
}
