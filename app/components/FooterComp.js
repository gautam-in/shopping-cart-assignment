
import React from 'react';
import { FOOTER_TEXT } from '../constant';
const FooterComp = () => {
    const getCurrentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="inner-footer">
                {FOOTER_TEXT.replace("currentYear",getCurrentYear)}
            </div>
        </footer>
    )
}
export default FooterComp;
