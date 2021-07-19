import * as React from "react";

function LogoIcon(props) {
  return <div style={{paddingBottom:"5px",cursor:"pointer"}}>
    <img {...props} />
  </div>;
}

export default LogoIcon;
