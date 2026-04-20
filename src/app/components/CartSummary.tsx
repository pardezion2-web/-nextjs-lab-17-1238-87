'use client';

import { useCart } from '@/lib/cart-context';

export default function CartSummary() {
  const { state } = useCart();

  return (
    <div className="bg-white text-gray-800 px-3 py-1 rounded text-sm">
      Cart: {state.items.length} items (${state.total.toFixed(2)})
    </div>
  );
}