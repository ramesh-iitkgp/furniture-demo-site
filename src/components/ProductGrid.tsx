import React from 'react';
import { products } from '../data';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Trending Products</h2>
            <div className="w-24 h-1 bg-brand rounded-full"></div>
          </div>
          <a href="#" className="hidden sm:block text-brand font-medium hover:underline">
            View All Products &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {product.badge}
                  </div>
                )}
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <button className="bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-brand hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Add to Cart Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-brand transition-colors font-medium shadow-lg">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">{product.category}</div>
                <h3 className="font-medium text-gray-900 text-lg mb-2 line-clamp-1">{product.name}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center sm:hidden">
          <a href="#" className="inline-block border border-gray-300 rounded-md px-6 py-3 text-gray-700 font-medium hover:bg-gray-50">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
