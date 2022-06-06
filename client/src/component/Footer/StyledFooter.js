import { Paper, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterContainer = styled(Box)({
	backgroundColor: '#e0e0e0',
	width: 'auto',
});

export const FooterGrid = styled(Grid)({
	marginLeft: '80px',
	display: 'flex',
	'@media only screen and (max-width:600px)': {
		justifyContent: 'center',
		marginLeft: '0px',
	},
});

export const FooterItemContainer = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(0.5),
	color: theme.palette.text.primary,
	backgroundColor: '#e0e0e0',
	boxShadow: 'none',
	borderRadius: '0px',
}));

export const FooterContent = styled(Box)({
	margin: '5px 0px',
	fontSize: '17px',
	fontWeight: 600,
	color: '#424242',
	'@media only screen and (max-width:600px)': {
		textAlign: 'center',
		margin: '4px 0px',
		fontSize: '16px',
		fontWeight: 600,
	},
	'@media only screen and (max-width:480px)': {
		textAlign: 'center',
		fontSize: '12px	',
		margin: '2px 0px',
	},
	'@media only screen and (max-width:380px)': {
		fontSize: '10px',
	},
});
