import { useState } from "react";
import { Button } from "../../../lib";
import { CartDrawer } from "../CartDrawer";

export function ViewCartButton() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleShowDrawer = () => {
    setShowDrawer((prevShowDrawer) => !prevShowDrawer);
  };

  return (
    <>
      <Button variant="primary" onClick={toggleShowDrawer}>
        View Cart
      </Button>
      {showDrawer ? <CartDrawer onClose={toggleShowDrawer} /> : null}
    </>
  );
}
