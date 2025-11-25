export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  period: 'monthly' | 'yearly';
  category: 'EDR' | 'XDR' | 'SOC' | 'Cloud' | 'Network';
  features: string[];
  status: 'available' | 'maintenance' | 'coming_soon';
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Page {
  HOME = 'HOME',
  CATALOG = 'CATALOG',
  PRODUCT = 'PRODUCT',
  SEARCH = 'SEARCH',
  CART = 'CART',
  CHECKOUT = 'CHECKOUT',
  ACCOUNT = 'ACCOUNT',
  SUPPORT = 'SUPPORT'
}
