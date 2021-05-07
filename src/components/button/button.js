import React from 'react'; 

const Button = (props) =>
{
  return (
        <>
          <button type="button" className={props.className} data-testid="button">{props.name}</button>
        </>
  );
}
  
export default Button;