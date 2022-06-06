import { Box, Button, Paper, Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SignInContainer = styled(Box)({
	width: '80vw',
	marginLeft: 'auto',
	marginRight: 'auto',
	'@media screen only and (max-width:600px)': {
		width: '100%',
		margin: '5px',
		justifyContent: 'center',
	},
});

export const GridConatiner = styled(Grid)({});

export const GridItem = styled(Grid)({});

export const ItemContainer = styled(Paper)(({ theme }) => ({
	textAlign: 'left',
	boxShadow: 'none',
	borderRadius: '0px',
	padding: '10px',
}));

export const FormTextField = styled(TextField)({
	marginBottom: '10px',
});

export const RegiterTitle = styled('h2')({});

export const RegiterContent = styled('h4')({});

export const SignUpButton = styled(Button)({
	margin: '10px 0px',
	borderRadius: '0px',
	backgroundColor: '#ab003c',
	textTransform: 'capitalize',
	':hover': {
		backgroundColor: '#ab003c',
	},
	':disabled': {
		backgroundColor: '#9E9E9E',
		color: '#212121',
	},
});

export const ErrorMessage = styled('p')({
	color: 'red',
	fontSize: '10px',
	margin: '2px ',
});
