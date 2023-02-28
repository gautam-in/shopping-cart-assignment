import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
