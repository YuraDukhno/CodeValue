import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #ff0000;
  }
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.strong`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.strong`
  font-size: 1rem;
  color: #333;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;