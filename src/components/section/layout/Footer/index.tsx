import styles from "./Footer.module.less";

export function Footer() {
  return (
    <footer className={styles.Footer__root}>
      <div className={styles.Footer__content}>
        <div>&copy; {new Date().toLocaleDateString()}</div>
        <div>React Training</div>
      </div>
    </footer>
  );
}
