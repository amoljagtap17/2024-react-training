import { lazy, Suspense } from "react";
import styles from "./App.module.less";
import { Container, Route } from "./components/lib";

const Home = lazy(() =>
  import("./components/pages").then((module) => ({ default: module.Home }))
);

const Admin = lazy(() =>
  import("./components/pages").then((module) => ({ default: module.Admin }))
);

export function App() {
  return (
    <div className={styles.App__root}>
      <Container>
        <Suspense fallback={<p>loading...</p>}>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Suspense>
      </Container>
    </div>
  );
}
