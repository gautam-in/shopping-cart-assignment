import {ComponentStory, ComponentMeta} from '@storybook/react'
import PrimayButton, {IPrimayButton} from './PrimaryButton'
import {mockPrimayButtonProps} from './PrimaryButton.mocks'

export default {
  title: 'Buttons/PrimayButton',
  component: PrimayButton,
  argTypes: {},
} as ComponentMeta<typeof PrimayButton>

const Template: ComponentStory<typeof PrimayButton> = args => (
  <PrimayButton {...args} />
)

export const Base = Template.bind({})

Base.args = {
  ...mockPrimayButtonProps.base,
} as IPrimayButton
