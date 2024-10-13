import styles from "./Logo.module.less";

interface ILogoProps {
  name?: string;
}

export function Logo({ name = "AJ" }: ILogoProps) {
  return <span className={styles.Logo__root}>{name}</span>;
}
