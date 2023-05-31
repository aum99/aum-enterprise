import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

import { AuthContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <div>
      <AuthContainer>
        <SignUp />
        <SignIn />
      </AuthContainer>
    </div>
  );
};

export default Authentication;
