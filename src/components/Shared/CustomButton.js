import { memo } from "react";
import Button from "@material-ui/core/Button";

const CustomButton = ({ title, classes, onClick }) => {
  return (
    <Button
      className={`confirm-btn ${classes ? classes : ""}`}
      variant="contained"
      color="secondary"
      type="submit"
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default memo(CustomButton);
