import { styled } from "styled-components";

export const ProductCardContainer = styled.div`
  width: 280px;
  height: 350px;
  margin: 10px 0;
  /* border: 2px solid; */
  padding: 5px;
  /* border-radius: 20px; */
  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 10px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.span`
  font-size: large;
  font-weight: 600;
`;

export const Price = styled.span`
  font-size: large;
  font-weight: 600;
`;

export const ProductDescription = styled.span`
  font-size: medium;
  display: flex;
  margin: 10px 0;
`;

export const ProductRating = styled.span`
  font-size: medium;
  display: flex;
  font-weight: 300;
  margin: 10px 0;
`;

export const AddButton = styled.button`
  background-color: #000000;
  display: flex;
  margin-top: 8px;
  color: #ffffff;
  padding: 15px 25px;
  border-radius: 25px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid;
  }
`;
