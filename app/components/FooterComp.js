// import React from 'react';
// import ReactDOM from 'react-dom';
// import Handlebars, { template } from 'handlebars';
// const hbr = `<div >Copyright &copy; {{years}} Sabka Bazar Grocery Supplies Pvt Ltd.</div>`;
// const temp = Handlebars.compile(hbr);
// const FooterComp = () => {
//     const data = {
//         years : "2011-2018"
//       };
//     return(
//         <div className="footer">
//             <div className="inner-footer" dangerouslySetInnerHTML={{ __html : temp(data) }}></div>
//         </div>
//     )
// }
// export default FooterComp;


import React from 'react';
import { FOOTER_TEXT } from '../constant';
const FooterComp = () => {
    return (
        <footer className="footer">
            <div className="inner-footer">
                {FOOTER_TEXT}
            </div>
        </footer>
    )
}
export default FooterComp;
