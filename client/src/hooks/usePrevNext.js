import { useState } from 'react';

export default function usePrevNext(data) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.length - 1));
  };
  return [index, setIndex, handleNext, handlePrev];
}
