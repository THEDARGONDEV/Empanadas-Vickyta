
import React from 'react';
import ProductCard from './ProductCard';
import type { Cart, Product } from '../types';

interface ProductGridProps {
  products: Product[];
  cart: Cart;
  onQuantityChange: (productName: string, quantity: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, cart, onQuantityChange }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 pb-24">
      {products.map(product => (
        <ProductCard
          key={product.name}
          product={product}
          quantity={cart[product.name] || 0}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
