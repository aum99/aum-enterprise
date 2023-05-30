import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CartItem from "../../components/cart-item/cart-item.component";

import {
  CheckoutContainer,
  DeliveryInfoContainer,
  Header,
  OrderSummaryContainer,
  ItemsContainer,
  InfoInput,
  AddressInput,
  SubAddressInput,
  SubAddressContainer,
  CartTotal,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  console.log(cartItems);
  return (
    <CheckoutContainer>
      <DeliveryInfoContainer>
        <Header>Delivery Information</Header>
        <InfoInput
          type="text"
          placeholder="First Name"
          name="fname"
          id="fname"
          required
        ></InfoInput>
        <InfoInput
          type="text"
          placeholder="Last Name"
          name="lname"
          id="lname"
          required
        ></InfoInput>
        <InfoInput
          type="text"
          placeholder="Mobile Number"
          name="phone"
          id="phone"
          required
        ></InfoInput>
        <InfoInput
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          required
        ></InfoInput>
        <AddressInput
          type="text"
          placeholder="Address"
          name="address"
          id="address"
          required
        ></AddressInput>
        <SubAddressContainer>
          <SubAddressInput
            type="text"
            placeholder="City"
            name="city"
            id="city"
            required
          ></SubAddressInput>
          <SubAddressInput
            type="text"
            placeholder="State"
            name="state"
            id="state"
            required
          ></SubAddressInput>
          <SubAddressInput
            type="text"
            placeholder="Zip Code"
            name="zip"
            id="zip"
            required
          ></SubAddressInput>
        </SubAddressContainer>
      </DeliveryInfoContainer>
      <OrderSummaryContainer>
        <Header>Order Summary</Header>
        <ItemsContainer>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem}></CartItem>
          ))}
        </ItemsContainer>
        <CartTotal>Rs. {total}</CartTotal>
      </OrderSummaryContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
