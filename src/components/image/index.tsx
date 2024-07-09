import React from "react";
import { ImageContainer, PlaceholderText } from "./styled";
import { styled } from "styled-components";

interface ProductImageProps {
  src?: string;
  alt?: string;
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <ImageContainer>
      {src ? (
        <Image src={src} alt={alt} />
      ) : (
        <PlaceholderText>50x50</PlaceholderText>
      )}
    </ImageContainer>
  );
};
