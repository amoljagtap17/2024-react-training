import styles from "./Link.module.less";

interface ILinkProps {
  href: string;
  label: string;
}

export function Link({ href, label }: ILinkProps) {
  return (
    <a href={href} className={styles.Link__root}>
      {label}
    </a>
  );
}
