import { footerText } from './footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <p className={footerText}>Copyright &copy; 2011 - 2022</p>{' '}
            <p className={footerText}>Sabka Bazaar Grocery Supplies Pvt Ltd</p>
        </footer>
    )
}


export default Footer