import { useEffect, useState } from "react";
import Header from "./components/Layout/Header";
import Login from "./components/User/Login";
import Home from "./components/User/Home";
import User from "./components/User/User";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
// import UserRegister from "./components/User/UserRegister";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn2, setIsLoggedIn2] = useState(false);
  const [cartisShown, setCartisShown] = useState(false);
  const [Signin, setSignin] = useState(true);

  const showCart = () =>{
    setCartisShown(true)
  }

  const closeCart = () =>{
    setCartisShown(false)
  }


  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
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
    <CartProvider>
      {cartisShown && <Cart onClose={closeCart}/>}
      <Header onShowCart={showCart}>
        <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {(isLoggedIn && Signin) &&  <Home onLogout={logoutHandler} />}
        </main>
      </Header>
      {!isLoggedIn2 && <Meals/>}
      {isLoggedIn2 && <User onSignin ={signInHandler}></User>}
      </CartProvider>
  );
}

export default App;
