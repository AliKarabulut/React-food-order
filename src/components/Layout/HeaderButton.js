import { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../store/cart-context";
import styles from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  const ctx = useContext(CartContext);

  const numberItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={styles["menu-button"]} onClick={props.onClick}>
      <ShoppingCartIcon className={styles["menu-icon"]} />
      <span className={styles["menu-name"]}>Sepetim</span>
      <span className={styles.item}>{numberItems}</span>
    </button>
  );
};

export default HeaderButton;
