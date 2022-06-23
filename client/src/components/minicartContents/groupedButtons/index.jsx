import {Button, ButtonGroup, Typography} from "@mui/material";
import {useState} from "react";
import theme from "../../../theme";

const GroupedButtons = ({count, onIncrementHandler, onDecrementHandler}) => {

	return (
		<ButtonGroup variant="contained">
			<Button onClick={onDecrementHandler} >-</Button>
			<Typography variant="p" component="p" fontWeight={theme.typography.fontWeightBold} >{count}</Typography>
			<Button onClick={onIncrementHandler}>+</Button>
		</ButtonGroup>
	);
};

export default GroupedButtons;