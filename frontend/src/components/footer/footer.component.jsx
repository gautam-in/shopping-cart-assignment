import React from 'react'
import "./footer.styles.scss";

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
  return(
      <footer className='footer'>
         { `Copyright@ 2011-${year} Sabka Bazar Grocery Supplies Pvt Ltd`}
      </footer>
  )
}

export default Footer;