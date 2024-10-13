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
  return (
    <nav className={styles.Nav__root}>
      <ul className={styles.Nav__nav}>
        {navLinks.map(({ label, path }) => (
          <li key={label}>
            <Link href={path} label={label} />
          </li>
        ))}
      </ul>
      <Button variant="contained">View Cart</Button>
    </nav>
  );
}
