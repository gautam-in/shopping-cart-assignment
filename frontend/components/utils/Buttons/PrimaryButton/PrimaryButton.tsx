export interface IPrimayButton {
  text: string
  onClick: () => void
}

const PrimayButton: React.FC<IPrimayButton> = ({onClick, text}) => {
  return (
    <button className="text-white bg-[#d10054] px-4 py-2" onClick={onClick}>
      {text}
    </button>
  )
}

export default PrimayButton
