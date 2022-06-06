import { AppBar, Toolbar, Box, Link, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavContainer = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});

export const AppNavbar = styled(AppBar)({
	background: '#fff',
	position: 'sticky',
	height: '5rem',
	width: '100%',
	'@media only screen and (max-width:480px)': {
		height: '4rem',
	},
	'@media only screen and (max-width:400px)': {
		height: '3.5rem',
	},
});

export const NavToolBar = styled(Toolbar)({
	display: 'flex',
	margin: '0rem 3.5rem',
	'@media only screen and (max-width: 600px)': {
		padding: '0px',
		margin: '0rem',
	},

	'@media only screen and (max-width:480px)': {
		gap: '6rem',
	},

	'@media only screen and (max-width:280px)': {
		gap: '1rem',
	},
});

export const ImageContainer = styled(Box)({
	width: '12rem',
	'@media only screen and (max-width:480px)': {
		width: '10rem ',
	},
});

export const AppLogo = styled('img')({
	height: 'auto',
	width: '150%',

	'@media only screen and (max-width:500px)': {
		width: '70%',
		marginTop: '5px',
	},

	'@media only screen and (max-width:280px)': {
		width: '55%',
		marginTop: '4px',
	},
});

export const NavLinkContainer = styled(Box)({
	width: '150%',
	'@media only screen and (max-width: 480px)': {
		display: 'none',
	},
});

export const StackLinkContainer = styled(Stack)({
	margin: '.25rem',
	paddingLeft: '8rem',
	'@media (max-width:600px)and (min-width: 480px)': {
		paddingLeft: '5rem',
	},
});

export const NavLink = styled(Link)({
	paddingTop: '1rem',
});

export const NavLinkTitle = styled('h3')({
	color: '#757575',
});

export const AuthContainer = styled(Box)({
	width: '20%',
});

export const AuthStackContainer = styled(Stack)({});

export const AuthLinkStack = styled(Stack)({
	'@media only screen and (max-width: 480px)': {
		display: 'none',
	},
});

export const AuthLink = styled(Link)({
	color: '#212121',
});

export const AuthLinkTitle = styled('h5')({
	margin: '5px 0px',
});

export const ButtonStack = styled(Stack)({
	'@media only screen and (max-width:480px)': {
		justifyContent: 'flex-end',
	},
});

export const CartButton = styled(Button)({
	width: '100px',
	height: '43px',
	color: '#ab003c',
	padding: 1,
	alignItems: 'left',
	justifyContent: 'center',
	boxSizing: 'content-box',
	backgroundColor: '#e0e0e0',
	borderRadius: 0,
	'&:hover , &:active': {
		backgroundColor: '#e0e0e0',
	},
	'@media only screen and (max-width:500px)': {
		width: '110px',
		height: '53px',
	},

	'@media only screen and (max-width:450px)': {
		width: '100px',
		height: '44px',
	},
});

export const CartItemContent = styled('span')({
	color: '#424242',
	textTransform: 'capitalize',
	fontSize: '14px',
	'@media only screen and (max-width:480px)': {
		fontSize: '16px',
	},
	'@media only screen and (max-width:280px)': {
		fontSize: '14px',
	},
});
