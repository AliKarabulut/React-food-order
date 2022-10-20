import { Fragment } from "react";
import HeaderButton from "./HeaderButton";
import foodPic from "../../assets/food.jpg";
import styles from "./Header.module.css";
import User from "../User/User";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Lezzetler</h1>
        <div className={styles.user}>
          <User></User>
          <HeaderButton />
        </div>
      </header>
      <div className={styles["main-image"]}>
        <img src={foodPic} alt="Foods" />
      </div>
    </Fragment>
  );
};

export default Header;
