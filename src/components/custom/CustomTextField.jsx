import { TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import { memo } from "react";
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
      '& .MuiInputBase-input':{
        fontSize:12
      },
      '& .MuiInputLabel-root':{
        fontSize:12
      },
        width:'100%',
        margin: '10px 0px',
    },
  }));

const CustomTextField = ({id,onChange,value,label,type,error,helperText},props) => {
    const classes = useStyles();
    return <TextField 
            {...props} 
            className={classes.root}
            error={error} 
            helperText={helperText} 
            id={id} 
            value={value} 
            onChange={onChange} 
            label={label} 
            type={type}
          />
}

export default memo(CustomTextField);