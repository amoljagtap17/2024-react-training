import { currentDate } from "../../../../app/utils";
import { Container } from "../../../lib";
import styles from "./Footer.module.less";

export function Footer() {
  const appVersion = import.meta.env.VITE_APP_VERSION;

  return (
    <footer className={styles.Footer__root}>
      <Container>
        <div className={styles.Footer__content}>
          <div>&copy; {currentDate()}</div>
          <div>React Training - version {appVersion}</div>
        </div>
      </Container>
    </footer>
  );
}
