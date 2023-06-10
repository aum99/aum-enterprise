import { styled } from "styled-components";

export const ProductCardContainer = styled.div`
  width: 280px;
  height: 350px;
  /* margin: 10px 0; */
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  /* box-sizing: border-box; */
  img {
    width: 270px;
    height: 60%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 10px;
  }
  @media (max-width: 655px) {
    width: 160px;
    height: 230px;
    margin: 10px 0;
    img {
      width: 150px;
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.span`
  font-size: large;
  font-weight: 600;
  @media (max-width: 655px) {
    font-size: small;
  }
`;

export const Price = styled.span`
  font-size: large;
  font-weight: 600;
  margin-right: 10px;
  @media (max-width: 655px) {
    font-size: small;
  }
`;

export const ProductDescription = styled.span`
  font-size: medium;
  display: flex;
  margin: 10px 0;
  @media (max-width: 655px) {
    font-size: x-small;
  }
`;

export const AddButton = styled.button`
  background-color: #000000;
  display: flex;
  margin-top: 8px;
  color: #ffffff;
  padding: 15px 25px;
  border-radius: 25px;
  justify-content: center;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid;
  }
`;
