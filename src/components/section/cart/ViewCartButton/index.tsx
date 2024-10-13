import { useState } from "react";
import { Button, Drawer } from "../../../lib";

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
      {showDrawer ? (
        <Drawer onClose={toggleShowDrawer}>
          <div>title</div>
          <div>content</div>
        </Drawer>
      ) : null}
    </>
  );
}
