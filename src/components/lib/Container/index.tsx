import { ReactElement } from "react";
import styles from "./Container.module.less";

interface IContainerProps {
  children: ReactElement;
}

export function Container({ children }: IContainerProps) {
  return <div className={styles.Container__root}>{children}</div>;
}
