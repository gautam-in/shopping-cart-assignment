import { SxProps, TextField } from "@mui/material";
import React from "react";

const TextFieldComponent = ({ label, type, onChange, helperText,id,...rest }: any) => {
  const [value, setValue] = React.useState('');
  const onDataChange = (e: any, id: String) => {
    setValue(e.target.value)
    onChange(id, e.target.value)
  }
  return <TextField required
  aria-live={helperText && helperText}
    label={label}
    type={type}
    sx={styleTextFiled}
    onChange={(e) => onDataChange(e, id)}
    value={value} 
    helperText={helperText && helperText}
    {...rest}/>;
};

export default TextFieldComponent;
const styleTextFiled: SxProps = {
  mt: 3,
  color: 'black',
  ".MuiOutlinedInput-notchedOutline": {
    border: "0",
    borderBottom: "1px solid",
    borderRadius: 0,
  },
  ".MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
  {
    borderColor: "red",
    color: "red",
  },
  ".Mui-focused": {
    color: "#32aeb5",
    // color:'black',
    borderColor: "#32aeb5",
  },
  "&.Mui-focused fieldset": {
    borderColor: "#32aeb5",
    borderBottom: "1px solid",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#32aeb5",
    },
  },
};
