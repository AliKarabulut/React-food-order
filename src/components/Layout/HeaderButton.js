import styles from "./HeaderButton.module.css";

const HeaderButton = () => {
  return (
    <button className={styles.button}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="10" cy="20.5" r="1" />
        <circle cx="18" cy="20.5" r="1" />
        <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
      </svg>
      Sepetim
      <span className={styles.item}>31</span>
      {/* <User></User> */}
    </button>
  );
};

export default HeaderButton;