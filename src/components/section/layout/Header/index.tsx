import { Navbar } from "../Navbar";
import styles from "./Header.module.less";

export function Header() {
  return (
    <header className={styles.Header__root}>
      <Navbar />
    </header>
  );
}
