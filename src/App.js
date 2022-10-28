import { Fragment, useEffect, useState } from "react";
import Header from "./components/Layout/Header";
import Login from "./components/User/Login";
import Home from "./components/User/Home";
import User from "./components/User/User";
import Meals from "./components/Meals/Meals";
// import UserRegister from "./components/User/UserRegister";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn2, setIsLoggedIn2] = useState(false);
  const [Signin, setSignin] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformatiın = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformatiın === "1") {
      setIsLoggedIn(true);
      setSignin(true)
    }
  }, []);

  const loginHandler = () => {
    setIsLoggedIn2(true)
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn2(false)
    setIsLoggedIn(false)
    setSignin(false)
  };

  const signInHandler = () =>{
    setIsLoggedIn2(false)
    setIsLoggedIn(true)
    setSignin(true)
  }

  return (
    <Fragment>
      <Header>
        <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {(isLoggedIn && Signin) &&  <Home onLogout={logoutHandler} />}
        </main>
      </Header>
      {!isLoggedIn2 && <Meals/>}
      {isLoggedIn2 && <User onSignin ={signInHandler}></User>}
      </Fragment>
  );
}

export default App;
