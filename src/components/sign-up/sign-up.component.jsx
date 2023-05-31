import {
  SignUpContainer,
  Header,
  Info,
  InputBox,
  SignUpButton,
} from "./sign-up.styles";

const SignUp = () => {
  return (
    <SignUpContainer>
      <Header>Sign Up</Header>
      <Info>Get started with registering for your account</Info>
      <InputBox
        type="text"
        name="username"
        id="username"
        placeholder="Name"
        required
      ></InputBox>
      <InputBox
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      ></InputBox>
      <InputBox
        type="number"
        name="phone"
        id="phone"
        placeholder="Phone Number"
        required
      ></InputBox>
      <InputBox
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
      ></InputBox>
      <InputBox
        type="password"
        name="cpassword"
        id="cpassword"
        placeholder="Confirm Password"
        required
      ></InputBox>
      <SignUpButton>Sign Up</SignUpButton>
    </SignUpContainer>
  );
};

export default SignUp;
