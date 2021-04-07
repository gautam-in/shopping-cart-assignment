import { Button, Drawer, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import cart from "../molecules/cart";

const useStyles = makeStyles(theme  => ({
  root: {
    width: 100,
    textAlign:'center'
  },
  drawerPaper:{
    
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      flexShrink: 0,
    },
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      flexShrink: 0,
    }
    
  },
  button: {
    borderRadius: 0,
    color: "white",
    fontFamily:'Dosis'
  }
}));
export default function CartButton(props) {
  const classes = useStyles();
    return (        
        <Button
        variant="contained"
        color="secondary"
        size="small"
        className={classes.button}
        onClick={(e)=>{props.onClick(e)}}
        startIcon={<ShoppingCartIcon />}
      >
        {props.count} Items
      </Button>
    )
}