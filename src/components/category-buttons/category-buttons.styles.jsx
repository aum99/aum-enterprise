import { styled } from "styled-components";
import { Link } from "react-router-dom";

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
