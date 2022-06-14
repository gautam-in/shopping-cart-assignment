import {IPrimayButton} from './PrimaryButton'

const base: IPrimayButton = {
  text: 'Hello world!',
  onClick: () => alert(`called`),
}

export const mockPrimayButtonProps = {
  base,
}
