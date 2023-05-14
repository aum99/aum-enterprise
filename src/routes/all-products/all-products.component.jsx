import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import ProductCard from "../../components/product-card/product-card.component";
import CategoryButtons from "../../components/category-buttons/category-buttons.component";

import {
  CategoryButton,
  CategoryButtonsContainer,
  ProductsContainer,
} from "./all-products.styles";
import { Fragment } from "react";

const AllProducts = () => {
  const categories = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      <CategoryButtons />
      <ProductsContainer>
        {Object.keys(categories).map((title) => {
          const products = categories[title];
          return products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ));
        })}
      </ProductsContainer>
    </Fragment>
  );
};

export default AllProducts;
