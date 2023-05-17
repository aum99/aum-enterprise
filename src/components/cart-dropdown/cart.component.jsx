import { useDispatch, useSelector } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import {
  CartDropdownContainer,
  ProductsContainer,
  CheckoutButton,
} from "./cart.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const ToggleCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartDropdownContainer>
      <ProductsContainer></ProductsContainer>
      <CheckoutButton to="/checkout" onClick={ToggleCart}>
        Checkout
      </CheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
