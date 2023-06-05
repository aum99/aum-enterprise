import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: space-between;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 90px;
  z-index: 5;
`;

export const ProductsContainer = styled.div`
  margin: 5px;
  height: 75%;
  /* border: 1px solid black; */
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
