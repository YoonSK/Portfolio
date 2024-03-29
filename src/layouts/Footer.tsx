import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contents}>
        <p className={styles.title}>2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
