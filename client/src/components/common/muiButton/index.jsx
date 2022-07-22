import {Button} from "@mui/material";

const MuiButton = ({children, ...props}) => {
	return (
		<Button  {...props}>
			{children}
		</Button>
	);
};

export default MuiButton;