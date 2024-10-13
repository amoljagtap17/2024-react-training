import styles from "./App.module.less";
import { Container } from "./components/lib";
import { Home } from "./components/pages";

export function App() {
  return (
    <div className={styles.App__root}>
      <Container>
        <Home />
      </Container>
    </div>
  );
}
