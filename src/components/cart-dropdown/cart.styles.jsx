import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const CartDropdownContainer = styled.div`
  position: absolute;
  background-color: #ffffff;
  top: 12%;
  right: 8%;
  height: 48%;
  width: 18%;
  border: 1px solid black;
`;

export const ProductsContainer = styled.div`
  margin: 15px 20px;
  height: 75%;
  border: 1px solid black;
  overflow: scroll;
`;

export const CheckoutButton = styled(Link)`
  border: 1px solid black;
  background-color: #000000;
  color: #ffffff;
  padding: 10px 12px;
  margin: 5px 20px;
  display: grid;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
`;
