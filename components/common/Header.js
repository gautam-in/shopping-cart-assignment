import Link from "next/link";
import { useRouter } from "next/router";
export default function Header({totalItemsInCart,currentLogedInUser,actions}) {
const router = useRouter()
    return (
        <div className="header">
            <div className="header-content">
                <div>
                <img className="logo"  src="../static/images/logo2x.png"
                    srcset="../static/images/logo.png 480w"/>
                </div>
                <div className="header-nav">
                {currentLogedInUser && 
                        <p>
                            Logged in  as {currentLogedInUser}
                        </p>}
                    <nav>
                        <Link  href={{pathname:"/"}}>
                            <a className="header-nav-link">
                                Home
                            </a>
                        </Link>
                        <Link href={{pathname:"/products"}}>
                            <a className="header-nav-link">
                                Product
                            </a>
                        </Link>
                    </nav> 
                </div>
                <div className="header-cart">
                <div className="header-login">
                    {!currentLogedInUser &&
                    <>
                            <Link  href={{pathname:"/login"}}>
                                <a className="header-nav-link">
                                    SignIn
                                </a>
                            </Link>
                            <Link href={{pathname:"/signup"}}>
                                <a className="header-nav-link">
                                    Register
                                </a>
                            </Link>
                    </>}

                        {currentLogedInUser &&
                        <button className="logout" 
                        onClick={async()=>{
                            await actions.logout()
                            router.push({
                                pathname:"/login"
                            })  
                        }}>
                        Logout
                        </button>}
                </div>
                <div onClick={()=>actions.toggleCart()} className="cart">
                    <img  src='../static/images/cart.svg' width={30}/>
                    <p >{totalItemsInCart||0} items</p>
                </div>
                </div>
            </div>
        </div>
    )
    
}