import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import ProductCard from "../../components/product-card/product-card.component";

import { ProductsContainer } from "./all-products.styles";

const AllProducts = () => {
  const categories = useSelector(selectCategoriesMap);
  return (
    <ProductsContainer>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ));
      })}
    </ProductsContainer>
  );
};

export default AllProducts;
