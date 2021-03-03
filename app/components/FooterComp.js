import React from 'react';
import ReactDOM from 'react-dom';
import Handlebars, { template } from 'handlebars';
const hbr = `<div >Copyright &copy; {{years}} Sabka Bazar Grocery Supplies Pvt Ltd.</div>`;
const temp = Handlebars.compile(hbr);
const FooterComp = () => {
    const data = {
        years : "2011-2018"
      };
    return(
        <div className="footer">
            {/* <div className="inner-footer">
                Copyright &copy; 2011-2018 Sabka Bazar Grocery Supplies Pvt Ltd.
            </div> */}
            <div className="inner-footer" dangerouslySetInnerHTML={{ __html : temp(data) }}></div>
        </div>
    )
}
export default FooterComp;


// import React from 'react';
// const FooterComp = () => {
//     return(
//         <div className="footer">
//             <div className="inner-footer">
//                 Copyright &copy; 2011-2018 Sabka Bazar Grocery Supplies Pvt Ltd.
//             </div>
//         </div>
//     )
// }
// export default FooterComp;
