import styles from "./App.module.less";
import { Container, Route } from "./components/lib";
import { Admin, Home } from "./components/pages";

export function App() {
  return (
    <div className={styles.App__root}>
      <Container>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </>
      </Container>
    </div>
  );
}
