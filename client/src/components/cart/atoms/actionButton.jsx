import React from "react";
import {useDispatch} from "react-redux";

function ActionButton({action,sign}){
const dispatch = useDispatch();
return(
    <>
    <button
    onClick={() => dispatch(action)}
    className={"changeQnt"}>
    {sign}
     </button>{" "}
  </>
)
}


export default ActionButton;