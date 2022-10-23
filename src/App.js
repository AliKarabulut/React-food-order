import { Fragment, useEffect, useState } from "react";
import Header from "./components/Layout/Header";
import AuthContext from "./components/Store/auth-context";
import Login from "./components/User/Login";
import Home from "./components/User/Home";
import UserLogin from "./components/User/UserLogin";
import Card from "./components/UI/Card";
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
    localStorage.setItem("isLoggedIn", "1");
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
    <AuthContext.Provider>
      <Header>
        <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {(isLoggedIn && Signin) &&  <Home onLogout={logoutHandler} />}
        </main>
      </Header>
      {!isLoggedIn2 && <Card><p>adsassd</p><br /><p>adsassd</p></Card>}
      {isLoggedIn2 && <UserLogin onSignin ={signInHandler}></UserLogin>}
    </AuthContext.Provider>
  );
}

export default App;
