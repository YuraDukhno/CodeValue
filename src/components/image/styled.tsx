import { styled } from "styled-components";

export const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PlaceholderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  font-size: 12px;
`;