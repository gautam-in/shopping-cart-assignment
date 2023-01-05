import { useContext } from "react"
import { THEME_COLOR } from "../../constants/colors"
import { AuthContext } from "../../context/auth"

type Props = {}

const Signup = (props: Props) => {
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
          <h1>Signup</h1>
          <p style={{ paddingTop: "25px" }}>
            We do not share personal details with anyone.
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
            <label htmlFor="signup-first-name">First Name</label>
            <input
              id="signup-first-name"
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
            <label htmlFor="signup-last-name">Last Name</label>
            <input
              id="signup-last-name"
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
            <label htmlFor="signup-email">Email</label>
            <input
              id="signup-email"
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
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
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
            <label htmlFor="signup-confirm-password">Confirm Password</label>
            <input
              id="signup-confirm-password"
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
              padding: "10px 0",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={(_) => setIsUserLoggedIn(true)}
          >
            Signup
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
