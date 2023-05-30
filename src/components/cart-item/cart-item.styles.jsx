import { styled } from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 15px;
  margin-bottom: 20px;
`;

export const ItemImage = styled.img`
  height: 100px;
  width: 100px;
`;

export const ItemDescriptionContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled.p`
  font-size: smaller;
  margin: 5px;
  font-weight: 800;
`;
export const ItemInfo = styled.p`
  font-size: smaller;
  margin: 5px;
  font-weight: 400;
`;
export const ItemPrice = styled.p`
  font-size: smaller;
  margin: 5px;
  font-weight: 900;
`;

export const CartCountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartCountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22px;
  width: 20px;
  padding: 5px;
  border: 1px solid black;
  text-align: center;
  border: 1px 0;
  background-color: #ffffff;
  cursor: pointer;
`;

export const CartCount = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  padding: 2px;
  font-size: small;
  width: 30px;
  border: 1px solid black;
  border-left: 0;
  border-right: 0;
`;
