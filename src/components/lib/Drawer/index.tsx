import { createPortal } from "react-dom";

export function Drawer() {
  return createPortal(
    <div>drawer</div>,
    document.querySelector("#drawer-root")!
  );
}
