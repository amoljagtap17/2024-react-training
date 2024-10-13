import { Button, Link } from "../../../../lib";
import styles from "./Nav.module.less";

const navLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/admin",
    label: "Admin",
  },
];

export function Nav() {
  const listItems = navLinks.map(({ label, path }) => (
    <li key={label}>
      <Link href={path}>{label}</Link>
    </li>
  ));

  return (
    <nav className={styles.Nav__root}>
      <ul className={styles.Nav__nav}>{listItems}</ul>
      <Button variant="contained" onClick={() => {}}>
        View Cart
      </Button>
    </nav>
  );
}
