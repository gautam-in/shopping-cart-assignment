import {Button, ButtonGroup, Typography} from "@mui/material";
import theme from "../../../theme";

const GroupedButtons = ({count, onIncrementHandler, onDecrementHandler}) => {

	return (
		<ButtonGroup variant="contained">
			<Button aria-label="Remove item" onClick={onDecrementHandler} >-</Button>
			<Typography variant="p" component="p" fontWeight={theme.typography.fontWeightBold} >{count}</Typography>
			<Button  aria-label="Add item" onClick={onIncrementHandler}>+</Button>
		</ButtonGroup>
	);
};

export default GroupedButtons;