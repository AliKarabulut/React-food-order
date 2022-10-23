import { Fragment, useState } from "react";
import styles from "./User.module.css";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
const User = () => {
  const [register, setRegister] = useState(false);

  const registerHandler = () =>{
    setRegister(true)
  }

  return <Fragment><UserLogin></UserLogin></Fragment>;
};

export default User;
