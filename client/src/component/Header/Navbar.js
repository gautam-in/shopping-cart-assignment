import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../reducers/UserReducer';

import GetCardDetails from '../../reducers/hooks/GetCardDetails';
import Logo from '../../images/logo.png';
import Cart from '../Cart/Cart';

import { Button } from '@mui/material';
import {
	NavContainer,
	AppNavbar,
	NavToolBar,
	ImageContainer,
	AppLogo,
	NavLinkContainer,
	StackLinkContainer,
	NavLink,
	NavLinkTitle,
	AuthContainer,
	AuthStackContainer,
	AuthLinkStack,
	AuthLink,
	AuthLinkTitle,
	ButtonStack,
	CartButton,
	CartItemContent,
} from './StyledNavbar';

const Navbar = () => {
	const [cartClicked, setCartClicked] = useState(false);
	const { totalQty } = GetCardDetails();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector((state) => state.auth.loggedInUser);

	const handleLogout = () => {
		dispatch(authActions.logoutUser());
		navigate('/');
	};
	const handleClick = () => {
		setCartClicked(!cartClicked);
	};

	return (
		<NavContainer component="header">
			<AppNavbar>
				<NavToolBar>
					<ImageContainer>
						<AppLogo src={Logo} alt="App Logo" />
					</ImageContainer>
					<NavLinkContainer>
						<StackLinkContainer direction="row" spacing={2}>
							<NavLink href="/" underline="none">
								<NavLinkTitle>Home</NavLinkTitle>
							</NavLink>
							<NavLink href="/product" underline="none">
								<NavLinkTitle>Products</NavLinkTitle>
							</NavLink>
						</StackLinkContainer>
					</NavLinkContainer>
					<AuthContainer>
						<AuthStackContainer direction="column" spacing={1}>
							{Object.keys(user).length ? (
								<Button
									onClick={handleLogout}
									sx={{
										padding: '0px',
										textTransform: 'capitalize',
										color: '#ab003c',
									}}
								>
									Logout
								</Button>
							) : (
								<AuthLinkStack direction="row" spacing={2}>
									<AuthLink href="/login" underline="none">
										<AuthLinkTitle>SignIn</AuthLinkTitle>
									</AuthLink>
									<AuthLink href="/signin" underline="none">
										<AuthLinkTitle>Register</AuthLinkTitle>
									</AuthLink>
								</AuthLinkStack>
							)}

							<ButtonStack>
								<CartButton
									variant="text"
									size="small"
									startIcon={
										<ShoppingCartIcon sx={{ fontSize: '30px' }} />
									}
									disableRipple
									onClick={handleClick}
								>
									<CartItemContent>{totalQty} Items</CartItemContent>
								</CartButton>
							</ButtonStack>
						</AuthStackContainer>
					</AuthContainer>
				</NavToolBar>
			</AppNavbar>
			{cartClicked && <Cart clickHandler={handleClick} open={cartClicked} />}
		</NavContainer>
	);
};

export default Navbar;
