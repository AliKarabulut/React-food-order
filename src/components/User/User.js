import { Fragment, useState } from "react";
import styles from "./User.module.css";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
const User = (props) => {
  const [register, setRegister] = useState(true);

  const registerHandler = () => {
    setRegister(!register);
  };


  return (
    <Fragment>
      {register && <UserLogin onClicked={registerHandler} onSignin ={props.onSignin}></UserLogin>}
      {!register && <UserRegister onClicked={registerHandler} onSignin ={props.onSignin}></UserRegister>}
    </Fragment>
  );
};

export default User;
