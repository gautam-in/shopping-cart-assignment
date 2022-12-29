import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./header.scss";
import { useNavigate } from "react-router";
import { CART_PAGE, PRODUCT_PAGE } from "../constants/routes";

type Props = {};

export const Header = (props: Props) => {
  const [imgSrc, setImgSrc] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (window.innerWidth < 701) setImgSrc("/static/images/logo.png");
    else setImgSrc("/static/images/logo_2x.png");
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <img
          role={"button"}
          tabIndex={0}
          className="logo"
          src={imgSrc}
          alt=""
          onClick={(_) => navigate(PRODUCT_PAGE)}
        />
        <button
          className="cart"
          onClick={(_) => {
            navigate(CART_PAGE);
          }}
        >
          <FontAwesomeIcon icon={solid("shopping-cart")} size="2xl" />
        </button>
      </div>
    </header>
  );
};
