import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import CategoryButtons from "../../components/category-buttons/category-buttons.component";

import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { ProductsContainer } from "../all-products/all-products.styles";

import { HomeButton } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <HomeButton to="/products">&lt; Home</HomeButton>
      <CategoryButtons />
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </ProductsContainer>
    </Fragment>
  );
};

export default Category;
