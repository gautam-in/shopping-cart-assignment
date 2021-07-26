import { Typography } from "@material-ui/core";
import { footerText } from "../../constants";

const AppFooter = () => {
    return <footer className="footer-container">
        <Typography className="text-style">{footerText}</Typography>
    </footer>
}

export default AppFooter;