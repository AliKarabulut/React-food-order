
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LogoutIcon from "@mui/icons-material/Logout";

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from "@mui/icons-material/Person";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styles from './Button.module.css'


const Button = props => {

    // const MenuButton = (icon,name) =>{
    // }

    return(
        <button className={styles["menu-button"]}>
        <span className={styles["button-icon"]}>{props.icon}</span>
        <span className={styles["button-name"]}>{props.name}</span>
    </button>
    )
}

export default Button