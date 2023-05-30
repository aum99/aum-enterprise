import { useDispatch, useSelector } from "react-redux";

import {
  selectIsCartOpen,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import {
  CartDropdownContainer,
  ProductsContainer,
  CheckoutButton,
} from "./cart.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const ToggleCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartDropdownContainer>
      <ProductsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => <p key={cartItem.id}>{cartItem.name}</p>)
        ) : (
          <h1>Nothing in cart yet</h1>
        )}
      </ProductsContainer>
      <CheckoutButton to="/checkout" onClick={ToggleCart}>
        Checkout
      </CheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
