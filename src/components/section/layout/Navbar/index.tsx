import { Logo } from "../../../lib";
import styles from "./Navbar.module.less";

export function Navbar() {
  return (
    <div className={styles.Navbar__root}>
      <Logo />
    </div>
  );
}
