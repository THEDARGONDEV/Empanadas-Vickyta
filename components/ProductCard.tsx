
import React from 'react';
import type { Product } from '../types';
import { PlusIcon, MinusIcon } from './Icons';

interface ProductCardProps {
  product: Product;
  quantity: number;
  onQuantityChange: (productName: string, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, quantity, onQuantityChange }) => {
  const handleIncrement = () => onQuantityChange(product.name, quantity + 1);
  const handleDecrement = () => onQuantityChange(product.name, quantity - 1);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col">
      <div className="h-24 w-full" style={{ backgroundColor: `#${product.color}` }}></div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mt-1">
            {product.price !== null ? `S/ ${product.price.toFixed(2)}` : 'Consultar Precio'}
          </p>
        </div>
        <div className="mt-4">
          {product.price !== null ? (
            quantity > 0 ? (
              <div className="flex items-center justify-between">
                <button
                  onClick={handleDecrement}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                  aria-label={`Quitar uno de ${product.name}`}
                >
                  <MinusIcon />
                </button>
                <span className="font-medium text-lg text-amber-600" aria-live="polite">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                  aria-label={`Añadir uno de ${product.name}`}
                >
                  <PlusIcon />
                </button>
              </div>
            ) : (
              <button
                onClick={() => onQuantityChange(product.name, 1)}
                className="w-full bg-amber-600 text-white font-bold py-2 px-4 rounded-md hover:bg-amber-700 transition-colors duration-200"
                aria-label={`Agregar ${product.name} al pedido`}
              >
                Agregar
              </button>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
