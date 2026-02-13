
import type { Product } from '../types';

const PRODUCTS: Product[] = [
  { name: "Queso", price: 5, color: "f1c40f", category: "Salado" },
  { name: "Pizza", price: 7, color: "c0392b", category: "Salado" },
  { name: "Pollo", price: 9, color: "f39c12", category: "Salado" },
  { name: "Carne", price: 9, color: "943126", category: "Salado" },
  { name: "Triple", price: 10, color: "d4af37", category: "Salado" },
  { name: "Pichanga", price: 12, color: "ff7f50", category: "Salado" },
  { name: "Ají de Gallina", price: 12, color: "ffd700", category: "Salado" },
  { name: "Árabe", price: 12, color: "556b2f", category: "Salado" },
  { name: "Lomo Saltado", price: 12, color: "5c4033", category: "Salado" },
  { name: "Doble Queso", price: 9, color: "ffc300", category: "Salado" },
  { name: "Vegetariana", price: 8, color: "228b22", category: "Salado" },
  { name: "Hawaiana", price: 8, color: "ffc107", category: "Salado" },
  { name: "Caprese", price: 8, color: "ff6347", category: "Salado" },
  { name: "Rocoto Relleno", price: 14, color: "d21404", category: "Salado" },
  { name: "Chorizo", price: 9, color: "b22222", category: "Salado" },
  { name: "Marisco", price: 14, color: "add8e6", category: "Mar" },
  { name: "Pulpo al Olivo", price: 14, color: "5d3a9b", category: "Mar" },
  { name: "Langostino", price: 16, color: "fa8072", category: "Mar" },
  { name: "Camarón", price: null, color: "e06f58", category: "Mar" },
  { name: "Manjar", price: 6, color: "f5e5c4", category: "Dulce" },
  { name: "Nutella", price: 7, color: "3d2b1f", category: "Dulce" },
];

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 500);
  });
};
