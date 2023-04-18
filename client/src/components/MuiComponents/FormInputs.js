import TextField from "@mui/material/TextField"
import './style.scss'

export const MuiTextField = (props) => {
    return (
        <TextField
        className="text_field"
        fullWidth
            variant="standard"
            size="medium"
            margin="normal"
            {...props}
        />
    )
}