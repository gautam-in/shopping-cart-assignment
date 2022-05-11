import ModalComponent  from '../Modal';
import H3 from "../../Typography/H3";
import P from "../../Typography/P";
import { customViewports } from "../../../../.storybook/preview"
import LowestPriceTagStories from '../../LowestPriceTag/LowestPriceTag';
import CartItems from '../../../containers/CartItems/CartItems';
import { data } from '../../../containers/CartItems/Data';

export default {
  title: 'Sabka Bazar/Organisms/Cart/Tablet',
  component: ModalComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },

};

const ModalStoryWithNoItems = (args) => {
    return (
        <ModalComponent {...args}>
            <H3>No Items in your cart</H3>
            <P>Your favourite items are just a click away</P>
        </ModalComponent>
    )
}

export const ModalWithNoItemsInCart = ModalStoryWithNoItems.bind({});

ModalWithNoItemsInCart.args = {
    modalState: true,
    handleModalClose: () => {},
    noItems: true
};


const ModalStoryWithItems = (args) => {
    return (
        <ModalComponent {...args}>
                <CartItems data={data}/>
                <LowestPriceTagStories/>
        </ModalComponent>
    )
}

export const ModalStoryWithItemsInCart = ModalStoryWithItems.bind({});

ModalStoryWithItemsInCart.args = {
    modalState: true,
    handleModalClose: () => {},
    noItems: false,
    cartPrice: 348,
    cartQuantity: 2,
};
