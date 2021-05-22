import { memo } from "react";
import Button from "@material-ui/core/Button";

const CustomButton = ({ title }) => {
  return (
    <Button
      className="confirm-btn"
      variant="contained"
      color="secondary"
      type="submit"
    >
      {title}
    </Button>
  );
};

export default memo(CustomButton);
