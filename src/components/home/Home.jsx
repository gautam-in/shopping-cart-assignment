import React from "react";
import { useQuery } from "react-query";
import { orderBy } from "lodash";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import { getCategoriesAPI } from "utils/services";
import Spinner from "components/spinner/Spinner";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = useQuery("get-categories", getCategoriesAPI);

  if (categories?.isLoading) return <Spinner />;

  return (
      <Box sx={{ marginBottom: "5rem" }}>
        <Carousel />
          <Container maxWidth='lg'>
        {orderBy(categories?.data?.data, ["order"], ["asc"])
          .filter((item) => item?.enabled)
          .map((category) => (
            <Paper
              key={category?.key}
              elevation={4}
              sx={{
                display: { xs: "block", md: "flex" },
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                padding: "3rem 0.5rem",
                textAlign: "center",
                alignItems: "center",
                margin: "2rem 0",
                background: "#fff",
                flexDirection:
                  category?.order % 2 !== 0 ? "row" : "row-reverse",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <img
                  src={category?.imageUrl}
                  style={{
                    maxWidth: "300px",
                    maxHeight: "250px",
                    width: "auto",
                    height: "auto",
                  }}
                  alt={category?.name}
                />
              </Box>
              <Box sx={{ flex: 1.85 }}>
                <Typography
                  sx={{ margin: "2rem 0" }}
                  variant="h4"
                  component="h4"
                >
                  {category?.name}
                </Typography>
                <Typography sx={{ margin: "2rem 0" }} variant="body1">
                  {category?.description}
                </Typography>
                <Link to='/products' style={{textDecoration: 'none'}} state={{data: category?.id}}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    letterSpacing: "0.6px",
                    fontWeight: "500",
                  }}
                  size="large"
                >
                  Explore {category?.key}
                </Button>
                </Link>

              </Box>
            </Paper>
          ))}
    </Container>
      </Box>
  );
};

export default Home;
