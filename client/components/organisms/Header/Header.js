import React, { useState } from "react";
import HeaderLogo from "../../atoms/HeaderLogo/HeaderLogo";
import NavigationLinks from "../../molecules/NavigationLinks/NavigationLinks";
import CartButton from "../../molecules/CartButton/CartButton";
import EntryAccessButton from "../../atoms/EntryAccessButton";
import Modal from "../../molecules/Modal/Modal";

import "./Header.scss";
import { useSelector } from "react-redux";

import Cart from "../../molecules/Cart/Cart";
import { useHistory } from "react-router";

function Header({ isMobile, isDesktop }) {
  const history = useHistory();
  const itemsCount = useSelector((state) => state.addItems.itemsCount);

  const [showModal, setShowModal] = useState(false);

  return (
    <header>
      <HeaderLogo />

      <div className="width_full">
        {isMobile && (
          <div className="entry_access">
            <EntryAccessButton linkTo="/login">SignIn</EntryAccessButton>
            <EntryAccessButton linkTo="/register">Register</EntryAccessButton>
          </div>
        )}

        <div className="header_content_alignment">
          {isMobile && <NavigationLinks />}
          <CartButton
            handleOpen={() => {
              if (isDesktop) setShowModal(true);
              else history.push("/cart");
            }}
          />
          {/* {showModal && ( */}
          <Modal
            isOpen={showModal}
            handleClose={() => setShowModal(false)}
            title={`My Cart ${itemsCount}`}
          >
            <Cart />
          </Modal>
          {/* )} */}
        </div>
      </div>
    </header>
  );
}

export default Header;
