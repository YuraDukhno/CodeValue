import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Product } from '../../../types';
import type { RootState } from '../../../store/store';
import { addProduct, selectProduct, updateProduct } from '../../../store/productsSlice';
import { AddButton, Container, DetailsForm, FormField, Input, Label, SaveButton } from './styled';


export const ProductDetails: React.FC = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state: RootState) => state.products.selectedProduct);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(selectedProduct);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    setCurrentProduct(selectedProduct);
    setIsNew(!selectedProduct);
  }, [selectedProduct]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentProduct) {
      const { name, value } = e.target;
      setCurrentProduct({ ...currentProduct, [name]: name === 'price' ? Number(value) : value });
    }
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();
    const time = date.getTime();
    if (currentProduct) {
      if (isNew) {
        dispatch(addProduct({ ...currentProduct, id: Date.now(), creationDate: time }));
      } else {
        dispatch(updateProduct(currentProduct));
      }
      setIsNew(false);
      dispatch(selectProduct(null));
    }
  };

  const handleAddNew = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const date = new Date();
    const time = date.getTime();
    setCurrentProduct({
      id: 0,
      name: '',
      description: '',
      price: 0,
      image: '',
      creationDate: time,
    });
    setIsNew(true);
  };

  const isValid = currentProduct && currentProduct.name && currentProduct.price > 0;

  return (
    <Container>
      <AddButton onClick={handleAddNew}>Add New Product</AddButton>
      {currentProduct && (
        <DetailsForm onSubmit={handleSave}>
          <FormField>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={currentProduct.name}
              onChange={handleInputChange}
              maxLength={30}
            />
          </FormField>
          <FormField>
            <Label htmlFor="description">Description:</Label>
            <Input
              type="text"
              id="description"
              name="description"
              value={currentProduct.description}
              onChange={handleInputChange}
              maxLength={200}
            />
          </FormField>
          <FormField>
            <Label htmlFor="price">Price:</Label>
            <Input
              type="number"
              id="price"
              name="price"
              value={currentProduct.price}
              onChange={handleInputChange}
              min={0}
            />
          </FormField>
          <FormField>
            <Label htmlFor="image">Image:</Label>
            <Input
              type="text"
              id="image"
              name="image"
              value={currentProduct.image}
              onChange={handleInputChange}
            />
          </FormField>
          <SaveButton type="submit" disabled={!isValid}>
            Save
          </SaveButton>
        </DetailsForm>
      )}
    </Container>
  );
};