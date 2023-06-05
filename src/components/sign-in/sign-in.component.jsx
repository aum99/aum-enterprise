import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  SignInContainer,
  Header,
  Info,
  InputBox,
  SignInButton,
  OrDivider,
  SignInGoogleButton,
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
      // dispatch(emailSignInStart(email,password))
      resetFormFields();
    } catch (err) {
      alert("Failed to sign in user, ", err.message);
    }
  };
  return (
    <SignInContainer>
      <Header>Sign In</Header>
      <Info>Login to explore our wide range of products</Info>
      <form onSubmit={HandleSubmit}>
        <InputBox
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={HandleChange}
          required
        ></InputBox>
        <InputBox
          type="password"
          name="password"
          id="password"
          onChange={HandleChange}
          placeholder="Password"
          required
        ></InputBox>
        <SignInButton type="submit">SIGN IN</SignInButton>
      </form>
      <OrDivider>OR</OrDivider>
      <SignInGoogleButton>GOOGLE SIGN IN</SignInGoogleButton>
    </SignInContainer>
  );
};

export default SignIn;
