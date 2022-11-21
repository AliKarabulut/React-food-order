import Card from "../UI/Card";
import Modal from "../UI/Modal";
import styles from "./UserLogin.module.css";
import loginReg from "../../assets/Register.png";
const UserRegister = (props) => {
  const termsHandler = () => {
    props.onSignin(true);
  };

  return (
    <Modal onClose={props.onClose}>
      <Card className={styles.wrapper}>
        <div className={styles.left}>
          <img src={loginReg} alt="" className={styles.img} />
          <div onClick={props.onClicked}>Create an account</div>
        </div>
        <div className={styles.right}>
          <div className={styles.login}>
            <form action="" onSubmit={termsHandler}>
              <h2>Sign up</h2>
              <input
                className={styles.epass}
                type="text"
                pattern="[A-Za-z]*"
                title="Sadece harf"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
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
                minlength="8"
                maxLength="16"
                id=""
                placeholder="Password"
                required
              />
              <input
                className={styles.epass}
                type="password"
                name="password"
                minlength="8"
                maxLength="16"
                id=""
                placeholder="Repeat your password"
                required
              />
              <div className={styles.remember}>
                <input type="checkbox" name="Agree" id="rememberMe" required />
                <label htmlFor="Agree">
                  I agree all statements in <a href="">Terms of service</a>
                </label>
              </div>
              <button type="submit" className={styles.button}>
                Register
              </button>
            </form>
          </div>
        </div>
      </Card>
    </Modal>
  );
};

export default UserRegister;
