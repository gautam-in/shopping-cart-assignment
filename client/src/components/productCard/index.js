import {Typography} from "@mui/material";
import theme from "../../theme";
import MuiButton from "../common/muiButton";
import "./styles.scss";
import {useDispatch} from 'react-redux'
import {postAddtoCartAction} from "../../actions/actionProducts";

const ProductCard = ({details}) => {

  const dispatch = useDispatch()

  const {name, imageURL, description, price, id} = details



const onCheckoutHandler = () => {
  dispatch(postAddtoCartAction({productId: id }))

}



  return ( 
    <article className="productcard-wrapper">
      <Typography variant="h6">
        {name}
      </Typography>
      <article className="productcard-container">
        <figure>
          <img src={imageURL} alt={name} />
        </figure>
        <article >
          <div>
          <Typography fontWeight={theme.typography.fontWeightMedium} component="p" variant="subtitle1">
            {description}
          </Typography>
          </div>
          <MuiButton onClick = {onCheckoutHandler} className = "button-container" variant="contained">
            Buy now @ Rs.{price} 
          </MuiButton>
        </article>
      </article>

      <MuiButton onClick = {onCheckoutHandler} className = "button-container-one" variant="contained">
        Buy now @ Rs.{price} 
      </MuiButton>
    </article>
   );
}
 
export default ProductCard;