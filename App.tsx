
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { CATEGORIES } from './constants';
import { getProducts } from './services/productService';
import type { Cart, Product } from './types';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<Cart>({});
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
        setError(null);
      } catch (err) {
        setError('No se pudieron cargar los productos. Por favor, intente de nuevo más tarde.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleQuantityChange = (productName: string, quantity: number) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (quantity > 0) {
        newCart[productName] = quantity;
      } else {
        delete newCart[productName];
      }
      return newCart;
    });
  };

  const filteredProducts = useMemo<Product[]>(() => {
    if (activeCategory === 'Todos') {
      return products;
    }
    return products.filter(product => product.category === activeCategory);
  }, [activeCategory, products]);

  const total = useMemo(() => {
    return Object.entries(cart).reduce((acc, [productName, quantity]) => {
      const product = products.find(p => p.name === productName);
      if (product && typeof product.price === 'number') {
        return acc + product.price * quantity;
      }
      return acc;
    }, 0);
  }, [cart, products]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <CategoryFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        {loading && <div className="text-center py-10">Cargando productos...</div>}
        {error && <div className="text-center py-10 text-red-500">{error}</div>}
        {!loading && !error && (
          <ProductGrid
            products={filteredProducts}
            cart={cart}
            onQuantityChange={handleQuantityChange}
          />
        )}
      </main>
      <Footer total={total} cart={cart} products={products} />
    </div>
  );
};

export default App;
