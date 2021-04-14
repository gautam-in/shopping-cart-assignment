import React from "react";
import "./index.scss";

export default function SubmitButton({text,handler}){
    return (
        <button onClick={handler} class="btn" type="submit" data-test='submitButton'>
            {text}
          </button>
    )
}