import Card from "../UI/Card";
import Modal from "../UI/Modal";
import styles from "./UserLogin.module.css";
import loginPic from "../../assets/Login.png";
const UserLogin = (props) => {

  const loginHandler = (event) => {
    if (event.target.checked) {
      localStorage.setItem("isLoggedIn", "1");
    } else {
      localStorage.setItem("isLoggedIn", "0");
    }
  };

  return (
    <Modal onClose={props.onClose}>
        <div className={styles.left}>
          <img src={loginPic} alt="" className={styles.img} />
          <div onClick={props.onClicked}>Create an account</div>
        </div>
        <div className={styles.right}>
          <div className={styles.login}>
            {" "}
            <h2>Sign in</h2>
            <form onSubmit={props.onSignin}>
              <input
                className={styles.epass}
                type="email"
                name="email"
                id="email"
                placeholder="Mail"
                required
              />
              <input
                className={styles.epass}
                type="password"
                name="password"
                id=""
                required
                placeholder="Password"
              />
              <div className={styles.remember}>
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  onChange={loginHandler}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <button type="submit" className={styles.button}>
                Log in
              </button>
            </form>
          </div>
        </div>
    </Modal>
  );
};

export default UserLogin;
