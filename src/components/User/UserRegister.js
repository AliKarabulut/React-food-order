import Card from "../UI/Card";
import styles from "./UserLogin.module.css";
import loginReg from "../../assets/Register.png";
const UserRegister = (props) => {
  return (
    <Card className={styles.wrapper}>
      <div className={styles.left}>
        <img src={loginReg} alt="" className={styles.img} />
        <div onClick={props.onClicked}>Create an account</div>
      </div>
      <div className={styles.right}>
        <div className={styles.login}>
          {" "}
          <h2>Sign up</h2>
          <input
            className={styles.epass}
            type="name"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            className={styles.epass}
            type="email"
            name="email"
            id="email"
            placeholder="Mail"
          />
          <input
            className={styles.epass}
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
                    <input
            className={styles.epass}
            type="password"
            name="password"
            id=""
            placeholder="Repeat your password"
          />
          <div className={styles.remember}>
            <input type="checkbox" name="Agree" id="rememberMe" />
            <label htmlFor="Agree">I agree all statements in <a href="">Terms of service</a></label>
          </div>
          <button type="submit" className={styles.button} onClick={props.onSignin}>Register</button>
        </div>
      </div>
    </Card>
  );
};

export default UserRegister;
