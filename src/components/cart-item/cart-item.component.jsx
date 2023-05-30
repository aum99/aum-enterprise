import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartItemContainer,
  ItemImage,
  ItemDescriptionContainer,
  ItemName,
  ItemInfo,
  ItemPrice,
  CartCountContainer,
  CartCountButton,
  CartCount,
} from "./cart-item.styles";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItem = () => {
    dispatch(addCartItem(cartItems, item));
  };

  const removeItem = () => {
    dispatch(removeCartItem(cartItems, item));
  };

  const { name, price, imageUrl, quantity } = item;
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt="image" />
      <ItemDescriptionContainer>
        <ItemName>{name}</ItemName>
        <ItemInfo>lorem lorem lorem lorem lorem</ItemInfo>
        <ItemPrice>{price}</ItemPrice>
      </ItemDescriptionContainer>
      <CartCountContainer>
        <CartCountButton onClick={removeItem}>-</CartCountButton>
        <CartCount>{quantity}</CartCount>
        <CartCountButton onClick={addItem}>+</CartCountButton>
      </CartCountContainer>
    </CartItemContainer>
  );
};

export default CartItem;
