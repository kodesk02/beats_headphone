import React from 'react';
import { useCart } from './CartProvider';
import type { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const { itemCount, total } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <button 
            onClick={() => onNavigate('product')}
            className="text-lg sm:text-xl font-black text-gray-900 tracking-tight hover:opacity-70 transition-opacity"
          >
            BEATS
          </button>
          
          <div className="flex items-center gap-3 sm:gap-6">
            {currentPage === 'product' && itemCount > 0 && (
              <button 
                onClick={() => onNavigate('checkout')}
                className="relative flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="font-semibold hidden sm:inline">${total.toLocaleString()}</span>
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              </button>
            )}
            
            {currentPage !== 'product' && (
              <button 
                onClick={() => onNavigate('product')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm sm:text-base flex items-center gap-1"
              >
                <span className="hidden sm:inline">←</span>
                <span>Continue Shopping</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-14 sm:pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;