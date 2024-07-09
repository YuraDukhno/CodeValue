import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import type { Product as ProductType } from "../../../types";
import { Product } from "../single-product";
import { Container, SearchInput, SortSelect } from "./styled";

export const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<keyof ProductType | "">("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      (product.description &&
        product.description.toLowerCase().includes(search.toLowerCase()))
  );

  const sortedProducts = sortKey
    ? [...filteredProducts].sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];
        const isValuesExist = aValue && bValue;
        if (isValuesExist && aValue < bValue) return -1;
        if (isValuesExist && aValue > bValue) return 1;
        return 0;
      })
    : filteredProducts;

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SortSelect
        value={sortKey}
        onChange={(e) => setSortKey(e.target.value as keyof ProductType)}
      >
        <option value="">Sort By...</option>
        <option value="name">Name</option>
        <option value="creationDate">Creation Date</option>
      </SortSelect>
      {sortedProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};
