import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1390px) {
    justify-content: space-between;
  }
  @media (max-width: 595px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 1324px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const CategoryButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CategoryButton = styled(Link)`
  padding: 10px;
  color: #000000;
  border: 2px solid black;
  margin: 10px;
  text-decoration: none;
  @media (max-width: 687px) {
    font-size: smaller;
  }
`;
