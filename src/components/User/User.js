import { Fragment, useState } from "react";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
const User = (props) => {
  const [register, setRegister] = useState(true);

  const registerHandler = () => {
    setRegister(!register);
  };

  return (
    <Fragment>
      {register && (
        <UserLogin
          onClicked={registerHandler}
          onSignin={props.onSignin}
          onClose={props.onClose}
        ></UserLogin>
      )}
      {!register && (
        <UserRegister
          onClicked={registerHandler}
          onSignin={props.onSignin}
          onClose={props.onClose}
        ></UserRegister>
      )}
    </Fragment>
  );
};

export default User;
