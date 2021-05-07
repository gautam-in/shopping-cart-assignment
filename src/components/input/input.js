import React from 'react'; 
import "./_input.scss"
  
const Input = (props) =>
{
  return (
            <div className="label-float" data-testid="input">
            <input type={props.type} aria-describedby={props.id} 
                key={props.id}
                aria-required="true" required pattern={props.pattern} 
                title={props.title}
                onChange={(event) => props.method(event.target.value)} placeholder=" "/>
            <label htmlFor={props.id}>{props.name}</label>
          </div>
            
         );
}
  
export default Input;



