import React from 'react'
import constants from '../../config/constants'

export default function Footer() {
    return (
        <footer className = "main-footer">
            <section className="footer-section">
                { constants.FOOTER_TEXT }
           </section>
        </footer>
    )
}
