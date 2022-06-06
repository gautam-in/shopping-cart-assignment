import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HomeContainer = styled(Box)({});

export const CategoriesContainer = styled(Box)({
	height: 'auto',
	backgroundColor: '#fff',
	padding: '0 8rem',
	margin: '1rem 0',
	width: '80vw',
	'@media only screen and (max-width: 600px)': {
		padding: '0 1rem',
		margin: '1rem 0 auto',
		width: '500px',
	},
	'@media only screen and (max-width: 480px)': {
		width: '380px',
	},
	'@media only screen and (max-width: 400px)': {
		width: '340px',
	},

	'@media only screen and (max-width: 370px)': {
		width: '320px',
	},
	'@media only screen and (max-width: 280px)': {
		width: '250px',
	},
	'@media only screen and (min-width: 600px)': {
		padding: '0 2rem',
		margin: '1rem 0',
	},
	'@media only screen and (min-width: 768px) ': {
		padding: '0 6rem',
		margin: '1rem 0',
	},
	'@media only screen and (min-width: 992px)': {
		padding: '0 10rem',
		margin: '1rem 0',
	},
});

export const CategoryContainer = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'row',
	'&:not(:last-child)': {
		boxShadow: '0px 14px 8px -15px #333',
	},
	'@media only screen and (max-width: 600px)': {
		padding: '1.5rem 0',
	},
});

export const CategoryImgContainer = styled(Box)({
	width: '30rem',
	padding: '1rem 0',
	'@media only screen and (max-width: 600px)': {
		width: '10rem',
		padding: '1rem 0',
	},
	'@media only screen and (min-width: 600px)': {
		width: '17rem',
		padding: '1rem 0',
	},
	'@media only screen and (min-width: 768px)': {
		width: '22rem',
		padding: '1rem 0',
	},
	'@media only screen and (min-width: 992px)': {
		width: '28rem',
		padding: '1rem 0',
	},
});

export const CategoryImg = styled('img')({
	width: '100%',
});

export const CategoryDataContainer = styled(Box)({
	textAlign: 'center',
	flexBasis: '80%',
	display: 'flex',
	justifyContent: 'center',
});

export const CategoryData = styled(Box)({});

export const CategoryHeading = styled('h3')({
	fontSize: '20px',
	'@media only screen and (max-width: 600px)': {
		fontSize: '18px',
	},
	'@media only screen and (max-width: 480px)': {
		fontSize: '16px',
	},
	'@media only screen and (max-width: 280px)': {
		fontSize: '14px',
	},
});

export const CategoryDesc = styled('p')({
	marginBottom: '1rem',
	fontSize: '18px',
	textAlign: 'center',
	'@media only screen and (max-width: 820px)': {
		fontSize: '16px',
	},
	'@media only screen and (max-width: 480px)': {
		fontSize: '14px',
	},
	'@media only screen and (max-width: 280px)': {
		fontSize: '12px',
	},
});

export const ExploreButton = styled(Button)({
	borderRadius: '0px',
	backgroundColor: '#ab003c',
	color: '#fff',
	textTransform: 'capitalize',
	'&:hover , &:active': {
		backgroundColor: '#ab003c',
		color: '#fff',
	},
	fontSize: '14px',
	'@media only screen and (max-width: 600px)': {
		fontSize: '12px',
	},
	'@media only screen and (max-width: 480px)': {
		fontSize: '10px',
	},
	'@media only screen and (max-width: 280px)': {
		fontSize: '8px',
	},
});
