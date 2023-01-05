import { useContext } from "react"
import { THEME_COLOR } from "../../constants/colors"
import { AuthContext } from "../../context/auth"

type Props = {}

const Login = (props: Props) => {
  const { setIsUserLoggedIn } = useContext(AuthContext)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "80%",
        margin: "auto",
        alignItems: "flex-start",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <div
        style={{
          flexBasis: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Login</h1>
          <p style={{ paddingTop: "25px" }}>
            Get access to your Orders, Wishlist and Recommendations
          </p>
        </div>
      </div>
      <div style={{ flexBasis: "60%" }}>
        <form
          onSubmit={(_) => {
            _.preventDefault()
            _.stopPropagation()
            setIsUserLoggedIn(true)
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 5,
              marginBottom: 10,
            }}
          >
            <label aria-label="Email" htmlFor="login-email">
              Email
            </label>
            <input
              id="login-email"
              style={{
                width: "60%",
                border: "none",
                borderBottom: "1px solid #ddd",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 5,
              marginBottom: 10,
            }}
          >
            <label aria-label="Password" htmlFor="login-password">
              Password
            </label>
            <input
              id="login-password"
              style={{
                width: "60%",
                border: "none",
                borderBottom: "1px solid #ddd",
              }}
            />
          </div>

          <div
            role="button"
            style={{
              width: "60%",
              color: "white",
              backgroundColor: THEME_COLOR,
              marginTop: "20px",
              padding: "10px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={(_) => setIsUserLoggedIn(true)}
          >
            Login
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
