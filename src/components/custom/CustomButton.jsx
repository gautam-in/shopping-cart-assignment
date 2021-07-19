import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        margin: '10px 0px',
        backgroundColor:'#b72f60'
    },
  }));

const CustomButton = ({onClick,id,children}) => {
    const classes = useStyles();
    return <Button className={classes.root}  variant="contained" color="secondary" onClick={onClick} id={id}>{children}</Button>
}

export default CustomButton