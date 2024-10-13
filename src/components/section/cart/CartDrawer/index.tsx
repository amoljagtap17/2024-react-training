import { Button, Drawer } from "../../../lib";
import styles from "./CartDrawer.module.less";

interface ICartDrawerProps {
  onClose: () => void;
}

export function CartDrawer({ onClose }: ICartDrawerProps) {
  return (
    <Drawer onClose={onClose}>
      <div className={styles.CartDrawer__root}>
        <div className={styles.CartDrawer__close} onClick={onClose}>
          &#x2716;
        </div>
        <div className={styles.CartDrawer__title}>Cart Items</div>
        <div className={styles.CartDrawer__content}>content</div>
        <div className={styles.CartDrawer__actions}>
          <Button variant="contained" onClick={() => {}}>
            Checkout
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Drawer>
  );
}
