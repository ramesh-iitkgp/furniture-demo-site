import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, User, Menu } from 'lucide-react';
import { useDynamicParams } from '../hooks/useDynamicParams';

export default function Header() {
  const params = useDynamicParams();
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-brand text-white text-xs py-2 px-4 text-center font-medium tracking-wide">
        Free Shipping on all orders over $500 | <a href="#" className="underline hover:text-gray-200">Shop Now</a>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button className="p-2 text-gray-600 hover:text-brand">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-serif text-3xl font-bold text-brand tracking-tight">{params.businessName || 'LuxeOak'}</span>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for furniture, decor, and more..."
                className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-gray-50"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-brand">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-gray-600 hover:text-brand transition-colors hidden sm:block">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-brand transition-colors relative">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-brand text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button className="text-gray-600 hover:text-brand transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-brand text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                5
              </span>
            </button>
          </div>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-8 py-4 border-t border-gray-100 justify-center">
          {['Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor', 'Decor', 'Sale'].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium transition-colors hover:text-brand ${item === 'Sale' ? 'text-red-600' : 'text-gray-700'}`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
