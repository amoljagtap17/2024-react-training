import { Container } from "../../../lib";
import styles from "./Footer.module.less";

export function Footer() {
  return (
    <footer className={styles.Footer__root}>
      <Container>
        <div className={styles.Footer__content}>
          <div>&copy; {new Date().toDateString()}</div>
          <div>React Training</div>
        </div>
      </Container>
    </footer>
  );
}
