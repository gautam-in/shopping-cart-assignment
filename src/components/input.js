import React from 'react'; 
  
const Input = (props) =>
{
  return (
            <div className="form-group">
                <label for={props.id} className="bmd-label-floating">{props.name}</label>
                <input type={props.type} className="form-control" 
                id={props.id} 
                key={props.id}
                required pattern={props.pattern} 
                aria-title={props.title} onChange={(event) => props.method(event.target.value)}/>
            </div>
         );
}
  
export default Input;



