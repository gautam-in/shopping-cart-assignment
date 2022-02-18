import React from 'react';

const Loading = ({name}) => {
  const divStyle = {
    width:"100%",
    margin: "auto"
  }

  const textStyle = {
    "fonSize":"3rem",
    "fontWeight": "800"
  }

  return(
    <div className="Loader" style={divStyle}>
      <h1 style={textStyle}>Loading {name} page ..... </h1>
    </div>
  );
};

export default Loading;