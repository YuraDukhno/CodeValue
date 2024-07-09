import React from 'react';
import type { Product as ProductType } from '../../../types';
import { useDispatch } from 'react-redux';
import { deleteProduct, selectProduct } from '../../../store/productsSlice';
import { ProductImage } from '../../image';
import { DeleteButton, ProductActions, ProductContainer, ProductInfo } from './styled';


interface ProductProps {
  product: ProductType;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, description, image } = product;

  return (
    <ProductContainer onClick={() => dispatch(selectProduct(product))}>
      <ProductInfo>
        <div>
          <strong>{name}</strong>
          <p>{description}</p>
        </div>
        <ProductImage src={image} alt={name} />
      </ProductInfo>
      <ProductActions>
        <DeleteButton onClick={(e) => { e.stopPropagation(); dispatch(deleteProduct(id)); }}>
          Delete
        </DeleteButton>
      </ProductActions>
    </ProductContainer>
  );
};