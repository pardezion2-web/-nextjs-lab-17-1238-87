'use client';

import { useCart } from '@/lib/cart-context';

const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Mouse', price: 29.99 },
  { id: 3, name: 'Keyboard', price: 79.99 },
];

export default function ShopPage() {
  const { addItem } = useCart();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-2xl font-bold text-green-600 mb-4">${product.price}</p>
            <button
              onClick={() => addItem(product)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}