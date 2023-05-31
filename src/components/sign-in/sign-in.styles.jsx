import { styled } from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  width: 35%;
  box-sizing: border-box;
  border-top: 10px solid red;
  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const InputBox = styled.input`
  height: 40px;
  width: 100%;
  margin: 5px 0;
  box-sizing: border-box;
  padding-left: 10px;
  border: 1px solid black;
`;

export const Header = styled.p`
  margin: 20px;
  margin-bottom: 0;
  font-size: x-large;
  text-align: center;
  font-weight: 800;
`;

export const Info = styled.p`
  margin: 20px;
  text-align: center;
  font-size: small;
`;

export const SignInButton = styled.button`
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

export const OrDivider = styled.p`
  font-size: larger;
  text-align: center;
  font-weight: 600;
`;

export const SignInGoogleButton = styled.button`
  background-color: #4285f4;
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
