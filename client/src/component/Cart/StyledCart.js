import { Box, Button } from '@mui/material';
import { styled } from '@mui/material';

export const CartContainerComponent = styled(Box)({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '99vw',
	height: '100vh',
	zIndex: 10,
	backgroundtColor: 'rgb(0 0 0 / 46%)',
	overflow: 'hidden',
	'@media only screen and (max-width: 600px)': {
		width: '100%',
		height: '100vh',
	},
});

export const CartComponent = styled(Box)({
	width: '28rem',
	backgroundColor: '#fff',
	height: '38rem',
	position: 'absolute',
	top: '1%',
	left: '30%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	'@media only screen and (max-width: 600px)': {
		width: '100%',
		height: 'calc(100% - 3.45rem)',
		position: 'fixed',
		top: '3.4rem',
		right: 0,
	},
});

export const CartHeader = styled(Box)({
	backgroundColor: '#1d2124',
	color: '#fff',
	padding: '1rem',
	display: 'flex',
	justifyContent: 'space-between',
	'@media only screen and (max-width: 600px)': {
		background: '#e9e9e9',
		color: '#111',
	},
});

export const CartHeaderTitleContainer = styled(Box)({
	display: 'flex',
	gap: '0.5rem',
	alignItems: 'baseline',
});

export const CartHeaderItems = styled(Box)({});

export const CartTitle = styled(Box)({
	fontSize: '1.5rem',
	fontWeight: 600,
	'@media only screen and (max-width: 600px)': {
		fontSize: '1.4rem',
		fontWeight: 500,
	},
});

export const CartHeaderCloseBtnContainer = styled(Box)({
	fontSize: '1.4rem',
});

export const CartHeaderCloseBtn = styled(Box)({});
export const CartItemsContainer = styled(Box)({
	flexBasis: '80%',
	backgroundColor: '#efefef',
	overflowY: 'scroll',
});

export const CartItemsPlaceholder = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '1rem',
	backgroundColor: '#fffd',
	margin: '2rem',
	padding: '0.5rem',
	borderRadius: '5px',
});

export const CartItemsPlaceholderImageContainer = styled(Box)({
	width: 'auto',
	'@media only screen and (max-width: 600px)': {
		width: '9rem',
	},
});

export const CartPlaceholderItemsImage = styled('img')({
	maxWidth: '100%',
});

export const CartItemsPlaceholderText = styled('h4')({
	fontSize: '1rem',
	fontWeight: '500',
	'@media only screen and (max-width: 600px)': {
		fontSize: '.9rem',
	},
});

export const CartCheckoutContainer = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	padding: '0.2rem',
	height: '3rem',
});

export const CartCheckoutText = styled('h5')({
	marginBottom: '0.5rem',
	fontSize: '16px',
	fontWeight: 600,
	textAlign: 'center',
	margin: '10px',
});

export const CartCheckoutButton = styled(Button)({
	backgroundColor: '#ab003c',
	borderRadius: '2px',
	color: '#fff',
	textTransform: 'capitalize',
	display: 'flex',
	justifyContent: 'space-between',
	height: '100%',
	'&:hover, &:active': {
		backgroundColor: '#ab003c',
		color: '#fff',
	},
});

export const CartCheckoutButtonText = styled('h3')({
	fontWeight: 100,
});

export const CartCheckoutButtonPrice = styled('p')({
	display: 'flex',
	gap: '1rem',
});

export const CartEmptyContainer = styled(Box)({
	display: 'flex',
	placeItems: 'center',
	height: '100%',
	justifyContent: 'center',
});

export const CartEmptyPlaceholder = styled(Box)({
	textAlign: 'center',
});

export const CartEmptyTitle = styled('h3')({
	fontSize: '1.3rem',
	fontWeight: 600,
	'@media only screen and (max-width: 600px)': {
		fontSize: '1rem',
	},
});

export const CartEmptySubtitle = styled('p')({
	fontWeight: 500,
});

// cartItems

export const CartItemContainer = styled(Box)({
	display: 'flex',
	padding: '.3rem',
	margin: '0.2rem 0',
	background: '#fff',
	height: '4.5rem',
});

export const CartItemImgContainer = styled(Box)({
	width: '4.5rem',
});

export const CartItemImg = styled('img')({
	maxWidth: '100%',
});

export const CartItemMetaDataContainer = styled(Box)({
	flex: 1,
	padding: '0 .5rem',
});

export const CartItemTitle = styled('h4')({
	fontWeight: 800,
	marginTop: '0px',
	marginBottom: '5px',
	'@media only screen and (max-width: 600px)': {
		fontWeight: 600,
	},
});

export const CartItemQtyContainer = styled(Box)({
	display: 'flex',
	gap: '0.8rem',
});

export const CartItemQtyUpdater = styled(Button)({
	fontSize: '18px',
	backgroundColor: '#bf2957',
	color: '#fff',
	minWidth: '30px',
	width: '0.2 rem',
	outline: 'none',
	border: 'none',
	height: '1.5rem',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	pb: '0.1rem',
	'&:hover , &:active': {
		backgroundColor: '#bf2957',
		color: '#fff',
	},
	'@media only screen and (max-width: 600px)': {
		fontSize: '16px',
		width: '1rem',
		height: '1rem',
	},
});

export const CartItemMetaData = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	mt: '1rem',
});

export const CartItemQty = styled('h4')({
	marginTop: '1px',
	marginBottom: '3px',
});

export const CartItemPriceContainer = styled(Box)({
	display: 'flex',
	flexBasis: '8rem',
	gap: '0.8rem',
	alignItems: 'center',
	height: '1.5rem',
});

export const CartItemPrice = styled('h4')({});

export const CartItemTotalPrice = styled('h4')({
	marginTop: '1px',
});
