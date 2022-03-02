import { consts } from "react-elastic-carousel";

const styles = {
  opacity: 0.2,
  height: "35px",
  width: "40px",
  marginTop: "60px",
  backgroundColor: "black",
  color: "white",
  cursor: "pointer",
};

export const Arrow = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? "Prev" : "Next";
  return (
    <button style={styles} onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  );
};
