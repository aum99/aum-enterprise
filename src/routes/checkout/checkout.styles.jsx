import { Fragment } from "react";
import { styled } from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const DeliveryInfoContainer = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const OrderSummaryContainer = styled.div`
  width: 40%;
  max-height: 80vh;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const ItemsContainer = styled.div`
  overflow: scroll;
`;

export const Header = styled.span`
  width: 100%;
  font-size: medium;
  font-weight: 600;
  margin: 5px 15px;
  margin-bottom: 20px;
`;

export const InfoInput = styled.input`
  width: 45%;
  height: 40px;
  padding-left: 10px;
  margin: 5px;
  border: 1px solid black;
  @media (max-width: 1080px) {
    width: 100%;
    margin: 5px 15px;
    height: 10%;
  }
`;

export const AddressInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  margin: 5px 15px;
  border: 1px solid black;
  @media (max-width: 1080px) {
    height: 10%;
  }
`;

export const SubAddressContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-between;
  width: 100%;
  margin: 0 10px;
`;

export const SubAddressInput = styled.input`
  height: 40px;
  padding-left: 10px;
  flex-grow: 1;
  margin: 0 5px;
  margin-top: 5px;
  border: 1px solid black;
  @media (max-width: 1080px) {
    height: 30%;
  }
`;

export const CartTotal = styled.div`
  width: 100%;
  border-top: 1px solid black;
  padding-top: 10px;
  text-align: end;
  font-weight: 900;
`;
