import { ShoppingCart, Heart, User, Search, Menu, Phone, Mail, MapPin, Star, Truck, ShieldCheck, CreditCard, Clock } from 'lucide-react';

export const categories = [
  { id: 1, name: 'Living Room', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400&h=400' },
  { id: 2, name: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=400&h=400' },
  { id: 3, name: 'Dining', image: 'https://images.unsplash.com/photo-1617806118233-18e1c0945594?auto=format&fit=crop&q=80&w=400&h=400' },
  { id: 4, name: 'Office', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=400&h=400' },
  { id: 5, name: 'Outdoor', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=400&h=400' },
  { id: 6, name: 'Decor', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=400' },
];

export const products = [
  {
    id: 1,
    name: 'Modern Velvet Sofa',
    category: 'Living Room',
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=600&h=600',
    badge: 'Sale'
  },
  {
    id: 2,
    name: 'Solid Wood Dining Table',
    category: 'Dining',
    price: 649,
    originalPrice: 799,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=600&h=600',
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair',
    category: 'Office',
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=600&h=600',
    badge: 'Bestseller'
  },
  {
    id: 4,
    name: 'King Size Platform Bed',
    category: 'Bedroom',
    price: 1099,
    originalPrice: 1499,
    rating: 4.7,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=600&h=600',
  },
  {
    id: 5,
    name: 'Mid-Century Armchair',
    category: 'Living Room',
    price: 349,
    originalPrice: 450,
    rating: 4.5,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=600&h=600',
  },
  {
    id: 6,
    name: 'Minimalist Nightstand',
    category: 'Bedroom',
    price: 129,
    originalPrice: 180,
    rating: 4.4,
    reviews: 38,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=600&h=600',
  },
  {
    id: 7,
    name: 'Ceramic Table Lamp',
    category: 'Decor',
    price: 89,
    originalPrice: 120,
    rating: 4.8,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600&h=600',
  },
  {
    id: 8,
    name: 'Outdoor Lounge Set',
    category: 'Outdoor',
    price: 1299,
    originalPrice: 1699,
    rating: 4.9,
    reviews: 73,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600&h=600',
    badge: 'New'
  }
];

export const features = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders over $500' },
  { icon: ShieldCheck, title: '1 Year Warranty', desc: 'Guaranteed quality' },
  { icon: CreditCard, title: 'Secure Payment', desc: '100% safe checkout' },
  { icon: Clock, title: '24/7 Support', desc: 'Dedicated help desk' },
];
