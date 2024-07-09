import React from "react";
import type { Product as ProductType } from "../../../types";
import { useDispatch } from "react-redux";
import { deleteProduct, selectProduct } from "../../../store/productsSlice";
import { ProductImage } from "../../image";
import {
  DeleteButton,
  ProductActions,
  ProductContainer,
  ProductDescription,
  ProductDetailsContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./styled";

interface ProductProps {
  product: ProductType;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, description, image, price } = product;

  return (
    <ProductContainer onClick={() => dispatch(selectProduct(product))}>
      <ProductInfo>
        <ProductDetailsContainer>
          <ProductName>{name}</ProductName>
          <ProductPrice>Price: ${price.toFixed(2)}</ProductPrice>
          <ProductDescription>Description: {description}</ProductDescription>
        </ProductDetailsContainer>
        <ProductImage src={image} alt={name} />
      </ProductInfo>
      <ProductActions>
        <DeleteButton
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteProduct(id));
          }}
        >
          Delete
        </DeleteButton>
      </ProductActions>
    </ProductContainer>
  );
};
