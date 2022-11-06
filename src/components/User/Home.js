import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LogoutIcon from "@mui/icons-material/Logout";

import styles from "./User.module.css";
const Home = (props) => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.mainmenubtn}>
        
        Hesabım
      </button> 
      <div className={styles["dropdown-child"]}>
        <a href="#">
          <PersonIcon className={styles.icons} />
          <p>Profilim</p>
        </a>
        <a href="#">
          <ShoppingBasketIcon className={styles.icons} />
          <p>Siparişlerim</p>
        </a>
        <a href="#" onClick={props.onLogout}>
          <LogoutIcon className={styles.icons} />
          <p>Çıkış yap</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
