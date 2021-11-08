import React from "react";
import style from './footer.module.css'
const Footer = (props) => {
    const date = new Date()
    return (
        <div
            className={style.footerContainer}
        >
            <div
            className={style.footerContent}
                dangerouslySetInnerHTML={{ "__html": `Copyright &#169; 2011 - ${date.getFullYear()} Sabka Bazaar Grocery Supplies Pvt. Ltd.` }} />
        </div>
    )
}

export default Footer;