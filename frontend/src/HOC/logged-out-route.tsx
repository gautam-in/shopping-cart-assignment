import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { HOME_PAGE } from "../constants/routes"
import { AuthContext } from "../context/auth"
import { Footer } from "../layout/footer"
import { Header } from "../layout/header"

interface Props {
  Component: React.FC
}

const LoggedOutRoute: React.FC<Props> = ({ Component }) => {
  const { isUserLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate(HOME_PAGE)
    }
  }, [isUserLoggedIn, navigate])

  return !isUserLoggedIn ? (
    <div style={{ position: "relative", height: "100vh" }}>
      <Header />
      <div
        style={{
          width: "90%",
          margin: "0px auto",
          paddingTop: "100px",
        }}
      >
        <main>
          <Component />
        </main>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
        <Footer />
      </div>
    </div>
  ) : null
}

export default LoggedOutRoute
