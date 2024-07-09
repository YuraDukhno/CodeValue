import { styled } from "styled-components";


export const Container = styled.div`
  padding: 10px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: 600px) {
    padding: 8px;
    max-width: 100%;
  }
`;

export const DetailsForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled.div`
  margin-bottom: 15px;
  display: flex;
  gap: 10px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

export const SaveButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const AddButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 12px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0b7dda;
  }
`;