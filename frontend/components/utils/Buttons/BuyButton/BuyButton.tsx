export interface IBuyButton {
  text: string
  onClick?: () => void
  children?: JSX.Element | JSX.Element[]
  displayPrice?: boolean
}

const BuyButton: React.FC<IBuyButton> = ({
  onClick,
  text,
  children,
  displayPrice,
}) => {
  return (
    <div
      className={`text-white bg-[#d10054]  py-2 inline ${
        displayPrice ? 'px-4 md:hidden mb-4' : 'px-8 md:grow lg:grow-0 mr-2'
      }`}
      onClick={onClick}
    >
      {text}
      {displayPrice ? null : children}
    </div>
  )
}

export default BuyButton
