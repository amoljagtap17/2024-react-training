import { Container, Logo } from "../../../lib";
import { Nav } from "./Nav";
import styles from "./Navbar.module.less";

export function Navbar() {
  return (
    <Container>
      <div className={styles.Navbar__root}>
        <Logo />
        <Nav />
      </div>
    </Container>
  );
}
