import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Flex } from "../../atoms";
import { Footer } from "../footer";
import { NavigationBar } from "../nav";
import { CartModal } from "../../oraganisms";

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex style={{ minHeight: "100vh" }} className="root" direction="col">
      <NavigationBar onCartClick={() => setIsOpen(true)} />
      <Outlet />
      <Footer />
      <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Flex>
  );
}
