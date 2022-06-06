import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
} from '@mui/material';
import { styled } from '@mui/material';

export const ProductContainer = styled(Box)({
	display: 'flex',
	flexDirection: 'row',
	width: '85vw',
	margin: '0 auto',
	'@media only screen and (max-width:480px)': {
		display: 'flex',
		flexDirection: 'column',
	},
});

export const ProductCategoryContainer = styled('div')({
	backgroundColor: '#e0e0e0',
	padding: ' 5px 5px',
	'@media only screen and (max-width:480px)': {
		dispaly: 'none',
		padding: '0px',
	},
});

export const ProductList = styled(List)({
	width: '17vw',
	height: 'auto',
	'@media only screen and (max-width:912px)': {
		width: '15vw',
	},
	'@media only screen and (max-width:820px)': {
		width: '22vw',
	},
	'@media only screen and (max-width:540px)': {
		width: '30vw',
	},

	'@media only screen and (max-width:480px)': {
		display: 'none',
	},
});

export const ProductListItem = styled(ListItem)({});

export const ProductItemButton = styled(ListItemButton)({});

export const ProductItemText = styled(ListItemText)({
	color: '#616161',
});

export const ProductDropdownContainer = styled('div')({
	width: '100%',
	display: 'none',
	'@media only screen and (max-width: 480px)': {
		display: 'block',
		marginTop: '10px',
	},
});

export const ProductDropdown = styled('select')({
	width: '100%',
	background: '#ab003c',
	color: '#fff',
	border: 'none',
	outline: 'none',
	// padding: '0.7rem 1rem',
	fontSize: '1rem',
});

export const ProductDropdownOption = styled('option')({
	width: '80%',
});

export const ProductItemContainer = styled(Box)({
	margin: '10px 5px',
	width: '850px',
	// height: 'auto',
	backgroundColor: '#fff',
});

export const ItemContainer = styled(Box)({});

export const ItemGridContainer = styled(Grid)({});

export const ItemGrid = styled(Grid)({});

export const ProductItemContent = styled(Card)({
	width: '16vw',
	height: '612px',
	borderRadius: '2px',
	mt: '40px',
	'@media only screen and (max-width:912px)': {
		width: '17vw',
		height: '655px',
	},
	'@media only screen and (max-width:820px)': {
		width: '30vw',
		height: '270px',
	},
	'@media only screen and (max-width:540px)': {
		width: '350px',
	},
	'@media only screen and (max-width:480px)': {
		width: '350px',
		height: '270px',
	},
	'@media only screen and (max-width:280px)': {
		width: '250px',
		height: '160px',
	},
});

export const ProductTitleContainer = styled(Box)({
	height: '70px',

	'@media only screen and (max-width:820px)': {
		height: '5vw',
	},
	'@media only screen and (max-width:540px)': {
		height: '9.5vw',
	},
});

export const ProductTitle = styled('h4')({
	margin: '5px',
	'@media only screen and (max-width:820px)': {
		fontSize: '14px',
	},
	'@media only screen and (max-width:540px)': {
		fontSize: '12px',
	},
	'@media only screen and (max-width:280px)': {
		fontSize: '10px',
	},
});

export const ProductWrapper = styled(Box)({
	margin: '0px',
	padding: '0px',
	'@media only screen and (max-width:820px)': {
		width: '240px',
	},
	'@media only screen and (max-width:540px)': {
		width: '350px',
	},
	'@media only screen and (max-width:280px)': {
		width: '230px',
	},
});

export const ProductImageContainer = styled(Box)({
	'@media only screen and (max-width:820px)': {
		float: 'left',
		width: '100px',
	},
	'@media only screen and (max-width:280px)': {
		width: '70px',
	},
});

export const ProductImage = styled(CardMedia)({
	marginBottom: '5px',
	'@media only screen and (max-width:820px)': {
		float: 'left',
		width: '100%',
		marginBottom: '60px',
	},
	'@media only screen and (max-width:480px)': {
		marginBottom: '0px',
	},
});

export const ProductDescContainer = styled(CardContent)({
	backgroundColor: '#e0e0e0',
	padding: '5px',
	height: '250px',
	margin: '5px',
	'@media only screen and (max-width:1024px)': {
		height: '300px',
		// padding: '3px',
	},
	'@media only screen and (max-width:912px)': {
		height: '350px',
		// padding: '3px',
	},
	'@media only screen and (max-width:820px)': {
		height: '180px',
		width: '120px',
		float: 'right',
	},
	'@media only screen and (max-width:540px)': {
		height: '160px',
		width: '180px',
	},
	'@media only screen and (max-width:480px)': {
		height: '100px',
		width: '180px',
	},
	'@media only screen and (max-width:280px)': {
		height: '80px',
		width: '140px',
	},
});

export const ProductDesc = styled('p')({
	fontWeight: 600,
	margin: '2px 0px',
	'@media only screen and (max-width:912px)': {
		fontWeight: 550,
	},
	'@media only screen and (max-width:820px)': {
		fontSize: '12px',
	},
	'@media only screen and (max-width:540px)': {
		fontSize: '13px',
	},
	'@media only screen and (max-width:480px)': {
		fontSize: '11px',
	},
	'@media only screen and (max-width:280px)': {
		fontSize: '9px',
	},
});

export const ProductPrice = styled(CardActions)({
	display: 'flex',
	justifyContent: 'space-between',
	margin: '0px 4px 2px',
	padding: '0px  2px',
	'@media only screen and (max-width:820px)': {
		margin: '5px',
		padding: '5px',
	},
	'@media only screen and (max-width:280px)': {
		margin: '2px',
		padding: '2px',
	},
});

export const ButtonWrapper = styled(Button)({
	display: 'none',
	'@media only screen and (max-width:820px)': {
		display: 'block',
		width: '100%',
		borderRadius: '0px',
		backgroundColor: '#ab003c',
		color: '#fff',
		textTransform: 'capitalize',
		fontSize: '8px',
		textAlign: 'center',

		'&:hover,&:active': {
			backgroundColor: '#ab003c',
			color: '#fff',
		},
	},

	'@media only screen and (max-width:480px)': {
		top: '130px',
		width: '90px',
		height: '50px',
	},
	'@media only screen and (max-width:280px)': {
		top: '0px',
		left: '0px',
		width: '50px',
		margin: '0px',
		padding: '0px',
	},
});

export const ProductMRP = styled('span')({
	fontSize: '14px',
	fontWeight: 530,
	'@media only screen and (max-width:912px)': {
		fontSize: '12px',
	},
	'@media only screen and (max-width:820px)': {
		float: 'left',
		display: 'none',
	},
});

export const BuyNowButton = styled(Button)({
	borderRadius: '0px',
	backgroundColor: '#ab003c',
	color: '#fff',
	textTransform: 'capitalize',
	fontSize: '10px',
	width: '6vw',
	height: '5vh',
	'&:hover,&:active': {
		backgroundColor: '#ab003c',
		color: '#fff',
	},
	'@media only screen and (max-width:912px)': {
		height: '2.5vh',
	},
	'@media only screen and (max-width:820px)': {
		float: 'left',
		display: 'none',
	},
});
