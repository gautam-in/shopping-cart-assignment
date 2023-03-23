import { Link } from "react-router-dom"

export const LoggedInLinks = () => (
  <>
    <li>
      <Link to="/login">SignIn</Link>
    </li>
    <li>
      <Link to="/register">Register</Link>
    </li>
  </>
)

export const LogoutLink = ({ signOut }: { signOut: () => Promise<void> }) => (
  <li>
    <Link to="/" onClick={signOut}>
      Logout
    </Link>
  </li>
)
