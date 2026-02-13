
export interface Product {
  name: string;
  price: number | null;
  color: string;
  category: 'Salado' | 'Mar' | 'Dulce';
}

export interface Cart {
  [productName: string]: number;
}
