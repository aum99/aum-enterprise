import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../store/user/user.action";

import {
  Container,
  SignUpContainer,
  Header,
  Info,
  InputBox,
  SignUpButton,
  AlternateSpan,
  SignIn,
} from "./sign-up.styles";

const defaultFormFields = {
  name: "",
  email: "",
  number: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, number, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match, please try again!");
    }
    try {
      dispatch(signUpStart(email, password, name, number));
      resetFormFields();
    } catch (err) {
      alert("Failed to sign up, ", err.message);
    }
  };
  return (
    <Container>
      <SignUpContainer>
        <Header>Create an account</Header>
        <Info>Get started with registering for your account</Info>
        <form onSubmit={HandleSubmit}>
          <InputBox
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={HandleChange}
            required
          ></InputBox>
          <InputBox
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={HandleChange}
            required
          ></InputBox>
          <InputBox
            type="number"
            name="number"
            value={number}
            placeholder="Phone Number"
            onChange={HandleChange}
            required
          ></InputBox>
          <InputBox
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={HandleChange}
            required
          ></InputBox>
          <InputBox
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={HandleChange}
            required
          ></InputBox>
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </form>
        <AlternateSpan>
          Already have an account? <SignIn to="/sign-in">Log in</SignIn>
        </AlternateSpan>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;
