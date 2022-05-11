import {
  Box,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "../Button/Button-component";
import {
  titleStyle,
  mainBoxStyle,
  itemImageStyle,
  itemInfoBoxStyle,
  itemDescriptionBoxStyle,
  itemFooterBoxStyle,
  buyNowBtn,
  mrpTextStyle,
} from './item-component.style'
import { useAppDispatch } from '../../store/hook'
import { Dispatch } from 'redux'
import { addToCart } from '../../store/action/action'
const ItemComponent = (props: any) => {
  const dispatch: Dispatch<any> = useAppDispatch()
  const { title, image, description, price,id } = props;

  const Mobile = useMediaQuery("(max-width:640px)");
  return (
    <Box>
      <header>
        <Typography
          sx={titleStyle}
        >
          {title}
        </Typography>
      </header>
      <Box
        sx={mainBoxStyle}
      >
        <Box
          component={"img"}
          src={image}
          alt={title}
          sx={itemImageStyle}
        />
        <Box
          sx={itemInfoBoxStyle}
        >
          <Box
            sx={itemDescriptionBoxStyle}
          >
            <Typography
              sx={{
                fontSize: "0.7rem",
                textAlign: "left",
                color: "black",
                fontWeight: "600",
              }}
            >
              {description}
            </Typography>
          </Box>
          <footer>
            <Box
              sx={itemFooterBoxStyle}
            >
              {Mobile ? (
                <Button
                  title={`Buy Now @ MRP ${price}`}
                  sx={buyNowBtn}
                  onClick={()=>dispatch(addToCart(id))}
                ></Button>
              ) : (
                <>
                  {" "}
                  <Typography sx={mrpTextStyle}>
                    MRP Rs.{price}
                  </Typography>
                  <Button
                    title={"Buy Now"}
                    sx={buyNowBtn}
                    onClick={()=>dispatch(addToCart(id))}
                  ></Button>{" "}
                </>
              )}
            </Box>
          </footer>
        </Box>
      </Box>
    </Box>
  );
};
export default ItemComponent;
