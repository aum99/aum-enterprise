import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  SignUpContainer,
  Header,
  Info,
  InputBox,
  SignUpButton,
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
      // dispatch(signUpStart(email, password, name,number))
      resetFormFields();
    } catch (err) {
      alert("Failed to sign up, ", err.message);
    }
  };
  return (
    <SignUpContainer>
      <Header>Sign Up</Header>
      <Info>Get started with registering for your account</Info>
      <form onSubmit={HandleSubmit}>
        <InputBox
          type="text"
          name="username"
          id="username"
          placeholder="Name"
          onChange={HandleChange}
          required
        ></InputBox>
        <InputBox
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={HandleChange}
          required
        ></InputBox>
        <InputBox
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          onChange={HandleChange}
          required
        ></InputBox>
        <InputBox
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={HandleChange}
          required
        ></InputBox>
        <InputBox
          type="password"
          name="cpassword"
          id="cpassword"
          placeholder="Confirm Password"
          onChange={HandleChange}
          required
        ></InputBox>
        <SignUpButton type="submit">Sign Up</SignUpButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
