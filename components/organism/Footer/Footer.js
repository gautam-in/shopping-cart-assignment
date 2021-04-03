import Link from "next/link";
import { useRouter } from "next/router";
export default function Footer({totalItemsInCart,currentLogedInUser,actions}) {
const router = useRouter()
    return (
        <div className="footer">
            <p>Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt.Ltd</p>
        </div>
    )
    
}