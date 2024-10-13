import { ReactElement } from "react";
import { createPortal } from "react-dom";
import styles from "./Drawer.module.less";

interface IDrawerProps {
  children: ReactElement;
  onClose: () => void;
}

export function Drawer({ children, onClose }: IDrawerProps) {
  return createPortal(
    <div className={styles.Drawer__root}>
      <div onClick={onClose} className={styles.Drawer__backdrop} />
      <div className={styles.Drawer__content}>{children}</div>
    </div>,
    document.querySelector("#drawer-root")!
  );
}
