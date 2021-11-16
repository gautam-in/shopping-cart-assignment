import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Button,
} from '@chakra-ui/react';

import { FiShoppingCart } from 'react-icons/fi';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import CartList from './Cart/CartList';

export default function CartDrawer() {
	const router = useRouter();
	const btnRef = useRef();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cartList = useSelector((state) => state.cart.cartList);
	const totalCount = cartList.reduce((acc, current) => {
		acc += current.qty;
		return acc;
	}, 0);
	const totalAmount = cartList.reduce((acc, current) => {
		acc += current.qty * current.price;
		return acc;
	}, 0);
	return (
		<>
			<Button
				ref={btnRef}
				colorScheme=""
				padding="0px"
				margin="0px"
				color="black"
				height="100%"
				width="100%"
				minWidth="5"
				onClick={onOpen}
			>
				<FiShoppingCart size="30" />
				&nbsp;
				{totalCount}
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent bg="#EFE8E8">
					<DrawerCloseButton color="whitesmoke" size="lg" />
					<DrawerHeader bgColor="black" color="whitesmoke">
						My Cart (&nbsp;
						{totalCount}
						&nbsp; Items)
					</DrawerHeader>

					<DrawerBody margin="0px" padding="10px">
						<CartList />
					</DrawerBody>

					<DrawerFooter margin="0px" padding="10px" flexDirection="column">
						<div style={{ fontSize: '.8rem', marginBottom: '.5rem' }}>
							Promo code can be applied at payment page
						</div>
						<Button
							width="100%"
							display="flex"
							justifyContent="space-between"
							onClick={() => {
								router.push('/checkout');
								onClose();
							}}
							colorScheme="red"
							bgColor="var(--category-banner-card-button-color)"
							size="sm"
							borderRadius={0}
							_hover={{
								bg: 'var(--white)',
								color: 'var(--primary)',
								boxShadow: 'rgba(0, 0, 0, 0.24) 0 0.5rem 1rem',
							}}
						>
							<div>Proceed to Checkout</div>
							<div>
								Rs. {totalAmount} {'   >'}
							</div>
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}
