import styles from "./Button.module.css";

const Button = (props) => {

  return (
    <button className={styles["menu-button"]}>
      <span className={styles["button-icon"]}>{props.icon}</span>
      <span className={styles["button-name"]}>{props.name}</span>
    </button>
  );
};

export default Button;
