import React from "react"
import { Footer } from "../layout/footer"
import { Header } from "../layout/header"

interface Props {
  Component: React.FC
}

const PrivateRoute: React.FC<Props> = ({ Component }) => {
  return (
    <div style={{ position: "relative" }}>
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
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default PrivateRoute
