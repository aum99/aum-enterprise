import {
  SignInContainer,
  Header,
  Info,
  InputBox,
  SignInButton,
  OrDivider,
  SignInGoogleButton,
} from "./sign-in.styles";

const SignIn = () => {
  return (
    <SignInContainer>
      <Header>Sign In</Header>
      <Info>Login to explore our wide range of products</Info>
      <InputBox
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      ></InputBox>
      <InputBox
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
      ></InputBox>
      <SignInButton>SIGN IN</SignInButton>
      <OrDivider>OR</OrDivider>
      <SignInGoogleButton>GOOGLE SIGN IN</SignInGoogleButton>
    </SignInContainer>
  );
};

export default SignIn;
