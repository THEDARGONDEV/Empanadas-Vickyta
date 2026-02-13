
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { generateWhatsAppMessage } from '../utils/whatsapp';
import type { Cart, Product } from '../types';

interface FooterProps {
  total: number;
  cart: Cart;
  products: Product[];
}

const Footer: React.FC<FooterProps> = ({ total, cart, products }) => {
  const hasItems = Object.keys(cart).length > 0;

  if (!hasItems) {
    return null;
  }

  const whatsappUrl = generateWhatsAppMessage(cart, total, products, BUSINESS_INFO);

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-amber-600 text-white shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <span className="text-lg font-semibold">Total a Pagar:</span>
          <span className="ml-2 text-2xl font-bold">S/ {total.toFixed(2)}</span>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-amber-700 font-bold py-2 px-6 rounded-md shadow-md hover:bg-amber-50 transition-colors duration-300 text-center"
        >
          Finalizar Pedido
        </a>
      </div>
    </footer>
  );
};

export default Footer;
