import React from 'react';
import PropTypes from 'prop-types';

function Headings({cname,children,type}) {
  switch(type){
    case 'h1':
        return (<h1 className={`${cname}`}>{children}</h1>)
    break;

    case 'h2':
        return (<h2 className={`${cname}`}>{children}</h2>)
    break;

    case 'h3':
        return (<h3 className={`${cname}`}>{children}</h3>)
    break;

    case 'h4':
        return (<h4 className={`${cname}`}>{children}</h4>)
    break;

    case 'h5':
        return (<h5 className={`${cname}`}>{children}</h5>)
    break;

    case 'h6':
        return (<h6 className={`${cname}`}>{children}</h6>)
    break;

    default:
       return (<h1 className={`${cname}`}>{children}</h1>)
    break;
  }
}

function Heading(props){
  return <Headings {...props} />
}


Heading.propTypes = {
  cname: PropTypes.string,
};


export default Heading