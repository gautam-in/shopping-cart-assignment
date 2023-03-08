import React from "react";
import { useQuery } from "react-query";
import { orderBy } from "lodash";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import { getCategoriesAPI } from "utils/services";
import Spinner from "components/spinner/Spinner";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const categories = useQuery("get-categories", getCategoriesAPI);

  const onExploreClick = (categoryId) => {
    navigate("/products", { state: { data: categoryId } });
  };

  if (categories?.isLoading) return <Spinner />;

  return (
    <Box sx={{ marginBottom: "5rem" }}>
      <Carousel />
      <Container maxWidth="lg">
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
                    maxWidth: "275px",
                    maxHeight: "250px",
                    width: "auto",
                    height: "auto",
                  }}
                  alt={category?.name}
                  loading="lazy"
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
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    letterSpacing: "0.6px",
                    fontWeight: "500",
                  }}
                  onClick={() => onExploreClick(category?.id)}
                  size="large"
                >
                  Explore {category?.key}
                </Button>
              </Box>
            </Paper>
          ))}
      </Container>
    </Box>
  );
};

export default Home;
