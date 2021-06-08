import React,{useEffect,Fragment} from "react";
import {withRouter} from "react-router-dom";

function ScrollToTop ( {history,children} ) {
  useEffect( () => {
    const unlisten = history.listen( () => {
      if( history.location.pathname.includes( "/confirmation" ) || history.location.pathname.includes( "/followup" ) || history.location.pathname.includes( "/account" ) || history.location.pathname.includes( "/consultationconfirmation" )) window.scrollTo( 0,500 );
      else window.scrollTo( 0,0 );
    } );
    return () => {
      unlisten();
    };
  },[] );

  return <Fragment>{children}</Fragment>;
}

export default withRouter( ScrollToTop );
