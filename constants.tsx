
import React from 'react';
import { 
  Smartphone, 
  Tv, 
  Watch, 
  Home, 
  ShoppingBag, 
  Heart, 
  Zap, 
  Gamepad, 
  Baby, 
  Utensils, 
  Bike, 
  Briefcase 
} from 'lucide-react';
import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Electronic Devices', icon: 'Smartphone', subCategories: ['Smartphones', 'Laptops', 'Tablets'] },
  { id: '2', name: 'Electronic Accessories', icon: 'Tv', subCategories: ['Headphones', 'Cameras', 'Storage'] },
  { id: '3', name: 'TV & Home Appliances', icon: 'Watch', subCategories: ['Smart TVs', 'Refrigerators', 'Washing Machines'] },
  { id: '4', name: 'Health & Beauty', icon: 'Heart', subCategories: ['Skincare', 'Makeup', 'Fragrances'] },
  { id: '5', name: 'Babies & Toys', icon: 'Baby', subCategories: ['Diapers', 'Baby Gear', 'Toys'] },
  { id: '6', name: 'Groceries & Pets', icon: 'Utensils', subCategories: ['Beverages', 'Breakfast', 'Pet Supplies'] },
  { id: '7', name: 'Home & Lifestyle', icon: 'Home', subCategories: ['Furniture', 'Kitchen', 'Bedding'] },
  { id: '8', name: 'Women\'s Fashion', icon: 'ShoppingBag', subCategories: ['Clothing', 'Shoes', 'Jewelry'] },
  { id: '9', name: 'Men\'s Fashion', icon: 'Briefcase', subCategories: ['T-Shirts', 'Jeans', 'Sneakers'] },
  { id: '10', name: 'Watches & Bags', icon: 'Watch', subCategories: ['Backpacks', 'Watches', 'Sunglasses'] },
  { id: '11', name: 'Sports & Outdoor', icon: 'Bike', subCategories: ['Fitness Equipment', 'Outdoor Gear'] },
  { id: '12', name: 'Automotive', icon: 'Gamepad', subCategories: ['Car Parts', 'Accessories'] },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Wireless Bluetooth Earbuds Pro 5',
    price: 1250,
    originalPrice: 2500,
    discount: 50,
    rating: 4.8,
    reviews: 1240,
    image: 'https://picsum.photos/seed/earbuds/300/300',
    category: 'Electronic Accessories',
    isFlashSale: true
  },
  {
    id: 'p2',
    name: 'Men\'s Slim Fit Cotton Polo Shirt',
    price: 899,
    originalPrice: 1500,
    discount: 40,
    rating: 4.5,
    reviews: 850,
    image: 'https://picsum.photos/seed/shirt/300/300',
    category: 'Men\'s Fashion',
    isFlashSale: true
  },
  {
    id: 'p3',
    name: 'Smart Watch Series 8 Ultra - 49mm',
    price: 3450,
    originalPrice: 6000,
    discount: 42,
    rating: 4.7,
    reviews: 520,
    image: 'https://picsum.photos/seed/watch/300/300',
    category: 'Electronic Devices',
    isFlashSale: true
  },
  {
    id: 'p4',
    name: 'Non-Stick Kitchen Cookware Set 12pcs',
    price: 5200,
    originalPrice: 8500,
    discount: 38,
    rating: 4.6,
    reviews: 310,
    image: 'https://picsum.photos/seed/cookware/300/300',
    category: 'Home & Lifestyle'
  },
  {
    id: 'p5',
    name: 'Anti-Aging Face Serum with Vitamin C',
    price: 1450,
    originalPrice: 2200,
    discount: 34,
    rating: 4.9,
    reviews: 2100,
    image: 'https://picsum.photos/seed/beauty/300/300',
    category: 'Health & Beauty'
  },
  {
    id: 'p6',
    name: 'Gaming Mechanical Keyboard RGB',
    price: 2800,
    originalPrice: 4500,
    discount: 37,
    rating: 4.4,
    reviews: 145,
    image: 'https://picsum.photos/seed/keyboard/300/300',
    category: 'Electronic Accessories'
  },
  {
    id: 'p7',
    name: 'Baby Diapers Mega Pack (80 Count)',
    price: 3150,
    originalPrice: 4000,
    discount: 21,
    rating: 4.8,
    reviews: 980,
    image: 'https://picsum.photos/seed/baby/300/300',
    category: 'Babies & Toys'
  },
  {
    id: 'p8',
    name: 'Men\'s Sports Running Shoes',
    price: 1999,
    originalPrice: 3500,
    discount: 43,
    rating: 4.6,
    reviews: 230,
    image: 'https://picsum.photos/seed/shoes/300/300',
    category: 'Men\'s Fashion'
  }
];

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Smartphone': return <Smartphone size={18} />;
    case 'Tv': return <Tv size={18} />;
    case 'Watch': return <Watch size={18} />;
    case 'Home': return <Home size={18} />;
    case 'ShoppingBag': return <ShoppingBag size={18} />;
    case 'Heart': return <Heart size={18} />;
    case 'Zap': return <Zap size={18} />;
    case 'Gamepad': return <Gamepad size={18} />;
    case 'Baby': return <Baby size={18} />;
    case 'Utensils': return <Utensils size={18} />;
    case 'Bike': return <Bike size={18} />;
    case 'Briefcase': return <Briefcase size={18} />;
    default: return <ShoppingBag size={18} />;
  }
};
