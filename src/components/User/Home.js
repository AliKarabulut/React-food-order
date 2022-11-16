import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import styles from "./Button.module.css";

const menu = [
  {
    name: "Profilim",
    icon: <PersonIcon />,
  },
  {
    name: "Siparişlerim",
    icon: <ShoppingBasketIcon />,
  },
  {
    name: "Çıkış",
    icon: <LogoutIcon />,
    func: "onLogout",
  },
];

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [func, setIsFunc] = useState(false);

  const log = (props) => {
    if (props === "onLogout") {
      setIsFunc(true);
    }
  };

  if (func === true) {
    props.onLogout();
  }

  const MenuButton = (props) => {
    return (
      <button
        className={styles["dropdown-button"]}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => log(props.func)}
      >
        <span className={styles["dropdown-icon"]}>{props.icon}</span>
        <span className={styles["dropdown-span"]}>{props.name}</span>
      </button>
    );
  };

  return (
    <div className={styles["home"]}>
      <button
        className={styles["menu-button"]}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <PersonIcon className={styles["menu-icon"]} />
        <span className={styles["menu-name"]}>Hesabım</span>
      </button>
      <div
        className={
          styles["dropdown-child"] +
          " " +
          styles[`drop${isOpen ? "-show" : "-hid"}`]
        }
      >
        {menu.map((menuItem) => {
          return (
            <MenuButton
              key={menuItem.func}
              icon={menuItem.icon}
              name={menuItem.name}
              func={menuItem.func}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
