import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import { memo } from "react";
const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        margin: '10px 0px',
        backgroundColor:'#b72f60'
    },
  }));

const CustomButton = ({onClick,id,children,type,value},props) => {
    const classes = useStyles();
    return <Button {...props} className={classes.root} type={type} value={value}  variant="contained" color="secondary" onClick={onClick} id={id}>{children}</Button>
}

export default memo(CustomButton)