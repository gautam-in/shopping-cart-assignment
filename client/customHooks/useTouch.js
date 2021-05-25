import { useState } from "react";

function useTouch() {
  const [startingX, setStartingX] = useState(0);
  const [startingY, setStartingY] = useState(0);
  const [movingX, setMovingX] = useState(0);
  const [movingY, setMovingY] = useState(0);

  function touchStart(evt) {
    setStartingX(evt.touches[0].clientX);
    setStartingY(evt.touches[0].clientY);
    setMovingX(0);
    setMovingY(0);
  }
  function touchMove(evt) {
    setMovingX(evt.touches[0].clientX);
    setMovingY(evt.touches[0].clientY);
  }
  /**
   *
   * @param {function} leftSwipeCallback - Function where touch ended in left
   * @param {function} rightSwipeCallback  - Function where touch ended in right
   */
  function touchEnd(leftSwipeCallback, rightSwipeCallback) {
    if (movingX !== 0 || movingY !== 0) {
      if (startingX + 50 < movingX && rightSwipeCallback) {
        rightSwipeCallback();
        console.log("right");
      } else if (startingX - 50 > movingX && leftSwipeCallback) {
        leftSwipeCallback();
        console.log("left");
      }
      if (startingY + 50 < movingY) {
        console.log("down");
      } else if (startingY - 50 > movingY) {
        console.log("up");
      }
    } else {
      console.log("clicked", startingX, movingX);
    }
  }

  return { touchStart, touchMove, touchEnd };
}

export default useTouch;
