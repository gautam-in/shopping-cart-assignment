import {
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  Select,
  MenuItem,
  SxProps,
  FormControl,
  InputLabel,
} from "@mui/material";
import ItemComponent from "../component/Item-component/Item-component";
import React, { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppSelector, useAppDispatch } from '../store/hook'
import { Dispatch } from 'redux'
import { selectCategory } from '../store/action/action'
const Product = () => {
  const dispatch: Dispatch<any> = useAppDispatch()
  const { category, products, order } = useAppSelector((state: any) => state.user)
  const [productUI, setProduct] = React.useState(products);
  const Mobile = useMediaQuery("(max-width:640px)");
  const updateProductPage = (order: any) => {
    if (order !== 0) {
      const index = category.findIndex((d: any) => d.order === parseInt(order));
      const id = category[index].id;
      setProduct(products.filter((data: any) => data.category === id));
    } else {
      setProduct(products)
    }
  };
  const handleChange = (event: any) => {
    const orderNo = parseInt((event.target.value) ? event.target.value : event.target.id)
    if (orderNo === order) {
      dispatch(selectCategory(0))
    } else {
      dispatch(selectCategory(orderNo))
    }
  };

  const selectedCategoryStyle = (categoryorder: Number) => {
    if (order === categoryorder) {
      return { ...selectedCategoryColor }
    }
  }

  useEffect(() => {
    updateProductPage(parseInt(order));
  }, []);
  useEffect(() => {
    if (order || order === 0) {
      updateProductPage(parseInt(order));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  return (
    <Container
      sx={mainContainer}
    >
      <Box
        sx={mainBox}
      >
        <>
          {!Mobile &&
            category.map((data: any, index: any) => {
              return (
                <div key={data.order}>
                  <Box key={index} id={data.order} onClick={handleChange} sx={selectedCategoryStyle(data.order)}>
                    <Typography
                      id={data.order}
                      sx={textStyle}
                    >
                      {data.name}
                    </Typography>
                  </Box>
                  <Divider />{" "}
                </div>
              );
            })}
        </>
      </Box>
      <Grid container spacing={1} >
        {Mobile && (
          <FormControl fullWidth>
            <InputLabel sx={InputTextLabel}>Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={order === 0 ? '' : order}
              label="Category"
              onChange={handleChange}
              sx={selectStyle}
            >
              {category.map((data: any, index: any) => {
                return <MenuItem key={index} value={data.order}>{data.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
        )}

        {productUI.map((data: any, index: any) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              key={index}
              sx={{ pb: 3 }}
            >
              <ItemComponent
                title={data.name}
                id={data.id}
                key={data.id}
                description={data.description}
                image={data.imageURL}
                price={data.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default Product;

export const mainContainer: SxProps = {
  pt: "1px",
  display: "flex",
  pl: 0,
  pr: 0,
  width: {
    xxs: "100%",
    xs: "100%",
    sm: "100%",
    md: "70%",
    lg: "70%",
    xl: "70%",
  },
}

export const mainBox: SxProps = {
  width: "30%",
  display: {
    xxs: "none",
    xs: "none",
    sm: "block",
    md: "block",
    lg: "block",
    xl: "block",
  },
  mr: 2,
  bgcolor: "#f5f2f2",
  minHeight: "100vh",
}

export const textStyle: SxProps = { p: 2, cursor: "pointer", color: 'black' }

export const selectStyle: SxProps = {
  width: "100%",
  textAlign: "left",
  bgcolor: "#ba2955",
  color: "white",
  ".MuiSelect-icon": {
    color: "white",
  },
}

export const selectedCategoryColor: SxProps = {
  bgcolor: "#dad9d9"
}

export const InputTextLabel: SxProps = { fontWeight: 'bold', color: 'white' }