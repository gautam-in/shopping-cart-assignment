import { useRouter } from "next/router";
import styles from './footer.module.scss'
export default function Footer() {
const router = useRouter()
    return (
        <div className={styles.footer}>
            <p>Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt.Ltd</p>
        </div>
    )
    
}