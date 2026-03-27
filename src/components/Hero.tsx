import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 h-[70vh] min-h-[500px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1618220179428-22790b46a011?auto=format&fit=crop&q=80&w=2000"
          alt="Modern living room furniture"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl"
        >
          <span className="text-brand font-semibold tracking-wider uppercase text-sm mb-2 block">
            New Collection 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-4">
            Elevate Your Living Space
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Discover our curated collection of premium furniture designed for comfort, style, and durability. Transform your house into a dream home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand hover:bg-brand-light text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 text-center">
              Shop Now
            </button>
            <button className="bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 text-center">
              Explore Catalog
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
