import { useContext } from "react"
import { AuthContext } from "../../context/auth"

type Props = {}

export const Login = (props: Props) => {
  const { setIsUserLoggedIn } = useContext(AuthContext)
  return <div onClick={(_) => setIsUserLoggedIn(true)}>login</div>
}
