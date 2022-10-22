import Card from "../UI/Card";
import styles from "./UserLogin.module.css";
import loginPic from "../../assets/Login.png";
const UserLogin = () => {
  return (
    <Card className={styles.wrapper}>
      <div className={styles.left}>
        <img src={loginPic} alt="" className={styles.img} />
        <div>Create an account</div>
      </div>
      <div className={styles.right}>
        <div className={styles.login}>
          {" "}
          <h2>Sign in</h2>
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
          <div className={styles.remember}>
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className={styles.button}>Log in</button>
        </div>
      </div>
    </Card>
  );
};

export default UserLogin;
