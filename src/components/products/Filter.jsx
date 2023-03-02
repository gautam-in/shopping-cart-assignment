import { Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { orderBy } from "lodash";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const ProductFilter = ({ categories, activeFilter, handleFilterDesktop }) => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block", margin: "1rem 0" },
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          padding: "1rem",
          minHeight: "80vh",
          background: "#fef9fb",
          //   position: '-webkit-sticky',
          position: "sticky",
          top: "0",
        }}
      >
        <Typography mb={2} sx={{ display: "flex", alignItems: "flex-start" }}>
          {activeFilter ? <FilterAltIcon /> : <FilterAltOutlinedIcon />} To
          filter the products, please choose a category.
        </Typography>
        <Divider />

        <Stack direction="column" spacing={2} mt={2}>
          {orderBy(categories, ["order"], ["asc"])
            .filter((item) => item?.enabled)
            .map((category) => (
              <Chip
                key={category?.id}
                label={category?.name}
                color={activeFilter === category?.id ? "primary" : "default"}
                variant={activeFilter === category?.id ? "filled" : "outlined"}
                onClick={() => handleFilterDesktop(category?.id)}
              />
            ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default ProductFilter;
