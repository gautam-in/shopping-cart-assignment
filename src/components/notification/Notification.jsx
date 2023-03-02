import * as React from "react";
import { useAtom } from "jotai";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { notificationAtom } from "utils/atoms";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification() {
  const [openSnackbar, setOpenSnackbar] = useAtom(notificationAtom);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar({
      isOpen: false,
    });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackbar.isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        key="bottom center"
        // action={action}
      >
        <Alert
          onClose={handleClose}
          severity={openSnackbar.type}
          sx={{ width: "100%" }}
        >
          {openSnackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
