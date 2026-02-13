
import type { Cart, Product } from '../types';

interface BusinessInfo {
  name: string;
  whatsappNumber: string;
}

export const generateWhatsAppMessage = (
  cart: Cart,
  total: number,
  products: Product[],
  businessInfo: BusinessInfo
): string => {
  let message = `Hola ${businessInfo.name}, quisiera hacer el siguiente pedido:\n\n`;
  
  Object.entries(cart).forEach(([productName, quantity]) => {
    const product = products.find(p => p.name === productName);
    if (product && typeof product.price === 'number') {
      const subtotal = product.price * quantity;
      message += `- ${quantity}x ${productName} (S/ ${product.price.toFixed(2)} c/u) - Subtotal: S/ ${subtotal.toFixed(2)}\n`;
    }
  });

  message += `\n*TOTAL: S/ ${total.toFixed(2)}*\n\n`;
  message += `Agradecería confirmar mi pedido.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodedMessage}`;
};
