import {
  ProductCardContainer,
  ProductInfo,
  Name,
  Price,
  ProductDescription,
  ProductRating,
  AddButton,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductInfo>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </ProductInfo>
      <ProductDescription>Lorem ipsum desc for prod</ProductDescription>
      <ProductRating>⭐️⭐️⭐️⭐️ (120)</ProductRating>
      <AddButton>Add to Cart</AddButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
