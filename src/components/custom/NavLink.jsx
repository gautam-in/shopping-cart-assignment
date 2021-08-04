import { memo } from "react"
import { Link } from "react-router-dom"

const CustomLink = ({to,children,onClick}) => {
    return <Link className="link-style" onClick={onClick} to={to}>{children}</Link>
}

export default memo(CustomLink)