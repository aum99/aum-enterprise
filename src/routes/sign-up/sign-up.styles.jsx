import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
  margin: 0 20%;
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px,
    rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px,
    rgb(255, 217, 19) 20px -20px;
  margin-top: 50px;
  @media (max-width: 950px) {
    margin: 0 10%;
    margin-top: 50px;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const Header = styled.p`
  margin: 0;
  font-size: xx-large;
  text-align: center;
  font-weight: 800;
`;

export const Info = styled.p`
  margin: 20px;
  text-align: center;
  font-size: small;
`;

export const InputBox = styled.input`
  height: 40px;
  width: 100%;
  margin: 5px 0;
  box-sizing: border-box;
  padding-left: 10px;
  border: 1px solid black;
`;

export const SignUpButton = styled.button`
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 5px 0;
  padding: 9px 20px 8px;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  box-sizing: border-box;
  width: 100%;
  touch-action: manipulation;
  &:hover,
  :focus {
    opacity: 0.75;
  }
`;

export const AlternateSpan = styled.p`
  margin: 25px;
  text-align: center;
  font-size: small;
`;

export const SignIn = styled(Link)`
  color: blue;
`;
