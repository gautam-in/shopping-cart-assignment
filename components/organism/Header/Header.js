import Link from "next/link";
import { useRouter } from "next/router";
import styles from './header.module.scss'

export default function Header({totalItemsInCart,currentLogedInUser,actions}) {
const router = useRouter()
    return (
        <header className={styles.header}>
            <div className={styles.headercontent}>
                <div>
                <img className={styles.logo}  
                    src="../static/images/logo2x.png"
                    srcSet="../static/images/logo.png 480w"/>
                </div>
                <div className={styles.headernav}>
                {currentLogedInUser && 
                        <p className={styles.logintext}>
                            Logged in  as {currentLogedInUser}
                        </p>}
                    <nav>
                        <Link  href={{pathname:"/"}}>
                            <a className={styles.headernavlink}>
                                Home
                            </a>
                        </Link>
                        <Link href={{pathname:"/products"}}>
                        <a className={styles.headernavlink}>
                                Product
                            </a>
                        </Link>
                    </nav> 
                </div>
                <div className={styles.headercart}>
                <div className={styles.headerlogin}>
                    {!currentLogedInUser &&
                    <>
                            <Link  href={{pathname:"/login"}}>
                            <a className={styles.headernavlink}>
                                    SignIn
                                </a>
                            </Link>
                            <Link href={{pathname:"/signup"}}>
                            <a className={styles.headernavlink}>
                                    Register
                                </a>
                            </Link>
                    </>}

                        {currentLogedInUser &&
                        <button className={styles.logout}
                        onClick={async()=>{
                            await actions.logout()
                            router.push({
                                pathname:"/login"
                            })  
                        }}>
                        Logout
                        </button>}
                </div>
                <button role="button" aria-label="carticon" onClick={()=>actions.toggleCart()} className={styles.carticon}>
                    <img  src='../static/images/cart.svg' width={30}/>
                    <p >{totalItemsInCart||0} items</p>
                </button>
                </div>
            </div>
        </header>
    )
    
}