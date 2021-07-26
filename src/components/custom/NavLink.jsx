import { Link } from "react-router-dom"

const CustomLink = ({to,children}) => {
    return <Link className="link-style" to={to}>{children}</Link>
}

export default CustomLink