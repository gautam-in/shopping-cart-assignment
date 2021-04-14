import React from "react";
import TextField from "@material-ui/core/TextField";
import "./index.scss";

export default function TextFieldComponent({setField,errorMessage,data,error,type,id,label}){
    return(<>
    <TextField
            onChange={(e) => setField(e.target.value)}
            helperText={
              errorMessage(data, error) ? `Please enter ${type}.` : null
            }
            type={type}
            required
            id={id}
            label={label}
            error={errorMessage(data, error)}
            value ={data}
          />
    </>)
}