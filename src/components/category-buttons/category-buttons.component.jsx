import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import {
  CategoryButtonsContainer,
  CategoryButton,
} from "./category-buttons.styles";

const CategoryButtons = () => {
  const categories = useSelector(selectCategoriesMap);
  return (
    <CategoryButtonsContainer>
      {Object.keys(categories).map((title) => (
        <CategoryButton to={`/products/${title}`} key={title}>
          {title}
        </CategoryButton>
      ))}
    </CategoryButtonsContainer>
  );
};

export default CategoryButtons;
