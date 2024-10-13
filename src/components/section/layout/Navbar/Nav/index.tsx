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
    <nav>
      <ul>
        {navLinks.map(({ label, path }) => (
          <li key={label}>
            <a href={path}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
