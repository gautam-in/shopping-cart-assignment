/* eslint-disable no-param-reassign */
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
  // const totalCount = cartList.length;
  const totalAmount = cartList.reduce((acc, current) => {
    acc += current.qty * current.price;
    return acc;
  }, 0);
  return (
    <>
      <Button ref={btnRef} colorScheme="telegram" padding="0px" margin="0px" color="black" height="100%" width="100%" minWidth="5" onClick={onOpen}>
        <FiShoppingCart size="30" />
        {/* Items : 0 */}
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

            {/* //Cart List */}

            <CartList />
          </DrawerBody>

          <DrawerFooter margin="0px" padding="10px">
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button> */}
            <Button colorScheme="blue" width="100%" display="flex" justifyContent="space-between" onClick={() => { router.push('/checkout'); onClose(); }}>
              <div>Proceed to Checkout</div>
              <div>
                {totalAmount}
                    &nbsp;₹
              </div>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
