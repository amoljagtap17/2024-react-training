import styles from "./App.module.less";
import { Home } from "./components/pages";

export function App() {
  return (
    <div className={styles.App__root}>
      <Home />
    </div>
  );
}
