import { useEffect } from "react";
import { useDispatch } from "react-redux";

// import SHOP_DATA from "../../shopData";
// import { addCollectionsAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesStart } from "../../store/categories/categories.action";
const Categories = () => {
  // useEffect(() => {
  //   addCollectionsAndDocuments("categories", SHOP_DATA);
  // }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return <div>Categories</div>;
};

export default Categories;
