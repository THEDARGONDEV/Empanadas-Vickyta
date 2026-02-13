
import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <nav className="sticky top-[88px] bg-white/90 backdrop-blur-sm z-30 mb-8 border-b border-gray-200 -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center sm:space-x-4 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`py-4 px-3 sm:px-4 text-sm sm:text-base font-semibold border-b-2 transition-all duration-200 whitespace-nowrap
                ${activeCategory === category
                  ? 'border-amber-600 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-amber-600 hover:border-amber-500'}`
              }
              aria-current={activeCategory === category ? 'page' : undefined}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryFilter;
