import {Typography} from "@mui/material";
import theme from "../../theme";
import MuiButton from "../common/muiButton";
import "./styles.scss";

const ProductCard = ({details}) => {

  const {name, imageURL, description, price} = details

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

          <MuiButton className = "button-container" variant="contained">
            Buy now @ Rs.{price} 
          </MuiButton>
        </article>
      </article>

      <MuiButton className = "button-container-one" variant="contained">
        Buy now @ Rs.{price} 
      </MuiButton>
    </article>
   );
}
 
export default ProductCard;