import { memo } from "react";
import Button from "@material-ui/core/Button";

const CustomButton = ({ title, classes }) => {
  return (
    <Button
      className={`confirm-btn ${classes ? classes : ""}`}
      variant="contained"
      color="secondary"
      type="submit"
    >
      {title}
    </Button>
  );
};

export default memo(CustomButton);
