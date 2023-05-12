import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

// import SHOP_DATA from "../../shopData";
// import { addCollectionsAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesStart } from "../../store/categories/categories.action";

import AllProducts from "../all-products/all-products.component";
import Category from "../category/category.component";

const Products = () => {
  // useEffect(() => {
  //   addCollectionsAndDocuments("categories", SHOP_DATA);
  // }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<AllProducts />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Products;
