import { useState } from "react";
import { useDispatch } from "react-redux";

import { signInStart } from "../../store/user/user.action";

import {
  Container,
  SignInContainer,
  Header,
  Info,
  InputBox,
  SignInButton,
  OrDivider,
  SignInGoogleButton,
  AlternateSpan,
  SignUp,
} from "./sign-in.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart(email, password));
      resetFormFields();
    } catch (err) {
      alert("Failed to sign in user, ", err.message);
    }
  };
  return (
    <Container>
      <SignInContainer>
        <Header>Hi there!</Header>
        <Info>Login to explore our wide range of products</Info>
        <form onSubmit={HandleSubmit}>
          <InputBox
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={HandleChange}
            required
          ></InputBox>
          <InputBox
            type="password"
            name="password"
            value={password}
            onChange={HandleChange}
            placeholder="Password"
            required
          ></InputBox>
          <SignInButton type="submit">SIGN IN</SignInButton>
        </form>
        <OrDivider>OR</OrDivider>
        <SignInGoogleButton>GOOGLE SIGN IN</SignInGoogleButton>
        <AlternateSpan>
          Do not have an accout?{" "}
          <SignUp to="/sign-up">Create an account</SignUp>
        </AlternateSpan>
      </SignInContainer>
    </Container>
  );
};

export default SignIn;
