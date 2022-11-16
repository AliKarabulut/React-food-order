import PersonIcon from "@mui/icons-material/Person";
import styles from "./Button.module.css";

const User = (props) => {
  return (
    <div className={styles["home"]}>
      <button className={styles["menu-button"]} onClick={props.onLogin}>
        <PersonIcon className={styles["menu-icon"]} />
        <span className={styles["menu-name"]}>Giriş Yap</span>
      </button>
    </div>
  );
};

export default User;
