import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types';

export interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
}

const loadState = (): Product[] => {
  try {
    const serializedState = localStorage.getItem('products');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState) as Product[];
  } catch (e) {
    console.error('Could not load state from local storage:', e);
    return [];
  }
};

const initialState: ProductsState = {
  products: loadState(),
  selectedProduct: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    selectProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, selectProduct } = productsSlice.actions;
export default productsSlice.reducer;
