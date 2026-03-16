import React, { useState } from 'react';
import { CartProvider } from './components/CartProvider';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import type { Page } from './types';
import Layout from './components/layout';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('product');

  const renderPage = () => {
    switch (currentPage) {
      case 'product':
        return <ProductPage onNavigate={setCurrentPage} />;
      case 'checkout':
        return <CheckoutPage onNavigate={setCurrentPage} />;
      case 'success':
        return <SuccessPage onNavigate={setCurrentPage} />;
      default:
        return <ProductPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </Layout>
    </CartProvider>
  );
}

export default App;