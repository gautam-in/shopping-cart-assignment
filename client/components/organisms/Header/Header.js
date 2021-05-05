import React, { useEffect, useState } from "react";
import HeaderLogo from "../../atoms/HeaderLogo/HeaderLogo";
import NavigationLinks from "../../molecules/NavigationLinks/NavigationLinks";
import CartButton from "../../molecules/CartButton/CartButton";
import EntryAccessButton from "../../atoms/EntryAccessButton";
import Modal from "../../molecules/Modal/Modal";

import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementItem,
  decrementItem,
  removeItem,
} from "client/components/redux";

function Header() {
  const mobileSize = 600;

  const itemsCount = useSelector((state) => state.addItems.itemsCount);
  const items = useSelector((state) => state.addItems.items);

  const dispatch = useDispatch();

  const [isMobile, setisMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleWindowResize = () => {
    setisMobile(window.innerWidth > mobileSize);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <header className="header_container">
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
            <CartButton handleOpen={() => setShowModal(true)} />
            {/* {showModal && ( */}
            <Modal
              isOpen={showModal}
              handleClose={() => setShowModal(false)}
              title={"My Cart " + itemsCount}
            >
              {items.map((item) => {
                return (
                  <div key={item.id} className="flexed_ai_center">
                    <img src={item.imageURL} alt={item.name} width="80" />
                    <div>
                      <div>{item.name}</div>
                      <div className="flexed">
                        <span
                          onClick={() => dispatch(incrementItem(item))}
                          className="flexed_center_all quantity_change_button noselect"
                          aria-label="Increment button"
                        >
                          +
                        </span>

                        <span>{item.quantity}</span>
                        <span
                          onClick={() => dispatch(decrementItem(item))}
                          className="flexed_center_all quantity_change_button noselect"
                          aria-label="Decrement button"
                        >
                          -
                        </span>
                        <span
                          onClick={() => dispatch(removeItem(item))}
                          aria-label="Remove item"
                        >
                          &#10006;
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Modal>
            {/* )} */}
          </div>
        </div>
      </header>
      <div className="bottom_grad"></div>
    </>
  );
}

export default Header;
