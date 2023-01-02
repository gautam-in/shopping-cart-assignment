import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { useNavigate } from "react-router"
import { HOME_PAGE } from "../../constants/routes"
import { THEME_COLOR } from "../../constants/colors"
import "./index.scss"
import { CartContext } from "../../context/cart"
import { AuthContext } from "../../context/auth"

type Props = {}

export const Header = (props: Props) => {
  const [imgSrc, setImgSrc] = useState("")
  const navigate = useNavigate()
  const { setIsCartDisplayed } = useContext(CartContext)
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext)
  useEffect(() => {
    if (window.innerWidth < 701) setImgSrc("/static/images/logo.png")
    else setImgSrc("/static/images/logo_2x.png")
  }, [])

  return (
    <header className="header">
      <div className="header-content">
        <img
          role={"button"}
          tabIndex={0}
          className="logo"
          src={imgSrc}
          alt=""
          onClick={(_) => navigate(HOME_PAGE)}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            className="cart"
            onClick={(_) => {
              setIsCartDisplayed(true)
            }}
          >
            <FontAwesomeIcon
              color={THEME_COLOR}
              icon={solid("shopping-cart")}
              size="2xl"
            />
          </button>
          {isUserLoggedIn ? (
            <div
              role="button"
              style={{
                color: THEME_COLOR,
                margin: "0 20px",
                cursor: "pointer",
              }}
              onClick={(_) => setIsUserLoggedIn(!isUserLoggedIn)}
            >
              Logout
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}
