import {ComponentStory, ComponentMeta} from '@storybook/react'
import BuyButton, {IBuyButton} from './BuyButton'
import {mockBuyButtonProps} from './BuyButton.mocks'

export default {
  title: 'Buttons/BuyButton',
  component: BuyButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BuyButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BuyButton> = args => (
  <BuyButton {...args} />
)

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBuyButtonProps.base,
} as IBuyButton
