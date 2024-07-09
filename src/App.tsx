import React, { useState, useEffect } from 'react';
import type { Product } from './types';
import { loadFromLocalStorage, saveToLocalStorage } from './utils';
import { styled } from 'styled-components';
import { ProductDetails, ProductList } from './components';

const StyledManagement = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const StyledApp = styled.div`
  width: 100%;
    display: flex;
    justify-content: center;
`;

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = loadFromLocalStorage('products');
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage('products', products);
  }, [products]);

  return (
    <StyledApp>
      <StyledManagement>
        <h1>Product Management App</h1>
        <ProductList />
        <ProductDetails />
      </StyledManagement>
    </StyledApp>
  );
};

export default App;
