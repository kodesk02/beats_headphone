import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { CartItem, Variant } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (variant: Variant, price: number) => void;
  removeFromCart: (variantName: string) => void;
  updateQuantity: (variantName: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (variant: Variant, price: number) => {
    setItems(prev => {
      const existing = prev.find(item => item.variant.name === variant.name);
      if (existing) {
        return prev.map(item => 
          item.variant.name === variant.name 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { variant, quantity: 1, price }];
    });
  };

  const removeFromCart = (variantName: string) => {
    setItems(prev => prev.filter(item => item.variant.name !== variantName));
  };

  const updateQuantity = (variantName: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(variantName);
      return;
    }
    setItems(prev => prev.map(item => 
      item.variant.name === variantName ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      items, addToCart, removeFromCart, updateQuantity, clearCart, total, itemCount 
    }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};