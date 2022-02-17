const SideHandler = ({ current, length, className, handleSlide }) => {
  return (
    <button
      className={className}
      onClick={() => handleSlide(current === length ? 1 : current + 1)}
    >
      Next
    </button>
  );
};

export default SideHandler;
