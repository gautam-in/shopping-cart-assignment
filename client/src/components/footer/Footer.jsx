import React from 'react'

import classes from './Footer.module.css'

const Footer = () => {

    return (
        <footer className={classes.footer}>
            <p className={classes.footer__text}>
                copyright @ 2011-2018 Sabka Baazar Supplies Pvt. Ltd.
            </p>
        </footer>
    )
}

export default Footer