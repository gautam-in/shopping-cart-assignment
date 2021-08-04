import { footerText } from "../../constants";

const AppFooter = () => {
    return <footer data-testid="footer" className="footer-container">
        <p className="text-style">{footerText}</p>
    </footer>
}

export default AppFooter;