import React from 'react';
import { categories } from '../data';
import { motion } from 'motion/react';

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Shop by Category</h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.a
              href="#"
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-brand/20 transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg group-hover:text-brand transition-colors">
                {category.name}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
