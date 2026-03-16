import React, { useEffect } from 'react';
import type { Page } from '../types';

interface SuccessPageProps {
  onNavigate: (page: Page) => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    // Confetti effect could be added here
  }, []);

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Success Animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="absolute inset-0 w-24 h-24 bg-green-400 rounded-full animate-ping opacity-20 mx-auto" />
        </div>
        
        <h1 className="text-4xl font-black text-gray-900 mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Thank you for your purchase. Your Beats Studio Pro headphones are being prepared for shipment.
        </p>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-left">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Order #BEATS-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              <p className="text-sm text-gray-500">Confirmation sent to your email</p>
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Estimated Delivery</span>
              <span className="font-semibold text-gray-900">2-3 Business Days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping Method</span>
              <span className="font-semibold text-gray-900">Express Shipping</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <button 
            onClick={() => onNavigate('product')}
            className="w-full px-6 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all hover:shadow-lg"
          >
            Continue Shopping
          </button>
          
          <button className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-900 hover:text-gray-900 transition-colors">
            View Order Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;